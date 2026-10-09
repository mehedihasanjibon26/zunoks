import { contact as globalContact } from "./global";
import { services } from "./services";

// Sources: https://www.zunoks.com/contact/ and https://www.zunoks.com/work-with-us/.
// Contact values reuse the existing source of truth; enquiry grouping is editorial.
export const contact = {
  enquiryTypes: ["General enquiry", ...services.map((service) => service.title), "Careers", "Social impact collaboration"],
  officeAddress: globalContact.office,
  phone: globalContact.phone,
  generalEmail: globalContact.email,
  recruitmentEmail: globalContact.recruitmentEmail,
  cta: {
    title: "Start with your next challenge.",
    description: "Talk to ZUNOKS about your priorities for people, strategy and operations.",
    label: "Start a Conversation",
    href: `mailto:${globalContact.email}`,
  },
};

export type ContactContent = typeof contact;
