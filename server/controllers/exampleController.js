// Example controller structure
// Replace this with your actual controllers

export const getExample = async (req, res, next) => {
  try {
    // Your logic here
    res.status(200).json({
      success: true,
      data: { message: 'Example controller working' }
    });
  } catch (error) {
    next(error);
  }
};

export const createExample = async (req, res, next) => {
  try {
    // Your logic here
    res.status(201).json({
      success: true,
      data: { message: 'Example created' }
    });
  } catch (error) {
    next(error);
  }
};

