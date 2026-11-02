import type { Metadata } from 'next';
import { CyberHustleSupport } from '@/components/sections/cyber-hustle';
import { alternates } from '@/i18n/config';
import { cyberHustle } from '@/lib/cyber-hustle';

const t = cyberHustle('en');

export const metadata: Metadata = {
  title: t.support.title,
  description: t.support.intro,
  alternates: alternates('en', '/cyber-hustle/support/'),
};

export default function Page() {
  return (
    <main className="flex flex-1 flex-col">
      <CyberHustleSupport locale="en" />
    </main>
  );
}
