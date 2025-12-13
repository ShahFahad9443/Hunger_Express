const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🔒</div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#db1020] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Privacy Policy</h1>
          <p className="text-lg text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-[16px] shadow-soft p-8 md:p-12 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-[#1F1F1F] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>1. Introduction</h2>
            <p className="text-[#4A4A4A] leading-relaxed mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              Hunger Express (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use 
              our food delivery platform and services.
            </p>
            <p className="text-[#4A4A4A] leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              By using our services, you agree to the collection and use of information in accordance with this policy. 
              If you do not agree with our policies and practices, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1F1F1F] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>2. Information We Collect</h2>
            <h3 className="text-xl font-semibold text-[#db1020] mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>Personal Information</h3>
            <p className="text-[#4A4A4A] leading-relaxed mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#4A4A4A] ml-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              <li>Name, email address, phone number, and delivery address</li>
              <li>Payment information (processed securely through third-party payment processors)</li>
              <li>Account credentials and profile information</li>
              <li>Order history and preferences</li>
              <li>Communications with our customer support team</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#db1020] mb-3 mt-6" style={{ fontFamily: 'Poppins, sans-serif' }}>Automatically Collected Information</h3>
            <p className="text-[#4A4A4A] leading-relaxed mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              When you use our services, we automatically collect:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#4A4A4A] ml-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              <li>Device information (IP address, browser type, device type)</li>
              <li>Usage data (pages visited, features used, time spent)</li>
              <li>Location data (with your permission, for delivery purposes)</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1F1F1F] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>3. How We Use Your Information</h2>
            <p className="text-[#4A4A4A] leading-relaxed mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#4A4A4A] ml-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              <li>Process and fulfill your orders</li>
              <li>Communicate with you about your orders, account, and our services</li>
              <li>Send you promotional offers and updates (with your consent)</li>
              <li>Improve our services and develop new features</li>
              <li>Prevent fraud and ensure security</li>
              <li>Comply with legal obligations</li>
              <li>Personalize your experience and recommendations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1F1F1F] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>4. Information Sharing and Disclosure</h2>
            <p className="text-[#4A4A4A] leading-relaxed mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#4A4A4A] ml-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              <li><strong>Restaurant Partners:</strong> To fulfill your orders</li>
              <li><strong>Delivery Partners:</strong> To deliver your orders</li>
              <li><strong>Payment Processors:</strong> To process payments securely</li>
              <li><strong>Service Providers:</strong> Who assist us in operating our platform</li>
              <li><strong>Legal Authorities:</strong> When required by law or to protect our rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1F1F1F] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>5. Data Security</h2>
            <p className="text-[#4A4A4A] leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              We implement appropriate technical and organizational measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet 
              is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1F1F1F] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>6. Your Rights</h2>
            <p className="text-[#4A4A4A] leading-relaxed mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              You have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#4A4A4A] ml-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              <li>Access and receive a copy of your personal data</li>
              <li>Rectify inaccurate or incomplete data</li>
              <li>Request deletion of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Withdraw consent for marketing communications</li>
              <li>Request data portability</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1F1F1F] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>7. Cookies and Tracking</h2>
            <p className="text-[#4A4A4A] leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              We use cookies and similar tracking technologies to enhance your experience, analyze usage, and assist 
              with marketing efforts. You can control cookies through your browser settings, but this may affect 
              functionality of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1F1F1F] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>8. Children&apos;s Privacy</h2>
            <p className="text-[#4A4A4A] leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal 
              information from children. If you believe we have collected information from a child, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1F1F1F] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>9. Changes to This Policy</h2>
            <p className="text-[#4A4A4A] leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
              policy on this page and updating the &quot;Last updated&quot; date. Your continued use of our services after 
              changes become effective constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1F1F1F] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>10. Contact Us</h2>
            <p className="text-[#4A4A4A] leading-relaxed mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
            </p>
            <div className="bg-[#f9f5f5] rounded-[16px] p-6">
              <p className="text-[#1F1F1F] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                <strong>Email:</strong> privacy@hungerexpress.com
              </p>
              <p className="text-[#1F1F1F] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                <strong>Phone:</strong> +1 (555) 123-4567
              </p>
              <p className="text-[#1F1F1F]" style={{ fontFamily: 'Inter, sans-serif' }}>
                <strong>Address:</strong> 123 Food Street, City, State 12345
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

