import type { Metadata } from "next";
import { inter } from "@/config/font";

import "./globals.css";

export const metadata: Metadata = {
  title: "Teslo | Shop",
  description: "Web de Teslo Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={ inter.className}
      >

        {children}
        
      </body>
    </html>
  );
}
