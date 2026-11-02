import type { Metadata } from 'next';
import { Games } from '@/components/sections/games';
import { Hero } from '@/components/sections/hero';
import { alternates } from '@/i18n/config';

export const metadata: Metadata = {
  alternates: alternates('en'),
};

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero locale="en" />
      <Games locale="en" />
    </main>
  );
}
