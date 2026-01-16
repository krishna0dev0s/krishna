# Liquid Glass Effects - Quick Reference

## 🚀 Quick Start

### 1. Basic Card
```jsx
import { LiquidGlassCard } from '@/components/ui/liquid-glass';

<LiquidGlassCard effectType="glow">
  Your content here
</LiquidGlassCard>
```

### 2. Neon Card
```jsx
<LiquidGlassCard effectType="neon" glowIntensity="lg">
  Vibrant neon effect
</LiquidGlassCard>
```

### 3. With Liquid Blobs
```jsx
<LiquidGlassCard 
  effectType="liquid"
  liquidEffect={true}
>
  Animated morphing background
</LiquidGlassCard>
```

### 4. Interactive Button
```jsx
import { LiquidGlassButton } from '@/components/ui/liquid-glass';

<LiquidGlassButton size="lg" onClick={handleClick}>
  Click Me
</LiquidGlassButton>
```

### 5. Full Container
```jsx
import { LiquidGlassContainer } from '@/components/ui/liquid-glass';

<LiquidGlassContainer className="p-12">
  Section with animated background blobs
</LiquidGlassContainer>
```

## 📋 Effect Types Comparison

| Effect | Description | Best For |
|--------|-------------|----------|
| **glow** | Soft blue pulsing glow | General content, default choice |
| **neon** | Vibrant intense glow | Interactive elements, CTAs |
| **gradient** | Shifting color gradients | Dynamic sections, features |
| **liquid** | Morphing animated blobs | Modern, playful designs |
| **frost** | Frosted glass shimmer | Subtle, elegant designs |

## 🎨 Intensity Levels

### Glow Intensity
```jsx
<LiquidGlassCard glowIntensity="xs">    {/* Subtle glow */}
<LiquidGlassCard glowIntensity="sm">
<LiquidGlassCard glowIntensity="md">    {/* Default */}
<LiquidGlassCard glowIntensity="lg">
<LiquidGlassCard glowIntensity="xl">    {/* Intense glow */}
```

### Blur Intensity
```jsx
<LiquidGlassCard blurIntensity="xs">   {/* 4px blur */}
<LiquidGlassCard blurIntensity="sm">
<LiquidGlassCard blurIntensity="md">   {/* 12px blur - default */}
<LiquidGlassCard blurIntensity="lg">
<LiquidGlassCard blurIntensity="xl">   {/* 20px blur */}
```

### Button Sizes
```jsx
<LiquidGlassButton size="sm">Small</LiquidGlassButton>
<LiquidGlassButton size="md">Medium (default)</LiquidGlassButton>
<LiquidGlassButton size="lg">Large</LiquidGlassButton>
<LiquidGlassButton size="xl">Extra Large</LiquidGlassButton>
```

## ✨ Common Patterns

### Hero Section
```jsx
<LiquidGlassContainer className="py-24">
  <div className="text-center space-y-6">
    <h1 className="text-5xl font-bold">Welcome</h1>
    <p className="text-xl text-gray-300">Subtitle</p>
    <div className="flex gap-4 justify-center">
      <LiquidGlassButton size="lg">Primary</LiquidGlassButton>
      <LiquidGlassButton size="lg">Secondary</LiquidGlassButton>
    </div>
  </div>
</LiquidGlassContainer>
```

### Feature Grid
```jsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {features.map((feature) => (
    <LiquidGlassCard 
      key={feature.id}
      effectType="glow"
      className="p-6"
    >
      <h3>{feature.title}</h3>
      <p>{feature.description}</p>
    </LiquidGlassCard>
  ))}
</div>
```

### Call-to-Action
```jsx
<LiquidGlassCard 
  effectType="neon" 
  glowIntensity="lg"
  className="p-12 text-center"
>
  <h2>Ready to get started?</h2>
  <p>Join thousands of satisfied users</p>
  <LiquidGlassButton size="lg">Get Started Free</LiquidGlassButton>
</LiquidGlassCard>
```

### Modal/Dialog
```jsx
<div className="fixed inset-0 bg-black/50 flex items-center justify-center">
  <LiquidGlassCard 
    effectType="neon" 
    liquidEffect={true}
    className="w-full max-w-md p-8"
  >
    <h2>Confirm Action</h2>
    <p>Are you sure?</p>
    <div className="flex gap-4 mt-6">
      <LiquidGlassButton size="md">Confirm</LiquidGlassButton>
      <button>Cancel</button>
    </div>
  </LiquidGlassCard>
</div>
```

### Stats Section
```jsx
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
  {stats.map((stat) => (
    <LiquidGlassCard 
      key={stat.id}
      effectType="frost"
      className="p-6 text-center"
    >
      <div className="text-3xl font-bold text-blue-400">{stat.value}</div>
      <div className="text-sm text-gray-400">{stat.label}</div>
    </LiquidGlassCard>
  ))}
</div>
```

## 🎭 Advanced Combinations

### All Features Combined
```jsx
<LiquidGlassCard 
  effectType="neon"
  glowIntensity="lg"
  blurIntensity="lg"
  liquidEffect={true}
  borderGradient={true}
  draggable={true}
  animate={true}
  className="p-8"
>
  Advanced card with all features
</LiquidGlassCard>
```

### Liquid + Interactive Border
```jsx
<LiquidGlassCard
  effectType="liquid"
  liquidEffect={true}
  borderGradient={true}
  className="p-8"
>
  Morphing blobs with cursor-tracking border
</LiquidGlassCard>
```

### Draggable Neon Card
```jsx
<LiquidGlassCard
  effectType="neon"
  draggable={true}
  className="cursor-move"
>
  Drag me around!
</LiquidGlassCard>
```

## 🎨 Custom Styling

### Custom Colors
```jsx
<LiquidGlassCard
  style={{
    background: 'rgba(139, 92, 246, 0.1)',
    borderColor: 'rgba(139, 92, 246, 0.4)',
    boxShadow: '0 0 30px rgba(139, 92, 246, 0.5)'
  }}
>
  Purple-themed card
</LiquidGlassCard>
```

### With Tailwind Classes
```jsx
<LiquidGlassCard className="p-8 shadow-2xl hover:scale-105 transition-transform">
  Content with custom Tailwind styling
</LiquidGlassCard>
```

### Custom Border Radius
```jsx
<LiquidGlassCard borderRadius="24px">Sharp corners</LiquidGlassCard>
<LiquidGlassCard borderRadius="8px">Gentle curves</LiquidGlassCard>
<LiquidGlassCard borderRadius="50%">Circular</LiquidGlassCard>
```

## 🔧 Pro Tips

1. **Layer Effects**: Combine multiple cards for depth
   ```jsx
   <LiquidGlassCard>
     <LiquidGlassCard>Nested cards</LiquidGlassCard>
   </LiquidGlassCard>
   ```

2. **Disable Animations for Performance**
   ```jsx
   <LiquidGlassCard animate={false} liquidEffect={false}>
     Performance-optimized card
   </LiquidGlassCard>
   ```

3. **Mix Effect Types**
   ```jsx
   <div className="space-y-4">
     <LiquidGlassCard effectType="glow" />
     <LiquidGlassCard effectType="neon" />
     <LiquidGlassCard effectType="liquid" />
   </div>
   ```

4. **Responsive Adjustments**
   ```jsx
   <LiquidGlassCard 
     glowIntensity={{ base: 'sm', md: 'md', lg: 'lg' }}
   >
     Responsive glow
   </LiquidGlassCard>
   ```

5. **Chain Multiple Effects**
   ```jsx
   <LiquidGlassCard effectType="neon" className="hover:shadow-2xl">
     Multiple effects stack
   </LiquidGlassCard>
   ```

## 📊 Performance Considerations

- **Light**: Use `effectType="glow"` with `animate={false}`
- **Medium**: Use `effectType="neon"` with standard settings
- **Heavy**: `liquidEffect={true}` adds 3 blob elements + animations
- **Limit animated cards**: Max 3-4 on large pages
- **Use CSS animations**: More efficient than JS

## 🌐 Browser Support

| Browser | Support |
|---------|---------|
| Chrome | ✅ 76+ |
| Firefox | ✅ 70+ |
| Safari | ✅ 9+ |
| Edge | ✅ 76+ |
| Opera | ✅ 63+ |

## 📱 Mobile Considerations

- Use `animate={false}` for better mobile performance
- Reduce `liquidEffect` on mobile devices
- Adjust `borderRadius` for touch targets
- Test on actual devices for blur visibility

## 🎓 Learning Resources

- **Demo Page**: `/app/liquid-glass-demo.jsx`
- **Examples**: `/components/liquid-glass-examples.jsx`
- **Full Guide**: `/LIQUID_GLASS_GUIDE.md`
- **CSS Animations**: `/components/ui/liquid-glass.css`

## 🚨 Common Issues & Fixes

| Issue | Solution |
|-------|----------|
| Blur not visible | Ensure backdrop-filter is supported; increase blurIntensity |
| Colors look wrong | Check background behind component; effects use transparency |
| Animations laggy | Reduce number of animated cards; disable liquidEffect |
| Text not readable | Use darker backgrounds; increase glowIntensity; add text shadow |
| Mobile performance | Disable animations; reduce liquid effects; use smaller sizes |

## 📝 Code Examples Location

```
components/
  ├── ui/
  │   ├── liquid-glass.jsx          (Components)
  │   └── liquid-glass.css          (Styles & Animations)
  └── liquid-glass-examples.jsx     (10+ Real-world examples)

app/
  └── liquid-glass-demo.jsx         (Interactive showcase)

LIQUID_GLASS_GUIDE.md               (Full documentation)
```

---

**Last Updated**: January 2025
**Version**: 1.0
