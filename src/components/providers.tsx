'use client';

import { LazyMotion, MotionConfig } from 'motion/react';

// domAnimation dinamik import edilir, böylece ilk JS paketine girmez
const loadFeatures = () => import('./motion-features').then((mod) => mod.default);

// strict: motion.* yerine m.* kullanılmasını zorlar, başlangıç paketi küçük kalır
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
