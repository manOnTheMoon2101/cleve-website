import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./components/body/components/provider/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { AnimatePresence } from "framer-motion";
import { DockExample } from "./components/body/components/dock/ActuallDock/Navbar";
export const metadata: Metadata = {
  title: "@cleveclayton",
  description: "Landing Page of @cleveclayton...",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <AnimatePresence>{children}</AnimatePresence>
          <div className="fixed bottom-0 left-0 right-0 z-40">
            <DockExample />
          </div>
          <SpeedInsights />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
