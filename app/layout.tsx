import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "React Conference",
  description: "React Conference by Lemonhibe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="flex flex-col min-h-[calc(100vh-100px)] overflow-hidden">
          <div className="grow">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
