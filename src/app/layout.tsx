import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "../style/globals.css";

const latoSans = Lato({
  weight: ["400", "700", "900"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
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
    <html lang="en" className={`${latoSans.className} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
