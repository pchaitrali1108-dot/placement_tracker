import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import StatusCard from '../components/StatusCard';
import ResponseViewer from '../components/ResponseViewer';
import QuickStart from '../components/QuickStart';
import { getHealth } from '../services/healthService';

export default function HomePage() {
  const [healthData, setHealthData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchHealth = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getHealth();
      setHealthData(data);
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
    <div className="app-layout">
      <Header />
      <main className="main-container">
        <div className="grid-two-col">
          <StatusCard
            loading={loading}
            error={error}
            healthData={healthData}
            onRefresh={fetchHealth}
          />
          <ResponseViewer responseData={healthData} />
        </div>
        <QuickStart />
      </main>
      <footer className="footer">
        <p>Hackathon Starter Template &bull; Built with Node.js, Express & React</p>
      </footer>
    </div>
  );
}
