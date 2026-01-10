import { Star, Hamburger } from "lucide-react";

const About = () => {
  return (
    <div className="bg-gray-200">
      <div className="bg-[#D70F26] min-h-[400px] flex flex-col items-center justify-center text-center px-4 py-16">
        <h1 className="text-white text-5xl md:text-6xl font-extrabold tracking-tight leading-tight p-5">
          About Hunger Express
        </h1>
        <p className="text-white text-lg md:text-xl pt-5 max-w-1xl font-bold">
          Delivering Happiness, One Meal at a Time
        </p>
        <p className="text-white md:text-l pt-6 max-w-2xl">
          Since 2020, We have been connecting food lover with amazing
          restaurants, making great food accessible to everyone.    
        </p>
      </div>

      <div className="bg-gray-200 py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
          {/* Stat 1 */}
          <div>
            <h2 className="text-4xl md:text-5xl text-red-600 font-bold mb-2 hover:text-red-700">
              15+
            </h2>
            <p className="text-sm md:text-base font-medium opacity-90 text-black ">
              Restaurants
            </p>
          </div>
          {/* Stat 2 */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-2 text-yellow-500 hover:text-yellow-600">
              10K+
            </h2>
            <p className="text-sm md:text-base font-medium opacity-90 text-black">
              Happy Customers
            </p>
          </div>
          {/* Stat 3 */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-2 text-green-700 hover:text-green-800">
              50K+
            </h2>
            <p className="text-sm md:text-base font-medium opacity-90 text-black">
              Orders Delivered
            </p>
          </div>
          {/* Stat 4 - Star Added Here */}
          <div>
            <div className="flex items-center justify-center gap-2 text-red-600 mb-2 hover:text-red-700">
              <h2 className="text-4xl md:text-5xl font-bold">4.8</h2>
              <Star className="w-8 h-8 md:w-10 md:h-10 fill-current" />
            </div>
            <p className="text-sm md:text-base font-medium opacity-90 text-black">
              Average Rating
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Section 1: Content with a clean accent line */}
        <div className="lg:w-1/2">
          <h2 className="text-5xl font-black mb-8 ">Our Story</h2>
          <div className="space-y-6">
            <p className="text-xl text-gray-600 ">
              Hunger Express was founded in 2020 with a simple mission: to make
              delicious, high-quality food accessible to everyone, delivered
              right to their doorstep.
            </p>
            <p className="text-lg text-gray-500 italic border-l-4 border-gray-200 pl-4">
              What started as a small local delivery service has grown into a
              trusted platform connecting food lovers with the best restaurants
              in town.
            </p>
            <p className="text-xl text-gray-600 ">
              We believe that great food brings people together. Whether you are
              celebrating a special occasion or simply satisfying a craving.
            </p>
          </div>
        </div>

        {/* Section 2: Stylized Feature Card (Modern Twist) */}
        <div className="lg:w-1/2">
          <div className="relative">
            {/* Background decorative shape */}
            <div className="bg-gradient-to-br from-[#FFD700] to-[#FFC107] p-12 rounded-2xl shadow-2xl transform hover:-rotate-3 transition-transform duration-300">
              <div className="flex flex-col gap-6">
                <div className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50">
                  <Hamburger className="w-20 h-12 text-black" />
                </div>

                <div className="">
                  <h3 className="text-3xl font-bold text-black mb-4">
                    Food That Brings Joy
                  </h3>
                  <div className="h-1 w-12 bg-black/20 mb-4"></div>
                  <p className="text-black text-lg font-semibold opacity-90 leading-snug">
                    Every meal is an opportunity to create happiness and bring
                    people together.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mb-24 bg-white border border-white shadow-2xl shadow-slate-400 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:shadow-red-100 group">
        <div className="text-center px-8 py-16">
          <h1 className="font-black text-5xl text-black  duration-300 group-hover:text-red-600">
            Our Mission
          </h1>
          <div className="w-24 h-1 bg-red-500 mx-auto mt-4 rounded-full transition-all duration-500 group-hover:w-48"></div>
          <p className="mt-8 text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto italic">
            To revolutionize the food delivery experience by providing fast,
            reliable, and affordable service while supporting local restaurants
            and bringing communities together through the joy of great food.
          </p>
        </div>
      </div>

      <section className="bg-gray-200 py-7 px-6 font-sans">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-black max-w-2xl mx-auto text-lg">
              We combine speed, variety, and quality to give you the best food
              experience in town.
            </p>
          </div>

          {/* Improved 2-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Card 1: Fast Delivery */}
            <div className="group bg-white p-10 rounded-[2rem] shadow-xl border border-white hover:border-red-400  duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-yellow-50 rounded-2xl flex items-center justify-center mb-6 ">
                <span className="text-4xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 tracking-tight">
                Fast Delivery
              </h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Our efficient delivery network ensures your food arrives hot and
                fresh, typically within{" "}
                <span className="font-bold text-slate-900">30-45 minutes</span>{" "}
                of ordering.
              </p>
            </div>

            {/* Card 2: Wide Selection */}
            <div className="group bg-white p-10 rounded-[2rem] shadow-xl border border-white hover:border-slate-800  duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-4xl">🍴</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 tracking-tight">
                Wide Selection
              </h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Choose from{" "}
                <span className="font-bold text-slate-900">
                  hundreds of restaurants
                </span>{" "}
                offering cuisines from around the world, all in one convenient
                platform.
              </p>
            </div>

            {/* Card 3: Easy Payment */}
            <div className="group bg-white p-10 rounded-[2rem] shadow-xl border border-white hover:border-orange-400  duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 ">
                <span className="text-4xl">💳</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 tracking-tight">
                Easy Payment
              </h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Multiple payment options including{" "}
                <span className="font-bold text-slate-900">
                  Digital Wallets
                </span>{" "}
                and cash on delivery for your ultimate convenience.
              </p>
            </div>

            {/* Card 4: Quality Assured */}
            <div className="group bg-white p-10 rounded-[2rem] shadow-xl  border border-white hover:border-green-500 duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-yellow-50 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-4xl">⭐</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 tracking-tight">
                Quality Assured
              </h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                We partner only with{" "}
                <span className="font-bold text-slate-900">
                  verified restaurants
                </span>{" "}
                that meet our high standards for food quality and hygiene.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gray-200 py-20 px-6 font-sans">
        <div className="max-w-6xl mx-auto">
          {/* IMPROVED VALUES SECTION */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-black mb-2">Our Values</h2>
            <p className="text-slate-800">
              The core principles that drive our daily work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value Card: Customer First */}
            <div className="group bg-white p-8 rounded-[2rem] shadow-lg shadow-slate-200 border border-transparent hover:border-red-500 transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                <span className="text-3xl">❤️</span>
              </div>
              <h3 className="text-xl font-bold text-red-600 mb-3">
                Customer First
              </h3>
              <p className="text-slate-600">
                Your satisfaction is our top priority.
              </p>
            </div>

            {/* Value Card: Quality */}
            <div className="group bg-white p-8 rounded-[2rem] shadow-lg shadow-slate-200 border border-transparent hover:border-yellow-500 transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-yellow-50 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="text-xl font-bold text-yellow-500 mb-3">
                Quality
              </h3>
              <p className="text-slate-600">
                We never compromise on food quality and safety.
              </p>
            </div>

            {/* Value Card: Innovation */}
            <div className="group bg-white p-8 rounded-[2rem] shadow-lg shadow-slate-200 border border-transparent hover:border-blue-500 transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-3">
                Innovation
              </h3>
              <p className="text-slate-600">
                Continuously improving our platform and services.
              </p>
            </div>

            {/* Value Card: Community */}
            <div className="group bg-white p-8 rounded-[2rem] shadow-lg shadow-slate-200 border border-transparent hover:border-orange-500 transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-orange-600 mb-3">
                Community
              </h3>
              <p className="text-slate-600">
                Supporting local restaurants and giving back.
              </p>
            </div>

            {/* Value Card: Transparency */}
            <div className="group bg-white p-8 rounded-[2rem] shadow-lg shadow-slate-200 border border-transparent hover:border-cyan-500 transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-cyan-50 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                <span className="text-3xl">🔍</span>
              </div>
              <h3 className="text-xl font-bold text-cyan-600 mb-3">
                Transparency
              </h3>
              <p className="text-slate-600">
                Clear pricing, honest communication, and reliable service.
              </p>
            </div>

            {/* Value Card: Sustainability */}
            <div className="group bg-white p-8 rounded-[2rem] shadow-lg shadow-slate-200 border border-transparent hover:border-green-500 transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                <span className="text-3xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold text-green-600 mb-3">
                Sustainability
              </h3>
              <p className="text-slate-600">
                Committed to eco-friendly practices and packaging.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto bg-red-700 border border-white shadow-1xl shadow-slate-200 rounded-[1rem]   duration-500 hover:-translate-y-3">
        <div className="text-center px-8 py-16">
          <h1 className="font-black text-5xl text-white duration-300 group-hover:text-red-600">
            Join Us on Our Journey
          </h1>
          <p className="mt-8 text-xl text-white leading-relaxed max-w-2xl mx-auto italic">
            Whether you are a food lover looking for your next meal or a
            restaurant owner wanting to reach more customers, we would love to have
            you as part of the Hunger Express family.
          </p>
          <p className="text-white pt-6 mx-auto italic text-xl">
            Thank you for choosing Hunger Express. We are excited to serve you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
