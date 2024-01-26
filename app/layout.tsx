import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Ubuntu_Mono } from "next/font/google";
import { DM_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Annoucement from "./components/Annoucement";

// const inter = Inter({ subsets: ["latin"] });
// const ubuntu_mono = Ubuntu_Mono({ weight: "400", subsets: ["latin"] });
const dm_mono = DM_Mono({ weight: "300", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OMOCAT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dm_mono.className}>
        <Annoucement />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
