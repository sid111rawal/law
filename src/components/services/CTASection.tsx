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
  onSecondaryClick,
  backgroundImage
}: CTASectionProps) {
  return (
    <section className="relative py-20 bg-gradient-to-br from-gold via-yellow-500 to-gold overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Background Image Overlay */}
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
      )}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white leading-tight">
              {title}
            </h2>
            <p className="text-xl text-white/90">
              {subtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onPrimaryClick}
              className="bg-white text-slate px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 hover:text-slate transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {primaryCTA}
            </button>
            <button
              onClick={onSecondaryClick}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {secondaryCTA}
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
    </section>
  );
}
