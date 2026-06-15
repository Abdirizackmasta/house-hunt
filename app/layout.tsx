import type { Metadata } from "next";
import "./globals.css";
import { Montserrat, Geist_Mono } from "next/font/google";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "House Hunt: Find Your Dream Home",
  description:
    "Housing, real estate, property listings, home search, luxury living",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col bg-gray-100">
        
        
        <Nav />
        <main className="flex-1">{children}</main>

        <div id="footer-root" />
        <Footer />
      </body>
    </html>
  );
}   