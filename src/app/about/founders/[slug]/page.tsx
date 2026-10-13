import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FounderProfile from "@/components/about/FounderProfile";
import { partners } from "@/data/partners";

export const dynamicParams = false;

export function generateStaticParams() {
  return partners.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const founder = partners.find((partner) => partner.slug === slug);

  if (!founder) return {};

  return {
    title: founder.name,
    description: founder.bio,
  };
}

export default async function FounderProfileRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const founder = partners.find((partner) => partner.slug === slug);

  if (!founder) notFound();

  return (
    <main className="overflow-x-hidden">
      <FounderProfile founder={founder} />
    </main>
  );
}
