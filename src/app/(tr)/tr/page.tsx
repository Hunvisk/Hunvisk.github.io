import type { Metadata } from 'next';
import { Hero } from '@/components/sections/hero';
import { alternates } from '@/i18n/config';

export const metadata: Metadata = {
  alternates: alternates('tr'),
};

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero locale="tr" />
    </main>
  );
}
