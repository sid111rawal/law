'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutUsContent() {
  const [currentComparisonIndex, setCurrentComparisonIndex] = useState(0);

  const comparisons = [
    { 
      lawgical: 'Real Experts (CA, CS, Advocates)', 
      others: 'Chatbots / Outsourced Teams',
      icon: '👨‍💼'
    },
    { 
      lawgical: 'Transparent Fees', 
      others: 'Hidden Costs',
      icon: '💰'
    },
    { 
      lawgical: 'Long-term Partnership', 
      others: 'One-time Transactions',
      icon: '🤝'
    },
    { 
      lawgical: 'Reliable & Stress-free', 
      others: '"Fastest & Cheapest"',
      icon: '⭐'
    },
    { 
      lawgical: 'Personal Guidance', 
      others: 'DIY Service Menus',
      icon: '🎯'
    },
    { 
      lawgical: 'Future-focused Support', 
      others: 'Just Filing Documents',
      icon: '🚀'
    },
  ];

  const achievements = [
    { number: '200+', label: 'Tax Notices Resolved', icon: '🛡️' },
    { number: '1000+', label: 'Businesses Incorporated', icon: '🏢' },
    { number: '₹2.5 Cr+', label: 'Taxes Saved/Year', icon: '💰' },
    { number: '₹1.2 Cr+', label: 'Penalties Defended', icon: '⚖️' },
    { number: '2000+', label: 'ITRs Filed (2025)', icon: '📄' },
    { number: '15+', label: 'Years Expert Experience', icon: '🎓' },
  ];

  const team = [
    {
      name: 'CS Adv. Rahul Khushlani',
      credentials: 'CS, LLB, MBA',
      role: 'Co-Founder | Corporate Legal Advisor',
      description: 'Rahul built Lawgical Station on a foundation of trust — to ensure every entrepreneur takes the right steps with the right professionals. He guides founders through each stage of their journey, from incorporation to governance, making sure businesses grow in the right direction.',
      image: '/images/rahul_cs.jpg'
    },
    {
      name: 'CA Kapish Agarwal',
      credentials: 'ACA, B.Com, M.Com',
      role: 'Tax Expert | 10+ Years Experience',
      description: 'Kapish is the backbone for taxpayers navigating complex income tax matters. With strategic planning and hands-on defense against notices, he has saved clients lakhs while ensuring stress-free compliance.',
      image: '/images/kapish_ca.jpg'
    },
    {
      name: 'CA Bhavya Valechha',
      credentials: 'ACA, B.Com',
      role: 'GST & Investment Expert',
      description: 'Bhavya empowers businesses with accurate GST compliance while also guiding clients in smart investment planning. By combining tax-saving strategies with long-term financial vision, she helps clients maximize value and safeguard their future wealth.',
      image: '/images/bhavya_ca.jpg'
    },
    {
      name: 'CA Harsh Agarwal',
      credentials: 'ACA, B.Com',
      role: 'Audit & Compliance Expert',
      description: 'Harsh partners with startups and established businesses to build strong foundations. From choosing the right structure to handling audits and corporate compliance, he ensures companies stay resilient and compliant at every stage.',
      image: '/images/harsh_ca.jpg'
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate mb-6 leading-tight">
              We are Lawgical Station.
            </h1>
            <p className="text-2xl sm:text-3xl text-[#C9A34A] font-medium mb-8">
              Where trust meets expertise for Indian businesses.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our mission is to simplify finances, save money and time for thousands of Indian businesses and individuals. 
              We are a trusted platform that builds lasting partnerships with our clients through genuine guidance and professional accountability.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate mb-8 text-center">
            Our Story
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-lg leading-relaxed">
              At Lawgical Station, trust is not a buzzword — it&apos;s the foundation.
            </p>
            <p className="text-lg leading-relaxed">
              In today&apos;s world, where online platforms turn tax and legal services into faceless transactions, many people end up with the wrong advice, hidden charges, or worse, no professional accountability. We saw this gap. And we knew India needed something better.
            </p>
            <p className="text-lg leading-relaxed">
              That&apos;s why CS Adv. Rahul Khushlani created Lawgical Station — a platform built to be your long-term partner, not just another service vendor. Here, every business, founder, and taxpayer gets genuine guidance from qualified experts who stay with you as you grow.
            </p>
            <p className="text-lg leading-relaxed font-medium text-slate">
              Because we believe your finances are not files to be pushed around.<br />
              They are the story of your future.<br />
              And we&apos;re here to protect it.
            </p>
          </div>
        </div>
      </section>

      {/* Achievement Stats */}
      <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-3xl mb-3">{achievement.icon}</div>
                  <div className="text-2xl sm:text-3xl font-bold text-[#C9A34A] mb-2">{achievement.number}</div>
                  <div className="text-sm text-gray-600 font-medium">{achievement.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Desktop Table */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate mb-12 text-center">
            Why Lawgical Station is Different
          </h2>
          
          {/* Desktop Table View */}
          <div className="hidden md:block bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-slate-700 to-slate-600">
                  <th className="py-4 px-6 text-left text-white font-semibold text-lg">Feature</th>
                  <th className="py-4 px-6 text-center text-white font-semibold text-lg">Lawgical Station</th>
                  <th className="py-4 px-6 text-center text-white font-semibold text-lg">Other Platforms</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6 font-semibold text-slate">Trust & Transparency</td>
                  <td className="py-4 px-6 text-center">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 border border-green-200">
                      <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-medium text-green-800">Real experts, transparent fees</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-50 border border-red-200">
                      <svg className="w-5 h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-medium text-red-800">Chatbots, hidden costs</span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6 font-semibold text-slate">Partnership Approach</td>
                  <td className="py-4 px-6 text-center">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 border border-green-200">
                      <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-medium text-green-800">Long-term partnership</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-50 border border-red-200">
                      <svg className="w-5 h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-medium text-red-800">One-time transactions</span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6 font-semibold text-slate">Quality Assurance</td>
                  <td className="py-4 px-6 text-center">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 border border-green-200">
                      <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-medium text-green-800">Reliable & stress-free</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-50 border border-red-200">
                      <svg className="w-5 h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-medium text-red-800">&quot;Fastest & Cheapest&quot;</span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6 font-semibold text-slate">Service Approach</td>
                  <td className="py-4 px-6 text-center">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 border border-green-200">
                      <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-medium text-green-800">Personal guidance</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-50 border border-red-200">
                      <svg className="w-5 h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-medium text-red-800">DIY service menus</span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6 font-semibold text-slate">Value Delivery</td>
                  <td className="py-4 px-6 text-center">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 border border-green-200">
                      <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-medium text-green-800">Future-focused support</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-50 border border-red-200">
                      <svg className="w-5 h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-medium text-red-800">Just filing documents</span>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6 font-semibold text-slate">Brand Promise</td>
                  <td className="py-4 px-6 text-center">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 border border-green-200">
                      <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-medium text-green-800">Trust, responsibility, success</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-50 border border-red-200">
                      <svg className="w-5 h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-medium text-red-800">Built on scale</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile Slider View */}
          <div className="md:hidden">
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">{comparisons[currentComparisonIndex].icon}</div>
                <h3 className="text-xl font-bold text-slate mb-6">Comparison {currentComparisonIndex + 1} of {comparisons.length}</h3>
                
                <div className="space-y-4">
                  <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4">
                    <div className="text-sm text-green-700 font-medium mb-2">Lawgical Station</div>
                    <div className="text-lg font-semibold text-slate">{comparisons[currentComparisonIndex].lawgical}</div>
                  </div>
                  
                  <div className="text-2xl text-gray-400">vs</div>
                  
                  <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4">
                    <div className="text-sm text-red-700 font-medium mb-2">Others</div>
                    <div className="text-lg font-semibold text-slate">{comparisons[currentComparisonIndex].others}</div>
                  </div>
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center space-x-2 mt-6">
                {comparisons.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentComparisonIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentComparisonIndex ? 'bg-[#C9A34A] w-8' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <div className="flex justify-between mt-6">
                <button
                  onClick={() => setCurrentComparisonIndex((currentComparisonIndex - 1 + comparisons.length) % comparisons.length)}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <svg className="w-6 h-6 text-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => setCurrentComparisonIndex((currentComparisonIndex + 1) % comparisons.length)}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <svg className="w-6 h-6 text-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Premium Tagline */}
          <div className="text-center mt-12">
            <p className="text-2xl font-serif italic text-slate">
              &ldquo;We don&apos;t compete on price. We compete on trust.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Where Trust Meets Expertise */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate mb-6">
              Where Trust Meets Expertise
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="text-lg leading-relaxed">
                At Lawgical Station, we believe legal and tax solutions should never feel like cold transactions. They should feel like guidance, protection, and partnership.
              </p>
              <p className="text-lg leading-relaxed">
                We were built on one promise — to stand with entrepreneurs and taxpayers at every step, not just until a fee is paid. Whether it&apos;s choosing the right structure for your dream company or defending you against complex tax challenges, our focus is simple: your growth, your peace of mind, and your trust.
              </p>
              <p className="text-lg leading-relaxed font-medium text-slate">
                Because here, you are not just a case. You are a partner for the long term.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-slate mb-6">
              Advisors Who Stand With You
            </h2>
            <p className="text-xl text-gray-600">Our Expert Team</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {team.map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="p-10">
                  <div className="flex items-start space-x-6 mb-6">
                    <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                      <Image 
                        src={member.image} 
                        alt={member.name}
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate mb-2">{member.name}</h3>
                      <p className="text-base text-[#C9A34A] font-medium mb-2">{member.credentials}</p>
                      <p className="text-base text-gray-600">{member.role}</p>
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed italic">
                    &ldquo;{member.description}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Unified Closing */}
          <div className="mt-16 bg-gradient-to-r from-[#C9A34A]/10 to-yellow-400/10 rounded-3xl p-10 text-center">
            <p className="text-xl text-gray-700 italic">
              &ldquo;Together, our experts combine legal, tax, GST, compliance, and investment expertise to give entrepreneurs and taxpayers one trusted platform — solving problems, saving money, and guiding businesses toward sustainable growth.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Social Impact */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate mb-6">
                Your Compliance, Their Tomorrow
              </h2>
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p className="text-lg leading-relaxed">
                  At Lawgical Station, every service goes beyond paperwork. When you trust us with your business or tax journey, you also become part of a larger mission — supporting education, environment, and communities in need.
                </p>
                <p className="text-lg leading-relaxed">
                  We dedicate <strong className="text-[#C9A34A]">1% of every fee</strong> to causes that create a safer, brighter future. Together, your compliance not only secures your growth, it builds hope for others.
                </p>
              </div>

              {/* Impact Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white rounded-xl shadow-lg p-4 text-center">
                  <div className="text-2xl font-bold text-[#C9A34A] mb-1">₹1,00,000+</div>
                  <div className="text-sm text-gray-600">Contributed This Year</div>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-4 text-center">
                  <div className="text-2xl font-bold text-[#C9A34A] mb-1">100+</div>
                  <div className="text-sm text-gray-600">Lives Impacted</div>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-4 text-center col-span-2">
                  <div className="text-2xl font-bold text-[#C9A34A] mb-1">3+</div>
                  <div className="text-sm text-gray-600">Partner NGOs</div>
                </div>
              </div>

              <p className="text-sm text-gray-500 mt-6 italic text-center">
                &ldquo;Together, we build businesses. Together, we build society.&rdquo;
              </p>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#C9A34A]/20 to-blue-100 rounded-2xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-lg text-center transform hover:scale-105 transition-transform">
                    <div className="text-4xl mb-3">📚</div>
                    <div className="text-sm font-semibold text-slate">Education Support</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg text-center transform hover:scale-105 transition-transform">
                    <div className="text-4xl mb-3">🌱</div>
                    <div className="text-sm font-semibold text-slate">Environment Care</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg text-center transform hover:scale-105 transition-transform">
                    <div className="text-4xl mb-3">❤️</div>
                    <div className="text-sm font-semibold text-slate">Community Welfare</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg text-center transform hover:scale-105 transition-transform">
                    <div className="text-4xl mb-3">🤝</div>
                    <div className="text-sm font-semibold text-slate">Social Impact</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join 200+ satisfied clients who chose quality over convenience. Start your journey with Lawgical Station today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact#form"
              className="bg-[#C9A34A] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-yellow-500 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 inline-block text-center"
            >
              Get Started Today
            </Link>
            <Link 
              href="/contact#form"
              className="border-2 border-[#C9A34A] bg-transparent text-[#C9A34A] px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 inline-block text-center hover:bg-[#C9A34A] [&:hover]:!text-white"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
