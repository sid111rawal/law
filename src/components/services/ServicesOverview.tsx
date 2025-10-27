'use client';

import Link from 'next/link';

export default function ServicesOverview() {
  const services = [
    {
      title: "Personal Tax & Individual Advisory",
      description: "Expert ITR filing, tax planning, and compliance for individuals, NRIs, and professionals.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      href: "/services/personal-tax",
      features: ["ITR Filing", "Tax Planning", "NRI Taxation", "Notice Handling"]
    },
    {
      title: "Business Tax & Corporate Advisory",
      description: "Professional business tax services including corporate tax compliance, tax planning, and TDS management.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      href: "/services/business-tax",
      features: ["Corporate Tax", "Tax Planning", "TDS Management", "Tax Litigation"]
    },
    {
      title: "GST Services & Litigation Support",
      description: "Complete GST services including registration, return filing, litigation support, and compliance.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      href: "/services/gst",
      features: ["GST Registration", "Return Filing", "Litigation", "Compliance"]
    },
    {
      title: "Statutory Audit & Assurance Services",
      description: "Professional statutory audit services with integrity and insight. Expert CA guidance for companies, LLPs, and startups.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      href: "/services/statutory-audit",
      features: ["Audit Planning", "Risk Assessment", "Compliance", "Reporting"]
    },
    {
      title: "Internal Audit & Risk Advisory",
      description: "Professional internal audit services to strengthen governance, uncover inefficiencies, and create systems that sustain growth.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      href: "/services/internal-audit",
      features: ["Risk Assessment", "Control Testing", "Process Review", "Governance"]
    },
    {
      title: "ROC Compliance & Corporate Governance",
      description: "Professional ROC compliance services to ensure your company stays legally active and protected. Expert CS guidance with 100% on-time filing record.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      href: "/services/roc-compliance",
      features: ["Annual Filing", "Event Compliance", "XBRL Filing", "Legal Support"]
    },
    {
      title: "Labour Law Registration & Compliance",
      description: "Professional labour law compliance services including EPF, ESIC, Shop & Establishment registration. Expert guidance for startups, factories, and service firms.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      ),
      href: "/services/labour-law",
      features: ["EPF Registration", "ESIC Registration", "Shop Establishment", "Professional Tax"]
    },
    {
      title: "Bookkeeping & Accounting Services",
      description: "Professional bookkeeping and accounting services for accurate financial records. Expert CA guidance with monthly MIS, financial reporting, and CFO-lite advisory.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      href: "/services/bookkeeping",
      features: ["Monthly Bookkeeping", "MIS Reports", "CFO Advisory", "Financial Analysis"]
    },
    {
      title: "Payroll Services & HR Compliance",
      description: "Professional payroll services including salary processing, statutory compliance, PF, ESIC, and TDS management. Expert CA guidance with 100% accuracy guarantee.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      ),
      href: "/services/payroll",
      features: ["Salary Processing", "PF Management", "ESIC Compliance", "TDS Filing"]
    },
    {
      title: "Business Advisory & Strategic Consulting",
      description: "Professional business advisory services including strategic consulting, financial planning, and growth strategy. Expert CA guidance for startups and established businesses.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      href: "/services/business-advisory",
      features: ["Strategic Consulting", "Financial Planning", "Growth Strategy", "CFO Services"]
    },
    {
      title: "Company Registration & Business Formation",
      description: "Professional company registration services including Pvt Ltd, LLP, OPC formation. Expert CA guidance with structure consultation and post-incorporation support.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      href: "/services/company-registration",
      features: ["Pvt Ltd Registration", "LLP Formation", "OPC Registration", "Post-Incorporation Support"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-soft-white via-white to-gray-50 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-transparent"></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-gold/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-slate/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate leading-tight">
              Your Business, Our Responsibility
            </h1>
            <p className="text-xl sm:text-2xl text-gold font-medium max-w-3xl mx-auto">
              Professional CA services with 100% notice coverage guarantee
            </p>
            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
              From business setup to tax compliance, we provide comprehensive financial services 
              that help your business grow while staying compliant with all regulations.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive financial solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gold"
              >
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gold/10 rounded-lg flex items-center justify-center group-hover:bg-gold/20 transition-all duration-300">
                      <div className="text-gold text-2xl">
                        {service.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate group-hover:text-gold transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-3 py-1 bg-gold/10 text-gold text-sm rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center text-gold font-medium group-hover:translate-x-2 transition-transform duration-300">
                    <span>Learn More</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-soft-white px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
              <div className="text-center">
                <h3 className="text-lg sm:text-xl font-serif font-bold text-slate mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-6 max-w-2xl mx-auto">
                  Let&apos;s discuss your requirements and find the perfect solution for your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="bg-[#C9A34A] text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-200 text-sm sm:text-base shadow-lg hover:shadow-xl"
                  >
                    Talk to an Expert
                  </Link>
                  <Link
                    href="/contact"
                    className="border-2 border-[#C9A34A] text-[#C9A34A] px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-[#C9A34A] hover:text-white transition-all duration-200 text-sm sm:text-base"
                  >
                    Book a Free Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
