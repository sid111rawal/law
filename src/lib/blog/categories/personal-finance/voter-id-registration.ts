// Personal Finance Blog Post
import { ContentfulBlogPost } from '@/lib/contentful/types';
import { createBlogPost, createRichTextWithHeadings } from '../../blog-helper';

export const finance_post_2: ContentfulBlogPost = createBlogPost({
    id: 'finance-post-2',
    title: 'Voter ID Online Registration: Complete Guide to Register to Vote in India (2026)',
    slug: 'voter-id-online-registration-complete-guide-register-vote-india-2026',
    featuredImage: 'https://res.cloudinary.com/ddxgw6emd/image/upload/v1768431359/Voter_ID_Online_Registration_Complete_Guide_to_Register_to_Vote_in_India_wacyj6.png',
    content: createRichTextWithHeadings([
      {
        type: 'paragraph',
        text: 'Voter registration is the fundamental process through which eligible Indian citizens enroll themselves in the electoral roll to exercise their democratic right to vote. The Election Commission of India has simplified the voter registration process by introducing online registration, making it convenient for citizens across the country to register and obtain their Voter ID card (EPIC). This comprehensive guide covers everything you need to know about voter ID online registration in India.'
      },
      {
        type: 'image',
        imageUrl: 'https://res.cloudinary.com/ddxgw6emd/image/upload/v1768431359/Voter_ID_Online_Registration_Complete_Guide_to_Register_to_Vote_in_India_wacyj6.png',
        imageAlt: 'Voter ID Online Registration Guide'
      },
      {
        type: 'heading',
        level: 2,
        text: 'What is Voter Registration?'
      },
      {
        type: 'paragraph',
        text: 'Voter registration is the process through which an Indian citizen enrolls their name in the electoral roll maintained by the Election Commission of India. Once registered, the citizen is issued a Voter ID card (Electors Photo Identity Card or EPIC), which serves as proof of identity and confirms eligibility to vote in parliamentary, state assembly, and local body elections.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Eligibility Criteria for Voter Registration'
      },
      {
        type: 'paragraph',
        text: 'To be eligible for voter registration in India, you must meet the following conditions:'
      },
      {
        type: 'unorderedList',
        items: [
          '**Citizen of India:** Must be an Indian citizen by birth or naturalization',
          '**Age Requirement:** Must be 18 years of age or above on the qualifying date (January 1st of the year)',
          '**Residence:** Must have a permanent address in India',
          '**Sound Mind:** Must be of sound mind and not disqualified by law'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: 'Who Cannot Register to Vote?'
      },
      {
        type: 'unorderedList',
        items: [
          'Non-Resident Indians (NRIs) with citizenship of another country',
          'Persons of unsound mind',
          'Persons convicted of certain criminal offenses',
          'Persons serving a sentence of imprisonment'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: 'How to Register to Vote Online in India'
      },
      {
        type: 'paragraph',
        text: 'The Election Commission of India provides an easy online registration process through the National Voters\' Services Portal (NVSP). Here\'s a step-by-step guide:'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 1: Visit the Official Portal'
      },
      {
        type: 'paragraph',
        text: 'Visit the official Voter Services Portal at https://voters.eci.gov.in or https://www.nvsp.in'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 2: Create an Account'
      },
      {
        type: 'paragraph',
        text: 'Click on "Sign up" and provide your mobile number, email ID, and captcha code. Enter the OTP received on your mobile and email to verify your account.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 3: Fill Form 6'
      },
      {
        type: 'paragraph',
        text: 'After logging in, click on "Fill Form 6" under "New registration for general electors". Form 6 is the application form for new voter registration.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 4: Enter Personal Details'
      },
      {
        type: 'paragraph',
        text: 'Fill in all required details in Form 6, including:'
      },
      {
        type: 'unorderedList',
        items: [
          'Personal information (name, date of birth, gender)',
          'Father\'s or mother\'s name',
          'Contact details (mobile number, email)',
          'Aadhaar number (optional but recommended)',
          'Current address and permanent address',
          'Assembly constituency and parliamentary constituency'
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 5: Upload Documents'
      },
      {
        type: 'paragraph',
        text: 'Upload scanned copies of required documents:'
      },
      {
        type: 'unorderedList',
        items: [
          'Recent passport-sized photograph',
          'Proof of date of birth',
          'Proof of address'
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 6: Preview and Submit'
      },
      {
        type: 'paragraph',
        text: 'Review all entered details carefully and click on "Preview and Submit". After final verification, submit the application. You will receive an acknowledgement number for tracking your application status.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Offline Voter Registration Process'
      },
      {
        type: 'paragraph',
        text: 'You can also register offline by:'
      },
      {
        type: 'unorderedList',
        items: [
          'Visiting your nearest Booth Level Officer (BLO) office',
          'Downloading Form 6 from the NVSP portal',
          'Filling the form manually with required details',
          'Attaching copies of required documents',
          'Submitting the form to the BLO'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: 'Documents Required for Voter Registration'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Proof of Date of Birth'
      },
      {
        type: 'unorderedList',
        items: [
          'Birth certificate issued by Municipal Authority or Registrar of Births and Deaths',
          'Class 10 or Class 12 mark sheet from CBSE, ICSE, or State Education Board',
          'Aadhaar card',
          'PAN card',
          'Driving license',
          'Indian passport'
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Proof of Address'
      },
      {
        type: 'unorderedList',
        items: [
          'Aadhaar card',
          'Indian passport',
          'Utility bills (electricity, water, gas) not older than one year',
          'Bank passbook or bank statement from scheduled bank',
          'Registered rental or lease agreement',
          'Registered sale deed',
          'Revenue department land records (Kisan Bahi)'
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Photograph'
      },
      {
        type: 'paragraph',
        text: 'Recent passport-sized color photograph (taken within last 6 months)'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Forms Required for Voter Registration'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Form 6 - New Voter Registration'
      },
      {
        type: 'paragraph',
        text: 'Form 6 is used for new voter registration by general electors (Indian citizens aged 18 and above).'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Form 6A - NRI Voter Registration'
      },
      {
        type: 'paragraph',
        text: 'Form 6A is used by Non-Resident Indian (NRI) citizens who hold an Indian passport but are living abroad.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Form 7 - Deletion from Electoral Roll'
      },
      {
        type: 'paragraph',
        text: 'Form 7 is used to apply for deletion of name from the electoral roll in case of death or disqualification.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Form 8 - Correction of Details'
      },
      {
        type: 'paragraph',
        text: 'Form 8 is used to correct details in the electoral roll, including name, address, photo, age, etc.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Verification Process'
      },
      {
        type: 'paragraph',
        text: 'After submitting your application:'
      },
      {
        type: 'unorderedList',
        items: [
          'The Booth Level Officer (BLO) conducts field verification',
          'BLO verifies your address and identity documents',
          'Residential details are cross-checked as per Election Commission guidelines',
          'If verification is successful, your name is added to the electoral roll',
          'Voter ID card is issued and dispatched within 15-21 days',
          'If discrepancies are found, the application may be rejected and you\'ll need to resubmit'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: 'How to Track Voter Registration Status'
      },
      {
        type: 'paragraph',
        text: 'You can track your voter registration application status by:'
      },
      {
        type: 'unorderedList',
        items: [
          'Visiting the NVSP portal and logging into your account',
          'Clicking on "Track Application Status"',
          'Entering your acknowledgement number or reference ID',
          'Checking the status of your application (Under Process, Approved, Rejected)'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: 'Important Points to Remember'
      },
      {
        type: 'unorderedList',
        items: [
          'Register before the qualifying date (January 1st) to be eligible for that year\'s elections',
          'Ensure all documents are clear and valid',
          'Provide accurate information to avoid rejection',
          'Keep your acknowledgement number safe for tracking',
          'Aadhaar linking is optional but helps in verification',
          'You can only register at one address (your current residence)',
          'Duplicate registrations can lead to legal issues'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: 'Benefits of Voter ID Card'
      },
      {
        type: 'unorderedList',
        items: [
          'Identity proof for various purposes',
          'Address proof for official documentation',
          'Eligibility to vote in elections',
          'Required for applying to government jobs in some cases',
          'Accepted as valid ID for various services'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: 'Conclusion'
      },
      {
        type: 'paragraph',
        text: 'Voter registration is a fundamental right and responsibility of every eligible Indian citizen. The online registration process has made it easier than ever to register and obtain your Voter ID card. By following the step-by-step process, submitting accurate documents, and tracking your application status, you can successfully register to vote and participate in India\'s democratic process.'
      }
    ]),
    publishedDate: '2026-01-08T10:00:00Z',
    category: 'Personal Finance',
    excerpt: 'Complete guide to voter ID online registration in India. Learn step-by-step process, eligibility criteria, required documents (Form 6), offline registration, verification process, and how to track your voter registration status.',
    featured: false,
    author: '',
    tags: ['Voter ID', 'Voter Registration', 'EPIC Card', 'Form 6', 'Election Commission', 'NVSP', 'Voter Services Portal', 'Electoral Roll', 'Voting Rights', 'Indian Elections', 'Personal Finance', 'Government Services']
  });
