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
import { Palette } from 'lucide-react';

export function ThemeSwitcherButton() {
  const { currentTheme, switchTheme, mounted } = useTheme();

  if (!mounted) return null;

  const themeConfig = themes[currentTheme];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          title="Switch Theme"
          className="rounded-lg"
        >
          <Palette className="h-5 w-5" />
          <span className="sr-only">Theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="text-xs font-semibold uppercase tracking-wider">
          Theme
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={currentTheme} onValueChange={switchTheme}>
          {Object.entries(themes).map(([key, config]) => (
            <DropdownMenuRadioItem 
              key={key} 
              value={key}
              className="cursor-pointer"
            >
              <div className="flex flex-col gap-1">
                <span className="font-medium">{config.name}</span>
                <span className="text-xs text-muted-foreground">{config.description}</span>
              </div>
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
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
