import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lawgical Station - Chartered Accountants, Agra | 100% Notice Coverage Guarantee",
  description: "Professional CA services in Agra with personal touch. 100% notice coverage guarantee, in-person consultation for large projects, and 1% to charity. Direct and simple process for GST, income tax, company registration, and more.",
  keywords: "chartered accountant agra, CA services agra, tax filing agra, GST services, business accounting, audit services, payroll services",
  openGraph: {
    title: "Lawgical Station - Chartered Accountants, Agra",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
