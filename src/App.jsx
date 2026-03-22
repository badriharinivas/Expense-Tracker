import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ReportsPage from "./pages/ReportsPage";
import AboutPage from "./pages/AboutPage";
import * as API from "./api/expenseAPI";
import "./styles/App.css";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [useBackend, setUseBackend] = useState(false);

  // Load data - with backend support
  useEffect(() => {
    if (useBackend) {
      // Try to fetch from backend
      loadExpensesFromBackend();
    } else {
      // Load from localStorage (original behavior)
      const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
      setExpenses(savedExpenses);
      setLoading(false);
    }
  }, [useBackend]);

  // Function to load expenses from backend (async/await pattern)
  async function loadExpensesFromBackend() {
    try {
      setLoading(true);
      const data = await API.fetchExpenses();
      setExpenses(data);
      setError(null);
    } catch (err) {
      console.error("Backend not available, using localStorage");
      setError("Backend offline - using local storage");
      setUseBackend(false);
      const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
      setExpenses(savedExpenses);
    } finally {
      setLoading(false);
    }
  }

  // Save data to localStorage when not using backend
  useEffect(() => {
    if (!useBackend) {
      localStorage.setItem("expenses", JSON.stringify(expenses));
    }
  }, [expenses, useBackend]);

  const addExpense = async (expense) => {
    if (useBackend) {
      try {
        await API.addExpense(expense);
        await loadExpensesFromBackend();
      } catch (err) {
        alert("Failed to add expense to backend");
      }
    } else {
      setExpenses([expense, ...expenses]);
    }
  };

  const deleteExpense = async (id) => {
    if (useBackend) {
      try {
        await API.deleteExpense(id);
        await loadExpensesFromBackend();
      } catch (err) {
        alert("Failed to delete expense from backend");
      }
    } else {
      const updated = expenses.filter((exp) => exp.id !== id);
      setExpenses(updated);
    }
  };

  // Round to 2 decimal places to avoid floating-point precision issues
  const totalSpent = Math.round(expenses.reduce((sum, e) => sum + e.amount, 0) * 100) / 100;

  // Handle reset data - clear localStorage and/or MongoDB
  const handleReset = async () => {
    if (useBackend) {
      try {
        await API.resetAll();
        console.log("MongoDB data cleared");
      } catch (err) {
        console.error("Failed to reset backend data:", err);
      }
    }
    // Always clear localStorage
    localStorage.clear();
    window.location.reload();
  };

  // Loading state - conditional rendering
  if (loading) {
    return (
      <div className="app-container">
        <Navbar onReset={handleReset} />
        <div className="main-content">
          <p style={{ textAlign: "center", padding: "50px" }}>Loading expenses...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="app-container">
      <Navbar onReset={handleReset} />
      <div className="main-content">
        {error && (
          <div style={{ backgroundColor: "#fff3cd", padding: "10px", borderRadius: "5px", marginBottom: "10px" }}>
            ⚠️ {error}
          </div>
        )}
        <div style={{ marginBottom: "10px", textAlign: "right" }}>
          <label>
            <input
              type="checkbox"
              checked={useBackend}
              onChange={(e) => setUseBackend(e.target.checked)}
            />
            {" "}Use Backend (MongoDB)
          </label>
        </div>

        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                expenses={expenses}
                totalSpent={totalSpent}
                onAddExpense={addExpense}
                onDeleteExpense={deleteExpense}
                useBackend={useBackend}
              />
            }
          />
          <Route
            path="/reports"
            element={<ReportsPage expenses={expenses} totalSpent={totalSpent} />}
          />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
