import React from 'react';

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-group">
          <div className="logo-icon">⚡</div>
          <div>
            <h1 className="logo-title">Hackathon Starter</h1>
            <p className="logo-subtitle">Full-Stack Node.js & React Boilerplate</p>
          </div>
        </div>
        <div className="header-badge">
          <span className="dot pulse"></span>
          <span>Vite + Express</span>
        </div>
      </div>
    </header>
  );
}
