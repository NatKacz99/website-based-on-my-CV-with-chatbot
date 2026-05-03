import type { ReactNode } from "react";
import {Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
})

export const metadata = {
  title: "Natalia Kaczyńska – Python & AI Developer",
  description:
    "Portfolio and career site for Natalia Kaczyńska, Python & AI developer.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}

