// Personal Finance Blog Post
import { ContentfulBlogPost } from '@/lib/contentful/types';
import { createBlogPost, createRichTextWithHeadings } from '../../blog-helper';

export const finance_post_1: ContentfulBlogPost = createBlogPost({
    id: 'finance-post-1',
    title: 'Unclaimed Money in India: How to Check and Claim Your Forgotten Bank, Insurance, Mutual Fund & Dividend Amounts (2025 Guide)',
    slug: 'unclaimed-money-india-check-claim-forgotten-bank-insurance-mutual-fund-dividend-amounts-2025',
    featuredImage: 'https://res.cloudinary.com/ddxgw6emd/image/upload/v1768166185/Unclaimed_Blog_yb3naa.png',
    content: createRichTextWithHeadings([
      {
        type: 'paragraph',
        text: 'Don\'t Ignore This — You or Your Family May Have Unclaimed Money. Many Indians are unaware that their own hard-earned money could be lying unclaimed with banks, insurance companies, mutual funds, or corporates. This is not government money. This is public money that belongs to individuals and families — often forgotten due to relocation, lack of records, or lack of awareness. According to official government disclosures, thousands of crores of rupees are waiting to be claimed.'
      },
      {
        type: 'image',
        imageUrl: 'https://res.cloudinary.com/ddxgw6emd/image/upload/v1768166185/Unclaimed_Blog_yb3naa.png',
        imageAlt: 'Unclaimed Money in India Guide'
      },
      {
        type: 'paragraph',
        text: 'This detailed guide explains: what unclaimed money is, why it remains unclaimed, exact government-verified figures, official portals to check your money, step-by-step claim process, common mistakes to avoid, and FAQs to help families claim money smoothly.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'How Much Unclaimed Money Exists in India? (Official Data)'
      },
      {
        type: 'paragraph',
        text: 'As per disclosures from RBI, IRDAI, SEBI, and IEPFA, the total unclaimed money in India is massive.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Official Breakdown of Unclaimed Amounts'
      },
      {
        type: 'unorderedList',
        items: [
          '₹78,000+ crore lying as unclaimed bank deposits (RBI)',
          '₹14,000+ crore with insurance companies (IRDAI)',
          '₹3,000+ crore in unclaimed mutual fund investments (SEBI)',
          '₹9,000+ crore as unclaimed dividends and shares (IEPFA)'
        ]
      },
      {
        type: 'paragraph',
        text: '**Total: Over ₹1,04,000 crore**'
      },
      {
        type: 'paragraph',
        text: 'This money belongs to: individuals, senior citizens, nominees, legal heirs, and families of deceased account holders.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'What Is Unclaimed Money?'
      },
      {
        type: 'paragraph',
        text: 'Unclaimed money refers to financial assets that remain inactive for a long period and are not claimed by the rightful owner or nominee. These assets include:'
      },
      {
        type: 'unorderedList',
        items: [
          'Bank savings or fixed deposits',
          'Insurance policy maturity or death claims',
          'Mutual fund units',
          'Shares and dividends',
          'Refunds and matured investments'
        ]
      },
      {
        type: 'paragraph',
        text: 'After a certain time, institutions must report these funds to regulators — but the ownership always remains with the citizen.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Why Does Money Remain Unclaimed?'
      },
      {
        type: 'paragraph',
        text: 'In most cases, unclaimed money exists due to human and documentation issues, not fraud.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Common Reasons'
      },
      {
        type: 'unorderedList',
        items: [
          'Old bank accounts forgotten over time',
          'Job transfers or migration to another city/country',
          'Poor record-keeping of insurance or investments',
          'Nominee details not updated',
          'Death of account holder without family awareness',
          'Change in contact details (mobile, email, address)'
        ]
      },
      {
        type: 'paragraph',
        text: 'Even educated families often discover unclaimed money years later.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Government of India Initiative: "Your Money, Your Right"'
      },
      {
        type: 'paragraph',
        text: 'To solve this nationwide issue, the Government of India launched a coordinated drive called: "Your Money, Your Right"'
      },
      {
        type: 'paragraph',
        text: 'This initiative brings together:'
      },
      {
        type: 'unorderedList',
        items: [
          'RBI (Reserve Bank of India)',
          'IRDAI (Insurance Regulatory and Development Authority of India)',
          'SEBI (Securities and Exchange Board of India)',
          'IEPFA (Investor Education and Protection Fund Authority)'
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Impact So Far'
      },
      {
        type: 'unorderedList',
        items: [
          'Over ₹2,000 crore already returned to rightful owners',
          'Simplified online search and claim systems',
          'Single-purpose portals for transparency'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: 'How to Check Unclaimed Money in India (Official Portals)'
      },
      {
        type: 'paragraph',
        text: 'Below are 100% government-authorized portals — no agents required.'
      },
      {
        type: 'heading',
        level: 3,
        text: '1️⃣ Unclaimed Bank Deposits – RBI UDGAM Portal'
      },
      {
        type: 'paragraph',
        text: '**Portal:** https://udgam.rbi.org.in'
      },
      {
        type: 'heading',
        level: 3,
        text: 'What You Can Check'
      },
      {
        type: 'unorderedList',
        items: [
          'Savings accounts',
          'Fixed deposits',
          'Inactive accounts across banks'
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Who Can Search'
      },
      {
        type: 'unorderedList',
        items: [
          'Self',
          'Parents',
          'Grandparents',
          'Deceased family members'
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Details Required'
      },
      {
        type: 'unorderedList',
        items: [
          'Name of account holder',
          'Date of birth (if available)',
          'PAN (optional but helpful)'
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: '2️⃣ Unclaimed Insurance Money – IRDAI Bima Bharosa'
      },
      {
        type: 'paragraph',
        text: '**Portal:** https://bimabharosa.irdai.gov.in'
      },
      {
        type: 'heading',
        level: 3,
        text: 'What You Can Check'
      },
      {
        type: 'unorderedList',
        items: [
          'Life insurance maturity amount',
          'Death claim proceeds',
          'Lapsed or forgotten policies'
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Who Should Use This'
      },
      {
        type: 'unorderedList',
        items: [
          'Policyholders',
          'Nominees',
          'Legal heirs'
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: '3️⃣ Unclaimed Mutual Funds & Dividends – SEBI MITRA Portal'
      },
      {
        type: 'paragraph',
        text: '**Portal:** https://mitra.sebi.gov.in'
      },
      {
        type: 'heading',
        level: 3,
        text: 'What You Can Check'
      },
      {
        type: 'unorderedList',
        items: [
          'Mutual fund units',
          'Unpaid dividends',
          'Corporate investment amounts'
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: '4️⃣ Unclaimed Shares & Dividends – IEPFA'
      },
      {
        type: 'paragraph',
        text: '**Portal:** https://www.iepf.gov.in'
      },
      {
        type: 'heading',
        level: 3,
        text: 'What You Can Claim'
      },
      {
        type: 'unorderedList',
        items: [
          'Shares transferred to IEPFA',
          'Dividends unpaid for 7+ years',
          'Bonus shares and interest'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: 'Step-by-Step Process to Claim Unclaimed Money'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 1: Search on the Relevant Portal'
      },
      {
        type: 'paragraph',
        text: 'Enter the name and basic details.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 2: Identify the Institution'
      },
      {
        type: 'paragraph',
        text: 'The portal shows the bank, insurer, AMC, or company holding the money.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 3: Submit Claim Request'
      },
      {
        type: 'paragraph',
        text: 'Provide: identity proof, address proof, bank details, death certificate (if applicable), and legal heir or nominee documents.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 4: Verification'
      },
      {
        type: 'paragraph',
        text: 'The institution verifies documents.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 5: Money Credited'
      },
      {
        type: 'paragraph',
        text: 'Once approved, the amount is directly transferred to your bank account.'
      },
      {
        type: 'paragraph',
        text: '**⏳ Processing Time:** 15–45 days (varies by institution)'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Important Things to Remember'
      },
      {
        type: 'unorderedList',
        items: [
          'No fees are charged on government portals',
          'Avoid agents asking for commission',
          'Keep scanned copies of documents ready',
          'Always update nominee details in future',
          'Claims can be filed even after many years'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: 'Frequently Asked Questions (FAQs)'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Is there any deadline to claim unclaimed money?'
      },
      {
        type: 'paragraph',
        text: 'No. Your money never expires.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Can legal heirs claim the amount?'
      },
      {
        type: 'paragraph',
        text: 'Yes, with proper documentation.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Is PAN mandatory?'
      },
      {
        type: 'paragraph',
        text: 'Not always, but it speeds up verification.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Can I check for deceased parents or relatives?'
      },
      {
        type: 'paragraph',
        text: 'Yes, all portals allow family searches.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Why You Should Act Now'
      },
      {
        type: 'unorderedList',
        items: [
          'Records become harder to trace over time',
          'Family members may not know later',
          'Digital verification is easier today',
          'This is your legal right'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: 'Final Words'
      },
      {
        type: 'paragraph',
        text: 'Unclaimed money is not a scam, not a rumor, and not extra income. It is your own money, waiting for awareness. Take 10 minutes today: check official portals, inform your family, and share this information responsibly. Your Money. Your Right.'
      }
    ]),
    publishedDate: '2025-12-30T10:00:00Z',
    category: 'Personal Finance',
    excerpt: 'Complete guide to check and claim unclaimed money in India. Learn about ₹1,04,000+ crore unclaimed deposits, official RBI, IRDAI, SEBI, and IEPFA portals, step-by-step claim process, and how to recover your forgotten bank, insurance, mutual fund, and dividend amounts.',
    featured: false,
    author: '',
    tags: ['Unclaimed Money', 'Unclaimed Deposits', 'RBI UDGAM', 'IRDAI Bima Bharosa', 'SEBI MITRA', 'IEPFA', 'Bank Deposits', 'Insurance Claims', 'Mutual Funds', 'Unclaimed Dividends', 'Personal Finance', 'Investor Protection']
  });
