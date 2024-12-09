<script lang="ts">
	export let title: string;
	export let description: string;
</script>

<div class="container mx-auto px-4 py-12">
	<!-- Header -->
	<header class="mb-12">
		<h1 class="mb-4 font-display text-4xl font-bold">{title}</h1>
		<p class="max-w-3xl font-mono text-lg text-white/60">{description}</p>
	</header>

	<!-- Main Content -->
	<div class="prose prose-invert max-w-none">
		<slot />
	</div>

	<!-- Related Links -->
	<div class="mt-16 border-t border-white/10 pb-16 pt-8">
		<h2 class="mb-8 font-display text-2xl font-bold">Related Resources</h2>
		<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
			<slot name="related" />
		</div>
	</div>
</div>

<style>
	/* Add custom prose styles for markdown content */
	:global(.prose) {
		@apply text-white/80;
	}

	:global(.prose strong) {
		@apply text-white;
	}

	:global(.prose a) {
		@apply text-voi-light hover:text-white;
	}

	:global(.prose h2) {
		@apply mt-12 font-display text-white first:mt-0;
	}

	:global(.prose h3) {
		@apply font-display text-white;
	}

	:global(.prose code) {
		@apply rounded bg-white/10 px-1.5 py-0.5 text-white;
	}

	:global(.prose pre) {
		@apply border border-white/10 bg-white/5;
	}

	:global(.prose blockquote) {
		@apply border-l-4 border-voi-light bg-white/5 px-6 py-4;
	}

	:global(.prose ul) {
		@apply space-y-2;
	}

	:global(.prose table) {
		@apply border-white/10;
	}

	:global(.prose th) {
		@apply bg-white/5 text-white;
	}

	:global(.prose td) {
		@apply border-white/10;
	}
</style>
