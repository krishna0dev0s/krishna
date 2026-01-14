// Theme configurations - reversible theme system
export const THEMES = {
  ORIGINAL: 'original',
  MACOS_26: 'macos-26'
};

export const themes = {
  [THEMES.ORIGINAL]: {
    name: 'Original',
    cssClass: 'theme-original',
    description: 'Original theme',
    colors: {
      background: '#000000',
      foreground: 'rgba(255,255,255,0.95)',
      card: 'rgba(0,0,0,0.8)',
      cardForeground: 'rgba(255,255,255,0.95)',
      popover: 'rgba(0,0,0,0.8)',
      popoverForeground: 'rgba(255,255,255,0.95)',
      primary: 'rgba(255,255,255,0.9)',
      primaryForeground: '#000000',
      secondary: 'rgba(255,255,255,0.08)',
      secondaryForeground: 'rgba(255,255,255,0.9)',
      muted: 'rgba(255,255,255,0.06)',
      mutedForeground: 'rgba(255,255,255,0.7)',
      accent: 'rgba(255,255,255,0.06)',
      accentForeground: 'rgba(255,255,255,0.9)',
      destructive: 'rgba(255,80,80,0.9)',
      border: 'rgba(255,255,255,0.06)',
      input: 'rgba(255,255,255,0.04)',
      ring: 'rgba(255,255,255,0.1)',
    }
  },
  [THEMES.MACOS_26]: {
    name: 'macOS 26 (Sequoia)',
    cssClass: 'theme-macos-26',
    description: 'Modern macOS Sequoia design with glassmorphism',
    colors: {
      background: '#0a0a0a',
      foreground: 'rgba(245,245,245,0.98)',
      card: 'rgba(30,30,30,0.5)',
      cardForeground: 'rgba(245,245,245,0.95)',
      popover: 'rgba(25,25,25,0.8)',
      popoverForeground: 'rgba(245,245,245,0.98)',
      primary: 'rgba(0,122,255,1)',
      primaryForeground: '#ffffff',
      secondary: 'rgba(255,255,255,0.08)',
      secondaryForeground: 'rgba(245,245,245,0.95)',
      muted: 'rgba(255,255,255,0.05)',
      mutedForeground: 'rgba(255,255,255,0.6)',
      accent: 'rgba(0,122,255,0.15)',
      accentForeground: 'rgba(0,122,255,0.95)',
      destructive: 'rgba(255,59,48,0.9)',
      border: 'rgba(255,255,255,0.08)',
      input: 'rgba(255,255,255,0.06)',
      ring: 'rgba(0,122,255,0.3)',
    }
  }
};

export function getThemeConfig(themeName = THEMES.MACOS_26) {
  return themes[themeName] || themes[THEMES.ORIGINAL];
}

export function getThemeCSSVariables(themeName = THEMES.MACOS_26) {
  const theme = getThemeConfig(themeName);
  const vars = {};
  
  Object.entries(theme.colors).forEach(([key, value]) => {
    vars[`--${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`] = value;
  });
  
  return vars;
}
