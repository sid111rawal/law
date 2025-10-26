interface ServiceHighlight {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ServiceHighlightsProps {
  title: string;
  highlights: ServiceHighlight[];
}

export default function ServiceHighlights({ title, highlights }: ServiceHighlightsProps) {
  return (
    <section className="py-20 bg-soft-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate mb-4">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-gold"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center group-hover:bg-gold/20 transition-all duration-300">
                  <div className="text-gold text-xl">
                    {highlight.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-slate group-hover:text-gold transition-colors duration-300">
                  {highlight.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {highlight.description}
              </p>
              <div className="mt-4 flex items-center text-gold font-medium group-hover:translate-x-2 transition-transform duration-300">
                <span>Know More</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
