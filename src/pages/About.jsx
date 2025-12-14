const About = () => {
  return (
    <div className="mt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#db1020] to-[#c00e1d] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>About Hunger Express</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              Delivering Happiness, One Meal at a Time
            </p>
            <p className="text-lg text-white/80" style={{ fontFamily: 'Inter, sans-serif' }}>
              Since 2020, we&apos;ve been connecting food lovers with amazing restaurants, 
              making great food accessible to everyone.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center transform hover:-translate-y-2 transition-all duration-300 group cursor-default">
              <div className="text-4xl md:text-5xl font-bold text-[#db1020] mb-2 group-hover:scale-110 transition-transform duration-300" style={{ fontFamily: 'Poppins, sans-serif' }}>15+</div>
              <p className="text-[#4A4A4A] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>Restaurants</p>
            </div>
            <div className="text-center transform hover:-translate-y-2 transition-all duration-300 group cursor-default">
              <div className="text-4xl md:text-5xl font-bold text-[#ffd700] mb-2 group-hover:scale-110 transition-transform duration-300" style={{ fontFamily: 'Poppins, sans-serif' }}>10K+</div>
              <p className="text-[#4A4A4A] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>Happy Customers</p>
            </div>
            <div className="text-center transform hover:-translate-y-2 transition-all duration-300 group cursor-default">
              <div className="text-4xl md:text-5xl font-bold text-[#27742d] mb-2 group-hover:scale-110 transition-transform duration-300" style={{ fontFamily: 'Poppins, sans-serif' }}>50K+</div>
              <p className="text-[#4A4A4A] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>Orders Delivered</p>
            </div>
            <div className="text-center transform hover:-translate-y-2 transition-all duration-300 group cursor-default">
              <div className="text-4xl md:text-5xl font-bold text-[#db1020] mb-2 group-hover:scale-110 transition-transform duration-300" style={{ fontFamily: 'Poppins, sans-serif' }}>4.8★</div>
              <p className="text-[#4A4A4A] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>Average Rating</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Our Story Section */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-4xl font-bold text-[#1F1F1F] mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>Our Story</h2>
                <p className="text-lg text-[#4A4A4A] leading-relaxed mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Hunger Express was founded in 2020 with a simple mission: to make delicious, 
                  high-quality food accessible to everyone, delivered right to their doorstep. 
                  What started as a small local delivery service has grown into a trusted platform 
                  connecting food lovers with the best restaurants in town.
                </p>
                <p className="text-lg text-[#4A4A4A] leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  We believe that great food brings people together. Whether you&apos;re celebrating 
                  a special occasion, enjoying a quiet night in, or simply satisfying a craving, 
                  Hunger Express is here to make it easy and enjoyable.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#ffd700] to-[#ffed4e] rounded-[16px] p-8 shadow-large transform hover:scale-[1.02] transition-all duration-300 group">
                <div className="text-6xl mb-4 transform group-hover:rotate-12 transition-transform duration-300">🍔</div>
                <h3 className="text-2xl font-bold text-[#1F1F1F] mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>Food That Brings Joy</h3>
                <p className="text-[#1F1F1F]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Every meal is an opportunity to create happiness and bring people together.
                </p>
              </div>
            </div>
          </section>

          {/* Mission Section */}
          <section className="mb-16">
            <div className="bg-[#f9f5f5] rounded-[16px] p-8 md:p-12 shadow-soft hover:shadow-large transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="max-w-3xl mx-auto text-center">
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">🎯</div>
                <h2 className="text-4xl font-bold text-[#1F1F1F] mb-6 group-hover:text-[#db1020] transition-colors duration-300" style={{ fontFamily: 'Poppins, sans-serif' }}>Our Mission</h2>
                <p className="text-xl text-[#4A4A4A] leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  To revolutionize the food delivery experience by providing fast, reliable, 
                  and affordable service while supporting local restaurants and bringing communities 
                  together through the joy of great food.
                </p>
              </div>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-[#1F1F1F] mb-8 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-[16px] shadow-soft p-6 hover:shadow-large transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] group cursor-pointer border-2 border-transparent hover:border-[#db1020]">
                <div className="text-4xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">⚡</div>
                <h3 className="text-2xl font-semibold text-[#1F1F1F] mb-3 group-hover:text-[#db1020] transition-colors duration-300" style={{ fontFamily: 'Poppins, sans-serif' }}>Fast Delivery</h3>
                <p className="text-[#4A4A4A] group-hover:text-[#1F1F1F] transition-colors duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Our efficient delivery network ensures your food arrives hot and fresh, 
                  typically within 30-45 minutes of ordering.
                </p>
              </div>

              <div className="bg-white rounded-[16px] shadow-soft p-6 hover:shadow-large transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] group cursor-pointer border-2 border-transparent hover:border-[#ffd700]">
                <div className="text-4xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">🍽️</div>
                <h3 className="text-2xl font-semibold text-[#1F1F1F] mb-3 group-hover:text-[#ffd700] transition-colors duration-300" style={{ fontFamily: 'Poppins, sans-serif' }}>Wide Selection</h3>
                <p className="text-[#4A4A4A] group-hover:text-[#1F1F1F] transition-colors duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Choose from hundreds of restaurants offering cuisines from around the world, 
                  all in one convenient platform.
                </p>
              </div>

              <div className="bg-white rounded-[16px] shadow-soft p-6 hover:shadow-large transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] group cursor-pointer border-2 border-transparent hover:border-[#27742d]">
                <div className="text-4xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">💳</div>
                <h3 className="text-2xl font-semibold text-[#1F1F1F] mb-3 group-hover:text-[#27742d] transition-colors duration-300" style={{ fontFamily: 'Poppins, sans-serif' }}>Easy Payment</h3>
                <p className="text-[#4A4A4A] group-hover:text-[#1F1F1F] transition-colors duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Multiple payment options including credit cards, debit cards, digital wallets, 
                  and cash on delivery for your convenience.
                </p>
              </div>

              <div className="bg-white rounded-[16px] shadow-soft p-6 hover:shadow-large transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] group cursor-pointer border-2 border-transparent hover:border-[#db1020]">
                <div className="text-4xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">⭐</div>
                <h3 className="text-2xl font-semibold text-[#1F1F1F] mb-3 group-hover:text-[#db1020] transition-colors duration-300" style={{ fontFamily: 'Poppins, sans-serif' }}>Quality Assured</h3>
                <p className="text-[#4A4A4A] group-hover:text-[#1F1F1F] transition-colors duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                  We partner only with verified restaurants that meet our high standards 
                  for food quality and hygiene.
                </p>
              </div>
            </div>
          </section>

          {/* Our Values Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-[#1F1F1F] mb-8 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: "❤️", title: "Customer First", desc: "Your satisfaction is our top priority", color: "#db1020" },
                { icon: "✨", title: "Quality", desc: "We never compromise on food quality and safety", color: "#ffd700" },
                { icon: "🚀", title: "Innovation", desc: "Continuously improving our platform and services", color: "#27742d" },
                { icon: "🤝", title: "Community", desc: "Supporting local restaurants and giving back", color: "#db1020" },
                { icon: "🔍", title: "Transparency", desc: "Clear pricing, honest communication, and reliable service", color: "#ffd700" },
                { icon: "🌱", title: "Sustainability", desc: "Committed to eco-friendly practices and packaging", color: "#27742d" }
              ].map((value, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-[16px] shadow-soft p-6 hover:shadow-large transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] group cursor-pointer border-2 border-transparent hover:border-[#db1020]"
                >
                  <div className="text-4xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-[#db1020] transition-colors duration-300" style={{ fontFamily: 'Poppins, sans-serif', color: value.color }}>{value.title}</h3>
                  <p className="text-[#4A4A4A] group-hover:text-[#1F1F1F] transition-colors duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>{value.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-[#db1020] to-[#c00e1d] rounded-[16px] p-8 md:p-12 text-white text-center shadow-large transform hover:scale-[1.01] transition-all duration-300 group">
            <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">🎉</div>
            <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>Join Us on Our Journey</h2>
            <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Whether you&apos;re a food lover looking for your next meal or a restaurant owner 
              wanting to reach more customers, we&apos;d love to have you as part of the Hunger Express family.
            </p>
            <p className="text-lg text-white/80" style={{ fontFamily: 'Inter, sans-serif' }}>
              Thank you for choosing Hunger Express. We&apos;re excited to serve you! 🍔✨
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;

