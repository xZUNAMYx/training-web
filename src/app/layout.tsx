import type { Metadata } from "next";
import { inter } from "@/config/font";

import "./globals.css";

export const metadata: Metadata = {
  title: "Training Corp | Inicio",
  description: "aacademia de inglés Training Corp",
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
