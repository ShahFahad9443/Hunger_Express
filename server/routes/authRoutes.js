import express from 'express';
import { register, login, refreshToken, getMe } from '../controllers/authController.js';
import { protect } from '../middleware/auth.js';
import { authLimiter } from '../middleware/rateLimiter.js';
import { validateUser, validateLogin } from '../middleware/validator.js';

const router = express.Router();

router.post('/register', authLimiter, validateUser, register);
router.post('/login', authLimiter, validateLogin, login);
router.post('/refresh', refreshToken);
router.get('/me', protect, getMe);

export default router;

