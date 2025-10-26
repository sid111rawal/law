'use client';

import ServiceHero from './ServiceHero';
import TrustStats from './TrustStats';
import ProblemSection from './ProblemSection';
import ServiceHighlights from './ServiceHighlights';
import ProcessSection from './ProcessSection';
import WhyChooseUs from './WhyChooseUs';
import CTASection from './CTASection';

export default function CompanyRegistrationService() {
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
      metric: "1,000+",
      caption: "Founders Guided"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      metric: "97%",
      caption: "Satisfaction Rate"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      metric: "3-5 Days",
      caption: "Average Time"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      metric: "100%",
      caption: "Digital Process"
    }
  ];

  const challenges = [
    "Registered as Pvt Ltd just because 'everyone else did' — and ended up paying heavy annual compliance costs",
    "Formed LLPs without understanding partner liability",
    "Ignored shareholding structure — and later lost control to investors",
    "Picked online bots promising ₹999 registration — and got silence when a notice arrived",
    "The wrong start can cost more than a failed idea",
    "Incorporation is not just about forming a company — it's about forming it right"
  ];

  const serviceHighlights = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      title: "Business Structure Consultation",
      description: "Evaluate ideal structure: Proprietorship / Partnership / LLP / Pvt Ltd / OPC. Compare taxation, compliance cost, and legal liability. Forecast future needs: funding, expansion, and exits."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Company Registration & MCA Filings",
      description: "Name approval (RUN / SPICe+). Incorporation document drafting. DIN, DSC, PAN, TAN, and GST registration. Bank account setup support."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Post-Incorporation Support",
      description: "First board meetings & resolutions. Auditor appointment & statutory register setup. Accounting, GST, and ROC compliance roadmap."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Business Launch Advisory",
      description: "Trademark & IP protection. Startup India & MSME registration. Investment readiness and pitch deck assistance."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Structure-First Approach",
      description: "We analyze your business model, future goals, funding plans, and risk appetite before recommending anything. The goal is not to make you a company — the goal is to make you successful."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      ),
      title: "Continuous Compliance Support",
      description: "Stay Compliant Year-Round with Our Dedicated Team. 100% digital process with secure documentation. Dedicated relationship manager for every client."
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Discovery Call",
      description: "Book a 15-Minute Discovery Call",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      number: "2",
      title: "Structure Recommendation",
      description: "Get a Customized Structure Recommendation",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      number: "3",
      title: "Legal Incorporation",
      description: "Incorporate with Legal Perfection",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      number: "4",
      title: "Ongoing Support",
      description: "Stay Compliant Year-Round with Our Dedicated Team",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ];

  const comparison = [
    {
      others: "Rushed registration without guidance",
      lawgical: "Structure-First, Registration-Next Approach"
    },
    {
      others: "Online bots with no support",
      lawgical: "Team of CAs, CSs & Tax Experts — Not bots"
    },
    {
      others: "Upselling unnecessary services",
      lawgical: "Transparent Consultation — No Upselling"
    },
    {
      others: "No post-registration support",
      lawgical: "Continuous Compliance Support After Formation"
    }
  ];

  const benefits = [
    "Team of CAs, CSs & Tax Experts — Not bots",
    "1000+ Founders Guided, 97% Satisfaction Rate",
    "Structure-First, Registration-Next Approach",
    "Transparent Consultation — No Upselling",
    "Continuous Compliance Support After Formation",
    "We don't push you to form a company — we prepare you to run one"
  ];

  return (
    <div className="min-h-screen bg-white">
      <ServiceHero
        title="Company Registration & Business Formation"
        subtitle="Because How You Start — Decides How Far You Go."
        description="Every great business begins with one decision — not what to sell, not how to market — but how to build its foundation. And that foundation starts with the right company structure. At Lawgical Station, we don't just register companies — we build legacies that are compliant, scalable, and strategically designed to grow."
        ctaPrimary="Talk to a Startup Expert"
        ctaSecondary="Book a Free Business Structure Call"
        onPrimaryClick={handlePrimaryCTA}
        onSecondaryClick={handleSecondaryCTA}
      />

      <TrustStats stats={stats} />

      <ProblemSection
        title="The First Step is Always the Most Crucial"
        subtitle="Most entrepreneurs rush to register — they want to launch fast, print visiting cards, and make their dream look official."
        description="But here's the truth: The wrong start can cost more than a failed idea. We've met hundreds of business owners who registered without proper guidance and faced heavy compliance costs, director disqualification notices, and bank loan rejections. Incorporation is not just about forming a company — it's about forming it right."
        challenges={challenges}
      />

      <ServiceHighlights
        title="Our Incorporation & Formation Services"
        highlights={serviceHighlights}
      />

      <ProcessSection
        title="How It Works"
        steps={processSteps}
      />

      <WhyChooseUs
        title="Why Entrepreneurs Choose Lawgical Station"
        subtitle="We don't push you to form a company — we prepare you to run one."
        comparison={comparison}
        benefits={benefits}
      />

      <CTASection
        title="Start Smart. Grow Lawgical."
        subtitle="Before you print your company name — let's make sure it's built on the right foundation."
        primaryCTA="Talk to a Startup Expert"
        secondaryCTA="Book a Free Business Structure Call"
        onPrimaryClick={handlePrimaryCTA}
        onSecondaryClick={handleSecondaryCTA}
      />
    </div>
  );
}
