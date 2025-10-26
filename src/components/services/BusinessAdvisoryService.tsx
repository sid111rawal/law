'use client';

import ServiceHero from './ServiceHero';
import TrustStats from './TrustStats';
import ProblemSection from './ProblemSection';
import ServiceHighlights from './ServiceHighlights';
import ProcessSection from './ProcessSection';
import WhyChooseUs from './WhyChooseUs';
import CTASection from './CTASection';

export default function BusinessAdvisoryService() {
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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      metric: "250+",
      caption: "Businesses Advised"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      metric: "300+",
      caption: "Financial Models"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      metric: "₹2.5 Cr+",
      caption: "Tax Savings"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      metric: "97%",
      caption: "Higher Margins"
    }
  ];

  const challenges = [
    "Startups scaling too fast, then running out of cash",
    "Companies with great sales but poor profitability",
    "Businesses missing tax or financial planning that could've saved lakhs",
    "Unclear direction, poor decisions, and financial blind spots",
    "One wrong business decision can cost crores",
    "Need for clarity, control, and a compass in volatile markets"
  ];

  const serviceHighlights = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      title: "Business Structure & Strategy Advisory",
      description: "Selecting the right business structure (Pvt Ltd, LLP, Partnership, etc.). Entity restructuring for tax efficiency and scalability. Designing internal processes, governance, and financial discipline."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      title: "Financial Planning & Growth Consulting",
      description: "Budgeting, cost control, and profitability analysis. Break-even, cash flow, and pricing strategy. Feasibility reports and funding readiness assessments."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Compliance & Risk Management",
      description: "Identifying operational, financial, and compliance risks. Designing control systems to prevent penalties or leakages. Business health audits and sustainability reviews."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      ),
      title: "Startup & Investor Readiness Consulting",
      description: "Preparing financial and legal due diligence documents. Equity structuring and ESOP advisory. Investor reporting, valuation, and compliance planning."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Strategic Tax & CFO Advisory",
      description: "Tax-efficient business model design. Integration of tax planning with business strategy. Virtual CFO services for continuous strategic insight."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Research-Based Recommendations",
      description: "We don't believe in fancy slides or hollow strategies. We believe in research, realism, and responsibility. Our advice doesn't just sound right, it works right."
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Business Assessment",
      description: "Comprehensive analysis of current business structure and challenges",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      number: "2",
      title: "Strategy Development",
      description: "Designing customized solutions and strategic frameworks",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      number: "3",
      title: "Implementation Support",
      description: "Guiding execution and providing ongoing strategic support",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      number: "4",
      title: "Performance Monitoring",
      description: "Continuous review and optimization of implemented strategies",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  const comparison = [
    {
      others: "Generic business advice",
      lawgical: "Research-based recommendations"
    },
    {
      others: "Fancy slides without substance",
      lawgical: "Realistic and responsible strategies"
    },
    {
      others: "One-time consultation",
      lawgical: "Ongoing strategic partnership"
    },
    {
      others: "Opinions without outcomes",
      lawgical: "Action plans — not just PowerPoint plans"
    }
  ];

  const benefits = [
    "Partner-led Advisory Approach",
    "Integrated Tax, Legal, and Financial Perspective",
    "Research-Based Recommendations",
    "Ethical, Honest, and Independent Advice",
    "Action Plans — Not Just PowerPoint Plans",
    "Our clients don't come for opinions — they come for outcomes"
  ];

  return (
    <div className="min-h-screen bg-white">
      <ServiceHero
        title="Business Advisory & Strategic Consulting"
        subtitle="Where Logic Meets Vision — and Strategy Meets Execution."
        description="Businesses don't fail because of bad products. They fail because of unclear direction, poor decisions, and financial blind spots. At Lawgical Station, we don't just advise — we partner with founders and management teams to navigate challenges, structure growth, and turn uncertainty into opportunity."
        ctaPrimary="Talk to a Business Advisor"
        ctaSecondary="Book a Strategy Consultation"
        onPrimaryClick={handlePrimaryCTA}
        onSecondaryClick={handleSecondaryCTA}
      />

      <TrustStats stats={stats} />

      <ProblemSection
        title="Why Every Business Needs the Right Advisor"
        subtitle="In today's volatile environment — where markets, laws, and consumer behaviour shift every month — gut instinct is no longer enough."
        description="What you need is clarity, control, and a compass. One wrong business decision can cost crores. The right advisory can save ten times more. We've seen it first-hand — startups scaling too fast, companies with great sales but poor profitability, and businesses missing tax or financial planning that could've saved lakhs."
        challenges={challenges}
      />

      <ServiceHighlights
        title="Our Business Advisory Services"
        highlights={serviceHighlights}
      />

      <ProcessSection
        title="Our Advisory Approach"
        steps={processSteps}
      />

      <WhyChooseUs
        title="Why Businesses Choose Lawgical Station"
        subtitle="Our clients don't come for opinions — they come for outcomes."
        comparison={comparison}
        benefits={benefits}
      />

      <CTASection
        title="Decisions Define Businesses. Let's Get Yours Right."
        subtitle="Every strategic move — from hiring to expansion — deserves expert validation. Let's make sure your next decision becomes your best one."
        primaryCTA="Talk to a Business Advisor"
        secondaryCTA="Book a Strategy Consultation"
        onPrimaryClick={handlePrimaryCTA}
        onSecondaryClick={handleSecondaryCTA}
      />
    </div>
  );
}
