import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

/**
 * Wrapper component to ensure routes re-render on navigation
 * This fixes the issue where navigating to the same route doesn't update the component
 */
const RouteWrapper = ({ children }) => {
  const location = useLocation();
  const [key, setKey] = useState(0);

  useEffect(() => {
    // Force re-render on location change
    setKey(prev => prev + 1);
  }, [location.pathname]);

  return <div key={key}>{children}</div>;
};

RouteWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RouteWrapper;

