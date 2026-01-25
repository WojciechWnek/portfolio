import type { Metadata } from "next";
import { ThemeProvider } from "@/app/providers";
import { Geist, Geist_Mono } from "next/font/google";

import Nav from "@/components/nav/Nav";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wojciech Wnek – Frontend Developer",
  description:
    "Portfolio of Wojciech Wnek, building modern, scalable, and maintainable web applications. Explore projects, experience, skills, and get in touch.",
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "Web Applications",
    "Fullstack",
    "Django",
    "Tailwind CSS",
  ],
  authors: [{ name: "Wojciech Wnek", url: "https://github.com/WojciechWnek" }],
  openGraph: {
    title: "Wojciech Wnek – Frontend Developer",
    description:
      "Explore my portfolio showcasing projects, skills, and experience in building modern, scalable web applications.",
    url: "https://github.com/WojciechWnek",
    siteName: "Wojciech Wnek Portfolio",
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wojciech Wnek – Frontend Developer",
    description:
      "Portfolio of Wojciech Wnek, building modern, scalable, and maintainable web applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://github.com/WojciechWnek"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-full antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
