'use client';

import ServiceHero from './ServiceHero';
import TrustStats from './TrustStats';
import ProblemSection from './ProblemSection';
import ServiceHighlights from './ServiceHighlights';
import ProcessSection from './ProcessSection';
import WhyChooseUs from './WhyChooseUs';
import CTASection from './CTASection';

export default function InternalAuditService() {
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
      metric: "100+",
      caption: "Internal Audits"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      metric: "₹50 Lakh+",
      caption: "Cost Savings Identified"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      metric: "95%",
      caption: "Risk Reduction"
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
    "Rapid regulatory changes affecting business operations",
    "Complex digital ecosystems requiring new control frameworks",
    "Financial uncertainty demanding better risk management",
    "Constant stakeholder scrutiny requiring transparency",
    "Need for clarity, accountability, and foresight in business processes"
  ];

  const serviceHighlights = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      title: "Risk Assessment & Planning",
      description: "Identify business risks across functions — finance, operations, procurement, HR. Map control gaps and design the annual internal audit plan. Develop a risk matrix that reflects your business priorities."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: "Process Review & Control Testing",
      description: "Evaluate existing internal control systems. Test compliance with statutory requirements & SOPs. Review process efficiency, segregation of duties, and data integrity."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Insightful Reporting",
      description: "Concise, actionable Internal Audit Reports. Categorised risk findings (High / Medium / Low). Practical recommendations, not theoretical suggestions."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Follow-Up & Improvement Monitoring",
      description: "Review post-audit implementation. Periodic control testing and update sessions. Ongoing risk alerts for future prevention."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Multi-Function Focus",
      description: "Financial Controls, Procurement & Inventory, Payroll & HR Systems, Statutory Compliance, Information Systems (Data Controls), Corporate Governance & Ethics, Startup Control Frameworks."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Industry Expertise",
      description: "Startups & MSMEs, Manufacturing & Trading Houses, Fintech & SaaS Companies, Retail & Distribution, NGOs & Section 8 Entities, Educational & Healthcare Institutions."
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Risk Discovery",
      description: "Understand business & control environment",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      number: "2",
      title: "Planning & Scoping",
      description: "Identify areas of priority",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      number: "3",
      title: "Fieldwork & Testing",
      description: "Perform review & control testing",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      number: "4",
      title: "Reporting & Debriefing",
      description: "Present insights to management",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      number: "5",
      title: "Follow-Up & Support",
      description: "Verify implementation",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ];

  const comparison = [
    {
      others: "Fault-finding approach",
      lawgical: "Growth-enabling audit"
    },
    {
      others: "Once-a-year visits",
      lawgical: "Continuous support"
    },
    {
      others: "Generic recommendations",
      lawgical: "Practical business insights"
    },
    {
      others: "Fear-based culture",
      lawgical: "Risk-aware culture"
    }
  ];

  const benefits = [
    "Partner-led, risk-based internal audits",
    "Team of Chartered Accountants & Company Secretaries",
    "Blend of business insight + regulatory precision",
    "Confidential & independent review",
    "Continuous support — not once-a-year visits",
    "Our audits are structured to create a risk-aware culture — not fear of audit"
  ];

  return (
    <div className="min-h-screen bg-white">
      <ServiceHero
        title="Internal Audit & Risk Advisory"
        subtitle="Beyond Numbers. Building Systems of Trust."
        description="A strong business doesn't just chase profits — it builds processes that protect them. At Lawgical Station, our Internal Audit practice helps companies go beyond compliance, uncover inefficiencies, strengthen governance, and create systems that sustain growth."
        ctaPrimary="Talk to an Internal Audit Expert"
        ctaSecondary="Book a Risk Consultation"
        onPrimaryClick={handlePrimaryCTA}
        onSecondaryClick={handleSecondaryCTA}
      />

      <TrustStats stats={stats} />

      <ProblemSection
        title="Why Internal Audit Matters More Than Ever"
        subtitle="Today's businesses operate in an environment of rapid change and complexity."
        description="Without internal control, a company runs on hope — not assurance. An effective Internal Audit ensures that your business runs on clarity, accountability, and foresight. We don't audit your people — we audit your processes, to protect your people."
        challenges={challenges}
      />

      <ServiceHighlights
        title="Our Internal Audit Approach"
        highlights={serviceHighlights}
      />

      <ProcessSection
        title="Our Internal Audit Methodology"
        steps={processSteps}
      />

      <WhyChooseUs
        title="Why Businesses Choose Lawgical Station"
        subtitle="We don't just deliver reports. We deliver resilience."
        comparison={comparison}
        benefits={benefits}
      />

      <CTASection
        title="Let's Strengthen Your Systems Before They're Tested."
        subtitle="Internal Audit isn't just for large corporations anymore — it's for every business that believes in sustainable growth."
        primaryCTA="Talk to an Internal Audit Expert"
        secondaryCTA="Book a Risk Consultation"
        onPrimaryClick={handlePrimaryCTA}
        onSecondaryClick={handleSecondaryCTA}
      />
    </div>
  );
}
