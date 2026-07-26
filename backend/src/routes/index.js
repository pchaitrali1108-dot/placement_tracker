const express = require('express');
const router = express.Router();
const healthRoutes = require('./health.routes');

// API Routes
router.use('/health', healthRoutes);

module.exports = router;
