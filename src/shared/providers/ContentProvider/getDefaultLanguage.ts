import { Language } from './types';

export function getDefaultLanguage(): Language {
  const availableLanguages = Object.values(Language);

  const browserLanguage = navigator.language;

  const preferredLanguage = localStorage.getItem('@frgiovanna:preferred-language') as Language;

  if (preferredLanguage && availableLanguages.includes(preferredLanguage)) {
    return preferredLanguage;
  }

  const defaultLanguage = availableLanguages.find((language) => language.startsWith(browserLanguage));

  return defaultLanguage ?? Language.pt;
}
