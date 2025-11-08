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
  title: "Agentic Atlas",
  description:
    "A modern agentic workspace that helps teams explore, plan, and launch AI-powered ideas in minutes.",
  metadataBase: new URL("https://agentic-25cce35d.vercel.app"),
  openGraph: {
    title: "Agentic Atlas",
    description:
      "Discover an immersive workspace for shaping AI concepts, planning experiments, and shipping outcomes fast.",
    url: "https://agentic-25cce35d.vercel.app",
    siteName: "Agentic Atlas",
    images: [
      {
        url: "/og-cover.svg",
        width: 1200,
        height: 630,
        alt: "Agentic Atlas — AI workspace preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentic Atlas",
    description:
      "A modern agentic workspace for planning and launching AI-powered ideas.",
    images: ["/og-cover.svg"],
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
