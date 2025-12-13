const Offers = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <h1 className="text-4xl font-bold text-pink-600 mb-6">Special Offers & Deals</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg shadow-lg p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">🎉 First Order Special</h2>
          <p className="text-xl mb-4">Get 30% OFF on your first order!</p>
          <p className="text-pink-100 mb-4">
            New to Hunger Express? Use code <span className="font-bold">FIRST30</span> at checkout 
            and enjoy 30% discount on your first order. Valid for orders above $20.
          </p>
          <p className="text-sm text-pink-200">Valid until: December 31, 2024</p>
        </div>

        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg shadow-lg p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">🍕 Weekend Special</h2>
          <p className="text-xl mb-4">Buy 2 Get 1 Free on Weekends!</p>
          <p className="text-yellow-100 mb-4">
            Every Friday, Saturday, and Sunday, order any two items and get the third one free. 
            Perfect for sharing with family and friends!
          </p>
          <p className="text-sm text-yellow-200">Valid every weekend</p>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg shadow-lg p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">🚀 Free Delivery</h2>
          <p className="text-xl mb-4">Free Delivery on Orders Above $25</p>
          <p className="text-purple-100 mb-4">
            Order food worth $25 or more and get free delivery to your doorstep. 
            Fast, reliable, and completely free!
          </p>
          <p className="text-sm text-purple-200">No code needed - automatically applied</p>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-lg shadow-lg p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">🎁 Loyalty Rewards</h2>
          <p className="text-xl mb-4">Earn Points with Every Order!</p>
          <p className="text-green-100 mb-4">
            Join our loyalty program and earn 1 point for every dollar spent. 
            Redeem 100 points for $10 off your next order!
          </p>
          <p className="text-sm text-green-200">Sign up now to start earning</p>
        </div>
      </div>

      <div className="bg-gray-100 rounded-lg p-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">How to Redeem Offers</h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Browse our menu and add items to your cart</li>
          <li>Apply the promo code at checkout (if applicable)</li>
          <li>Complete your order and enjoy the savings!</li>
          <li>Some offers are automatically applied - no code needed</li>
        </ol>
      </div>
    </div>
  );
};

export default Offers;

