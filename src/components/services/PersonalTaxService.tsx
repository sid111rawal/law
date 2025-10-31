'use client';

import { useRouter } from 'next/navigation';
import ServiceHero from './ServiceHero';
import TrustStats from './TrustStats';
import ProblemSection from './ProblemSection';
import ServiceHighlights from './ServiceHighlights';
import ProcessSection from './ProcessSection';
import WhyChooseUs from './WhyChooseUs';
import CTASection from './CTASection';

export default function PersonalTaxService() {
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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      metric: "250+",
      caption: "Tax Returns Filed"
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
      metric: "97%",
      caption: "Client Satisfaction"
    }
  ];

  const challenges = [
    "Confusion about deductions, exemptions & latest rules",
    "Incorrect ITR filing or mismatched data in AIS/TIS",
    "Late filing penalties or defective return notices",
    "Tax planning for salary, business, or capital gains",
    "ITR filing for NRIs, freelancers, and professionals"
  ];

  const serviceHighlights = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Tax Filing & Return Preparation",
      description: "Accurate ITR filing for Salaried, Business, NRI, and Freelance Individuals. Review of Form 16, 26AS, AIS & TIS before submission. Complete notice & revision handling."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Tax Planning & Advisory",
      description: "Strategic planning to minimise tax legally. Investment-linked savings (80C, 80D, HRA, etc.). Year-round advisory to ensure you're always prepared."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Capital Gain & Property Transactions",
      description: "Calculation and optimisation of capital gains. Guidance on property sales, stock trades, and crypto reporting."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "NRI Taxation",
      description: "Double Taxation Avoidance (DTAA) assistance. NRI income disclosure, asset reporting, and repatriation support."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: "Representation & Notice Handling",
      description: "Expert CA & CS panel for handling income tax notices. Transparent communication, real representation."
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Schedule Consultation",
      description: "Schedule your free 15-minute consultation",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      number: "2",
      title: "Upload Documents",
      description: "Upload your documents securely",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      )
    },
    {
      number: "3",
      title: "Expert Review",
      description: "Review with our CA experts",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      number: "4",
      title: "Get Filed",
      description: "Get your taxes filed + receive advisory report",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    }
  ];

  const comparison = [
    {
      others: "Automated templates",
      lawgical: "Expert-reviewed filings"
    },
    {
      others: "Hidden fees",
      lawgical: "Transparent milestone billing"
    },
    {
      others: "Reactive approach",
      lawgical: "Proactive advisory"
    },
    {
      others: "One-time help",
      lawgical: "Year-round partnership"
    }
  ];

  const benefits = [
    "100% Notice Coverage Guarantee",
    "Personalised consultation by qualified experts",
    "Transparent pricing — no hidden surprises",
    "2.5 Cr+ taxes saved every year for our clients",
    "Trusted by 250+ founders, professionals, and families"
  ];

  return (
    <div className="min-h-screen bg-white">
      <ServiceHero
        title="Personal Tax & Individual Advisory"
        subtitle="Clarity. Compliance. Confidence."
        description="Managing personal taxes isn't just about filing returns — it's about understanding your financial story. At Lawgical Station, we simplify complex tax laws and help you plan, file, and protect your income with precision and trust."
        ctaPrimary="Talk to a Tax Expert"
        ctaSecondary="Book a Free Consultation"
        onPrimaryClick={handlePrimaryCTA}
        onSecondaryClick={handleSecondaryCTA}
      />

      <TrustStats stats={stats} />

      <ProblemSection
        title="Why Personal Tax Planning Matters"
        subtitle="Tax compliance isn't just a yearly task — it's a continuous responsibility."
        description="One wrong move or missed deadline can lead to unwanted notices, penalties, or financial leakage. With Lawgical Station, you don't just 'file' your taxes — you strategically plan your finances for long-term growth and peace of mind."
        challenges={challenges}
      />

      <ServiceHighlights
        title="Our Personal Tax Services"
        highlights={serviceHighlights}
      />

      <ProcessSection
        title="How It Works"
        steps={processSteps}
      />

      <WhyChooseUs
        title="Why Choose Lawgical Station"
        subtitle="We're not a tax filing portal — we're your personal tax partner."
        comparison={comparison}
        benefits={benefits}
      />

      <CTASection
        title="Start Smart. File Right. Stay Compliant."
        subtitle="Every ITR tells a story — make sure yours reflects clarity and integrity."
        primaryCTA="Talk to a Tax Expert"
        secondaryCTA="File My ITR with Lawgical Station"
        onPrimaryClick={handlePrimaryCTA}
        onSecondaryClick={handleSecondaryCTA}
      />
    </div>
  );
}
