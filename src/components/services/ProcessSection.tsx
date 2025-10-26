interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface ProcessSectionProps {
  title: string;
  steps: ProcessStep[];
}

export default function ProcessSection({ title, steps }: ProcessSectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate mb-4">
            {title}
          </h2>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-500 via-yellow-500 to-yellow-500/50"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Number Circle */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-yellow-500 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 relative z-10 shadow-lg">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-yellow-500 text-xl">
                      {step.icon}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-slate mb-3 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
