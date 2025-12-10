import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIChatbot from "@/components/AIChatbot";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "SparshTech - Modern Digital Solutions",
    template: "%s | SparshTech",
  },
  description:
    "We build modern websites, mobile apps, custom software, and intelligent chatbots that empower businesses to grow. Transform your digital presence with SparshTech.",
  keywords: [
    "Web Development",
    "Mobile Apps",
    "Custom Software",
    "AI Chatbots",
    "Digital Solutions",
    "Tech Agency",
    "Software Development Company",
    "SparshTech",
  ],
  authors: [{ name: "SparshTech Team" }],
  creator: "SparshTech",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sparshtech.in",
    title: "SparshTech - Modern Digital Solutions",
    description:
      "We build modern websites, mobile apps, custom software, and intelligent chatbots that empower businesses to grow.",
    siteName: "SparshTech",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SparshTech - Modern Digital Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SparshTech - Modern Digital Solutions",
    description:
      "We build modern websites, mobile apps, custom software, and intelligent chatbots that empower businesses to grow.",
    images: ["/og-image.png"],
    creator: "@sparshtech",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <AIChatbot />
      </body>
    </html>
  );
}
