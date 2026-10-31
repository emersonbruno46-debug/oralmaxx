import { useEffect } from 'react';
import Lenis from 'lenis';

/** Rolagem suave (Lenis) + âncoras internas com offset da navbar. */
export function useSmoothScroll() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const lenis = reduce ? null : new Lenis({ duration: 1.15, smoothWheel: true });

    let raf = 0;
    const loop = (t: number) => {
      lenis?.raf(t);
      raf = requestAnimationFrame(loop);
    };
    if (lenis) raf = requestAnimationFrame(loop);

    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!a) return;
      const hash = a.getAttribute('href') ?? '';
      const isTop = hash === '#inicio' || hash === '#hero';
      const target = isTop ? document.body : document.querySelector<HTMLElement>(hash);
      if (!target) return;
      e.preventDefault();
      if (lenis) {
        lenis.scrollTo(isTop ? 0 : target, { offset: isTop ? 0 : -64 });
      } else {
        target.scrollIntoView({ behavior: 'auto', block: 'start' });
      }
    };
    document.addEventListener('click', onClick);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener('click', onClick);
      lenis?.destroy();
    };
  }, []);
}
