const About = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <h1 className="text-4xl font-bold text-pink-600 mb-8 text-center">About Hunger Express</h1>
      
      <div className="max-w-4xl mx-auto">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Story</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Hunger Express was founded in 2020 with a simple mission: to make delicious, 
            high-quality food accessible to everyone, delivered right to their doorstep. 
            What started as a small local delivery service has grown into a trusted platform 
            connecting food lovers with the best restaurants in town.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            We believe that great food brings people together. Whether you&apos;re celebrating 
            a special occasion, enjoying a quiet night in, or simply satisfying a craving, 
            Hunger Express is here to make it easy and enjoyable.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            To revolutionize the food delivery experience by providing fast, reliable, 
            and affordable service while supporting local restaurants and bringing communities 
            together through the joy of great food.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-pink-600 mb-3">⚡ Fast Delivery</h3>
              <p className="text-gray-700">
                Our efficient delivery network ensures your food arrives hot and fresh, 
                typically within 30-45 minutes of ordering.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-pink-600 mb-3">🍽️ Wide Selection</h3>
              <p className="text-gray-700">
                Choose from hundreds of restaurants offering cuisines from around the world, 
                all in one convenient platform.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-pink-600 mb-3">💳 Easy Payment</h3>
              <p className="text-gray-700">
                Multiple payment options including credit cards, debit cards, digital wallets, 
                and cash on delivery for your convenience.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-pink-600 mb-3">⭐ Quality Assured</h3>
              <p className="text-gray-700">
                We partner only with verified restaurants that meet our high standards 
                for food quality and hygiene.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Values</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
            <li><strong>Customer First:</strong> Your satisfaction is our top priority</li>
            <li><strong>Quality:</strong> We never compromise on food quality and safety</li>
            <li><strong>Innovation:</strong> Continuously improving our platform and services</li>
            <li><strong>Community:</strong> Supporting local restaurants and giving back</li>
            <li><strong>Transparency:</strong> Clear pricing, honest communication, and reliable service</li>
          </ul>
        </section>

        <section className="bg-pink-50 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-semibold text-pink-600 mb-4">Join Us on Our Journey</h2>
          <p className="text-gray-700 text-lg mb-6">
            Whether you&apos;re a food lover looking for your next meal or a restaurant owner 
            wanting to reach more customers, we&apos;d love to have you as part of the Hunger Express family.
          </p>
          <p className="text-gray-600">
            Thank you for choosing Hunger Express. We&apos;re excited to serve you!
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;

