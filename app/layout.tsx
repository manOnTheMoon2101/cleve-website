import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./components/body/components/provider/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { AnimatePresence } from "framer-motion";
import { DockExample } from "./components/body/components/dock/ActuallDock/Navbar";

export const metadata: Metadata = {
  title: "Cleve Clayton | Software Developer Portfolio",
  description:
    "Cleve Clayton (@cleveclayton) is a Software Developer specializing in creating robust, user-friendly web applications with modern technologies.",
  keywords: [
    "Cleve Clayton",
    "Web Developer",
    "Software Engineer",
    "Portfolio",
    "Full Stack Developer",
    "CV",
    "JavaScript",
    "React",
    "Next.js",
    "Frontend Development",
    "Hire Developer",
  ],
  authors: [{ name: "Cleve Clayton", url: "https://cleveclayton.me" }],
  creator: "Cleve Clayton",
  publisher: "Cleve Clayton",
  metadataBase: new URL("https://cleveclayton.me"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cleveclayton.me",
    title: "Cleve Clayton | Software Developer Portfolio",
    description:
      "Explore the portfolio of Cleve Clayton, a skilled software developer with expertise in modern web technologies.",
    siteName: "Cleve Clayton Portfolio",
    images: [
      {
        url: "/og-image.jpg", // Add a high-quality OG image
        width: 1200,
        height: 630,
        alt: "Cleve Clayton Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cleve Clayton | Software Developer",
    description:
      "Explore the portfolio of Cleve Clayton, a skilled software developer with expertise in modern web technologies.",
    creator: "@cleveclayton",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  category: "technology",
  verification: {
    google: "9MlTTSsheThcuKJDD3be3CSjko0PWdm0eGvtLcW13xs",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        > */}
        <AnimatePresence>{children}</AnimatePresence>
        <div className="fixed bottom-0 left-0 right-0 z-40">
          <DockExample />
        </div>
        <SpeedInsights />
        <Analytics />
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
