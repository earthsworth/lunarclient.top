import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslations from './locales/en.json';
import zhTranslations from './locales/zh.json';
import esTranslations from './locales/es.json';
import deTranslations from './locales/de.json';
import jaTranslations from './locales/ja.json';
import frTranslations from './locales/fr.json';

const resources = {
    en: { translation: enTranslations },
    zh: { translation: zhTranslations },
    es: { translation: esTranslations },
    de: { translation: deTranslations },
    ja: { translation: jaTranslations },
    fr: { translation: frTranslations }
};

const options = {
    order: ['querystring', 'navigator'],
    lookupQuerystring: 'lng'
};

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        detection: options,
        resources,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;