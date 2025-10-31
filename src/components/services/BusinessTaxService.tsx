'use client';

import { useRouter } from 'next/navigation';
import ServiceHero from './ServiceHero';
import TrustStats from './TrustStats';
import ProblemSection from './ProblemSection';
import ServiceHighlights from './ServiceHighlights';
import ProcessSection from './ProcessSection';
import WhyChooseUs from './WhyChooseUs';
import CTASection from './CTASection';

export default function BusinessTaxService() {
  const router = useRouter();

  const handlePrimaryCTA = () => {
    router.push('/contact');
  };

  const handleSecondaryCTA = () => {
    router.push('/contact');
  };

  const stats = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      metric: "250+",
      caption: "Businesses Guided"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      metric: "₹2.5 Cr+",
      caption: "Taxes Saved Annually"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      metric: "100%",
      caption: "Notice Coverage"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      metric: "98%",
      caption: "Client Satisfaction"
    }
  ];

  const challenges = [
    "India's tax landscape is evolving faster than ever — GST, TDS, Income Tax, MAT, transfer pricing, and corporate regulations change every quarter",
    "A small compliance error today can cost your company lakhs tomorrow — in penalties, notices, or lost credibility",
    "Complex tax structuring for business growth and profit retention",
    "TDS management and compliance across multiple transactions",
    "Tax litigation and representation before authorities"
  ];

  const serviceHighlights = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Corporate Tax Compliance & Filing",
      description: "Preparation and filing of all corporate income tax returns. Tax computation and reconciliation with audited accounts. Handling scrutiny, assessments, and departmental notices."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Tax Planning & Structuring",
      description: "Legal structuring for tax efficiency and profit retention. Advisory for new ventures, group companies, and LLPs. Dividend, MAT, TDS & expense optimisation strategies."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      title: "TDS Management & Compliance",
      description: "Monthly deduction, deposit, and return filing (24Q, 26Q, 27Q). Reconciliation with Form 26AS, AIS & Traces data. TDS audits and notice representation."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      title: "Business Health & Tax Risk Review",
      description: "Deep audit of your tax exposure, hidden liabilities, and deductions missed. Guidance for M&A, capital restructuring, or expansion plans. Preventive strategy to avoid litigation & penalties."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      ),
      title: "Tax Litigation & Representation",
      description: "End-to-end representation before tax authorities. Reply drafting, documentation & case management. Transparent communication, real-time updates."
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Business Assessment",
      description: "Business Assessment & Consultation",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      number: "2",
      title: "Document Review",
      description: "Document Review & Tax Position Mapping",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      number: "3",
      title: "Filing & Advisory",
      description: "Filing, Advisory & Compliance Execution",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      number: "4",
      title: "Continuous Monitoring",
      description: "Continuous Monitoring & Tax Risk Alerts",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      number: "5",
      title: "Strategy Session",
      description: "Year-End Strategy & Planning Session",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  const comparison = [
    {
      others: "Reactive tax filing",
      lawgical: "Proactive tax strategy"
    },
    {
      others: "Basic compliance",
      lawgical: "Strategic tax planning"
    },
    {
      others: "Limited support",
      lawgical: "Continuous monitoring"
    },
    {
      others: "Generic approach",
      lawgical: "Customized solutions"
    }
  ];

  const benefits = [
    "Chartered & Company Secretaries onboard — not agents",
    "250+ businesses guided across India",
    "100% Notice Coverage Guarantee",
    "Strategic tax planning aligned with growth goals",
    "Transparent, milestone-based billing",
    "2.5 Cr+ taxes saved for clients annually"
  ];

  return (
    <div className="min-h-screen bg-white">
      <ServiceHero
        title="Business Tax & Corporate Advisory"
        subtitle="Precision in Planning. Protection in Practice."
        description="Every business pays taxes. Only a few understand how to turn them into a strategy. At Lawgical Station, we go beyond filing — we design tax systems that safeguard profits, ensure compliance, and build financial strength for your business's future."
        ctaPrimary="Talk to a Business Tax Expert"
        ctaSecondary="Schedule a Tax Strategy Session"
        onPrimaryClick={handlePrimaryCTA}
        onSecondaryClick={handleSecondaryCTA}
      />

      <TrustStats stats={stats} />

      <ProblemSection
        title="Why Businesses Trust Tax Strategy, Not Luck"
        subtitle="India's tax landscape is evolving faster than ever."
        description="A small compliance error today can cost your company lakhs tomorrow — in penalties, notices, or lost credibility. We believe business tax isn't about paperwork — it's about protecting your structure, scaling responsibly, and staying one step ahead."
        challenges={challenges}
      />

      <ServiceHighlights
        title="Our Business Tax Services"
        highlights={serviceHighlights}
      />

      <ProcessSection
        title="How We Work — The Lawgical Way"
        steps={processSteps}
      />

      <WhyChooseUs
        title="Why Choose Lawgical Station"
        subtitle="Because compliance should create confidence — not confusion."
        comparison={comparison}
        benefits={benefits}
      />

      <CTASection
        title="Build Smart. File Confident. Grow Strong."
        subtitle="Tax compliance is mandatory. Tax intelligence is optional — but that's where the winners differentiate."
        primaryCTA="Talk to a Business Tax Expert"
        secondaryCTA="Schedule a Tax Strategy Session"
        onPrimaryClick={handlePrimaryCTA}
        onSecondaryClick={handleSecondaryCTA}
      />
    </div>
  );
}