import express from 'express';
import {
  rateRestaurant,
  rateMenuItem
} from '../controllers/ratingController.js';
import { optionalAuth } from '../middleware/auth.js';
import { validateRating, validateId } from '../middleware/validator.js';

const router = express.Router();

router.route('/restaurant/:restaurantId')
  .post(optionalAuth, validateId, validateRating, rateRestaurant);

router.route('/menu-item/:menuItemId')
  .post(optionalAuth, validateId, validateRating, rateMenuItem);

export default router;

