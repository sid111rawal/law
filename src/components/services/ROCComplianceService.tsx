'use client';

import ServiceHero from './ServiceHero';
import TrustStats from './TrustStats';
import ProblemSection from './ProblemSection';
import ServiceHighlights from './ServiceHighlights';
import ProcessSection from './ProcessSection';
import WhyChooseUs from './WhyChooseUs';
import CTASection from './CTASection';

export default function ROCComplianceService() {
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
      metric: "300+",
      caption: "Companies Managed"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      metric: "100%",
      caption: "On-Time Filing"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      metric: "₹50 Lakh+",
      caption: "Penalties Avoided"
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
    "Heavy penalties under the Companies Act, 2013",
    "Director disqualification under Section 164(2)",
    "Company strike-off under Section 248",
    "Legal action, blocked funding, or loss of investor confidence",
    "Complex regulatory requirements and frequent changes"
  ];

  const serviceHighlights = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Annual Compliance Filing",
      description: "AOC-4 (Financial Statements), MGT-7 (Annual Return), ADT-1 (Auditor Appointment), DIR-3 KYC for all directors."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Event-Based Compliances",
      description: "Changes in directors, share capital, or registered office. Share allotments, transfers, and resignations. Board resolutions & ROC intimations."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      title: "XBRL & Secretarial Documentation",
      description: "Preparation and filing of XBRL balance sheets. Maintenance of Minutes Books & Statutory Registers."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      ),
      title: "Strike-Off, Revival & Legal Representation",
      description: "Support for companies struck off by ROC. Filing of Form STK-2 and representation before authorities."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Dedicated Compliance Calendar",
      description: "Automated due date tracking. Alerts 15 days before every filing deadline. Quarterly compliance audit and summary report."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Real-Time Monitoring",
      description: "Continuous compliance monitoring with automated alerts. Proactive risk identification and mitigation strategies."
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Onboarding & Assessment",
      description: "Review your existing ROC status",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      number: "2",
      title: "Compliance Calendar Setup",
      description: "Build your company's personal filing tracker",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      number: "3",
      title: "Execution",
      description: "Prepare and file with accuracy and timelines",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      number: "4",
      title: "Review & Advisory",
      description: "Continuous updates and legal insights",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    }
  ];

  const comparison = [
    {
      others: "Cheap online platforms",
      lawgical: "Professional CA & CS guidance"
    },
    {
      others: "Form filling only",
      lawgical: "Understanding the law"
    },
    {
      others: "Reactive approach",
      lawgical: "Proactive compliance"
    },
    {
      others: "No follow-up support",
      lawgical: "Continuous monitoring"
    }
  ];

  const benefits = [
    "Dedicated ROC Compliance Division",
    "300+ Companies Managed Across India",
    "Real-time Tracking & Reminder System",
    "Team of CS + CA + Legal Experts",
    "100% On-Time Filing Record",
    "Transparent Milestone-Based Fees",
    "Because staying compliant shouldn't be stressful — it should be systematic."
  ];

  return (
    <div className="min-h-screen bg-white">
      <ServiceHero
        title="ROC Compliance & Corporate Governance"
        subtitle="Because a Company's Real Strength Lies in Its Discipline."
        description="Starting a company is easy. But running it right — year after year — requires commitment, compliance, and clarity. At Lawgical Station, we don't treat ROC filings as formalities. We treat them as the lifeline of your business identity."
        ctaPrimary="Talk to a Compliance Expert"
        ctaSecondary="Book My ROC Review"
        onPrimaryClick={handlePrimaryCTA}
        onSecondaryClick={handleSecondaryCTA}
      />

      <TrustStats stats={stats} />

      <ProblemSection
        title="What is ROC Compliance — and Why It Matters"
        subtitle="Every registered company or LLP in India must file certain returns and disclosures with the Registrar of Companies (ROC)."
        description="ROC Compliance isn't just about forms — it's about your company's credibility. Failing to comply can lead to heavy penalties, director disqualification, company strike-off, and legal action. These are not rare — they're common lessons from across India."
        challenges={challenges}
      />

      <ServiceHighlights
        title="Our ROC Compliance Services"
        highlights={serviceHighlights}
      />

      <ProcessSection
        title="How We Work — The Lawgical Way"
        steps={processSteps}
      />

      <WhyChooseUs
        title="Why Choose Lawgical Station"
        subtitle="Because staying compliant shouldn't be stressful — it should be systematic."
        comparison={comparison}
        benefits={benefits}
      />

      <CTASection
        title="Stay Compliant. Stay Confident. Stay Lawgical."
        subtitle="Compliance is not optional — it's operational. Let's secure your company's legal foundation today."
        primaryCTA="Talk to a Compliance Expert"
        secondaryCTA="Book My ROC Review"
        onPrimaryClick={handlePrimaryCTA}
        onSecondaryClick={handleSecondaryCTA}
      />
    </div>
  );
}
