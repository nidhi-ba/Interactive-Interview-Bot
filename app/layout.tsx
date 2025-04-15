import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import React from "react"

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PrepWise",
  description: "An AI -Powered platform for mock interview",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">

      <body className={`${monaSans.className} antialiasedm pattern`}>
      
        {children}
        {/* <Toaster/> */}
      
      </body>
    </html>
  );
}
