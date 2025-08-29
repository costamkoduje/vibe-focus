import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Design System Colors
      colors: {
        // Primary colors
        accent: "#FDE10D",
        light: "#F4F5F6",
        dark: "#1D1F23",
        
        // Gray scale
        "gray-light": "#CAD3D7",
        "gray-mid": "#879AA4", 
        "gray-dark": "#3E485A",
        
        // Legacy colors for backward compatibility
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      
      // Design System Typography
      fontFamily: {
        // PP Supply Mono fonts with Geist Mono fallback
        "mono-xs": ["PP Supply Mono", "Geist Mono", "monospace"],
        "mono-m": ["PP Supply Mono", "Geist Mono", "monospace"], 
        "mono-l": ["PP Supply Mono", "Geist Mono", "monospace"],
        
        // Figtree fonts
        "fig-m": ["Figtree", "sans-serif"],
        "fig-l": ["Figtree", "sans-serif"],
        "fig-xl": ["Figtree", "sans-serif"],
        "fig-xxl": ["Figtree", "sans-serif"],
        "fig-xxl-bold": ["Figtree", "sans-serif"],
        
        // Fonts with fonts- prefix for backward compatibility
        "fonts-fig-m": ["Figtree", "sans-serif"],
        "fonts-fig-l": ["Figtree", "sans-serif"],
        "fonts-fig-xl": ["Figtree", "sans-serif"],
        "fonts-fig-xxl": ["Figtree", "sans-serif"],
        "fonts-fig-xxl-bold": ["Figtree", "sans-serif"],
        
        // Legacy fonts for backward compatibility
        "20": "var(--20-font-family)",
        l: "var(--l-font-family)",
        m: "var(--m-font-family)",
        terxt: "var(--terxt-font-family)",
        xl: "var(--xl-font-family)",
        xs: "var(--xs-font-family)",
        xxl: "var(--xxl-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      
      // Design System Font Sizes - Responsive
      fontSize: {
        // PP Supply Mono sizes - Responsive
        "mono-xs": [
          "clamp(12px, 0.8vw, 16px)", // 12px na mobile, 16px na 1920px
          { 
            lineHeight: "clamp(15px, 1vw, 20px)", 
            letterSpacing: "2%" 
          }
        ],
        "mono-m": [
          "clamp(14px, 1vw, 20px)", // 14px na mobile, 20px na 1920px
          { 
            lineHeight: "clamp(17px, 1.25vw, 24px)", 
            letterSpacing: "2%" 
          }
        ],
        "mono-l": [
          "clamp(16px, 1.15vw, 22px)", // 16px na mobile, 22px na 1920px
          { 
            lineHeight: "clamp(19px, 1.35vw, 26px)", 
            letterSpacing: "0%" 
          }
        ],
        
        // Figtree sizes - Responsive
        "fig-m": [
          "clamp(24px, 1.875vw, 36px)", // 24px na mobile, 36px na 1920px
          { 
            lineHeight: "clamp(28px, 2.19vw, 42px)", 
            letterSpacing: "2%" 
          }
        ],
        "fig-l": [
          "clamp(36px, 3.385vw, 65px)", // 36px na mobile, 65px na 1920px
          { 
            lineHeight: "clamp(40px, 3.75vw, 72px)", 
            letterSpacing: "-2.63px" 
          }
        ],
        "fig-xl": [
          "clamp(48px, 4.27vw, 82px)", // 48px na mobile, 82px na 1920px
          { 
            lineHeight: "clamp(54px, 4.9vw, 94px)", 
            letterSpacing: "-2.63px" 
          }
        ],
        "fig-xxl": [
          "clamp(50px, 4.375vw, 84px)", // 50px na mobile, 84px na 1920px
          { 
            lineHeight: "clamp(56px, 5vw, 96px)", 
            letterSpacing: "-2.63px" 
          }
        ],
        "fig-xxl-bold": [
          "clamp(50px, 4.375vw, 84px)", // 50px na mobile, 84px na 1920px
          { 
            lineHeight: "clamp(56px, 5vw, 96px)", 
            letterSpacing: "-2.63px",
            fontWeight: "800"
          }
        ],
        
        // Fonts with fonts- prefix for backward compatibility
        "fonts-fig-m": [
          "clamp(24px, 1.875vw, 36px)", // 24px na mobile, 36px na 1920px
          { 
            lineHeight: "clamp(28px, 2.19vw, 42px)", 
            letterSpacing: "2%" 
          }
        ],
        "fonts-fig-l": [
          "clamp(36px, 3.385vw, 65px)", // 36px na mobile, 65px na 1920px
          { 
            lineHeight: "clamp(40px, 3.75vw, 72px)", 
            letterSpacing: "-2.63px" 
          }
        ],
        "fonts-fig-xl": [
          "clamp(48px, 4.27vw, 82px)", // 48px na mobile, 82px na 1920px
          { 
            lineHeight: "clamp(54px, 4.9vw, 94px)", 
            letterSpacing: "-2.63px" 
          }
        ],
        "fonts-fig-xxl": [
          "clamp(50px, 4.375vw, 84px)", // 50px na mobile, 84px na 1920px
          { 
            lineHeight: "clamp(56px, 5vw, 96px)", 
            letterSpacing: "-2.63px" 
          }
        ],
        "fonts-fig-xxl-bold": [
          "clamp(50px, 4.375vw, 84px)", // 50px na mobile, 84px na 1920px
          { 
            lineHeight: "clamp(56px, 5vw, 96px)", 
            letterSpacing: "-2.63px",
            fontWeight: "800"
          }
        ],
      },
      
      // Design System Gradients
      backgroundImage: {
        "gradient-light": "linear-gradient(0deg, #FDE10D 0%, #F4F5F6 100%)",
        "gradient-dark": "linear-gradient(0deg, #3E485A 0%, #F4F5F6 100%)",
        "gradient-full": "linear-gradient(0deg, #FDE10D 0%, #F4F5F6 50%, #3E485A 100%)",
      },
      
      // Design System Grid
      gridTemplateColumns: {
        "12": "repeat(12, minmax(0, 1fr))",
      },
      gap: {
        "grid": "20px",
      },
      margin: {
        "grid": "20px",
      },
      
      // Max Width based on columns (12-column grid)
      // Uwzględnia gap-5 (20px) między kolumnami
      maxWidth: {
        "col-1": "calc((100% - 11 * 20px) / 12 * 1 + 0 * 20px)",
        "col-2": "calc((100% - 11 * 20px) / 12 * 2 + 1 * 20px)",
        "col-3": "calc((100% - 11 * 20px) / 12 * 3 + 2 * 20px)",
        "col-4": "calc((100% - 11 * 20px) / 12 * 4 + 3 * 20px)",
        "col-5": "calc((100% - 11 * 20px) / 12 * 5 + 4 * 20px)",
        "col-6": "calc((100% - 11 * 20px) / 12 * 6 + 5 * 20px)",
        "col-7": "calc((100% - 11 * 20px) / 12 * 7 + 6 * 20px)",
        "col-8": "calc((100% - 11 * 20px) / 12 * 8 + 7 * 20px)",
        "col-9": "calc((100% - 11 * 20px) / 12 * 9 + 8 * 20px)",
        "col-10": "calc((100% - 11 * 20px) / 12 * 10 + 9 * 20px)",
        "col-11": "calc((100% - 11 * 20px) / 12 * 11 + 10 * 20px)",
        "col-12": "calc((100% - 11 * 20px) / 12 * 12 + 11 * 20px)",
        // Odpowiedniki dla max-w-xl, max-w-2xl, max-w-3xl
        "col-l": "calc((100% - 220px) / 12 * 2 + 20px)", // 2 kolumny z 12 (1 gap)
        "col-xl": "calc((100% - 220px) / 12 * 4 + 60px)", // 4 kolumny z 12 (3 gapy)
        "col-2xl": "calc((100% - 220px) / 12 * 6 + 100px)", // 6 kolumn z 12 (5 gapów)
        "col-3xl": "calc((100% - 220px) / 12 * 8 + 140px)", // 8 kolumn z 12 (7 gapów)
        "col-4xl": "calc((100% - 220px) / 12 * 10 + 180px)", // 10 kolumn z 12 (9 gapów)
        // Responsywne warianty
        "col-l-mobile": "calc((100% - 220px) / 12 * 8 + 140px)", // 8 kolumn (7 gapów)
        "col-xl-mobile": "calc((100% - 220px) / 12 * 10 + 180px)", // 10 kolumn (9 gapów)
        "col-2xl-mobile": "calc((100% - 220px) / 12 * 11 + 200px)", // 11 kolumn (10 gapów)
        "col-3xl-mobile": "calc((100% - 220px) / 12 * 12 + 220px)", // 12 kolumn (11 gapów)
        "col-4xl-mobile": "calc((100% - 220px) / 12 * 12 + 220px)", // 12 kolumn (11 gapów)
        "col-l-tablet": "calc((100% - 220px) / 12 * 4 + 60px)", // 4 kolumny (3 gapy)
        "col-xl-tablet": "calc((100% - 220px) / 12 * 6 + 100px)", // 6 kolumn (5 gapów)
        "col-2xl-tablet": "calc((100% - 220px) / 12 * 8 + 140px)", // 8 kolumn (7 gapów)
        "col-3xl-tablet": "calc((100% - 220px) / 12 * 10 + 180px)", // 10 kolumn (9 gapów)
        "col-4xl-tablet": "calc((100% - 220px) / 12 * 12 + 220px)", // 12 kolumn (11 gapów)
      },
      
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { 
      center: true, 
      padding: "2rem", 
      screens: { "2xl": "1400px" } 
    },
  },
  plugins: [require("tailwindcss-animate")],
  darkMode: "class",
};

export default config;
