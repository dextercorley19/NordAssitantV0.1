import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./ui/globals.css";
import { ThemeProvider } from "./ThemeProvider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nord Assistant",
  description: "Your new first mate",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body className={inter.className}>
          <Analytics />
          <SpeedInsights />
          <ThemeProvider attribute="class">{children}</ThemeProvider>
        </body>
      </ClerkProvider>
    </html>
  );
}
