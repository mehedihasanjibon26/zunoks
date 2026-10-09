import type { Metadata } from "next";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/navigation/Navbar";
import CustomCursor from "@/components/ui/CustomCursor";
import PreloaderController from "@/components/transitions/PreloaderController";
import SmoothScroll from "@/components/transitions/SmoothScroll";

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
        <PreloaderController>
          <SmoothScroll>
            <div className="site-shell">
              <Navbar />
              {children}
              <Footer />
            </div>

            <CustomCursor />
          </SmoothScroll>
        </PreloaderController>
      </body>
    </html>
  );
}