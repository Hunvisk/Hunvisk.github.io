const isDev = process.argv.includes('dev');
const isBuild = process.argv.includes('build');

// Velite'i Next.js ile birlikte çalıştır (dev'de watch, build'de temiz derleme)
if (!process.env.VELITE_STARTED && (isDev || isBuild)) {
  process.env.VELITE_STARTED = '1';
  const { build } = await import('velite');
  await build({ watch: isDev, clean: !isDev });
}

// Kullanıcı sitesi (hunvisk.github.io) olduğu için boş.
// Proje sitesine geçilirse '/repo-adi' yapılır.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Saf statik çıktı (out/ klasörü)
  trailingSlash: true, // GitHub Pages'te /sayfa/index.html çözümlemesi için
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true, // Statik export'ta next/image optimizasyonu çalışmaz
  },
  turbopack: {
    rules: {
      '*.css': {
        loaders: ['@tailwindcss/turbopack'],
        as: '*.css',
      },
    },
  },
};

export default nextConfig;
