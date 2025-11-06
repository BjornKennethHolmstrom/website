import { writable, derived } from 'svelte/store';
import { aboutTranslations } from '../i18n/translations/about';
import { coreTranslations } from '../i18n/translations/core';
import { booksTranslations } from '../i18n/translations/books';
import { whitepapersTranslations } from '../i18n/translations/whitepapers';

export const language = writable<'en' | 'sv'>('en');

export function toggleLanguage() {
	language.update((lang) => (lang === 'en' ? 'sv' : 'en'));
}

const translations = {
  en: { ...aboutTranslations.en, ...coreTranslations.en, ...booksTranslations.en, ...whitepapersTranslations.en },
  sv: { ...aboutTranslations.sv, ...coreTranslations.sv, ...booksTranslations.sv, ...whitepapersTranslations.sv }
};

export const t = derived(language, ($lang) => translations[$lang]);
