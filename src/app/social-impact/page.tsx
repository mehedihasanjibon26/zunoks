import type { Metadata } from "next";

import SocialImpactExperience from "@/components/social-impact/SocialImpactExperience";

export const metadata: Metadata = {
  title: "CSR & Social Impact",
  description:
    "ZUNOKS is committed to society, sustainable thinking and meaningful people development.",
};

export default function SocialImpactPage() {
  return (
    <main className="overflow-x-hidden">
      <SocialImpactExperience />
    </main>
  );
}
