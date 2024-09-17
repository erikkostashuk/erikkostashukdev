// src/App.js
import React from 'react';
import './App.css'; // We'll create this file for custom styles

function App() {
  return (
    <div className="app">
      <div className="header">
        <h1>Erik Kostashuk</h1>
        <h3>Software Developer</h3>
        <h3>Located in Toronto, Canada 🇨🇦</h3>
      </div>
      <div className="links">
        <a href="https://github.com/erikkostashuk" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/erikkostashuk" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </div>
  );
}

export default App;
