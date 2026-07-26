import React from 'react';

export default function QuickStart() {
  return (
    <div className="card quickstart-card">
      <div className="card-header">
        <h2>Starter Kit Overview</h2>
      </div>
      <div className="quickstart-grid">
        <div className="feature-item">
          <div className="feature-icon">📁</div>
          <h3>Clean Architecture</h3>
          <p>Organized <code>components</code>, <code>pages</code>, and <code>services</code> folders ready for features.</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🌐</div>
          <h3>Axios API Client</h3>
          <p>Configured API service in <code>src/services/api.js</code> pointing to <code>http://localhost:5000/api</code>.</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">⚡</div>
          <h3>Vite + React</h3>
          <p>Fast HMR dev server and optimized modern bundling for hackathons.</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🛡️</div>
          <h3>Error Handling</h3>
          <p>Centralized response interceptors and status display for quick debugging.</p>
        </div>
      </div>
    </div>
  );
}
