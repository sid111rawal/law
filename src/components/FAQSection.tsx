'use client';

export default function FAQSection() {
  const faqs = [
    {
      question: "How precise is your work?",
      answer: "With years of experience serving 2000+ taxpayers, our systems ensure almost flawless accuracy, so clients can focus on growth, not worry about errors."
    },
    {
      question: "What happens if a client isn't fully satisfied?",
      answer: "We view every concern as a chance to improve. Our approach ensures that if expectations aren't met, we take responsibility and make it right—because your trust matters more than anything."
    },
    {
      question: "Who do you typically work with?",
      answer: "From startups managing multiple operations to established businesses navigating complex compliance, we help organizations simplify processes and achieve measurable results."
    },
    {
      question: "Can partnering with you save costs?",
      answer: "Many clients have saved crores in taxes and optimized finances, simply by following our structured and meticulous approach."
    },
    {
      question: "How do you handle complex operations for startups?",
      answer: "We manage all critical processes, ensuring startups run smoothly while they focus on growth, innovation, and scaling."
    },
    {
      question: "Why should I trust your services?",
      answer: "We don't just deliver tasks; we deliver peace of mind, measurable results, and transparency, earning long-term partnerships with those we serve."
    },
    {
      question: "How quickly can clients see benefits?",
      answer: "While every business is unique, most clients notice efficiency and clarity improvements within weeks, and long-term impact often exceeds expectations."
    },
    {
      question: "How do you stay ahead of compliance and regulation changes?",
      answer: "Our team actively monitors updates and adapts solutions in real-time, ensuring clients remain compliant and risk-free."
    },
    {
      question: "What makes your approach different from others?",
      answer: "It's a combination of deep expertise, structured processes, and accountability—we take pride in delivering results while keeping clients informed every step of the way."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-slate sm:text-4xl lg:text-5xl mb-4">
            What You Should Know Before Partnering With Us
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start space-x-4">
                {/* Question Number */}
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-gold text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate mb-3 leading-tight">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gold/10 to-yellow-400/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-serif font-bold text-slate mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join 2000+ satisfied clients who chose quality over convenience. Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#C9A34A] text-white px-8 py-3 rounded-xl font-semibold hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Schedule Free Consultation
              </button>
              <button className="border-2 border-[#C9A34A] text-[#C9A34A] px-8 py-3 rounded-xl font-semibold hover:bg-[#C9A34A] hover:text-white transition-all duration-300">
                Learn More About Our Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
