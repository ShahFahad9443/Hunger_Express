import PropTypes from 'prop-types';

const ErrorMessage = ({ message, onRetry, className = '' }) => {
  return (
    <div className={`bg-red-50 border border-red-300 rounded-lg p-4 ${className}`}>
      <div className="flex items-start gap-3">
        <span className="material-symbols-outlined text-red-600 flex-shrink-0">error</span>
        <div className="flex-1">
          <p className="text-red-700 font-semibold mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
            Error
          </p>
          <p className="text-red-600 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
            {message}
          </p>
          {onRetry && (
            <button
              onClick={onRetry}
              className="mt-3 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition text-sm font-semibold"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Try Again
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
  onRetry: PropTypes.func,
  className: PropTypes.string,
};

export default ErrorMessage;

