import type { Metadata } from "next";
import { Poppins } from "next/font/google"; 
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CallatAction from "@/components/callatAction";
import WhatsAppChat from "@/components/floatingWa";

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
      <body
        className={`${poppins.variable} antialiased relative`}
      >
        <Navbar />
        {children}
        <WhatsAppChat />
        <CallatAction />
        <Footer />
      </body>
    </html>
  );
}
