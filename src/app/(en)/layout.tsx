import type { Metadata } from 'next';
import { RootDocument } from '@/components/root-document';
import { siteUrl } from '@/i18n/config';
import { getDictionary } from '@/i18n';
import '../globals.css';

const t = getDictionary('en');

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: t.meta.title, template: `%s — ${t.meta.siteName}` },
  description: t.meta.description,
  openGraph: { siteName: t.meta.siteName, locale: 'en_US', type: 'website' },
};

export default function EnglishLayout({ children }: LayoutProps<'/'>) {
  return <RootDocument locale="en">{children}</RootDocument>;
}
