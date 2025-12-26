import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileBottomNav from "@/components/MobileBottomNav";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lawgical Station - Chartered Accountants | 100% Notice Coverage Guarantee",
  description: "Professional CA services with personal touch. 100% notice coverage guarantee, in-person consultation for large projects, and 1% to charity. Direct and simple process for GST, income tax, company registration, and more.",
  keywords: "chartered accountant, CA services, tax filing  , GST services, business accounting, audit services, payroll services",
  openGraph: {
    title: "Lawgical Station - Chartered Accountants,  ",
    description: "Professional CA services with 100% notice coverage guarantee and personal touch.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfairDisplay.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <MobileBottomNav />
        <WhatsAppButton />
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}
