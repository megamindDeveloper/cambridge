import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  // ── Basics ────────────────────────────────────────────────────────────────
  title: {
    default: "Cambridge School Mangalore | Top CBSE School – Nursery to Grade 10",
    template: "%s | Cambridge School Mangalore",
  },
  description:
    "Cambridge School Mangalore is a top-ranked CBSE school in Adyar, Mangaluru, offering academic excellence from Nursery to Grade 10. Founded in 2007 under St. Lawrence Education Trust. Admissions open 2025–26.",

  keywords: [
    // Brand
    "Cambridge School Mangalore",
    "The Cambridge International School Mangalore",
    "TCIS Mangalore",

    // Location-intent
    "best CBSE school in Mangalore",
    "top school in Mangaluru",
    "CBSE school Adyar Mangalore",
    "CBSE school Kudupu Mangalore",
    "CBSE school Neermarga Road",
    "school near Sahyadri College Mangalore",

    // Admission-intent
    "Cambridge School admissions 2025",
    "CBSE school admissions Mangalore 2025-26",
    "nursery admission Mangalore",
    "grade 10 CBSE school Mangalore",

    // Broad
    "best school in Karnataka",
    "St Lawrence Education Trust school",
    "co-curricular activities CBSE school",
    "ICT school Mangalore",
    "international school Mangaluru",
  ],

  // ── Authorship & URL ──────────────────────────────────────────────────────
  authors: [{ name: "Cambridge School Mangalore", url: "https://cambridgeschoolmangalore.com" }],
  creator: "Cambridge School Mangalore",
  publisher: "St. Lawrence Education Trust",
  metadataBase: new URL("https://cambridgeschoolmangalore.com"),
  alternates: {
    canonical: "https://cambridgeschoolmangalore.com",
  },

  // ── Open Graph ────────────────────────────────────────────────────────────
  openGraph: {
    title: "Cambridge School Mangalore | Top CBSE School – Nursery to Grade 10",
    description:
      "A premier CBSE school in Adyar, Mangaluru, founded in 2007 by Collins & Flavia Albuquerque under St. Lawrence Education Trust. Admissions open 2025–26.",
    url: "https://cambridgeschoolmangalore.com",
    siteName: "Cambridge School Mangalore",
    images: [
      {
        url: "https://cambridge-ruddy.vercel.app/images/ogImage/ogImage.png",
        width: 1200,
        height: 630,
        alt: "Cambridge School Mangalore — Adyar, Mangaluru",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ── Twitter / X ───────────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Cambridge School Mangalore | Top CBSE School",
    description:
      "Top-ranked CBSE school in Mangalore with outstanding board results, sports, ICT & co-curricular activities. Admissions open 2025–26.",
    images: ["https://cambridge-ruddy.vercel.app/images/ogImage/ogImage.png"],
  },

  // ── Robots ────────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  // ── Verification ─────────────────────────────────────────────────────────
  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_TOKEN", // ← Paste token from Search Console
  },

  // ── Misc ──────────────────────────────────────────────────────────────────
  category: "education",
  applicationName: "Cambridge School Mangalore",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

import { ModalProvider } from "@/context/ModalContext";
import GlobalModal from "@/components/sections/GlobalModal";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <ModalProvider>
          <GlobalModal />
          {children}
        </ModalProvider>
        <Toaster position="top-center" />
        <Script src="/smoothScroll/smoothScroll.js" />
      </body>
    </html>
  );
}
