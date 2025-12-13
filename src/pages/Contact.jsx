const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <h1 className="text-4xl font-bold text-pink-600 mb-8 text-center">Contact Us</h1>
      
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
            <p className="text-gray-700 mb-6">
              Have a question, feedback, or need assistance? We&apos;re here to help! 
              Reach out to us through any of the following channels.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <i className="fas fa-phone text-pink-600 text-xl mr-4 mt-1"></i>
                <div>
                  <h3 className="font-semibold text-gray-800">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-sm text-gray-500">Mon-Sun: 9:00 AM - 9:00 PM</p>
                </div>
              </div>

              <div className="flex items-start">
                <i className="fas fa-envelope text-pink-600 text-xl mr-4 mt-1"></i>
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">support@hungerexpress.com</p>
                  <p className="text-sm text-gray-500">We respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start">
                <i className="fas fa-map-marker-alt text-pink-600 text-xl mr-4 mt-1"></i>
                <div>
                  <h3 className="font-semibold text-gray-800">Address</h3>
                  <p className="text-gray-600">
                    123 Food Street<br />
                    City, State 12345<br />
                    United States
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Business Hours</h2>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between">
                <span className="font-semibold">Monday - Friday</span>
                <span>9:00 AM - 9:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Saturday</span>
                <span>10:00 AM - 10:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Sunday</span>
                <span>10:00 AM - 8:00 PM</span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-pink-600 hover:text-pink-700 text-2xl">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-pink-600 hover:text-pink-700 text-2xl">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-pink-600 hover:text-pink-700 text-2xl">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-pink-600 hover:text-pink-700 text-2xl">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send us a Message</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="What is this regarding?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Tell us how we can help..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="mt-8 bg-gray-100 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Frequently Asked Questions</h3>
          <div className="space-y-4 text-gray-700">
            <div>
              <p className="font-semibold mb-1">How long does delivery take?</p>
              <p className="text-sm">Typically 30-45 minutes depending on your location and restaurant.</p>
            </div>
            <div>
              <p className="font-semibold mb-1">What payment methods do you accept?</p>
              <p className="text-sm">We accept credit cards, debit cards, digital wallets, and cash on delivery.</p>
            </div>
            <div>
              <p className="font-semibold mb-1">Can I cancel my order?</p>
              <p className="text-sm">Yes, you can cancel your order within 5 minutes of placing it through the app.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

