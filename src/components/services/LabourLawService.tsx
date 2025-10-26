'use client';

import ServiceHero from './ServiceHero';
import TrustStats from './TrustStats';
import ProblemSection from './ProblemSection';
import ServiceHighlights from './ServiceHighlights';
import ProcessSection from './ProcessSection';
import WhyChooseUs from './WhyChooseUs';
import CTASection from './CTASection';

export default function LabourLawService() {
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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      ),
      metric: "250+",
      caption: "Businesses Served"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      metric: "100%",
      caption: "On-Time Registration"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      metric: "₹25 Lakh+",
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
    "Many businesses ignore labour laws until it's too late — leading to penalties, back payments, or even criminal notices",
    "Genuine entrepreneurs pay lakhs in penalties simply because no one guided them correctly",
    "Complex registration requirements across different states and industries",
    "Ongoing compliance monitoring and renewal requirements",
    "Need for understanding what applies, when it applies, and how to stay compliant"
  ];

  const serviceHighlights = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Shop & Establishment Registration",
      description: "Complete registration and compliance for retail, service, and commercial establishments across all states."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      ),
      title: "EPF (Provident Fund) Registration & Advisory",
      description: "Employee Provident Fund registration, monthly filing, and ongoing compliance management for employee benefits."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "ESIC (Employee State Insurance) Registration",
      description: "Employee State Insurance Corporation registration and monthly compliance for employee health benefits."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      title: "Professional Tax & Labour Welfare Fund",
      description: "Professional tax registration and monthly filing across applicable states. Labour welfare fund compliance and reporting."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      title: "Contract Labour & Factory Act Compliances",
      description: "Contract labour license applications, factory act compliance, and industrial safety regulations management."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Ongoing Compliance Monitoring",
      description: "Monthly filing support, renewal management, and regular compliance updates to keep you always compliant."
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Assess Applicability",
      description: "We review your business type, size, and structure",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      number: "2",
      title: "Register & File",
      description: "Handle all documentation and portal submissions",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      number: "3",
      title: "Maintain & Update",
      description: "Ensure renewals and filings are never missed",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      number: "4",
      title: "Guide & Educate",
      description: "Keep you informed of every new labour law update",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    }
  ];

  const comparison = [
    {
      others: "Hidden charges and complicated packages",
      lawgical: "Honest advice over hidden charges"
    },
    {
      others: "Just form filling",
      lawgical: "Practical solutions, not just forms"
    },
    {
      others: "Reactive compliance",
      lawgical: "On-time compliance, with zero confusion"
    },
    {
      others: "Generic approach",
      lawgical: "We don't just manage compliance — we help you understand it"
    }
  ];

  const benefits = [
    "Dedicated HR & Legal Compliance Team",
    "Transparent and ethical consulting",
    "100% on-time registration record",
    "Experience across manufacturing, IT, retail, and startups",
    "Trusted by 250+ small & mid-sized businesses",
    "We don't sell complicated packages or push unnecessary filings"
  ];

  return (
    <div className="min-h-screen bg-white">
      <ServiceHero
        title="Labour Law Registration & Compliance Consultancy"
        subtitle="Because Every Business Runs Better When It Runs Right."
        description="At Lawgical Station, we believe compliance with labour laws isn't just a legal duty — it's a moral responsibility towards the people who help you grow. Whether you're a startup, factory, or service firm — we help you stay compliant, fair, and future-ready."
        ctaPrimary="Talk to a Labour Law Consultant"
        ctaSecondary="Check My Registration Status"
        onPrimaryClick={handlePrimaryCTA}
        onSecondaryClick={handleSecondaryCTA}
      />

      <TrustStats stats={stats} />

      <ProblemSection
        title="Why It Matters"
        subtitle="Many businesses ignore labour laws until it's too late."
        description="We've seen genuine entrepreneurs pay lakhs in penalties simply because no one guided them correctly. Our aim is to ensure that never happens to you. We help you understand what applies, when it applies, and how to stay compliant — honestly and efficiently."
        challenges={challenges}
      />

      <ServiceHighlights
        title="Our Core Services Include"
        highlights={serviceHighlights}
      />

      <ProcessSection
        title="How We Help You Stay Compliant"
        steps={processSteps}
      />

      <WhyChooseUs
        title="Why Businesses Choose Lawgical Station"
        subtitle="Compliance is not about fear of law — it's about respect for your people."
        comparison={comparison}
        benefits={benefits}
      />

      <CTASection
        title="Prevention Costs Less Than Penalty."
        subtitle="Labour law compliance isn't optional — it's part of running a responsible business. Let's build a foundation of trust, legality, and care — for your people and your peace of mind."
        primaryCTA="Talk to a Labour Law Consultant"
        secondaryCTA="Check My Registration Status"
        onPrimaryClick={handlePrimaryCTA}
        onSecondaryClick={handleSecondaryCTA}
      />
    </div>
  );
}
