# Liquid Glass Effects Guide

## Overview

A comprehensive liquid glass effects system with modern glassmorphism, fluid animations, and interactive elements. Includes multiple effect types, intensity levels, and customizable components.

## Components

### 1. LiquidGlassCard

The main component for creating glass-morphic cards with various liquid effects.

#### Props

```typescript
interface LiquidGlassCardProps {
  children: React.ReactNode;
  className?: string;
  effectType?: 'glow' | 'neon' | 'gradient' | 'liquid' | 'frost';
  glowIntensity?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  shadowIntensity?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  blurIntensity?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  borderRadius?: string;
  draggable?: boolean;
  animate?: boolean;
  liquidEffect?: boolean;
  borderGradient?: boolean;
  style?: React.CSSProperties;
}
```

#### Effect Types

- **glow**: Soft blue glowing border with pulsing animation
  ```jsx
  <LiquidGlassCard effectType="glow" glowIntensity="lg">
    Content
  </LiquidGlassCard>
  ```

- **neon**: Vibrant neon blue border with intense glow
  ```jsx
  <LiquidGlassCard effectType="neon">
    Content
  </LiquidGlassCard>
  ```

- **gradient**: Shifting color gradients in background
  ```jsx
  <LiquidGlassCard effectType="gradient">
    Content
  </LiquidGlassCard>
  ```

- **liquid**: Morphing blobs with fluid animations
  ```jsx
  <LiquidGlassCard effectType="liquid" liquidEffect={true}>
    Content
  </LiquidGlassCard>
  ```

- **frost**: Frosted glass with subtle shimmer
  ```jsx
  <LiquidGlassCard effectType="frost">
    Content
  </LiquidGlassCard>
  ```

#### Examples

**Basic Usage:**
```jsx
import { LiquidGlassCard } from '@/components/ui/liquid-glass';

export default function MyComponent() {
  return (
    <LiquidGlassCard effectType="glow" glowIntensity="md">
      <h2>Welcome</h2>
      <p>This is a liquid glass card</p>
    </LiquidGlassCard>
  );
}
```

**With All Features:**
```jsx
<LiquidGlassCard
  effectType="neon"
  liquidEffect={true}
  borderGradient={true}
  glowIntensity="lg"
  blurIntensity="lg"
  draggable={true}
  animate={true}
  className="p-8 min-h-64"
>
  <h2>Advanced Card</h2>
  <p>Draggable with liquid blobs and interactive border</p>
</LiquidGlassCard>
```

### 2. LiquidGlassButton

Glass-morphic button with glow animation and hover effects.

#### Props

```typescript
interface LiquidGlassButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animate?: boolean;
  onClick?: () => void;
}
```

#### Size Variations

- **sm**: Small button (px-3 py-1 text-sm)
- **md**: Medium button (px-4 py-2 text-base) - default
- **lg**: Large button (px-6 py-3 text-lg)
- **xl**: Extra large button (px-8 py-4 text-xl)

#### Examples

```jsx
import { LiquidGlassButton } from '@/components/ui/liquid-glass';

// Default
<LiquidGlassButton onClick={handleClick}>
  Click Me
</LiquidGlassButton>

// Different sizes
<LiquidGlassButton size="lg">
  Large Button
</LiquidGlassButton>

// With custom styling
<LiquidGlassButton size="md" className="bg-red-500/20">
  Delete Action
</LiquidGlassButton>
```

### 3. LiquidGlassContainer

Full-width or large section with liquid glass effects and animated background blobs.

#### Props

```typescript
interface LiquidGlassContainerProps {
  children: React.ReactNode;
  className?: string;
}
```

#### Examples

```jsx
import { LiquidGlassContainer } from '@/components/ui/liquid-glass';

<LiquidGlassContainer className="p-12 my-8">
  <h2>Section Title</h2>
  <p>Content with animated background blobs</p>
</LiquidGlassContainer>
```

## Intensity Levels

### Glow Intensity

Controls the brightness of the glowing effect:

- **xs**: `0 0 8px rgba(59, 130, 246, 0.3)`
- **sm**: `0 0 16px rgba(59, 130, 246, 0.4)`
- **md**: `0 0 24px rgba(59, 130, 246, 0.5)` (default)
- **lg**: `0 0 32px rgba(59, 130, 246, 0.6)`
- **xl**: `0 0 40px rgba(59, 130, 246, 0.7)`

### Blur Intensity

Controls the backdrop blur amount:

- **xs**: `4px`
- **sm**: `8px`
- **md**: `12px` (default)
- **lg**: `16px`
- **xl**: `20px`

### Shadow Intensity

Controls the drop shadow depth:

- **xs**: `0 4px 6px rgba(0, 0, 0, 0.07)`
- **sm**: `0 10px 15px rgba(0, 0, 0, 0.1)`
- **md**: `0 20px 25px rgba(0, 0, 0, 0.15)` (default)
- **lg**: `0 25px 50px rgba(0, 0, 0, 0.2)`
- **xl**: `0 25px 50px rgba(0, 0, 0, 0.25)`

## CSS Animations

The component uses several CSS animations defined in `liquid-glass.css`:

### Liquid Blob Animation
Creates morphing blob shapes:
```css
animation: blob-morph 8s infinite ease-in-out;
```

### Effect Animations
- **glow-pulse**: Pulsing glow effect (3s)
- **neon-glow**: Neon border glow (2s)
- **gradient-shift**: Gradient background shift (6s)
- **liquid-wave**: Liquid effect wave (4s)
- **frost-shimmer**: Frost effect shimmer (3s)
- **liquid-shine**: Shine sweep effect (3s)

### Disabling Animations

For users who prefer reduced motion:
```css
@media (prefers-reduced-motion: reduce) {
  /* All animations disabled */
}
```

## Interactive Features

### Draggable Cards

Enable dragging with the `draggable` prop:

```jsx
<LiquidGlassCard draggable={true} className="cursor-move">
  Drag me around!
</LiquidGlassCard>
```

### Interactive Border Gradient

The `borderGradient` prop makes the border gradient follow your cursor:

```jsx
<LiquidGlassCard borderGradient={true}>
  Hover to see the gradient follow your mouse
</LiquidGlassCard>
```

### Liquid Blobs

Enable morphing blob background:

```jsx
<LiquidGlassCard liquidEffect={true}>
  Content with animated blobs
</LiquidGlassCard>
```

## Styling & Customization

### Custom Colors

Override effect colors using inline styles:

```jsx
<LiquidGlassCard
  style={{
    background: 'rgba(139, 92, 246, 0.1)',
    borderColor: 'rgba(139, 92, 246, 0.4)',
  }}
>
  Custom colored card
</LiquidGlassCard>
```

### Custom Classes

Extend styling with Tailwind classes:

```jsx
<LiquidGlassCard className="p-8 shadow-2xl">
  <h2 className="text-2xl font-bold">Custom styled</h2>
</LiquidGlassCard>
```

### Border Radius

Control rounded corners:

```jsx
<LiquidGlassCard borderRadius="24px">
  More rounded card
</LiquidGlassCard>

<LiquidGlassCard borderRadius="0px">
  Sharp corners
</LiquidGlassCard>
```

## Best Practices

1. **Use appropriate blur intensity**: Higher blur works better on solid backgrounds
2. **Pair effects with content**: Neon effect works great for interactive elements
3. **Consider performance**: Liquid effects are animation-heavy; use sparingly on large pages
4. **Respect user preferences**: Animations disable automatically for `prefers-reduced-motion`
5. **Color contrast**: Ensure text is readable on glass backgrounds
6. **Backdrop complexity**: More complex backgrounds may reduce blur visibility

## Performance Tips

- Use `liquidEffect` only when needed (adds 3 blob elements + animations)
- Limit number of animated cards on a single page
- Use `animate={false}` for non-interactive cards
- Consider using `borderGradient={false}` for many cards

## Browser Support

- ✅ Chrome/Edge 76+
- ✅ Firefox 70+
- ✅ Safari 9+ (with -webkit prefix)
- ⚠️ Requires `backdrop-filter` support
- ⚠️ CSS animations may not work in older browsers

## Accessibility

- All animations respect `prefers-reduced-motion` media query
- Text is white by default for contrast
- Components are keyboard accessible
- Draggable components use mouse events (consider adding keyboard support for production)

## Examples

See `app/liquid-glass-demo.jsx` for a complete interactive showcase of all features.

To view the demo:
```bash
# Navigate to: http://localhost:3000/liquid-glass-demo
```

## Troubleshooting

**Blur effect not visible:**
- Ensure backdrop-filter is supported in your browser
- Check if the background behind the component is visible
- Try increasing `blurIntensity`

**Colors look different:**
- The components use semi-transparent colors that blend with backgrounds
- Try adjusting the background color of the parent container

**Animations not smooth:**
- Check browser performance
- Reduce number of liquid effects on the page
- Use `animate={false}` if animations aren't needed

**Text not readable:**
- Increase `glowIntensity` or adjust text color
- Use darker backgrounds behind cards
- Add text shadow for better contrast
