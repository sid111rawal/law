'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileActiveSection, setMobileActiveSection] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (dropdown: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const toggleMobileSection = (section: string) => {
    setMobileActiveSection(mobileActiveSection === section ? null : section);
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setMobileActiveSection(null);
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  return (
    <header className="bg-white sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="text-3xl font-serif font-bold text-slate">
                Lawgical Station
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-1">
              
              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('services')}
                onMouseLeave={handleMouseLeave}
              >
                <button className="text-slate hover:text-gold transition-colors duration-200 px-4 py-2 text-base font-medium flex items-center">
                Services
                  <svg className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {activeDropdown === 'services' && (
                  <div className="absolute left-0 mt-1 w-96 bg-white rounded-xl shadow-xl border border-gray-100 py-4 z-50">
                    <div className="grid grid-cols-3 gap-4 px-6">
                      
                      {/* Taxation */}
                      <div className="space-y-3">
                        <h3 className="text-sm font-semibold text-slate border-b border-gray-100 pb-2">Taxation</h3>
                        <div className="space-y-2">
                          <Link href="/services/taxation/personal" className="block text-sm text-gray-600 hover:text-gold transition-colors">
                            Personal Tax
                          </Link>
                          <Link href="/services/taxation/business" className="block text-sm text-gray-600 hover:text-gold transition-colors">
                            Business Tax
                          </Link>
                          <Link href="/services/taxation/gst" className="block text-sm text-gray-600 hover:text-gold transition-colors">
                            GST Services
                          </Link>
                          <Link href="/services/taxation/tds" className="block text-sm text-gray-600 hover:text-gold transition-colors">
                            TDS Compliance
                          </Link>
                        </div>
                      </div>

                      {/* Compliance */}
                      <div className="space-y-3">
                        <h3 className="text-sm font-semibold text-slate border-b border-gray-100 pb-2">Compliance</h3>
                        <div className="space-y-2">
                          <Link href="/services/compliance/statutory" className="block text-sm text-gray-600 hover:text-gold transition-colors">
                            Statutory Audit
                          </Link>
                          <Link href="/services/compliance/internal" className="block text-sm text-gray-600 hover:text-gold transition-colors">
                            Internal Audit
                          </Link>
                          <Link href="/services/compliance/roc" className="block text-sm text-gray-600 hover:text-gold transition-colors">
                            ROC Compliance
                          </Link>
                          <Link href="/services/compliance/labor" className="block text-sm text-gray-600 hover:text-gold transition-colors">
                            Labor Law
                          </Link>
                        </div>
                      </div>

                      {/* Others */}
                      <div className="space-y-3">
                        <h3 className="text-sm font-semibold text-slate border-b border-gray-100 pb-2">Others</h3>
                        <div className="space-y-2">
                          <Link href="/services/others/bookkeeping" className="block text-sm text-gray-600 hover:text-gold transition-colors">
                            Bookkeeping
                          </Link>
                          <Link href="/services/others/payroll" className="block text-sm text-gray-600 hover:text-gold transition-colors">
                            Payroll Services
                          </Link>
                          <Link href="/services/others/advisory" className="block text-sm text-gray-600 hover:text-gold transition-colors">
                            Business Advisory
                          </Link>
                          <Link href="/services/others/registration" className="block text-sm text-gray-600 hover:text-gold transition-colors">
                            Company Registration
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Resources Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('resources')}
                onMouseLeave={handleMouseLeave}
              >
                <button className="text-slate hover:text-gold transition-colors duration-200 px-4 py-2 text-base font-medium flex items-center">
                  Resources
                  <svg className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {activeDropdown === 'resources' && (
                  <div className="absolute left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-4 z-50">
                    <div className="px-6">
                      <div className="space-y-3">
                        <h3 className="text-sm font-semibold text-slate border-b border-gray-100 pb-2">Read</h3>
                        <div className="space-y-2">
                          <Link href="/resources/blogs" className="block text-sm text-gray-600 hover:text-gold transition-colors">
                            Blogs
                          </Link>
                          <Link href="/resources/calculators" className="block text-sm text-gray-600 hover:text-gold transition-colors">
                            Tools
              </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Company Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('company')}
                onMouseLeave={handleMouseLeave}
              >
                <button className="text-slate hover:text-gold transition-colors duration-200 px-4 py-2 text-base font-medium flex items-center">
                  Company
                  <svg className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${activeDropdown === 'company' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {activeDropdown === 'company' && (
                  <div className="absolute left-0 mt-1 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-4 z-50">
                    <div className="px-6 space-y-2">
                      <Link href="/about" className="block text-sm text-gray-600 hover:text-gold transition-colors py-2">
                        About Us
                      </Link>
                      <Link href="/contact" className="block text-sm text-gray-600 hover:text-gold transition-colors py-2">
                        Contact Us
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Auth Button */}
              <div className="ml-6">
                <Link 
                  href="/login" 
                  className="bg-gold text-white px-6 py-2 rounded-lg text-base font-medium hover:bg-opacity-90 transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  Login/Sign Up
              </Link>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate hover:text-gold hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gold transition-colors"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white shadow-lg">
            <div className="px-4 py-4 space-y-1 max-h-screen overflow-y-auto">
              
              {/* Mobile Services Section */}
              <div className="border-b border-gray-100 pb-2">
                <button
                  onClick={() => toggleMobileSection('services')}
                  className="w-full flex items-center justify-between py-3 px-2 text-base font-semibold text-slate hover:text-gold transition-colors rounded-lg hover:bg-gray-50"
              >
                Services
                  <svg 
                    className={`h-5 w-5 transform transition-transform duration-200 ${mobileActiveSection === 'services' ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {mobileActiveSection === 'services' && (
                  <div className="pb-2 space-y-1">
                    {/* Taxation Subsection */}
                    <div className="pl-4">
                      <h4 className="text-sm font-medium text-slate py-2 border-b border-gray-50">Taxation</h4>
                      <div className="space-y-1 py-2">
                        <Link href="/services/taxation/personal" className="block text-sm text-gray-600 hover:text-gold py-2 pl-3 rounded hover:bg-gray-50 transition-colors" onClick={closeMobileMenu}>Personal Tax</Link>
                        <Link href="/services/taxation/business" className="block text-sm text-gray-600 hover:text-gold py-2 pl-3 rounded hover:bg-gray-50 transition-colors" onClick={closeMobileMenu}>Business Tax</Link>
                        <Link href="/services/taxation/gst" className="block text-sm text-gray-600 hover:text-gold py-2 pl-3 rounded hover:bg-gray-50 transition-colors" onClick={closeMobileMenu}>GST Services</Link>
                        <Link href="/services/taxation/tds" className="block text-sm text-gray-600 hover:text-gold py-2 pl-3 rounded hover:bg-gray-50 transition-colors" onClick={closeMobileMenu}>TDS Compliance</Link>
                      </div>
                    </div>
                    
                    {/* Compliance Subsection */}
                    <div className="pl-4">
                      <h4 className="text-sm font-medium text-slate py-2 border-b border-gray-50">Compliance</h4>
                      <div className="space-y-1 py-2">
                        <Link href="/services/compliance/statutory" className="block text-sm text-gray-600 hover:text-gold py-2 pl-3 rounded hover:bg-gray-50 transition-colors" onClick={closeMobileMenu}>Statutory Audit</Link>
                        <Link href="/services/compliance/internal" className="block text-sm text-gray-600 hover:text-gold py-2 pl-3 rounded hover:bg-gray-50 transition-colors" onClick={closeMobileMenu}>Internal Audit</Link>
                        <Link href="/services/compliance/roc" className="block text-sm text-gray-600 hover:text-gold py-2 pl-3 rounded hover:bg-gray-50 transition-colors" onClick={closeMobileMenu}>ROC Compliance</Link>
                        <Link href="/services/compliance/labor" className="block text-sm text-gray-600 hover:text-gold py-2 pl-3 rounded hover:bg-gray-50 transition-colors" onClick={closeMobileMenu}>Labor Law</Link>
                      </div>
                    </div>
                    
                    {/* Others Subsection */}
                    <div className="pl-4">
                      <h4 className="text-sm font-medium text-slate py-2 border-b border-gray-50">Others</h4>
                      <div className="space-y-1 py-2">
                        <Link href="/services/others/bookkeeping" className="block text-sm text-gray-600 hover:text-gold py-2 pl-3 rounded hover:bg-gray-50 transition-colors" onClick={closeMobileMenu}>Bookkeeping</Link>
                        <Link href="/services/others/payroll" className="block text-sm text-gray-600 hover:text-gold py-2 pl-3 rounded hover:bg-gray-50 transition-colors" onClick={closeMobileMenu}>Payroll Services</Link>
                        <Link href="/services/others/advisory" className="block text-sm text-gray-600 hover:text-gold py-2 pl-3 rounded hover:bg-gray-50 transition-colors" onClick={closeMobileMenu}>Business Advisory</Link>
                        <Link href="/services/others/registration" className="block text-sm text-gray-600 hover:text-gold py-2 pl-3 rounded hover:bg-gray-50 transition-colors" onClick={closeMobileMenu}>Company Registration</Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile Resources Section */}
              <div className="border-b border-gray-100 pb-2">
                <button
                  onClick={() => toggleMobileSection('resources')}
                  className="w-full flex items-center justify-between py-3 px-2 text-base font-semibold text-slate hover:text-gold transition-colors rounded-lg hover:bg-gray-50"
                >
                  Resources
                  <svg 
                    className={`h-5 w-5 transform transition-transform duration-200 ${mobileActiveSection === 'resources' ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {mobileActiveSection === 'resources' && (
                  <div className="pb-2 space-y-1 pl-4">
                    <Link href="/resources/blogs" className="block text-sm text-gray-600 hover:text-gold py-2 pl-3 rounded hover:bg-gray-50 transition-colors" onClick={closeMobileMenu}>Blogs</Link>
                    <Link href="/resources/calculators" className="block text-sm text-gray-600 hover:text-gold py-2 pl-3 rounded hover:bg-gray-50 transition-colors" onClick={closeMobileMenu}>Tools</Link>
                  </div>
                )}
              </div>

              {/* Mobile Company Section */}
              <div className="border-b border-gray-100 pb-2">
                <button
                  onClick={() => toggleMobileSection('company')}
                  className="w-full flex items-center justify-between py-3 px-2 text-base font-semibold text-slate hover:text-gold transition-colors rounded-lg hover:bg-gray-50"
                >
                  Company
                  <svg 
                    className={`h-5 w-5 transform transition-transform duration-200 ${mobileActiveSection === 'company' ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {mobileActiveSection === 'company' && (
                  <div className="pb-2 space-y-1 pl-4">
                    <Link href="/about" className="block text-sm text-gray-600 hover:text-gold py-2 pl-3 rounded hover:bg-gray-50 transition-colors" onClick={closeMobileMenu}>About Us</Link>
                    <Link href="/contact" className="block text-sm text-gray-600 hover:text-gold py-2 pl-3 rounded hover:bg-gray-50 transition-colors" onClick={closeMobileMenu}>Contact Us</Link>
                  </div>
                )}
              </div>

              {/* Mobile Auth Button */}
              <div className="pt-4">
              <Link 
                  href="/login" 
                  className="block bg-gold text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-opacity-90 transition-all duration-200 shadow-sm hover:shadow-md text-center"
                  onClick={closeMobileMenu}
                >
                  Login/Sign Up
              </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
