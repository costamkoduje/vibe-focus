# Struktura Projektu FocusElectro Next.js

## Przegląd

Projekt został zbudowany przy użyciu Next.js 15 App Router w celu poprawy czytelności, modularności i łatwości utrzymania kodu.

## Struktura Katalogów

```
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── (pages)/          # Route Groups - wspólny layout dla podstron
│   │   │   ├── about/        # Strona "O nas"
│   │   │   │   └── page.tsx
│   │   │   ├── career/       # Strona "Kariera" 
│   │   │   │   └── page.tsx
│   │   │   ├── cooperation/  # Strona "Współpraca"
│   │   │   │   └── page.tsx
│   │   │   ├── projects/     # Strona "Projekty"
│   │   │   │   └── page.tsx
│   │   │   └── layout.tsx    # Wspólny layout z Navigation dla podstron
│   │   ├── favicon.ico       # Ikona strony
│   │   ├── globals.css       # Globalne style CSS
│   │   ├── layout.tsx        # Root layout z metadanymi i fontami
│   │   └── page.tsx          # Strona główna (/)
│   ├── components/           # Komponenty React
│   │   ├── ui/              # Komponenty UI 
│   │   │   ├── index.ts     # Eksport wszystkich komponentów UI
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── grid-debugger.tsx
│   │   │   ├── navigation-menu.tsx
│   │   │   └── navigation.tsx
│   │   └── sections/        # Sekcje stron - zorganizowane tematycznie
│   │       ├── hero/        # Sekcje hero dla różnych stron
│   │       │   ├── index.ts
│   │       │   ├── HeroHome.tsx     # (była HeroSection.tsx)
│   │       │   ├── HeroAbout.tsx    # (była HeroAboutSection.tsx)
│   │       │   ├── HeroCareer.tsx   # (była HeroCareerSection.tsx)
│   │       │   └── HeroCooperation.tsx # (była HeroCoWorkSection.tsx)
│   │       ├── common/      # Wspólne sekcje używane wszędzie
│   │       │   ├── index.ts
│   │       │   └── FooterSection.tsx
│   │       ├── content/     # Sekcje zawartości
│   │       │   ├── index.ts
│   │       │   ├── AboutSection.tsx
│   │       │   └── ProcessSection.tsx
│   │       ├── index.ts     # Główny eksport wszystkich sekcji
│   │       └── [inne sekcje...]   # Pozostałe sekcje do organizacji
│   ├── assets/              # Zasoby statyczne
│   │   ├── images/          # Obrazy
│   │   ├── icons/           # Ikony
│   │   └── styles/          # Style CSS
│   │       └── design-system.css
│   ├── lib/                 # Biblioteki pomocnicze
│   │   └── utils.ts         # Funkcje pomocnicze (cn, clsx)
│   ├── utils/               # Dodatkowe funkcje pomocnicze
│   │   └── index.ts
│   ├── types/               # Definicje typów TypeScript
│   ├── hooks/               # Custom React hooks
│   └── constants/           # Stałe aplikacji
├── public/                  # Pliki statyczne Next.js - zoptymalizowane
│   ├── Maps.jpg
│   └── images/              # Obrazy zorganizowane tematycznie
│       ├── hero/           # Obrazy tła dla sekcji hero
│       ├── about/          # Obrazy związane ze stroną "O nas" 
│       ├── career/         # Obrazy związane z karierą
│       ├── icons/          # Ikony SVG
│       ├── cards/          # Obrazy dla kart
│       ├── process/        # Obrazy procesów
│       ├── projects/       # Obrazy projektów
│       └── [inne...]       # Pozostałe zorganizowane obrazy
├── GUIDE/                   # Dokumentacja projektu
│   └── STRUCTURE.md
├── next.config.ts           # Konfiguracja Next.js
├── tailwind.config.ts       # Konfiguracja Tailwind CSS
├── tsconfig.json           # Konfiguracja TypeScript
├── postcss.config.mjs      # Konfiguracja PostCSS
├── eslint.config.mjs       # Konfiguracja ESLint
└── package.json            # Zależności i skrypty
```

## Kluczowe Cechy Next.js App Router

### 1. App Router (Next.js 13+)
- **File-based routing**: Każdy folder w `src/app/` tworzy nową trasę
- **Layout System**: `layout.tsx` definiuje wspólny layout dla stron
- **Server Components**: Domyślnie wszystkie komponenty są Server Components
- **Metadata API**: SEO i metadane zarządzane przez `metadata` export

### 2. Struktura Routingu
- `src/app/page.tsx` → `/` (strona główna)
- `src/app/about/page.tsx` → `/about`
- `src/app/career/page.tsx` → `/career`
- `src/app/cooperation/page.tsx` → `/cooperation`
- `src/app/projects/page.tsx` → `/projects`

### 3. Optimalizacje Next.js
- **Image Optimization**: Automatyczne optymalizowanie obrazów
- **Font Optimization**: `next/font` dla lepszej wydajności fontów
- **Bundle Optimization**: Tree-shaking i code-splitting
- **CSS Optimization**: Automatyczne ładowanie CSS-in-JS

### 4. TypeScript Integration
- Pełne wsparcie TypeScript out-of-the-box
- Type-safe routing z App Router
- Strict mode włączony dla lepszej jakości kodu

## Korzyści

1. **Server-Side Rendering**: Lepsze SEO i szybsze ładowanie
2. **Automatic Code Splitting**: Mniejsze bundles i szybsze ładowanie
3. **Built-in Optimizations**: Obrazy, fonty, CSS automatycznie optymalizowane
4. **Type Safety**: Pełne wsparcie TypeScript
5. **Developer Experience**: Hot reloading, error overlay, fast refresh
6. **SEO Ready**: Metadata API, structured data, sitemap generation

## Użycie

### Tworzenie Nowej Strony
```typescript
// src/app/kontakt/page.tsx
export default function KontaktPage() {
  return (
    <div>
      <h1>Kontakt</h1>
    </div>
  );
}

// Automatycznie dostępne pod /kontakt
```

### Importowanie Sekcji
```typescript
import { AboutSection, HeroSection, ProcessSection } from '@/components/sections';
```

### Importowanie Komponentów UI
```typescript
import { Button, Card, CardContent } from '@/components/ui';
```

### Korzystanie z Next.js Image
```typescript
import Image from 'next/image';

export default function MyComponent() {
  return (
    <Image
      src="/images/hero.jpg"
      alt="Opis obrazu"
      width={800}
      height={600}
      priority // dla obrazów above-the-fold
    />
  );
}
```

## Konfiguracja

### TypeScript Path Mapping
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["./src/components/*"],
      "@/lib/*": ["./src/lib/*"],
      "@/utils/*": ["./src/utils/*"]
    }
  }
}
```

### Next.js Config
```typescript
// next.config.ts
const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', 'gsap']
  },
  images: {
    formats: ['image/webp', 'image/avif']
  }
};
```

## Skrypty Rozwoju

```bash
npm run dev          # Uruchom serwer deweloperski
npm run build        # Zbuduj aplikację do produkcji
npm run start        # Uruchom aplikację produkcyjną
npm run lint         # Sprawdź kod ESLint
npm run lint:fix     # Napraw błędy ESLint
npm run type-check   # Sprawdź typy TypeScript
```
