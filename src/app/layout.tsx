import { Inter } from "next/font/google";
import "/src/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

import Navbar from "@/src/components/blocks/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Marques Webster | Frontend Software Engineer and Designer",
  description:
    "This portfolio is a gateway into the design and development abilities that drive my work.",
  metadataBase: new URL("https://mqwebster.com"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Oswald:wght@200..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`relative ${inter.className}`}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
