<script lang="ts">
	export let stepNumber: number;
	export let title: string;
	export let description: string | undefined = undefined;
	export let icon: string;
</script>

<section
	class="rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:border-purple-400/20"
>
	<div class="mb-6">
		<div class="flex items-center gap-3">
			<div
				class="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-400/10 text-purple-400"
			>
				{@html icon}
			</div>
			<div>
				<h2 class="flex items-center gap-3 text-2xl">
					<span class="font-mono text-purple-400/60">{stepNumber}.</span>
					<span>{title}</span>
				</h2>
				{#if description}
					<p class="mt-2 text-white/60">{description}</p>
				{/if}
			</div>
		</div>
	</div>
	<slot />
</section>
