export type Service = {
  id: string;
  title: string;
  shortTitle: string;
  summary: string;
  problem: string;
  howItWorks: string[];
  benefits: string[];
  useCases: string[];
  href: string;
  icon: "phone" | "globe" | "message" | "calendar" | "star" | "workflow" | "mail";
};

export const services: Service[] = [
  {
    id: "ai-receptionist",
    title: "AI telephone receptionists",
    shortTitle: "AI Receptionists",
    summary:
      "A structured way to answer incoming calls, capture caller details, and record why someone got in touch — including when the team is already with a customer.",
    problem:
      "When a tradesperson is on a job, calls often go unanswered. That can mean missed bookings, incomplete messages, and extra time spent calling people back.",
    howItWorks: [
      "We map the questions your business needs answered on a typical call.",
      "The receptionist is configured to greet callers, collect useful details, and note the reason for the call.",
      "Appointment requests and messages can be captured in a consistent format for your team to review.",
      "Call handling rules, opening hours, and routing preferences are agreed during setup.",
    ],
    benefits: [
      "Fewer missed messages during busy periods",
      "Clearer records of who called and why",
      "A calmer way to return calls with the right context",
      "A consistent greeting that represents your business",
    ],
    useCases: [
      "A homeowner calls about a leaking pipe while the engineer is already on site.",
      "A customer wants to book a boiler service and leave a preferred time.",
      "A caller asks whether you cover their area and what information to prepare.",
    ],
    href: "/services/ai-receptionist",
    icon: "phone",
  },
  {
    id: "websites",
    title: "Professional business websites",
    shortTitle: "Professional Websites",
    summary:
      "Clear, mobile-friendly websites that explain your services, build trust, and make it easy for customers to get in touch.",
    problem:
      "Many small businesses rely on outdated sites, incomplete listings, or word of mouth alone. That can make it harder for new customers to understand what you offer or how to contact you.",
    howItWorks: [
      "We start with your services, service area, and the enquiries you want to receive.",
      "The site is structured around clear pages, practical copy, and straightforward calls to action.",
      "Contact routes, booking prompts, and chatbot placement can be added where they help.",
      "You receive a professional website designed to represent the business accurately.",
    ],
    benefits: [
      "A credible first impression on mobile and desktop",
      "Service information that is easy to scan",
      "Contact and enquiry routes in the places customers look",
      "A foundation for chatbots, booking, and follow-up tools",
    ],
    useCases: [
      "A heating engineer needs a simple site that lists services, coverage, and a contact form.",
      "An electrician wants a clearer alternative to a neglected brochure website.",
      "A growing business wants one place that explains what they do without overpromising.",
    ],
    href: "/services/websites",
    icon: "globe",
  },
  {
    id: "chatbots",
    title: "AI website chatbots",
    shortTitle: "AI Website Chatbots",
    summary:
      "On-site assistants that can answer common questions, collect enquiry details, and point visitors towards the right next step.",
    problem:
      "Website visitors often leave if they cannot quickly find opening hours, service coverage, or a way to request a booking.",
    howItWorks: [
      "We define the questions your chatbot should be able to help with.",
      "The assistant is given approved business information rather than open-ended claims.",
      "Enquiries can be captured with a name, contact detail, and reason for getting in touch.",
      "Handover instructions make it clear when a person from your team should follow up.",
    ],
    benefits: [
      "Help for visitors outside normal working hours",
      "Fewer repetitive questions for the team",
      "A structured record of website enquiries",
      "A guided path from question to contact",
    ],
    useCases: [
      "A visitor asks whether emergency call-outs are available that evening.",
      "A customer wants to know what to include in a quote request.",
      "Someone arrives from a search result and needs a quick explanation of your services.",
    ],
    href: "/services/ai-chatbots",
    icon: "message",
  },
  {
    id: "booking",
    title: "Automated appointment booking",
    shortTitle: "Automated Booking",
    summary:
      "A more organised way to request, capture, and confirm appointments instead of relying on scattered messages and voicemails.",
    problem:
      "Appointment requests often arrive through calls, texts, and informal notes, which makes diaries harder to keep accurate.",
    howItWorks: [
      "We review how you currently take bookings and what information you need.",
      "Request forms, receptionist capture, and website prompts can be aligned.",
      "Your team still reviews and confirms work according to capacity and job type.",
      "The aim is a clearer request-to-diary process, not an unattended calendar.",
    ],
    benefits: [
      "More complete booking details from the start",
      "Less back-and-forth to collect the basics",
      "A consistent process for common job types",
      "Fewer lost notes between the phone and the diary",
    ],
    useCases: [
      "Annual boiler services that need a preferred date and access notes.",
      "Electrical installation enquiries that should be reviewed before a slot is confirmed.",
      "Follow-up visits that need the original job details attached.",
    ],
    href: "/services/booking-automation",
    icon: "calendar",
  },
  {
    id: "reviews",
    title: "Google review management",
    shortTitle: "Review Management",
    summary:
      "A considerate process for inviting customers to leave a Google review at the right moment — without putting pressure on anyone.",
    problem:
      "Good work often goes unseen because review requests are forgotten, feel awkward, or are left until days later.",
    howItWorks: [
      "We agree when a review invitation is appropriate, such as after a completed job.",
      "A simple follow-up can include a link to your Google Business Profile.",
      "The wording stays professional and optional for the customer.",
      "Requests follow a consistent, fair process without filtering customers by sentiment.",
    ],
    benefits: [
      "A prompt that is easy to send after completed work",
      "More consistent review invitations",
      "Less admin than chasing this by hand",
      "A public presence that better reflects day-to-day work",
    ],
    useCases: [
      "A completed boiler service followed by an optional review invitation.",
      "A planned installation where a review request can wait until the job is signed off.",
      "A small team that currently remembers reviews only when they have spare time.",
    ],
    href: "/services/review-management",
    icon: "star",
  },
  {
    id: "follow-ups",
    title: "Automated customer follow-ups",
    shortTitle: "Automated Follow-ups",
    summary:
      "Timed messages that help you confirm appointments, request missing details, or follow up after a job — using wording you approve, subject to appropriate customer permissions and applicable UK regulations.",
    problem:
      "Follow-up calls and messages are easy to postpone, especially during a busy week of on-site work.",
    howItWorks: [
      "We identify the follow-ups that actually help, such as appointment reminders or aftercare notes.",
      "Message templates are written in your tone and reviewed with you.",
      "Sends can be triggered after an enquiry, booking request, or completed visit.",
      "Customers can still reach a person if they need to change plans.",
    ],
    benefits: [
      "Fewer forgotten reminders",
      "Clearer communication around appointments",
      "Less repetitive typing for the same updates",
      "A more organised customer experience",
    ],
    useCases: [
      "A reminder before a booked service visit.",
      "A request for a photo or boiler make before quoting.",
      "A thank-you message after a completed job, with an optional review link.",
    ],
    href: "/services/customer-followups",
    icon: "mail",
  },
  {
    id: "automation",
    title: "Business workflow automation",
    shortTitle: "Business Automation",
    summary:
      "Connecting the repetitive steps around enquiries, jobs, and follow-ups so information does not have to be copied between tools by hand.",
    problem:
      "The same customer details are often typed into a phone, a diary, a spreadsheet, and a message thread.",
    howItWorks: [
      "We look at the path from first enquiry to completed job.",
      "Repetitive steps are identified, such as copying names, addresses, and job notes.",
      "Practical automations are designed around the tools you already use where possible.",
      "Changes are introduced carefully so the process stays understandable.",
    ],
    benefits: [
      "Less duplicate data entry",
      "Fewer missed hand-offs between calls and jobs",
      "A clearer picture of incoming work",
      "Room to add reporting later without rebuilding everything",
    ],
    useCases: [
      "An enquiry captured by phone that should appear in a simple job list.",
      "A website form that should notify the right person and store the details.",
      "A completed job that should trigger a follow-up and optional review request.",
    ],
    href: "/services#automation",
    icon: "workflow",
  },
];

// Website development is the entry point; workflow integration remains available separately.
services.sort((a, b) => Number(b.id === "websites") - Number(a.id === "websites"));
export const homepageServices = services.filter((service) => service.id !== "automation");

export const serviceFeatures: Record<string, string[]> = {
  websites: ["Responsive, business-specific design and branding", "Contact and appointment enquiry forms", "SEO foundations", "Optional booking integrations", "Hosting and maintenance options", "Website redesigns"],
  "ai-receptionist": ["Routine enquiry handling", "Caller information and call summaries", "Appointment requests", "Escalation to staff under agreed rules"],
  chatbots: ["Approved answers to frequently asked questions", "Lead capture and service information", "Appointment enquiries", "Human handover"],
  booking: ["Booking forms and calendar integration options", "Appointment confirmations and reminders", "Rescheduling workflows"],
  reviews: ["Automated review invitations", "Review monitoring options", "Suggested responses for staff approval", "Customer feedback workflows"],
  "follow-ups": ["Missed-call follow-ups and enquiry acknowledgements", "Appointment reminders", "Post-service follow-ups", "Email and SMS options with appropriate customer permissions"],
};
export const websiteProcess = ["Initial consultation", "Requirements gathering", "Design and development", "Review and agreed revisions", "Launch and hosting", "Optional ongoing support"];
