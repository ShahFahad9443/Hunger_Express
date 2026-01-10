import { Link } from "react-router-dom";
import { Zap, Utensils, CreditCard, CheckCircle, Star } from "lucide-react";


const Home = () => {
  return (
    <div className="">
      {/* HERO SECTION */}
      <div className="bg-[#D70F26] min-h-[400px] flex flex-col items-center justify-center text-center px-4 py-16">
        <h1 className="text-white text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mt-20">
          Delicious Food,
          <br />
          Delivered Fast
        </h1>
        <p className="text-white text-lg md:text-xl mt-6 max-w-2xl font-medium opacity-90">
          Order from your favorite restaurants and get fresh, hot meals
          delivered right to your doorstep in minutes.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            to="/rest"
            className="bg-white text-[#D70F26] px-8 py-3 rounded-xl font-bold text-lg hover:bg-[#FFD200] hover:text-black"
          >
            Browse Restaurants
          </Link>
          <Link
            to="/offer"
            className="bg-[#FFD200] text-black px-8 py-3 rounded-xl font-bold text-lg hover:bg-[#f2c700]"
          >
            View Offers
          </Link>
        </div>
      </div>
      {/* WHY CHOOSE US SECTION */}
      <section className="bg-gray-200 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose Hunger Express?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Fast Delivery */}
            <div className="group bg-white p-8 rounded-2xl shadow-md flex flex-col items-center text-center border-2 border-transparent hover:border-green-500 hover:scale-105 transition-all duration-300">
              <Zap className="w-12 h-12 text-yellow-400 fill-yellow-400 mb-4" />
              <h3 className="text-2xl font-bold mb-3 group-hover:text-green-500">
                Fast Delivery
              </h3>
              <p className="text-gray-600 mb-6">
                Get your food delivered in 30-45 minutes. We ensure your meals
                arrive hot and fresh.
              </p>
              <div className="mt-auto bg-[#1A6332] text-white px-4 py-1.5 rounded-full flex items-center gap-2 text-sm font-semibold">
                <CheckCircle size={16} /> Guaranteed Fresh
              </div>
            </div>

            {/* Card 2: Selection */}
            <div className="group bg-white p-8 rounded-2xl shadow-md flex flex-col items-center text-center border-2 border-transparent hover:border-red-500 hover:scale-105 transition-all duration-300">
              <Utensils className="w-12 h-12 text-black mb-4" />
              <h3 className="text-2xl font-bold mb-3 group-hover:text-red-500">
                Wide Selection
              </h3>
              <p className="text-gray-600 mb-6">
                Choose from hundreds of restaurants offering cuisines from
                around the world.
              </p>
            </div>

            {/* Card 3: Easy Payment */}
            <div className="group bg-white p-8 rounded-2xl shadow-md flex flex-col items-center text-center border-2 border-transparent hover:border-yellow-400 hover:scale-105 transition-all duration-300">
              <CreditCard className="w-12 h-12 text-yellow-600 fill-yellow-500 mb-4" />
              <h3 className="text-2xl font-bold mb-3 group-hover:text-yellow-400">
                Easy Payment
              </h3>
              <p className="text-gray-600 mb-6">
                Multiple payment options including cards, digital wallets, and
                cash on delivery.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* POPULAR RESTAURANTS SECTION (New) */}
      <section className="bg-gray-200 py-10 px-7">
        <div className="max-w-8xl mx-auto">
          {/* Section Header */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Popular Restaurants
            </h2>
            <Link to="/rest" className="text-red-600 font-bold hover:underline">
              View All →
            </Link>
          </div>

          {/* Grid for Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Simple Card 1 */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500"
                  className="h-48 w-full object-cover"
                  alt="Italian"
                />
                <span className="absolute top-3 right-3 bg-yellow-400 text-[15px] font-bold px-2 py-1 rounded ">
                  Italian
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold hover:text-red-500">
                  Italian Bistro
                </h3>
                <p className="text-black-100 text- mt-2">
                  Authentic Italian cuisine with handcrafted pasta and
                  wood-fired pizzas.
                </p>
                <div className="flex justify-between items-center mt-6">
                  <div className="flex items-center text-yellow-400 text-sm">
                    <Star size={14} fill="currentColor" />{" "}
                    <Star size={14} fill="currentColor" />{" "}
                    <Star size={14} fill="currentColor" />{" "}
                    <Star size={14} fill="currentColor" />
                    <span className="text-gray-400 ml-2">4.8</span>
                  </div>
                  <span className="bg-[#1A6332] text-white text-[10px] font-bold px-2 py-1 rounded-lg">
                    30-45 min
                  </span>
                </div>
              </div>
            </div>

            {/* Simple Card 2 */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500"
                  className="h-48 w-full object-cover"
                  alt="Asian"
                />
                <span className="absolute top-3 right-3 bg-yellow-400 text-[10px] font-bold px-2 py-1 rounded">
                  Asian
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold">Asian Fusion</h3>
                <p className="text-black-500 text mt-2">
                  Perfect blend of Asian flavors featuring sushi, ramen, and
                  stir-fries.
                </p>
                <div className="flex justify-between items-center mt-6">
                  <div className="flex items-center text-yellow-400 text-sm">
                    <Star size={14} fill="currentColor" />{" "}
                    <Star size={14} fill="currentColor" />{" "}
                    <Star size={14} fill="currentColor" />{" "}
                    <Star size={14} fill="currentColor" />
                    <span className="text-gray-400 ml-2">4.9</span>
                  </div>
                  <span className="bg-[#1A6332] text-white text-[10px] font-bold px-2 py-1 rounded-lg">
                    30-45 min
                  </span>
                </div>
              </div>
            </div>

            {/* Simple Card 3 */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500"
                  className="h-48 w-full object-cover"
                  alt="American"
                />
                <span className="absolute top-3 right-3 bg-yellow-400 text-[10px] font-bold px-2 py-1 rounded">
                  American
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold">Burger House</h3>
                <p className="text-gray-500 text-sm mt-2">
                  Juicy, flame-grilled burgers with premium beef and signature
                  sauces.
                </p>
                <div className="flex justify-between items-center mt-6">
                  <div className="flex items-center text-yellow-400 text-sm">
                    <Star size={14} fill="currentColor" />{" "}
                    <Star size={14} fill="currentColor" />{" "}
                    <Star size={14} fill="currentColor" />{" "}
                    <Star size={14} fill="currentColor" />
                    <span className="text-gray-400 ml-2">4.7</span>
                  </div>
                  <span className="bg-[#1A6332] text-white text-[10px] font-bold px-2 py-1 rounded-lg">
                    30-45 min
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full bg-[#FFDE33] py-12 px-4 flex flex-col items-center justify-center text-center font-sans">
        {/* Header Section */}
        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="text-3xl" role="img" aria-label="party popper">
            🎉
          </span>
          <h1 className="text-2xl md:text-4xl font-black text-[#1A1A1A] tracking-tight">
            Special Weekend Offer!
          </h1>
        </div>

        {/* Subtext Section */}
        <p className="text-[#1A1A1A] text-lg md:text-xl font-medium mb-8">
          Get 30% OFF on your first order. Use code{" "}
          <span className="font-bold">FIRST30</span> at checkout
        </p>

        {/* Action Button */}
        <Link
          to="/offer"
          className="bg-[#E31826] hover:bg-[#C1141E] text-white font-bold py-4 px-12 rounded-2xl text-lg transition-colors duration-200 shadow-lg active:transform active:scale-95 w-full max-w-md"
        >
          View All Offers
        </Link>
      </div>

      <section className="bg-gray-200 py-16 px-4 font-sans">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A1A1A] mb-16">
            How It Works
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#D31821] w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 shadow-lg">
                1
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">
                Choose Restaurant
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-[250px]">
                Browse through our wide selection of restaurants and cuisines
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#D31821] w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 shadow-lg">
                2
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">
                Select Food
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-[250px]">
                Pick your favorite dishes from the menu and add to cart
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#D31821] w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 shadow-lg">
                3
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">
                Place Order
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-[250px]">
                Complete your order with secure payment and delivery details
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#276F34] w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 shadow-lg">
                4
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">
                Enjoy Food
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-[250px]">
                Receive your delicious meal at your doorstep, hot and fresh
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="font-sans">
        {/* Statistics Bar */}
        <div className="bg-[#D31821] py-12 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
            {/* Stat 1 */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-2">500+</h2>
              <p className="text-sm md:text-base font-medium opacity-90">
                Restaurants
              </p>
            </div>
            {/* Stat 2 */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-2">50K+</h2>
              <p className="text-sm md:text-base font-medium opacity-90">
                Happy Customers
              </p>
            </div>
            {/* Stat 3 */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-2">100K+</h2>
              <p className="text-sm md:text-base font-medium opacity-90">
                Orders Delivered
              </p>
            </div>
            {/* Stat 4 */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-2">4.8</h2>
              <p className="text-sm md:text-base font-medium opacity-90">
                Average Rating
              </p>
            </div>
          </div>
        </div>




        

        {/* Call to Action Section */}
        <div className="bg-gray-200 py-20 px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-4">
              Ready to Order?
            </h2>
            <p className="text-gray-600 text-lg mb-10">
              Join thousands of satisfied customers and get your favorite food
              delivered today!
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/rest"
                className="bg-[#D31821] hover:bg-[#b2141a] text-white font-bold py-4 px-10 rounded-2xl shadow-lg transition-all active:scale-95 w-full sm:w-auto"
              >
                Start Ordering
              </Link>

              <Link
                to="/signup"
                className="bg-gray-200 border-2 border-[#D31821] text-[#D31821] font-bold py-4 px-10 rounded-2xl hover:bg-red-50 transition-all active:scale-95 w-full sm:w-auto"
              >
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;


