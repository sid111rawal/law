'use client';

import { useState, useEffect } from 'react';

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Business Setup & Structuring",
      tagline: "Start right, grow strong.",
      features: [
        "Incorporation of Pvt. Ltd., LLP, OPC, Partnerships",
        "Smart structuring for tax efficiency & investor readiness",
        "Founders' agreements & compliance roadmap"
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Tax & Compliance Management",
      tagline: "Stay compliant. Stay stress-free.",
      features: [
        "End-to-end GST, TDS, ROC & Income Tax compliance",
        "Proactive planning to save penalties & optimize taxes",
        "365-day compliance monitoring & support"
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      ),
      title: "Litigation & Dispute Resolution",
      tagline: "When challenges arise, we represent you.",
      features: [
        "Expert defense for GST & Income Tax litigation",
        "Handling of assessments, notices & appeals",
        "Trusted representation before authorities"
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Accounting & Virtual CFO Services",
      tagline: "Numbers that tell your growth story.",
      features: [
        "Smart bookkeeping & real-time reporting",
        "Payroll & vendor compliance",
        "Virtual CFO for strategy, MIS & decision-making"
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Funding & Growth Advisory",
      tagline: "Turn ideas into investment-ready businesses.",
      features: [
        "Investor pitch decks & financial modeling",
        "ESOP structuring & cap table management",
        "Compliance for fundraising & due diligence"
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Specialized Business Solutions",
      tagline: "For when your journey needs something extra.",
      features: [
        "Compliance health checks & restructuring",
        "Exit strategy & company closure support",
        "Cross-border taxation & FEMA advisory"
      ]
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 6000); // Auto-scroll every 6 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, services.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds of manual interaction
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? services.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % services.length;
    goToSlide(newIndex);
  };

  const getVisibleServices = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + services.length) % services.length;
      visible.push({ ...services[index], position: i });
    }
    return visible;
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-slate leading-tight px-4">
            Your Business, Our Responsibility
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Looking for… ?
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 md:p-3 hover:bg-gray-50 transition-all duration-200 border border-gray-200 hover:border-gold"
            aria-label="Previous service"
          >
            <svg className="w-4 h-4 md:w-6 md:h-6 text-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 md:p-3 hover:bg-gray-50 transition-all duration-200 border border-gray-200 hover:border-gold"
            aria-label="Next service"
          >
            <svg className="w-4 h-4 md:w-6 md:h-6 text-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel Cards */}
          <div className="flex items-center justify-center gap-2 md:gap-4 px-4 md:px-16">
            {getVisibleServices().map((service, index) => {
              const isCenter = service.position === 0;
              const isLeft = service.position === -1;
              const isRight = service.position === 1;
              
              return (
                <div
                  key={`${currentIndex}-${index}`}
                  className={`
                    transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer transform-gpu
                    ${isCenter 
                      ? 'w-80 h-96 md:w-96 md:h-[28rem] scale-110 z-20 shadow-2xl' 
                      : 'w-64 h-80 md:w-72 md:h-96 scale-95 opacity-75 hover:opacity-90 hover:scale-100 hidden sm:block'
                    }
                    ${isLeft ? '-rotate-2 hover:rotate-0' : isRight ? 'rotate-2 hover:rotate-0' : 'rotate-0'}
                  `}
                  onClick={() => !isCenter && goToSlide((currentIndex + service.position + services.length) % services.length)}
                >
                  <div className="bg-soft-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 ease-out border border-gray-100 hover:border-gold h-full flex flex-col group">
                    <div className="text-gold mb-4 flex justify-center transition-transform duration-500 group-hover:scale-110">
                      {service.icon}
                    </div>
                    <h3 className={`font-semibold text-slate mb-3 text-center transition-all duration-500 break-words hyphens-auto ${isCenter ? 'text-base md:text-lg' : 'text-sm md:text-base'}`}>
                      {service.title}
                    </h3>
                    <p className={`text-gold font-medium mb-4 text-center transition-all duration-500 break-words ${isCenter ? 'text-sm md:text-base' : 'text-xs'}`}>
                      💡 {service.tagline}
                    </p>
                    <div className={`text-gray-600 leading-relaxed text-center flex-grow transition-all duration-500 break-words hyphens-auto ${isCenter ? 'text-sm md:text-base' : 'text-xs'}`}>
                      {isCenter ? (
                        <ul className="space-y-1 text-left">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start transition-all duration-300 delay-100">
                              <span className="text-gold mr-2 mt-1">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <div className="text-center">
                          <p className="text-gray-500 text-xs transition-all duration-300">
                            Click to view details
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-3">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-sm ${
                  index === currentIndex 
                    ? 'bg-gold scale-125 shadow-lg ring-2 ring-gold ring-opacity-30' 
                    : 'bg-slate-400 hover:bg-slate-500 hover:scale-110 hover:shadow-md'
                }`}
                aria-label={`Go to service ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center justify-center p-1 bg-gradient-to-r from-gold to-yellow-500 rounded-full">
            <div className="bg-white rounded-full px-8 py-3">
              <p className="text-slate font-medium">
                ✨ All services come with our 100% notice coverage guarantee
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
