<script lang="ts">
	export let name: string;
	export let handle: string;
	export let role: string;
	export let url: string;
	export let icon: string;
	export let color: string = 'twitter';
</script>

<a
	href={url}
	target="_blank"
	rel="noopener noreferrer"
	class="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:border-{color}-400/20 hover:bg-{color}-400/5"
>
	<div
		class="flex h-10 w-10 items-center justify-center rounded-full border border-{color}-400/20 bg-{color}-400/10"
	>
		<div class="text-{color}-400">
			{@html icon}
		</div>
	</div>
	<div>
		<div class="font-display text-lg">{handle}</div>
		<div class="text-sm text-white/60">{role}</div>
	</div>
</a> 