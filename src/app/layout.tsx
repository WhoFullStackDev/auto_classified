import type { Metadata } from "next";
import localFont from "next/font/local";
import "../style/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Head from "next/head";

const calibreSans = localFont({
  display: "swap",
  preload: true,
  src: [
    {
      path: "../../public/Fonts/Calibre-Black.otf",
      style: "black",
      weight: "900",
    },
    {
      path: "../../public/Fonts/Calibre-Bold.otf",
      style: "bold",
      weight: "700",
    },
    {
      path: "../../public/Fonts/Calibre-Medium.otf",
      style: "medium",
      weight: "500",
    },
    {
      path: "../../public/Fonts/Calibre-Regular.otf",
      style: "regular",
      weight: "400",
    },
  ],
  variable: "--font-calibre",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${calibreSans.variable} antialiased`}>
      <Head>
        <link rel="preload" as="style" href="/style/globals.css" />
      </Head>
      <body className="min-h-dvh bg-surface_page overflow-x-hidden ">
        <Navbar />
        <div className="min-h-dvh">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
