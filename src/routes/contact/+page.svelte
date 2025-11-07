<!-- src/routes/contact/+page.svelte -->
<script lang="ts">
	import { t, language } from '$lib/stores/languageStore';
 import SEO from '$lib/components/SEO.svelte';

	let formStatus: 'idle' | 'submitting' | 'success' | 'error' = 'idle';
</script>

<SEO
	title={$t.contact.meta.title}
	description={$t.contact.meta.description}
	keywords="systems thinking, consciousness development, holistic solutions, Björn Kenneth Holmström, contact, polycrisis"
/>

<svelte:head>
	<title>{$t.contact.meta.title}</title>
	<meta name="description" content="{$t.contact.meta.description}" />
</svelte:head>

<section class="bg-[var(--color-bg-dark)] py-16 text-center text-white md:py-24">
	<div class="mx-auto max-w-3xl px-4">
		<h1
			class="mb-4 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl"
		>
			{$t.contact.hero.title}
		</h1>
		<p class="text-lg opacity-80 sm:text-xl">
			{$t.contact.hero.subtitle}
		</p>
	</div>
</section>

<section class="mx-auto max-w-4xl px-4 py-16 md:py-24">
	<div class="grid gap-12 md:grid-cols-2">
		<div>
			{#if formStatus === 'success'}
				<div
					class="rounded-lg border border-green-300 bg-green-50 p-6"
					style="--success-border: #22c55e; --success-bg: #f0fdf4; --success-text: #166534;"
				>
					<h3 class="mb-2 text-xl font-semibold text-[var(--success-text)]">
						{$t.contact.form.successTitle}
					</h3>
					<p class="text-[var(--success-text)] opacity-90">
						{$t.contact.form.successMessage}
					</p>
					<button
						onclick={() => (formStatus = 'idle')}
						class="mt-4 text-sm font-medium text-[var(--success-text)] underline hover:no-underline"
					>
						{$t.contact.form.sendAnother}
					</button>
				</div>
			{:else if formStatus === 'error'}
				<div
					class="rounded-lg border border-red-300 bg-red-50 p-6"
					style="--error-border: #ef4444; --error-bg: #fef2f2; --error-text: #991b1b;"
				>
					<h3 class="mb-2 text-xl font-semibold text-[var(--error-text)]">
						{$t.contact.form.errorTitle}
					</h3>
					<p class="text-[var(--error-text)] opacity-90">
						{$t.contact.form.errorMessage}
					</p>
					<button
						onclick={() => (formStatus = 'idle')}
						class="mt-4 text-sm font-medium text-[var(--error-text)] underline hover:no-underline"
					>
						{$t.contact.form.tryAgain}
					</button>
				</div>
			{:else}
				<form
					method="POST"
					action="https://formspree.io/f/mrbonjzb"
					class="space-y-6"
					onsubmit={() => (formStatus = 'submitting')}
				>
					<div>
						<label
							for="name"
							class="mb-2 block text-sm font-medium text-[var(--color-page-text)] opacity-80"
						>
							{$t.contact.form.name}
						</label>
						<input
							type="text"
							id="name"
							name="name"
							required
							placeholder={$t.contact.form.namePlaceholder}
							class="w-full rounded-md border border-[var(--color-separator)] bg-[var(--color-card-bg)] p-3 text-[var(--color-card-text)] focus:border-[var(--color-page-accent)] focus:ring-[var(--color-page-accent)]"
						/>
					</div>
					<div>
						<label
							for="email"
							class="mb-2 block text-sm font-medium text-[var(--color-page-text)] opacity-80"
						>
							{$t.contact.form.email}
						</label>
						<input
							type="email"
							id="email"
							name="email"
							required
							placeholder={$t.contact.form.emailPlaceholder}
							class="w-full rounded-md border border-[var(--color-separator)] bg-[var(--color-card-bg)] p-3 text-[var(--color-card-text)] focus:border-[var(--color-page-accent)] focus:ring-[var(--color-page-accent)]"
						/>
					</div>
					<div>
						<label
							for="message"
							class="mb-2 block text-sm font-medium text-[var(--color-page-text)] opacity-80"
						>
							{$t.contact.form.message}
						</label>
						<textarea
							id="message"
							name="message"
							required
							rows="6"
							placeholder={$t.contact.form.messagePlaceholder}
							class="w-full rounded-md border border-[var(--color-separator)] bg-[var(--color-card-bg)] p-3 text-[var(--color-card-text)] focus:border-[var(--color-page-accent)] focus:ring-[var(--color-page-accent)]"
						></textarea>
					</div>
					<button
						type="submit"
						disabled={formStatus === 'submitting'}
						class="w-full rounded-md bg-[var(--color-page-accent)] px-6 py-3 text-lg font-medium text-white transition-opacity hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50"
					>
						{formStatus === 'submitting' ? $t.contact.form.submitting : $t.contact.form.submit}
					</button>
				</form>
			{/if}
		</div>

		<div class="space-y-6">
			<div
				class="rounded-lg border border-[var(--color-separator)] bg-[var(--color-card-bg)] p-6"
			>
				<h3 class="mb-4 text-xl font-semibold text-[var(--color-card-text)]">
					{$t.contact.info.title}
				</h3>
				<p class="mb-4 text-[var(--color-card-text)] opacity-80">
					{$t.contact.info.description}
				</p>
				<div class="space-y-3">
					<a
						href="https://github.com/BjornKennethHolmstrom"
						target="_blank"
						rel="noopener"
						class="flex items-center gap-3 text-[var(--color-card-text)] transition-colors hover:text-[var(--color-page-accent)]"
					>
						<span>{$t.contact.info.github}</span>
					</a>
					<span class="block text-[var(--color-card-text)] opacity-50">
						{$t.contact.info.discord} ({$t.contact.info.soon})
					</span>
					<a
						href="mailto:bjorn.kenneth.holmstrom@gmail.com"
						class="flex items-center gap-3 text-[var(--color-card-text)] transition-colors hover:text-[var(--color-page-accent)]"
					>
						<span>{$t.contact.info.email}</span>
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
