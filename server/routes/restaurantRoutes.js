import express from 'express';
import {
  getRestaurants,
  getRestaurant,
  getRestaurantMenu
} from '../controllers/restaurantController.js';
import { validateRestaurantQuery, validateId } from '../middleware/validator.js';

const router = express.Router();

router.route('/')
  .get(validateRestaurantQuery, getRestaurants);

router.route('/:id')
  .get(validateId, getRestaurant);

router.route('/:id/menu')
  .get(validateId, getRestaurantMenu);

export default router;

