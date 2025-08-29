# Design System - FocusBolt

## 🎨 Kolory

### Kolory podstawowe
- `accent` - #FDE10D (żółty akcent)
- `light` - #F4F5F6 (jasny)
- `dark` - #1D1F23 (ciemny)

### Skala szarości
- `gray-light` - #CAD3D7 (jasny szary)
- `gray-mid` - #879AA4 (średni szary)
- `gray-dark` - #3E485A (ciemny szary)

### Użycie w Tailwind CSS
```css
/* Kolory tekstu */
.text-accent
.text-light
.text-gray-light
.text-gray-mid
.text-gray-dark
.text-dark

/* Kolory tła */
.bg-accent
.bg-light
.bg-gray-light
.bg-gray-mid
.bg-gray-dark
.bg-dark

/* Kolory ramek */
.border-accent
.border-light
.border-gray-light
.border-gray-mid
.border-gray-dark
.border-dark
```

## 📝 Czcionki - Responsywne

### PP Supply Mono (monospace) - Responsywne
- `fonts-mono-xs` - clamp(12px, 0.8vw, 16px) / clamp(15px, 1vw, 20px) / 2%
- `fonts-mono-m` - clamp(14px, 1vw, 20px) / clamp(17px, 1.25vw, 24px) / 2%
- `fonts-mono-l` - clamp(16px, 1.15vw, 22px) / clamp(19px, 1.35vw, 26px) / 0%

### Figtree (sans-serif) - Responsywne
- `fonts-fig-m` - clamp(24px, 1.875vw, 36px) / clamp(28px, 2.19vw, 42px) / 2%
- `fonts-fig-l` - clamp(36px, 3.385vw, 65px) / clamp(40px, 3.75vw, 72px) / -2.63px
- `fonts-fig-xl` - clamp(48px, 4.27vw, 82px) / clamp(54px, 4.9vw, 94px) / -2.63px
- `fonts-fig-xxl` - clamp(50px, 4.375vw, 84px) / clamp(56px, 5vw, 96px) / -2.63px

### Skalowanie czcionek
Wszystkie czcionki używają funkcji `clamp()` do responsywnego skalowania:
- **Mobile (375px)**: Minimalne rozmiary dla czytelności
- **Tablet (768px)**: Średnie rozmiary
- **Desktop (1920px)**: Maksymalne rozmiary z oryginalnej specyfikacji

### Użycie w Tailwind CSS
```css
.fonts-mono-xs
.fonts-mono-m
.fonts-mono-l
.fonts-fig-m
.fonts-fig-l
.fonts-fig-xl
.fonts-fig-xxl
```

## 🌈 Gradienty

### Gradienty podstawowe
- `gradient-light` - linear-gradient(0deg, #FDE10D 0%, #F4F5F6 100%)
- `gradient-dark` - linear-gradient(0deg, #3E485A 0%, #F4F5F6 100%)
- `gradient-full` - linear-gradient(0deg, #FDE10D 0%, #F4F5F6 50%, #3E485A 100%)

### Użycie w Tailwind CSS
```css
.bg-gradient-light
.bg-gradient-dark
.bg-gradient-full
```

## 📐 System Grid

### Grid 12 kolumn
- Margin: 20px
- Gutter: 20px

### Klasy grid
```css
.grid-system /* 12 kolumn z gap 20px i margin 20px */
.grid-col-1 /* span 1 kolumna */
.grid-col-2 /* span 2 kolumny */
.grid-col-3 /* span 3 kolumny */
.grid-col-4 /* span 4 kolumny */
.grid-col-5 /* span 5 kolumn */
.grid-col-6 /* span 6 kolumn */
.grid-col-7 /* span 7 kolumn */
.grid-col-8 /* span 8 kolumn */
.grid-col-9 /* span 9 kolumn */
.grid-col-10 /* span 10 kolumn */
.grid-col-11 /* span 11 kolumn */
.grid-col-12 /* span 12 kolumn */
```

## 🎯 Klasy pomocnicze

### Typografia - Responsywne
```css
.typography-heading-xl /* fonts-fig-xxl + colors-dark - responsywne */
.typography-heading-l /* fonts-fig-xl + colors-dark - responsywne */
.typography-heading-m /* fonts-fig-m + colors-dark - responsywne */
.typography-body-l /* fonts-mono-l + colors-gray-dark - responsywne */
.typography-body-m /* fonts-mono-m + colors-gray-dark - responsywne */
.typography-body-xs /* fonts-mono-xs + colors-gray-mid - responsywne */
.typography-caption /* fonts-mono-xs + colors-gray-light - responsywne */
```

### Przyciski - Responsywne
```css
.buttons-primary /* bg-accent + text-dark + fonts-mono-m - responsywne */
.buttons-secondary /* bg-gray-mid + text-dark + fonts-mono-m - responsywne */
.buttons-ghost /* transparent + text-gray-dark + fonts-mono-m - responsywne */
.buttons-accent /* bg-accent + text-dark + fonts-mono-m - responsywne */
```

### Karty - Responsywne
```css
.cards-default /* bg-light + border-gray-mid + rounded-[15px] - responsywne */
.cards-dark /* bg-gray-dark + border-gray-mid + rounded-[15px] - responsywne */
.cards-accent /* bg-accent + border-gray-mid + rounded-[15px] - responsywne */
```

## 🔧 Komponenty UI

### Button
```tsx
<Button variant="default" size="default">
  Tekst przycisku
</Button>

// Warianty: default, destructive, outline, secondary, ghost, link, accent
// Rozmiary: default, sm, lg, icon
```

### Card
```tsx
<Card>
  <CardHeader>
    <CardTitle>Tytuł karty</CardTitle>
    <CardDescription>Opis karty</CardDescription>
  </CardHeader>
  <CardContent>Treść karty</CardContent>
  <CardFooter>Stopka karty</CardFooter>
</Card>
```

## 📱 Responsywność

### Breakpointy
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Grid responsywny
- Mobile: wszystkie kolumny span 12
- Tablet: kolumny 1-6 span 6, kolumny 7-12 span 12
- Desktop: pełny grid 12 kolumn

### Czcionki responsywne
- **Mobile (375px)**: Minimalne rozmiary dla czytelności
- **Tablet (768px)**: Średnie rozmiary
- **Desktop (1920px)**: Maksymalne rozmiary z oryginalnej specyfikacji

## 🎨 Przykłady użycia

### Nagłówek sekcji - Responsywny
```tsx
<h2 className="fonts-fig-l text-gray-dark leading-tight">
  Tytuł sekcji
</h2>
```

### Tekst opisowy - Responsywny
```tsx
<p className="fonts-mono-m text-gray-light leading-relaxed">
  Opis sekcji
</p>
```

### Przycisk akcji - Responsywny
```tsx
<Button className="bg-accent hover:bg-accent/90 text-dark rounded-[16px] border border-gray-mid fonts-mono-m">
  Akcja
</Button>
```

### Karta z gradientem - Responsywna
```tsx
<Card className="bg-gradient-light rounded-[32px] border border-gray-mid">
  <CardContent>
    <h3 className="fonts-fig-m text-gray-dark">Tytuł</h3>
    <p className="fonts-mono-m text-gray-dark">Opis</p>
  </CardContent>
</Card>
```

## 📁 Struktura plików

```
src/
├── assets/
│   └── styles/
│       └── design-system.css    # Klasy pomocnicze z responsywnymi czcionkami
├── components/
│   ├── ui/
│   │   ├── button.tsx          # Komponent Button
│   │   └── card.tsx            # Komponent Card
│   └── sections/               # Sekcje z design system
├── tailwind.config.js          # Konfiguracja Tailwind z responsywnymi czcionkami
└── tailwind.css               # Import design system
```

## 🚀 Wdrożenie

1. Wszystkie komponenty zostały zaktualizowane do używania nowego design system
2. Kolory, czcionki i gradienty są spójne w całej aplikacji
3. System grid zapewnia responsywność
4. Klasy pomocnicze ułatwiają szybkie stylowanie
5. Komponenty UI są gotowe do użycia z design system
6. **Czcionki są w pełni responsywne i skalują się na wszystkich urządzeniach**

## 📝 Uwagi

- Zachowano kompatybilność wsteczną z istniejącymi klasami
- Wszystkie kolory są dostępne jako zmienne CSS
- **Czcionki używają clamp() do responsywnego skalowania**
- Gradienty zapewniają głębię wizualną
- System grid jest w pełni responsywny
- **Wszystkie elementy skalują się płynnie między breakpointami**
