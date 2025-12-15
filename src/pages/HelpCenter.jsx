const HelpCenter = () => {
  const helpCategories = [
    {
      title: "Ordering & Payment",
      icon: "shopping_cart",
      questions: [
        {
          q: "How do I place an order?",
          a: "Simply browse our restaurants, add items to your cart, and proceed to checkout. You can pay using credit/debit cards, digital wallets, or cash on delivery."
        },
        {
          q: "What payment methods do you accept?",
          a: "We accept credit cards, debit cards, digital wallets (PayPal, Apple Pay, Google Pay), and cash on delivery."
        },
        {
          q: "Can I modify my order after placing it?",
          a: "You can cancel your order within 5 minutes of placing it. After that, please contact our support team for assistance."
        },
        {
          q: "How do I apply a promo code?",
          a: "Enter your promo code in the cart page before checkout. The discount will be automatically applied to your order total."
        }
      ]
    },
    {
      title: "Delivery & Tracking",
      icon: "delivery_dining",
      questions: [
        {
          q: "How long does delivery take?",
          a: "Delivery typically takes 30-45 minutes depending on your location and the restaurant. You'll receive real-time updates on your order status."
        },
        {
          q: "Can I track my order?",
          a: "Yes! Once your order is confirmed, you'll receive a tracking link. You can also track your order in the app or website."
        },
        {
          q: "What areas do you deliver to?",
          a: "We currently deliver to most areas within the city. Enter your address during checkout to see if we deliver to your location."
        },
        {
          q: "Is there a minimum order amount?",
          a: "Minimum order amounts vary by restaurant. Some restaurants have no minimum, while others may require a minimum order of $10-$15."
        }
      ]
    },
    {
      title: "Account & Profile",
      icon: "account_circle",
      questions: [
        {
          q: "How do I create an account?",
          a: "Click on 'Sign Up' in the navigation bar, fill in your details, and verify your email address. It only takes a minute!"
        },
        {
          q: "I forgot my password. How do I reset it?",
          a: "Click on 'Login' and then 'Forgot Password'. Enter your email address and follow the instructions sent to your inbox."
        },
        {
          q: "How do I update my delivery address?",
          a: "Go to your account settings and update your address information. You can also add multiple addresses for convenience."
        },
        {
          q: "How do I view my order history?",
          a: "Log in to your account and navigate to 'My Orders' to see all your past orders, receipts, and reorder your favorites."
        }
      ]
    },
    {
      title: "Refunds & Cancellations",
      icon: "undo",
      questions: [
        {
          q: "Can I cancel my order?",
          a: "Yes, you can cancel your order within 5 minutes of placing it. After that, please contact our support team immediately."
        },
        {
          q: "What is your refund policy?",
          a: "Refunds are processed for cancelled orders or if there's an issue with your order. Refunds are typically processed within 5-7 business days."
        },
        {
          q: "What if my order is incorrect or missing items?",
          a: "Please contact our support team immediately with your order number. We'll investigate and provide a refund or replacement."
        },
        {
          q: "What if my food arrives cold or damaged?",
          a: "We guarantee hot, fresh food. If your order doesn't meet our standards, contact us immediately and we'll make it right."
        }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">💬</div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#db1020] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Help Center</h1>
          <p className="text-xl text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
            Find answers to common questions and get the support you need
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for help..."
              className="w-full px-4 py-3 pl-12 pr-12 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#db1020] min-h-[44px] shadow-soft"
              style={{ fontFamily: 'Inter, sans-serif' }}
            />
            <span className="material-symbols-outlined absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">search</span>
          </div>
        </div>

        {/* Help Categories */}
        <div className="space-y-8">
          {helpCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-[16px] shadow-soft p-6 md:p-8 hover:shadow-large transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#db1020] to-[#c00e1d] rounded-[16px] flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <span className="material-symbols-outlined text-white text-3xl">{category.icon}</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1F1F1F] group-hover:text-[#db1020] transition-colors duration-300" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {category.title}
                </h2>
              </div>
              
              <div className="space-y-4">
                {category.questions.map((item, qIndex) => (
                  <div key={qIndex} className="border-l-4 border-[#ffd700] pl-4 py-2 hover:border-[#db1020] transition-colors duration-300">
                    <h3 className="text-lg font-semibold text-[#1F1F1F] mb-2 hover:text-[#db1020] transition-colors duration-300" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {item.q}
                    </h3>
                    <p className="text-[#4A4A4A] leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="mt-12 bg-gradient-to-r from-[#db1020] to-[#c00e1d] rounded-[16px] p-8 text-white text-center shadow-large transform hover:scale-[1.01] transition-all duration-300 group">
          <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">📞</div>
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Still Need Help?</h2>
          <p className="text-lg text-white/90 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
            Our support team is available 24/7 to assist you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+15551234567"
              className="bg-white text-[#db1020] px-6 py-3 rounded-[16px] font-semibold hover:bg-[#ffd700] hover:text-[#1F1F1F] transition-all duration-300 shadow-medium hover:shadow-large hover:scale-105 min-h-[44px] flex items-center justify-center gap-2 transform"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <span className="material-symbols-outlined">call</span>
              Call Us
            </a>
            <a
              href="mailto:support@hungerexpress.com"
              className="bg-white text-[#db1020] px-6 py-3 rounded-[16px] font-semibold hover:bg-[#ffd700] hover:text-[#1F1F1F] transition-all duration-300 shadow-medium hover:shadow-large hover:scale-105 min-h-[44px] flex items-center justify-center gap-2 transform"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <span className="material-symbols-outlined">mail</span>
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;

