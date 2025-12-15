import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold text-[#db1020] mb-8 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>Contact Us</h1>
      
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
          <div className="bg-white rounded-[16px] shadow-soft p-3 hover:shadow-large transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] group cursor-pointer">
            <h2 className="text-sm font-semibold text-[#1F1F1F] mb-2 group-hover:text-[#db1020] transition-colors duration-300" style={{ fontFamily: 'Poppins, sans-serif' }}>Get in Touch</h2>
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                <span className="material-symbols-outlined text-[#db1020] text-base transform group-hover:scale-110 transition-transform duration-300">call</span>
                <p className="text-xs text-[#4A4A4A] group-hover:text-[#1F1F1F] transition-colors duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                <span className="material-symbols-outlined text-[#db1020] text-base transform group-hover:scale-110 transition-transform duration-300">mail</span>
                <p className="text-xs text-[#4A4A4A] group-hover:text-[#1F1F1F] transition-colors duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>support@hungerexpress.com</p>
              </div>
              <div className="flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                <span className="material-symbols-outlined text-[#db1020] text-base transform group-hover:scale-110 transition-transform duration-300">location_on</span>
                <p className="text-xs text-[#4A4A4A] group-hover:text-[#1F1F1F] transition-colors duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>123 Food Street</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[16px] shadow-soft p-3 hover:shadow-large transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] group cursor-pointer">
            <h2 className="text-sm font-semibold text-[#1F1F1F] mb-2 group-hover:text-[#db1020] transition-colors duration-300" style={{ fontFamily: 'Poppins, sans-serif' }}>Business Hours</h2>
            <div className="space-y-1 text-[#4A4A4A] mb-2 group-hover:text-[#1F1F1F] transition-colors duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>
              <div className="flex justify-between text-xs hover:text-[#db1020] transition-colors duration-300">
                <span>Mon-Fri</span>
                <span>9AM-9PM</span>
              </div>
              <div className="flex justify-between text-xs hover:text-[#db1020] transition-colors duration-300">
                <span>Sat</span>
                <span>10AM-10PM</span>
              </div>
              <div className="flex justify-between text-xs hover:text-[#db1020] transition-colors duration-300">
                <span>Sun</span>
                <span>10AM-8PM</span>
              </div>
            </div>
            <div className="pt-2 border-t border-gray-200">
              <div className="flex gap-2">
                <a href="#" className="text-[#db1020] hover:text-[#ffd700] transition-all duration-300 transform hover:scale-125 hover:rotate-12" title="Facebook">
                  <span className="material-symbols-outlined text-base">group</span>
                </a>
                <a href="#" className="text-[#db1020] hover:text-[#ffd700] transition-all duration-300 transform hover:scale-125 hover:rotate-12" title="Twitter">
                  <span className="material-symbols-outlined text-base">chat</span>
                </a>
                <a href="#" className="text-[#db1020] hover:text-[#ffd700] transition-all duration-300 transform hover:scale-125 hover:rotate-12" title="Instagram">
                  <span className="material-symbols-outlined text-base">photo_camera</span>
                </a>
                <a href="#" className="text-[#db1020] hover:text-[#ffd700] transition-all duration-300 transform hover:scale-125 hover:rotate-12" title="LinkedIn">
                  <span className="material-symbols-outlined text-base">work</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[16px] shadow-medium p-6 md:p-8 hover:shadow-large transition-all duration-300 transform hover:-translate-y-1 group">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1F1F1F] mb-6 group-hover:text-[#db1020] transition-colors duration-300" style={{ fontFamily: 'Poppins, sans-serif' }}>Send us a Message</h2>
          
          {submitSuccess && (
            <div className="mb-6 p-4 bg-[#27742d] bg-opacity-10 border border-[#27742d] text-[#27742d] rounded-[16px]">
              <div className="flex items-center gap-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                <span className="material-symbols-outlined">check_circle</span>
                <span>Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.</span>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-[#1F1F1F] font-semibold mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                Your Name <span className="text-[#db1020]">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-[16px] focus:outline-none focus:ring-2 min-h-[44px] ${
                  errors.name
                    ? "border-[#db1020] focus:ring-[#db1020]"
                    : "border-gray-300 focus:ring-[#db1020]"
                }`}
                style={{ fontFamily: 'Inter, sans-serif' }}
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="text-[#db1020] text-sm mt-1 flex items-center gap-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <span className="material-symbols-outlined text-sm">error</span>
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-[#1F1F1F] font-semibold mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                Your Email <span className="text-[#db1020]">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-[16px] focus:outline-none focus:ring-2 min-h-[44px] ${
                  errors.email
                    ? "border-[#db1020] focus:ring-[#db1020]"
                    : "border-gray-300 focus:ring-[#db1020]"
                }`}
                style={{ fontFamily: 'Inter, sans-serif' }}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-[#db1020] text-sm mt-1 flex items-center gap-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <span className="material-symbols-outlined text-sm">error</span>
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="subject" className="block text-[#1F1F1F] font-semibold mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                Subject <span className="text-[#db1020]">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-[16px] focus:outline-none focus:ring-2 min-h-[44px] ${
                  errors.subject
                    ? "border-[#db1020] focus:ring-[#db1020]"
                    : "border-gray-300 focus:ring-[#db1020]"
                }`}
                style={{ fontFamily: 'Inter, sans-serif' }}
                placeholder="What is this regarding?"
              />
              {errors.subject && (
                <p className="text-[#db1020] text-sm mt-1 flex items-center gap-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <span className="material-symbols-outlined text-sm">error</span>
                  {errors.subject}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-[#1F1F1F] font-semibold mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                Message <span className="text-[#db1020]">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-[16px] focus:outline-none focus:ring-2 ${
                  errors.message
                    ? "border-[#db1020] focus:ring-[#db1020]"
                    : "border-gray-300 focus:ring-[#db1020]"
                }`}
                style={{ fontFamily: 'Inter, sans-serif' }}
                placeholder="Tell us how we can help..."
              ></textarea>
              {errors.message && (
                <p className="text-[#db1020] text-sm mt-1 flex items-center gap-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <span className="material-symbols-outlined text-sm">error</span>
                  {errors.message}
                </p>
              )}
              {formData.message && !errors.message && (
                <p className="text-[#6B6B6B] text-sm mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {formData.message.length} characters
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-[#db1020] text-white py-3 rounded-[16px] font-semibold hover:bg-[#c00e1d] transition-all duration-300 shadow-medium hover:shadow-large hover:scale-[1.02] min-h-[44px] flex items-center justify-center transform ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined animate-spin">sync</span>
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>

        <div className="mt-8 bg-[#f9f5f5] rounded-[16px] shadow-soft p-6 hover:shadow-large transition-all duration-300 transform hover:-translate-y-1 group">
          <h3 className="text-xl font-semibold text-[#1F1F1F] mb-3 group-hover:text-[#db1020] transition-colors duration-300" style={{ fontFamily: 'Poppins, sans-serif' }}>Frequently Asked Questions</h3>
          <div className="space-y-4 text-[#4A4A4A] group-hover:text-[#1F1F1F] transition-colors duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>
            <div className="hover:bg-white hover:bg-opacity-50 rounded-[12px] p-3 transition-all duration-300 cursor-default">
              <p className="font-semibold mb-1 hover:text-[#db1020] transition-colors duration-300">How long does delivery take?</p>
              <p className="text-sm">Typically 30-45 minutes depending on your location and restaurant.</p>
            </div>
            <div className="hover:bg-white hover:bg-opacity-50 rounded-[12px] p-3 transition-all duration-300 cursor-default">
              <p className="font-semibold mb-1 hover:text-[#db1020] transition-colors duration-300">What payment methods do you accept?</p>
              <p className="text-sm">We accept credit cards, debit cards, digital wallets, and cash on delivery.</p>
            </div>
            <div className="hover:bg-white hover:bg-opacity-50 rounded-[12px] p-3 transition-all duration-300 cursor-default">
              <p className="font-semibold mb-1 hover:text-[#db1020] transition-colors duration-300">Can I cancel my order?</p>
              <p className="text-sm">Yes, you can cancel your order within 5 minutes of placing it through the app.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

