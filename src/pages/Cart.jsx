import { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

// Promo codes database
const PROMO_CODES = {
  FIRST30: { discount: 30, type: "percentage", minOrder: 20 },
  WEEKEND20: { discount: 20, type: "percentage", minOrder: 0 },
  SAVE10: { discount: 10, type: "percentage", minOrder: 15 },
  FLAT5: { discount: 5, type: "fixed", minOrder: 10 },
};

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
  } = useCart();
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const [itemToRemove, setItemToRemove] = useState(null);
  const [promoCode, setPromoCode] = useState("");
  const [appliedPromo, setAppliedPromo] = useState(null);
  const [promoError, setPromoError] = useState("");

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-6xl mb-6">🛒</div>
          <h1 className="text-4xl font-bold text-[#db1020] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Your Cart is Empty</h1>
          <p className="text-[#4A4A4A] text-lg mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
            Looks like you haven&apos;t added anything to your cart yet.
          </p>
          <Link
            to="/restaurants"
            className="inline-block bg-[#db1020] text-white px-8 py-4 rounded-[16px] font-semibold text-lg hover:bg-[#c00e1d] transition duration-300 shadow-medium min-h-[44px] flex items-center justify-center"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Browse Restaurants
          </Link>
        </div>
      </div>
    );
  }

  const handleClearCart = () => {
    clearCart();
    setShowClearConfirm(false);
    setAppliedPromo(null);
    setPromoCode("");
  };

  const handleRemoveItem = (itemId, itemName) => {
    setItemToRemove({ id: itemId, name: itemName });
  };

  const confirmRemoveItem = () => {
    if (itemToRemove) {
      removeFromCart(itemToRemove.id);
      setItemToRemove(null);
    }
  };

  const handleApplyPromo = () => {
    setPromoError("");
    const code = promoCode.toUpperCase().trim();

    if (!code) {
      setPromoError("Please enter a promo code");
      return;
    }

    if (appliedPromo && appliedPromo.code === code) {
      setPromoError("This promo code is already applied");
      return;
    }

    const promo = PROMO_CODES[code];

    if (!promo) {
      setPromoError("Invalid promo code");
      return;
    }

    const subtotal = getTotalPrice();
    if (subtotal < promo.minOrder) {
      setPromoError(`Minimum order of $${promo.minOrder} required for this code`);
      return;
    }

    setAppliedPromo({ code, ...promo });
    setPromoCode("");
  };

  const handleRemovePromo = () => {
    setAppliedPromo(null);
    setPromoCode("");
    setPromoError("");
  };

  const calculateDiscount = () => {
    if (!appliedPromo) return 0;
    const subtotal = getTotalPrice();
    if (appliedPromo.type === "percentage") {
      return (subtotal * appliedPromo.discount) / 100;
    } else {
      return appliedPromo.discount;
    }
  };

  const discount = calculateDiscount();
  const subtotal = getTotalPrice();
  const deliveryFee = 2.99;
  const tax = (subtotal - discount) * 0.08;
  const total = subtotal - discount + deliveryFee + tax;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-[#db1020]" style={{ fontFamily: 'Poppins, sans-serif' }}>Shopping Cart</h1>
        {cartItems.length > 0 && (
          <button
            onClick={() => setShowClearConfirm(true)}
            className="flex items-center gap-2 text-[#db1020] hover:text-[#c00e1d] font-semibold transition px-4 py-2 rounded-[16px] hover:bg-[#ffd700] hover:text-[#1F1F1F] min-h-[44px] shadow-soft"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <span className="material-symbols-outlined">delete_sweep</span>
            Clear All
          </button>
        )}
      </div>

      {/* Clear Cart Confirmation Modal */}
      {showClearConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-[16px] p-6 max-w-md w-full mx-4 shadow-large">
            <h3 className="text-2xl font-semibold text-[#1F1F1F] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Clear Cart?</h3>
            <p className="text-[#4A4A4A] mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              Are you sure you want to remove all items from your cart? This action cannot be undone.
            </p>
            <div className="flex gap-4">
              <button
                onClick={handleClearCart}
                className="flex-1 bg-[#db1020] text-white py-3 rounded-[16px] font-semibold hover:bg-[#c00e1d] transition min-h-[44px]"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Yes, Clear Cart
              </button>
              <button
                onClick={() => setShowClearConfirm(false)}
                className="flex-1 bg-gray-200 text-[#1F1F1F] py-3 rounded-[16px] font-semibold hover:bg-gray-300 transition min-h-[44px]"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Remove Item Confirmation Modal */}
      {itemToRemove && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-[16px] p-6 max-w-md w-full mx-4 shadow-large">
            <h3 className="text-2xl font-semibold text-[#1F1F1F] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Remove Item?</h3>
            <p className="text-[#4A4A4A] mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              Are you sure you want to remove &quot;{itemToRemove.name}&quot; from your cart?
            </p>
            <div className="flex gap-4">
              <button
                onClick={confirmRemoveItem}
                className="flex-1 bg-[#db1020] text-white py-3 rounded-[16px] font-semibold hover:bg-[#c00e1d] transition min-h-[44px]"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Yes, Remove
              </button>
              <button
                onClick={() => setItemToRemove(null)}
                className="flex-1 bg-gray-200 text-[#1F1F1F] py-3 rounded-[16px] font-semibold hover:bg-gray-300 transition min-h-[44px]"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-[16px] shadow-soft overflow-hidden flex flex-col md:flex-row gap-4"
              >
                {/* Item Image - Clickable Link */}
                {item.restaurantId ? (
                  <Link
                    to={`/restaurants/${item.restaurantId}`}
                    className="block w-full md:w-48 h-48 md:h-auto flex-shrink-0"
                  >
                    <img
                      src={item.image || "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop"}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop";
                      }}
                    />
                  </Link>
                ) : (
                  <div className="w-full md:w-48 h-48 md:h-auto flex-shrink-0 bg-gray-200 flex items-center justify-center">
                    <span className="material-symbols-outlined text-6xl text-gray-400">image</span>
                  </div>
                )}

                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    {/* Item Name - Clickable Link */}
                    {item.restaurantId ? (
                      <Link
                        to={`/restaurants/${item.restaurantId}`}
                        className="block mb-1"
                      >
                        <h3 className="text-xl font-semibold text-[#1F1F1F] hover:text-[#db1020] transition" style={{ fontFamily: 'Poppins, sans-serif' }}>
                          {item.name}
                        </h3>
                      </Link>
                    ) : (
                      <h3 className="text-xl font-semibold text-[#1F1F1F] mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {item.name}
                      </h3>
                    )}
                    
                    <p className="text-sm text-[#4A4A4A] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>{item.description}</p>
                  </div>

                  {/* Bottom row with price, quantity controls, and remove button */}
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <div className="flex items-center gap-3">
                      <p className="text-[#db1020] font-bold text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        ${item.price.toFixed(2)}
                      </p>
                      <span className="text-[#6B6B6B] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>×</span>
                      <div className="flex items-center border border-gray-300 rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-3 py-1.5 text-gray-700 hover:bg-gray-100 transition min-h-[36px]"
                        >
                          −
                        </button>
                        <span className="px-4 py-1.5 text-gray-800 font-semibold min-h-[36px] flex items-center text-sm">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-1.5 text-gray-700 hover:bg-gray-100 transition min-h-[36px]"
                        >
                          +
                        </button>
                      </div>
                      <span className="text-[#6B6B6B] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>=</span>
                      <p className="text-lg font-bold text-[#1F1F1F]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>

                    <button
                      onClick={() => handleRemoveItem(item.id, item.name)}
                      className="p-2 rounded-[12px] hover:bg-[#ffd700] transition shadow-soft min-h-[36px] flex items-center justify-center flex-shrink-0"
                      title="Remove item"
                      aria-label="Remove item"
                    >
                      <span className="material-symbols-outlined text-2xl text-[#db1020]">delete_sweep</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-[16px] shadow-medium p-6 sticky top-24">
            <h2 className="text-2xl font-semibold text-[#1F1F1F] mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Order Summary
            </h2>

            {/* Promo Code Section */}
            <div className="mb-6 pb-6 border-b border-gray-200">
              <label htmlFor="promo-code" className="block text-gray-700 font-semibold mb-2">
                Promo Code
              </label>
              {appliedPromo ? (
                <div className="bg-[#27742d] bg-opacity-10 border border-[#27742d] rounded-[16px] p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#27742d]">check_circle</span>
                      <span className="text-[#27742d] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>{appliedPromo.code}</span>
                      <span className="text-[#27742d] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {appliedPromo.type === "percentage" 
                          ? `${appliedPromo.discount}% OFF`
                          : `$${appliedPromo.discount} OFF`}
                      </span>
                    </div>
                    <button
                      onClick={handleRemovePromo}
                      className="text-[#db1020] hover:text-[#c00e1d]"
                      title="Remove promo code"
                    >
                      <span className="material-symbols-outlined text-sm">close</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex gap-2">
                  <input
                    type="text"
                    id="promo-code"
                    value={promoCode}
                    onChange={(e) => {
                      setPromoCode(e.target.value.toUpperCase());
                      setPromoError("");
                    }}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        handleApplyPromo();
                      }
                    }}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#db1020] min-h-[44px]"
                    placeholder="Enter code"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  />
                  <button
                    onClick={handleApplyPromo}
                    className="bg-[#db1020] text-white px-4 py-2 rounded-[16px] font-semibold hover:bg-[#c00e1d] transition min-h-[44px]"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Apply
                  </button>
                </div>
              )}
              {promoError && (
                <p className="text-[#db1020] text-sm mt-2 flex items-center gap-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <span className="material-symbols-outlined text-sm">error</span>
                  {promoError}
                </p>
              )}
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-gray-700">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-[#27742d]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <span>Discount ({appliedPromo.code})</span>
                  <span>-${discount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                <span>Delivery Fee</span>
                <span>${deliveryFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-300 pt-4">
                <div className="flex justify-between text-xl font-bold text-[#1F1F1F]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  <span>Total</span>
                  <span className="text-[#db1020]">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            <Link
              to="/checkout"
              className="block w-full bg-[#db1020] text-white py-4 rounded-[16px] font-semibold text-lg hover:bg-[#c00e1d] transition duration-300 shadow-medium mb-4 text-center min-h-[44px] flex items-center justify-center"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Proceed to Checkout
            </Link>

            <Link
              to="/restaurants"
              className="block text-center text-[#db1020] hover:text-[#ffd700] font-semibold transition"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

