<script lang="ts">
	import { slide } from 'svelte/transition';
	import type { Section } from '$lib/types/navigation';

	export let sections: Record<string, Section>;
	export let activeSection: string | null;
	export let toggleSection: (key: string) => void;
	export let closeNavPanel: () => void;
	export let handleSectionHover: (key: string, isEntering: boolean) => void;
</script>

<div class="mobile-navigation md:hidden">
	<!-- Mobile Header -->
	<div class="mb-8 pt-20 text-center">
		<img src="/voi-logo.svg" alt="Voi Logo" class="mx-auto mb-4 h-16" />
		<h1 class="font-display text-2xl font-bold">Ecosystem Portal</h1>
		<p class="mt-2 font-mono text-sm text-white/60">Explore the Voi ecosystem</p>
	</div>

	<!-- Mobile Section Cards -->
	<div class="grid gap-4 pb-12">
		{#each Object.entries(sections) as [key, section]}
			<div
				class="overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br
					{key === 'getting-started'
					? 'border-white/30 from-white/20 to-white/10 shadow-lg'
					: 'from-white/10 to-white/5'}"
			>
				<button
					class="w-full p-6 text-left transition-all active:scale-[0.98]"
					on:click={() => toggleSection(key)}
				>
					<div class="flex items-center gap-4">
						<div class="flex h-12 w-12 items-center justify-center rounded-lg bg-white/5">
							{@html section.icon}
						</div>
						<div class="flex-1">
							<h2 class="font-display text-xl font-bold {key === 'getting-started' ? 'text-white' : ''}">
								{section.title}
							</h2>
							<p class="mt-1 font-mono text-sm text-white/60">{section.description}</p>
						</div>
						<svg
							class="h-5 w-5 transform text-white/40 transition-transform duration-300 {activeSection === key
								? 'rotate-90'
								: ''}"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
						>
							<path d="M9 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
					</div>
				</button>

				{#if activeSection === key}
					<div class="border-t border-white/10 bg-white/5" transition:slide>
						<div class="grid gap-4 p-4">
							{#each Object.entries(section.subSections) as [subKey, subSection]}
								<a
									href={key === 'getting-started' && subKey === 'node-runners'
										? '/pages/getting-started/node-runners'
										: `/pages/${key.toLowerCase().replace(/([a-z])([A-Z])/g, '$1-$2')}/${subKey.toLowerCase()}`}
									class="group flex transform flex-col rounded-xl border border-white/10 bg-white/5 p-6 text-left transition-all duration-200 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10"
									on:click={closeNavPanel}
									on:mouseenter={() => handleSectionHover(key, true)}
									on:mouseleave={() => handleSectionHover(key, false)}
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
				{/if}
			</div>
		{/each}
	</div>
</div> 