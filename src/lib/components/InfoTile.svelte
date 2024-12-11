<script lang="ts">
	export let title: string;
	export let description: string;
	export let icon: string | undefined = undefined;
	export let variant: 'default' | 'dark' = 'default';
</script>

<div class="h-full rounded-lg border border-white/10 {variant === 'dark' ? 'bg-black/30' : 'bg-white/5'} p-4">
	<div class="flex h-full flex-col">
		{#if $$slots.header}
			<div class="mb-4">
				<slot name="header" />
			</div>
		{:else if icon}
			<div class="mb-4 w-fit rounded-lg bg-purple-400/10 p-2">
				{@html icon}
			</div>
		{/if}
		<h3 class="font-display text-lg">{title}</h3>
		<p class="mt-2 text-sm text-white/60">{description}</p>
		{#if $$slots.default}
			<div class="mt-auto pt-4">
				<slot />
			</div>
		{/if}
		{#if $$slots.footer}
			<div class="mt-auto pt-4">
				<slot name="footer" />
			</div>
		{/if}
	</div>
</div> 