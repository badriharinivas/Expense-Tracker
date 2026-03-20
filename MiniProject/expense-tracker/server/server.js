// Backend server for Expense Tracker
// Based on Express.js examples from 04-11-2025 folder

const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const cors = require('cors');
const app = express();

// MongoDB connection details
const url = "mongodb://127.0.0.1:27017";
const dbName = "expenseTrackerDB";
let db;

// Middleware - similar to examples learned
app.use(express.json()); // Parse JSON bodies
app.use(cors()); // Enable CORS for React frontend

// Connect to MongoDB
MongoClient.connect(url)
  .then(client => {
    console.log("Connected to MongoDB successfully!");
    db = client.db(dbName);
  })
  .catch(err => {
    console.error("MongoDB connection error:", err);
  });

// GET route - Fetch all expenses
// Pattern from exp1.js and 5.find_docs.js
app.get('/api/expenses', (req, res) => {
  const collection = db.collection("expenses");

  collection.find({}).toArray()
    .then(docs => {
      res.json(docs);
    })
    .catch(err => {
      console.error("Error fetching expenses:", err);
      res.status(500).json({ error: "Failed to fetch expenses" });
    });
});

// POST route - Add new expense
// Pattern from exp1.js and 3.insert_one.js
app.post('/api/expenses', (req, res) => {
  const collection = db.collection("expenses");
  const newExpense = req.body;

  collection.insertOne(newExpense)
    .then(result => {
      console.log("Expense added:", result.insertedId);
      res.json({
        success: true,
        id: result.insertedId,
        message: "Expense added successfully"
      });
    })
    .catch(err => {
      console.error("Error adding expense:", err);
      res.status(500).json({ error: "Failed to add expense" });
    });
});

// PUT route - Update expense
// Pattern from 6.update.js
app.put('/api/expenses/:id', (req, res) => {
  const collection = db.collection("expenses");
  const expenseId = parseInt(req.params.id);
  const updatedExpense = req.body;

  collection.updateOne(
    { id: expenseId },
    { $set: updatedExpense }
  )
    .then(result => {
      if (result.matchedCount === 0) {
        res.status(404).json({ error: "Expense not found" });
      } else {
        console.log("Expense updated:", expenseId);
        res.json({ success: true, message: "Expense updated successfully" });
      }
    })
    .catch(err => {
      console.error("Error updating expense:", err);
      res.status(500).json({ error: "Failed to update expense" });
    });
});

// DELETE route - Delete expense
// Pattern from 7.delete_one.js
app.delete('/api/expenses/:id', (req, res) => {
  const collection = db.collection("expenses");
  const expenseId = parseInt(req.params.id);

  collection.deleteOne({ id: expenseId })
    .then(result => {
      if (result.deletedCount === 0) {
        res.status(404).json({ error: "Expense not found" });
      } else {
        console.log("Expense deleted:", expenseId);
        res.json({ success: true, message: "Expense deleted successfully" });
      }
    })
    .catch(err => {
      console.error("Error deleting expense:", err);
      res.status(500).json({ error: "Failed to delete expense" });
    });
});

// GET route - Get budget
app.get('/api/budget', (req, res) => {
  const collection = db.collection("budget");

  collection.findOne({})
    .then(doc => {
      if (doc) {
        res.json({ budget: doc.amount });
      } else {
        res.json({ budget: 20000 }); // Default budget
      }
    })
    .catch(err => {
      console.error("Error fetching budget:", err);
      res.status(500).json({ error: "Failed to fetch budget" });
    });
});

// POST route - Set budget
app.post('/api/budget', (req, res) => {
  const collection = db.collection("budget");
  const budgetAmount = req.body.amount;

  collection.updateOne(
    {},
    { $set: { amount: budgetAmount } },
    { upsert: true }
  )
    .then(result => {
      console.log("Budget set:", budgetAmount);
      res.json({ success: true, message: "Budget set successfully" });
    })
    .catch(err => {
      console.error("Error setting budget:", err);
      res.status(500).json({ error: "Failed to set budget" });
    });
});

// DELETE route - Reset all data (clear all expenses and budget)
// Pattern from 7.delete_one.js using deleteMany
app.delete('/api/reset', (req, res) => {
  const expensesCollection = db.collection("expenses");
  const budgetCollection = db.collection("budget");

  // Delete all expenses
  expensesCollection.deleteMany({})
    .then(result => {
      console.log(`Deleted ${result.deletedCount} expenses`);
      // Delete budget
      return budgetCollection.deleteMany({});
    })
    .then(result => {
      console.log("All data reset successfully");
      res.json({
        success: true,
        message: "All data has been reset successfully"
      });
    })
    .catch(err => {
      console.error("Error resetting data:", err);
      res.status(500).json({ error: "Failed to reset data" });
    });
});

// Start server - pattern from all Express examples
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
