'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [isITRSeason, setIsITRSeason] = useState(false);

  useEffect(() => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1; // getMonth() returns 0-11, so add 1
    // ITR season is typically April (4) to July (7)
    setIsITRSeason(currentMonth >= 4 && currentMonth <= 7);
  }, []);

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
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          {/* Content */}
          <div className="lg:col-span-7">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-serif font-bold text-slate sm:text-5xl lg:text-6xl leading-tight">
                {heroContent.headline}
              </h1>
              
              <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0">
                {heroContent.subtext}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link 
                  href={heroContent.ctaHref}
                  className="group relative bg-gold text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-yellow-500 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-center"
                >
                  <span className="relative z-10">{heroContent.ctaText}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-gold rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link 
                  href="#services"
                  className="group border-2 border-slate text-slate px-8 py-4 rounded-xl text-lg font-semibold hover:bg-slate hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center relative overflow-hidden"
                >
                  <span className="relative z-10">Our Services</span>
                  <div className="absolute inset-0 bg-slate transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                </Link>
              </div>
            </div>

            {/* Impact Metrics */}
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-gold">1000+</div>
                <p className="text-sm font-semibold text-slate">Businesses Structured Right</p>
                <p className="text-xs text-gray-500">From incorporation to compliance — startups built on solid foundations.</p>
              </div>

              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-gold">250+</div>
                <p className="text-sm font-semibold text-slate">Companies Guided in Accounting & Books</p>
                <p className="text-xs text-gray-500">End-to-end financial discipline for growing businesses.</p>
              </div>

              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-gold">200+</div>
                <p className="text-sm font-semibold text-slate">Complex Tax & Legal Cases Resolved</p>
                <p className="text-xs text-gray-500">Trusted litigation support that protects entrepreneurs.</p>
              </div>

              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-gold">2.5 Cr+</div>
                <p className="text-sm font-semibold text-slate">Taxes Saved Every Year</p>
                <p className="text-xs text-gray-500">Smart planning that turns tax burdens into savings.</p>
              </div>

              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-gold">1.2 Cr+</div>
                <p className="text-sm font-semibold text-slate">Penalties Prevented</p>
                <p className="text-xs text-gray-500">Shielding businesses from costly errors & notices.</p>
              </div>

              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-gold">2000+</div>
                <p className="text-sm font-semibold text-slate">ITRs Filed with Care in 2025</p>
                <p className="text-xs text-gray-500">Accurate, stress-free, and always on time.</p>
              </div>

              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-gold">15+</div>
                <p className="text-sm font-semibold text-slate">Years of Combined Expertise</p>
                <p className="text-xs text-gray-500">Real professionals guiding real businesses, not bots.</p>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="mt-12 lg:mt-0 lg:col-span-5">
            <div className="relative">
              <div className="bg-gradient-to-br from-gold to-yellow-600 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="font-serif text-xl font-semibold text-slate mb-4">
                    100% Notice Coverage Guarantee
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    If a tax notice is issued due to our error, we personally cover the fee payable. 
                    That&apos;s our guarantee — subject to terms and an independent review.
                  </p>
                  <div className="mt-4 flex items-center text-gold">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">Quality Guaranteed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
