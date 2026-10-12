import AboutFounders from "@/components/about/AboutFounders";
import AboutPageCTA from "@/components/about/AboutPageCTA";

export default function FoundersPage() {
  return (
    <main className="overflow-x-hidden">
      <AboutFounders />

      <AboutPageCTA
        eyebrow="Work with ZUNOKS"
        title="Let’s turn your next business challenge into meaningful progress."
        description="Connect with the ZUNOKS team to discuss consulting, transformation, leadership, talent or organizational challenges."
        href="/contact"
        buttonLabel="Start a conversation"
      />
    </main>
  );
}