import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {Annie_Use_Your_Telescope} from "next/font/google";
import Link from "next/link";



const annie = Annie_Use_Your_Telescope({
  subsets: ["latin"],
  weight: "400"
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
            title: "Hasini Duggirala",
            description: "Portfolio",
          };
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
         <header className="flex items-center justify-between px-10 py-4 border-b border-red-800">
          <h1 
          className="text-xl font-bold text-red-700">
          <Link href= "/" className="hover:text-red-900 transition">
           Hasini Duggirala
    </Link>
  </h1>
          <div className="flex gap-8 px-6 py-2 border border-red-800 rounded-full text-red-800">
            <Link href="/about" className="hover:text-red-800 transition">
              About
            </Link>

            <Link href="/projects" className="hover:text-red-800 transition">
              Projects
            </Link>

            <Link href="/experience" className="hover:text-red-800 transition">
              Experience
            </Link>

            <Link href="/contact" className="hover:text-red-800 transition">
              Contact
            </Link>

          </div>
        </header>

        {children}
        <footer className="mt-16 border-t border-rose-700 px-12 py-4">
    <div className="flex items-center justify-between text-sm text-rose-900">
      <p>built by Hasini Duggirala</p>

      
    </div>
  </footer>
      </body>
    </html>
  
  );
}
