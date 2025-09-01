# FocusElectro - Strona Internetowa

Nowoczesna strona internetowa dla firmy FocusElectro, zbudowana przy użyciu Next.js 14, TypeScript i Tailwind CSS.

## 🚀 Funkcje

- **Responsywny design** - Strona działa na wszystkich urządzeniach
- **Wielojęzyczność** - Wsparcie dla języka polskiego i angielskiego
- **Nowoczesny UI** - Animacje i interaktywne elementy
- **Optymalizacja SEO** - Przyjazne dla wyszukiwarek
- **Szybkie ładowanie** - Zoptymalizowane obrazy i kod

## 🛠️ Technologie

- **Next.js 14** - Framework React
- **TypeScript** - Typowanie statyczne
- **Tailwind CSS** - Stylowanie
- **Framer Motion** - Animacje
- **React Hook Form** - Formularze
- **Zod** - Walidacja

## 📁 Struktura Projektu

```
src/
├── app/                 # App Router (Next.js 14)
│   ├── (pages)/        # Strony aplikacji
│   │   ├── about/      # O nas
│   │   ├── career/     # Kariera
│   │   ├── contact/    # Kontakt
│   │   ├── cooperation/# Współpraca
│   │   └── projects/   # Projekty
│   ├── globals.css     # Globalne style
│   ├── layout.tsx      # Główny layout
│   └── page.tsx        # Strona główna
├── components/         # Komponenty React
│   ├── features/       # Komponenty funkcjonalne
│   ├── layout/         # Komponenty layoutu
│   ├── providers/      # Provider'y React
│   ├── shared/         # Współdzielone komponenty
│   └── ui/            # Podstawowe komponenty UI
└── lib/               # Narzędzia i konfiguracja
    ├── i18n.ts        # Konfiguracja internacjonalizacji
    ├── locales/       # Pliki tłumaczeń
    └── utils.ts       # Funkcje pomocnicze
```

## 🚀 Uruchomienie

1. **Instalacja zależności:**
```bash
npm install
```

2. **Uruchomienie serwera deweloperskiego:**
```bash
npm run dev
```

3. **Otwórz [http://localhost:3000](http://localhost:3000)** w przeglądarce

## 📦 Skrypty

- `npm run dev` - Serwer deweloperski
- `npm run build` - Budowanie produkcyjne
- `npm run start` - Uruchomienie produkcyjne
- `npm run lint` - Sprawdzenie kodu

## 🌐 Wdrożenie

Projekt jest gotowy do wdrożenia na:
- **Vercel** (zalecane)
- **Netlify**
- **Docker** (Dockerfile dostępny)

## 📝 Licencja

Projekt jest własnością FocusElectro.

## 🤝 Kontakt

W przypadku pytań lub problemów, skontaktuj się z zespołem deweloperskim.
