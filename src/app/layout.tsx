import Navbar from "./components/Navbar";
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
      <body className={mont.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
