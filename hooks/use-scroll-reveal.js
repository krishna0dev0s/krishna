'use client';

import { useEffect, useRef } from 'react';

/**
 * Hook for scroll-triggered animations
 * Adds 'visible' class when element enters viewport
 * Supports various reveal patterns (fade, slide-left, slide-right)
 */
export const useScrollReveal = (options = {}) => {
  const ref = useRef(null);
  const {
    threshold = 0.1,
    rootMargin = '0px',
    pattern = 'fade' // fade, slide-left, slide-right, scale
  } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Add initial class based on pattern
    element.classList.add(`scroll-reveal`, `scroll-reveal-${pattern}`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, pattern]);

  return ref;
};

/**
 * Hook for parallax scroll effects
 * Moves element based on scroll position
 */
export const useParallax = (speed = 0.5) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const yOffset = scrollPosition * speed;
      element.style.transform = `translateY(${yOffset}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return ref;
};

/**
 * Hook for scroll-based animation progress
 * Returns progress value (0-1) as user scrolls through element
 */
export const useScrollProgress = () => {
  const ref = useRef(null);
  const [progress, setProgress] = React.useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const elementHeight = rect.height;
      const elementTop = rect.top;
      const windowHeight = window.innerHeight;

      // Calculate progress: 0 when element is below viewport, 1 when above
      const progress = Math.max(
        0,
        Math.min(1, (windowHeight - elementTop) / (windowHeight + elementHeight))
      );

      setProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { ref, progress };
};
