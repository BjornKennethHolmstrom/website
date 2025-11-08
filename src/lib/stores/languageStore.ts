import { writable, derived } from 'svelte/store';
import { aboutTranslations } from '../i18n/translations/about';
import { coreTranslations } from '../i18n/translations/core';
import { booksTranslations } from '../i18n/translations/books';
import { whitepapersTranslations } from '../i18n/translations/whitepapers';
import { appsTranslations } from '../i18n/translations/apps';
import { creationsTranslations } from '../i18n/translations/creations';
import { conceptsTranslations } from '../i18n/translations/concepts';

// 1. Check if we are in a browser environment
const isBrowser = typeof window !== 'undefined';

// 2. Get the saved language from localStorage, or default to 'en'
function getInitialLanguage(): 'en' | 'sv' {
	if (!isBrowser) {
		return 'en'; // Default for SSR/prerendering
	}
	const storedLang = window.localStorage.getItem('language');
	if (storedLang === 'sv') {
		return 'sv';
	}
	return 'en';
}

// 3. Set the initial value of the store
const initialLang = getInitialLanguage();
export const language = writable<'en' | 'sv'>(initialLang);

// 4. Create a subscription that saves to localStorage on change
if (isBrowser) {
	language.subscribe((value) => {
		window.localStorage.setItem('language', value);
	});
}

// --- END OF NEW LOGIC ---

export function toggleLanguage() {
	language.update((lang) => (lang === 'en' ? 'sv' : 'en'));
}

const translations = {
	en: {
		...aboutTranslations.en,
		...coreTranslations.en,
		...booksTranslations.en,
		...whitepapersTranslations.en,
		...appsTranslations.en,
		...creationsTranslations.en,
		...conceptsTranslations.en
	},
	sv: {
		...aboutTranslations.sv,
		...coreTranslations.sv,
		...booksTranslations.sv,
		...whitepapersTranslations.sv,
		...appsTranslations.sv,
		...creationsTranslations.sv,
		...conceptsTranslations.sv
	}
};

export const t = derived(language, ($lang) => translations[$lang]);
