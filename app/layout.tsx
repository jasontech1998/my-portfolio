import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { LenisProvider } from "@/components/providers/LenisProvider";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Inter } from "next/font/google";
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

import "lenis/dist/lenis.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: 'swap' });

export const metadata: Metadata = {
  title: "Jason Yu | Software Engineer",
  description: "Portfolio of Jason Yu, a software engineer based in New York, NY. Showcasing projects, work experience, and creative designs.",
  keywords: ["Jason Yu", "Software Engineer", "React", "Next.js", "TypeScript", "Portfolio"],
  authors: [{ name: "Jason Yu" }],
  creator: "Jason Yu",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.jasonyu.app",
    siteName: "Jason Yu Portfolio",
    title: "Jason Yu | Software Engineer",
    description: "Portfolio of Jason Yu, a software engineer based in New York, NY. Showcasing projects, work experience, and creative designs.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jason Yu | Software Engineer",
    description: "Portfolio of Jason Yu, a software engineer based in New York, NY. Showcasing projects, work experience, and creative designs.",
    creator: "@lockedinagain",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  metadataBase: new URL('https://www.jasonyu.app'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistMono.className} antialiased min-h-screen bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LenisProvider>
<div className="relative flex flex-col min-h-screen max-w-2xl w-full mx-auto">
              <div className="px-4 md:px-0 w-full">
                <Navbar />
                <main className="flex-grow pt-14">
                  {children}
                </main>
                <Footer />
              </div>
            </div>
            <SpeedInsights />
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}