import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jason Yu Portfolio",
  description: "my potfolio by jason yu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased min-h-screen`}
      >
        <div className="flex flex-col max-w-2xl mx-auto px-4 md:px-0">
          <Navbar />
          {children}
          <SpeedInsights />
        </div>
      </body>
    </html>
  );
}
