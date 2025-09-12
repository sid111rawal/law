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
      title: "Business Accounting",
      description: "Complete bookkeeping, financial statements, and accounting services for businesses of all sizes."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Tax Filing",
      description: "Income tax returns, TDS compliance, and tax planning to minimize your liability legally."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "GST Services",
      description: "GST registration, return filing, compliance, and advisory services for seamless operations."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: "Audit Services",
      description: "Statutory audits, internal audits, and due diligence with detailed reporting and compliance."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      title: "Payroll Services",
      description: "Complete payroll management, compliance with labor laws, and employee benefits administration."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Advisory Services",
      description: "Strategic business advisory, financial planning, and consultation for growth and compliance."
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 4000); // Auto-scroll every 4 seconds

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
          <h2 className="text-3xl font-serif font-bold text-slate sm:text-4xl lg:text-5xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Direct and simple process for company registration, GST cases, income tax TDS, trademark, and more. 
            Quality service with personal attention.
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
          <div className="flex items-center justify-center gap-2 md:gap-4 px-8 md:px-16">
            {getVisibleServices().map((service, index) => {
              const isCenter = service.position === 0;
              const isLeft = service.position === -1;
              const isRight = service.position === 1;
              
              return (
                <div
                  key={`${currentIndex}-${index}`}
                  className={`
                    transition-all duration-500 ease-in-out cursor-pointer
                    ${isCenter 
                      ? 'w-72 h-80 md:w-80 md:h-96 scale-110 z-20 shadow-2xl' 
                      : 'w-56 h-64 md:w-64 md:h-80 scale-95 opacity-75 hover:opacity-90 hidden sm:block'
                    }
                    ${isLeft ? '-rotate-2' : isRight ? 'rotate-2' : 'rotate-0'}
                  `}
                  onClick={() => !isCenter && goToSlide((currentIndex + service.position + services.length) % services.length)}
                >
                  <div className="bg-soft-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gold h-full flex flex-col">
                    <div className="text-gold mb-4 flex justify-center">
                      {service.icon}
                    </div>
                    <h3 className={`font-semibold text-slate mb-3 text-center ${isCenter ? 'text-lg md:text-xl' : 'text-base md:text-lg'}`}>
                      {service.title}
                    </h3>
                    <p className={`text-gray-600 leading-relaxed text-center flex-grow ${isCenter ? 'text-sm md:text-base' : 'text-xs md:text-sm'}`}>
                      {service.description}
                    </p>
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
                className={`w-4 h-4 rounded-full transition-all duration-300 shadow-sm ${
                  index === currentIndex 
                    ? 'bg-gold scale-125 shadow-lg' 
                    : 'bg-slate-400 hover:bg-slate-500 hover:scale-110'
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
