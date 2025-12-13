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
                <span className="material-symbols-outlined text-pink-600 text-xl mr-4 mt-1">call</span>
                <div>
                  <h3 className="font-semibold text-gray-800">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-sm text-gray-500">Mon-Sun: 9:00 AM - 9:00 PM</p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="material-symbols-outlined text-pink-600 text-xl mr-4 mt-1">mail</span>
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">support@hungerexpress.com</p>
                  <p className="text-sm text-gray-500">We respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="material-symbols-outlined text-pink-600 text-xl mr-4 mt-1">location_on</span>
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
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#" 
                  className="flex items-center gap-2 text-pink-600 hover:text-pink-700 transition px-4 py-2 rounded-lg hover:bg-pink-50" 
                  title="Facebook"
                >
                  <span className="material-symbols-outlined text-2xl">group</span>
                  <span className="font-semibold">Facebook</span>
                </a>
                <a 
                  href="#" 
                  className="flex items-center gap-2 text-pink-600 hover:text-pink-700 transition px-4 py-2 rounded-lg hover:bg-pink-50" 
                  title="Twitter"
                >
                  <span className="material-symbols-outlined text-2xl">chat</span>
                  <span className="font-semibold">Twitter</span>
                </a>
                <a 
                  href="#" 
                  className="flex items-center gap-2 text-pink-600 hover:text-pink-700 transition px-4 py-2 rounded-lg hover:bg-pink-50" 
                  title="Instagram"
                >
                  <span className="material-symbols-outlined text-2xl">photo_camera</span>
                  <span className="font-semibold">Instagram</span>
                </a>
                <a 
                  href="#" 
                  className="flex items-center gap-2 text-pink-600 hover:text-pink-700 transition px-4 py-2 rounded-lg hover:bg-pink-50" 
                  title="LinkedIn"
                >
                  <span className="material-symbols-outlined text-2xl">work</span>
                  <span className="font-semibold">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send us a Message</h2>
          
          {submitSuccess && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined">check_circle</span>
                <span>Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.</span>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.name
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-pink-500"
                }`}
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">error</span>
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                Your Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.email
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-pink-500"
                }`}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">error</span>
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.subject
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-pink-500"
                }`}
                placeholder="What is this regarding?"
              />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">error</span>
                  {errors.subject}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.message
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-pink-500"
                }`}
                placeholder="Tell us how we can help..."
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">error</span>
                  {errors.message}
                </p>
              )}
              {formData.message && !errors.message && (
                <p className="text-gray-500 text-sm mt-1">
                  {formData.message.length} characters
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700 transition duration-300 ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
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

