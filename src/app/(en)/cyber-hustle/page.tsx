import type { Metadata } from 'next';
import { CyberHustleOverview } from '@/components/sections/cyber-hustle';
import { alternates } from '@/i18n/config';
import { cyberHustle } from '@/lib/cyber-hustle';

const t = cyberHustle('en');

export const metadata: Metadata = {
  title: t.title,
  description: t.description,
  alternates: alternates('en', '/cyber-hustle/'),
};

export default function Page() {
  return (
    <main className="flex flex-1 flex-col">
      <CyberHustleOverview locale="en" />
    </main>
  );
}
