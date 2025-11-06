<script lang="ts">
	import { t, language } from '$lib/stores/languageStore';

	let formStatus: 'idle' | 'submitting' | 'success' | 'error' = 'idle';
</script>

<svelte:head>
	<title>{$t.contact.meta.title}</title>
	<meta name="description" content="{$t.contact.meta.description}" />
</svelte:head>

<section class="bg-slate-900 py-16 text-center text-white md:py-24">
	<div class="mx-auto max-w-3xl px-4">
		<h1
			class="mb-4 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl"
		>
			{$t.contact.hero.title}
		</h1>
		<p class="text-lg text-slate-300 sm:text-xl">
			{$t.contact.hero.subtitle}
		</p>
	</div>
</section>

<section class="mx-auto max-w-4xl px-4 py-16 md:py-24">
	<div class="grid gap-12 md:grid-cols-2">
		<div>
			{#if formStatus === 'success'}
				<div
					class="rounded-lg border border-green-300 bg-green-50 p-6 dark:border-green-800 dark:bg-green-900/20"
				>
					<h3 class="mb-2 text-xl font-semibold text-green-800 dark:text-green-200">
						{$t.contact.form.successTitle}
					</h3>
					<p class="text-green-700 dark:text-green-300">
						{$t.contact.form.successMessage}
					</p>
					<button
						on:click={() => (formStatus = 'idle')}
						class="mt-4 text-sm font-medium text-green-700 underline hover:no-underline dark:text-green-300"
					>
						{$t.contact.form.sendAnother}
					</button>
				</div>
			{:else if formStatus === 'error'}
				<div
					class="rounded-lg border border-red-300 bg-red-50 p-6 dark:border-red-800 dark:bg-red-900/20"
				>
					<h3 class="mb-2 text-xl font-semibold text-red-800 dark:text-red-200">
						{$t.contact.form.errorTitle}
					</h3>
					<p class="text-red-700 dark:text-red-300">
						{$t.contact.form.errorMessage}
					</p>
					<button
						on:click={() => (formStatus = 'idle')}
						class="mt-4 text-sm font-medium text-red-700 underline hover:no-underline dark:text-red-300"
					>
						{$t.contact.form.tryAgain}
					</button>
				</div>
			{:else}
				<form
					method="POST"
					action="https://formspree.io/f/YOUR_FORM_ID"
					class="space-y-6"
					on:submit={() => (formStatus = 'submitting')}
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
							class="w-full rounded-md border-[var(--color-separator)] bg-white p-3 text-[var(--color-page-text)] focus:border-[var(--color-page-accent)] focus:ring-[var(--color-page-accent)] dark:bg-slate-800"
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
							class="w-full rounded-md border-[var(--color-separator)] bg-white p-3 text-[var(--color-page-text)] focus:border-[var(--color-page-accent)] focus:ring-[var(--color-page-accent)] dark:bg-slate-800"
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
							class="w-full rounded-md border-[var(--color-separator)] bg-white p-3 text-[var(--color-page-text)] focus:border-[var(--color-page-accent)] focus:ring-[var(--color-page-accent)] dark:bg-slate-800"
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
				class="rounded-lg border border-[var(--color-separator)] bg-white p-6 dark:bg-slate-800"
			>
				<h3 class="mb-4 text-xl font-semibold text-[var(--color-page-text)]">
					{$t.contact.info.title}
				</h3>
				<p class="mb-4 text-[var(--color-page-text)] opacity-80">
					{$t.contact.info.description}
				</p>
				<div class="space-y-3">
					<a
						href="https://github.com/BjornKennethHolmstrom"
						target="_blank"
						rel="noopener"
						class="flex items-center gap-3 text-[var(--color-page-text)] transition-colors hover:text-[var(--color-page-accent)]"
					>
						<span>{$t.contact.info.github}</span>
					</a>
					<span class="block text-[var(--color-page-text)] opacity-50">
						{$t.contact.info.discord} (Snart)
					</span>
					<a
						href="mailto:bjorn.kenneth.holmstrom@gmail.com"
						class="flex items-center gap-3 text-[var(--color-page-text)] transition-colors hover:text-[var(--color-page-accent)]"
					>
						<span>{$t.contact.info.email}</span>
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
