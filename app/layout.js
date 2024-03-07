import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Marques Webster | Resume & Portfolio",
  description:
    "This portfolio is a gateway into the design and development abilities that drive my work.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`relative ${inter.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
