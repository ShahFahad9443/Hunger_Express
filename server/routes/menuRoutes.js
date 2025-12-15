import express from 'express';
import { getMenuItem } from '../controllers/menuController.js';

const router = express.Router();

router.route('/:id')
  .get(getMenuItem);

export default router;

