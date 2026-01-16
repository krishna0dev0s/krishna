/**
 * LIQUID GLASS EFFECTS - IMPORT REFERENCE
 * 
 * All available imports and their locations
 */

// ============================================
// MAIN COMPONENTS
// ============================================

// Basic imports from the main component file
import {
  LiquidGlassCard,      // Main card component
  LiquidGlassButton,    // Glass button component
  LiquidGlassContainer, // Full container component
} from '@/components/ui/liquid-glass';

// Example usage:
// <LiquidGlassCard effectType="glow" glowIntensity="md">
//   Content here
// </LiquidGlassCard>

// ============================================
// INTEGRATION EXAMPLES
// ============================================

// Import pre-made example components
import {
  HeroWithLiquidGlass,
  FeatureCardsGrid,
  TestimonialCards,
  CTASection,
  StatsSection,
  ModalDialog,
  ProductShowcase,
  NavigationMenu,
  DraggableWidgets,
  InfoCardHover,
  examples,
} from '@/components/liquid-glass-examples';

// Example usage:
// <HeroWithLiquidGlass />
// <FeatureCardsGrid />
// <TestimonialCards />
// etc.

// ============================================
// DEMO PAGE
// ============================================

// Interactive showcase page with 40+ examples
// Navigate to: /liquid-glass-demo
// File: app/liquid-glass-demo.jsx

// ============================================
// DOCUMENTATION
// ============================================

// Complete guides and references:
// - LIQUID_GLASS_GUIDE.md              ← Full documentation
// - LIQUID_GLASS_QUICK_REFERENCE.md   ← Quick start guide
// - LIQUID_GLASS_VISUAL_GUIDE.md      ← Visual examples
// - LIQUID_GLASS_IMPLEMENTATION.md    ← Setup guide

// ============================================
// PROP TYPES
// ============================================

/**
 * LiquidGlassCard Props
 */
interface LiquidGlassCardProps {
  children?: React.ReactNode;
  className?: string;
  
  // Effect styling
  effectType?: 'glow' | 'neon' | 'gradient' | 'liquid' | 'frost';
  glowIntensity?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  shadowIntensity?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  blurIntensity?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  
  // Features
  liquidEffect?: boolean;   // Enable morphing blobs
  borderGradient?: boolean; // Enable cursor-tracking border
  draggable?: boolean;      // Enable drag functionality
  animate?: boolean;        // Enable animations
  
  // Customization
  borderRadius?: string;
  style?: React.CSSProperties;
  ref?: React.Ref<HTMLDivElement>;
  
  // Standard HTML attributes
  [key: string]: any;
}

/**
 * LiquidGlassButton Props
 */
interface LiquidGlassButtonProps {
  children?: React.ReactNode;
  className?: string;
  
  // Styling
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: string;
  animate?: boolean;
  
  // Events
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  ref?: React.Ref<HTMLButtonElement>;
  
  // Standard button attributes
  [key: string]: any;
}

/**
 * LiquidGlassContainer Props
 */
interface LiquidGlassContainerProps {
  children?: React.ReactNode;
  className?: string;
  ref?: React.Ref<HTMLDivElement>;
  
  // Standard div attributes
  [key: string]: any;
}

// ============================================
// QUICK START SNIPPETS
// ============================================

/**
 * Basic Card
 */
// <LiquidGlassCard effectType="glow">
//   Content
// </LiquidGlassCard>

/**
 * Advanced Card with All Features
 */
// <LiquidGlassCard
//   effectType="neon"
//   glowIntensity="lg"
//   blurIntensity="lg"
//   liquidEffect={true}
//   borderGradient={true}
//   draggable={true}
//   animate={true}
//   className="p-8"
// >
//   Advanced card
// </LiquidGlassCard>

/**
 * Button
 */
// <LiquidGlassButton size="lg" onClick={handleClick}>
//   Click Me
// </LiquidGlassButton>

/**
 * Container
 */
// <LiquidGlassContainer className="p-12">
//   Container content
// </LiquidGlassContainer>

// ============================================
// CSS ANIMATIONS
// ============================================

// All animations defined in: /components/ui/liquid-glass.css

// Available animations:
// - blob-morph        (8-12s) ← Liquid blob morphing
// - glow-pulse        (3s)    ← Glow effect pulsing
// - neon-glow         (2s)    ← Neon border glow
// - gradient-shift    (6s)    ← Gradient background shift
// - liquid-wave       (4s)    ← Liquid effect animation
// - frost-shimmer     (3s)    ← Frost effect shimmer
// - liquid-shine      (3s)    ← Shine sweep effect
// - button-glow       (2s)    ← Button glow animation
// - neon-pulse        (3s)    ← Neon pulse effect
// - border-shift      (3s)    ← Border gradient shift
// - float-animation   (3s)    ← Floating effect
// - rainbow-shift     (8s)    ← Rainbow gradient shift

// ============================================
// EFFECT DEFINITIONS
// ============================================

// Glow Effect
// Background: rgba(255, 255, 255, 0.08)
// Border: 1px solid rgba(255, 255, 255, 0.2)
// Animation: Pulsing blue glow

// Neon Effect
// Background: rgba(0, 122, 255, 0.05)
// Border: 2px solid rgba(0, 122, 255, 0.4)
// Animation: Intense neon glow

// Gradient Effect
// Background: Shifting gradients
// Animation: Color gradient animation

// Liquid Effect
// Background: rgba(139, 92, 246, 0.08)
// Elements: 3 morphing blobs
// Animation: Blob morphing

// Frost Effect
// Background: rgba(255, 255, 255, 0.05)
// Border: 1px solid rgba(255, 255, 255, 0.15)
// Animation: Subtle shimmer

// ============================================
// UTILITY CLASSES (CSS)
// ============================================

// Animations
// .liquid-glass-glow       ← Enable glow animation
// .liquid-glass-neon       ← Enable neon animation
// .liquid-glass-gradient   ← Enable gradient animation
// .liquid-glass-liquid     ← Enable liquid animation
// .liquid-glass-frost      ← Enable frost animation

// Effects
// .liquid-glass-card       ← Base card styling
// .liquid-glass-button     ← Base button styling
// .liquid-glass-container  ← Base container styling
// .liquid-effect           ← Base liquid effect
// .liquid-blob             ← Blob element
// .liquid-shine            ← Shine effect
// .liquid-glass-interactive ← Interactive effects

// ============================================
// TAILWIND CLASSES
// ============================================

// Compatible with Tailwind utility classes:
// <LiquidGlassCard className="p-8 shadow-2xl rounded-2xl">

// Common combinations:
// - p-4, p-6, p-8, p-12           (Padding)
// - m-4, m-6, m-8                 (Margin)
// - rounded-lg, rounded-xl, rounded-2xl (Radius)
// - shadow-lg, shadow-xl, shadow-2xl    (Shadows)
// - hover:scale-105               (Hover effects)
// - transition-all, transition-transform (Transitions)
// - w-full, h-full                (Sizing)

// ============================================
// FILE STRUCTURE
// ============================================

// Root files:
// - LIQUID_GLASS_GUIDE.md              (Full documentation)
// - LIQUID_GLASS_QUICK_REFERENCE.md   (Quick guide)
// - LIQUID_GLASS_VISUAL_GUIDE.md      (Visual examples)
// - LIQUID_GLASS_IMPLEMENTATION.md    (Setup guide)
// - LIQUID_GLASS_IMPORTS.js           (This file)

// Component files:
// - /components/ui/liquid-glass.jsx       (Components)
// - /components/ui/liquid-glass.css       (Styles)
// - /components/liquid-glass-examples.jsx (10 examples)
// - /app/liquid-glass-demo.jsx            (40+ demo)

// ============================================
// TYPESCRIPT SUPPORT
// ============================================

// Components fully typed with TypeScript support
// All props have proper type definitions
// Ref support with React.forwardRef

// Example with TypeScript:
/*
import { LiquidGlassCard } from '@/components/ui/liquid-glass';

const MyComponent: React.FC = () => {
  return (
    <LiquidGlassCard 
      effectType="neon" 
      glowIntensity="lg"
      className="p-8"
    >
      <h2>Content</h2>
    </LiquidGlassCard>
  );
};

export default MyComponent;
*/

// ============================================
// COMMON PATTERNS
// ============================================

// Pattern 1: Hero Section
// <LiquidGlassContainer>
//   <h1>Title</h1>
//   <p>Subtitle</p>
//   <LiquidGlassButton>CTA</LiquidGlassButton>
// </LiquidGlassContainer>

// Pattern 2: Feature Grid
// <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//   {features.map(f => (
//     <LiquidGlassCard key={f.id} effectType="glow">
//       {/* content */}
//     </LiquidGlassCard>
//   ))}
// </div>

// Pattern 3: Modal
// <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
//   <LiquidGlassCard effectType="neon" className="p-8">
//     {/* modal content */}
//   </LiquidGlassCard>
// </div>

// Pattern 4: Dashboard Widget
// <LiquidGlassCard draggable={true} className="cursor-move">
//   {/* widget content */}
// </LiquidGlassCard>

// ============================================
// BROWSER SUPPORT
// ============================================

// Minimum versions:
// - Chrome: 76+
// - Firefox: 70+
// - Safari: 9+
// - Edge: 76+
// - Opera: 63+

// Features requiring support:
// - backdrop-filter (blur)
// - CSS animations
// - Mix-blend-mode
// - CSS gradients
// - CSS transforms

// ============================================
// PERFORMANCE TIPS
// ============================================

// Optimize with:
// 1. Use animate={false} when not needed
// 2. Limit liquidEffect to important cards
// 3. Use CSS animations (automatic GPU acceleration)
// 4. Batch multiple cards efficiently
// 5. Respect prefers-reduced-motion

// ============================================
// TROUBLESHOOTING
// ============================================

// Problem: Blur not visible
// Solution: Ensure backdrop-filter support; increase blurIntensity

// Problem: Colors look different
// Solution: Check background; transparency effects blend with backgrounds

// Problem: Animations laggy
// Solution: Reduce number of animated cards; disable liquidEffect

// Problem: Text not readable
// Solution: Use darker backgrounds; increase glowIntensity

// ============================================
// VERSION INFO
// ============================================

// Version: 1.0
// Last Updated: January 2025
// Status: Production Ready
// License: Included in project

// ============================================
// SUPPORT & RESOURCES
// ============================================

// Documentation:
// - See LIQUID_GLASS_GUIDE.md for comprehensive docs
// - See LIQUID_GLASS_QUICK_REFERENCE.md for quick help
// - See LIQUID_GLASS_VISUAL_GUIDE.md for visual examples

// Examples:
// - View /app/liquid-glass-demo.jsx for live examples
// - View /components/liquid-glass-examples.jsx for patterns

// Questions:
// - Check the quick reference first
// - Review relevant example in demo
// - Check CSS file for animation details

export {};
