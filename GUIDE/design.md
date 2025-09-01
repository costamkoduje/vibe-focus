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

### Użycie w Tailwind CSS (Kolory Ujednolicone)
```css
/* Kolory tekstu - ujednolicone */
.text-accent     /* #FDE10D - żółty akcent */
.text-light      /* #F4F5F6 - jasny szary */
.text-gray-light /* #CAD3D7 - jasny szary */
.text-gray-mid   /* #879AA4 - średni szary */
.text-gray-dark  /* #3E485A - ciemny szary */
.text-dark       /* #1D1F23 - prawie czarny */

/* Kolory tła - ujednolicone */
.bg-accent       /* #FDE10D - żółty akcent */
.bg-light        /* #F4F5F6 - jasny szary */
.bg-gray-light   /* #CAD3D7 - jasny szary */
.bg-gray-mid     /* #879AA4 - średni szary */
.bg-gray-dark    /* #3E485A - ciemny szary */
.bg-dark         /* #1D1F23 - prawie czarny */

/* Kolory ramek - ujednolicone */
.border-accent   /* #FDE10D - żółty akcent */
.border-light    /* #F4F5F6 - jasny szary */
.border-gray-light /* #CAD3D7 - jasny szary */
.border-gray-mid /* #879AA4 - średni szary */
.border-gray-dark /* #3E485A - ciemny szary */
.border-dark     /* #1D1F23 - prawie czarny */
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

## 📏 System Szerokości oparty na Kolumnach

### Przegląd
Zamiast używać stałych szerokości w pikselach (jak `max-w-xl`, `max-w-2xl`, `max-w-3xl`), możesz teraz używać szerokości opartych na systemie 12 kolumn.

### ⚠️ Ważne: Obliczenia uwzględniają gap'y
System automatycznie uwzględnia gap'y między kolumnami (`gap-5` = 20px), więc szerokości są dokładnie dopasowane do rzeczywistego gridu.

### Dostępne Klasy

#### Podstawowe klasy kolumn
- `max-w-col-1` do `max-w-col-12` - odpowiadają 1-12 kolumnom z systemu 12-kolumnowego

#### Odpowiedniki dla popularnych szerokości
- `max-w-col-l` = 2 kolumny (~17% szerokości)
- `max-w-col-xl` = 4 kolumny (~33% szerokości)
- `max-w-col-2xl` = 6 kolumn (~50% szerokości)  
- `max-w-col-3xl` = 8 kolumn (~67% szerokości)
- `max-w-col-4xl` = 10 kolumn (~83% szerokości)

### Responsywność

System automatycznie dostosowuje szerokości na różnych urządzeniach:

#### Mobile (≤768px)
- `max-w-col-l` = 8 kolumn (~67%)
- `max-w-col-xl` = 10 kolumn (~83%)
- `max-w-col-2xl` = 11 kolumn (~92%)
- `max-w-col-3xl` = 12 kolumn (100%)
- `max-w-col-4xl` = 12 kolumn (100%)

#### Tablet (769px-1024px)
- `max-w-col-l` = 4 kolumny (~33%)
- `max-w-col-xl` = 6 kolumn (~50%)
- `max-w-col-2xl` = 8 kolumn (~67%)
- `max-w-col-3xl` = 10 kolumn (~83%)
- `max-w-col-4xl` = 12 kolumn (100%)

#### Desktop (>1024px)
- `max-w-col-l` = 2 kolumny (~17%)
- `max-w-col-xl` = 4 kolumny (~33%)
- `max-w-col-2xl` = 6 kolumn (~50%)
- `max-w-col-3xl` = 8 kolumn (~67%)
- `max-w-col-4xl` = 10 kolumn (~83%)

### Przykłady Użycia

```tsx
// Zamiast:
<p className="max-w-xl">Tekst</p>
<h2 className="max-w-2xl">Nagłówek</h2>
<div className="max-w-3xl">Kontener</div>

// Używaj:
<p className="max-w-col-l">Mały tekst</p>
<p className="max-w-col-xl">Tekst</p>
<h2 className="max-w-col-2xl">Nagłówek</h2>
<div className="max-w-col-3xl">Kontener</div>
<div className="max-w-col-4xl">Duży kontener</div>
```

### Korzyści

1. **Spójność z systemem grid** - szerokości są powiązane z systemem 12 kolumn
2. **Dokładne dopasowanie** - uwzględnia gap'y między kolumnami (20px)
3. **Responsywność** - automatyczne dostosowanie na różnych urządzeniach
4. **Elastyczność** - łatwe dostosowanie szerokości do potrzeb projektu
5. **Przewidywalność** - szerokości są zawsze proporcjonalne do kontenera
6. **Brak wystawania** - tekst nie wystaje poza siatkę gridu

### Migracja

Aby zmigrować z `max-w-xl`, `max-w-2xl`, `max-w-3xl`:

1. Zamień `max-w-xl` na `max-w-col-xl`
2. Zamień `max-w-2xl` na `max-w-col-2xl`
3. Zamień `max-w-3xl` na `max-w-col-3xl`
4. Dodaj `max-w-col-l` dla małych elementów
5. Dodaj `max-w-col-4xl` dla dużych kontenerów

Wszystkie inne klasy `max-w-*` pozostają bez zmian.

### 🔧 Jak działają obliczenia

#### Formuła
```
max-width = (100% - (11 * gap)) / 12 * kolumny + ((kolumny - 1) * gap)
```

#### Przykłady obliczeń
```
max-w-col-l (2 kolumny): calc((100% - 220px) / 12 * 2 + 20px)   // 1 gap
max-w-col-xl (4 kolumny): calc((100% - 220px) / 12 * 4 + 60px)  // 3 gapy
max-w-col-2xl (6 kolumn): calc((100% - 220px) / 12 * 6 + 100px) // 5 gapów
max-w-col-3xl (8 kolumn): calc((100% - 220px) / 12 * 8 + 140px) // 7 gapów
max-w-col-4xl (10 kolumn): calc((100% - 220px) / 12 * 10 + 180px) // 9 gapów
```

#### Dlaczego to działa
- **220px**: Odejmujemy wszystkie gap'y między 12 kolumnami (11 * 20px = 220px)
- **/ 12**: Dzielimy przez liczbę kolumn
- *** kolumny**: Mnożymy przez liczbę kolumn, które chcemy zająć
- **+ (kolumny-1) * 20px**: Dodajemy gap'y między naszymi kolumnami

**Przykład dla 2 kolumn:**
- Szerokość kolumn: `(100% - 220px) / 12 * 2`
- Gap'y: `(2-1) * 20px = 20px`
- Razem: `calc((100% - 220px) / 12 * 2 + 20px)`

To zapewnia, że szerokość jest dokładnie taka sama jak w systemie grid CSS.

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
.cards-default /* bg-light + border-gray-mid + rounded-m - responsywne */
.cards-dark /* bg-gray-dark + border-gray-mid + rounded-m - responsywne */
.cards-accent /* bg-accent + border-gray-mid + rounded-m - responsywne */
```

### Rounded Classes - Ujednolicone
```css
.rounded-xs /* 12px - małe elementy (ikony, przyciski) */
.rounded-m /* 16px - dla 15px, 16px (karty, przyciski, inputy) */
.rounded-l /* 24px - dla 20px, 22px, 24px, 25px (sekcje, karty) */
.rounded-xl /* 32px - dla 32px, 34px, 40px (duże karty, sekcje) */
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
<Button className="bg-accent hover:bg-accent/90 text-dark rounded-m border border-gray-mid fonts-mono-m">
  Akcja
</Button>
```

### Karta z gradientem - Responsywna
```tsx
<Card className="bg-gradient-light rounded-xl border border-gray-mid">
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
7. **System szerokości kolumn zapewnia spójność z gridem**

## 📝 Uwagi

- Zachowano kompatybilność wsteczną z istniejącymi klasami
- Wszystkie kolory są dostępne jako zmienne CSS
- **Czcionki używają clamp() do responsywnego skalowania**
- Gradienty zapewniają głębię wizualną
- System grid jest w pełni responsywny
- **Wszystkie elementy skalują się płynnie między breakpointami**
- **System szerokości kolumn uwzględnia gap'y i zapewnia dokładne dopasowanie do gridu**
