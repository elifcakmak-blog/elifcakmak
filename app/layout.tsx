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
  title: "Muslim Success Path",
  description: "Supporting your success path in Islam, every step of the way.🌙✨",
  openGraph: {
    title: "Your Path to Success in Islam",
    description: "",
    url: "https://www.muslimsuccesspath.com/",
    siteName: "Muslim Success Path",
    images: [
      {
        url: "/MuslimSuccessPath-Mobile.svg", 
        width: 1200,
        height: 630,
        alt: "Muslim Success Path Preview Image",
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
        []
      </Head>
      
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

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
