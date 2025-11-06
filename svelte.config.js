import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js'; // Importera din MDsveX-konfig

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions], // Från vår MDsveX-setup

	preprocess: [
		vitePreprocess(),
		mdsvex(mdsvexConfig) // Från vår MDsveX-setup
	],

	kit: {
		// Konfiguration för adapter-static (tagen från ditt exempel)
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		})
		// INGET 'paths.base' BEHÖVS HÄR
	}
};

export default config;
