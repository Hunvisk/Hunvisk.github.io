import type { Metadata } from 'next';
import { RootDocument } from '@/components/root-document';
import { siteUrl } from '@/i18n/config';
import { getDictionary } from '@/i18n';
import '../../globals.css';

const t = getDictionary('tr');

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: t.meta.title, template: `%s — ${t.meta.siteName}` },
  description: t.meta.description,
  openGraph: { siteName: t.meta.siteName, locale: 'tr_TR', type: 'website' },
};

export default function TurkishLayout({ children }: LayoutProps<'/tr'>) {
  return <RootDocument locale="tr">{children}</RootDocument>;
}
