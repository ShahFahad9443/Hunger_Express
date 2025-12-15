import PropTypes from 'prop-types';

const LoadingSpinner = ({ size = 'md', text = 'Loading...' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div className={`${sizeClasses[size]} border-4 border-[#db1020] border-t-transparent rounded-full animate-spin`}></div>
      {text && (
        <p className="text-[#4A4A4A] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
          {text}
        </p>
      )}
    </div>
  );
};

LoadingSpinner.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  text: PropTypes.string,
};

export default LoadingSpinner;

