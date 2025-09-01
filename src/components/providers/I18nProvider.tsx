'use client';

import React from 'react';
import { useI18n } from '@/lib/i18n';

interface I18nProviderProps {
  children: React.ReactNode;
}

export const I18nProvider: React.FC<I18nProviderProps> = ({ children }) => {
  // Inicjalizacja i18n store
  useI18n();
  
  return <>{children}</>;
};
