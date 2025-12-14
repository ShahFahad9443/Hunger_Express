import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const StarRating = ({ 
  rating = 0, 
  onRatingChange, 
  interactive = false, 
  size = "md",
  showValue = true 
}) => {
  const [hoveredRating, setHoveredRating] = useState(0);
  const [displayRating, setDisplayRating] = useState(rating);

  useEffect(() => {
    setDisplayRating(rating);
  }, [rating]);

  const handleClick = (value) => {
    if (interactive && onRatingChange) {
      onRatingChange(value);
      setDisplayRating(value);
    }
  };

  const handleMouseEnter = (value) => {
    if (interactive) {
      setHoveredRating(value);
    }
  };

  const handleMouseLeave = () => {
    if (interactive) {
      setHoveredRating(0);
    }
  };

  const sizeClasses = {
    sm: "text-sm",
    md: "text-lg",
    lg: "text-2xl",
    xl: "text-3xl",
  };

  const currentRating = interactive && hoveredRating > 0 ? hoveredRating : displayRating;

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => {
          const isFilled = star <= currentRating;
          
          return (
            <span
              key={star}
              onClick={() => handleClick(star)}
              onMouseEnter={() => handleMouseEnter(star)}
              onMouseLeave={handleMouseLeave}
              className={`${sizeClasses[size]} ${
                interactive ? "cursor-pointer hover:scale-110" : "cursor-default"
              } transition-all duration-150 ${
                isFilled
                  ? "text-yellow-400"
                  : "text-gray-300"
              }`}
            >
              <span className="material-symbols-outlined">
                {isFilled ? "star" : "star_border"}
              </span>
            </span>
          );
        })}
      </div>
      {showValue && (
        <span className="text-gray-600 font-semibold text-sm">
          {displayRating.toFixed(1)}
        </span>
      )}
    </div>
  );
};

StarRating.propTypes = {
  rating: PropTypes.number,
  onRatingChange: PropTypes.func,
  interactive: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  showValue: PropTypes.bool,
};

StarRating.defaultProps = {
  rating: 0,
  interactive: false,
  size: "md",
  showValue: true,
};

export default StarRating;

