<script lang="ts">
	export let href: string;
	export let label: string;
	export let description: string | undefined = undefined;
	export let external: boolean = false;
</script>

<a
	{href}
	target={external ? '_blank' : undefined}
	rel={external ? 'noopener noreferrer' : undefined}
	class="group flex items-center justify-between rounded-lg border border-white/10 bg-black/50 p-3 text-sm transition-all hover:border-purple-400/20 hover:bg-purple-400/10"
>
	<div class="flex flex-col">
		<span class="text-purple-400 group-hover:text-purple-300">{label}</span>
		{#if description}
			<span class="text-white/40">{description}</span>
		{/if}
	</div>
	<svg
		class="h-4 w-4 text-purple-400 transform transition-transform group-hover:translate-x-1"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
	>
		{#if external}
			<path
				d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		{:else}
			<path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" />
		{/if}
	</svg>
</a> 