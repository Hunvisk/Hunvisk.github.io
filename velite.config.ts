import rehypePrettyCode from 'rehype-pretty-code';
import { defineCollection, defineConfig, s } from 'velite';

const projects = defineCollection({
  name: 'Project',
  pattern: 'projects/**/*.mdx',
  schema: s.object({
    title: s.string().max(99),
    slug: s.slug('projects'),
    summary: s.string().max(200),
    category: s.enum(['devops', 'backend', 'game', 'tooling']),
    tech: s.array(s.string()),
    featured: s.boolean().default(false),
    cover: s.string().optional(),
    demoVideo: s.string().optional(),
    repo: s.string().url().optional(),
    date: s.isodate(),
    body: s.mdx(),
  }),
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
});
