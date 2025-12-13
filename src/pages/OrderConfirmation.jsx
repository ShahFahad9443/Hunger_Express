import { useLocation, useNavigate, Link } from "react-router-dom";

const OrderConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { orderNumber, total, discount, promoCode } = location.state || {};

  if (!orderNumber) {
    return (
      <div className="container mx-auto px-4 py-8 mt-20">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-pink-600 mb-4">Order Not Found</h1>
          <p className="text-gray-600 mb-8">No order information available.</p>
          <Link
            to="/"
            className="inline-block bg-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-pink-700 transition duration-300"
          >
            Go to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-green-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
          <span className="material-symbols-outlined text-green-600 text-5xl">check_circle</span>
        </div>
        
        <h1 className="text-4xl font-bold text-pink-600 mb-4">Order Confirmed!</h1>
        <p className="text-gray-600 text-lg mb-8">
          Thank you for your order. We&apos;ve received it and will start preparing right away.
        </p>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-700 font-semibold">Order Number:</span>
              <span className="text-pink-600 font-bold text-xl">{orderNumber}</span>
            </div>
            {promoCode && discount > 0 && (
              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-semibold">Promo Code Applied:</span>
                <span className="text-green-600 font-bold">{promoCode} (-${discount?.toFixed(2) || "0.00"})</span>
              </div>
            )}
            <div className="flex justify-between items-center border-t pt-4">
              <span className="text-gray-700 font-semibold">Total Amount:</span>
              <span className="text-pink-600 font-bold text-xl">${total?.toFixed(2) || "0.00"}</span>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">What&apos;s Next?</h3>
          <ul className="text-left text-gray-700 space-y-2">
            <li>• You will receive an email confirmation shortly</li>
            <li>• Our kitchen will start preparing your order</li>
            <li>• Estimated delivery time: 30-45 minutes</li>
            <li>• You can track your order in real-time</li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate("/restaurants")}
            className="bg-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-pink-700 transition duration-300 shadow-lg"
          >
            Order Again
          </button>
          <Link
            to="/"
            className="bg-white text-pink-600 border-2 border-pink-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-pink-50 transition duration-300 shadow-lg text-center"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;

