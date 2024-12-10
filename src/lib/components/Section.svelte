<script lang="ts">
	export let title: string;
	export let icon: string | undefined = undefined;
	export let number: number | undefined = undefined;
</script>

<div class="rounded-xl border border-white/10 bg-white/5 p-6">
	<div class="mb-6">
		<h2 class="flex items-center gap-3 text-xl">
			{#if icon}
				{@html icon}
			{/if}
			{#if number !== undefined}
				<span>{number}. </span>
			{/if}
			{title}
		</h2>
	</div>
	<slot />
</div> 