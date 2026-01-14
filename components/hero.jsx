"use client";

import React, { useEffect, useRef, memo } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import PixelBlastOptimized from "./PixelBlastOptimized";
import { throttle } from "@/lib/performance-utils";
import { AdaptiveMotion } from "./adaptive-animation";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  const imageRef = useRef(null);
  
  useEffect(() => {
    const imageElement = imageRef.current;
    if (!imageElement) return;
    
    const handleScroll = throttle(() => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;
      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    }, 100);
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <section className="w-full pt-16 pb-12 md:pt-24 md:pb-16 text-white relative overflow-hidden -mt-16 hero-gradient-bg">
      {/* Enhanced Gradient Glows */}
      <div className="hero-glow hero-glow-1"></div>
      <div className="hero-glow hero-glow-2"></div>

      {/* PixelBlast Background - Optimized */}
      <div 
        className="absolute inset-0 -z-10 overflow-hidden" 
        style={{ width: '100%', height: '300px', position: 'relative', top: 0, left: 0 }}
      >
        <PixelBlastOptimized
          variant="circle"
          pixelSize={6}
          color="#B19EEF"
          patternScale={3}
          patternDensity={1.2}
          pixelSizeJitter={0.5}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.6}
          edgeFade={0.25}
          transparent
        />
      </div>

      <div className="space-y-8 md:space-y-10 text-center container mx-auto px-4 relative z-10">
        {/* Badge */}
        <AdaptiveMotion 
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full section-badge">
            <Sparkles className="h-4 w-4" />
            <span>AI-Powered Career Transformation</span>
          </div>
        </AdaptiveMotion>

        {/* Headline with enhanced animations */}
        <AdaptiveMotion 
          className="hero-title space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
            <span className="hero-title block text-white">Welcome to WatshiBo</span>
            <span className="text-gradient-primary block mt-3 md:mt-4">Your Ultimate AI Career Companion</span>
          </h1>
        </AdaptiveMotion>
          
        <AdaptiveMotion 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-lg md:text-xl lg:text-2xl font-medium max-w-4xl mx-auto leading-relaxed">
            Master interviews, craft standout resumes, and tailor cover letters with 
            <span className="text-gradient-accent font-semibold"> intelligent automation</span>. 
            Your success starts here.
          </p>
        </AdaptiveMotion>

        {/* CTA Buttons with enhanced animations */}
        <AdaptiveMotion
          className="flex flex-col sm:flex-row justify-center gap-4 pt-6 md:pt-8 hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button 
            asChild 
            size="lg" 
            className="btn-primary-enhanced px-8 py-6 text-base gap-2 group"
          >
            <Link href="/dashboard" prefetch={true}>
              Get Started Now
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button 
            asChild 
            size="lg" 
            className="btn-secondary-enhanced px-8 py-6 text-base"
          >
            <Link href="/dashboard" prefetch={true}>
              Explore Features
            </Link>
          </Button>
        </AdaptiveMotion>

        {/* Hero Stats */}
        <AdaptiveMotion
          className="pt-12 md:pt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto">
            <div className="glass-card p-4 md:p-6">
              <div className="text-3xl md:text-4xl font-bold text-gradient-primary">10K+</div>
              <p className="text-sm md:text-base text-gray-300 mt-2">Users Empowered</p>
            </div>
            <div className="glass-card p-4 md:p-6">
              <div className="text-3xl md:text-4xl font-bold text-gradient-primary">95%</div>
              <p className="text-sm md:text-base text-gray-300 mt-2">Success Rate</p>
            </div>
            <div className="glass-card p-4 md:p-6">
              <div className="text-3xl md:text-4xl font-bold text-gradient-primary">24/7</div>
              <p className="text-sm md:text-base text-gray-300 mt-2">AI Support</p>
            </div>
          </div>
        </AdaptiveMotion>
      </div>
    </section>
  );
};

export default memo(HeroSection);
