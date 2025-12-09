import express from 'express';
const router = express.Router();

// Example route
router.get('/', (req, res) => {
  res.json({ 
    message: 'API is working',
    version: '1.0.0'
  });
});

// TODO: Import and use your route files here
// import userRoutes from './userRoutes.js';
// import orderRoutes from './orderRoutes.js';
// import menuRoutes from './menuRoutes.js';
// 
// router.use('/users', userRoutes);
// router.use('/orders', orderRoutes);
// router.use('/menu', menuRoutes);

export default router;

