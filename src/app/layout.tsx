"use client";
import { Montserrat } from "next/font/google";
import "./styles/globals.css";

import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";

const mont = Montserrat({ subsets: ["latin"], variable: "--font-mont" });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-light dark:bg-dark ${mont.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
