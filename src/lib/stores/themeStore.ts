import { writable } from 'svelte/store';

// Hjälpfunktion för att hantera SvelteKit SSR (Server-Side Rendering)
function createPersistentStore(key: string, startValue: 'dark' | 'light') {
	if (typeof window === 'undefined') {
		// Om vi är på servern, returnera bara en enkel store
		return writable(startValue);
	}

	// Om vi är i webbläsaren, hämta från localStorage
	const savedValue = window.localStorage.getItem(key);
	const store = writable(savedValue || startValue);

	// Prenumerera på ändringar och spara i localStorage
	store.subscribe((value) => {
		window.localStorage.setItem(key, value);
	});

	return store;
}

export const theme = createPersistentStore('theme', 'light');

export function toggleTheme() {
	theme.update((t) => (t === 'light' ? 'dark' : 'light'));
}
