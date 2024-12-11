<script lang="ts">
	import { fade, scale } from 'svelte/transition';
	import type { Section } from '$lib/types/navigation';

	export let activeSection: string | null;
	export let sections: Record<string, Section>;
	export let onClose: () => void;
	export let onSectionHover: (key: string, isEntering: boolean) => void;
	export let closeNavPanel: () => void;
</script>

<div
	class="fixed inset-0 z-50 flex items-center justify-center p-4"
	transition:fade={{ duration: 200 }}
	on:click|self={onClose}
>
	<div class="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
	<div
		class="relative w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/10 bg-gradient-to-br from-voi-dark to-black/90 p-8 shadow-2xl"
		transition:scale={{ duration: 200 }}
	>
		<div class="mb-8 flex items-start justify-between">
			<div class="flex items-center gap-4">
				<div class="flex h-12 w-12 items-center justify-center rounded-lg bg-white/5">
					{@html sections[activeSection].icon}
				</div>
				<div>
					<h2 class="font-display text-3xl font-bold">
						{sections[activeSection].title}
					</h2>
					<p class="mt-2 font-mono text-sm text-white/60">
						{sections[activeSection].description}
					</p>
				</div>
			</div>
			<button
				class="rounded-lg p-2 transition-colors hover:bg-white/10"
				on:click={onClose}
			>
				<svg
					class="h-6 w-6"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
				>
					<path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</button>
		</div>
		<div class="grid gap-4">
			{#each Object.entries(sections[activeSection].subSections) as [subKey, subSection]}
				<a
					href={activeSection === 'getting-started' && subKey === 'node-runners'
						? '/pages/getting-started/node-runners'
						: `/pages/${activeSection.toLowerCase().replace(/([a-z])([A-Z])/g, '$1-$2')}/${subKey.toLowerCase()}`}
					class="group flex transform flex-col rounded-xl border border-white/10 bg-white/5 p-6 text-left transition-all duration-200 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10"
					on:click={closeNavPanel}
					on:mouseenter={() => onSectionHover(activeSection, true)}
					on:mouseleave={() => onSectionHover(activeSection, false)}
				>
					<h3 class="font-display text-xl font-bold">{subSection.title}</h3>
					<p class="mt-2 font-mono text-sm text-white/60">{subSection.description}</p>
					<div class="mt-4 flex items-center font-mono text-sm text-white/40">
						<span>Learn More</span>
						<svg
							class="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								d="M5 12h14M12 5l7 7-7 7"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</div>
				</a>
			{/each}
		</div>
	</div>
</div> 