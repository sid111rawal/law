export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Share Your Needs',
      description: 'Tell us about your business or tax requirements through a quick consultation',
      icon: '💬'
    },
    {
      number: '2',
      title: 'Get Expert Guidance',
      description: 'Our qualified professionals analyze and create a tailored solution for you',
      icon: '🎯'
    },
    {
      number: '3',
      title: 'Grow with Confidence',
      description: 'We handle everything while you focus on building your business',
      icon: '🚀'
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Three simple steps to get started with professional tax and legal services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-[#C9A34A] via-[#C9A34A] to-[#C9A34A] -z-10 mx-32"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Step Number Badge */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#C9A34A] to-yellow-500 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
                    {step.number}
                  </div>
                </div>

                {/* Icon */}
                <div className="text-5xl text-center mb-6 mt-4">{step.icon}</div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate mb-3 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="bg-[#C9A34A] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-yellow-500 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
}
