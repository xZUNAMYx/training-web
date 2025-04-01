'use client'

import { Footer } from "@/components/ui/footer/Footer";
import "./globals.css"

// import type { Metadata } from "next";
import { inter } from "@/config/font";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

// export const metadata: Metadata = {
//   title: "Training Corp | Inicio",
//   description: "Academia de inglés Training Corp",
// };

const ProtectedLevelContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/auth/login");
    }
  }, [user, router])

  return <>{children}</>;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <TopMenu /> */}
      
      <html lang="en">
        <body className={inter.className}>
          <AuthProvider>
            <ProtectedLevelContent>
              {children}
            </ProtectedLevelContent>
          </AuthProvider>
        </body>

        <Footer />
      </html>

      
    </>
    
  );
}
