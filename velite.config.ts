import rehypePrettyCode from 'rehype-pretty-code';
import { defineCollection, defineConfig, s } from 'velite';

type ProjectLocale = 'en' | 'tr';

const projects = defineCollection({
  name: 'Project',
  pattern: 'projects/{en,tr}/**/*.mdx',
  schema: s
    .object({
      title: s.string().max(99),
      // Aynı slug iki dilde de bulunur; benzersizlik dil bazında prepare'de kontrol edilir
      slug: s.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Invalid slug'),
      summary: s.string().max(200),
      category: s.enum(['devops', 'backend', 'game', 'tooling']),
      tech: s.array(s.string()),
      featured: s.boolean().default(false),
      cover: s.string().optional(),
      demoVideo: s.string().optional(),
      repo: s.string().url().optional(),
      date: s.isodate(),
      path: s.path(),
      body: s.mdx(),
    })
    // Dil klasör adından okunur: projects/en/... veya projects/tr/...
    .transform(({ path, ...data }) => ({
      ...data,
      locale: path.split('/')[1] as ProjectLocale,
    })),
});

export default defineConfig({
  root: 'content',
  output: {
    data: '.velite',
    assets: 'public/static',
    base: '/static/',
    name: '[name]-[hash:6].[ext]',
    clean: true,
  },
  collections: { projects },
  mdx: {
    rehypePlugins: [[rehypePrettyCode, { theme: 'github-dark-dimmed' }]],
  },
  prepare: ({ projects }) => {
    const seen = new Set<string>();
    for (const { locale, slug } of projects) {
      const key = `${locale}/${slug}`;
      if (seen.has(key)) throw new Error(`Duplicate project slug: ${key}`);
      seen.add(key);
    }
  },
});
