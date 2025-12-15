import express from 'express';
import {
  getRestaurants,
  getRestaurant,
  getRestaurantMenu,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant
} from '../controllers/restaurantController.js';
import { validateRestaurantQuery, validateId, validateRestaurant } from '../middleware/validator.js';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

router.route('/')
  .get(validateRestaurantQuery, getRestaurants)
  .post(protect, authorize('admin'), validateRestaurant, createRestaurant);

router.route('/:id')
  .get(validateId, getRestaurant)
  .put(protect, authorize('admin'), validateId, validateRestaurant, updateRestaurant)
  .delete(protect, authorize('admin'), validateId, deleteRestaurant);

router.route('/:id/menu')
  .get(validateId, getRestaurantMenu);

export default router;

