import { Barlow } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import { Toaster } from "sonner";
import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import SubNavbar from "@/components/Shared/Navbar/SubNavbar";

const fontMono = Barlow({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "400",
});
export const metadata: Metadata = {
  title: "Hadiah",
  // description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${fontMono.className} bg-[#F5F5F5]`}>
        <Navbar />
        <SubNavbar />
        {children}
        <Footer />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
