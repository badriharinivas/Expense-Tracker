// HomePage - Main expense tracking page
import React from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import Dashboard from "../components/Dashboard";
import ChartView from "../components/ChartView";

function HomePage({ expenses, totalSpent, onAddExpense, onDeleteExpense, useBackend }) {
  return (
    <div>
      <Dashboard totalSpent={totalSpent} useBackend={useBackend} />
      <ExpenseForm onAddExpense={onAddExpense} />
      <ExpenseList expenses={expenses} onDeleteExpense={onDeleteExpense} />
      <ChartView expenses={expenses} />
    </div>
  );
}

export default HomePage;
