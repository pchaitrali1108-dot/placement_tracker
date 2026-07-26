import React from 'react';

export default function ResponseViewer({ responseData }) {
  return (
    <div className="card response-card">
      <div className="card-header">
        <h2>Live API Response</h2>
        <span className="endpoint-tag">GET /api/health</span>
      </div>
      <div className="json-container">
        <pre className="json-code">
          {responseData
            ? JSON.stringify(responseData, null, 2)
            : '// Response data will appear here once requested'}
        </pre>
      </div>
    </div>
  );
}
