import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import Head from "next/head";
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
    title: "Simplify Tasks, Work Effortlessly",
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
      <Head>
        {/* Google Analytics Tag */}
        <Script 
          src={`https://www.googletagmanager.com/gtag/js?id=G-6V7P46JDCR`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', 'G-6V7P46JDCR');
          `}
        </Script>
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
