import type { Metadata } from "next";
import { Caveat, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const display = localFont({
  src: [
    { path: "./fonts/CormorantGaramond-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/CormorantGaramond-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/CormorantGaramond-600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/CormorantGaramond-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const hand = Caveat({
  variable: "--font-hand",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "My CMA PRO — Comparative Market Analysis, Less Scattered",
  description:
    "A repeatable CMA workflow for real estate agents. Comp analysis, seller net sheets, buyer costs, and client-ready reports — $20/month.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${hand.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden bg-cream text-navy">
        {children}
      </body>
    </html>
  );
}
