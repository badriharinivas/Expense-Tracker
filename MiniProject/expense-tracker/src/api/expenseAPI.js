// API service for expense tracker
// Using async/await patterns from 12092025/asyncexample.js

const API_URL = "http://localhost:5000/api";

// Fetch all expenses from backend
export async function fetchExpenses() {
  try {
    const response = await fetch(`${API_URL}/expenses`);
    if (!response.ok) {
      throw new Error("Failed to fetch expenses");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching expenses:", error);
    throw error;
  }
}

// Add new expense to backend
export async function addExpense(expense) {
  try {
    const response = await fetch(`${API_URL}/expenses`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(expense),
    });

    if (!response.ok) {
      throw new Error("Failed to add expense");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error adding expense:", error);
    throw error;
  }
}

// Update expense in backend
export async function updateExpense(id, expense) {
  try {
    const response = await fetch(`${API_URL}/expenses/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(expense),
    });

    if (!response.ok) {
      throw new Error("Failed to update expense");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating expense:", error);
    throw error;
  }
}

// Delete expense from backend
export async function deleteExpense(id) {
  try {
    const response = await fetch(`${API_URL}/expenses/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete expense");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error deleting expense:", error);
    throw error;
  }
}

// Fetch budget from backend
export async function fetchBudget() {
  try {
    const response = await fetch(`${API_URL}/budget`);
    if (!response.ok) {
      throw new Error("Failed to fetch budget");
    }
    const data = await response.json();
    return data.budget;
  } catch (error) {
    console.error("Error fetching budget:", error);
    return 20000; // Default budget
  }
}

// Set budget in backend
export async function setBudget(amount) {
  try {
    const response = await fetch(`${API_URL}/budget`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount }),
    });

    if (!response.ok) {
      throw new Error("Failed to set budget");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error setting budget:", error);
    throw error;
  }
}

// Reset all data (expenses and budget) in backend
export async function resetAll() {
  try {
    const response = await fetch(`${API_URL}/reset`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to reset data");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error resetting data:", error);
    throw error;
  }
}
