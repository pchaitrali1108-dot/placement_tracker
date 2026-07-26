import React from 'react';

export default function StatusCard({ loading, error, healthData, onRefresh }) {
  const isUp = healthData?.success && healthData?.data?.status === 'UP';

  return (
    <div className="card status-card">
      <div className="card-header">
        <h2>Backend Connection Status</h2>
        <button
          className="btn btn-secondary"
          onClick={onRefresh}
          disabled={loading}
        >
          {loading ? 'Checking...' : '🔄 Refresh Health'}
        </button>
      </div>

      <div className="status-content">
        {loading ? (
          <div className="loading-state">
            <div className="spinner"></div>
            <p>Connecting to http://localhost:5000/api/health...</p>
          </div>
        ) : error ? (
          <div className="error-state">
            <div className="badge badge-error">
              <span className="dot dot-error"></span> Disconnected
            </div>
            <p className="error-message">{error}</p>
            <span className="error-hint">
              Ensure the backend server is running on <code>http://localhost:5000</code>.
            </span>
          </div>
        ) : isUp ? (
          <div className="success-state">
            <div className="status-hero">
              <div className="badge badge-success">
                <span className="dot dot-success pulse"></span> System Online
              </div>
              <p className="status-message">{healthData.data.message}</p>
            </div>
            
            <div className="metrics-grid">
              <div className="metric-box">
                <span className="metric-label">Status Code</span>
                <span className="metric-value code-green">200 OK</span>
              </div>
              <div className="metric-box">
                <span className="metric-label">Service Status</span>
                <span className="metric-value">{healthData.data.status}</span>
              </div>
              <div className="metric-box">
                <span className="metric-label">Uptime</span>
                <span className="metric-value">
                  {healthData.data.uptime ? `${Math.floor(healthData.data.uptime)}s` : 'N/A'}
                </span>
              </div>
              <div className="metric-box">
                <span className="metric-label">Timestamp</span>
                <span className="metric-value">
                  {new Date(healthData.data.timestamp).toLocaleTimeString()}
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className="unknown-state">
            <p>Unexpected response format.</p>
          </div>
        )}
      </div>
    </div>
  );
}
