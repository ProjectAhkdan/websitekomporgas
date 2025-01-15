import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CallatAction from "@/components/callatAction";
import WhatsAppChat from "@/components/floatingWa";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Jamantek-JayaMandiriTeknik",
  description:
    "Butuh reparasi kompor gas cepat? Kami jasa service kompor gas panggilan akan carikan teknisi perbaikan / tukang service kompor gas terdekat di lokasi anda",
  icons: "/logo-fav.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5T3SQC77');`}
        </Script>
      </head>
      <body className={`${poppins.variable} antialiased relative`}>
        <SpeedInsights />
        <Analytics />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5T3SQC77"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Navbar />
        {children}
        <WhatsAppChat />
        <CallatAction />
        <Footer />
      </body>
    </html>
  );
}
