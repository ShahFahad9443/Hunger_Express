import PromoCode from '../models/PromoCode.js';

// @desc    Get all active promo codes
// @route   GET /api/promo-codes
// @access  Public
export const getPromoCodes = async (req, res, next) => {
  try {
    const promoCodes = await PromoCode.findAll();

    res.status(200).json({
      success: true,
      count: promoCodes.length,
      data: promoCodes
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Validate promo code
// @route   POST /api/promo-codes/validate
// @access  Public
export const validatePromoCode = async (req, res, next) => {
  try {
    const { code, orderAmount } = req.body;

    if (!code) {
      return res.status(400).json({
        success: false,
        error: 'Promo code is required'
      });
    }

    const validation = await PromoCode.validate(code, orderAmount || 0);

    if (!validation.valid) {
      return res.status(400).json({
        success: false,
        error: validation.error
      });
    }

    const discountResult = await PromoCode.calculateDiscount(code, orderAmount || 0);

    res.status(200).json({
      success: true,
      data: {
        code: discountResult.promo.code,
        discount: discountResult.discount,
        discount_type: discountResult.promo.discount_type,
        discount_value: discountResult.promo.discount_value
      }
    });
  } catch (error) {
    next(error);
  }
};

