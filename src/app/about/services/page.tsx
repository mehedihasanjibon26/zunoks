import type { Metadata } from "next";

import AboutSectionForward from "@/components/about/AboutSectionForward";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore ZUNOKS capabilities across strategy, people, leadership, operations and talent solutions.",
};

export default function AboutServicesPage() {
  return <AboutSectionForward hash="services" />;
}
