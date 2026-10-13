import type { Metadata } from "next";

import AboutServices from "@/components/about/AboutServices";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore ZUNOKS capabilities across strategy, people, leadership, operations and talent solutions.",
};

export default function AboutServicesPage() {
  return (
    <main className="overflow-x-hidden">
      <AboutServices />
    </main>
  );
}
