export const SERVICES = [
  {
    title: 'Tax Services',
    items: [
      'Individual Tax Preparation',
      'Business Tax Preparation',
      'Tax Planning and Strategy',
      'Tax Amendment Services',
      'Estate and Trust Tax Preparation',
      'Multi-State Tax Filing',
    ],
  },
  {
    title: 'Business Services',
    items: [
      'Business Formation',
      'Payroll Processing',
      'Bookkeeping Services',
      'Financial Statement Preparation',
      'Sales Tax Reporting',
      'Quarterly Estimated Tax Payments',
    ],
  },
  {
    title: 'Specialized Services',
    items: [
      'Tax Reduction Strategies',
      'Trust and Estate Tax Consulting',
      'Tax Planning and Strategy',
      'ITIN Application Assistance',
      'Back Taxes Resolution',
      'Non-Profit Tax Preparation',
    ],
  },
];

export const FAQ_CATEGORIES = [
  {
    id: 'personal-tax',
    title: 'Personal Tax',
    faqs: [
      {
        question: 'What documents do I need to prepare for my tax filing?',
        answer: 'Essential documents include: W-2s from employers, 1099s for contract work or investments, receipts for deductions (charitable donations, medical expenses, etc.), social security numbers for you and dependents, previous year\'s tax return, and any tax-related correspondence from the IRS.',
      },
      {
        question: 'When is the deadline for filing my taxes?',
        answer: 'The standard deadline for filing individual tax returns is April 15th. If this falls on a weekend or holiday, the deadline moves to the next business day.',
      },
      {
        question: 'Can I file for an extension, and how does it work?',
        answer: 'Yes, you can request a 6-month extension using Form 4868, extending your filing deadline to October 15th. Important: This extends the filing deadline, not the payment deadline. Any taxes owed are still due by April 15th to avoid penalties.',
      },
      // {
      //   question: 'What happens if I miss the tax filing deadline?',
      //   answer: 'Missing the deadline may result in penalties and interest charges. The failure-to-file penalty is typically 5% of unpaid taxes for each month your return is late, up to 25%. We can help you minimize penalties and get back into compliance.',
      // },
      {
        question: 'Do I qualify for any deductions or credits to reduce my tax liability?',
        answer: 'Common deductions include mortgage interest, charitable donations, state and local taxes, and medical expenses. Credits may include child tax credit, earned income credit, and education-related credits. We\'ll review your situation to identify all applicable deductions and credits.',
      },
      // {
      //   question: 'Can you help with back taxes or issues with the IRS?',
      //   answer: 'Yes, we provide comprehensive back taxes resolution services. We can help file past due returns, negotiate payment plans, request penalty abatement, and represent you before the IRS. Our goal is to resolve your tax issues while minimizing penalties and stress.',
      // },
    ],
  },
  {
    id: 'business-tax',
    title: 'Business Tax Services',
    faqs: [
      {
        question: 'What are the differences between filing as an LLC, S Corporation, or C Corporation?',
        answer: 'Each structure has distinct tax implications: LLCs offer flexibility and pass-through taxation, S Corporations can help save on self-employment taxes while maintaining pass-through status, and C Corporations face double taxation but offer more flexibility for benefits and ownership. We\'ll help you choose the best structure for your situation.',
      },
      {
        question: 'How do quarterly estimated tax payments work for my business?',
        answer: 'Quarterly estimated taxes are advance payments of your expected tax liability, due April 15, June 15, September 15, and January 15. The amount is based on your projected income, self-employment tax, and other tax obligations. We can help calculate these payments and set up a payment schedule.',
      },
      {
        question: 'Can you assist with payroll and sales tax compliance?',
        answer: 'Yes, we provide comprehensive payroll and sales tax services, including tax calculations, filing returns, managing deposits, and ensuring compliance with state and federal regulations. We also help set up systems to track and report these taxes accurately.',
      },
      {
        question: 'Do you provide bookkeeping services for small businesses?',
        answer: 'Yes, we offer full-service bookkeeping including expense tracking, revenue recording, financial statement preparation, and reconciliation. We can work with your existing accounting software or help you implement a new system.',
      },
    ],
  },
  {
    id: 'specialized-tax',
    title: 'Trusts, Estates, and Specialized Tax',
    faqs: [
      {
        question: 'How does setting up a trust affect my taxes?',
        answer: 'Trusts can offer tax advantages including estate tax reduction, asset protection, and controlled distribution of wealth. Different types of trusts have different tax implications. We can help you understand these implications and choose the right trust structure for your goals.',
      },
      {
        question: 'Can you assist with estate tax preparation?',
        answer: 'Yes, we provide comprehensive estate tax services including preparation of Form 706 (Estate Tax Return), valuation of assets, calculation of tax liability, and planning strategies to minimize estate taxes. We also help with post-death tax compliance and distributions.',
      },
      {
        question: 'What are the benefits of an S Corporation election for my business?',
        answer: 'S Corporation status can help reduce self-employment taxes by allowing you to split income between salary and distributions. It maintains pass-through taxation while providing some liability protection. However, it requires careful compliance with IRS rules regarding reasonable compensation.',
      },
      {
        question: 'Are there tax benefits to creating a retirement plan through my business?',
        answer: 'Yes, business retirement plans offer significant tax advantages. Contributions are typically tax-deductible, and earnings grow tax-deferred. Options include SEP IRAs, SIMPLE IRAs, and 401(k) plans. We can help you choose and implement the most beneficial plan for your business.',
      },
    ],
  },
  {
    id: 'other',
    title: 'Other',
    faqs: [
      {
        question: 'What makes your tax services different from others?',
        answer: 'We provide personalized, year-round tax services with a focus on long-term planning and optimization. Our experienced team stays current with tax laws, offers proactive advice, and builds lasting relationships with clients. We\'re committed to maximizing your tax savings while ensuring compliance.',
      },
      {
        question: 'Are your tax services available year-round?',
        answer: 'Yes, we provide tax services throughout the year. While tax season (January-April) is our busiest time, we encourage year-round tax planning and consultation to optimize your tax situation and prevent last-minute issues.',
      },
      {
        question: 'How much do your tax services cost?',
        answer: 'Our fees vary based on the complexity of your tax situation and the services required. We provide transparent pricing and will discuss all fees upfront during your initial consultation. We strive to deliver value that exceeds our fees through tax savings and peace of mind.',
      },
      // {
      //   question: 'Do you offer virtual consultations?',
      //   answer: 'Yes, we offer secure virtual consultations through video conferencing. This allows us to serve clients nationwide while maintaining the same level of personal attention and expertise as in-person meetings.',
      // },
      {
        question: 'How do I get started?',
        answer: 'Contact us to schedule a consultation. We\'ll discuss your needs, review your tax situation, and outline our recommended services. You can reach us by phone at 800-913-9498, email at contact@sorianotaxassociates.com, or through our website\'s contact form.',
      },
    ],
  },
];

export const ONBOARDING_STEPS = [
  {
    title: 'Schedule a Consultation',
    description: 'Book a free consultation to discuss your tax needs and goals. We\'ll review your situation and recommend the best approach.',
    estimate: 'New Clients Only'
  },
  {
    title: 'Document Collection',
    description: 'We\'ll provide a secure portal for you to upload your tax documents and financial information. Our team will review everything before proceeding.',
    // estimate: 'At Your Pace'
  },
  {
    title: 'Initial Review',
    description: 'Once we receive your documents, our tax experts will analyze everything and prepare a preliminary assessment of your tax situation. We will let you know if additional documentation is required for submission.',
    // estimate: '8 Hours'
  },
  {
    title: 'Review Session',
    description: 'We\'ll schedule a video call to meet and discuss our findings. We present a customized tax strategy designed to maximize your benefits and ensure compliance.',
    // estimate: '30 minutes'
  },
  {
    title: 'Tax Submission',
    description: 'Once you approve our strategy, we securely send you tax approval authorization for submission and collect payment. Upon acceptance, we will e-file your tax return.',
    // estimate: '24 Hours'
  },
    {
    title: 'Tax Refund',
    description: 'The IRS usually accepts tax returns within 24 hours and refunds are released in approximately 2 weeks (barring any unique circumstances).',
    // estimate: '2 Weeks'
  }
];