<script lang="ts">
	export let title: string;
	export let description: string;
	export let href: string;
	export let external: boolean = false;
	export let actionText: string = 'Learn More';
	export let icon: string | undefined = undefined;
	export let variant: 'default' | 'dark' = 'default';
</script>

<a
	{href}
	class="group flex h-full transform flex-col rounded-xl border border-white/10 {variant === 'dark' ? 'bg-black/30' : 'bg-white/5'} p-6 transition-all duration-200 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10"
	target={external ? '_blank' : undefined}
	rel={external ? 'noopener noreferrer' : undefined}
>
	{#if icon}
		<div class="mb-4 w-fit rounded-lg bg-purple-400/10 p-2">
			{@html icon}
		</div>
	{/if}
	<h3 class="font-display text-xl font-bold">{title}</h3>
	<p class="mt-2 font-mono text-sm text-white/60">{description}</p>
	<div class="mt-auto pt-4 flex items-center font-mono text-sm text-white/40">
		<span>{actionText}</span>
		<svg
			class="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1"
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
	</div>
	{#if $$slots.default}
		<div class="mt-4">
			<slot />
		</div>
	{/if}
</a> 