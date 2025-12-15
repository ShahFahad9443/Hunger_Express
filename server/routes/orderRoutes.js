import express from 'express';
import {
  createOrder,
  getOrder,
  getUserOrders,
  updateOrderStatus
} from '../controllers/orderController.js';
import { protect, optionalAuth } from '../middleware/auth.js';
import { orderLimiter } from '../middleware/rateLimiter.js';
import { validateOrder, validateId } from '../middleware/validator.js';

const router = express.Router();

router.route('/')
  .post(orderLimiter, optionalAuth, validateOrder, createOrder);

router.route('/:orderNumber')
  .get(getOrder);

router.route('/user/:userId')
  .get(protect, validateId, getUserOrders);

router.route('/:id/status')
  .put(protect, validateId, updateOrderStatus);

export default router;

