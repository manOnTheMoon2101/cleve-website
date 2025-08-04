import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./components/body/components/provider/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { AnimatePresence } from "framer-motion";
import { DockExample } from "./components/body/components/dock/ActuallDock/Navbar";
import { Toaster } from "@/components/ui/sonner";
export const metadata: Metadata = {
  title: "Cleve Clayton",
  description: "@cleveclayton is a Software Developer specializing in creating robust, user-friendly web applications with modern technologies",
  keywords: ["TypeScript", "Software", "Developer"],
  authors: [{ name: "Cleve Clayton" }],
  creator: "Cleve Clayton",
  publisher: "Cleve Clayton",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cleveclayton.me",
    title: "Cleve Clayton",
    description: "@cleveclayton is a Software Developer specializing in creating robust, user-friendly web applications with modern technologies",
    siteName: "Cleve Clayton",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cleve Clayton",
    description: "@cleveclayton is a Software Developer specializing in creating robust, user-friendly web applications with modern technologies",
    creator: "@CJohn217",
  },
  verification: {
    google: "google-site-verification=9MlTTSsheThcuKJDD3be3CSjko0PWdm0eGvtLcW13xs",
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
        <Toaster />
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
