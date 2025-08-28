import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

import localFont from 'next/font/local';

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ['latin'],
  weight: ['400','500','600','700']
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const horizon = localFont({
  src: './fonts/horizon.otf', // relative to this file
  display: 'swap',
  variable: '--font-horizon',
});

const horizon_outlined = localFont({
  src: './fonts/horizon_outlined.otf', // relative to this file
  display: 'swap',
  variable: '--font-horizon-outlined',
});

export const metadata: Metadata = {
  title: "Kim Magallanes",
  description: "Front-end Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${horizon_outlined.variable} ${horizon.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
