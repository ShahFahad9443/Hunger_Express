import express from 'express';
import {
  getPromoCodes,
  validatePromoCode
} from '../controllers/promoController.js';
import { validatePromoCode as validatePromoCodeInput } from '../middleware/validator.js';

const router = express.Router();

router.route('/')
  .get(getPromoCodes);

router.route('/validate')
  .post(validatePromoCodeInput, validatePromoCode);

export default router;

