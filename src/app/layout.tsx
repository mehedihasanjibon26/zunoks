import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/navigation/Navbar";
import CustomCursor from "@/components/ui/CustomCursor";
import PreloaderController from "@/components/transitions/PreloaderController";
import SmoothScroll from "@/components/transitions/SmoothScroll";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-primary",
  display: "swap",
});

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
      <body className={inter.variable}>
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
