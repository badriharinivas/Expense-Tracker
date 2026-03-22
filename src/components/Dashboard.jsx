import React, { useState, useEffect, useRef } from "react";
import * as API from "../api/expenseAPI";
import "../styles/Dashboard.css";

function Dashboard({ totalSpent, useBackend }) {
  // Initialize budget from localStorage to prevent reset on navigation
  const [budget, setBudget] = useState(() => {
    const savedBudget = localStorage.getItem("monthlyBudget");
    return savedBudget ? parseFloat(savedBudget) : 20000;
  });
  const [newBudget, setNewBudget] = useState("");
  const isFirstRender = useRef(true);

  // Load budget - from backend when useBackend changes
  useEffect(() => {
    if (useBackend) {
      loadBudgetFromBackend();
    } else if (!isFirstRender.current) {
      // Only reload from localStorage if not first render
      const savedBudget = localStorage.getItem("monthlyBudget");
      if (savedBudget) setBudget(parseFloat(savedBudget));
    }
    isFirstRender.current = false;
  }, [useBackend]);

  // Load budget from backend (async pattern)
  async function loadBudgetFromBackend() {
    try {
      const budgetAmount = await API.fetchBudget();
      setBudget(budgetAmount);
    } catch (err) {
      console.error("Failed to load budget from backend");
    }
  }

  // Save budget to localStorage when not using backend
  // Skip saving on first render to prevent overwriting saved budget
  useEffect(() => {
    if (!isFirstRender.current && !useBackend) {
      localStorage.setItem("monthlyBudget", budget);
    }
  }, [budget, useBackend]);

  const handleBudgetChange = (e) => {
    setNewBudget(e.target.value);
  };

  const handleSetBudget = async (e) => {
    e.preventDefault();
    if (!newBudget || isNaN(newBudget) || newBudget <= 0) {
      alert("Please enter a valid budget amount");
      return;
    }

    const budgetValue = parseFloat(newBudget);

    if (useBackend) {
      try {
        await API.setBudget(budgetValue);
        setBudget(budgetValue);
      } catch (err) {
        alert("Failed to set budget in backend");
      }
    } else {
      setBudget(budgetValue);
    }

    setNewBudget("");
  };

  const remaining = budget - totalSpent;
  const percentUsed = Math.min((totalSpent / budget) * 100, 100);

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Dashboard Overview</h2>
        <p className="dashboard-subtitle">Track your financial health</p>
      </div>

      {/* Budget Input Section */}
      <form className="budget-form" onSubmit={handleSetBudget}>
        <input
          type="number"
          placeholder="Enter your monthly budget"
          value={newBudget}
          onChange={handleBudgetChange}
        />
        <button type="submit">Set Budget</button>
      </form>

      {/* Stats Cards */}
      <div className="stats-grid">
        <div className="stat-card budget-card">
          <p className="stat-label">Monthly Budget</p>
          <p className="stat-value">₹{budget.toLocaleString()}</p>
        </div>

        <div className="stat-card spent-card">
          <p className="stat-label">Total Spent</p>
          <p className="stat-value">₹{totalSpent.toLocaleString()}</p>
        </div>

        <div className={`stat-card remaining-card ${remaining < 0 ? 'over-budget-card' : ''}`}>
          <p className="stat-label">{remaining < 0 ? 'OVER BUDGET' : 'Remaining'}</p>
          <p className={`stat-value ${remaining < 0 ? 'danger-glow' : ''}`} style={{color: remaining < 0 ? '#e74c3c' : '#2ecc71'}}>
            ₹{Math.abs(remaining).toLocaleString()}
          </p>
        </div>
      </div>

      {/* Progress Section */}
      <div className="progress-section">
        <div className="progress-header">
          <span className="progress-label">Budget Usage</span>
          <span className={`progress-percentage ${percentUsed >= 90 ? 'danger' : ''}`}>
            {Math.round(percentUsed)}%
          </span>
        </div>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${percentUsed}%`,
              backgroundColor:
                percentUsed > 90 ? "#e74c3c" : percentUsed > 70 ? "#f39c12" : "#2ecc71",
            }}
          ></div>
        </div>
        <div className="progress-markers">
          <span>0%</span>
          <span>50%</span>
          <span>100%</span>
        </div>
      </div>

      {remaining < 0 && (
        <div className="warning-banner">
          You have exceeded your monthly budget by ₹{Math.abs(remaining).toLocaleString()}!
        </div>
      )}
    </div>
  );
}

export default Dashboard;
