import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Bryan Ge",
  description: "I am a software designer at Amplify Education building tools for internal authors developing digital learning programs for K-12 teachers and students.",
  keywords: ["software designer", "UX design", "product design", "Amplify Education"],
  authors: [{ name: "Bryan Ge" }],
  creator: "Bryan Ge",
  publisher: "Bryan Ge",
  metadataBase: new URL("https://bryange.com"),
  openGraph: {
    title: "Bryan Ge - Software Designer",
    description: "I am a software designer at Amplify Education building tools for internal authors developing digital learning programs for K-12 teachers and students.",
    url: "https://bryange.com",
    siteName: "Bryan Ge Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bryan Ge - Software Designer",
    description: "I am a software designer at Amplify Education building tools for internal authors developing digital learning programs for K-12 teachers and students.",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#EEF1F6" },
    { media: "(prefers-color-scheme: dark)", color: "#222222" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
