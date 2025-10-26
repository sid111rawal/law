'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      title: "Personal Tax & Individual Advisory",
      tagline: "Clarity. Compliance. Confidence.",
      features: [
        "ITR filing for Salaried, Business, NRI & Freelance",
        "Tax planning & investment advisory",
        "Capital gains & property transactions"
      ],
      href: "/services/personal-tax"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Business Tax & Corporate Advisory",
      tagline: "Precision in Planning. Protection in Practice.",
      features: [
        "Corporate tax planning & compliance",
        "Transfer pricing & international taxation",
        "Tax-efficient business structuring"
      ],
      href: "/services/business-tax"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "GST Services & Litigation Support",
      tagline: "From Returns to Rescues — Your Complete GST Partner.",
      features: [
        "GST registration, filing & reconciliation",
        "GST litigation & notice handling",
        "ITC optimization & compliance monitoring"
      ],
      href: "/services/gst"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      title: "Statutory Audit & Assurance Services",
      tagline: "Integrity in Numbers. Insight in Every Report.",
      features: [
        "Independent statutory audits",
        "Financial statement verification",
        "Compliance & governance reporting"
      ],
      href: "/services/statutory-audit"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Internal Audit & Risk Advisory",
      tagline: "Beyond Numbers. Building Systems of Trust.",
      features: [
        "Risk assessment & control testing",
        "Process improvement & efficiency",
        "Governance & compliance frameworks"
      ],
      href: "/services/internal-audit"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "ROC Compliance & Corporate Governance",
      tagline: "Because a Company's Real Strength Lies in Its Discipline.",
      features: [
        "Annual compliance filing (AOC-4, MGT-7)",
        "Event-based compliances & XBRL",
        "Strike-off revival & legal representation"
      ],
      href: "/services/roc-compliance"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Labour Law Registration & Compliance",
      tagline: "Because Every Business Runs Better When It Runs Right.",
      features: [
        "EPF, ESIC & Professional Tax registration",
        "Labour welfare fund compliance",
        "Contract labour & factory act compliance"
      ],
      href: "/services/labour-law"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Bookkeeping & Accounting Services",
      tagline: "Where Numbers Make Sense — and Businesses Make Profit.",
      features: [
        "Monthly bookkeeping & reconciliation",
        "MIS & financial reporting",
        "CFO-lite advisory & cost optimization"
      ],
      href: "/services/bookkeeping"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      title: "Payroll Services & HR Compliance",
      tagline: "Because Paying Right Builds Trust — and Great Teams.",
      features: [
        "Monthly payroll processing",
        "PF, ESIC, TDS & Professional Tax filing",
        "Employee tax support & Form 16 generation"
      ],
      href: "/services/payroll"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Business Advisory & Strategic Consulting",
      tagline: "Where Logic Meets Vision — and Strategy Meets Execution.",
      features: [
        "Business structure & strategy advisory",
        "Financial planning & growth consulting",
        "Startup & investor readiness consulting"
      ],
      href: "/services/business-advisory"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Company Registration & Business Formation",
      tagline: "Because How You Start — Decides How Far You Go.",
      features: [
        "Pvt Ltd, LLP, OPC registration",
        "Business structure consultation",
        "Post-incorporation compliance support"
      ],
      href: "/services/company-registration"
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
                        <div className="space-y-4">
                          <ul className="space-y-1 text-left">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start transition-all duration-300 delay-100">
                                <span className="text-gold mr-2 mt-1">•</span>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="pt-2">
                            <Link 
                              href={service.href}
                              className="inline-block bg-yellow-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-yellow-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                              style={{ color: 'white' }}
                            >
                              Learn More →
                            </Link>
                          </div>
                        </div>
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
