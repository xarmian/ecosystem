<script lang="ts">
	export let isOpen: boolean = false;
</script>

<button
	class="fixed right-4 top-4 z-[60] flex h-12 w-[120px] items-center justify-center rounded-lg border border-white/10 bg-black/50 backdrop-blur-md transition-all hover:border-purple-400/20 hover:bg-purple-400/10 group"
	aria-label="Toggle ecosystem navigation"
	on:click
>
	<div class="flex items-center">
		<span class="font-display text-sm font-medium text-purple-400 group-hover:text-purple-300 w-[48px] text-center">
			{isOpen ? 'Close' : 'Portal'}
		</span>
		<svg
			class="ml-2 h-4 w-4 text-purple-400 transform transition-transform group-hover:text-purple-300 {isOpen ? '-rotate-180' : ''}"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
		>
			<path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" />
		</svg>
	</div>
</button> 