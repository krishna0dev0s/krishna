'use client';

import { useDefaultAnimations } from '@/hooks/use-default-animations';

/**
 * Animation Provider Wrapper
 * Initializes all default animations on page load
 */
export function AnimationProvider({ children }) {
  useDefaultAnimations();
  return <>{children}</>;
}

export default AnimationProvider;
