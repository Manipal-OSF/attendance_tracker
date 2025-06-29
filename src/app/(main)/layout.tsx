import { Vortex } from "../../components/ui/vortex";
import Navbar from "../../components/layouts/Navbar";
import BottomBlur from "../../components/layouts/BottomBlur";
import type { Viewport } from "next";

export const viewport: Viewport = {
  themeColor: '#0D0C0C',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
}

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen">
      <Navbar />

      <div className="fixed inset-0 -z-10">
        <Vortex
          baseHue={15}
          particleCount={500}
          rangeSpeed={2}
        />
      </div>

      <main>
        {children}
      </main>
      
      <BottomBlur />
    </div>
  );
}