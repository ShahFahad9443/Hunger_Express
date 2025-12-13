import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

// Promo codes database
const PROMO_CODES = {
  FIRST30: { discount: 30, type: "percentage", minOrder: 20 },
  WEEKEND20: { discount: 20, type: "percentage", minOrder: 0 },
  SAVE10: { discount: 10, type: "percentage", minOrder: 15 },
  FLAT5: { discount: 5, type: "fixed", minOrder: 10 },
};

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const [promoCode, setPromoCode] = useState("");
  const [appliedPromo, setAppliedPromo] = useState(null);
  const [promoError, setPromoError] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    paymentMethod: "card",
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }
    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }
    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }
    if (!formData.state.trim()) {
      newErrors.state = "State is required";
    }
    if (!formData.zipCode.trim()) {
      newErrors.zipCode = "Zip code is required";
    }

    if (formData.paymentMethod === "card") {
      if (!formData.cardNumber.trim()) {
        newErrors.cardNumber = "Card number is required";
      } else if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ""))) {
        newErrors.cardNumber = "Card number must be 16 digits";
      }
      if (!formData.cardName.trim()) {
        newErrors.cardName = "Cardholder name is required";
      }
      if (!formData.expiryDate.trim()) {
        newErrors.expiryDate = "Expiry date is required";
      } else if (!/^\d{2}\/\d{2}$/.test(formData.expiryDate)) {
        newErrors.expiryDate = "Format: MM/YY";
      }
      if (!formData.cvv.trim()) {
        newErrors.cvv = "CVV is required";
      } else if (!/^\d{3,4}$/.test(formData.cvv)) {
        newErrors.cvv = "CVV must be 3-4 digits";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        clearCart();
        setIsSubmitting(false);
        const finalSubtotal = getTotalPrice();
        const finalDiscount = calculateDiscount();
        const finalTax = (finalSubtotal - finalDiscount) * 0.08;
        const finalTotal = finalSubtotal - finalDiscount + 2.99 + finalTax;
        
        navigate("/order-confirmation", {
          state: {
            orderNumber: `ORD-${Date.now()}`,
            total: finalTotal,
            discount: finalDiscount,
            promoCode: appliedPromo?.code,
          },
        });
      }, 1500);
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

  const subtotal = getTotalPrice();
  const discount = calculateDiscount();
  const deliveryFee = 2.99;
  const tax = (subtotal - discount) * 0.08;
  const total = subtotal - discount + deliveryFee + tax;

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 mt-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-6xl mb-6">🛒</div>
          <h1 className="text-4xl font-bold text-pink-600 mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 text-lg mb-8">
            Add items to your cart before proceeding to checkout.
          </p>
          <button
            onClick={() => navigate("/restaurants")}
            className="inline-block bg-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-pink-700 transition duration-300 shadow-lg"
          >
            Browse Restaurants
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <h1 className="text-4xl font-bold text-pink-600 mb-8">Checkout</h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Delivery Information */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Delivery Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="fullName" className="block text-gray-700 font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 ${
                    errors.fullName ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="John Doe"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="(555) 123-4567"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <label htmlFor="address" className="block text-gray-700 font-semibold mb-2">
                  Street Address *
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 ${
                    errors.address ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="123 Main St"
                />
                {errors.address && (
                  <p className="text-red-500 text-sm mt-1">{errors.address}</p>
                )}
              </div>

              <div>
                <label htmlFor="city" className="block text-gray-700 font-semibold mb-2">
                  City *
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 ${
                    errors.city ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="New York"
                />
                {errors.city && (
                  <p className="text-red-500 text-sm mt-1">{errors.city}</p>
                )}
              </div>

              <div>
                <label htmlFor="state" className="block text-gray-700 font-semibold mb-2">
                  State *
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 ${
                    errors.state ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="NY"
                />
                {errors.state && (
                  <p className="text-red-500 text-sm mt-1">{errors.state}</p>
                )}
              </div>

              <div>
                <label htmlFor="zipCode" className="block text-gray-700 font-semibold mb-2">
                  Zip Code *
                </label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 ${
                    errors.zipCode ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="10001"
                />
                {errors.zipCode && (
                  <p className="text-red-500 text-sm mt-1">{errors.zipCode}</p>
                )}
              </div>
            </div>
          </section>

          {/* Payment Method */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Payment Method</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <input
                  type="radio"
                  id="card"
                  name="paymentMethod"
                  value="card"
                  checked={formData.paymentMethod === "card"}
                  onChange={handleChange}
                  className="w-5 h-5 text-pink-600"
                />
                <label htmlFor="card" className="text-gray-700 font-semibold cursor-pointer">
                  Credit/Debit Card
                </label>
              </div>

              <div className="flex items-center space-x-4">
                <input
                  type="radio"
                  id="cash"
                  name="paymentMethod"
                  value="cash"
                  checked={formData.paymentMethod === "cash"}
                  onChange={handleChange}
                  className="w-5 h-5 text-pink-600"
                />
                <label htmlFor="cash" className="text-gray-700 font-semibold cursor-pointer">
                  Cash on Delivery
                </label>
              </div>

              {formData.paymentMethod === "card" && (
                <div className="mt-6 space-y-4 border-t pt-6">
                  <div>
                    <label htmlFor="cardNumber" className="block text-gray-700 font-semibold mb-2">
                      Card Number *
                    </label>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      maxLength="19"
                      placeholder="1234 5678 9012 3456"
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 ${
                        errors.cardNumber ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.cardNumber && (
                      <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="cardName" className="block text-gray-700 font-semibold mb-2">
                      Cardholder Name *
                    </label>
                    <input
                      type="text"
                      id="cardName"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 ${
                        errors.cardName ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="John Doe"
                    />
                    {errors.cardName && (
                      <p className="text-red-500 text-sm mt-1">{errors.cardName}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="expiryDate" className="block text-gray-700 font-semibold mb-2">
                        Expiry Date *
                      </label>
                      <input
                        type="text"
                        id="expiryDate"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleChange}
                        maxLength="5"
                        placeholder="MM/YY"
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 ${
                          errors.expiryDate ? "border-red-500" : "border-gray-300"
                        }`}
                      />
                      {errors.expiryDate && (
                        <p className="text-red-500 text-sm mt-1">{errors.expiryDate}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="cvv" className="block text-gray-700 font-semibold mb-2">
                        CVV *
                      </label>
                      <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleChange}
                        maxLength="4"
                        placeholder="123"
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 ${
                          errors.cvv ? "border-red-500" : "border-gray-300"
                        }`}
                      />
                      {errors.cvv && (
                        <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Order Summary</h2>

            {/* Promo Code Section */}
            <div className="mb-6 pb-6 border-b border-gray-200">
              <label htmlFor="promo-code-checkout" className="block text-gray-700 font-semibold mb-2">
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
                      type="button"
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
                    id="promo-code-checkout"
                    value={promoCode}
                    onChange={(e) => {
                      setPromoCode(e.target.value.toUpperCase());
                      setPromoError("");
                    }}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        handleApplyPromo();
                      }
                    }}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                    placeholder="Enter code"
                  />
                  <button
                    type="button"
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

            <div className="space-y-3 mb-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between text-sm text-gray-700">
                  <span>
                    {item.name} x{item.quantity}
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-300 pt-4 space-y-3 mb-6">
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
              <div className="border-t border-gray-300 pt-3">
                <div className="flex justify-between text-xl font-bold text-gray-800">
                  <span>Total</span>
                  <span className="text-pink-600">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-pink-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-pink-700 transition duration-300 shadow-lg ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Processing..." : "Place Order"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;

