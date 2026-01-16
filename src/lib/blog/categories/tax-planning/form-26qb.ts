// Tax Planning Blog Post
import { ContentfulBlogPost } from '@/lib/contentful/types';
import { createBlogPost, createRichTextWithHeadings } from '../../blog-helper';

export const tax_post_7: ContentfulBlogPost = createBlogPost({
    id: 'tax-post-7',
    title: 'How to Download and Fill Form 26QB for TDS on Property Purchase',
    slug: 'how-to-download-and-fill-form-26qb-for-tds-on-property-purchase',
    featuredImage: 'https://res.cloudinary.com/ddxgw6emd/image/upload/v1767665652/How-to-Download-and-Fill-Form-26QB-for-TDS-on-Property-Purchase_g5cmew.jpg',
    content: createRichTextWithHeadings([
      {
        type: 'paragraph',
        text: 'Form 26QB is used for payment of Tax Deducted at Source (TDS) on the purchase of immovable property. As per Section 194IA of the Income Tax Act, the buyer is required to deduct TDS at 1% on the sale consideration if it exceeds Rs. 50 lakh. This guide will help you understand how to download, fill, and submit Form 26QB correctly.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'What is Form 26QB?'
      },
      {
        type: 'paragraph',
        text: 'Form 26QB is an online form used for payment of TDS on the purchase of immovable property (other than agricultural land). It must be filed by the buyer within 30 days from the end of the month in which the property is purchased or the payment is made, whichever is earlier.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'When is Form 26QB Required?'
      },
      {
        type: 'paragraph',
        text: 'Form 26QB is required when:'
      },
      {
        type: 'unorderedList',
        items: [
          'You are purchasing immovable property (residential or commercial)',
          'The sale consideration exceeds Rs. 50 lakh',
          'You are making payment to the seller (full or part payment)',
          'The property is located in India (other than agricultural land)'
        ]
      },
      {
        type: 'paragraph',
        text: 'Note: TDS is applicable even if the payment is made in installments, as long as the total consideration exceeds Rs. 50 lakh.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'TDS Rate and Calculation'
      },
      {
        type: 'paragraph',
        text: 'TDS is deducted at 1% of the sale consideration. However, if the seller does not have a PAN, TDS is deducted at 20%.'
      },
      {
        type: 'paragraph',
        text: 'Example: If the property is purchased for Rs. 60 lakh, TDS = Rs. 60,00,000 × 1% = Rs. 60,000'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Step-by-Step Guide to Download and Fill Form 26QB'
      },
      {
        type: 'image',
        imageUrl: 'https://res.cloudinary.com/ddxgw6emd/image/upload/v1767665652/How-to-Download-and-Fill-Form-26QB-for-TDS-on-Property-Purchase_g5cmew.jpg',
        imageAlt: 'How to Download and Fill Form 26QB for TDS on Property Purchase'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 1: Login to TRACES Portal'
      },
      {
        type: 'paragraph',
        text: 'Visit www.tdscpc.gov.in (TRACES - TDS Reconciliation Analysis and Correction Enabling System) and log in using your credentials. If you don\'t have an account, register as a "Taxpayer" using your PAN.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 2: Navigate to Form 26QB'
      },
      {
        type: 'paragraph',
        text: 'After logging in, go to "Statements/Payments" > "Form 26QB" > "Prepare Online Form 26QB".'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 3: Fill Buyer Details (Part A)'
      },
      {
        type: 'paragraph',
        text: 'Enter the following details of the buyer:'
      },
      {
        type: 'unorderedList',
        items: [
          'PAN of the buyer',
          'Name of the buyer (as per PAN)',
          'Address of the buyer',
          'Email ID and mobile number',
          'Buyer type (Individual, HUF, Company, etc.)'
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 4: Fill Seller Details (Part B)'
      },
      {
        type: 'paragraph',
        text: 'Enter the following details of the seller:'
      },
      {
        type: 'unorderedList',
        items: [
          'PAN of the seller (mandatory)',
          'Name of the seller (as per PAN)',
          'Address of the seller',
          'Email ID and mobile number',
          'Seller type (Individual, HUF, Company, etc.)'
        ]
      },
      {
        type: 'paragraph',
        text: 'Important: If the seller does not have a PAN, TDS will be deducted at 20% instead of 1%.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 5: Fill Property Details (Part C)'
      },
      {
        type: 'paragraph',
        text: 'Enter property-related information:'
      },
      {
        type: 'unorderedList',
        items: [
          'Complete address of the property',
          'Pin code',
          'State and district',
          'Type of property (Residential/Commercial)',
          'Date of agreement/booking',
          'Date of possession/registration'
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 6: Enter Payment Details (Part D)'
      },
      {
        type: 'paragraph',
        text: 'Provide payment information:'
      },
      {
        type: 'unorderedList',
        items: [
          'Total sale consideration',
          'Amount paid/credited (if part payment)',
          'Date of payment',
          'TDS amount (auto-calculated at 1%)',
          'Interest, if any (for late payment)',
          'Total amount payable'
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 7: Select Payment Method'
      },
      {
        type: 'paragraph',
        text: 'Choose your payment method:'
      },
      {
        type: 'unorderedList',
        items: [
          'Net banking',
          'Debit card',
          'Credit card',
          'NEFT/RTGS',
          'Over the counter (challan)'
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 8: Make Payment'
      },
      {
        type: 'paragraph',
        text: 'Complete the payment online. After successful payment, you will receive a confirmation and Form 16B (TDS certificate) will be generated.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 9: Download Form 16B'
      },
      {
        type: 'paragraph',
        text: 'After payment, download Form 16B (TDS certificate) from the TRACES portal. This certificate should be provided to the seller as proof of TDS deduction.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Important Points to Remember'
      },
      {
        type: 'unorderedList',
        items: [
          'Form 26QB must be filed within 30 days from the end of the month in which payment is made',
          'TDS is deducted at 1% if seller has PAN, and 20% if seller does not have PAN',
          'The buyer is responsible for deducting and depositing TDS, not the seller',
          'Form 16B (TDS certificate) must be issued to the seller within 15 days of filing Form 26QB',
          'Late filing attracts interest and penalty',
          'TDS is applicable on the entire sale consideration, not just the amount paid'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: 'Penalties for Non-Compliance'
      },
      {
        type: 'unorderedList',
        items: [
          'Interest @ 1% per month for delay in deduction',
          'Interest @ 1.5% per month for delay in payment',
          'Penalty for non-filing or late filing of Form 26QB',
          'Disallowance of expenses in case of non-deduction of TDS'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: 'Common Mistakes to Avoid'
      },
      {
        type: 'unorderedList',
        items: [
          'Filing Form 26QB after the due date',
          'Incorrect PAN of buyer or seller',
          'Wrong property address or details',
          'Not issuing Form 16B to the seller',
          'Calculating TDS on partial payment instead of total consideration',
          'Missing interest calculation for late payment'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: 'How to Download Form 16B'
      },
      {
        type: 'paragraph',
        text: 'After filing Form 26QB and making payment:'
      },
      {
        type: 'unorderedList',
        items: [
          'Login to TRACES portal',
          'Go to "Downloads" > "Form 16B"',
          'Select the financial year and enter the acknowledgment number',
          'Download and verify the certificate',
          'Provide a copy to the seller'
        ]
      }
    ]),
    publishedDate: '2025-12-18T10:00:00Z',
    category: 'Tax Planning',
    excerpt: 'Complete guide to download and fill Form 26QB for TDS on property purchase. Learn TDS calculation, step-by-step filing process, payment methods, Form 16B download, and penalties for non-compliance.',
    featured: false,
    author: '',
    tags: ['Form 26QB', 'TDS on Property', 'Section 194IA', 'Property Purchase', 'TDS Filing', 'Form 16B', 'Tax Deduction', 'Property Tax', 'Income Tax']
  });
