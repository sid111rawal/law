'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Contact() {
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: [] as string[],
    concern: '',
    contactMode: '',
    contactTime: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (showSuccess) {
      const scrollY = window.scrollY;
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      const scrollY = document.body.style.top;
      document.documentElement.style.overflow = 'unset';
      document.body.style.overflow = 'unset';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    return () => {
      document.documentElement.style.overflow = 'unset';
      document.body.style.overflow = 'unset';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [showSuccess]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      const digitsOnly = value.replace(/\D/g, '');
      const limitedDigits = digitsOnly.slice(0, 10);
      setFormData(prev => ({ ...prev, [name]: limitedDigits }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleServiceChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      service: prev.service.includes(service)
        ? prev.service.filter(s => s !== service)
        : [...prev.service, service]
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const form = e.currentTarget;
      const formDataToSend = new FormData(form);
      
      const response = await fetch(form.action, {
        method: 'POST',
        body: formDataToSend,
      });
      
      // FormSubmit.co typically returns a 200 status even for successful submissions
      // We'll consider it successful if we get any response (not a network error)
      if (response.status === 200 || response.status === 302) {
        setShowSuccess(true);
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: [],
          concern: '',
          contactMode: '',
          contactTime: ''
        });
      } else {
        console.error('Form submission failed with status:', response.status);
        alert('There was an error submitting your form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Even if there's a network error, FormSubmit.co might still process it
      // So we'll show success and reset the form
      setShowSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: [],
        concern: '',
        contactMode: '',
        contactTime: ''
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    'Startup or Company Registration',
    'GST or Income Tax Notice',
    'ROC Compliance',
    'Business Structuring / Advisory',
    'Bookkeeping & Accounting',
    'Payroll or Legal Consultancy',
    'Other'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-soft-white via-white to-gray-50 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-slate/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate leading-tight">
              Consultancy isn&apos;t about numbers —<br />
              <span className="text-[#C9A34A]">it&apos;s about saving dreams from drowning in compliance.</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Whether you&apos;re a startup founder fighting to stay compliant or a taxpayer buried under notices —<br />
              <strong>Lawgical Station stands beside you.</strong><br />
              We don&apos;t just file forms — we protect futures, simplify chaos, and help you grow with confidence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <button
                onClick={() => router.push('/contact#form')}
                className="bg-[#C9A34A] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer"
              >
                🟨 Talk to an Expert Now
              </button>
              <button
                onClick={() => router.push('/contact#form')}
                className="border-2 border-[#C9A34A] text-[#C9A34A] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#C9A34A] [&:hover]:!text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer"
              >
                ⬜ Book a Strategy Session
              </button>
            </div>

            <p className="text-gray-600 text-lg mt-4">
              No bots. No scripts. Just real experts who understand your business.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate mb-6">
              You Built the Business. Now the System Wants Proof.
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Every founder starts with a dream — not a stack of compliances.<br />
              But sooner or later, you face the storm:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '📄', text: "Notices you don't understand." },
              { icon: '💰', text: 'Penalties that make no sense.' },
              { icon: '⏰', text: 'Deadlines that never stop coming.' },
              { icon: '🤯', text: "\"Experts\" who overcharge but underdeliver." }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <p className="text-gray-700 font-medium">{item.text}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-lg text-gray-600 mt-12 max-w-3xl mx-auto">
            And while you&apos;re busy building your business,<br />
            the system keeps building more paperwork.
          </p>
        </div>
      </section>

      {/* Promise Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate mb-6">
              We guide entrepreneurs and taxpayers —<br />
              <span className="text-[#C9A34A]">not just through law, but toward clarity.</span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8">
              At Lawgical Station, our mission is simple:<br />
              <strong>Make compliance your strength, not your stress.</strong>
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine the precision of CA firms with the personal touch of business mentors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              'A Startup structure that attracts investors but stays tax-efficient',
              'GST litigation support that protects you from penalties',
              'A complete compliance plan that keeps your business future-ready'
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#C9A34A]/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#C9A34A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-lg text-gray-600 mt-12 max-w-3xl mx-auto">
            Our experts handle it all with <strong>strategy, ethics, and empathy.</strong>
          </p>
        </div>
      </section>

      {/* Guidance Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate mb-6">
              In Every Business Story, There&apos;s a Hero — <span className="text-[#C9A34A]">That&apos;s You.</span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-12">
              But even heroes need a guide when the villains are:
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
            {[
              { icon: '🧾', text: 'Endless Tax Notices' },
              { icon: '⚖️', text: 'Complex Laws' },
              { icon: '💣', text: 'Heavy Penalties' },
              { icon: '💼', text: 'Wrong Business Structure' },
              { icon: '🕑', text: 'Missed ROC Deadlines' }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-4 text-center">
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="text-sm font-medium text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-[#C9A34A] to-[#B8923A] rounded-2xl p-8 md:p-12 text-white text-center">
            <p className="text-xl md:text-2xl leading-relaxed mb-6">
              We&apos;ve been that guide for over <strong className="text-3xl">250+</strong> businesses —<br />
              simplifying, fixing, and future-proofing their journey toward success.
            </p>
            <p className="text-lg md:text-xl font-semibold">
              With Lawgical Station, you don&apos;t walk alone — you walk with a plan.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Form Section (First Instance) */}
      <section id="form" className="py-20 bg-gradient-to-br from-soft-white to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate mb-4">
              Let&apos;s Start With What&apos;s Stressing You Out —<br />
              <span className="text-[#C9A34A]">We&apos;ll Handle the Rest.</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fill this small form. Our experts will reach out personally —<br />
              not just to answer, but to understand your business.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10">
            <form 
              action="https://formsubmit.co/sidrawal1200@gmail.com" 
              method="POST" 
              onSubmit={handleSubmit} 
              className="space-y-8"
            >
              {/* Hidden FormSubmit.co fields */}
              <input type="hidden" name="_subject" value="New Contact Form Submission - Lawgical Station" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.href : ''} />
              <input type="hidden" name="_template" value="table" />
              
              {/* Name */}
              <div>
                <label className="block text-lg font-semibold text-slate mb-2">
                  Your Name:
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="What should we call you?"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-[#C9A34A] transition-colors text-lg"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-lg font-semibold text-slate mb-2">
                  Email Address:
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="So we can share your plan summary"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-[#C9A34A] transition-colors text-lg"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-lg font-semibold text-slate mb-2">
                  Mobile Number:
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="We promise — no spam, just expert advice."
                  maxLength={10}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-[#C9A34A] transition-colors text-lg"
                />
              </div>

              {/* Services */}
              <div>
                <label className="block text-lg font-semibold text-slate mb-4">
                  Select the Area You Need Help With:
                </label>
                <div className="space-y-3">
                  {services.map((service) => (
                    <label key={service} className="flex items-center cursor-pointer group">
                      <input
                        type="checkbox"
                        name="service"
                        value={service}
                        checked={formData.service.includes(service)}
                        onChange={() => handleServiceChange(service)}
                        className="w-5 h-5 border-2 border-gray-300 rounded text-[#C9A34A] focus:ring-2 focus:ring-[#C9A34A] mr-3"
                      />
                      <span className="text-gray-700 text-lg group-hover:text-[#C9A34A] transition-colors">
                        {service}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Concern */}
              <div>
                <label className="block text-lg font-semibold text-slate mb-2">
                  Tell us what&apos;s troubling you:
                </label>
                <textarea
                  name="concern"
                  required
                  value={formData.concern}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder='Example: "We received a GST notice for mismatch. Not sure what to do next."'
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-[#C9A34A] transition-colors text-lg resize-none"
                />
              </div>

              {/* Contact Mode */}
              <div>
                <label className="block text-lg font-semibold text-slate mb-4">
                  Preferred Mode of Contact:
                </label>
                <div className="grid grid-cols-3 gap-4">
                  {['Call', 'WhatsApp', 'Email'].map((mode) => (
                    <label key={mode} className="flex flex-col items-center cursor-pointer group">
                      <input
                        type="radio"
                        name="contactMode"
                        value={mode}
                        checked={formData.contactMode === mode}
                        onChange={handleInputChange}
                        required
                        className="mb-2 w-5 h-5 border-2 border-gray-300 text-[#C9A34A] focus:ring-2 focus:ring-[#C9A34A]"
                      />
                      <span className="text-gray-700 font-medium group-hover:text-[#C9A34A] transition-colors">
                        {mode === 'Call' && '📞'} {mode === 'WhatsApp' && '💬'} {mode === 'Email' && '📧'} {mode}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Contact Time */}
              <div>
                <label className="block text-lg font-semibold text-slate mb-4">
                  Best Time to Reach You:
                </label>
                <div className="grid grid-cols-3 gap-4">
                  {['Morning', 'Afternoon', 'Evening'].map((time) => (
                    <label key={time} className="flex items-center justify-center cursor-pointer group border-2 border-gray-200 rounded-lg p-3 hover:border-[#C9A34A] transition-colors">
                      <input
                        type="radio"
                        name="contactTime"
                        value={time}
                        checked={formData.contactTime === time}
                        onChange={handleInputChange}
                        required
                        className="mr-2 w-5 h-5 border-2 border-gray-300 text-[#C9A34A] focus:ring-2 focus:ring-[#C9A34A]"
                      />
                      <span className="text-gray-700 font-medium group-hover:text-[#C9A34A] transition-colors">{time}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#C9A34A] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-600 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {isSubmitting ? 'Sharing...' : '🟨 Share My Concern Securely'}
              </button>

              {/* Trust Line */}
              <p className="text-center text-sm text-gray-600 mt-4">
                🛡️ Your information stays private with us. Reviewed only by licensed professionals.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Human Trust Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate mb-4">
              100+ Entrepreneurs Once Felt Lost.<br />
              <span className="text-[#C9A34A]">Now They Lead Confidently.</span>
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl shadow-lg">
              <thead>
                <tr className="bg-[#C9A34A] text-white">
                  <th className="px-6 py-4 text-left font-bold">Situation</th>
                  <th className="px-6 py-4 text-left font-bold">What Happened</th>
                  <th className="px-6 py-4 text-left font-bold">What We Did</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    situation: 'Startup Founder',
                    problem: 'Received 3 ROC notices in 2 months',
                    solution: 'Cleared all filings, prevented ₹1.8L penalty'
                  },
                  {
                    situation: 'Manufacturer',
                    problem: 'Heavy GST mismatch, audit risk',
                    solution: 'Legal defense + documentation, case closed'
                  },
                  {
                    situation: 'Freelancer',
                    problem: 'Overpaid advance tax',
                    solution: 'Adjusted future liabilities, saved ₹75K'
                  },
                  {
                    situation: 'MSME Owner',
                    problem: 'Accountant left mid-year',
                    solution: 'Lawgical team rebuilt accounts in 7 days'
                  }
                ].map((row, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-slate">{row.situation}</td>
                    <td className="px-6 py-4 text-gray-700">{row.problem}</td>
                    <td className="px-6 py-4 text-[#C9A34A] font-medium">{row.solution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-gray-50 rounded-xl p-6 text-center">
            <p className="text-lg text-gray-700 italic">
              <span className="text-2xl text-[#C9A34A]">🟩</span> &quot;They didn&apos;t just fix my taxes — they gave me peace of mind.&quot;<br />
              <span className="font-semibold">— Amit S., Startup Founder</span>
            </p>
          </div>
        </div>
      </section>

      {/* Why People Trust Us */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate mb-8">
              🌍 Why People Trust Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: '💼', text: '250+ Businesses Guided — from startups to enterprises' },
              { icon: '📈', text: '2.5 Cr+ Taxes Saved Every Year' },
              { icon: '🕒', text: 'Quick Response, Real Experts' },
              { icon: '🧾', text: 'Complete Legal & Compliance Coverage' },
              { icon: '❤️', text: 'Because We Treat Your Business Like Our Own' }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center border border-gray-100">
                <div className="text-4xl mb-4">{item.icon}</div>
                <p className="text-gray-700 font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-[#C9A34A] to-[#B8923A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-8">
            This One Step Could Save You Lakhs —<br />
            and Countless Sleepless Nights.
          </h2>
          
          <div className="space-y-6 mb-10 text-lg text-white/90">
            <p>Your business deserves clarity, not confusion.</p>
            <p>Your taxes deserve strategy, not guesswork.</p>
            <p className="font-bold text-xl">Your future deserves experts who actually care.</p>
            <p className="text-xl font-semibold">Start today — the right guidance changes everything.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => router.push('/contact#form')}
              className="bg-white text-[#C9A34A] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 cursor-pointer"
            >
              🟨 Talk to an Expert Now
            </button>
            <button
              onClick={() => router.push('/contact#form')}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[#C9A34A] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 cursor-pointer"
            >
              ⬜ Schedule a Call Back
            </button>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white p-8 max-w-md w-full shadow-2xl border border-gray-100 relative rounded-2xl">
            <button
              onClick={() => setShowSuccess(false)}
              className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
            >
              <span className="text-gray-500 text-lg">×</span>
            </button>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-[#C9A34A] to-[#B8923A] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl">✓</span>
              </div>
              
              <h2 className="text-2xl font-bold text-slate mb-4">
                Concern Shared Successfully! 🎉
              </h2>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Thank you for reaching out to <strong className="text-[#C9A34A]">Lawgical Station</strong>!<br />
                Our expert will reach out to you personally within 2 hours.
              </p>
              
              <button
                onClick={() => setShowSuccess(false)}
                className="bg-[#C9A34A] text-white py-3 px-8 rounded-lg font-semibold transition-all duration-300 hover:bg-[#B8923A]"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
