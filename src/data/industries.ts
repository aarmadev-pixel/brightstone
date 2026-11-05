export type Industry = {
  id: string;
  title: string;
  href: string;
  summary: string;
  detail: string;
  examples: string[];
  icon: "plumbing" | "electrical" | "heating" | "business";
};

export const industries: Industry[] = [
  {
    id: "plumbing",
    title: "Plumbing",
    href: "/industries#plumbing",
    summary:
      "Help manage emergency calls, routine job requests, and the details your team needs before they can attend.",
    detail:
      "Plumbing work often arrives as an urgent call while someone is already under a sink or on the way to another job. An organised enquiry process can capture the address, the issue, and how urgently the customer needs help, so the team can respond with the right information.",
    examples: [
      "A leaking pipe reported while the engineer is already on a call-out.",
      "A customer requesting a bathroom repair and leaving access notes.",
      "An out-of-hours message that should be reviewed first thing in the morning.",
    ],
    icon: "plumbing",
  },
  {
    id: "electrical",
    title: "Electrical",
    href: "/industries#electrical",
    summary:
      "Keep job enquiries, quote requests, and customer questions organised while you are on site.",
    detail:
      "Electrical enquiries can range from a simple fitting to a larger installation that needs a proper conversation. Capturing the property type, the work required, and the best number to call back helps the business respond in a considered way rather than from a rushed voicemail.",
    examples: [
      "A homeowner asking about additional sockets and leaving photos later.",
      "A landlord requesting a safety inspection with preferred dates.",
      "A caller who needs to know whether you cover their area before going further.",
    ],
    icon: "electrical",
  },
  {
    id: "heating",
    title: "Heating & Gas",
    href: "/industries#heating",
    summary:
      "Capture boiler service bookings, breakdown reports, and heating repair details in a consistent format.",
    detail:
      "Heating engineers often deal with seasonal peaks, annual services, and breakdown calls in the same week. A receptionist or website flow can collect the boiler type, the symptoms, and whether the customer is looking for a service or a repair, giving the team a clearer starting point.",
    examples: [
      "An annual boiler service request with a preferred weekday.",
      "A no-heating call that needs basic safety and access information.",
      "A landlord booking multiple property services for the same month.",
    ],
    icon: "heating",
  },
  {
    id: "other",
    title: "Other Small Businesses",
    href: "/industries#other-businesses",
    summary:
      "The same building blocks — websites, reception, booking, and follow-ups — can be adapted to other service businesses.",
    detail:
      "Brightstone Digital is starting with trades, but the underlying need is familiar across many small and medium-sized businesses: missed calls, repetitive admin, and enquiries that arrive in too many places. We look at how customers currently get in touch and design a practical setup around that.",
    examples: [
      "A garage door company that needs a website for installation and repair enquiries.",
      "A company whose website does not explain services clearly.",
      "A team that wants follow-ups and booking requests to follow one process.",
    ],
    icon: "business",
  },
];
