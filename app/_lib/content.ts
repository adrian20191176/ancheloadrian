/**
 * Everything the page says lives here, so copy can change without touching
 * layout code.
 */

export const profile = {
  firstName: "Adrian",
  lastName: "Anchelo",
  role: "Software Engineer",
  yearsShipping: 4,
  location: "Sri Lanka",
  /** IANA zone for the live clock in the header and contact card. */
  timeZone: "Asia/Colombo",
} as const;

export const fullName = `${profile.firstName} ${profile.lastName}`;

const WHATSAPP_NUMBER = "94705191543";

/** A wa.me link that opens a chat with the message already typed. */
export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const contact = {
  phoneDisplay: "+94 70 519 1543",
  phoneTel: `+${WHATSAPP_NUMBER}`,
  whatsappUrl: whatsappLink("Hi Adrian, I want to build a website."),
} as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
] as const;

export const services = [
  {
    title: "Landing pages",
    blurb:
      "One sharp page that explains what you do and gets people to reach out. Great for a launch, an event or a brand-new idea.",
    ask: "Hi Adrian, I'd like a landing page.",
  },
  {
    title: "Business websites",
    blurb:
      "A proper home for your business online: what you offer, who you are and how to reach you, built to be easy to update.",
    ask: "Hi Adrian, I need a website for my business.",
  },
  {
    title: "Web apps",
    blurb:
      "Booking tools, dashboards, portals. Software that runs in the browser and does real work for you or your customers.",
    ask: "Hi Adrian, I have an idea for a web app.",
  },
  {
    title: "Redesigns & fixes",
    blurb:
      "Got a site that feels dated, slow or a little broken? I’ll freshen it up and sort out what’s going on under the hood.",
    ask: "Hi Adrian, my website needs a refresh.",
  },
] as const;

export const steps = [
  {
    title: "Say hi",
    blurb:
      "Message me on WhatsApp with your idea. No forms and no formal brief, just a chat about what you have in mind.",
  },
  {
    title: "Plan",
    blurb:
      "We agree on the pages, features, timeline and cost before any code gets written, so everyone knows what’s coming.",
  },
  {
    title: "Build",
    blurb:
      "I design and code it, sharing progress along the way so you can give feedback early and often.",
  },
  {
    title: "Launch",
    blurb:
      "We put it live, check it on phones, tablets and laptops, and polish anything that needs one last tweak.",
  },
] as const;

export const highlights = [
  {
    value: `${profile.yearsShipping}+`,
    label: "Years shipping software",
    blurb: "Four years of building and shipping software, most of it on the web.",
  },
  {
    value: "1:1",
    label: "Straight to the developer",
    blurb: "You talk to the person writing your code. No account managers in between.",
  },
  {
    value: "100%",
    label: "Built for every screen",
    blurb: "Every page is made to look good on phones, tablets and big screens alike.",
  },
] as const;

/**
 * The About statement. Each part is revealed word by word on scroll;
 * `pop` parts are picked out in the accent colour.
 */
export const aboutStatement: ReadonlyArray<{ text: string; pop?: boolean }> = [
  { text: "Hey, I’m Adrian. I’ve spent four years shipping software, most of it on the web. These days I help people turn" },
  { text: "cool ideas", pop: true },
  { text: "into websites that" },
  { text: "look sharp", pop: true },
  { text: "and" },
  { text: "actually work.", pop: true },
];

export const marqueeWords = [
  "Landing pages",
  "Business websites",
  "Web apps",
  "Redesigns",
  "Say hi on WhatsApp",
] as const;
