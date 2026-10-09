export const brand = {
  name: "ZUNOKS",
  tagline: "Inspire to Innovate",
  description:
    "A senior-led management consulting firm delivering solutions across strategy, people, leadership, operations, transformation, and talent.",
};

export const navigation = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Impact",
    href: "/case-studies",
  },
  {
    label: "Insights",
    href: "/insights",
  },
  {
    label: "Careers",
    href: "/careers",
  },
  {
    label: "Social Impact",
    href: "/social-impact",
  },
  {
    label: "Contact",
    href: "/contact",
  },
] as const;

export const servicesNavigation = [
  {
    label: "Strategic Interventions",
    href: "/services/strategic-interventions",
  },
  {
    label: "Human Resources",
    href: "/services/human-resources",
  },
  {
    label: "Gamified Recruitment",
    href: "/services/gamified-recruitment",
  },
  {
    label: "Manufacturing & Supply Chain",
    href: "/services/manufacturing-supply-chain",
  },
  {
    label: "Executive Search",
    href: "/services/executive-search",
  },
  {
    label: "Executive Coaching",
    href: "/services/executive-coaching",
  },
  {
    label: "Shared Services",
    href: "/services/shared-services",
  },
] as const;

export const primaryCTA = {
  label: "Start a Conversation",
  href: "/contact",
};

export const contact = {
  office:
    "Unit C1, 3rd Floor, House 35/B, Road 63, Gulshan-2, Dhaka 1212, Bangladesh",
  phone: "+880 9678 224224",
  email: "zunoks.consulting@zunoks.com",
  recruitmentEmail: "recruitment@zunoks.com",
};

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "#",
    isPlaceholder: true,
  },
] as const;

export const footerNavigation = {
  company: [
    {
      label: "About ZUNOKS",
      href: "/about",
    },
    {
      label: "Leadership",
      href: "/leadership",
    },
    {
      label: "Clients & Industries",
      href: "/clients",
    },
    {
      label: "Careers",
      href: "/careers",
    },
    {
      label: "Social Impact",
      href: "/social-impact",
    },
  ],

  expertise: servicesNavigation,

  knowledge: [
    {
      label: "Case Studies",
      href: "/case-studies",
    },
    {
      label: "Insights",
      href: "/insights",
    },
    {
      label: "News & Blogs",
      href: "/insights",
    },
  ],

  connect: [
    {
      label: "Contact",
      href: "/contact",
    },
    {
      label: "General Enquiry",
      href: `mailto:${contact.email}`,
    },
    {
      label: "Recruitment",
      href: `mailto:${contact.recruitmentEmail}`,
    },
  ],
};

export const footerCTA = {
  eyebrow: "Let’s Talk",
  title: "Change starts with the right conversation.",
  description:
    "Whether the challenge is strategy, people, leadership, operations, or talent, ZUNOKS brings senior expertise to help move organizations forward.",
  button: {
    label: "Start a Conversation",
    href: "/contact",
  },
};

export const copyright = {
  label: "ZUNOKS",
};