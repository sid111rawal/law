'use client';

import { useRouter } from 'next/navigation';
import ServiceHero from './ServiceHero';
import TrustStats from './TrustStats';
import ProblemSection from './ProblemSection';
import ServiceHighlights from './ServiceHighlights';
import ProcessSection from './ProcessSection';
import WhyChooseUs from './WhyChooseUs';
import CTASection from './CTASection';

export default function PayrollService() {
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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      ),
      metric: "200+",
      caption: "Companies Served"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      metric: "100%",
      caption: "Accuracy Guarantee"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      metric: "₹50 Lakh+",
      caption: "Payroll Processed"
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
    "Salary delays break confidence and team morale",
    "Wrong deductions invite legal scrutiny and penalties",
    "Poor recordkeeping leads to PF, TDS, and ESI notices",
    "48% of SMEs miscalculate or delay salary components",
    "57% miss at least one statutory payment in a year",
    "39% fail to maintain proper PF or TDS records"
  ];

  const serviceHighlights = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      title: "Payroll Setup & Structure Design",
      description: "Employee master creation & data validation. Salary structure formulation (Basic, HRA, Allowances). Custom configuration for tax & benefits."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Monthly Payroll Processing",
      description: "Salary computation with TDS, PF, ESI, and PT deductions. Reimbursements, bonuses, and overtime calculation. Payslip generation and disbursal management."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Statutory Compliance Management",
      description: "PF, ESIC, and Professional Tax filing. TDS deposit and return filing (Form 24Q). Labour Welfare Fund contributions."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      ),
      title: "Employee Tax & Investment Support",
      description: "Investment declaration & proof verification. Employee Form 16 generation. Annual tax summary and HR reports."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Payroll Advisory & Review",
      description: "Monthly payroll audit. Cost optimization and CTC structuring. Compliance risk review before filings."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "24x7 Support & Query Resolution",
      description: "Dedicated payroll managers for each client. Automated reminders for every due date. 24x7 query support for HR & employees."
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Employee Data Setup",
      description: "Employee Data Setup & Validation",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      )
    },
    {
      number: "2",
      title: "Automated Computation",
      description: "Automated Computation & Verification",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      number: "3",
      title: "Compliance Filing",
      description: "Compliance Filing (TDS, PF, ESI, PT)",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      number: "4",
      title: "Reporting & Review",
      description: "Reporting & Management Review",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    }
  ];

  const comparison = [
    {
      others: "Manual processing with errors",
      lawgical: "Automated computation with verification"
    },
    {
      others: "Missed statutory deadlines",
      lawgical: "100% accuracy guarantee in filings"
    },
    {
      others: "No support or guidance",
      lawgical: "24x7 query support for HR & employees"
    },
    {
      others: "Generic payroll solutions",
      lawgical: "CA & CS-led payroll compliance"
    }
  ];

  const benefits = [
    "CA & CS-led payroll compliance",
    "Dedicated payroll managers for each client",
    "Automated reminders for every due date",
    "100% accuracy guarantee in filings",
    "24x7 query support for HR & employees",
    "We manage your payroll like our own — accurate, ethical, and on time"
  ];

  return (
    <div className="min-h-screen bg-white">
      <ServiceHero
        title="Payroll Services & HR Compliance"
        subtitle="Because Paying Right Builds Trust — and Great Teams."
        description="Payroll isn't just about transferring salaries. It's about trust, timing, and transparency — the three pillars that hold every business together. At Lawgical Station, we simplify payroll for growing businesses — ensuring that every payment, every deduction, and every report is done right, every month."
        ctaPrimary="Talk to a Payroll Expert"
        ctaSecondary="Start Payroll with Lawgical Station"
        onPrimaryClick={handlePrimaryCTA}
        onSecondaryClick={handleSecondaryCTA}
      />

      <TrustStats stats={stats} />

      <ProblemSection
        title="Why Payroll Accuracy Matters"
        subtitle="Payroll is one of the most sensitive functions in any organization."
        description="A single error can affect your team's trust, morale, and compliance record. We've seen it happen — salary delays break confidence, wrong deductions invite legal scrutiny, and poor recordkeeping leads to PF, TDS, and ESI notices. Your people deserve accuracy. Your business deserves peace of mind."
        challenges={challenges}
      />

      <ServiceHighlights
        title="Our Payroll Services Include"
        highlights={serviceHighlights}
      />

      <ProcessSection
        title="The Lawgical Payroll Process"
        steps={processSteps}
      />

      <WhyChooseUs
        title="Why Businesses Choose Lawgical Station"
        subtitle="We manage your payroll like our own — accurate, ethical, and on time."
        comparison={comparison}
        benefits={benefits}
      />

      <CTASection
        title="Pay Right. Stay Compliant. Grow Confident."
        subtitle="Let's simplify your payroll — and strengthen your people systems."
        primaryCTA="Talk to a Payroll Expert"
        secondaryCTA="Start Payroll with Lawgical Station"
        onPrimaryClick={handlePrimaryCTA}
        onSecondaryClick={handleSecondaryCTA}
      />
    </div>
  );
}
