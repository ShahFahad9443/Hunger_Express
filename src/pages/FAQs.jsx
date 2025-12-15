import { useState } from "react";
import { Link } from "react-router-dom";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: "General",
      questions: [
        {
          q: "What is Hunger Express?",
          a: "Hunger Express is a food delivery platform that connects you with the best restaurants in your area. We deliver delicious meals right to your doorstep, making it easy to enjoy your favorite foods from the comfort of your home."
        },
        {
          q: "How do I get started?",
          a: "Getting started is easy! Simply create an account, browse our restaurant selection, add items to your cart, and place your order. You can pay online or choose cash on delivery."
        },
        {
          q: "Is there a delivery fee?",
          a: "Delivery fees vary by restaurant and location. Some restaurants offer free delivery on orders above a certain amount. You'll see the delivery fee before you complete your order."
        },
        {
          q: "Do you offer gift cards?",
          a: "Yes! Gift cards are available and make perfect gifts for food lovers. You can purchase them through our website or mobile app."
        }
      ]
    },
    {
      category: "Orders",
      questions: [
        {
          q: "How do I track my order?",
          a: "Once your order is confirmed, you'll receive a tracking link via email and SMS. You can also track your order in real-time through your account dashboard."
        },
        {
          q: "Can I schedule an order for later?",
          a: "Yes! During checkout, you can select a preferred delivery time. We'll ensure your order arrives at the time you specify."
        },
        {
          q: "What if I need to change my delivery address?",
          a: "You can update your delivery address in your account settings or contact our support team if your order is already placed. We'll do our best to accommodate changes."
        },
        {
          q: "How do I reorder a previous order?",
          a: "Go to your order history, find the order you want to repeat, and click 'Reorder'. All items will be added to your cart automatically."
        }
      ]
    },
    {
      category: "Payment",
      questions: [
        {
          q: "What payment methods are accepted?",
          a: "We accept all major credit and debit cards, digital wallets (PayPal, Apple Pay, Google Pay), and cash on delivery. All payment information is securely processed."
        },
        {
          q: "Is my payment information secure?",
          a: "Absolutely! We use industry-standard encryption to protect your payment information. We never store your full card details on our servers."
        },
        {
          q: "Can I get a refund?",
          a: "Yes, refunds are available for cancelled orders or if there's an issue with your order. Refunds are processed within 5-7 business days to your original payment method."
        },
        {
          q: "Do you accept international cards?",
          a: "Yes, we accept international credit and debit cards. However, some cards may require additional verification."
        }
      ]
    },
    {
      category: "Restaurants",
      questions: [
        {
          q: "How do you choose which restaurants to partner with?",
          a: "We carefully vet all restaurants to ensure they meet our quality and hygiene standards. We partner with restaurants that share our commitment to excellent food and service."
        },
        {
          q: "Can I request a restaurant to be added?",
          a: "Yes! We love hearing from our customers. Contact us with your restaurant suggestion, and we'll reach out to them about joining our platform."
        },
        {
          q: "Are all restaurants available for delivery?",
          a: "Restaurant availability depends on your delivery location and the restaurant's operating hours. You'll see available restaurants when you enter your address."
        },
        {
          q: "Do restaurants offer special dietary options?",
          a: "Many of our partner restaurants offer vegetarian, vegan, gluten-free, and other dietary options. Use our filters to find restaurants that meet your dietary needs."
        }
      ]
    },
    {
      category: "Account",
      questions: [
        {
          q: "How do I create an account?",
          a: "Click 'Sign Up' in the navigation bar, enter your details, and verify your email. Creating an account is free and takes less than a minute."
        },
        {
          q: "I forgot my password. What should I do?",
          a: "Click 'Login' and then 'Forgot Password'. Enter your email address, and we'll send you instructions to reset your password."
        },
        {
          q: "Can I have multiple delivery addresses?",
          a: "Yes! You can save multiple addresses in your account for home, work, or any other location. This makes ordering even more convenient."
        },
        {
          q: "How do I delete my account?",
          a: "Contact our support team, and we'll help you delete your account. Please note that this action cannot be undone."
        }
      ]
    }
  ];

  const toggleQuestion = (categoryIndex, questionIndex) => {
    const index = `${categoryIndex}-${questionIndex}`;
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">❓</div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#db1020] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Frequently Asked Questions</h1>
          <p className="text-xl text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
            Everything you need to know about Hunger Express
          </p>
        </div>

        {/* FAQs by Category */}
        <div className="space-y-8">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-[16px] shadow-soft p-6 md:p-8 hover:shadow-large transition-all duration-300">
              <h2 className="text-2xl font-bold text-[#1F1F1F] mb-6 pb-4 border-b-2 border-[#ffd700]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {category.category}
              </h2>
              
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const index = `${categoryIndex}-${questionIndex}`;
                  const isOpen = openIndex === index;
                  
                  return (
                    <div
                      key={questionIndex}
                      className="border border-gray-200 rounded-[16px] overflow-hidden hover:border-[#db1020] transition-all duration-300"
                    >
                      <button
                        onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                        className="w-full px-6 py-4 flex items-center justify-between text-left bg-white hover:bg-[#f9f5f5] transition-colors duration-300 group"
                      >
                        <h3 className="text-lg font-semibold text-[#1F1F1F] group-hover:text-[#db1020] transition-colors duration-300 pr-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                          {faq.q}
                        </h3>
                        <span className={`material-symbols-outlined text-[#db1020] transform transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
                          expand_more
                        </span>
                      </button>
                      {isOpen && (
                        <div className="px-6 py-4 bg-[#f9f5f5] border-t border-gray-200">
                          <p className="text-[#4A4A4A] leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                            {faq.a}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="mt-12 bg-gradient-to-r from-[#ffd700] to-[#ffed4e] rounded-[16px] p-8 text-center shadow-large transform hover:scale-[1.01] transition-all duration-300 group">
          <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">💡</div>
          <h2 className="text-3xl font-bold text-[#1F1F1F] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Still Have Questions?</h2>
          <p className="text-lg text-[#1F1F1F] mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
            Can&apos;t find what you&apos;re looking for? Our support team is here to help!
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#db1020] text-white px-8 py-3 rounded-[16px] font-semibold hover:bg-[#c00e1d] transition-all duration-300 shadow-medium hover:shadow-large hover:scale-105 min-h-[44px] transform"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FAQs;

