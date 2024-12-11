<script lang="ts">
	export let text: string;
	export let label: string = 'Copy';

	const copyToClipboard = () => {
		navigator.clipboard.writeText(text);
	};
</script>

<button
	on:click={copyToClipboard}
	class="ml-4 flex items-center rounded-lg border border-white/10 bg-white/5 px-2 sm:px-3 py-2 text-sm text-white/60 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white/80"
>
	<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
		<path
			d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
	<span class="hidden sm:inline ml-2">{label}</span>
</button> 