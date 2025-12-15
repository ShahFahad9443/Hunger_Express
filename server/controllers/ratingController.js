import Rating from '../models/Rating.js';

// @desc    Rate a restaurant
// @route   POST /api/ratings/restaurant/:restaurantId
// @access  Public (should be protected in production)
export const rateRestaurant = async (req, res, next) => {
  try {
    // Use authenticated user ID if available, otherwise use provided user_id
    const user_id = req.user?.id || req.body.user_id;
    const { rating } = req.body;

    if (!rating || rating < 1 || rating > 5) {
      return res.status(400).json({
        success: false,
        error: 'Rating must be between 1 and 5'
      });
    }

    if (!user_id) {
      return res.status(400).json({
        success: false,
        error: 'User ID is required'
      });
    }

    const result = await Rating.createRestaurantRating(
      req.params.restaurantId,
      user_id,
      rating
    );

    res.status(201).json({
      success: true,
      data: result
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Rate a menu item
// @route   POST /api/ratings/menu-item/:menuItemId
// @access  Public (should be protected in production)
export const rateMenuItem = async (req, res, next) => {
  try {
    // Use authenticated user ID if available, otherwise use provided user_id
    const user_id = req.user?.id || req.body.user_id;
    const { rating } = req.body;

    if (!rating || rating < 1 || rating > 5) {
      return res.status(400).json({
        success: false,
        error: 'Rating must be between 1 and 5'
      });
    }

    if (!user_id) {
      return res.status(400).json({
        success: false,
        error: 'User ID is required'
      });
    }

    const result = await Rating.createMenuItemRating(
      req.params.menuItemId,
      user_id,
      rating
    );

    res.status(201).json({
      success: true,
      data: result
    });
  } catch (error) {
    next(error);
  }
};

