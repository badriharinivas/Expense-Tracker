// ReportsPage - Detailed analytics and reports
import React from "react";
import ChartView from "../components/ChartView";
import "../styles/ReportsPage.css";

function ReportsPage({ expenses, totalSpent }) {
  // Calculate statistics
  const categories = [...new Set(expenses.map(exp => exp.category))];
  const categoryStats = categories.map(cat => {
    const categoryExpenses = expenses.filter(exp => exp.category === cat);
    const total = categoryExpenses.reduce((sum, exp) => sum + exp.amount, 0);
    const count = categoryExpenses.length;
    return { category: cat, total, count, average: total / count };
  });

  return (
    <div className="reports-page">
      <h2>Detailed Reports</h2>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Expenses</h3>
          <p className="stat-value">₹{totalSpent}</p>
        </div>
        <div className="stat-card">
          <h3>Total Transactions</h3>
          <p className="stat-value">{expenses.length}</p>
        </div>
        <div className="stat-card">
          <h3>Categories</h3>
          <p className="stat-value">{categories.length}</p>
        </div>
        <div className="stat-card">
          <h3>Average per Transaction</h3>
          <p className="stat-value">
            ₹{expenses.length > 0 ? (totalSpent / expenses.length).toFixed(2) : 0}
          </p>
        </div>
      </div>

      <h3>Category Breakdown</h3>
      <table className="category-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Total Spent</th>
            <th>Transactions</th>
            <th>Average</th>
          </tr>
        </thead>
        <tbody>
          {categoryStats.map((stat, index) => (
            <tr key={index}>
              <td>{stat.category}</td>
              <td>₹{stat.total.toFixed(2)}</td>
              <td>{stat.count}</td>
              <td>₹{stat.average.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Visual Analytics</h3>
      <ChartView expenses={expenses} />
    </div>
  );
}

export default ReportsPage;
