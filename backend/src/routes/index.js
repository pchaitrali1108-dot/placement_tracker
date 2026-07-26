const express = require('express');
const router = express.Router();

const healthRoutes = require('./health.routes');
const jobRoutes = require('./job.routes');
const applicationRoutes = require('./application.routes');
const userRoutes = require('./user.routes');

// API Routes
router.use('/health', healthRoutes);
router.use('/jobs', jobRoutes);
router.use('/applications', applicationRoutes);
router.use('/users', userRoutes);

module.exports = router;
