# Theme System - Reversible macOS 26 Theme

## Overview

This project includes a **reversible theme system** that allows you to switch between the original theme and the new **macOS 26 (Sequoia)** design without losing the ability to revert.

## Features

- ✨ **macOS 26 (Sequoia) Design** - Modern glassmorphism, rounded corners, and Apple-style colors
- 🔄 **Fully Reversible** - Switch back to the original theme anytime
- 💾 **Persistent** - Theme preference is saved in localStorage
- 🎨 **Easy to Customize** - Centralized theme configuration
- ⚡ **Performance Optimized** - CSS variables for fast switching

## How to Use

### 1. Add Theme Provider to Your Root Layout

Update your root layout file (usually `app/layout.js`):

```jsx
import { ThemeProvider } from '@/components/theme-switcher';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ThemeProvider defaultTheme="macos-26">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

### 2. Add Theme Switcher Button to Your Header

Add the theme switcher button to your header or navigation:

```jsx
import { ThemeSwitcherButton } from '@/components/theme-switcher-button';

export function Header() {
  return (
    <header>
      {/* ... other header content ... */}
      <ThemeSwitcherButton />
    </header>
  );
}
```

### 3. Use the Theme Hook in Components

```jsx
'use client';

import { useTheme } from '@/components/theme-switcher';

export function MyComponent() {
  const { currentTheme, switchTheme } = useTheme();

  return (
    <div>
      <p>Current theme: {currentTheme}</p>
      <button onClick={() => switchTheme('original')}>
        Switch to Original
      </button>
      <button onClick={() => switchTheme('macos-26')}>
        Switch to macOS 26
      </button>
    </div>
  );
}
```

## Available Themes

### Original Theme
- **ID**: `original`
- **Description**: Original dark theme with minimal styling
- **Colors**: Dark backgrounds with muted whites

### macOS 26 (Sequoia)
- **ID**: `macos-26`
- **Description**: Modern macOS Sequoia design with glassmorphism
- **Features**:
  - Glassmorphism effects (backdrop blur)
  - Apple's blue accent color
  - Rounded corners (0.75rem)
  - Apple system font family
  - Smooth animations and transitions
  - Modern shadow effects
  - Custom scrollbar styling

## Configuration

### Theme Files

1. **`lib/themes.js`** - Theme definitions and color palettes
2. **`app/macos-26-theme.css`** - macOS 26 specific styles
3. **`components/theme-switcher.jsx`** - Theme provider and hook
4. **`components/theme-switcher-button.jsx`** - UI components for theme switching

### Customizing Colors

Edit `lib/themes.js` to customize theme colors:

```javascript
[THEMES.MACOS_26]: {
  name: 'macOS 26 (Sequoia)',
  colors: {
    primary: 'rgba(0, 122, 255, 1)',
    background: '#0a0a0a',
    // ... more colors
  }
}
```

### Adding New Themes

1. Add theme definition to `lib/themes.js`:
```javascript
[THEMES.MY_THEME]: {
  name: 'My Custom Theme',
  cssClass: 'theme-my-theme',
  description: 'Description',
  colors: { /* ... */ }
}
```

2. Add CSS file `app/my-theme.css` with custom styles

3. Import in `app/globals.css`:
```css
@import "./my-theme.css";
```

## Reverting to Original Theme

### Option 1: Through the UI
Click the theme switcher button in the header and select "Original"

### Option 2: Through Code
```jsx
import { useTheme } from '@/components/theme-switcher';

export function RevertButton() {
  const { switchTheme } = useTheme();
  
  return (
    <button onClick={() => switchTheme('original')}>
      Revert to Original Theme
    </button>
  );
}
```

### Option 3: Clear localStorage
```javascript
localStorage.removeItem('app-theme');
```

## Theme Detection

The system automatically:
- Loads the saved theme from localStorage
- Falls back to the default theme if nothing is saved
- Applies CSS variables dynamically
- Updates all components in real-time

## Performance Considerations

- CSS variables allow instant theme switching without page reload
- Backdrop filters are only applied where supported
- Smooth transitions are GPU-accelerated
- No external theme libraries required

## Browser Support

- Modern browsers with CSS custom properties support
- Glassmorphism effects work in:
  - Chrome/Edge 76+
  - Firefox 55+
  - Safari 9+
  - Mobile browsers (iOS Safari 9+, Chrome for Android 76+)

## Troubleshooting

### Theme not persisting?
- Check if localStorage is enabled
- Clear browser cache and reload

### Colors not applying?
- Make sure ThemeProvider is wrapping your app
- Check browser console for CSS variable errors

### Not seeing macOS styling?
- Ensure `macos-26-theme.css` is imported in globals.css
- Check if your components use CSS classes that support the theme

## Tips & Best Practices

1. **Test with both themes** - Ensure your components look good in both
2. **Use semantic classes** - Use `--primary`, `--card`, etc. instead of hardcoded colors
3. **Maintain contrast** - Check WCAG contrast ratios for accessibility
4. **Animation testing** - Some animations may feel different in each theme

## Support for More Themes

To add more themes in the future:
1. Define colors in `lib/themes.js`
2. Create corresponding CSS file
3. Add switcher UI option
4. All existing code continues to work!

---

**Enjoy your reversible macOS 26 theme! 🎨**
