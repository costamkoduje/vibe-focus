# Plan poprawek dla projektu FocusElectro

## Główne problemy (rzeczywiste)
1. **Console logs w produkcji** - 3 pliki
2. **Duplikacja CSS** - fonty w 2 miejscach  
3. **Brak error boundary** - jeden komponent

## Natychmiastowe poprawki (30 min)

### 1. Usunięcie console logs
- [ ] `src/lib/i18n.ts:34,44` - usunąć console.warn
- [ ] `src/components/layout/hero/HeroCooperation.tsx:86` - usunąć console.log  
- [ ] `src/components/features/projects/ProjectsTableSection.tsx:40,45` - zastąpić try/catch

### 2. Error boundary
- [ ] Dodać `src/components/ui/error-boundary.tsx`
- [ ] Wrap w layout.tsx

## Krótkoterminowe (2h)

### 3. CSS cleanup
- [ ] Usunąć duplikaty fontów z globals.css
- [ ] Zostaw tylko w tailwind.config.ts

### 4. Basic SEO
- [ ] Dodać meta description w layout.tsx
- [ ] Dodać alt texty do głównych obrazów

## Opcjonalne (później)
- Lazy loading obrazów w galeriach
- Structured data
- Advanced accessibility

## Test po zmianach
- [ ] `npm run build` - sprawdzić czy działa
- [ ] `npm run lint` - sprawdzić błędy
- [ ] Przetestować na mobile i desktop