'use client';

import ServiceHero from './ServiceHero';
import TrustStats from './TrustStats';
import ProblemSection from './ProblemSection';
import ServiceHighlights from './ServiceHighlights';
import ProcessSection from './ProcessSection';
import WhyChooseUs from './WhyChooseUs';
import CTASection from './CTASection';

export default function GSTService() {
  const handlePrimaryCTA = () => {
    console.log('Primary CTA clicked');
  };

  const handleSecondaryCTA = () => {
    console.log('Secondary CTA clicked');
  };

  const stats = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      metric: "500+",
      caption: "GST Litigation Cases"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      metric: "1,000+",
      caption: "Taxpayers Supported"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      metric: "300+",
      caption: "Active Businesses"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      metric: "100%",
      caption: "Notice Coverage"
    }
  ];

  const challenges = [
    "Increasing scrutiny through AI-based data matching",
    "Mismatches in GSTR-2A / 2B causing blocked ITC",
    "Notices for minor filing delays",
    "False allegations of fake invoicing or mismatched turnover",
    "Endless departmental demands, audits & clarifications"
  ];

  const serviceHighlights = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "GST Registration & Setup",
      description: "Guidance on correct business category and structure. Input tax credit planning from day one. Voluntary & compulsory registration under expert supervision."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "GST Return Filing & Reconciliation",
      description: "GSTR-1, 3B, 9, 9C filing with full credit matching. Advanced ITC review to ensure every rupee is claimed legally. Monthly reconciliation with books & vendor data."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      ),
      title: "GST Litigation & Notice Handling",
      description: "Drafting and replying to SCN, DRC-01, DRC-07 & audit queries. Representation before department & appellate authorities. Real-time case tracking and expert support. 500+ successful resolutions and counting."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      title: "GST Audit & Risk Review",
      description: "In-depth audit of past filings to uncover ITC leakage. Identify future risk areas before the department does. Review of vendor compliance and liability mapping."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "GST Advisory & Planning",
      description: "Strategic planning to save lakhs through lawful structuring. Industry-specific tax advice for manufacturing, trading, IT, services, and startups. Regular updates & alerts for changing GST rules."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Ongoing Compliance Monitoring",
      description: "Dedicated compliance manager assigned to your business. Monthly reports, reminders, and notice watch. Access to our Lawgical GST Dashboard (launching soon)."
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Book Consultation",
      description: "Book a consultation with our GST expert",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      number: "2",
      title: "Share Documents",
      description: "Share your returns or notice copy securely",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      )
    },
    {
      number: "3",
      title: "Analyse & Prepare",
      description: "We analyse & prepare your compliance roadmap",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      number: "4",
      title: "Execution & Tracking",
      description: "Execution + real-time tracking & reporting",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      number: "5",
      title: "Regular Updates",
      description: "Regular updates + future-proofing",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ];

  const comparison = [
    {
      others: "Basic filing services",
      lawgical: "Complete GST protection & strategy"
    },
    {
      others: "Reactive compliance",
      lawgical: "Proactive risk management"
    },
    {
      others: "Limited support",
      lawgical: "Dedicated compliance manager"
    },
    {
      others: "Generic approach",
      lawgical: "Industry-specific expertise"
    }
  ];

  const benefits = [
    "100% Notice Coverage Guarantee",
    "500+ GST Litigation Cases Successfully Handled",
    "2.5 Cr+ Taxes Saved Annually",
    "300+ Active Businesses Managed",
    "Multi-sector GST Expertise (Manufacturing, SaaS, Retail, Finance, Exports)",
    "No hidden fees, milestone-based engagement"
  ];

  return (
    <div className="min-h-screen bg-white">
      <ServiceHero
        title="GST Services & Litigation Support"
        subtitle="From Returns to Rescues — Your Complete GST Partner."
        description="In today's world, GST is no longer just a tax — it's a story of audits, notices, reconciliations… and sometimes, sleepless nights. At Lawgical Station, we don't just file your GST. We simplify, strategise, and shield your business — so you can focus on growth, not government portals."
        ctaPrimary="Talk to a GST Expert"
        ctaSecondary="Book My GST Review"
        onPrimaryClick={handlePrimaryCTA}
        onSecondaryClick={handleSecondaryCTA}
      />

      <TrustStats stats={stats} />

      <ProblemSection
        title="The Reality of GST Today"
        subtitle="Since the launch of GST, businesses have faced increasing scrutiny and compliance challenges."
        description="GST has become a daily compliance battlefield — and we've made it our mission to protect the genuine taxpayer. We've handled 500+ GST litigation and notice cases, supported 1,000+ taxpayers, and currently manage 300+ active business GST portfolios across India. When others panic after a notice, our clients call us — because we've already prepared for it."
        challenges={challenges}
      />

      <ServiceHighlights
        title="Our GST Services"
        highlights={serviceHighlights}
      />

      <ProcessSection
        title="How It Works"
        steps={processSteps}
      />

      <WhyChooseUs
        title="Why Lawgical Station for GST"
        subtitle="Because we don't just comply — we protect."
        comparison={comparison}
        benefits={benefits}
      />

      <CTASection
        title="Avoid Penalties. Build Clarity. Win with Compliance."
        subtitle="The next GST audit cycle is around the corner. Let's make sure your returns tell a story of confidence — not confusion."
        primaryCTA="Talk to a GST Expert"
        secondaryCTA="Book My GST Review"
        onPrimaryClick={handlePrimaryCTA}
        onSecondaryClick={handleSecondaryCTA}
      />
    </div>
  );
}
