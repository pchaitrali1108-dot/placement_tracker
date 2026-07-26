/**
 * Health Service
 * Handles business logic for system health checks.
 */

const getHealthStatus = () => {
  return {
    status: 'UP',
    message: 'Backend server is running smoothly',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  };
};

module.exports = {
  getHealthStatus,
};
