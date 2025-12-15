import { body, param, query, validationResult } from 'express-validator';

// Middleware to handle validation errors
export const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      error: 'Validation failed',
      errors: errors.array()
    });
  }
  next();
};

// User validation rules
export const validateUser = [
  body('username')
    .trim()
    .isLength({ min: 3, max: 50 })
    .withMessage('Username must be between 3 and 50 characters')
    .matches(/^[a-zA-Z0-9_]+$/)
    .withMessage('Username can only contain letters, numbers, and underscores'),
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),
  handleValidationErrors
];

export const validateLogin = [
  body('email')
    .optional()
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email'),
  body('username')
    .optional()
    .trim()
    .isLength({ min: 3 })
    .withMessage('Username must be at least 3 characters'),
  body('password')
    .notEmpty()
    .withMessage('Password is required'),
  // Custom validation to ensure either email or username is provided
  body().custom((value) => {
    if (!value.email && !value.username) {
      throw new Error('Either email or username is required');
    }
    return true;
  }),
  handleValidationErrors
];

// Restaurant validation
export const validateRestaurant = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Restaurant name must be between 2 and 100 characters'),
  body('cuisine')
    .trim()
    .notEmpty()
    .withMessage('Cuisine type is required'),
  body('description')
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage('Description must be less than 500 characters'),
  body('location')
    .trim()
    .notEmpty()
    .withMessage('Location is required')
    .isLength({ max: 100 })
    .withMessage('Location must be less than 100 characters'),
  body('image_url')
    .optional()
    .isURL()
    .withMessage('Image URL must be a valid URL'),
  body('hours')
    .optional()
    .trim()
    .isLength({ max: 100 })
    .withMessage('Hours must be less than 100 characters'),
  body('price_range')
    .optional()
    .isFloat({ min: 0 })
    .withMessage('Price range must be a positive number'),
  body('rating')
    .optional()
    .isFloat({ min: 0, max: 5 })
    .withMessage('Rating must be between 0 and 5'),
  handleValidationErrors
];

// Menu item validation
export const validateMenuItem = [
  body('restaurant_id')
    .isInt()
    .withMessage('Restaurant ID must be a valid integer'),
  body('name')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Menu item name must be between 2 and 100 characters'),
  body('price')
    .isFloat({ min: 0 })
    .withMessage('Price must be a positive number'),
  body('category')
    .optional()
    .trim()
    .isLength({ max: 50 })
    .withMessage('Category must be less than 50 characters'),
  handleValidationErrors
];

// Order validation
export const validateOrder = [
  body('items')
    .isArray({ min: 1 })
    .withMessage('Order must contain at least one item'),
  body('items.*.menu_item_id')
    .isInt()
    .withMessage('Each item must have a valid menu_item_id'),
  body('items.*.quantity')
    .isInt({ min: 1 })
    .withMessage('Each item must have a quantity of at least 1'),
  body('items.*.price')
    .isFloat({ min: 0 })
    .withMessage('Each item must have a valid price'),
  body('payment_method')
    .isIn(['card', 'cash'])
    .withMessage('Payment method must be either "card" or "cash"'),
  body('delivery_info.name')
    .trim()
    .notEmpty()
    .withMessage('Delivery name is required'),
  body('delivery_info.email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Valid delivery email is required'),
  body('delivery_info.phone')
    .trim()
    .notEmpty()
    .withMessage('Delivery phone is required'),
  body('delivery_info.address')
    .trim()
    .notEmpty()
    .withMessage('Delivery address is required'),
  body('delivery_info.city')
    .trim()
    .notEmpty()
    .withMessage('Delivery city is required'),
  body('delivery_info.state')
    .trim()
    .notEmpty()
    .withMessage('Delivery state is required'),
  body('delivery_info.zipCode')
    .trim()
    .notEmpty()
    .withMessage('Delivery zip code is required'),
  handleValidationErrors
];

// Rating validation
export const validateRating = [
  body('rating')
    .isInt({ min: 1, max: 5 })
    .withMessage('Rating must be between 1 and 5'),
  body('user_id')
    .optional()
    .isInt()
    .withMessage('User ID must be a valid integer'),
  handleValidationErrors
];

// Promo code validation
export const validatePromoCode = [
  body('code')
    .trim()
    .notEmpty()
    .withMessage('Promo code is required')
    .isLength({ max: 50 })
    .withMessage('Promo code must be less than 50 characters'),
  body('orderAmount')
    .optional()
    .isFloat({ min: 0 })
    .withMessage('Order amount must be a positive number'),
  handleValidationErrors
];

// ID parameter validation
export const validateId = [
  param('id')
    .isInt()
    .withMessage('ID must be a valid integer'),
  handleValidationErrors
];

// Query parameter validation for restaurants
export const validateRestaurantQuery = [
  query('cuisine')
    .optional()
    .trim()
    .isLength({ max: 50 })
    .withMessage('Cuisine filter must be less than 50 characters'),
  query('location')
    .optional()
    .trim()
    .isLength({ max: 100 })
    .withMessage('Location filter must be less than 100 characters'),
  query('minRating')
    .optional()
    .isFloat({ min: 0, max: 5 })
    .withMessage('Minimum rating must be between 0 and 5'),
  handleValidationErrors
];

