// AboutPage - Information about the application
import React from "react";
import "../styles/AboutPage.css";

function AboutPage() {
  return (
    <div className="about-page">
      <h2>About FinTrack</h2>
      <p className="about-intro">
        FinTrack is a comprehensive expense tracking application built with modern web technologies.
      </p>

      <div className="tech-section">
        <h3>Technologies Used</h3>
        <div className="tech-grid">
          <div className="tech-card">
            <h4>Frontend</h4>
            <ul>
              <li>React 19.2</li>
              <li>React Router DOM</li>
              <li>Recharts (Visualization)</li>
            </ul>
          </div>
          <div className="tech-card">
            <h4>Backend</h4>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>CORS</li>
            </ul>
          </div>
          <div className="tech-card">
            <h4>React Concepts</h4>
            <ul>
              <li>useState Hook</li>
              <li>useEffect Hook</li>
              <li>useContext Hook</li>
              <li>useRef Hook</li>
              <li>Component Composition</li>
              <li>Async/Await Patterns</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="features-section">
        <h3>Features</h3>
        <ul className="features-list">
          <li>Add, view, and delete expenses</li>
          <li>Set and track monthly budget</li>
          <li>Visual analytics with charts</li>
          <li>Category-wise expense tracking</li>
          <li>Date range support</li>
          <li>Dual storage: LocalStorage and MongoDB</li>
          <li>Responsive design</li>
          <li>Real-time budget progress tracking</li>
        </ul>
      </div>

      <div className="learning-section">
        <h3>Course Topics Covered</h3>
        <p>This project demonstrates all concepts learned in the Web Technologies course:</p>
        <ul className="learning-list">
          <li>React Components & Props</li>
          <li>State Management with Hooks</li>
          <li>Event Handling & Forms</li>
          <li>Conditional Rendering</li>
          <li>List Rendering with map()</li>
          <li>React Router for Navigation</li>
          <li>Async Data Fetching</li>
          <li>REST API Development</li>
          <li>Database Operations (CRUD)</li>
          <li>Express.js Middleware</li>
          <li>MongoDB Integration</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutPage;
