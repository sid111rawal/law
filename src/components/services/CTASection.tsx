interface CTASectionProps {
  title: string;
  subtitle: string;
  primaryCTA: string;
  secondaryCTA: string;
  onPrimaryClick: () => void;
  onSecondaryClick: () => void;
  backgroundImage?: string;
}

export default function CTASection({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  onPrimaryClick,
  onSecondaryClick
}: CTASectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-soft-white px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
            <div className="text-center">
              <h3 className="text-lg sm:text-xl font-serif font-bold text-slate mb-4">
                {title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-6 max-w-2xl mx-auto">
                {subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={onPrimaryClick}
                  className="bg-[#C9A34A] text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-200 text-sm sm:text-base shadow-lg hover:shadow-xl"
                >
                  {primaryCTA}
                </button>
                <button
                  onClick={onSecondaryClick}
                  className="border-2 border-[#C9A34A] text-[#C9A34A] px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-[#C9A34A] hover:text-white transition-all duration-200 text-sm sm:text-base"
                >
                  {secondaryCTA}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
