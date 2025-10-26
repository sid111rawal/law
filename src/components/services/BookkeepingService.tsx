'use client';

import ServiceHero from './ServiceHero';
import TrustStats from './TrustStats';
import ProblemSection from './ProblemSection';
import ServiceHighlights from './ServiceHighlights';
import ProcessSection from './ProcessSection';
import WhyChooseUs from './WhyChooseUs';
import CTASection from './CTASection';

export default function BookkeepingService() {
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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      metric: "300+",
      caption: "Businesses Served"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      metric: "97%",
      caption: "Financial Improvement"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      metric: "₹2 Cr+",
      caption: "Cost Savings Identified"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      metric: "100%",
      caption: "Audit Ready Books"
    }
  ];

  const challenges = [
    "Thinking sales = profit without understanding real profitability",
    "Missing hidden costs, underreported expenses, and margin leaks",
    "Forgetting pending liabilities and payables",
    "Failing to reconcile GST, TDS, and bank ledgers",
    "Relying on last-minute data during audits or funding rounds",
    "7 out of 10 businesses in India run without clear financial visibility"
  ];

  const serviceHighlights = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      title: "Accounting Setup & System Design",
      description: "Chart of accounts customised for your business. Implementation on Tally, Zoho Books, or QuickBooks. Process setup for invoices, expense tracking & reconciliations."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Monthly & Quarterly Bookkeeping",
      description: "Data entry, ledger posting, and reconciliation. Bank, GST, and TDS reconciliations. Expense classification & reporting."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "MIS & Financial Reporting",
      description: "Profit & Loss statements. Balance sheet, cash flow, and ageing reports. Management dashboards for monthly performance."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      ),
      title: "CFO-Lite Advisory",
      description: "Monthly financial review calls with our experts. Guidance on improving cash flow & cost efficiency. Comparative insights with industry benchmarks."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Real-Time Updates",
      description: "Monthly reporting, Error-free ledgers, Year-end audit-ready books. Every entry is reviewed by a Chartered Professional."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Strategic Analysis",
      description: "Understand real profitability, Control unnecessary expenses, Plan taxes strategically, Make data-backed business decisions."
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "System Setup",
      description: "Chart of accounts and software implementation",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      number: "2",
      title: "Data Entry & Reconciliation",
      description: "Monthly bookkeeping and bank reconciliation",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      number: "3",
      title: "Financial Reporting",
      description: "MIS reports and performance analysis",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      number: "4",
      title: "Advisory & Insights",
      description: "Monthly review calls and strategic guidance",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      )
    }
  ];

  const comparison = [
    {
      others: "Irregular bookkeeping",
      lawgical: "Real-time updates and monthly reporting"
    },
    {
      others: "Unqualified accountants",
      lawgical: "Chartered Professional review"
    },
    {
      others: "No financial review",
      lawgical: "Monthly MIS and performance analysis"
    },
    {
      others: "Confusing growth with profit",
      lawgical: "Data-backed business decisions"
    }
  ];

  const benefits = [
    "300+ businesses trust our accounting process",
    "97% clients show measurable financial improvement",
    "Experienced CA-led team with automation tools",
    "Transparent pricing, monthly MIS & updates",
    "Confidentiality and data security guaranteed",
    "We don't sell accounting. We build financial clarity."
  ];

  return (
    <div className="min-h-screen bg-white">
      <ServiceHero
        title="Bookkeeping & Accounting Services"
        subtitle="Where Numbers Make Sense — and Businesses Make Profit."
        description="Most businesses know their sales. Very few know their profit. At Lawgical Station, we've seen founders celebrate turnover — but miss out on truth. The truth that behind every successful business, there's not just hard work — there's accurate, consistent, and insightful accounting."
        ctaPrimary="Talk to an Accounting Expert"
        ctaSecondary="Start My Monthly Bookkeeping Plan"
        onPrimaryClick={handlePrimaryCTA}
        onSecondaryClick={handleSecondaryCTA}
      />

      <TrustStats stats={stats} />

      <ProblemSection
        title="Why Accounting Isn't Just an Obligation — It's a Mirror"
        subtitle="You can't manage what you don't measure."
        description="When accounts aren't maintained properly, businesses make critical mistakes. In our research, we found that 7 out of 10 businesses in India run without clear financial visibility. They don't know what they're losing — until it's too late."
        challenges={challenges}
      />

      <ServiceHighlights
        title="Our Core Bookkeeping & Accounting Services"
        highlights={serviceHighlights}
      />

      <ProcessSection
        title="Our Approach: Data with Discipline"
        steps={processSteps}
      />

      <WhyChooseUs
        title="Why Choose Lawgical Station"
        subtitle="We don't sell accounting. We build financial clarity."
        comparison={comparison}
        benefits={benefits}
      />

      <CTASection
        title="Stay Aware. Stay Accountable. Stay Ahead."
        subtitle="Every business decision starts with a number. Let's make sure yours are right."
        primaryCTA="Talk to an Accounting Expert"
        secondaryCTA="Start My Monthly Bookkeeping Plan"
        onPrimaryClick={handlePrimaryCTA}
        onSecondaryClick={handleSecondaryCTA}
      />
    </div>
  );
}
