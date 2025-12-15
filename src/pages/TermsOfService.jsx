const TermsOfService = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">📋</div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#db1020] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Terms of Service</h1>
          <p className="text-lg text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-[16px] shadow-soft p-8 md:p-12 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-[#1F1F1F] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>1. Acceptance of Terms</h2>
            <p className="text-[#4A4A4A] leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              By accessing and using Hunger Express (&quot;the Service&quot;), you accept and agree to be bound by the terms 
              and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1F1F1F] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>2. Use License</h2>
            <p className="text-[#4A4A4A] leading-relaxed mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              Permission is granted to temporarily use Hunger Express for personal, non-commercial transitory viewing only. 
              This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#4A4A4A] ml-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on the platform</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or &quot;mirror&quot; the materials on any other server</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1F1F1F] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>3. User Accounts</h2>
            <p className="text-[#4A4A4A] leading-relaxed mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              To use certain features of our Service, you must register for an account. You agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#4A4A4A] ml-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and promptly update your account information</li>
              <li>Maintain the security of your password and identification</li>
              <li>Accept all responsibility for activities that occur under your account</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1F1F1F] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>4. Orders and Payment</h2>
            <h3 className="text-xl font-semibold text-[#db1020] mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>Order Placement</h3>
            <p className="text-[#4A4A4A] leading-relaxed mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              When you place an order through our Service, you are making an offer to purchase food from the selected 
              restaurant. We reserve the right to accept or reject your order for any reason, including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#4A4A4A] ml-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              <li>Product availability</li>
              <li>Errors in pricing or product information</li>
              <li>Problems identified by our credit and fraud avoidance department</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#db1020] mb-3 mt-6" style={{ fontFamily: 'Poppins, sans-serif' }}>Payment</h3>
            <p className="text-[#4A4A4A] leading-relaxed mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              Payment must be received by us before we accept your order. We accept various payment methods as displayed 
              during checkout. All prices are in the currency displayed and are subject to change without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1F1F1F] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>5. Cancellation and Refunds</h2>
            <p className="text-[#4A4A4A] leading-relaxed mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              You may cancel your order within 5 minutes of placing it. After this period, cancellation may not be possible 
              if the restaurant has already started preparing your order. Refunds will be processed according to our refund policy:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#4A4A4A] ml-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              <li>Cancelled orders: Full refund within 5-7 business days</li>
              <li>Incorrect or missing items: Refund or replacement at our discretion</li>
              <li>Quality issues: Full refund or replacement</li>
              <li>Refunds are processed to the original payment method</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1F1F1F] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>6. Delivery</h2>
            <p className="text-[#4A4A4A] leading-relaxed mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              We aim to deliver your order within the estimated time frame. However, delivery times are estimates and not 
              guaranteed. Factors that may affect delivery time include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#4A4A4A] ml-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              <li>Restaurant preparation time</li>
              <li>Traffic conditions</li>
              <li>Weather conditions</li>
              <li>Order volume</li>
            </ul>
            <p className="text-[#4A4A4A] leading-relaxed mt-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              You are responsible for providing accurate delivery information. We are not liable for delays or failures 
              in delivery due to incorrect information provided by you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1F1F1F] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>7. Prohibited Uses</h2>
            <p className="text-[#4A4A4A] leading-relaxed mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              You may not use our Service:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#4A4A4A] ml-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
              <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
              <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
              <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
              <li>To submit false or misleading information</li>
              <li>To upload or transmit viruses or any other type of malicious code</li>
              <li>To collect or track the personal information of others</li>
              <li>To spam, phish, pharm, pretext, spider, crawl, or scrape</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1F1F1F] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>8. Limitation of Liability</h2>
            <p className="text-[#4A4A4A] leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              In no event shall Hunger Express, nor its directors, employees, partners, agents, suppliers, or affiliates, 
              be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, 
              loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1F1F1F] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>9. Indemnification</h2>
            <p className="text-[#4A4A4A] leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              You agree to defend, indemnify, and hold harmless Hunger Express and its licensee and licensors, and their 
              employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, 
              losses, liabilities, costs or debt, and expenses (including but not limited to attorney&apos;s fees).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1F1F1F] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>10. Changes to Terms</h2>
            <p className="text-[#4A4A4A] leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is 
              material, we will provide at least 30 days notice prior to any new terms taking effect. What constitutes a 
              material change will be determined at our sole discretion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1F1F1F] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>11. Contact Information</h2>
            <p className="text-[#4A4A4A] leading-relaxed mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-[#f9f5f5] rounded-[16px] p-6">
              <p className="text-[#1F1F1F] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                <strong>Email:</strong> legal@hungerexpress.com
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

export default TermsOfService;

