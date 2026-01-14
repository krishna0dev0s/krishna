'use client';

import { useTheme } from '@/components/theme-switcher';
import { THEMES, themes } from '@/lib/themes';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from '@/components/ui/dropdown-menu';
import { Palette, Monitor, Moon, Sun } from 'lucide-react';

export function ThemeSwitcherButton() {
  const { currentTheme, switchTheme, mounted } = useTheme();

  if (!mounted) return null;

  const themeConfig = themes[currentTheme];
  
  const getThemeIcon = (themeKey) => {
    if (themeKey.includes('macos')) return <Moon className="h-5 w-5" />;
    return <Sun className="h-5 w-5" />;
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          title="Switch Theme"
          className="rounded-lg hover:bg-accent/50 transition-colors"
        >
          <Palette className="h-5 w-5" />
          <span className="sr-only">Theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-72 p-0 border-0 shadow-2xl rounded-2xl overflow-hidden backdrop-blur-xl bg-gradient-to-br from-background/95 via-background/90 to-background/85"
      >
        {/* Header Section */}
        <div className="px-6 py-4 border-b border-border/50">
          <div className="flex items-center gap-2 mb-1">
            <Palette className="h-5 w-5 text-primary" />
            <DropdownMenuLabel className="text-sm font-bold uppercase tracking-wider text-foreground">
              Theme
            </DropdownMenuLabel>
          </div>
          <p className="text-xs text-muted-foreground">Choose your preferred theme</p>
        </div>

        {/* Radio Group Section */}
        <DropdownMenuRadioGroup value={currentTheme} onValueChange={switchTheme} className="p-4 space-y-2">
          {Object.entries(themes).map(([key, config]) => (
            <DropdownMenuRadioItem 
              key={key} 
              value={key}
              className="cursor-pointer rounded-xl p-3 hover:bg-accent/20 transition-all duration-200 border border-border/30 hover:border-primary/50 data-[state=checked]:border-primary data-[state=checked]:bg-primary/10"
            >
              <div className="flex items-start gap-3 w-full">
                {/* Icon Container */}
                <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                  currentTheme === key 
                    ? 'bg-primary/30 text-primary' 
                    : 'bg-muted/30 text-muted-foreground group-hover:bg-primary/20'
                }`}>
                  {getThemeIcon(key)}
                </div>
                
                {/* Text Content */}
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm text-foreground">{config.name}</div>
                  <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{config.description}</p>
                </div>
                
                {/* Selection Indicator */}
                {currentTheme === key && (
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                    <svg className="w-3 h-3 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>

        {/* Footer Section */}
        <div className="px-6 py-3 border-t border-border/50 bg-muted/20">
          <p className="text-xs text-muted-foreground text-center">
            Current: <span className="font-semibold text-foreground">{themeConfig.name}</span>
          </p>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function ThemeIndicator() {
  const { currentTheme, mounted } = useTheme();

  if (!mounted) return null;

  return (
    <div className="text-xs text-muted-foreground">
      Theme: <span className="font-medium">{themes[currentTheme].name}</span>
    </div>
  );
}
