'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { pl } from './locales/pl';
import { en } from './locales/en';
import type { Translations } from './translations';

type Language = 'pl' | 'en';

interface I18nStore {
  language: Language;
  translations: Translations;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  pl,
  en,
};

export const useI18n = create<I18nStore>()(
  persist(
    (set, get) => ({
      language: 'pl',
      translations: pl,
      setLanguage: (lang: Language) => {
        set({ language: lang, translations: translations[lang] });
      },
      t: (key: string) => {
        const { translations } = get();
        if (!translations) {
          return key;
        }
        const keys = key.split('.');
        let value: unknown = translations;
        
        for (const k of keys) {
          if (value && typeof value === 'object' && k in (value as Record<string, unknown>)) {
            value = (value as Record<string, unknown>)[k];
          } else {
            return key;
          }
        }
        
        return typeof value === 'string' ? value : key;
      },
    }),
    {
      name: 'i18n-storage',
    }
  )
);

// Hook do łatwego dostępu do tłumaczeń
export const useTranslation = () => {
  const { translations, language, setLanguage, t } = useI18n();
  
  return {
    t,
    language,
    setLanguage,
    translations,
  };
};

// Funkcja pomocnicza do przełączania języka
export const toggleLanguage = () => {
  if (typeof window === 'undefined') return 'pl';
  
  const { language, setLanguage } = useI18n.getState();
  const newLang = language === 'pl' ? 'en' : 'pl';
  setLanguage(newLang);
  return newLang;
};

// Funkcja do czyszczenia cache i resetowania tłumaczeń
export const clearI18nCache = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('i18n-storage');
    window.location.reload();
  }
};
