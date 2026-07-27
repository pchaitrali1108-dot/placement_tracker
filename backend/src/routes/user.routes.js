const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');
const { authenticateToken } = require('../middlewares/auth.middleware');

router.post('/', userController.createUser);
router.post('/login', userController.loginUser);
router.get('/me', authenticateToken, userController.getMe);

module.exports = router;