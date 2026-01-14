'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { THEMES, getThemeConfig, getThemeCSSVariables } from '@/lib/themes';

const ThemeContext = createContext({});

export function ThemeProvider({ children, defaultTheme = THEMES.MACOS_26 }) {
  const [currentTheme, setCurrentTheme] = useState(defaultTheme);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Load saved theme from localStorage
    const saved = localStorage.getItem('app-theme');
    if (saved && Object.values(THEMES).includes(saved)) {
      setCurrentTheme(saved);
      applyTheme(saved);
    } else {
      applyTheme(defaultTheme);
    }
  }, [defaultTheme]);

  const applyTheme = (themeName) => {
    const themeConfig = getThemeConfig(themeName);
    const cssVars = getThemeCSSVariables(themeName);
    
    // Apply CSS variables
    const root = document.documentElement;
    Object.entries(cssVars).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
    
    // Apply theme class
    root.classList.remove(...Object.values(THEMES).map(t => `${getThemeConfig(t).cssClass}`));
    root.classList.add(themeConfig.cssClass);
  };

  const switchTheme = (themeName) => {
    if (Object.values(THEMES).includes(themeName)) {
      setCurrentTheme(themeName);
      applyTheme(themeName);
      localStorage.setItem('app-theme', themeName);
    }
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, switchTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
