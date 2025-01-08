import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mahdi Karimi",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="max-w-screen-sm mx-auto px-4 md:px-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
