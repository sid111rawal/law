'use client';

import { useState, useEffect } from 'react';
import siteConfig from '@/config/site';

export default function Contact() {
  // Set to false for production, true for testing
  const IS_TESTING = true;
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    urgency: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Lock body scroll when modal is open
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Special handling for phone number - only allow digits and limit to 10
    if (name === 'phone') {
      const digitsOnly = value.replace(/\D/g, '');
      const limitedDigits = digitsOnly.slice(0, 10);
      setFormData(prev => ({
        ...prev,
        [name]: limitedDigits
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (IS_TESTING) {
      // Testing mode - simulate form submission
      e.preventDefault();
      setIsSubmitting(true);
      
      try {
        // Add a small delay to show the loading state
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Simulate success and show the modal
        setShowSuccess(true);
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          service: '',
          message: '',
          urgency: ''
        });
        
        // Log the form data for testing
        console.log('Form submitted with data:', {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          urgency: formData.urgency
        });
        
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('There was an error submitting your form. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Production mode - let FormSubmit handle the submission naturally
      // Don't prevent default, let the form submit normally
      setIsSubmitting(true);
      
      // FormSubmit will handle the submission and redirect
      // We'll show success after a delay to account for the redirect
      setTimeout(() => {
        setShowSuccess(true);
        setIsSubmitting(false);
      }, 2000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-soft-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-slate sm:text-4xl lg:text-5xl">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to get started? Contact us for a free consultation and let&apos;s discuss how we can help your business grow with clarity, compliance, and confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-serif font-bold text-slate mb-6">Send us a Message</h3>
            
            <form 
              action="https://formsubmit.co/rawals.info@gmail.com" 
              method="POST" 
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Hidden FormSubmit.co fields */}
              <input type="hidden" name="_subject" value="New Contact Form Submission - Lawgical Station" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.href : ''} />
              
              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-slate mb-2">
                    First Name <span className="text-[#C9A34A]">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent transition-colors"
                    placeholder="Enter first name"
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-slate mb-2">
                    Last Name <span className="text-[#C9A34A]">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent transition-colors"
                    placeholder="Enter last name"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate mb-2">
                  Email Address <span className="text-[#C9A34A]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate mb-2">
                  Phone Number <span className="text-gray-500 text-sm">(10 digits only)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  pattern="[0-9]{10}"
                  maxLength={10}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent transition-colors"
                  placeholder="Enter 10-digit phone number (optional)"
                />
                {formData.phone && formData.phone.length !== 10 && (
                  <p className="text-red-500 text-sm mt-1">
                    Phone number must be exactly 10 digits
                  </p>
                )}
              </div>

              {/* Service Selection */}
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-slate mb-2">
                  Service Needed <span className="text-[#C9A34A]">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="tax-compliance-strategy">Tax & Compliance Strategy</option>
                  <option value="business-structuring">Business Structuring & Incorporation</option>
                  <option value="litigation-support">Litigation & Dispute Support</option>
                  <option value="cfo-accounting">Outsourced CFO & Accounting</option>
                  <option value="gst-tds-management">End-to-End GST & TDS Management</option>
                  <option value="advisory-services">General Advisory Services</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Urgency Selection */}
              <div>
                <label className="block text-sm font-medium text-slate mb-3">
                  How urgent is your requirement? <span className="text-[#C9A34A]">*</span>
                </label>
                <div className="space-y-3">
                  {[
                    'Immediate (Within 1 week)',
                    'Soon (Within 1 month)', 
                    'Planning ahead (1-3 months)',
                    'Just exploring options'
                  ].map((option) => (
                    <label key={option} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="urgency"
                        value={option}
                        checked={formData.urgency === option}
                        onChange={handleInputChange}
                        required
                        className="w-5 h-5 border-2 border-gray-300 bg-gray-50 text-[#C9A34A] focus:ring-2 focus:ring-[#C9A34A] mr-3"
                      />
                      <span className="text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate mb-2">
                  Message <span className="text-[#C9A34A]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent transition-colors resize-none"
                  placeholder="Please describe your requirements and how we can help..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#C9A34A] text-white px-6 py-4 rounded-lg font-semibold hover:bg-[#B8923A] transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-serif font-bold text-slate mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#C9A34A] p-3 rounded-full mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate">Address</h4>
                    <p className="text-gray-600">
                      C-23, S-4/14, Second Floor,<br />
                      Sanjay Place, Agra - 282002
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#C9A34A] p-3 rounded-full mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate">Phone</h4>
                    <a href={`tel:${siteConfig.contact.phone}`} className="text-gray-600 hover:text-[#C9A34A] transition-colors">
                      {siteConfig.contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#C9A34A] p-3 rounded-full mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate">Email</h4>
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-gray-600 hover:text-[#C9A34A] transition-colors">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#C9A34A] p-3 rounded-full mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate">Business Hours</h4>
                    <p className="text-gray-600">{siteConfig.businessHours.weekdays}</p>
                    <p className="text-gray-600">{siteConfig.businessHours.saturday}</p>
                    <p className="text-gray-600">{siteConfig.businessHours.sunday}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="bg-gradient-to-br from-[#C9A34A] to-[#B8923A] rounded-2xl p-8 text-white">
              <h3 className="text-xl font-serif font-bold mb-4">Why Choose Us?</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">100% Notice Coverage Guarantee</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Personal CA Touch</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Free Initial Consultation</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">1% to Charity</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white p-6 sm:p-8 max-w-md w-full max-h-[calc(100vh-8rem)] sm:max-h-[calc(100vh-4rem)] overflow-y-auto shadow-2xl border border-gray-100 relative rounded-2xl">
            {/* Close Button */}
            <button
              onClick={() => setShowSuccess(false)}
              className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
            >
              <span className="text-gray-500 text-lg">×</span>
            </button>
            
            {/* Success Content */}
            <div className="text-center relative z-10">
              {/* Success Icon */}
              <div className="w-20 h-20 bg-gradient-to-r from-[#C9A34A] to-[#B8923A] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl">✓</span>
              </div>
              
              {/* Success Message */}
              <h2 className="text-2xl font-bold text-slate mb-4">
                Message Sent Successfully! 🎉
              </h2>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Thank you for reaching out to <span className="font-semibold text-[#C9A34A]">Lawgical Station</span>! We&apos;ve received your message and will get back to you within 2 hours.
              </p>
              
              {/* Additional Info */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-4 mb-6">
                <p className="text-sm text-gray-700 mb-2">
                  <span className="font-semibold text-[#C9A34A]">📧 Email:</span> {siteConfig.contact.email}
                </p>
                <p className="text-sm text-gray-700">
                  <span className="font-semibold text-[#C9A34A]">📞 Phone:</span> {siteConfig.contact.phoneDisplay}
                </p>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setShowSuccess(false)}
                  className="flex-1 bg-[#C9A34A] text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:bg-[#B8923A]"
                >
                  Continue Browsing
                </button>
                
                <a
                  href="/"
                  className="flex-1 bg-white border-2 border-[#C9A34A] text-[#C9A34A] py-3 px-6 rounded-lg font-semibold transition-all duration-300 text-center hover:bg-[#C9A34A] hover:text-white"
                >
                  Back to Home
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
