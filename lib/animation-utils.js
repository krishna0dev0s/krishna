/**
 * Animation Utilities & Helpers
 * Provides reusable animation functions and utilities
 */

/**
 * Trigger animation on element
 */
export const triggerAnimation = (element, animationName, duration = 600) => {
  return new Promise((resolve) => {
    element.addEventListener(
      'animationend',
      () => {
        element.style.animation = '';
        resolve();
      },
      { once: true }
    );
    element.style.animation = `${animationName} ${duration}ms ease-in-out forwards`;
  });
};

/**
 * Add ripple effect on click
 */
export const addRippleEffect = (event) => {
  const button = event.currentTarget;
  const ripple = document.createElement('span');
  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;

  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = x + 'px';
  ripple.style.top = y + 'px';
  ripple.classList.add('ripple');
  button.appendChild(ripple);

  setTimeout(() => ripple.remove(), 600);
};

/**
 * Animate text character by character
 */
export const animateTextCharacters = (element, speed = 50) => {
  const text = element.textContent;
  element.textContent = '';
  let index = 0;

  const interval = setInterval(() => {
    if (index < text.length) {
      element.textContent += text[index];
      index++;
    } else {
      clearInterval(interval);
    }
  }, speed);
};

/**
 * Create staggered animation delays
 */
export const getStaggeredDelay = (index, baseDelay = 50) => {
  return index * baseDelay;
};

/**
 * Check if user prefers reduced motion
 */
export const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Throttle function for scroll/resize events
 */
export const throttle = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Intersection Observer helper
 */
export const observeElement = (element, callback, options = {}) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        callback(entry.isIntersecting, entry);
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px',
      ...options,
    }
  );

  observer.observe(element);
  return observer;
};

/**
 * Easing functions for custom animations
 */
export const easing = {
  ease: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
  easeIn: 'cubic-bezier(0.42, 0, 1, 1)',
  easeOut: 'cubic-bezier(0, 0, 0.58, 1)',
  easeInOut: 'cubic-bezier(0.42, 0, 0.58, 1)',
  easeInCubic: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
  easeOutCubic: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  easeInOutCubic: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  easeInQuad: 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
  easeOutQuad: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  easeInOutQuad: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
  elasticOut: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  bounceOut: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
};

/**
 * Animation timing presets
 */
export const animationTimings = {
  fast: 200,
  normal: 400,
  slow: 600,
  verySlow: 1000,
};

/**
 * Delay presets for staggered animations
 */
export const delayPresets = {
  small: 50,
  medium: 100,
  large: 150,
};
