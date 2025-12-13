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
      <div className="container mx-auto px-4 py-8 mt-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-6xl mb-6">🛒</div>
          <h1 className="text-4xl font-bold text-pink-600 mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 text-lg mb-8">
            Looks like you haven&apos;t added anything to your cart yet.
          </p>
          <Link
            to="/restaurants"
            className="inline-block bg-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-pink-700 transition duration-300 shadow-lg"
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
    <div className="container mx-auto px-4 py-8 mt-20">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-pink-600">Shopping Cart</h1>
        {cartItems.length > 0 && (
          <button
            onClick={() => setShowClearConfirm(true)}
            className="flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold transition px-4 py-2 rounded-lg hover:bg-red-50"
          >
            <span className="material-symbols-outlined">delete_sweep</span>
            Clear All
          </button>
        )}
      </div>

      {/* Clear Cart Confirmation Modal */}
      {showClearConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Clear Cart?</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to remove all items from your cart? This action cannot be undone.
            </p>
            <div className="flex gap-4">
              <button
                onClick={handleClearCart}
                className="flex-1 bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition"
              >
                Yes, Clear Cart
              </button>
              <button
                onClick={() => setShowClearConfirm(false)}
                className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
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
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Remove Item?</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to remove &quot;{itemToRemove.name}&quot; from your cart?
            </p>
            <div className="flex gap-4">
              <button
                onClick={confirmRemoveItem}
                className="flex-1 bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition"
              >
                Yes, Remove
              </button>
              <button
                onClick={() => setItemToRemove(null)}
                className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
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
                className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row gap-4"
              >
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 mb-2">{item.description}</p>
                  <p className="text-pink-600 font-bold text-lg">
                    ${item.price.toFixed(2)}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
                    >
                      −
                    </button>
                    <span className="px-6 py-2 text-gray-800 font-semibold">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
                    >
                      +
                    </button>
                  </div>

                  <div className="text-right">
                    <p className="text-xl font-bold text-gray-800">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>

                  <button
                    onClick={() => handleRemoveItem(item.id, item.name)}
                    className="p-3 rounded-lg hover:bg-red-50 transition"
                    title="Remove item"
                    aria-label="Remove item"
                  >
                    <span className="material-symbols-outlined text-3xl text-red-800">delete_sweep</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Order Summary
            </h2>

            {/* Promo Code Section */}
            <div className="mb-6 pb-6 border-b border-gray-200">
              <label htmlFor="promo-code" className="block text-gray-700 font-semibold mb-2">
                Promo Code
              </label>
              {appliedPromo ? (
                <div className="bg-green-50 border border-green-300 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-green-600">check_circle</span>
                      <span className="text-green-700 font-semibold">{appliedPromo.code}</span>
                      <span className="text-green-600 text-sm">
                        {appliedPromo.type === "percentage" 
                          ? `${appliedPromo.discount}% OFF`
                          : `$${appliedPromo.discount} OFF`}
                      </span>
                    </div>
                    <button
                      onClick={handleRemovePromo}
                      className="text-red-600 hover:text-red-700"
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
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                    placeholder="Enter code"
                  />
                  <button
                    onClick={handleApplyPromo}
                    className="bg-pink-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-pink-700 transition"
                  >
                    Apply
                  </button>
                </div>
              )}
              {promoError && (
                <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
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
                <div className="flex justify-between text-green-600">
                  <span>Discount ({appliedPromo.code})</span>
                  <span>-${discount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between text-gray-700">
                <span>Delivery Fee</span>
                <span>${deliveryFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-300 pt-4">
                <div className="flex justify-between text-xl font-bold text-gray-800">
                  <span>Total</span>
                  <span className="text-pink-600">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            <Link
              to="/checkout"
              className="block w-full bg-pink-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-pink-700 transition duration-300 shadow-lg mb-4 text-center"
            >
              Proceed to Checkout
            </Link>

            <Link
              to="/restaurants"
              className="block text-center text-pink-600 hover:text-pink-700 font-semibold transition"
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

