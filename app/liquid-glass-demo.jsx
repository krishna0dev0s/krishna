import React from 'react';
import {
  LiquidGlassCard,
  LiquidGlassButton,
  LiquidGlassContainer,
} from '@/components/ui/liquid-glass';

/**
 * LIQUID GLASS EFFECTS DEMO
 * Complete showcase of all available effects and variants
 */

export default function LiquidGlassDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Liquid Glass Effects
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Modern glassmorphism with fluid animations, neon effects, and interactive elements
          </p>
        </div>

        {/* ========================================
            SECTION 1: EFFECT TYPES
            ======================================== */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-white mb-6">Effect Types</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Glow Effect */}
            <LiquidGlassCard
              effectType="glow"
              glowIntensity="lg"
              className="p-6 h-64 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold mb-2">Glow Effect</h3>
                <p className="text-sm text-gray-300">
                  Soft blue glow with smooth pulsing animation
                </p>
              </div>
              <div className="text-xs text-blue-300">
                effectType="glow"
              </div>
            </LiquidGlassCard>

            {/* Neon Effect */}
            <LiquidGlassCard
              effectType="neon"
              className="p-6 h-64 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold mb-2">Neon Effect</h3>
                <p className="text-sm text-gray-300">
                  Vibrant neon blue border with intense glow
                </p>
              </div>
              <div className="text-xs text-blue-300">
                effectType="neon"
              </div>
            </LiquidGlassCard>

            {/* Gradient Effect */}
            <LiquidGlassCard
              effectType="gradient"
              className="p-6 h-64 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold mb-2">Gradient Effect</h3>
                <p className="text-sm text-gray-300">
                  Shifting color gradients in background
                </p>
              </div>
              <div className="text-xs text-blue-300">
                effectType="gradient"
              </div>
            </LiquidGlassCard>

            {/* Liquid Effect */}
            <LiquidGlassCard
              effectType="liquid"
              liquidEffect={true}
              className="p-6 h-64 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold mb-2">Liquid Effect</h3>
                <p className="text-sm text-gray-300">
                  Morphing blobs with fluid animations
                </p>
              </div>
              <div className="text-xs text-purple-300">
                effectType="liquid" + liquidEffect=true
              </div>
            </LiquidGlassCard>

            {/* Frost Effect */}
            <LiquidGlassCard
              effectType="frost"
              className="p-6 h-64 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold mb-2">Frost Effect</h3>
                <p className="text-sm text-gray-300">
                  Frosted glass with subtle shimmer
                </p>
              </div>
              <div className="text-xs text-cyan-300">
                effectType="frost"
              </div>
            </LiquidGlassCard>

            {/* Composite Effect */}
            <LiquidGlassCard
              effectType="neon"
              liquidEffect={true}
              borderGradient={true}
              className="p-6 h-64 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold mb-2">Composite Effect</h3>
                <p className="text-sm text-gray-300">
                  Neon + liquid + interactive border
                </p>
              </div>
              <div className="text-xs text-pink-300">
                Multiple effects combined
              </div>
            </LiquidGlassCard>
          </div>
        </section>

        {/* ========================================
            SECTION 2: INTENSITY LEVELS
            ======================================== */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-white mb-6">Intensity Levels</h2>

          <div className="space-y-4">
            <div className="text-sm font-semibold text-gray-400 mb-4">Glow Intensity Comparison</div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {['xs', 'sm', 'md', 'lg', 'xl'].map((intensity) => (
                <LiquidGlassCard
                  key={intensity}
                  effectType="glow"
                  glowIntensity={intensity}
                  className="p-4 h-32 flex items-center justify-center"
                >
                  <div className="text-center">
                    <div className="font-semibold mb-1">{intensity.toUpperCase()}</div>
                    <div className="text-xs text-gray-300">Glow</div>
                  </div>
                </LiquidGlassCard>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="text-sm font-semibold text-gray-400 mb-4">Blur Intensity Comparison</div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {['xs', 'sm', 'md', 'lg', 'xl'].map((intensity) => (
                <LiquidGlassCard
                  key={intensity}
                  effectType="frost"
                  blurIntensity={intensity}
                  className="p-4 h-32 flex items-center justify-center"
                >
                  <div className="text-center">
                    <div className="font-semibold mb-1">{intensity.toUpperCase()}</div>
                    <div className="text-xs text-gray-300">Blur</div>
                  </div>
                </LiquidGlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================
            SECTION 3: BUTTONS
            ======================================== */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-white mb-6">Glass Buttons</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['sm', 'md', 'lg', 'xl'].map((size) => (
              <div key={size} className="space-y-3">
                <div className="text-xs font-semibold text-gray-400 mb-2">{size.toUpperCase()}</div>
                <LiquidGlassButton size={size} animate={true}>
                  {size.toUpperCase()} Button
                </LiquidGlassButton>
              </div>
            ))}
          </div>

          <div className="space-y-4 pt-4">
            <div className="flex flex-wrap gap-4">
              <LiquidGlassButton size="md" animate={true}>
                Primary Action
              </LiquidGlassButton>
              <LiquidGlassButton size="md" animate={true} className="bg-red-500/20">
                Danger Action
              </LiquidGlassButton>
              <LiquidGlassButton size="md" animate={true} className="bg-green-500/20">
                Success Action
              </LiquidGlassButton>
              <LiquidGlassButton size="md" animate={true} className="bg-yellow-500/20">
                Warning Action
              </LiquidGlassButton>
            </div>
          </div>
        </section>

        {/* ========================================
            SECTION 4: CONTAINER
            ======================================== */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-white mb-6">Full Container Effect</h2>

          <LiquidGlassContainer className="p-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Container with Animated Blobs</h3>
              <p className="text-gray-300 leading-relaxed">
                This demonstrates the full liquid glass container effect with animated background
                blobs using mix-blend-multiply. Perfect for hero sections, modals, or large content
                areas. The blobs automatically animate in the background creating a dynamic,
                liquid-like atmosphere.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                {['Feature 1', 'Feature 2', 'Feature 3'].map((feature) => (
                  <div key={feature} className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <h4 className="font-semibold text-white mb-2">{feature}</h4>
                    <p className="text-sm text-gray-400">
                      Liquid glass effects in action
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </LiquidGlassContainer>
        </section>

        {/* ========================================
            SECTION 5: INTERACTIVE FEATURES
            ======================================== */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-white mb-6">Interactive Features</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Draggable Card */}
            <LiquidGlassCard
              effectType="neon"
              draggable={true}
              className="p-8 h-64 cursor-move flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold mb-2">Draggable Card</h3>
                <p className="text-sm text-gray-300">
                  Click and drag this card around the screen. Perfect for interactive UIs.
                </p>
              </div>
              <div className="text-xs text-blue-300 opacity-75">
                draggable={'{true}'} — Try dragging me!
              </div>
            </LiquidGlassCard>

            {/* Interactive Border */}
            <LiquidGlassCard
              effectType="gradient"
              borderGradient={true}
              className="p-8 h-64 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold mb-2">Interactive Border</h3>
                <p className="text-sm text-gray-300">
                  Hover over this card to see the interactive gradient border follow your cursor.
                </p>
              </div>
              <div className="text-xs text-cyan-300 opacity-75">
                borderGradient={'{true}'} — Move your mouse!
              </div>
            </LiquidGlassCard>
          </div>
        </section>

        {/* ========================================
            SECTION 6: USAGE EXAMPLES
            ======================================== */}
        <section className="space-y-8 pb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Usage Examples</h2>

          <div className="bg-black/50 rounded-lg border border-white/10 p-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Basic Card</h3>
              <pre className="bg-black/80 rounded p-4 text-sm text-green-400 overflow-x-auto">
{`<LiquidGlassCard effectType="glow" glowIntensity="md">
  <p>Your content here</p>
</LiquidGlassCard>`}
              </pre>
            </div>

            <div className="space-y-4 pt-6 border-t border-white/10">
              <h3 className="text-lg font-semibold text-white">With Liquid Effect</h3>
              <pre className="bg-black/80 rounded p-4 text-sm text-green-400 overflow-x-auto">
{`<LiquidGlassCard
  effectType="liquid"
  liquidEffect={true}
  blurIntensity="lg"
>
  <p>Liquid morphing blobs background</p>
</LiquidGlassCard>`}
              </pre>
            </div>

            <div className="space-y-4 pt-6 border-t border-white/10">
              <h3 className="text-lg font-semibold text-white">Button Example</h3>
              <pre className="bg-black/80 rounded p-4 text-sm text-green-400 overflow-x-auto">
{`<LiquidGlassButton 
  size="lg" 
  animate={true}
  onClick={() => handleAction()}
>
  Click Me
</LiquidGlassButton>`}
              </pre>
            </div>

            <div className="space-y-4 pt-6 border-t border-white/10">
              <h3 className="text-lg font-semibold text-white">Container Example</h3>
              <pre className="bg-black/80 rounded p-4 text-sm text-green-400 overflow-x-auto">
{`<LiquidGlassContainer className="p-12">
  <h2>Section Title</h2>
  <p>Container content with animated blobs</p>
</LiquidGlassContainer>`}
              </pre>
            </div>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6">
            <h4 className="font-semibold text-blue-300 mb-2">Available Props</h4>
            <ul className="text-sm text-blue-200 space-y-1">
              <li>• <code>effectType</code>: 'glow' | 'neon' | 'gradient' | 'liquid' | 'frost'</li>
              <li>• <code>glowIntensity</code>: 'xs' | 'sm' | 'md' | 'lg' | 'xl'</li>
              <li>• <code>blurIntensity</code>: 'xs' | 'sm' | 'md' | 'lg' | 'xl'</li>
              <li>• <code>liquidEffect</code>: boolean (enable morphing blobs)</li>
              <li>• <code>borderGradient</code>: boolean (interactive border follows cursor)</li>
              <li>• <code>animate</code>: boolean (enable animations)</li>
              <li>• <code>draggable</code>: boolean (enable drag functionality)</li>
              <li>• <code>size</code> (button only): 'sm' | 'md' | 'lg' | 'xl'</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
