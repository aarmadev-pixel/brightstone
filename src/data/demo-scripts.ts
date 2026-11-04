export type DemoSpeaker = "customer" | "receptionist" | "system";

export type DemoLine = {
  speaker: DemoSpeaker;
  label: string;
  text: string;
};

export type DemoScenario = {
  id: string;
  title: string;
  description: string;
  captured: {
    title: string;
    items: { label: string; value: string }[];
  };
  lines: DemoLine[];
};

export const demoScenarios: DemoScenario[] = [
  {
    id: "plumbing-emergency",
    title: "Plumbing emergency",
    description: "A homeowner reports a leak while the engineer is already on a job.",
    captured: {
      title: "Enquiry captured",
      items: [
        { label: "Caller", value: "Alex Patel (demo)" },
        { label: "Issue", value: "Leaking stop tap under kitchen sink" },
        { label: "Urgency", value: "Same-day request" },
        { label: "Area", value: "Demo postcode SK1" },
      ],
    },
    lines: [
      {
        speaker: "system",
        label: "System",
        text: "Incoming call · simulated · demo number 0161 000 0000",
      },
      {
        speaker: "receptionist",
        label: "AI Receptionist",
        text: "Good afternoon, you’ve reached Riverside Plumbing. This is the virtual receptionist. How can I help today?",
      },
      {
        speaker: "customer",
        label: "Customer",
        text: "Hi, water is leaking from under the kitchen sink and I’m not sure what to do.",
      },
      {
        speaker: "receptionist",
        label: "AI Receptionist",
        text: "I’m sorry to hear that. I can take the details and pass them to the team. Can I start with your name and the best number to call you back on?",
      },
      {
        speaker: "customer",
        label: "Customer",
        text: "Alex Patel. You’ve got me on this number. It’s the stop tap under the sink in SK1.",
      },
      {
        speaker: "receptionist",
        label: "AI Receptionist",
        text: "Thank you, Alex. I’ve noted a leaking stop tap in SK1 and flagged this as a same-day request. A member of the team will review it and call you back. If the leak worsens, please turn off the water at the mains if you can do so safely.",
      },
    ],
  },
  {
    id: "boiler-service",
    title: "Boiler service booking",
    description: "A customer wants to arrange a routine boiler service.",
    captured: {
      title: "Appointment request captured",
      items: [
        { label: "Caller", value: "Morgan Ellis (demo)" },
        { label: "Request", value: "Annual boiler service" },
        { label: "Preference", value: "Tuesday morning" },
        { label: "Notes", value: "Combi boiler, access via side gate" },
      ],
    },
    lines: [
      {
        speaker: "system",
        label: "System",
        text: "Incoming call · simulated · demo number 0113 000 0000",
      },
      {
        speaker: "customer",
        label: "Customer",
        text: "Hi, I need to book a boiler service.",
      },
      {
        speaker: "receptionist",
        label: "AI Receptionist",
        text: "Of course. I can help you arrange that. Can I take your name and a preferred day?",
      },
      {
        speaker: "customer",
        label: "Customer",
        text: "Morgan Ellis. Tuesday morning would be ideal if that’s possible.",
      },
      {
        speaker: "receptionist",
        label: "AI Receptionist",
        text: "Thank you, Morgan. I’ve recorded an annual boiler service request for Tuesday morning, with a note about access via the side gate. The team will confirm availability rather than treating this as a final booking.",
      },
      {
        speaker: "system",
        label: "System",
        text: "Appointment request captured · awaiting team confirmation",
      },
    ],
  },
  {
    id: "electrical-enquiry",
    title: "Electrical enquiry",
    description: "A customer asks about additional sockets and a quote.",
    captured: {
      title: "Quote enquiry captured",
      items: [
        { label: "Caller", value: "Sam Wright (demo)" },
        { label: "Request", value: "Two additional double sockets" },
        { label: "Property", value: "1930s semi, plaster walls" },
        { label: "Follow-up", value: "Email photos, then callback" },
      ],
    },
    lines: [
      {
        speaker: "system",
        label: "System",
        text: "Incoming call · simulated · demo number 0121 000 0000",
      },
      {
        speaker: "receptionist",
        label: "AI Receptionist",
        text: "Hello, you’ve reached Northfield Electrical. I can take a few details so the team can advise you properly.",
      },
      {
        speaker: "customer",
        label: "Customer",
        text: "I want two extra sockets in the living room. I’m not sure if the walls will make it complicated.",
      },
      {
        speaker: "receptionist",
        label: "AI Receptionist",
        text: "That’s a helpful start. I’ve noted two additional double sockets in a 1930s semi. If you can email a couple of photos, the team can review the enquiry before calling you back to discuss a visit.",
      },
      {
        speaker: "customer",
        label: "Customer",
        text: "Yes, I can send photos this afternoon.",
      },
      {
        speaker: "receptionist",
        label: "AI Receptionist",
        text: "Perfect. I’ve marked this as a quote enquiry rather than an emergency. Someone from the team will follow up once the photos are in.",
      },
    ],
  },
];

export const heroPreviewLines: DemoLine[] = [
  {
    speaker: "system",
    label: "Incoming Call",
    text: "Simulated enquiry · Demo customer",
  },
  {
    speaker: "customer",
    label: "Customer",
    text: "Hi, I need to book a boiler service.",
  },
  {
    speaker: "receptionist",
    label: "AI Receptionist",
    text: "Of course. I can help you arrange that.",
  },
];
