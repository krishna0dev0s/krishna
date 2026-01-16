'use client';

import React, { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
  variant?: 'fade' | 'slide' | 'morph';
  delay?: number;
}

/**
 * PageTransition Component
 * Wraps page content with entrance animation
 * Supports multiple animation variants
 */
export const PageTransition = ({
  children,
  variant = 'fade',
  delay = 0,
}: PageTransitionProps) => {
  const animationClass = `page-${variant}-in`;

  return (
    <div
      className={animationClass}
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

/**
 * Staggered children component
 * Animates multiple children with staggered delays
 */
export const StaggeredChildren = ({
  children,
  staggerDelay = 50,
}: {
  children: ReactNode[];
  staggerDelay?: number;
}) => {
  return (
    <>
      {React.Children.map(children, (child, index) => (
        <PageTransition key={index} delay={index * staggerDelay}>
          {child}
        </PageTransition>
      ))}
    </>
  );
};

export default PageTransition;
