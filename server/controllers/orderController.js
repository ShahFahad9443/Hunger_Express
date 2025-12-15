import Order from '../models/Order.js';
import PromoCode from '../models/PromoCode.js';

// @desc    Create new order
// @route   POST /api/orders
// @access  Public (should be protected in production)
export const createOrder = async (req, res, next) => {
  try {
    // Use authenticated user ID if available, otherwise use provided user_id
    const user_id = req.user?.id || req.body.user_id;
    
    const {
      items,
      promo_code,
      payment_method,
      delivery_info
    } = req.body;

    // Validate required fields
    if (!items || items.length === 0) {
      return res.status(400).json({
        success: false,
        error: 'Order must contain at least one item'
      });
    }

    if (!delivery_info || !payment_method) {
      return res.status(400).json({
        success: false,
        error: 'Delivery info and payment method are required'
      });
    }

    // Calculate subtotal
    const subtotal = items.reduce((sum, item) => {
      return sum + (item.price * item.quantity);
    }, 0);

    // Apply promo code if provided
    let discount = 0;
    let promo_code_id = null;

    if (promo_code) {
      const discountResult = await PromoCode.calculateDiscount(promo_code, subtotal);
      
      if (!discountResult.error) {
        discount = discountResult.discount;
        promo_code_id = discountResult.promo.id;
      } else {
        return res.status(400).json({
          success: false,
          error: discountResult.error
        });
      }
    }

    // Calculate fees and tax
    const delivery_fee = 2.99;
    const tax = (subtotal - discount) * 0.08;
    const total = subtotal - discount + delivery_fee + tax;

    // Create order
    const orderData = {
      user_id: user_id || null,
      items,
      subtotal,
      discount,
      delivery_fee,
      tax,
      total,
      promo_code_id,
      payment_method,
      delivery_info
    };

    const order = await Order.create(orderData);
    const orderItems = await Order.getOrderItems(order.id);

    res.status(201).json({
      success: true,
      data: {
        ...order,
        items: orderItems
      }
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get order by order number
// @route   GET /api/orders/:orderNumber
// @access  Public
export const getOrder = async (req, res, next) => {
  try {
    const order = await Order.findByOrderNumber(req.params.orderNumber);

    if (!order) {
      return res.status(404).json({
        success: false,
        error: 'Order not found'
      });
    }

    const orderItems = await Order.getOrderItems(order.id);

    res.status(200).json({
      success: true,
      data: {
        ...order,
        items: orderItems
      }
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get user orders
// @route   GET /api/orders/user/:userId
// @access  Public (should be protected in production)
export const getUserOrders = async (req, res, next) => {
  try {
    const orders = await Order.findByUserId(req.params.userId);

    res.status(200).json({
      success: true,
      count: orders.length,
      data: orders
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update order status
// @route   PUT /api/orders/:id/status
// @access  Private (Admin only in production)
export const updateOrderStatus = async (req, res, next) => {
  try {
    const { status } = req.body;

    const validStatuses = ['pending', 'confirmed', 'preparing', 'ready', 'out_for_delivery', 'delivered', 'cancelled'];
    
    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid order status'
      });
    }

    const order = await Order.updateStatus(req.params.id, status);

    if (!order) {
      return res.status(404).json({
        success: false,
        error: 'Order not found'
      });
    }

    res.status(200).json({
      success: true,
      data: order
    });
  } catch (error) {
    next(error);
  }
};

