
import { Geist, Geist_Mono, JetBrains_Mono, Outfit, Inter } from 'next/font/google';

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});

export {
  geistSans,
  geistMono,
  jetBrainsMono,
  outfit,
  inter
};