import rateLimit from 'express-rate-limit';

// Check if rate limiting should be disabled
const DISABLE_RATE_LIMIT = process.env.DISABLE_RATE_LIMIT === 'true' || process.env.NODE_ENV === 'development';

// Helper function to create a no-op middleware when rate limiting is disabled
const noOpMiddleware = (req, res, next) => next();

// General API rate limiter
export const apiLimiter = DISABLE_RATE_LIMIT 
  ? noOpMiddleware
  : rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // Limit each IP to 100 requests per windowMs
      message: {
        success: false,
        error: 'Too many requests from this IP, please try again later.'
      },
      standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
      legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    });

// Strict rate limiter for auth routes
export const authLimiter = DISABLE_RATE_LIMIT
  ? noOpMiddleware
  : rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 5, // Limit each IP to 5 requests per windowMs
      message: {
        success: false,
        error: 'Too many login attempts, please try again after 15 minutes.'
      },
      skipSuccessfulRequests: true, // Don't count successful requests
    });

// Order creation rate limiter
export const orderLimiter = DISABLE_RATE_LIMIT
  ? noOpMiddleware
  : rateLimit({
      windowMs: 60 * 60 * 1000, // 1 hour
      max: 10, // Limit each IP to 10 orders per hour
      message: {
        success: false,
        error: 'Too many orders, please try again later.'
      },
    });

