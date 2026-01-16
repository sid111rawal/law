// Tax Planning Blog Post
import { ContentfulBlogPost } from '@/lib/contentful/types';
import { createBlogPost, createRichTextWithHeadings } from '../../blog-helper';

export const tax_post_6: ContentfulBlogPost = createBlogPost({
    id: 'tax-post-6',
    title: 'How to File ITR-2 Form for Income from Capital Gains',
    slug: 'how-to-file-itr-2-form-for-income-from-capital-gains',
    featuredImage: 'https://res.cloudinary.com/ddxgw6emd/image/upload/v1768431376/How_to_File_ITR-2_Form_for_Income_from_Capital_Gains_nhvbpd.png',
    content: createRichTextWithHeadings([
      {
        type: 'paragraph',
        text: 'ITR-2 is the Income Tax Return form for individuals and Hindu Undivided Families (HUFs) who have income from capital gains, house property, or other sources but do not have income from business or profession. This comprehensive guide will help you understand when to use ITR-2 and how to file it correctly, especially for capital gains income.'
      },
      {
        type: 'image',
        imageUrl: 'https://res.cloudinary.com/ddxgw6emd/image/upload/v1768431376/How_to_File_ITR-2_Form_for_Income_from_Capital_Gains_nhvbpd.png',
        imageAlt: 'How to File ITR-2 Form for Income from Capital Gains'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Who Should File ITR-2?'
      },
      {
        type: 'paragraph',
        text: 'ITR-2 is applicable for individuals and HUFs who have:'
      },
      {
        type: 'unorderedList',
        items: [
          'Income from salary or pension',
          'Income from house property (one or more)',
          'Income from capital gains (short-term or long-term)',
          'Income from other sources (interest, dividends, etc.)',
          'Foreign income and assets',
          'Agricultural income exceeding Rs. 5,000',
          'Total income exceeding Rs. 50 lakh'
        ]
      },
      {
        type: 'paragraph',
        text: 'Note: ITR-2 cannot be used if you have income from business or profession. In such cases, you need to file ITR-3 or ITR-4.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Understanding Capital Gains for ITR-2'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Types of Capital Gains'
      },
      {
        type: 'paragraph',
        text: 'Capital gains arise when you sell or transfer a capital asset. There are two types:'
      },
      {
        type: 'unorderedList',
        items: [
          'Short-Term Capital Gains (STCG): Gains from assets held for less than 36 months (or 24 months for immovable property, 12 months for listed securities)',
          'Long-Term Capital Gains (LTCG): Gains from assets held for more than the specified period'
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Common Capital Assets'
      },
      {
        type: 'unorderedList',
        items: [
          'Immovable property (house, land, building)',
          'Shares and securities',
          'Mutual funds',
          'Bonds and debentures',
          'Jewellery and precious metals',
          'Paintings, sculptures, and other works of art'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: 'Step-by-Step Guide to File ITR-2 for Capital Gains'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 1: Gather Required Documents'
      },
      {
        type: 'unorderedList',
        items: [
          'PAN card',
          'Aadhaar card',
          'Form 16 (if salaried)',
          'Form 26AS',
          'Bank statements',
          'Capital gains statements from broker (for shares/securities)',
          'Sale deed and purchase documents (for property)',
          'Investment proofs for exemptions (Section 54, 54F, etc.)',
          'TDS certificates (if any)'
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 2: Login to Income Tax e-Filing Portal'
      },
      {
        type: 'paragraph',
        text: 'Visit www.incometax.gov.in and log in using your PAN, password, and OTP sent to your registered mobile number.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 3: Select ITR-2 Form'
      },
      {
        type: 'paragraph',
        text: 'Navigate to e-File > Income Tax Return. Select Assessment Year and ITR-2 form. Click on \'Prepare and Submit Online\' or download the offline utility.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 4: Fill Personal Information'
      },
      {
        type: 'paragraph',
        text: 'Enter your personal details including name, PAN, address, email, and mobile number. Verify that all details match your PAN card.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 5: Report Salary Income (if applicable)'
      },
      {
        type: 'paragraph',
        text: 'If you have salary income, enter details from Form 16 including gross salary, deductions, and TDS. The form will auto-calculate taxable salary.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 6: Report House Property Income'
      },
      {
        type: 'paragraph',
        text: 'Enter details of all properties owned, including self-occupied and let-out properties. Provide annual rent, municipal taxes, and interest on home loan (if applicable).'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 7: Report Capital Gains Income'
      },
      {
        type: 'paragraph',
        text: 'This is the crucial section for capital gains. You need to provide:'
      },
      {
        type: 'unorderedList',
        items: [
          'Details of each capital asset sold/transferred',
          'Date of purchase and sale',
          'Sale consideration',
          'Cost of acquisition (indexed for long-term gains)',
          'Expenses on transfer',
          'Capital gains (short-term or long-term)',
          'Exemptions claimed (Section 54, 54F, 54EC, etc.)'
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 8: Report Other Sources Income'
      },
      {
        type: 'paragraph',
        text: 'Enter income from interest, dividends, family pension, or any other sources. Include TDS details if applicable.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 9: Claim Deductions'
      },
      {
        type: 'paragraph',
        text: 'Enter deductions under Chapter VI-A (Section 80C, 80D, 80G, etc.) with supporting documents.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 10: Calculate Tax Liability'
      },
      {
        type: 'paragraph',
        text: 'The form will auto-calculate your tax liability based on income slabs. Review the calculation carefully.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 11: Pay Tax (if applicable)'
      },
      {
        type: 'paragraph',
        text: 'If you have tax liability after considering TDS and advance tax, pay the balance tax online through the e-filing portal before filing the return.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 12: Verify and Submit'
      },
      {
        type: 'paragraph',
        text: 'Review all details carefully, verify calculations, and submit the return. You will receive an acknowledgment number (ITR-V) which needs to be e-verified within 120 days.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Important Points for Capital Gains in ITR-2'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Indexation Benefit'
      },
      {
        type: 'paragraph',
        text: 'For long-term capital gains, you can claim indexation benefit to adjust the cost of acquisition for inflation. Use the Cost Inflation Index (CII) provided by the Income Tax Department.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Exemptions Available'
      },
      {
        type: 'unorderedList',
        items: [
          'Section 54: Exemption on sale of residential property if proceeds invested in another residential property',
          'Section 54F: Exemption on sale of any asset (except residential property) if invested in residential property',
          'Section 54EC: Exemption on investment in specified bonds (NHAI, REC bonds)',
          'Section 54B: Exemption on sale of agricultural land'
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'TDS on Capital Gains'
      },
      {
        type: 'paragraph',
        text: 'If TDS has been deducted on capital gains (like TDS on property sale u/s 194IA), ensure it is reflected in Form 26AS and claimed in your return.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Common Mistakes to Avoid'
      },
      {
        type: 'unorderedList',
        items: [
          'Not reporting all capital gains transactions',
          'Incorrect calculation of holding period',
          'Missing indexation benefit for long-term gains',
          'Not claiming eligible exemptions',
          'Mismatch between Form 26AS and return',
          'Incorrect cost of acquisition'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: 'E-Verification of ITR-2'
      },
      {
        type: 'paragraph',
        text: 'After filing ITR-2, you must e-verify it within 120 days using any of these methods:'
      },
      {
        type: 'unorderedList',
        items: [
          'Aadhaar OTP',
          'Net banking',
          'Bank account number and IFSC',
          'Demat account',
          'Send signed ITR-V to CPC Bangalore by post'
        ]
      }
    ]),
    publishedDate: '2025-12-20T10:00:00Z',
    category: 'Tax Planning',
    excerpt: 'Complete guide to file ITR-2 for capital gains income. Learn who should file ITR-2, step-by-step process, exemptions, indexation, and common mistakes to avoid while reporting capital gains.',
    featured: false,
    author: '',
    tags: ['ITR-2', 'Capital Gains', 'Income Tax Return', 'Tax Filing', 'Long Term Capital Gains', 'Short Term Capital Gains', 'ITR Filing', 'Tax Planning', 'Property Sale']
  });
