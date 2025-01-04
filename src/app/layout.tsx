import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbars from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jamantek-JayaMandiriTeknik",
  description: "Butuh reparasi kompor gas cepat? Kami jasa service kompor gas panggilan akan carikan teknisi perbaikan / tukang service kompor gas terdekat di lokasi anda",
  icons: "/logo-fav.png"
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
        <Navbars />
        {children}
        <Footer />
      </body>
    </html>
  );
}
