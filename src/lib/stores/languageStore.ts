import { writable, derived } from 'svelte/store';
import { aboutTranslations } from '../i18n/translations/about';
import { coreTranslations } from '../i18n/translations/core';
import { booksTranslations } from '../i18n/translations/books';
import { whitepapersTranslations } from '../i18n/translations/whitepapers';
import { appsTranslations } from '../i18n/translations/apps'; // ← ADD THIS IMPORT

export const language = writable<'en' | 'sv'>('en');

export function toggleLanguage() {
	language.update((lang) => (lang === 'en' ? 'sv' : 'en'));
}

const translations = {
  en: { 
    ...aboutTranslations.en, 
    ...coreTranslations.en, 
    ...booksTranslations.en, 
    ...whitepapersTranslations.en,
    ...appsTranslations.en
  },
  sv: { 
    ...aboutTranslations.sv, 
    ...coreTranslations.sv, 
    ...booksTranslations.sv, 
    ...whitepapersTranslations.sv,
    ...appsTranslations.sv
  }
};

export const t = derived(language, ($lang) => translations[$lang]);
