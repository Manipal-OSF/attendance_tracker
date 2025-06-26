import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Vortex } from "../components/ui/vortex";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Manipal OSF Attendance Tracker",
  description: "Created By Manipal OSF Team",
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
        <div className="fixed inset-0 -z-10">
          <Vortex
            backgroundColor="#000000"
            baseHue={15}
            particleCount={500}
            rangeSpeed={2}
          />
        </div>
        {children}
      </body>
    </html>
  );
}
