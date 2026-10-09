import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ZUNOKS",
    template: "%s | ZUNOKS",
  },
  description:
    "ZUNOKS is a senior-led management consulting firm focused on strategy, people, leadership, operations, transformation, and talent solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">{children}</div>
      </body>
    </html>
  );
}