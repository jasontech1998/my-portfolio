import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: 'swap' });

export const metadata: Metadata = {
  title: "Jason Yu | Front-End Engineer",
  description: "Portfolio of Jason Yu, a front-end engineer based in Bay Area, CA. Showcasing projects, work experience, and creative designs.",
  keywords: ["Jason Yu", "Front-End Engineer", "React", "Next.js", "TypeScript", "Portfolio"],
  authors: [{ name: "Jason Yu" }],
  creator: "Jason Yu",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.jasonyu.app",
    siteName: "Jason Yu Portfolio",
    title: "Jason Yu | Front-End Engineer",
    description: "Portfolio of Jason Yu, a front-end engineer based in Bay Area, CA. Showcasing projects, work experience, and creative designs.",
    images: [
      {
        url: "https://www.jasonyu.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jason Yu Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jason Yu | Front-End Engineer",
    description: "Portfolio of Jason Yu, a front-end engineer based in Bay Area, CA. Showcasing projects, work experience, and creative designs.",
    creator: "@lockedinagain",
    images: ["https://www.jasonyu.app/twitter-image.jpg"],
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
      <body className={`${inter.className} antialiased min-h-screen bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen max-w-2xl w-full mx-auto">
            <div className="px-4 md:px-0 w-full">
              <Navbar />
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
            </div>
          </div>
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}