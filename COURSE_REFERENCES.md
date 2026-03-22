# Course References - Concepts Used from Course Materials

This document maps the features in the FinTrack application to specific concepts and examples learned in the course.

## React Concepts

### 1. useState Hook
**Learned from**: `08-10-2025/08102025/src/stateEXAMPLE.js`
**Used in**:
- [App.jsx:11-14](src/App.jsx#L11-L14) - Managing expenses, loading, error, useBackend states
- [Dashboard.jsx:5-6](src/components/Dashboard.jsx#L5-L6) - Budget and newBudget state
- [ExpenseForm.jsx:5-9](src/components/ExpenseForm.jsx#L5-L9) - Form input states

### 2. useEffect Hook
**Learned from**: `08-10-2025/08102025/src/effectEXAMPLE.js`
**Used in**:
- [App.jsx:17-27](src/App.jsx#L17-L27) - Loading expenses on mount
- [App.jsx:48-52](src/App.jsx#L48-L52) - Syncing to localStorage
- [Dashboard.jsx:10-17](src/components/Dashboard.jsx#L10-L17) - Loading and saving budget

### 3. React Router
**Learned from**: `10-10-2025/10102025/src/routerEXAMPLE.js`
**Used in**:
- [index.js:3,10-12](src/index.js#L3) - BrowserRouter wrapper
- [App.jsx:2,115-133](src/App.jsx#L2) - Routes and Route components
- [Navbar.jsx:2,15-17](src/components/Navbar.jsx#L2) - Link components for navigation

### 4. Component Composition
**Learned from**: `03-10-2025/03-10-2025/src/CounterApp.js`
**Used in**:
- [App.jsx:95-136](src/App.jsx) - Parent component managing state
- [HomePage.jsx:7-16](src/pages/HomePage.jsx) - Composing multiple components
- All components receive and use props

### 5. Event Handling
**Learned from**: HTML examples in `02092025/event.html`
**Used in**:
- [ExpenseForm.jsx:11-37](src/components/ExpenseForm.jsx#L11-L37) - Form onSubmit handler
- [Dashboard.jsx:19-21,23-31](src/components/Dashboard.jsx#L19-L31) - onChange and onSubmit
- [Navbar.jsx:13-20](src/components/Navbar.jsx#L13-L20) - onClick handler

### 6. Conditional Rendering
**Learned from**: React examples showing ternary operators
**Used in**:
- [App.jsx:84-93](src/App.jsx#L84-L93) - Loading state
- [App.jsx:99-103](src/App.jsx#L99-L103) - Error message display
- [ExpenseList.jsx:8-9](src/components/ExpenseList.jsx#L8-L9) - Empty state message
- [Dashboard.jsx:66-68](src/components/Dashboard.jsx#L66-L68) - Budget warning

### 7. List Rendering with map()
**Learned from**: `03-10-2025/03-10-2025/src/CounterApp.js` (todo list example)
**Used in**:
- [ExpenseList.jsx:22-32](src/components/ExpenseList.jsx#L22-L32) - Mapping expenses to table rows
- [ChartView.jsx:49-51](src/components/ChartView.jsx#L49-L51) - Mapping chart colors
- [ReportsPage.jsx:32-40](src/pages/ReportsPage.jsx#L32-L40) - Category stats table

### 8. Form Handling (Controlled Components)
**Learned from**: `10-10-2025` form examples
**Used in**:
- [ExpenseForm.jsx:4-77](src/components/ExpenseForm.jsx) - All form inputs controlled by state
- [Dashboard.jsx:19-31](src/components/Dashboard.jsx#L19-L31) - Budget input form

## Backend Concepts

### 9. Express.js Server Setup
**Learned from**: `04-11-2025/exp1.js`
**Used in**:
- [server/server.js:4-11](server/server.js#L4-L11) - Express app setup
- [server/server.js:147-149](server/server.js#L147-L149) - Server listening on port

**Code Pattern from Course**:
```javascript
// From exp1.js
const express = require('express');
const app = express();
app.listen(3000, () => console.log("Server running on port 3000"))
```

### 10. Express Routing
**Learned from**: `04-11-2025/exp2.js` (route parameters), `04-11-2025/exp3.js` (query params)
**Used in**:
- [server/server.js:24-34](server/server.js#L24-L34) - GET /api/expenses
- [server/server.js:37-51](server/server.js#L37-L51) - POST /api/expenses
- [server/server.js:54-73](server/server.js#L54-L73) - PUT /api/expenses/:id
- [server/server.js:76-92](server/server.js#L76-L92) - DELETE /api/expenses/:id

**Code Pattern from Course**:
```javascript
// From exp2.js
app.get('/users/:id', (req,res) => {
    res.send(`User Profile for User ID: ${req.params.id}`);
});
```

### 11. Express Middleware
**Learned from**: Express course materials
**Used in**:
- [server/server.js:13-14](server/server.js#L13-L14) - express.json() and cors() middleware

### 12. MongoDB Connection
**Learned from**: `31-10-2025/1.create_db.js`
**Used in**:
- [server/server.js:6-8,16-22](server/server.js#L6-L22) - MongoDB connection setup

**Code Pattern from Course**:
```javascript
// From MongoDB examples
const { MongoClient } = require('mongodb');
const url = "mongodb://127.0.0.1:27017";
MongoClient.connect(url)
  .then(client => {
    console.log("Connected to MongoDB successfully!");
    db = client.db(dbName);
  })
```

### 13. MongoDB CRUD Operations
**Learned from**:
- `31-10-2025/3.insert_one.js` - insertOne
- `31-10-2025/5.find_docs.js` - find
- `31-10-2025/6.update.js` - updateOne
- `31-10-2025/7.delete_one.js` - deleteOne

**Used in**:
- [server/server.js:27-32](server/server.js#L27-L32) - find().toArray()
- [server/server.js:42-50](server/server.js#L42-L50) - insertOne()
- [server/server.js:59-71](server/server.js#L59-L71) - updateOne()
- [server/server.js:81-90](server/server.js#L81-L90) - deleteOne()

## JavaScript/Async Concepts

### 14. Async/Await Pattern
**Learned from**: `12092025/asyncexample.js`
**Used in**:
- [expenseAPI.js:7-16](src/api/expenseAPI.js#L7-L16) - fetchExpenses function
- [expenseAPI.js:19-37](src/api/expenseAPI.js#L19-L37) - addExpense function
- [App.jsx:30-44](src/App.jsx#L30-L44) - loadExpensesFromBackend function
- [Dashboard.jsx:20-27](src/components/Dashboard.jsx#L20-L27) - loadBudgetFromBackend

**Code Pattern from Course**:
```javascript
// From asyncexample.js
async function fetchData() {
  console.log("Fetching data...");
  const data = await getData();
  console.log(data);
}
```

### 15. Array Methods
**Learned from**: General JavaScript course materials
**Used in**:
- [App.jsx:81](src/App.jsx#L81) - reduce() for calculating total
- [App.jsx:77](src/App.jsx#L77) - filter() for deleting expense
- [ExpenseList.jsx:22](src/components/ExpenseList.jsx#L22) - map() for rendering list
- [ChartView.jsx:15-20](src/components/ChartView.jsx#L15-L20) - reduce() for grouping data

## HTML/CSS Concepts

### 16. Flexbox Layout
**Learned from**: `07082025-trial-website/styles.css`
**Used in**:
- [Navbar.css:1-43](src/styles/Navbar.css) - Navbar layout with flexbox
- [Dashboard.css:14-17](src/styles/Dashboard.css) - Form layout
- [ExpenseForm.css:9-12](src/styles/ExpenseForm.css) - Form inputs layout

### 17. CSS Grid
**Learned from**: HTML/CSS examples with grid layouts
**Used in**:
- [ReportsPage.css:9-13](src/styles/ReportsPage.css) - Stats grid layout
- [AboutPage.css:29-32](src/styles/AboutPage.css) - Tech cards grid

### 18. CSS Transitions and Animations
**Learned from**: `07082025/styles.css` - Animations and transitions
**Used in**:
- [Navbar.css:32-36](src/styles/Navbar.css) - Button hover transition
- [Dashboard.css:51](src/styles/Dashboard.css) - Progress bar transition
- [ExpenseForm.css:29](src/styles/ExpenseForm.css) - Button hover effect

### 19. Table Styling
**Learned from**: `simple_table.html`
**Used in**:
- [ExpenseList.css:8-27](src/styles/ExpenseList.css) - Expense table styling
- [ReportsPage.css:26-44](src/styles/ReportsPage.css) - Category breakdown table

### 20. Form Styling
**Learned from**: `simple_form.html` and `12082025/styles.css`
**Used in**:
- [ExpenseForm.css:1-34](src/styles/ExpenseForm.css) - Complete form styling
- [Dashboard.css:14-39](src/styles/Dashboard.css) - Budget form styling

## File Organization

### 21. Component-Based Architecture
**Pattern Learned**: Separation of concerns in React projects
**Applied**:
```
src/
  ├── components/    # Reusable UI components
  ├── pages/         # Page components for routing
  ├── styles/        # CSS files matching components
  ├── api/           # API service layer
  └── App.jsx        # Main app component
```

## Summary

**Total Course Concepts Applied**: 21+

This project successfully demonstrates:
- ✅ All React hooks learned (useState, useEffect)
- ✅ React Router for navigation
- ✅ Express.js server and routing
- ✅ MongoDB database operations (all CRUD)
- ✅ Async/await patterns
- ✅ Modern CSS layouts (Flexbox, Grid)
- ✅ Form handling and validation
- ✅ Component composition and props
- ✅ Event handling
- ✅ Conditional rendering
- ✅ List rendering with keys
- ✅ API integration
- ✅ Error handling
- ✅ Loading states
- ✅ Responsive design

The application is built entirely using patterns and concepts taught in the course, with each feature traceable back to specific lessons and examples.
