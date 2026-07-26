const healthService = require('../services/health.service');

/**
 * GET /api/health
 * Returns health status of the application
 */
const getHealth = (req, res, next) => {
  try {
    const healthStatus = healthService.getHealthStatus();
    res.status(200).json({
      success: true,
      data: healthStatus,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getHealth,
};
