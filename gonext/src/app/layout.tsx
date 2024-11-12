import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navigation } from "./components/Navigation";
import { ClerkProvider } from "@clerk/nextjs";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Go next",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <header className="bg-slate-950 text-white text-center">
            {/* <h1>GO NEXT</h1> */}
            <Navigation />
          </header>
          {children}
          <footer className="py-6 bg-blue-600 text-white text-center">
            <p>
              &copy; {new Date().getFullYear()} Go next. All rights reserved.
            </p>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
