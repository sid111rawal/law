'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [isITRSeason, setIsITRSeason] = useState(false);
  const [currentMetricsIndex, setCurrentMetricsIndex] = useState(0);

  useEffect(() => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1; // getMonth() returns 0-11, so add 1
    // ITR season is typically April (4) to July (7)
    setIsITRSeason(currentMonth >= 4 && currentMonth <= 7);
  }, []);

  // Metrics data
  const metricsData = [
    {
      number: "1000+",
      title: "Businesses Structured Right",
      subtitle: "From incorporation to compliance",
      position: "top-left"
    },
    {
      number: "250+",
      title: "Companies Guided",
      subtitle: "Accounting & Books",
      position: "top-right"
    },
    {
      number: "200+",
      title: "Complex Cases Resolved",
      subtitle: "Tax & Legal support",
      position: "middle-left"
    },
    {
      number: "2.5 Cr+",
      title: "Taxes Saved",
      subtitle: "Every Year",
      position: "middle-right"
    },
    {
      number: "1.2 Cr+",
      title: "Penalties Prevented",
      subtitle: "Shielding businesses",
      position: "bottom-left"
    },
    {
      number: "2000+",
      title: "ITRs Filed",
      subtitle: "With Care in 2025",
      position: "bottom-right"
    },
    {
      number: "15+",
      title: "Years Expertise",
      subtitle: "Real professionals",
      position: "center-bottom"
    }
  ];

  // Rotate metrics every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetricsIndex((prevIndex) => (prevIndex + 1) % metricsData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [metricsData.length]);

  // Get current metrics to display (3 at a time)
  const getCurrentMetrics = () => {
    const current = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentMetricsIndex + i) % metricsData.length;
      current.push(metricsData[index]);
    }
    return current;
  };

  const heroContent = isITRSeason ? {
    headline: "File Your ITR With Experts — Save Taxes, Stay Stress-Free",
    subtext: "No bots. No hidden fees. Just trusted professionals working for you.",
    ctaText: "File with Lawgical",
    ctaHref: "/itr-filing"
  } : {
    headline: "Lawgical Station — Where Your Business Finds Growth",
    subtext: "From tax planning to compliance, we guide and protect your business every day of the year.",
    ctaText: "Talk to a Consultant",
    ctaHref: "/contact"
  };

  return (
    <section className="bg-white pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-12">
          {/* Content */}
          <div className="flex-1 md:flex-[1.2]">
            <div className="text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate leading-tight">
                {heroContent.headline}
              </h1>
              
              <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto md:mx-0">
                {heroContent.subtext}
              </p>

              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
                <Link 
                  href={heroContent.ctaHref}
                  className="group relative bg-[#C9A34A] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-yellow-500 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-center"
                >
                  <span className="relative z-10">{heroContent.ctaText}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-[#C9A34A] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link 
                  href="#services"
                  className="group border-2 border-slate text-slate px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-slate hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center relative overflow-hidden"
                >
                  <span className="relative z-10">Our Services</span>
                  <div className="absolute inset-0 bg-slate transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                </Link>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="flex-1 md:flex-[0.8] relative w-full md:w-auto">
            <Image 
              src="/images/hero_img.png" 
              alt="Lawgical Station - Professional Chartered Accountants"
              width={600}
              height={400}
              className="w-full h-auto max-w-md mx-auto md:max-w-none"
            />
            
            {/* Rotating Metrics Cards */}
            <div className="absolute inset-0 pointer-events-none">
              {getCurrentMetrics().map((metric, index) => {
                const getPositionClasses = (position: string) => {
                  switch (position) {
                    case 'top-left':
                      return 'top-4 left-2 md:top-8 md:left-4';
                    case 'top-right':
                      return 'top-6 right-2 md:top-12 md:right-4';
                    case 'middle-left':
                      return 'top-1/2 left-1 md:top-1/2 md:left-2 transform -translate-y-1/2';
                    case 'middle-right':
                      return 'top-1/2 right-1 md:top-1/2 md:right-2 transform -translate-y-1/2';
                    case 'bottom-left':
                      return 'bottom-8 left-2 md:bottom-16 md:left-4';
                    case 'bottom-right':
                      return 'bottom-6 right-2 md:bottom-12 md:right-4';
                    case 'center-bottom':
                      return 'bottom-2 left-1/2 md:bottom-4 md:left-1/2 transform -translate-x-1/2';
                    default:
                      return 'top-4 left-2 md:top-8 md:left-4';
                  }
                };

                const getAnimationClass = (position: string) => {
                  if (position.includes('middle')) {
                    return position.includes('left') ? 'animate-slide-in-left' : 'animate-slide-in-right';
                  }
                  return 'animate-fade-in-up';
                };

                return (
                  <div
                    key={`${metric.number}-${currentMetricsIndex}-${index}`}
                    className={`absolute ${getPositionClasses(metric.position)} ${getAnimationClass(metric.position)} opacity-0`}
                    style={{
                      animationDelay: `${index * 0.2}s`,
                      animationFillMode: 'forwards'
                    }}
                  >
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg md:rounded-xl p-2 md:p-4 shadow-lg border border-white/20 max-w-32 md:max-w-48 transition-all duration-500">
                      <div className="text-lg md:text-2xl font-bold text-[#C9A34A]">{metric.number}</div>
                      <p className="text-xs md:text-sm font-semibold text-slate">{metric.title}</p>
                      <p className="text-xs text-gray-500 hidden md:block">{metric.subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
