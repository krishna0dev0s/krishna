'use client';

import { LiquidGlassCard, LiquidGlassButton, LiquidGlassContainer } from '@/components/ui/liquid-glass';

/**
 * INTEGRATION EXAMPLES
 * Real-world usage patterns for Liquid Glass effects
 */

// ========================================
// Example 1: Hero Section with Liquid Glass
// ========================================
export function HeroWithLiquidGlass() {
  return (
    <LiquidGlassContainer className="py-24">
      <div className="max-w-4xl mx-auto px-4 space-y-8 text-center">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Liquid Glass Effects
        </h1>
        <p className="text-xl text-gray-300">
          Modern glassmorphism with fluid animations
        </p>
        <div className="flex gap-4 justify-center">
          <LiquidGlassButton size="lg">Get Started</LiquidGlassButton>
          <LiquidGlassButton size="lg" className="bg-purple-500/20">
            Learn More
          </LiquidGlassButton>
        </div>
      </div>
    </LiquidGlassContainer>
  );
}

// ========================================
// Example 2: Feature Cards Grid
// ========================================
export function FeatureCardsGrid() {
  const features = [
    {
      title: 'Glassmorphism',
      description: 'Modern glass effect with backdrop blur',
      icon: '🎨',
    },
    {
      title: 'Liquid Effects',
      description: 'Morphing blobs and fluid animations',
      icon: '💧',
    },
    {
      title: 'Interactive',
      description: 'Draggable cards and hover effects',
      icon: '✨',
    },
    {
      title: 'Performance',
      description: 'Optimized with CSS animations',
      icon: '⚡',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {features.map((feature) => (
        <LiquidGlassCard
          key={feature.title}
          effectType="glow"
          glowIntensity="md"
          className="p-6 h-48 flex flex-col justify-between hover:transform hover:scale-105 transition-transform"
        >
          <div>
            <div className="text-3xl mb-2">{feature.icon}</div>
            <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-300">{feature.description}</p>
          </div>
        </LiquidGlassCard>
      ))}
    </div>
  );
}

// ========================================
// Example 3: Testimonial Cards
// ========================================
export function TestimonialCards() {
  const testimonials = [
    {
      quote: "Amazing glass effects that elevate the UI",
      author: "Jane Developer",
      role: "Frontend Engineer",
    },
    {
      quote: "Smooth animations with great performance",
      author: "John Designer",
      role: "UI/UX Designer",
    },
    {
      quote: "Easy to customize and implement",
      author: "Sarah Product",
      role: "Product Manager",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {testimonials.map((testimonial) => (
        <LiquidGlassCard
          key={testimonial.author}
          effectType="neon"
          liquidEffect={true}
          className="p-6 h-56 flex flex-col justify-between"
        >
          <p className="text-base italic text-gray-200 flex-grow">
            "{testimonial.quote}"
          </p>
          <div>
            <p className="font-semibold text-white">{testimonial.author}</p>
            <p className="text-sm text-gray-400">{testimonial.role}</p>
          </div>
        </LiquidGlassCard>
      ))}
    </div>
  );
}

// ========================================
// Example 4: Call-to-Action Section
// ========================================
export function CTASection() {
  return (
    <LiquidGlassCard
      effectType="gradient"
      glowIntensity="lg"
      borderGradient={true}
      className="p-12 text-center space-y-6"
    >
      <h2 className="text-3xl font-bold">Ready to enhance your UI?</h2>
      <p className="text-gray-300 max-w-2xl mx-auto">
        Liquid glass effects bring modern, interactive design to your applications
        with smooth animations and glassmorphism styling.
      </p>
      <div className="flex gap-4 justify-center pt-4">
        <LiquidGlassButton size="lg">Start Free Trial</LiquidGlassButton>
        <button className="px-6 py-3 font-semibold text-white border border-white/20 rounded-lg hover:bg-white/10 transition-all">
          View Demo
        </button>
      </div>
    </LiquidGlassCard>
  );
}

// ========================================
// Example 5: Stats/Metrics Cards
// ========================================
export function StatsSection() {
  const stats = [
    { label: 'Users', value: '10K+', effect: 'glow' },
    { label: 'Downloads', value: '50K+', effect: 'neon' },
    { label: 'Rating', value: '4.9/5', effect: 'frost' },
    { label: 'Uptime', value: '99.9%', effect: 'liquid' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <LiquidGlassCard
          key={stat.label}
          effectType={stat.effect}
          glowIntensity="md"
          className="p-6 text-center"
        >
          <div className="text-3xl font-bold text-blue-400 mb-2">
            {stat.value}
          </div>
          <div className="text-sm text-gray-400">{stat.label}</div>
        </LiquidGlassCard>
      ))}
    </div>
  );
}

// ========================================
// Example 6: Modal/Dialog with Glass Effect
// ========================================
export function ModalDialog() {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <LiquidGlassCard
        effectType="neon"
        liquidEffect={true}
        className="w-full max-w-md p-8 space-y-6"
      >
        <h2 className="text-2xl font-bold">Welcome!</h2>
        <p className="text-gray-300">
          This modal uses liquid glass effects to create a beautiful, modern dialog.
        </p>
        <div className="space-y-3">
          <LiquidGlassButton size="md" className="w-full">
            Accept
          </LiquidGlassButton>
          <button className="w-full px-4 py-2 text-white border border-white/20 rounded-lg hover:bg-white/10 transition-all">
            Decline
          </button>
        </div>
      </LiquidGlassCard>
    </div>
  );
}

// ========================================
// Example 7: Product Showcase
// ========================================
export function ProductShowcase() {
  return (
    <LiquidGlassContainer className="p-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Premium Features</h2>
          <ul className="space-y-3">
            {['Advanced Animations', 'Interactive Effects', 'Responsive Design', 'Performance Optimized'].map(
              (feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-400 rounded-full" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              )
            )}
          </ul>
          <LiquidGlassButton size="lg">Learn More</LiquidGlassButton>
        </div>
        <LiquidGlassCard
          effectType="liquid"
          glowIntensity="lg"
          liquidEffect={true}
          className="p-8 h-64 flex items-center justify-center"
        >
          <div className="text-center">
            <div className="text-5xl mb-4">🚀</div>
            <p className="text-xl font-semibold">Premium Design</p>
          </div>
        </LiquidGlassCard>
      </div>
    </LiquidGlassContainer>
  );
}

// ========================================
// Example 8: Navigation/Menu Integration
// ========================================
export function NavigationMenu() {
  const menuItems = ['Home', 'Features', 'Pricing', 'Docs', 'Contact'];

  return (
    <LiquidGlassCard
      effectType="frost"
      blurIntensity="lg"
      className="flex items-center justify-between p-4"
    >
      <div className="font-bold text-lg">Logo</div>
      <div className="flex gap-1">
        {menuItems.map((item) => (
          <button
            key={item}
            className="px-4 py-2 text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            {item}
          </button>
        ))}
      </div>
      <LiquidGlassButton size="sm">Sign In</LiquidGlassButton>
    </LiquidGlassCard>
  );
}

// ========================================
// Example 9: Draggable Widget Board
// ========================================
export function DraggableWidgets() {
  const widgets = [
    { id: 1, title: 'Widget 1', color: 'from-blue-400 to-blue-600' },
    { id: 2, title: 'Widget 2', color: 'from-purple-400 to-purple-600' },
    { id: 3, title: 'Widget 3', color: 'from-pink-400 to-pink-600' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {widgets.map((widget) => (
        <LiquidGlassCard
          key={widget.id}
          effectType="neon"
          draggable={true}
          className="p-6 h-40 cursor-move hover:shadow-lg transition-shadow"
        >
          <div className="space-y-4">
            <h3 className="text-lg font-bold">{widget.title}</h3>
            <p className="text-sm text-gray-400">Drag me around →</p>
            <div className={`h-1 bg-gradient-to-r ${widget.color} rounded-full`} />
          </div>
        </LiquidGlassCard>
      ))}
    </div>
  );
}

// ========================================
// Example 10: Info Card with Hover Effect
// ========================================
export function InfoCardHover() {
  return (
    <LiquidGlassCard
      effectType="gradient"
      borderGradient={true}
      className="p-8 space-y-4 hover:shadow-2xl transition-shadow cursor-pointer"
    >
      <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center text-2xl">
        💡
      </div>
      <h3 className="text-xl font-bold">Interactive Design</h3>
      <p className="text-gray-300">
        Hover over this card to see the interactive border gradient follow your mouse cursor.
      </p>
      <div className="text-sm text-blue-300">Click to learn more →</div>
    </LiquidGlassCard>
  );
}

// ========================================
// Export all examples
// ========================================
export const examples = {
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
};
