import React from "react";
import "../styles/ExpenseList.css";

function ExpenseList({ expenses, onDeleteExpense }) {
  const categoryColors = {
    Food: "#FF6B6B",
    Travel: "#4ECDC4",
    Shopping: "#95E1D3",
    Bills: "#F38181",
    Entertainment: "#AA96DA",
    Health: "#FCBAD3",
    Education: "#FFD93D",
    Other: "#6C5CE7",
  };

  return (
    <div className="expense-list-container">
      <div className="list-header">
        <h2>Expense History</h2>
        <p className="total-count">{expenses.length} {expenses.length === 1 ? 'expense' : 'expenses'}</p>
      </div>

      {expenses.length === 0 ? (
        <div className="empty-state">
          <p className="empty-message">No expenses added yet</p>
          <p className="empty-hint">Start tracking by adding your first expense above</p>
        </div>
      ) : (
        <div className="expense-cards">
          {expenses.map((exp) => (
            <div key={exp.id} className="expense-card">
              <div className="card-header">
                <div
                  className="category-badge"
                  style={{ backgroundColor: `${categoryColors[exp.category] || '#6C5CE7'}20`,
                           borderColor: categoryColors[exp.category] || '#6C5CE7' }}
                >
                  {exp.category}
                </div>
                <div className="card-amount">₹{exp.amount.toLocaleString()}</div>
              </div>

              <div className="card-body">
                <p className="expense-description">{exp.description}</p>
                <div className="expense-meta">
                  <span className="date-range">{exp.dateRange}</span>
                </div>
              </div>

              <div className="card-footer">
                <button
                  className="delete-btn"
                  onClick={() => onDeleteExpense(exp.id)}
                  aria-label="Delete expense"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ExpenseList;
