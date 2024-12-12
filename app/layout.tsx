import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Elif Çakmak",
  description: "I help people simplify tasks so they can work effortlessly ⭐️",
  openGraph: {
    title: "Elif Çakmak - Simplify Tasks, Work Effortlessly",
    description: "Discover podcasts, videos, apps, books and more on my personal brand site.",
    url: "https://elifcakmak.blog",
    siteName: "Elif Çakmak",
    images: [
      {
        url: "/websitephoto.png", 
        width: 1200,
        height: 630,
        alt: "Elif Cakmak Preview Image",
      },
    ],
    type: "website",
    locale: "en_US", // Adjust based on your locale
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
