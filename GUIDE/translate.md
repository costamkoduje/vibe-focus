# Plan tłumaczeń Focus Electro

## Cel
Dodanie obsługi wielojęzyczności do strony Focus Electro z polskiego na angielski.

## Struktura plików tłumaczeń

```
src/
├── lib/
│   ├── translations.ts      # Interfejsy TypeScript
│   ├── i18n.ts             # Hook do zarządzania językiem
│   └── locales/
│       ├── pl.ts           # Polskie teksty
│       └── en.ts           # Angielskie tłumaczenia
```

## Etap 1: Struktura i podstawy

### 1.1 Stworzenie interfejsów TypeScript
- Utworzenie `src/lib/translations.ts` z interfejsami dla wszystkich sekcji
- Definicja typów dla tłumaczeń

### 1.2 Stworzenie hooka i18n
- Utworzenie `src/lib/i18n.ts` z hookiem `useTranslation`
- Zarządzanie stanem języka (PL/EN)
- Funkcje do przełączania języka

### 1.3 Stworzenie plików lokalizacji
- `src/lib/locales/pl.ts` - wszystkie polskie teksty
- `src/lib/locales/en.ts` - wszystkie angielskie tłumaczenia

## Etap 2: Tłumaczenie sekcji po sekcji

### 2.1 Sekcja Hero (główna strona)
**Plik:** `src/components/sections/hero/HeroHome.tsx`
**Teksty do przeniesienia:**
- "Instalacje elektryczne i automatyka dla jednostek i obiektów morskich"
- "PRACUJ Z NAMI"
- "ROZPOCZNIJ WSPÓŁPRACĘ"
- "ZAPEWNIAMY KOMPLEKSOWE INSTALACJE ELEKTRYCZNE I AUTOMATYKĘ DLA STOCZNI ORAZ PRZEMYSŁU MORSKIEGO. JAKOŚĆ,TERMINOWOŚĆ, INNOWACJE – TO NASZA CODZIENNOŚĆ."

### 2.2 Sekcja About (o nas)
**Plik:** `src/components/sections/content/AboutSection.tsx`
**Teksty do przeniesienia:**
- Tytuły usług (5 pozycji)
- Opisy usług (5 pozycji)

### 2.3 Sekcja Process (proces)
**Plik:** `src/components/sections/content/ProcessSection.tsx`
**Teksty do przeniesienia:**
- "(NASZA FILOZOFIA PRACY)"
- "Elastyczni w działaniu, konsekwentni w jakości"
- Opis filozofii pracy
- Tytuły kroków procesu (3 pozycje)
- Opisy kroków procesu (3 pozycje)

### 2.4 Sekcja Projects (projekty)
**Plik:** `src/components/sections/ProjectsSection.tsx`
**Teksty do przeniesienia:**
- "[MAXIMIZING GROWTH THROUGH SYNERGIES]"
- "Realizacje projektów"
- Opis sekcji projektów
- Nazwy projektów (5 pozycji)
- Role w projektach (5 pozycji)

## Etap 3: Pozostałe sekcje

### 3.1 Sekcja Stats (statystyki)
**Plik:** `src/components/sections/StatsSection.tsx`
**Teksty do przeniesienia:**
- Opisy statystyk (6 pozycji)

### 3.2 Sekcja Call to Action
**Plik:** `src/components/sections/CallToActionSection.tsx`
**Teksty do przeniesienia:**
- "Z nami płyniesz zawsze z prądem."
- "Odkryj jak nasze doświadczenie może wspierać Twój sukces!"

### 3.3 Sekcja Footer
**Plik:** `src/components/sections/common/FooterSection.tsx`
**Teksty do przeniesienia:**
- "FOCUS ELECTRO"
- "DESIGN & DEV BY VIBECODING"

### 3.4 Sekcja Navigation
**Plik:** `src/components/ui/navigation.tsx`
**Teksty do przeniesienia:**
- "FOCUS ELECTRO"
- "HOME", "O NAS", "KARIERA", "WSPÓŁPRACA", "KONTAKT"
- "REALIZACJE"
- "REGISTRATION"
- "PL"

## Etap 4: Strony i sekcje

### 4.1 Strona About
**Pliki:** 
- `src/components/sections/hero/HeroAbout.tsx`
- `src/components/sections/TimelineSection.tsx`
- `src/components/sections/CareerSection.tsx`
- `src/components/sections/TeamSection.tsx`
- `src/components/sections/ProfessionalismSection.tsx`

### 4.2 Strona Career
**Pliki:**
- `src/components/sections/hero/HeroCareer.tsx`
- `src/components/sections/ValueSection.tsx`
- `src/components/sections/FilarSection.tsx`
- `src/components/sections/DarkImageSection.tsx`
- `src/components/sections/StandardSection.tsx`

### 4.3 Strona Cooperation
**Pliki:**
- `src/components/sections/hero/HeroCooperation.tsx`
- `src/components/sections/CoWorkOptionsSection.tsx`
- `src/components/sections/ImageSection.tsx`
- `src/components/sections/ProjectsMapsSection.tsx`

### 4.4 Strona Contact
**Plik:** `src/components/sections/ContactHeroSection.tsx`

### 4.5 Strona Projects
**Pliki:**
- `src/components/sections/ProjectsMapsSection.tsx`
- `src/components/sections/ProjectsSection.tsx`
- `src/components/sections/ProjectsTableSection.tsx`

## Etap 5: Metadane i dane

### 5.1 Metadane stron
**Pliki:**
- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/app/(pages)/about/page.tsx`
- `src/app/(pages)/career/page.tsx`
- `src/app/(pages)/cooperation/page.tsx`
- `src/app/(pages)/contact/page.tsx`
- `src/app/(pages)/projects/page.tsx`

### 5.2 Dane CSV
**Plik:** `public/data/projects.csv`
- Tłumaczenie nazw projektów
- Tłumaczenie opisów prac

## Etap 6: Integracja i testy

### 6.1 Dodanie przełącznika języka
- Modyfikacja komponentu Navigation
- Dodanie przycisku zmiany języka
- Implementacja przełączania w hooku i18n

### 6.2 Testowanie
- Sprawdzenie wszystkich stron w obu językach
- Testowanie przełączania języka
- Sprawdzenie responsywności

### 6.3 Optymalizacja
- Optymalizacja wydajności
- Sprawdzenie SEO dla obu języków
- Finalne testy

## Priorytet implementacji

1. **Wysoki priorytet:**
   - Etap 1 (struktura)
   - Etap 2.1 (Hero)
   - Etap 2.2 (About)
   - Etap 3.4 (Navigation)

2. **Średni priorytet:**
   - Pozostałe sekcje z Etapu 2
   - Sekcje z Etapu 3
   - Strony z Etapu 4

3. **Niski priorytet:**
   - Metadane (Etap 5.1)
   - Dane CSV (Etap 5.2)
   - Optymalizacja (Etap 6.3)

## Uwagi techniczne

- Użycie TypeScript dla type safety
- Hook `useTranslation` dla łatwego zarządzania
- Struktura tłumaczeń podzielona na sekcje
- Zachowanie oryginalnego formatowania tekstów
- Uwzględnienie kontekstu branżowego (elektrotechnika morska)
