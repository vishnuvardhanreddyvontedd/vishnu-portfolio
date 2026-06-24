import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "Vishnu Vardhan Reddy | Full Stack Developer",
    template: "%s | Vishnu Vardhan Reddy",
  },
  description:
    "Portfolio of Vishnu Vardhan Reddy, a full stack developer building production web and mobile products with Next.js, React, Flutter, Firebase, and Supabase.",
  keywords: ["Vishnu Vardhan Reddy", "Full Stack Developer", "Next.js Developer", "Flutter Developer", "React Developer"],
  authors: [{ name: "Vishnu Vardhan Reddy" }],
  openGraph: {
    title: "Vishnu Vardhan Reddy | Full Stack Developer",
    description: "Full stack developer building reliable, human-centered web and mobile products.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                    document.documentElement.setAttribute('data-theme', 'dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.setAttribute('data-theme', 'light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
