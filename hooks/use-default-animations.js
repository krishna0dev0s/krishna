'use client';

import { useEffect } from 'react';

/**
 * Default Animation Initializer
 * Automatically applies scroll-reveal animations to sections
 * and handles animation setup on page load
 */
export const useDefaultAnimations = () => {
  useEffect(() => {
    // Initialize scroll reveal for elements with scroll-reveal class
    const initScrollReveal = () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      if (prefersReducedMotion) return; // Skip animations for accessibility

      const revealElements = document.querySelectorAll('[class*="scroll-reveal"]');

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px',
        }
      );

      revealElements.forEach((element) => {
        observer.observe(element);
      });

      return () => observer.disconnect();
    };

    // Initialize parallax effects
    const initParallax = () => {
      const parallaxElements = document.querySelectorAll('[class*="parallax"]');
      
      if (parallaxElements.length === 0) return;

      const handleScroll = () => {
        parallaxElements.forEach((element) => {
          const scrollPosition = window.scrollY;
          const elementOffset = element.getBoundingClientRect().top;
          const speed = parseFloat(element.dataset.parallaxSpeed || 0.5);
          
          if (elementOffset < window.innerHeight) {
            element.style.transform = `translateY(${scrollPosition * speed}px)`;
          }
        });
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    };

    // Initialize ripple effects for buttons
    const initRippleEffects = () => {
      const buttons = document.querySelectorAll('button, [role="button"]');

      buttons.forEach((button) => {
        button.addEventListener('click', (event) => {
          const ripple = document.createElement('span');
          const rect = button.getBoundingClientRect();
          const size = Math.max(rect.width, rect.height);
          const x = event.clientX - rect.left - size / 2;
          const y = event.clientY - rect.top - size / 2;

          ripple.style.width = ripple.style.height = size + 'px';
          ripple.style.left = x + 'px';
          ripple.style.top = y + 'px';
          ripple.classList.add('ripple-effect');
          button.appendChild(ripple);

          setTimeout(() => ripple.remove(), 600);
        });
      });
    };

    // Run all initializers
    initScrollReveal();
    initParallax();
    initRippleEffects();

    // Trigger visibility check on resize
    window.addEventListener('resize', () => {
      initScrollReveal();
    });
  }, []);
};

export default useDefaultAnimations;
