import jwt from 'jsonwebtoken';

export const generateToken = (id) => {
  return jwt.sign({ id, type: 'access' }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE || '30d'
  });
};

export const generateRefreshToken = (id) => {
  return jwt.sign({ id, type: 'refresh' }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_REFRESH_EXPIRE || '90d'
  });
};

export const generateTokens = (id) => {
  return {
    accessToken: generateToken(id),
    refreshToken: generateRefreshToken(id)
  };
};
