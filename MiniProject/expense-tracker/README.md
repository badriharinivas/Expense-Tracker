# FinTrack - Expense Tracker Application

A full-stack expense tracking web application built with React, Express.js, and MongoDB. This project demonstrates comprehensive web development concepts learned in the Web Technologies course.

## Features

- **Expense Management**: Add, view, and delete expenses with category and date range support
- **Budget Tracking**: Set monthly budgets and track spending with visual progress indicators
- **Analytics & Reports**: View detailed spending insights with pie charts and bar charts
- **Dual Storage**: Choose between localStorage (client-side) or MongoDB (server-side) for data persistence
- **Multi-Page Navigation**: React Router for seamless page transitions
- **Responsive Design**: Works on desktop and mobile devices
- **Real-Time Updates**: Async data fetching with loading states

## Technologies Used

### Frontend
- **React 19.2** - Component-based UI library
- **React Router DOM** - Client-side routing
- **Recharts** - Data visualization library
- **React Icons** - Icon components

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **CORS** - Cross-origin resource sharing

## React Concepts Demonstrated

- ✓ **useState Hook** - State management for expenses, budget, loading states
- ✓ **useEffect Hook** - Side effects for data fetching and localStorage sync
- ✓ **Async/Await** - Asynchronous API calls
- ✓ **Component Composition** - Reusable components (Navbar, Dashboard, ExpenseForm, etc.)
- ✓ **Props** - Parent-child data flow
- ✓ **Event Handling** - onClick, onChange, onSubmit events
- ✓ **Conditional Rendering** - Loading states, error messages, empty states
- ✓ **List Rendering** - Array.map() with keys for expense lists
- ✓ **Form Handling** - Controlled components for inputs
- ✓ **React Router** - Multi-page navigation

## Backend Concepts Demonstrated

- ✓ **Express.js Server** - REST API setup
- ✓ **Routing** - GET, POST, PUT, DELETE endpoints
- ✓ **Middleware** - express.json(), cors()
- ✓ **MongoDB Operations** - CRUD operations (Create, Read, Update, Delete)
- ✓ **Error Handling** - Try-catch blocks, HTTP status codes
- ✓ **Async Operations** - Promise-based database operations

## Project Structure

```
expense-tracker/
├── public/
│   └── index.html
├── server/
│   └── server.js          # Express backend server
├── src/
│   ├── api/
│   │   └── expenseAPI.js  # API service functions
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Dashboard.jsx
│   │   ├── ExpenseForm.jsx
│   │   ├── ExpenseList.jsx
│   │   └── ChartView.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── ReportsPage.jsx
│   │   └── AboutPage.jsx
│   ├── styles/
│   │   ├── App.css
│   │   ├── Navbar.css
│   │   ├── Dashboard.css
│   │   ├── ExpenseForm.css
│   │   ├── ExpenseList.css
│   │   ├── ChartView.css
│   │   ├── ReportsPage.css
│   │   └── AboutPage.css
│   ├── App.jsx
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (Community Edition)
- npm (comes with Node.js)

### Step 1: Install Dependencies
```bash
cd expense-tracker
npm install
```

### Step 2: Start MongoDB
```bash
# Windows
"C:\\Program Files\\MongoDB\\Server\\<version>\\bin\\mongod.exe" --dbpath="C:\\data\\db"

# Mac/Linux
mongod --dbpath=/data/db
```

### Step 3: Start Backend Server
Open a new terminal and run:
```bash
npm run server
```
Server will run on `http://localhost:5000`

### Step 4: Start React Frontend
Open another terminal and run:
```bash
npm start
```
Frontend will open automatically at `http://localhost:3000`

## Usage

### Using LocalStorage (Default)
1. Open the application in your browser
2. Add expenses using the form
3. Data is automatically saved in browser localStorage
4. View analytics on the Reports page

### Using MongoDB Backend
1. Ensure MongoDB is running
2. Start the backend server (`npm run server`)
3. In the application, check the "Use Backend (MongoDB)" checkbox
4. All data will now be stored in MongoDB database

## API Endpoints

### Expenses
- `GET /api/expenses` - Get all expenses
- `POST /api/expenses` - Add new expense
- `PUT /api/expenses/:id` - Update expense
- `DELETE /api/expenses/:id` - Delete expense

### Budget
- `GET /api/budget` - Get current budget
- `POST /api/budget` - Set new budget

## Course Topics Covered

This project incorporates all major topics from the Web Technologies course:

### HTML/CSS
- Semantic HTML structure
- Flexbox and Grid layouts
- CSS transitions and animations
- Responsive design
- Box shadows and styling

### JavaScript
- ES6+ features (arrow functions, destructuring, async/await)
- Array methods (map, filter, reduce)
- Event handling
- DOM manipulation concepts

### React
- Functional components
- Hooks (useState, useEffect)
- Component lifecycle
- Props and state management
- Conditional rendering
- List rendering with keys
- Form handling
- React Router

### Node.js & Express
- Server setup
- Routing
- Middleware
- Request/Response handling
- Error handling

### MongoDB
- Database connection
- CRUD operations
- Collections management
- Query operations

## Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB service is running
- Check MongoDB is installed correctly
- Verify database path exists

### Port Already in Use
- Frontend (3000): Kill process using `taskkill /F /IM node.exe` (Windows)
- Backend (5000): Change port in `server/server.js`

### Dependencies Not Installing
```bash
rm -rf node_modules package-lock.json
npm install
```

## Future Enhancements

- Edit functionality for expenses
- Recurring expenses
- Export to CSV/PDF
- User authentication
- Multiple budget categories
- Data filtering and search
- Dark mode theme (useContext)

## License

This project is created for educational purposes as part of the Web Technologies course.

## Author

Created as a Mini Project for Web Technologies course - Year 2
