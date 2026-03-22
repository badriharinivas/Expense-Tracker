import React, { useState } from "react";
import "../styles/ExpenseForm.css";

function ExpenseForm({ onAddExpense }) {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [timePreset, setTimePreset] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [useCustomDate, setUseCustomDate] = useState(false);

  const categories = [
    { value: "Food", color: "#FF6B6B" },
    { value: "Travel", color: "#4ECDC4" },
    { value: "Shopping", color: "#95E1D3" },
    { value: "Bills", color: "#F38181" },
    { value: "Entertainment", color: "#AA96DA" },
    { value: "Health", color: "#FCBAD3" },
    { value: "Education", color: "#FFD93D" },
    { value: "Other", color: "#6C5CE7" },
  ];

  const timePresets = [
    { value: "now", label: "Now" },
    { value: "today", label: "Today" },
    { value: "morning", label: "Morning" },
    { value: "afternoon", label: "Afternoon" },
    { value: "evening", label: "Evening" },
    { value: "night", label: "Night" },
  ];

  const getDateRange = (preset) => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    switch(preset) {
      case "now":
        return {
          start: now.toISOString().slice(0, 16).replace('T', ' '),
          end: now.toISOString().slice(0, 16).replace('T', ' '),
          display: `${now.toLocaleDateString()} ${now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`
        };
      case "today":
        return {
          start: today.toISOString().split('T')[0],
          end: today.toISOString().split('T')[0],
          display: today.toLocaleDateString()
        };
      case "morning":
        const morning = new Date(today);
        morning.setHours(6, 0, 0);
        const morningEnd = new Date(today);
        morningEnd.setHours(12, 0, 0);
        return {
          start: morning.toISOString().slice(0, 16).replace('T', ' '),
          end: morningEnd.toISOString().slice(0, 16).replace('T', ' '),
          display: `${today.toLocaleDateString()} Morning (6AM-12PM)`
        };
      case "afternoon":
        const afternoon = new Date(today);
        afternoon.setHours(12, 0, 0);
        const afternoonEnd = new Date(today);
        afternoonEnd.setHours(17, 0, 0);
        return {
          start: afternoon.toISOString().slice(0, 16).replace('T', ' '),
          end: afternoonEnd.toISOString().slice(0, 16).replace('T', ' '),
          display: `${today.toLocaleDateString()} Afternoon (12PM-5PM)`
        };
      case "evening":
        const evening = new Date(today);
        evening.setHours(17, 0, 0);
        const eveningEnd = new Date(today);
        eveningEnd.setHours(20, 0, 0);
        return {
          start: evening.toISOString().slice(0, 16).replace('T', ' '),
          end: eveningEnd.toISOString().slice(0, 16).replace('T', ' '),
          display: `${today.toLocaleDateString()} Evening (5PM-8PM)`
        };
      case "night":
        const night = new Date(today);
        night.setHours(20, 0, 0);
        const nightEnd = new Date(today);
        nightEnd.setHours(23, 59, 59);
        return {
          start: night.toISOString().slice(0, 16).replace('T', ' '),
          end: nightEnd.toISOString().slice(0, 16).replace('T', ' '),
          display: `${today.toLocaleDateString()} Night (8PM-12AM)`
        };
      default:
        return null;
    }
  };

  const handlePresetClick = (preset) => {
    setTimePreset(preset);
    setUseCustomDate(false);
    setStartDate("");
    setEndDate("");
  };

  const handleCustomDateToggle = () => {
    setUseCustomDate(true);
    setTimePreset("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if using preset or custom dates
    if (!amount || !category) {
      alert("Please fill Amount and Category");
      return;
    }

    if (!useCustomDate && !timePreset) {
      alert("Please select a time preset or use custom dates");
      return;
    }

    if (useCustomDate && (!startDate || !endDate)) {
      alert("Please fill both start and end dates");
      return;
    }

    let dateRange;
    let finalStartDate;
    let finalEndDate;

    if (useCustomDate) {
      // Use custom dates
      dateRange = `${startDate} → ${endDate}`;
      finalStartDate = startDate;
      finalEndDate = endDate;
    } else {
      // Use preset
      const dateInfo = getDateRange(timePreset);
      dateRange = dateInfo.display;
      finalStartDate = dateInfo.start;
      finalEndDate = dateInfo.end;
    }

    const newExpense = {
      id: Date.now(),
      amount: Math.round(parseFloat(amount) * 100) / 100, // Round to 2 decimal places to avoid floating-point issues
      category,
      description: description || "No description",
      startDate: finalStartDate,
      endDate: finalEndDate,
      dateRange,
    };

    onAddExpense(newExpense);
    setAmount("");
    setCategory("");
    setDescription("");
    setTimePreset("");
    setStartDate("");
    setEndDate("");
    setUseCustomDate(false);
  };

  return (
    <div className="expense-form-container">
      <div className="form-header">
        <h2>Add New Expense</h2>
        <p className="form-subtitle">Track your spending easily</p>
      </div>

      <form onSubmit={handleSubmit} className="expense-form">
        {/* Amount Input */}
        <div className="form-group amount-group">
          <label htmlFor="amount">Amount</label>
          <div className="input-wrapper">
            <span className="currency-symbol">₹</span>
            <input
              id="amount"
              type="number"
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              step="0.01"
              min="0"
            />
          </div>
        </div>

        {/* Category Selection */}
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <div className="category-grid">
            {categories.map((cat) => (
              <button
                key={cat.value}
                type="button"
                className={`category-btn ${category === cat.value ? "active" : ""}`}
                onClick={() => setCategory(cat.value)}
                style={{
                  borderColor: category === cat.value ? cat.color : "#e0e0e0",
                  backgroundColor: category === cat.value ? `${cat.color}15` : "white",
                }}
              >
                <span className="cat-name">{cat.value}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Time Presets */}
        <div className="form-group">
          <label htmlFor="timePreset">When</label>
          <div className="time-preset-grid">
            {timePresets.map((preset) => (
              <button
                key={preset.value}
                type="button"
                className={`time-preset-btn ${timePreset === preset.value ? "active" : ""}`}
                onClick={() => handlePresetClick(preset.value)}
              >
                {preset.label}
              </button>
            ))}
          </div>
          <button
            type="button"
            className={`custom-date-toggle ${useCustomDate ? "active" : ""}`}
            onClick={handleCustomDateToggle}
          >
            Custom Dates
          </button>
        </div>

        {/* Custom Date Range - Show only when custom is selected */}
        {useCustomDate && (
          <div className="date-range-group">
            <div className="form-group">
              <label htmlFor="startDate">Start Date</label>
              <input
                id="startDate"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="endDate">End Date</label>
              <input
                id="endDate"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </div>
        )}

        {/* Description Input */}
        <div className="form-group">
          <label htmlFor="description">
            Description <span className="optional-label">(Optional)</span>
          </label>
          <input
            id="description"
            type="text"
            placeholder="What did you spend on?"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <button type="submit" className="submit-btn">
          Add Expense
        </button>
      </form>
    </div>
  );
}

export default ExpenseForm;
