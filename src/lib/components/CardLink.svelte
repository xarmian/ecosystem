<script lang="ts">
	export let href: string;
	export let title: string;
	export let description: string;
	export let external: boolean = false;
	export let actionText: string = 'Learn More';
	export let highlight: boolean = false;
</script>

<a
	{href}
	target={external ? '_blank' : undefined}
	rel={external ? 'noopener noreferrer' : undefined}
	class="group flex transform flex-col rounded-xl border border-white/10 {highlight ? 'bg-gradient-to-br from-white/10 to-transparent' : 'bg-white/5'} p-6 transition-all duration-200 hover:scale-[1.02] hover:border-purple-400/20 hover:bg-purple-400/10"
>
	<h3 class="font-display text-xl font-bold text-purple-400 group-hover:text-purple-300">{title}</h3>
	<p class="mt-2 font-mono text-sm text-white/60">{description}</p>
	<div class="mt-4 flex items-center font-mono text-sm text-white/40 group-hover:text-purple-400/60">
		<span>{actionText}</span>
		<svg
			class="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
		>
			<path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" />
		</svg>
	</div>
</a> 