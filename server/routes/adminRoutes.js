import express from 'express';
import {
  getAllMenuItems,
  createMenuItem,
  updateMenuItem,
  deleteMenuItem,
  getAllOrders,
  updateOrderStatus,
  getAllUsers,
  updateUser,
  deleteUser,
  getAllPromoCodes,
  createPromoCode,
  updatePromoCode,
  deletePromoCode,
  getAllRatings,
  deleteRestaurantRating,
  deleteMenuItemRating
} from '../controllers/adminController.js';
import { protect, authorize } from '../middleware/auth.js';
import { validateMenuItem, validateId, validatePromoCode } from '../middleware/validator.js';
import { body } from 'express-validator';
import { handleValidationErrors } from '../middleware/validator.js';

const router = express.Router();

// All admin routes require authentication and admin role
router.use(protect, authorize('admin'));

// Menu Items
router.route('/menu-items')
  .get(getAllMenuItems)
  .post(validateMenuItem, createMenuItem);

router.route('/menu-items/:id')
  .put(validateId, validateMenuItem, updateMenuItem)
  .delete(validateId, deleteMenuItem);

// Orders
router.route('/orders')
  .get(getAllOrders);

router.route('/orders/:id/status')
  .put(validateId, [
    body('status')
      .isIn(['pending', 'confirmed', 'preparing', 'ready', 'out_for_delivery', 'delivered', 'cancelled'])
      .withMessage('Invalid order status'),
    handleValidationErrors
  ], updateOrderStatus);

// Users
router.route('/users')
  .get(getAllUsers);

router.route('/users/:id')
  .put(validateId, [
    body('role')
      .optional()
      .isIn(['admin', 'customer'])
      .withMessage('Role must be either admin or customer'),
    body('is_active')
      .optional()
      .isBoolean()
      .withMessage('is_active must be a boolean'),
    handleValidationErrors
  ], updateUser)
  .delete(validateId, deleteUser);

// Promo Codes
router.route('/promo-codes')
  .get(getAllPromoCodes)
  .post(validatePromoCode, createPromoCode);

router.route('/promo-codes/:id')
  .put(validateId, [
    body('code')
      .optional()
      .trim()
      .isLength({ max: 50 })
      .withMessage('Promo code must be less than 50 characters'),
    body('discount_type')
      .optional()
      .isIn(['percentage', 'fixed'])
      .withMessage('Discount type must be either percentage or fixed'),
    body('discount_value')
      .optional()
      .isFloat({ min: 0 })
      .withMessage('Discount value must be a positive number'),
    body('min_order_amount')
      .optional()
      .isFloat({ min: 0 })
      .withMessage('Minimum order amount must be a positive number'),
    body('is_active')
      .optional()
      .isBoolean()
      .withMessage('is_active must be a boolean'),
    handleValidationErrors
  ], updatePromoCode)
  .delete(validateId, deletePromoCode);

// Ratings
router.route('/ratings')
  .get(getAllRatings);

router.route('/ratings/restaurant/:id')
  .delete(validateId, deleteRestaurantRating);

router.route('/ratings/menu-item/:id')
  .delete(validateId, deleteMenuItemRating);

export default router;

