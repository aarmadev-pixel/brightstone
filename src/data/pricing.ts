export const pricing = {
  packageName: "Brightstone Business",
  monthly: "£499",
  setup: "£499",
  indicative: true,
  inclusions: [
    "Professional business website",
    "AI receptionist",
    "Website chatbot",
    "Appointment booking",
    "Review management",
    "Automated follow-ups",
    "Basic reporting",
    "Ongoing support",
  ],
  caveats: [
    "This is indicative pricing for planning conversations, not a live commercial offer.",
    "Fair-use allowances, call minutes, message usage, third-party costs, and final service terms will be confirmed before commercial launch.",
    "Usage is not unlimited. AI calls, SMS, and connected services may have separate allowances or supplier charges.",
    "Final pricing depends on the services required, integrations, and expected usage.",
  ],
} as const;

export const pricingFaqs = [
  {
    question: "Is the £499 monthly figure a fixed public price?",
    answer:
      "No. £499 per month and the £499 setup fee are proposed starting figures to help businesses understand the intended range. Final pricing is confirmed after we understand requirements, usage, and any third-party services involved.",
  },
  {
    question: "What does the setup fee cover?",
    answer:
      "The setup fee is intended to cover initial discovery, configuration, and launch work such as website build, receptionist setup, and connecting the agreed tools. The exact scope is agreed before work begins.",
  },
  {
    question: "What does the monthly subscription cover?",
    answer:
      "The monthly figure is intended to cover the agreed combination of website, AI receptionist, chatbot, booking, follow-ups, basic reporting, and support. Allowances and supplier costs sit outside that headline figure until they are specified in an agreement.",
  },
  {
    question: "Are AI call minutes included?",
    answer:
      "Call handling depends on telephony and AI providers. Minutes, concurrent calls, and overage terms will be set out before launch. We will not offer unlimited AI calls as a default promise.",
  },
  {
    question: "What about additional integrations?",
    answer:
      "Connecting extra calendars, CRMs, job-management tools, or messaging providers may involve additional setup or supplier fees. Those are discussed during consultation rather than assumed in the starting package.",
  },
  {
    question: "What support is included?",
    answer:
      "Ongoing support is part of the intended package so that the website, receptionist, and automations can be adjusted as the business learns what it needs. Response times and support hours will be confirmed in service terms.",
  },
  {
    question: "What are the cancellation terms?",
    answer:
      "Cancellation, notice periods, and any remaining setup work will be defined in a future customer agreement. No contractual commitment is created by this website.",
  },
];
