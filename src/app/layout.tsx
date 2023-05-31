"use client";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import "./styles/globals.css";
import { Montserrat } from "next/font/google";

const mont = Montserrat({ subsets: ["latin"], variable: "--font-mont" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-light ${mont.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
