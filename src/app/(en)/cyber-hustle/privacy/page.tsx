import type { Metadata } from 'next';
import { CyberHustlePrivacy } from '@/components/sections/cyber-hustle';
import { alternates } from '@/i18n/config';
import { cyberHustle } from '@/lib/cyber-hustle';

const t = cyberHustle('en');

export const metadata: Metadata = {
  title: t.privacy.title,
  description: t.privacy.intro,
  alternates: alternates('en', '/cyber-hustle/privacy/'),
};

export default function Page() {
  return (
    <main className="flex flex-1 flex-col">
      <CyberHustlePrivacy locale="en" />
    </main>
  );
}
