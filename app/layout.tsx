import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIChatbot from "@/components/AIChatbot";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://sparshtech.in'),
  title: {
    default: "SparshTech - Web Development, AI Chatbots & Custom Software Solutions",
    template: "%s | SparshTech",
  },
  description:
    "Leading digital solutions provider in India. We build modern websites, mobile apps, custom software, and AI-powered chatbots that empower businesses to grow. Get expert web development services and intelligent automation solutions.",
  keywords: [
    "Web Development India",
    "Mobile App Development",
    "Custom Software Development",
    "AI Chatbots",
    "Digital Solutions",
    "Tech Agency",
    "Software Development Company",
    "SparshTech",
    "Business Automation",
    "AI Solutions",
    "Website Design",
    "React Development",
    "Next.js Development",
  ],
  authors: [{ name: "SparshTech Team" }],
  creator: "SparshTech",
  publisher: "SparshTech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sparshtech.in",
    title: "SparshTech - Web Development, AI Chatbots & Custom Software Solutions",
    description:
      "Leading digital solutions provider in India. We build modern websites, mobile apps, custom software, and AI-powered chatbots that empower businesses to grow.",
    siteName: "SparshTech",
    images: [
      {
        url: "https://sparshtech.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "SparshTech - Modern Digital Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SparshTech - Web Development, AI Chatbots & Custom Software Solutions",
    description:
      "Leading digital solutions provider in India. We build modern websites, mobile apps, custom software, and AI-powered chatbots that empower businesses to grow.",
    images: ["https://sparshtech.in/og-image.png"],
    creator: "@sparshtech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: 'your-google-verification-code',
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
