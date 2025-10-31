'use client';

import { useRouter } from 'next/navigation';
import ServiceHero from './ServiceHero';
import TrustStats from './TrustStats';
import ProblemSection from './ProblemSection';
import ServiceHighlights from './ServiceHighlights';
import ProcessSection from './ProcessSection';
import WhyChooseUs from './WhyChooseUs';
import CTASection from './CTASection';

export default function StatutoryAuditService() {
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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      metric: "150+",
      caption: "Audits Completed"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      metric: "₹100 Cr+",
      caption: "Assets Audited"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      metric: "100%",
      caption: "Compliance Rate"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      metric: "99%",
      caption: "Client Satisfaction"
    }
  ];

  const challenges = [
    "Tighter reporting norms and frequent MCA & ROC scrutiny",
    "Investor due diligence requiring transparent audit processes",
    "Need for clarity, accountability, and independence in financial reporting",
    "Complex Ind AS and Schedule III compliance requirements",
    "Risk of regulatory penalties for inadequate audit processes"
  ];

  const serviceHighlights = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      title: "Audit Planning & Risk Assessment",
      description: "Deep understanding of your business model and risk areas. Internal control review and fraud risk analysis. Mapping financial reporting processes to statutory requirements."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: "Execution & Verification",
      description: "Detailed verification of ledgers, transactions, and supporting documents. Testing of internal controls and procedural efficiency. Validation of accounting policies with the latest Ind AS / Schedule III."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Reporting & Advisory",
      description: "Transparent audit opinion with actionable recommendations. Management Letter highlighting key improvement areas. Presentation to Board / Partners for decision-making."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Independence & Integrity",
      description: "We connect audit findings with business decisions — not just compliance notes. We identify tax, ROC, and financial interlinkages to ensure end-to-end clarity. We maintain real independence — no conflicting advisory during audit."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Multi-Sector Expertise",
      description: "Private Limited Companies, LLPs, Startups, Section 8/NGO entities, Subsidiaries of foreign corporations. Manufacturing, Trading, Service, and Technology sectors."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Audit Excellence Framework",
      description: "ICAI Standards on Auditing (SAs), IFRS & Ind AS Alignment, Risk-based Auditing Practices, Tech-enabled Data Testing Tools, Continuous Partner Involvement."
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Planning & Risk Assessment",
      description: "Deep understanding of business model and risk areas",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      number: "2",
      title: "Execution & Verification",
      description: "Detailed verification of ledgers and transactions",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      number: "3",
      title: "Testing & Validation",
      description: "Testing of internal controls and procedural efficiency",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      number: "4",
      title: "Reporting & Advisory",
      description: "Transparent audit opinion with actionable recommendations",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    }
  ];

  const comparison = [
    {
      others: "Mechanical audit process",
      lawgical: "Human-centered audit approach"
    },
    {
      others: "Surface-level compliance",
      lawgical: "Deep business understanding"
    },
    {
      others: "Generic recommendations",
      lawgical: "Actionable business insights"
    },
    {
      others: "Junior-level execution",
      lawgical: "Partner-led audits"
    }
  ];

  const benefits = [
    "Partner-led audits — no hand-offs to juniors without review",
    "Strategic insights shared with management post-audit",
    "On-time reporting — every time",
    "100% compliance with ICAI ethical standards",
    "Zero compromise on integrity, even under pressure",
    "We don't compete on price. We compete on principles — and precision."
  ];

  return (
    <div className="min-h-screen bg-white">
      <ServiceHero
        title="Statutory Audit & Assurance Services"
        subtitle="Integrity in Numbers. Insight in Every Report."
        description="At Lawgical Station, we believe an audit is not just a checklist — it's the mirror of a company's truth. Where others see a statutory requirement, we see an opportunity — to strengthen trust, improve controls, and elevate credibility."
        ctaPrimary="Talk to an Audit Expert"
        ctaSecondary="Book Your Statutory Audit Consultation"
        onPrimaryClick={handlePrimaryCTA}
        onSecondaryClick={handleSecondaryCTA}
      />

      <TrustStats stats={stats} />

      <ProblemSection
        title="The Purpose Beyond Compliance"
        subtitle="A Statutory Audit isn't about ticking boxes."
        description="It's about ensuring that every figure, every disclosure, and every control reflects your business integrity. In today's environment — with tighter reporting norms, frequent MCA & ROC scrutiny, and investor due diligence — companies can't afford a surface-level audit. They need clarity, accountability, and independence."
        challenges={challenges}
      />

      <ServiceHighlights
        title="Our Statutory Audit Approach"
        highlights={serviceHighlights}
      />

      <ProcessSection
        title="Our Audit Excellence Framework"
        steps={processSteps}
      />

      <WhyChooseUs
        title="Why Businesses Choose Lawgical Station"
        subtitle="We don't compete on price. We compete on principles — and precision."
        comparison={comparison}
        benefits={benefits}
      />

      <CTASection
        title="Your Next Audit Should Build Confidence — Not Confusion."
        subtitle="If your audit process feels mechanical, it's time for a firm that thinks human."
        primaryCTA="Talk to an Audit Expert"
        secondaryCTA="Book Your Statutory Audit Consultation"
        onPrimaryClick={handlePrimaryCTA}
        onSecondaryClick={handleSecondaryCTA}
      />
    </div>
  );
}
