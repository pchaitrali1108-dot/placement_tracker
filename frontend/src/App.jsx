import React, { useState, useEffect } from 'react';
import api from './services/api';
import './index.css';

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchHealth = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get('/health');
      setData(response.data);
    } catch (err) {
      setError(
        err.response?.data?.error?.message ||
          err.message ||
          'Failed to connect to backend'
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHealth();
  }, []);

  return (
    <div style={{ maxWidth: '800px', margin: '2rem auto', padding: '0 1rem', fontFamily: 'system-ui, sans-serif' }}>
      <header style={{ marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid #374151' }}>
        <h1 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Hackathon Starter</h1>
        <p style={{ color: '#9ca3af' }}>Frontend &amp; Backend Connection Test</p>
      </header>

      <main style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div style={{ background: '#111827', padding: '1.5rem', borderRadius: '8px', border: '1px solid #374151' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h2 style={{ fontSize: '1.2rem', color: '#f9fafb' }}>Backend Status (`GET /api/health`)</h2>
            <button
              onClick={fetchHealth}
              disabled={loading}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '6px',
                border: 'none',
                background: '#4f46e5',
                color: '#fff',
                cursor: loading ? 'not-allowed' : 'pointer',
                fontWeight: '600'
              }}
            >
              {loading ? 'Testing...' : 'Test Connection'}
            </button>
          </div>

          {loading && <p style={{ color: '#9ca3af' }}>Connecting to http://localhost:5000/api/health...</p>}

          {error && (
            <div style={{ color: '#ef4444', background: 'rgba(239, 68, 68, 0.1)', padding: '1rem', borderRadius: '6px', border: '1px solid rgba(239, 68, 68, 0.3)' }}>
              <strong>Error:</strong> {error}
            </div>
          )}

          {!loading && !error && data && (
            <div>
              <p style={{ color: '#10b981', fontWeight: '600', marginBottom: '0.75rem' }}>
                ✓ Connected Successfully
              </p>
              <pre
                style={{
                  background: '#030712',
                  padding: '1rem',
                  borderRadius: '6px',
                  overflowX: 'auto',
                  color: '#38bdf8',
                  fontFamily: 'monospace',
                  fontSize: '0.9rem'
                }}
              >
                {JSON.stringify(data, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
