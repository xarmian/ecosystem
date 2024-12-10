<script lang="ts">
	export let title: string;
	export let description: string;
	export let icon: string | undefined = undefined;
	export let variant: 'default' | 'dark' = 'default';
</script>

<div class="rounded-lg border border-white/10 {variant === 'dark' ? 'bg-black/30' : 'bg-white/5'} p-4">
	<div class="flex flex-col">
		{#if icon}
			<div class="mb-4 rounded-lg bg-purple-400/10 p-2 w-fit">
				{@html icon}
			</div>
		{/if}
		<h3 class="font-display text-lg">{title}</h3>
		<p class="mt-2 text-sm text-white/60">{description}</p>
		{#if $$slots.default}
			<div class="mt-4">
				<slot />
			</div>
		{/if}
	</div>
</div> 