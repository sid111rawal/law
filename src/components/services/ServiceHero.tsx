'use client';

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc?: string;
  ctaPrimary: string;
  ctaSecondary: string;
  onPrimaryClick: () => void;
  onSecondaryClick: () => void;
}

export default function ServiceHero({
  title,
  subtitle,
  description,
  imageSrc,
  ctaPrimary,
  ctaSecondary,
  onPrimaryClick,
  onSecondaryClick
}: ServiceHeroProps) {
  return (
    <section className="relative h-screen bg-gradient-to-br from-soft-white via-white to-gray-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-slate/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex items-center justify-center py-8">
        <div className="text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate leading-tight mb-4">
            {title}
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-yellow-500 font-medium mb-6">
            {subtitle}
          </p>
          
          {/* Description */}
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
            {description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onPrimaryClick}
              className="bg-yellow-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {ctaPrimary}
            </button>
            <button
              onClick={onSecondaryClick}
              className="bg-transparent border-2 border-yellow-500 text-yellow-500 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {ctaSecondary}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}