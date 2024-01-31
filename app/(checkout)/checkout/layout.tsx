import React from "react";
import "../../globals.css";
import type { Metadata } from "next";
import { DM_Mono } from "next/font/google";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "OMOCAT",
};

const inter = Inter({ subsets: ["latin"] });
// const dm_mono = DM_Mono({ weight: "300", subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
