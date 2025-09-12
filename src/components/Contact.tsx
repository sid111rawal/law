'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form will be submitted to Formspree
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 bg-soft-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-slate sm:text-4xl lg:text-5xl">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to get started? Contact us for a free consultation and let&apos;s discuss how we can help your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-serif font-bold text-slate mb-6">Send us a Message</h3>
            
            <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-colors"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-slate mb-2">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="business-accounting">Business Accounting</option>
                    <option value="tax-filing">Tax Filing</option>
                    <option value="gst-services">GST Services</option>
                    <option value="audit-services">Audit Services</option>
                    <option value="payroll-services">Payroll Services</option>
                    <option value="advisory-services">Advisory Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-colors resize-none"
                  placeholder="Please describe your requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gold text-white px-6 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information & Calendly */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-serif font-bold text-slate mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-gold p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate">Office Address</h4>
                    <p className="text-gray-600">Agra, Uttar Pradesh, India</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gold p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate">Phone</h4>
                    <p className="text-gray-600">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gold p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate">Email</h4>
                    <p className="text-gray-600">info@lawgicalstation.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gold p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate">Business Hours</h4>
                    <p className="text-gray-600">Mon - Sat: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Calendly Widget Placeholder */}
            <div id="consultation" className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-serif font-bold text-slate mb-6">Book a Free Consultation</h3>
              <p className="text-gray-600 mb-6">
                Schedule a free 30-minute consultation to discuss your business needs and how we can help.
              </p>
              
              {/* Calendly embed would go here */}
              <div className="bg-soft-white border-2 border-dashed border-gold rounded-lg p-8 text-center">
                <svg className="w-16 h-16 text-gold mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <h4 className="text-lg font-semibold text-slate mb-2">Calendly Widget</h4>
                <p className="text-gray-600 text-sm">
                  Calendly booking widget will be embedded here.<br/>
                  Visitors can select available time slots for consultation.
                </p>
                <button className="mt-4 bg-gold text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
