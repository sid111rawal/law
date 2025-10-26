interface ComparisonItem {
  others: string;
  lawgical: string;
}

interface WhyChooseUsProps {
  title: string;
  subtitle: string;
  comparison: ComparisonItem[];
  benefits: string[];
}

export default function WhyChooseUs({ title, subtitle, comparison, benefits }: WhyChooseUsProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-soft-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600">
            {subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Comparison Table */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-slate mb-8 text-center">The Difference</h3>
            <div className="space-y-6">
              {comparison.map((item, index) => (
                <div key={index} className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
                    <h4 className="font-semibold text-red-800 mb-2">Others</h4>
                    <p className="text-red-600 text-sm">{item.others}</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
                    <h4 className="font-semibold text-green-800 mb-2">Lawgical Station</h4>
                    <p className="text-green-600 text-sm">{item.lawgical}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits List */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-slate mb-6">Why Choose Us</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
