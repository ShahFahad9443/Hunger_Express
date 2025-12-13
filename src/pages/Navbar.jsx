import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const location = useLocation();
  const { getTotalItems, cartItems, getTotalPrice } = useCart();
  const { user, logout, isAuthenticated } = useAuth();
  const [showCartDropdown, setShowCartDropdown] = useState(false);
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  const getLinkClassName = (path) => {
    const baseClasses = "transition duration-300 pb-1";
    if (isActive(path)) {
      return `text-[#db1020] font-semibold hover:text-[#ffd700] ${baseClasses} border-b-2 border-[#db1020]`;
    }
    return `text-[#1F1F1F] hover:text-[#db1020] ${baseClasses}`;
  };
 
  return (
    <>
      {/* NAVBAR */}
      <div className="w-full bg-white shadow-soft fixed top-0 left-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 cursor-pointer">
              <span className="material-symbols-outlined text-[#db1020] text-3xl">restaurant</span>
              <span className="text-2xl font-bold text-[#db1020]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Hunger Express
              </span>
            </Link>

            <nav className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
              <ul className="flex items-center space-x-8">
                <li>
                  <Link
                    to="/"
                    className={getLinkClassName("/")}
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Home
                  </Link>
                </li>
              
                <li>
                  <Link
                    to="/restaurants"
                    className={getLinkClassName("/restaurants")}
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Restaurants
                  </Link>
                </li>
                <li>
                  <Link
                    to="/offers"
                    className={getLinkClassName("/offers")}
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Offers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className={getLinkClassName("/about")}
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className={getLinkClassName("/contact")}
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="flex items-center space-x-4">
              {/* Track Order Icon */}
              <Link
                to="/track-order"
                className={`relative flex items-center justify-center px-3 py-2 rounded-[16px] transition-all duration-300 min-h-[44px] ${
                  isActive("/track-order")
                    ? "bg-[#db1020] text-white shadow-medium"
                    : "text-[#db1020] hover:bg-[#ffd700] hover:text-[#1F1F1F] border border-[#db1020] bg-white"
                }`}
                style={{ fontFamily: 'Inter, sans-serif' }}
                title="Track Order"
              >
                <span className="material-symbols-outlined">delivery_dining</span>
              </Link>
              
              <div
                className="relative"
                onMouseEnter={() => setShowCartDropdown(true)}
                onMouseLeave={() => setShowCartDropdown(false)}
              >
                <Link
                  to="/cart"
                  className={`relative flex items-center justify-center px-3 py-2 rounded-[16px] transition-all duration-300 min-h-[44px] ${
                    isActive("/cart")
                      ? "bg-[#db1020] text-white shadow-medium"
                      : "text-[#db1020] hover:bg-[#ffd700] hover:text-[#1F1F1F] border border-[#db1020] bg-white"
                  }`}
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <span className="material-symbols-outlined">shopping_cart</span>
                  {getTotalItems() > 0 && (
                    <span className="absolute -top-2 -right-2 bg-[#ffd700] text-[#1F1F1F] text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-soft">
                      {getTotalItems()}
                    </span>
                  )}
                </Link>

                {/* Cart Dropdown */}
                {showCartDropdown && cartItems.length > 0 && (
                  <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-[16px] shadow-large border border-gray-200 z-50 overflow-hidden">
                    <div className="p-4 border-b border-gray-200">
                      <h3 className="text-lg font-semibold text-[#1F1F1F]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Cart ({getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'})
                      </h3>
                    </div>
                    
                    <div className="max-h-96 overflow-y-auto">
                      {cartItems.map((item) => (
                        <div
                          key={item.id}
                          className="p-4 border-b border-gray-100 hover:bg-[#f9f5f5] transition flex gap-3"
                        >
                          <div className="w-16 h-16 flex-shrink-0 rounded-[12px] overflow-hidden bg-gray-100">
                            {item.image ? (
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  e.target.src = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop";
                                }}
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center">
                                <span className="material-symbols-outlined text-gray-400 text-2xl">image</span>
                              </div>
                            )}
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-semibold text-[#1F1F1F] truncate mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                              {item.name}
                            </h4>
                            <p className="text-xs text-[#6B6B6B] mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                              Qty: {item.quantity} × ${item.price.toFixed(2)}
                            </p>
                            <p className="text-sm font-bold text-[#db1020]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                              ${(item.price * item.quantity).toFixed(2)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="p-4 border-t border-gray-200 bg-[#f9f5f5]">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-base font-semibold text-[#1F1F1F]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                          Total:
                        </span>
                        <span className="text-lg font-bold text-[#db1020]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                          ${getTotalPrice().toFixed(2)}
                        </span>
                      </div>
                      <Link
                        to="/cart"
                        className="block w-full bg-[#db1020] text-white py-2.5 rounded-[16px] font-semibold hover:bg-[#c00e1d] transition duration-300 shadow-medium text-center min-h-[44px] flex items-center justify-center"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                        onClick={() => setShowCartDropdown(false)}
                      >
                        View Cart
                      </Link>
                    </div>
                  </div>
                )}

                {/* Empty Cart Dropdown */}
                {showCartDropdown && cartItems.length === 0 && (
                  <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-[16px] shadow-large border border-gray-200 z-50 p-6 text-center">
                    <span className="material-symbols-outlined text-4xl text-gray-300 mb-2">shopping_cart</span>
                    <p className="text-[#4A4A4A] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Your cart is empty
                    </p>
                    <Link
                      to="/restaurants"
                      className="mt-4 inline-block bg-[#db1020] text-white px-4 py-2 rounded-[16px] font-semibold hover:bg-[#c00e1d] transition duration-300 shadow-medium text-sm min-h-[44px] flex items-center justify-center"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                      onClick={() => setShowCartDropdown(false)}
                    >
                      Browse Restaurants
                    </Link>
                  </div>
                )}
              </div>

              {isAuthenticated ? (
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 px-4 py-2 bg-[#ffd700] rounded-[16px] min-h-[44px] shadow-soft">
                    <span className="material-symbols-outlined text-[#db1020]">account_circle</span>
                    <span className="text-[#db1020] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>{user?.name || user?.username}</span>
                  </div>
                  <button
                    onClick={logout}
                    className="flex items-center justify-center px-3 py-2 border border-[#db1020] text-[#db1020] rounded-[16px] hover:bg-[#ffd700] hover:text-[#1F1F1F] transition min-h-[44px]"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    title="Logout"
                  >
                    <span className="material-symbols-outlined">logout</span>
                  </button>
                </div>
              ) : (
                <>
                  <Link 
                    to="/login"  
                    className={`flex items-center justify-center px-3 py-2 border border-[#db1020] rounded-[16px] transition-all duration-300 min-h-[44px] ${
                      isActive("/login")
                        ? "bg-[#db1020] text-white shadow-medium border-[#db1020]"
                        : "text-[#db1020] hover:bg-[#ffd700] hover:text-[#1F1F1F] bg-white"
                    }`}
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    title="Login"
                  >
                    <span className="material-symbols-outlined">login</span>
                  </Link>

                  <Link
                    to="/signup"
                    className={`flex items-center justify-center px-3 py-2 rounded-[16px] transition-all duration-300 min-h-[44px] ${
                      isActive("/signup")
                        ? "bg-[#db1020] text-white shadow-medium"
                        : "bg-white text-[#db1020] border border-[#db1020] hover:bg-[#ffd700] hover:text-[#1F1F1F]"
                    }`}
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    title="Sign Up"
                  >
                    <span className="material-symbols-outlined">person_add</span>
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