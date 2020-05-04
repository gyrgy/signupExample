import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { translationEn } from 'src/locales/en';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translations: {
        ...translationEn,
      },
    },
  },
  fallbackLng: 'en',
  interpolation: {
    escapeValue: true,
  },
  ns: ['translations'],
  defaultNS: 'translations',
});

export const t = (key: string, props?: object): string => i18n.t(key, props);
