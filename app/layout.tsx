import type { Metadata } from "next";
import { Inter } from "next/font/google";
//import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "elRastro",
  description: "Generated for fun",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
        </body>
    </html>
  );
}
