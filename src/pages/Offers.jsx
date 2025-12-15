const Offers = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold text-[#db1020] mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>Special Offers & Deals</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-r from-[#db1020] to-[#c00e1d] rounded-[16px] shadow-medium p-8 text-white transform hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 hover:shadow-large group cursor-pointer">
          <h2 className="text-3xl font-bold mb-4 transform group-hover:scale-110 transition-transform duration-300">🎉 First Order Special</h2>
          <p className="text-xl mb-4 group-hover:text-[#ffd700] transition-colors duration-300">Get 30% OFF on your first order!</p>
          <p className="text-white/90 mb-4 group-hover:text-white transition-colors duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>
            New to Hunger Express? Use code <span className="font-bold">FIRST30</span> at checkout 
            and enjoy 30% discount on your first order. Valid for orders above $20.
          </p>
          <p className="text-sm text-white/80 group-hover:text-white/90 transition-colors duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>Valid until: December 31, 2024</p>
        </div>

        <div className="bg-gradient-to-r from-[#ffd700] to-[#ffed4e] rounded-[16px] shadow-medium p-8 text-[#1F1F1F] transform hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 hover:shadow-large group cursor-pointer">
          <h2 className="text-3xl font-bold mb-4 transform group-hover:scale-110 transition-transform duration-300">🍕 Weekend Special</h2>
          <p className="text-xl mb-4 group-hover:text-[#db1020] transition-colors duration-300">Buy 2 Get 1 Free on Weekends!</p>
          <p className="text-[#1F1F1F] mb-4 group-hover:text-[#1F1F1F] transition-colors duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>
            Every Friday, Saturday, and Sunday, order any two items and get the third one free. 
            Perfect for sharing with family and friends!
          </p>
          <p className="text-sm text-[#1F1F1F]/80 group-hover:text-[#1F1F1F] transition-colors duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>Valid every weekend</p>
        </div>

        <div className="bg-gradient-to-r from-[#27742d] to-[#1e5a22] rounded-[16px] shadow-medium p-8 text-white transform hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 hover:shadow-large group cursor-pointer">
          <h2 className="text-3xl font-bold mb-4 transform group-hover:scale-110 transition-transform duration-300" style={{ fontFamily: 'Poppins, sans-serif' }}>🚀 Free Delivery</h2>
          <p className="text-xl mb-4 group-hover:text-[#ffd700] transition-colors duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>Free Delivery on Orders Above $25</p>
          <p className="text-white/90 mb-4 group-hover:text-white transition-colors duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>
            Order food worth $25 or more and get free delivery to your doorstep. 
            Fast, reliable, and completely free!
          </p>
          <p className="text-sm text-white/80 group-hover:text-white/90 transition-colors duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>No code needed - automatically applied</p>
        </div>

        <div className="bg-gradient-to-r from-[#ffd700] to-[#ffed4e] rounded-[16px] shadow-medium p-8 text-[#1F1F1F] transform hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 hover:shadow-large group cursor-pointer">
          <h2 className="text-3xl font-bold mb-4 transform group-hover:scale-110 transition-transform duration-300">🎁 Loyalty Rewards</h2>
          <p className="text-xl mb-4 group-hover:text-[#db1020] transition-colors duration-300">Earn Points with Every Order!</p>
          <p className="text-[#1F1F1F] mb-4 group-hover:text-[#1F1F1F] transition-colors duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>
            Join our loyalty program and earn 1 point for every dollar spent. 
            Redeem 100 points for $10 off your next order!
          </p>
          <p className="text-sm text-[#1F1F1F]/80 group-hover:text-[#1F1F1F] transition-colors duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>Sign up now to start earning</p>
        </div>
      </div>

      {/* Available Promo Codes Section */}
      <div className="bg-white rounded-[16px] shadow-medium p-8 mb-8">
        <h2 className="text-3xl font-bold text-[#db1020] mb-6 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>Available Promo Codes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-2 border-[#db1020] rounded-[16px] p-6 hover:border-[#c00e1d] transition-all duration-300 shadow-soft hover:shadow-large transform hover:-translate-y-2 hover:scale-[1.02] group cursor-pointer bg-white">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-[#db1020] mb-2 group-hover:text-[#c00e1d] transition-colors duration-300" style={{ fontFamily: 'Poppins, sans-serif' }}>FIRST30</h3>
                <p className="text-3xl font-bold text-[#1F1F1F] mb-2 group-hover:text-[#db1020] transition-colors duration-300" style={{ fontFamily: 'Poppins, sans-serif' }}>30% OFF</p>
              </div>
              <span className="material-symbols-outlined text-[#db1020] text-4xl transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">local_offer</span>
            </div>
            <p className="text-[#4A4A4A] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
              Get 30% off on your first order!
            </p>
            <p className="text-sm text-[#6B6B6B]" style={{ fontFamily: 'Inter, sans-serif' }}>
              <span className="font-semibold">Minimum order:</span> $20
            </p>
            <div className="mt-4 p-3 bg-[#ffd700] bg-opacity-20 rounded-[16px]">
              <p className="text-sm text-[#db1020] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
                Use code: <span className="text-lg font-bold">FIRST30</span>
              </p>
            </div>
          </div>

          <div className="border-2 border-[#ffd700] rounded-[16px] p-6 hover:border-[#ffed4e] transition-all duration-300 shadow-soft hover:shadow-large transform hover:-translate-y-2 hover:scale-[1.02] group cursor-pointer bg-white">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-[#ffd700] mb-2 group-hover:text-[#ffed4e] transition-colors duration-300" style={{ fontFamily: 'Poppins, sans-serif' }}>WEEKEND20</h3>
                <p className="text-3xl font-bold text-[#1F1F1F] mb-2 group-hover:text-[#ffd700] transition-colors duration-300" style={{ fontFamily: 'Poppins, sans-serif' }}>20% OFF</p>
              </div>
              <span className="material-symbols-outlined text-[#ffd700] text-4xl transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">local_offer</span>
            </div>
            <p className="text-[#4A4A4A] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
              Perfect for weekend orders!
            </p>
            <p className="text-sm text-[#6B6B6B]" style={{ fontFamily: 'Inter, sans-serif' }}>
              <span className="font-semibold">Minimum order:</span> No minimum
            </p>
            <div className="mt-4 p-3 bg-[#ffd700] bg-opacity-20 rounded-[16px]">
              <p className="text-sm text-[#db1020] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
                Use code: <span className="text-lg font-bold">WEEKEND20</span>
              </p>
            </div>
          </div>

          <div className="border-2 border-[#27742d] rounded-[16px] p-6 hover:border-[#1e5a22] transition-all duration-300 shadow-soft hover:shadow-large transform hover:-translate-y-2 hover:scale-[1.02] group cursor-pointer bg-white">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-[#27742d] mb-2 group-hover:text-[#1e5a22] transition-colors duration-300" style={{ fontFamily: 'Poppins, sans-serif' }}>SAVE10</h3>
                <p className="text-3xl font-bold text-[#1F1F1F] mb-2 group-hover:text-[#27742d] transition-colors duration-300" style={{ fontFamily: 'Poppins, sans-serif' }}>10% OFF</p>
              </div>
              <span className="material-symbols-outlined text-[#27742d] text-4xl transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">local_offer</span>
            </div>
            <p className="text-[#4A4A4A] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
              Save on every order!
            </p>
            <p className="text-sm text-[#6B6B6B]" style={{ fontFamily: 'Inter, sans-serif' }}>
              <span className="font-semibold">Minimum order:</span> $15
            </p>
            <div className="mt-4 p-3 bg-[#27742d] bg-opacity-20 rounded-[16px]">
              <p className="text-sm text-[#27742d] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
                Use code: <span className="text-lg font-bold">SAVE10</span>
              </p>
            </div>
          </div>

          <div className="border-2 border-[#ffd700] rounded-[16px] p-6 hover:border-[#ffed4e] transition-all duration-300 shadow-soft hover:shadow-large transform hover:-translate-y-2 hover:scale-[1.02] group cursor-pointer bg-white">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-[#ffd700] mb-2 group-hover:text-[#ffed4e] transition-colors duration-300" style={{ fontFamily: 'Poppins, sans-serif' }}>FLAT5</h3>
                <p className="text-3xl font-bold text-[#1F1F1F] mb-2 group-hover:text-[#ffd700] transition-colors duration-300" style={{ fontFamily: 'Poppins, sans-serif' }}>$5 OFF</p>
              </div>
              <span className="material-symbols-outlined text-[#ffd700] text-4xl transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">local_offer</span>
            </div>
            <p className="text-[#4A4A4A] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
              Flat $5 discount on your order!
            </p>
            <p className="text-sm text-[#6B6B6B]" style={{ fontFamily: 'Inter, sans-serif' }}>
              <span className="font-semibold">Minimum order:</span> $10
            </p>
            <div className="mt-4 p-3 bg-[#ffd700] bg-opacity-20 rounded-[16px]">
              <p className="text-sm text-[#db1020] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
                Use code: <span className="text-lg font-bold">FLAT5</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f9f5f5] rounded-[16px] shadow-soft p-8 hover:shadow-large transition-all duration-300 transform hover:-translate-y-1 group">
        <h3 className="text-2xl font-semibold text-[#1F1F1F] mb-4 group-hover:text-[#db1020] transition-colors duration-300" style={{ fontFamily: 'Poppins, sans-serif' }}>How to Redeem Offers</h3>
        <ol className="list-decimal list-inside space-y-3 text-[#4A4A4A] group-hover:text-[#1F1F1F] transition-colors duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>
          <li className="hover:text-[#db1020] transition-colors duration-300 cursor-default">Browse our menu and add items to your cart</li>
          <li className="hover:text-[#db1020] transition-colors duration-300 cursor-default">Apply the promo code at checkout (if applicable)</li>
          <li className="hover:text-[#db1020] transition-colors duration-300 cursor-default">Complete your order and enjoy the savings!</li>
          <li className="hover:text-[#db1020] transition-colors duration-300 cursor-default">Some offers are automatically applied - no code needed</li>
        </ol>
      </div>
    </div>
  );
};

export default Offers;

