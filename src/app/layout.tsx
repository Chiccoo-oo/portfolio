import type { Metadata } from "next";
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
  title: "Anushka Ekka | Data Science & AI Undergraduate | aspiring Software/ML Engineer",
  description: "Explore the personal portfolio website of Anushka Ekka, an Elite programmer, competitive coder (LeetCode Guardian, Codeforces Expert), AI researcher, and software builder from IIT Guwahati.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme') || 'dark';
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })()
            `
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-bg-dark text-foreground selection:bg-neon-blue/30 selection:text-foreground">
        {children}
      </body>
    </html>
  );
}
