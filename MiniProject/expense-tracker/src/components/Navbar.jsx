import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar({ onReset }) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="logo">FinTrack</h1>
      </div>

      <div className="navbar-center">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/reports" className="nav-link">Reports</Link>
        <Link to="/about" className="nav-link">About</Link>
      </div>

      <div className="navbar-right">
        <button
          className="reset-btn"
          onClick={() => {
            if (window.confirm("Are you sure you want to reset all data?")) {
              onReset();
            }
          }}
        >
          Reset Data
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
