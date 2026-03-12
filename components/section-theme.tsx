'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const themes: Record<string, { primary: string; primaryForeground: string; ring: string }> = {
  images: {
    primary: 'hsl(199, 89%, 48%)',
    primaryForeground: 'hsl(0, 0%, 100%)',
    ring: 'hsl(199, 89%, 48%)',
  },
  templates: {
    primary: 'hsl(262, 83%, 58%)',
    primaryForeground: 'hsl(0, 0%, 100%)',
    ring: 'hsl(262, 83%, 58%)',
  },
};

const darkThemes: Record<string, { primary: string; primaryForeground: string; ring: string }> = {
  images: {
    primary: 'hsl(199, 100%, 68%)',
    primaryForeground: 'hsl(199, 80%, 10%)',
    ring: 'hsl(199, 100%, 68%)',
  },
  templates: {
    primary: 'hsl(262, 100%, 78%)',
    primaryForeground: 'hsl(262, 80%, 10%)',
    ring: 'hsl(262, 100%, 78%)',
  },
};

function getSection(pathname: string): string | null {
  const segment = pathname.split('/').filter(Boolean)[0];
  if (segment && segment in themes) return segment;
  return null;
}

export function SectionTheme() {
  const pathname = usePathname();

  useEffect(() => {
    const section = getSection(pathname);
    const root = document.documentElement;

    if (!section) {
      root.style.removeProperty('--color-fd-primary');
      root.style.removeProperty('--color-fd-primary-foreground');
      root.style.removeProperty('--color-fd-ring');
      return;
    }

    const isDark = root.classList.contains('dark');
    const theme = isDark ? darkThemes[section] : themes[section];

    root.style.setProperty('--color-fd-primary', theme.primary);
    root.style.setProperty('--color-fd-primary-foreground', theme.primaryForeground);
    root.style.setProperty('--color-fd-ring', theme.ring);

    const observer = new MutationObserver(() => {
      const nowDark = root.classList.contains('dark');
      const t = nowDark ? darkThemes[section] : themes[section];
      root.style.setProperty('--color-fd-primary', t.primary);
      root.style.setProperty('--color-fd-primary-foreground', t.primaryForeground);
      root.style.setProperty('--color-fd-ring', t.ring);
    });

    observer.observe(root, { attributes: true, attributeFilter: ['class'] });

    return () => {
      observer.disconnect();
      root.style.removeProperty('--color-fd-primary');
      root.style.removeProperty('--color-fd-primary-foreground');
      root.style.removeProperty('--color-fd-ring');
    };
  }, [pathname]);

  return null;
}
