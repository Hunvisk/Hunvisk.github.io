import { Geist, Geist_Mono } from 'next/font/google';

// latin-ext: Türkçe karakterler (ğ, ş, ı, İ…)
export const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
});

// Sadece küçük etiketlerde kullanılıyor; preload kapalı, böylece LCP metnini (Geist) beklemiyor
export const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  preload: false,
});

export const fontVariables = `${geistSans.variable} ${geistMono.variable}`;
