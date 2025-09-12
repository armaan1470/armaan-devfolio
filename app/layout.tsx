import type React from "react";
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Armaan Shaikh | armaan.dev - Fullstack Software Engineer",
  description:
    "Passionate Fullstack Software Engineer specializing in problem-solving, MVP building, and automation. Expert in Next.js, React, Flutter, and modern web technologies.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
  },
  generator: "v0.app",
  keywords: [
    "Fullstack Developer",
    "Software Engineer",
    "React",
    "Next.js",
    "Flutter",
    "Web Development",
  ],
  authors: [{ name: "Armaan Shaikh" }],
  creator: "Armaan Shaikh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div
            className="pointer-events-none fixed top-0 left-0 z-40 w-full h-[150px] 
                 bg-gradient-to-t from-transparent to-[#f5f4f330] 
                 dark:to-[#0a0a0aa4] 
                 select-none backdrop-blur-[6px]"
            style={{
              maskImage: "linear-gradient(to bottom, black 50%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 50%, transparent)",
            }}
          />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
