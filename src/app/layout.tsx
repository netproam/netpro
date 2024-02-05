import Navbar from "@/components/Navigation/Navbar";
import FooterSection from "@/components/section/FooterSection";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NET'PROS",
  description: "la référence en entretien ménager en ile de france",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className+"overflow-hidden"}>
        <Navbar/>
 
        {children}
      <FooterSection/>
      </body>
    
    </html>
  );
}
