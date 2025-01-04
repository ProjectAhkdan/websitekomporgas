import type { Metadata } from "next";
import { Poppins } from "next/font/google";  // Import font Poppins
import "./globals.css";
import Navbars from "@/components/Navbar";
import Footer from "@/components/Footer";

// Mendefinisikan font Poppins
const poppins = Poppins({
  weight: ["400", "500", "600", "700"], // Menambahkan beberapa varian bobot
  subsets: ["latin"],
  variable: "--font-poppins", // Menggunakan variabel CSS untuk font
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
        className={`${poppins.variable} antialiased`} // Menambahkan variabel font Poppins
      >
        <Navbars />
        {children}
        <Footer />
      </body>
    </html>
  );
}
