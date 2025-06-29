import "./globals.css";
import type { Metadata } from "next";
import { geistSans, geistMono, jetBrainsMono, outfit, inter } from './fonts';

export const metadata: Metadata = {
  title: "Manipal OSF | Attendance Tracker",
  description: "A seamless and modern attendance tracker built by the Manipal OSF team.",
  metadataBase: new URL('https://attendance.manipal-osf.in'), // Use NODE_ENV to set this dynamically in production
  openGraph: {
    title: "Manipal OSF Attendance Tracker",
    description: "Track and manage your attendance easily with the OSF tracker platform.",
    url: "https://attendance.manipal-osf.in", // Use NODE_ENV to set this dynamically in production
    locale: "en_IN",
    siteName: "Manipal OSF",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "Manipal OSF Attendance Tracker" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manipal OSF | Attendance Tracker",
    description: "Built for Manipal students by the OSF team.",
    images: ["/logo.png"],
    creator: "@manipal_osf",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${jetBrainsMono.variable} ${outfit.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}