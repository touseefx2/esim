import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

// Import translations
import en from './locales/en.json';
import ur from './locales/ur.json';
import fr from './locales/fr.json';

// Detect the device's language
const fallbackLanguage = 'en';
const deviceLanguage =
  RNLocalize.getLocales()[0]?.languageCode || fallbackLanguage;

i18n.use(initReactI18next).init({
  resources: {
    en: {translation: en},
    ur: {translation: ur},
    fr: {translation: fr},
  },
  lng: deviceLanguage,
  fallbackLng: fallbackLanguage,
  interpolation: {
    escapeValue: false, // React already protects against XSS
  },
});

export default i18n;
