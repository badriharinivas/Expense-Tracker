# Quick Start Guide - FinTrack Expense Tracker

## For Demonstration/Testing (No Backend Required)

### Option 1: Run with LocalStorage Only
This is the fastest way to test the application without setting up MongoDB.

1. **Install dependencies**:
   ```bash
   cd expense-tracker
   npm install
   ```

2. **Start the React app**:
   ```bash
   npm start
   ```

3. **Open browser**: Application opens at `http://localhost:3000`

4. **Start using**:
   - Add expenses using the form
   - Set your monthly budget
   - View analytics on the Reports page
   - All data is saved in your browser's localStorage

**Note**: Data persists only in your browser. Clearing browser data will delete all expenses.

---

## For Full-Stack Experience (With Backend)

### Prerequisites Check
Before starting, ensure you have:
- ✅ Node.js installed (`node --version` should show v14+)
- ✅ MongoDB installed (Community Edition)
- ✅ MongoDB data directory created at `C:\data\db` (Windows) or `/data/db` (Mac/Linux)

### Step-by-Step Setup

#### 1. Install Dependencies
```bash
cd expense-tracker
npm install
```

#### 2. Start MongoDB

**Windows**:
```bash
"C:\Program Files\MongoDB\Server\7.0\bin\mongod.exe" --dbpath="C:\data\db"
```

**Mac**:
```bash
brew services start mongodb-community
```

**Linux**:
```bash
sudo systemctl start mongod
```

**Verify MongoDB is running**: You should see "Waiting for connections" in the terminal

#### 3. Start Backend Server
Open a **new terminal** (keep MongoDB running):
```bash
cd expense-tracker
npm run server
```

You should see:
```
Connected to MongoDB successfully!
Server running on port 5000
```

#### 4. Start Frontend
Open **another new terminal**:
```bash
cd expense-tracker
npm start
```

Browser opens automatically at `http://localhost:3000`

#### 5. Enable Backend in App
1. In the application, look for the checkbox: **"Use Backend (MongoDB)"**
2. Check the box
3. All data will now be stored in MongoDB!

---

## Troubleshooting

### "Backend offline - using local storage" warning
**Cause**: Backend server is not running or MongoDB is not connected
**Solution**:
1. Check MongoDB is running (see Step 2 above)
2. Check backend server is running (`npm run server`)
3. Verify no errors in backend terminal

### Port 3000 already in use
**Solution**:
```bash
# Windows
taskkill /F /IM node.exe

# Mac/Linux
lsof -ti:3000 | xargs kill
```

### Port 5000 already in use
**Solution**: Edit `server/server.js` line 147 and change port to 5001:
```javascript
app.listen(5001, () => {
  console.log("Server running on port 5001");
});
```

### MongoDB connection error
**Solution**:
1. Ensure MongoDB service is running
2. Create data directory: `mkdir C:\data\db` (Windows) or `sudo mkdir -p /data/db` (Mac/Linux)
3. Give permissions: `sudo chown -R $USER /data/db` (Mac/Linux)

### Dependencies not installing
**Solution**:
```bash
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

---

## Testing the Application

### Test Scenarios

#### 1. Add Expense
- Amount: `500`
- Category: `Food`
- Description: `Groceries`
- Start Date: `2025-11-01`
- End Date: `2025-11-07`
- Click "Add Expense"

#### 2. Set Budget
- Enter `20000` in budget field
- Click "Set Budget"
- Watch progress bar update

#### 3. View Reports
- Click "Reports" in navigation
- See category breakdown
- View charts

#### 4. Toggle Storage Mode
- Uncheck "Use Backend (MongoDB)" - data loads from localStorage
- Check it again - data loads from MongoDB
- Test seamless switching

---

## Development Commands

```bash
# Start frontend only
npm start

# Start backend only
npm run server

# Build for production
npm run build

# Run tests
npm test
```

---

## Project Structure Overview

```
expense-tracker/
├── src/
│   ├── components/       # UI components (Navbar, Dashboard, etc.)
│   ├── pages/            # Page components (Home, Reports, About)
│   ├── api/              # Backend API communication
│   └── styles/           # CSS files
├── server/
│   └── server.js         # Express backend server
└── public/               # Static files
```

---

## Quick Feature Tour

1. **Home Page** (`/`): Main dashboard with expense form
2. **Reports Page** (`/reports`): Detailed analytics and charts
3. **About Page** (`/about`): Project information and tech stack

---

## Need Help?

- Check [README.md](README.md) for detailed documentation
- Check [COURSE_REFERENCES.md](COURSE_REFERENCES.md) to see which course concepts are used where
- Review error messages in browser console (F12)
- Check terminal outputs for backend errors

---

## Success Indicators

✅ MongoDB running: "Waiting for connections" message
✅ Backend running: "Server running on port 5000"
✅ Frontend running: Browser opens to `http://localhost:3000`
✅ Backend connected: No warning banner in app
✅ Data persisting: Refresh page, data remains

Happy Tracking! 💰
