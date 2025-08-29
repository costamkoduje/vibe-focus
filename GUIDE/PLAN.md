# Plan Optymalizacji i Poprawy Kodu - FocusElectro

## 🔍 Analiza Obecnego Stanu

### ✅ Mocne Strony
- **Architektura Next.js 15**: Nowoczesny App Router z Server Components
- **System Projektowania**: Kompletny design system z responsywną typografią
- **Konfiguracja TypeScript**: Strict mode włączony z dobrą konfiguracją paths
- **Performance Config**: Optymalizacje obrazów, bundle splitting, standalone output
- **Bezpieczeństwo**: Security headers w next.config.ts

### ⚠️ Problemy do Rozwiązania

#### 1. Performance i Obrazy
- **39MB** obrazów w `public/images/` (64 plików)
- Wszystkie `<img>` powinny być zastąpione `<Image />` z next/image
- Brak optymalizacji lazy loading
- Duże obrazy bez responsywnych wariantów

#### 2. Kod i Linting
- 15 ostrzeżeń ESLint (głównie next/no-img-element)
- 3 nieużywane importy w page.tsx
- Nieużywane zmienne (`isPlHovered`, `activeTab`)
- Duplikacja CSS w globals.css i design-system.css

#### 3. Architektura Komponentów
- Mieszanie client components z server components
- Brak typów TypeScript dla props komponentów
- Hardcoded style properties zamiast CSS classes
- Brak error boundaries

## 📋 Plan Optymalizacji

### Faza 1: Image Optimization (Krytyczne dla Performance)
**Priorytet: WYSOKI**

1. **Migracja do next/image**
   - [ ] Zastąp wszystkie `<img>` tagami `<Image />` w:
     - `src/components/ui/navigation.tsx` (3 miejsca)
     - `src/components/sections/hero/HeroAbout.tsx`
     - `src/components/sections/hero/HeroCareer.tsx`
     - `src/components/sections/CareerSection.tsx`
     - `src/components/sections/ProjectsSection.tsx` (2 miejsca)
     - `src/components/sections/StandardSection.tsx` (5 miejsc)
     - `src/components/sections/content/AboutSection.tsx` (2 miejsca)
     - `src/components/sections/DarkImageSection.tsx`
     - `src/components/sections/ProfessionalismSection.tsx`

2. **Optymalizacja Obrazów**
   - [ ] Kompresja obrazów (WebP/AVIF conversion)
   - [ ] Responsywne rozmiary obrazów
   - [ ] Proper `priority` flag dla above-the-fold obrazów
   - [ ] Lazy loading dla pozostałych obrazów

### Faza 2: Code Quality (Średni Priorytet)
**Priorytet: ŚREDNI**

3. **Cleanup Nieużywanego Kodu**
   - [ ] Usuń nieużywane importy w `src/app/page.tsx`:
     - `CallToActionSection`
     - `FooterSection`  
     - `TableSection`
   - [ ] Usuń nieużywane zmienne:
     - `isPlHovered` w navigation.tsx
     - `activeTab` w ContactHeroSection.tsx

4. **TypeScript Improvements**
   - [ ] Dodaj interface/type definitions dla props komponentów
   - [ ] Dodaj proper return types dla wszystkich funkcji
   - [ ] Włącz strict null checks w tsconfig.json

5. **CSS Consolidation**
   - [ ] Usuń duplikację między globals.css i design-system.css
   - [ ] Przenieś wszystkie helper classes do design-system.css
   - [ ] Zmień inline styles na CSS classes gdzie możliwe

### Faza 3: Architecture Improvements (Długoterminowe)
**Priorytet: NISKI-ŚREDNI**

6. **Component Architecture**
   - [ ] Separacja Client/Server Components
   - [ ] Dodanie Error Boundaries
   - [ ] Utworzenie custom hooks dla shared logic
   - [ ] Refactoring dużych komponentów na mniejsze

7. **Performance Enhancements**
   - [ ] Implementacja React.memo dla expensive components
   - [ ] Code splitting dla większych sekcji
   - [ ] Preloading dla krytycznych zasobów
   - [ ] Bundle analysis i tree-shaking improvements

### Faza 4: Developer Experience (Długoterminowe)
**Priorytet: NISKI**

8. **Testing Setup**
   - [ ] Dodanie Jest + React Testing Library
   - [ ] Unit testy dla utility functions
   - [ ] Component testing dla UI components
   - [ ] E2E testing setup (Playwright/Cypress)

9. **Development Tools**
   - [ ] Prettier configuration
   - [ ] Husky pre-commit hooks
   - [ ] GitHub Actions CI/CD
   - [ ] Storybook dla component documentation

### Faza 5: Advanced Optimizations
**Priorytet: NISKI**

10. **SEO & Accessibility**
    - [ ] Structured data (JSON-LD)
    - [ ] Sitemap generation
    - [ ] Robot.txt optimization
    - [ ] ARIA labels i accessibility audit
    - [ ] Lighthouse performance audit

11. **Advanced Next.js Features**
    - [ ] Static generation gdzie możliwe
    - [ ] Dynamic imports dla non-critical components
    - [ ] Service Worker implementation
    - [ ] PWA capabilities

## 🎯 Immediate Action Items (Pierwsze 2 Tygodnie)

### Week 1: Critical Fixes
1. **Image Migration** - Zastąp wszystkie `<img>` na `<Image />`
2. **ESLint Cleanup** - Napraw wszystkie warnings
3. **CSS Consolidation** - Usuń duplikację stylów

### Week 2: Quality Improvements  
1. **TypeScript Types** - Dodaj missing interfaces
2. **Component Refactoring** - Separacja client/server components
3. **Performance Audit** - Lighthouse analysis i pierwsze optymalizacje

## 📊 Metryki Sukcesu

### Performance
- [ ] Lighthouse Performance Score > 90
- [ ] First Contentful Paint < 2s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Bundle size reduction > 20%

### Code Quality
- [ ] 0 ESLint warnings/errors
- [ ] 100% TypeScript coverage
- [ ] Test coverage > 80% (po implementacji testów)

### User Experience
- [ ] Wszystkie obrazy z proper alt text
- [ ] Accessibility score > 95
- [ ] Mobile responsiveness 100%

## 🔧 Tools i Scripts

### Nowe Scripts do Dodania
```json
{
  "scripts": {
    "analyze": "npx @next/bundle-analyzer",
    "lighthouse": "npx lighthouse http://localhost:3000",
    "prettier": "prettier --write .",
    "prettier:check": "prettier --check .",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  }
}
```

### Recommended Dependencies
```json
{
  "devDependencies": {
    "prettier": "^3.0.0",
    "@next/bundle-analyzer": "^15.0.0",
    "jest": "^29.0.0",
    "@testing-library/react": "^14.0.0",
    "@testing-library/jest-dom": "^6.0.0",
    "husky": "^8.0.0",
    "lint-staged": "^15.0.0"
  }
}
```

## 💡 Implementacja

### Kolejność Realizacji
1. **Start**: Image optimization (największy impact na performance)
2. **Follow**: Code cleanup (ESLint warnings)
3. **Then**: TypeScript improvements
4. **Finally**: Advanced features i testing

### Estimated Timeline
- **Faza 1**: 3-5 dni
- **Faza 2**: 1 tydzień  
- **Faza 3**: 2-3 tygodnie
- **Faza 4**: 1-2 tygodnie
- **Faza 5**: 1-2 tygodnie

**Total**: 6-9 tygodni dla pełnej optymalizacji

---

*Plan utworzony w oparciu o analizę kodu z dnia 2025-08-29*