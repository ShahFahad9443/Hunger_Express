import { useLocation, useNavigate, Link } from "react-router-dom";

const OrderConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { orderNumber, total, discount, promoCode } = location.state || {};

  if (!orderNumber) {
    return (
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-[#db1020] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Order Not Found</h1>
          <p className="text-[#4A4A4A] mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>No order information available.</p>
          <Link
            to="/"
            className="inline-block bg-[#db1020] text-white px-8 py-4 rounded-[16px] font-semibold text-lg hover:bg-[#c00e1d] transition duration-300 shadow-medium min-h-[44px]"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Go to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-[#27742d] bg-opacity-20 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
          <span className="material-symbols-outlined text-[#27742d] text-5xl">check_circle</span>
        </div>
        
        <h1 className="text-4xl font-bold text-[#db1020] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Order Confirmed!</h1>
        <p className="text-[#4A4A4A] text-lg mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
          Thank you for your order. We&apos;ve received it and will start preparing right away.
        </p>

        <div className="bg-white rounded-[16px] shadow-medium p-8 mb-8">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-[#4A4A4A] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>Order Number:</span>
              <span className="text-[#db1020] font-bold text-xl" style={{ fontFamily: 'Poppins, sans-serif' }}>{orderNumber}</span>
            </div>
            {promoCode && discount > 0 && (
              <div className="flex justify-between items-center">
                <span className="text-[#4A4A4A] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>Promo Code Applied:</span>
                <span className="text-[#27742d] font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>{promoCode} (-${discount?.toFixed(2) || "0.00"})</span>
              </div>
            )}
            <div className="flex justify-between items-center border-t pt-4">
              <span className="text-[#4A4A4A] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>Total Amount:</span>
              <span className="text-[#db1020] font-bold text-xl" style={{ fontFamily: 'Poppins, sans-serif' }}>${total?.toFixed(2) || "0.00"}</span>
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
          <Link
            to={`/track-order`}
            state={{ orderNumber }}
            className="bg-[#db1020] text-white px-8 py-4 rounded-[16px] font-semibold text-lg hover:bg-[#c00e1d] transition duration-300 shadow-medium text-center min-h-[44px] flex items-center justify-center gap-2"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <span className="material-symbols-outlined">delivery_dining</span>
            Track Order
          </Link>
          <button
            onClick={() => navigate("/restaurants")}
            className="bg-white text-[#db1020] border-2 border-[#db1020] px-8 py-4 rounded-[16px] font-semibold text-lg hover:bg-[#ffd700] hover:text-[#1F1F1F] transition duration-300 shadow-soft min-h-[44px]"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Order Again
          </button>
          <Link
            to="/"
            className="bg-white text-[#db1020] border-2 border-[#db1020] px-8 py-4 rounded-[16px] font-semibold text-lg hover:bg-[#ffd700] hover:text-[#1F1F1F] transition duration-300 shadow-soft text-center min-h-[44px] flex items-center justify-center"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;

