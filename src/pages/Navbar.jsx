import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const location = useLocation();
  const { getTotalItems } = useCart();
  const { user, logout, isAuthenticated } = useAuth();
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  const getLinkClassName = (path) => {
    const baseClasses = "transition duration-300 pb-1";
    if (isActive(path)) {
      return `text-pink-600 font-semibold hover:text-pink-700 ${baseClasses} border-b-2 border-pink-600`;
    }
    return `text-gray-700 hover:text-pink-600 ${baseClasses}`;
  };
 
  return (
    <>
      {/* NAVBAR */}
      <div className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 cursor-pointer">
              <span className="material-symbols-outlined text-pink-600 text-3xl">restaurant</span>
              <span className="text-2xl font-bold text-pink-600">
                Hunger Express
              </span>
            </Link>

            
            <nav className="hidden md:block">
              <ul className="flex items-center space-x-8">
                <li>
                  <Link
                    to="/"
                    className={getLinkClassName("/")}
                  >
                    Home
                  </Link>
                </li>
              
                <li>
                  <Link
                    to="/restaurants"
                    className={getLinkClassName("/restaurants")}
                  >
                    Restaurants
                  </Link>
                </li>
                <li>
                  <Link
                    to="/offers"
                    className={getLinkClassName("/offers")}
                  >
                    Offers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className={getLinkClassName("/about")}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className={getLinkClassName("/contact")}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="flex items-center space-x-4">
              <Link
                to="/cart"
                className={`relative flex items-center px-4 py-2 rounded-xl transition ${
                  isActive("/cart")
                    ? "bg-pink-600 text-white"
                    : "text-pink-600 hover:bg-pink-50 border border-pink-600"
                }`}
              >
                <span className="material-symbols-outlined mr-2">shopping_cart</span>
                Cart
                {getTotalItems() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </Link>

              {isAuthenticated ? (
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 px-4 py-2 bg-pink-50 rounded-xl">
                    <span className="material-symbols-outlined text-pink-600">account_circle</span>
                    <span className="text-pink-600 font-semibold">{user?.name || user?.username}</span>
                  </div>
                  <button
                    onClick={logout}
                    className="flex items-center px-4 py-2 border border-red-600 text-red-600 rounded-xl hover:bg-red-50 transition"
                  >
                    <span className="material-symbols-outlined mr-2">logout</span> Logout
                  </button>
                </div>
              ) : (
                <>
                  <Link 
                    to="/login"  
                    className="flex items-center px-4 py-2 border border-pink-600 text-pink-600 rounded-xl hover:bg-pink-50 transition"
                  >
                    <span className="material-symbols-outlined mr-2">login</span> Login
                  </Link>

                  <Link
                    to= "/signup"
                    className="flex items-center px-4 py-2 bg-pink-600 text-white rounded-xl hover:bg-pink-700 transition shadow"
                  >
                    <span className="material-symbols-outlined mr-2">person_add</span> Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

   
     
    </>
  );
};

export default Navbar;