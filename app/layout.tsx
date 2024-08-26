import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/header/provider/theme-provider";
import { Analytics } from "@vercel/analytics/react";
const poppins = Poppins({
  subsets: ["latin"],
  weight: "100",
});
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
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
