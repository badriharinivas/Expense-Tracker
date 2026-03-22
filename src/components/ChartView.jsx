import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import "../styles/ChartView.css";

function ChartView({ expenses }) {
  if (expenses.length === 0) {
    return (
      <div className="chart-container">
        <p className="empty">No data yet — add some expenses to see insights!</p>
      </div>
    );
  }

  // Group by category (for Pie)
  const categoryData = expenses.reduce((acc, exp) => {
    const existing = acc.find((item) => item.name === exp.category);
    if (existing) existing.value += exp.amount;
    else acc.push({ name: exp.category, value: exp.amount });
    return acc;
  }, []);

  // Group by date (for Bar) - FIXED: use startDate instead of exp.date
  const dateData = expenses.reduce((acc, exp) => {
    const existing = acc.find((item) => item.date === exp.startDate);
    if (existing) existing.amount += exp.amount;
    else acc.push({ date: exp.startDate, amount: exp.amount });
    return acc;
  }, []);

  const COLORS = ["#3498db", "#e67e22", "#2ecc71", "#9b59b6", "#f1c40f", "#e74c3c"];

  return (
    <div className="chart-container">
      <h2>Spending Insights</h2>

      <div className="charts-grid">
        <div className="chart-item">
          <h3>By Category</h3>
          <PieChart width={300} height={300}>
            <Pie
              data={categoryData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {categoryData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>

        <div className="chart-item">
          <h3>By Date</h3>
          <BarChart width={350} height={300} data={dateData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="amount" fill="#2ecc71" />
          </BarChart>
        </div>
      </div>
    </div>
  );
}

export default ChartView;
