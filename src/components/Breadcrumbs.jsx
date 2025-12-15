import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import restaurantService from "../services/restaurantService";

const Breadcrumbs = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathnames = location.pathname.split('/').filter((x) => x);
  const [restaurantName, setRestaurantName] = useState(null);

  // Reset restaurant name when route changes
  useEffect(() => {
    if (pathnames[0] !== 'restaurants' || !pathnames[1] || isNaN(pathnames[1])) {
      setRestaurantName(null);
    }
  }, [location.pathname, pathnames]);

  // Fetch restaurant name if on restaurant details page
  useEffect(() => {
    const fetchRestaurantName = async () => {
      if (pathnames[0] === 'restaurants' && pathnames[1] && !isNaN(pathnames[1])) {
        try {
          const response = await restaurantService.getRestaurant(parseInt(pathnames[1]));
          if (response.success && response.data) {
            setRestaurantName(response.data.name);
          }
        } catch (error) {
          console.error('Failed to fetch restaurant name:', error);
        }
      }
    };

    fetchRestaurantName();
  }, [pathnames]);

  // Don't show breadcrumbs on home page (after all hooks)
  if (pathnames.length === 0) {
    return null;
  }

  // Route name mapping
  const routeNames = {
    restaurants: 'Restaurants',
    'help-center': 'Help Center',
    faqs: 'FAQs',
    'privacy-policy': 'Privacy Policy',
    'terms-of-service': 'Terms of Service',
    'track-order': 'Track Order',
    cart: 'Cart',
    checkout: 'Checkout',
    'order-confirmation': 'Order Confirmation',
    offers: 'Offers',
    about: 'About',
    contact: 'Contact',
    search: 'Search Results',
    login: 'Login',
    signup: 'Sign Up'
  };

  const buildBreadcrumbs = () => {
    const breadcrumbs = [
      { name: 'Home', path: '/' }
    ];

    let currentPath = '';

    for (let index = 0; index < pathnames.length; index++) {
      const pathname = pathnames[index];
      const isLast = index === pathnames.length - 1;

      // Special handling for restaurant details
      if (pathname === 'restaurants' && pathnames[index + 1] && !isNaN(pathnames[index + 1])) {
        breadcrumbs.push({
          name: routeNames[pathname] || 'Restaurants',
          path: '/restaurants'
        });
        
        // Skip the number and add restaurant name
        const restaurantId = pathnames[index + 1];
        currentPath = `/restaurants/${restaurantId}`;
        breadcrumbs.push({
          name: restaurantName || 'Restaurant Details',
          path: currentPath,
          isLast: true
        });
        index++; // Skip the number in the loop
        continue;
      }

      // Skip numeric IDs that come after 'restaurants' (already handled above)
      if (!isNaN(pathname) && index > 0 && pathnames[index - 1] === 'restaurants') {
        currentPath += `/${pathname}`;
        continue;
      }

      currentPath += `/${pathname}`;
      breadcrumbs.push({
        name: routeNames[pathname] || pathname.charAt(0).toUpperCase() + pathname.slice(1).replace(/-/g, ' '),
        path: currentPath,
        isLast
      });
    }

    return breadcrumbs;
  };

  const breadcrumbs = buildBreadcrumbs();

  return (
    <nav className="bg-[#f9f5f5] border-b border-gray-200 mt-20" aria-label="Breadcrumb">
      <div className="container mx-auto px-4 py-2">
        <ol className="flex items-center space-x-2 text-sm flex-wrap" style={{ fontFamily: 'Inter, sans-serif' }}>
          {breadcrumbs.map((crumb, index) => (
            <li key={`${crumb.path}-${index}`} className="flex items-center">
              {index > 0 && (
                <span className="material-symbols-outlined text-gray-400 mx-2 text-base">
                  chevron_right
                </span>
              )}
              {crumb.isLast ? (
                <span className="text-[#4A4A4A] font-semibold" aria-current="page">
                  {crumb.name}
                </span>
              ) : (
                <Link
                  to={crumb.path}
                  onClick={(e) => {
                    // If clicking the same route, force a reload by navigating with state
                    if (location.pathname === crumb.path || 
                        (crumb.path === '/' && location.pathname === '/')) {
                      e.preventDefault();
                      // Navigate with a timestamp to force reload
                      navigate(crumb.path, { state: { reload: Date.now() }, replace: false });
                    }
                  }}
                  className="text-[#db1020] hover:text-[#c00e1d] transition-colors duration-200 hover:underline flex items-center gap-1"
                >
                  <span>{crumb.name}</span>
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
