<script lang="ts">
	import SubSectionTemplate from '$lib/components/SubSectionTemplate.svelte';
</script>

<SubSectionTemplate
	title="Vision"
	description="Our mission and goals"
>
	<div class="space-y-12">
		<!-- Core Vision Section -->
		<section class="rounded-2xl border border-white/10 bg-white/5 p-8">
			<div class="mb-6">
				<h2 class="flex items-center gap-3 text-2xl">
					<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M12 21a9 9 0 100-18 9 9 0 000 18z" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M12 3v18M3 12h18" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
					Built by You. Run by You. Owned by You.
				</h2>
			</div>

			<div class="prose prose-invert max-w-none">
				<p class="lead text-lg text-white/80">
					Welcome to Voi, a revolutionary L1 blockchain designed to fulfill the promises of Web3. Voi is a highly performant network truly owned, run, and built by its community. We believe in the power of decentralization, governance, and ownership, making blockchain technology accessible and beneficial for all.
				</p>

				<div class="mt-8 grid gap-6 md:grid-cols-3">
					<div class="rounded-xl border border-white/10 bg-white/5 p-6">
						<h3 class="mb-3 font-display text-xl">Built by You</h3>
						<p class="text-sm text-white/60">
							Community-driven development ensures Voi evolves based on real user needs, fostering innovation from the ground up.
						</p>
					</div>

					<div class="rounded-xl border border-white/10 bg-white/5 p-6">
						<h3 class="mb-3 font-display text-xl">Run by You</h3>
						<p class="text-sm text-white/60">
							Democratic governance empowers token holders to guide network direction through Council elections and key decisions.
						</p>
					</div>

					<div class="rounded-xl border border-white/10 bg-white/5 p-6">
						<h3 class="mb-3 font-display text-xl">Owned by You</h3>
						<p class="text-sm text-white/60">
							75% of tokens reserved for the community ensures those building the ecosystem benefit directly from its success.
						</p>
					</div>
				</div>
			</div>
		</section>

		<!-- Performance Section -->
		<section class="rounded-2xl border border-white/10 bg-white/5 p-8">
			<div class="mb-6">
				<h2 class="flex items-center gap-3 text-2xl">
					<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
					Highly Performant
				</h2>
			</div>

			<div class="prose prose-invert max-w-none">
				<div class="grid gap-6 md:grid-cols-4">
					<div class="rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6">
						<div class="font-display text-2xl font-bold text-voi-light">2.8s</div>
						<div class="mt-2 text-sm text-white/60">Block Time</div>
					</div>

					<div class="rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6">
						<div class="font-display text-2xl font-bold text-voi-light">10K+</div>
						<div class="mt-2 text-sm text-white/60">TPS Under Load</div>
					</div>

					<div class="rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6">
						<div class="font-display text-2xl font-bold text-voi-light">Instant</div>
						<div class="mt-2 text-sm text-white/60">Finality</div>
					</div>

					<div class="rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6">
						<div class="font-display text-2xl font-bold text-voi-light">Quantum</div>
						<div class="mt-2 text-sm text-white/60">Secure</div>
					</div>
				</div>

				<p class="mt-6 text-white/80">
					While these technical capabilities are impressive, we believe the true value of the network lies with the community. With you.
				</p>
			</div>
		</section>

		<!-- Values Section -->
		<section class="rounded-2xl border border-white/10 bg-white/5 p-8">
			<div class="mb-6">
				<h2 class="flex items-center gap-3 text-2xl">
					<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M12 2L3 7l9 5 9-5-9-5z" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M3 12l9 5 9-5" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M3 17l9 5 9-5" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
					Voi's Values
				</h2>
				<p class="mt-2 text-white/60">To ensure true decentralization, the Voi community adheres to these guiding values:</p>
			</div>

			<div class="grid gap-6 md:grid-cols-2">
				<div class="rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6">
					<h3 class="mb-3 font-display text-xl text-voi-light">Goodwill</h3>
					<p class="text-sm text-white/60">
						Assume positive intent, acting with kindness, compassion, and understanding.
					</p>
				</div>

				<div class="rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6">
					<h3 class="mb-3 font-display text-xl text-voi-light">Integrity</h3>
					<p class="text-sm text-white/60">
						Maintain honesty and transparency in all communications and interactions within the ecosystem.
					</p>
				</div>

				<div class="rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6">
					<h3 class="mb-3 font-display text-xl text-voi-light">Collaboration</h3>
					<p class="text-sm text-white/60">
						Prioritize collective efforts over individual pursuits, fostering innovation and accelerating Voi's vision.
					</p>
				</div>

				<div class="rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6">
					<h3 class="mb-3 font-display text-xl text-voi-light">Intentionality</h3>
					<p class="text-sm text-white/60">
						Ensure thoughtful, purpose-driven actions and communications align with Voi's broader mission.
					</p>
				</div>
			</div>
		</section>
	</div>

	<svelte:fragment slot="related">
		<a
			href="/pages/about/tokenomics"
			class="group flex transform flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10"
		>
			<h3 class="font-display text-xl font-bold">Tokenomics</h3>
			<p class="mt-2 font-mono text-sm text-white/60">
				Learn about token distribution and utility.
			</p>
			<div class="mt-4 flex items-center font-mono text-sm text-white/40">
				<span>Learn More</span>
				<svg class="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</div>
		</a>

		<a
			href="/pages/about/roadmap"
			class="group flex transform flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10"
		>
			<h3 class="font-display text-xl font-bold">Roadmap</h3>
			<p class="mt-2 font-mono text-sm text-white/60">
				Explore our development timeline and future plans.
			</p>
			<div class="mt-4 flex items-center font-mono text-sm text-white/40">
				<span>Learn More</span>
				<svg class="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</div>
		</a>

		<a
			href="/pages/governance/overview"
			class="group flex transform flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10"
		>
			<h3 class="font-display text-xl font-bold">Governance</h3>
			<p class="mt-2 font-mono text-sm text-white/60">
				Understand how decisions are made in the Voi ecosystem.
			</p>
			<div class="mt-4 flex items-center font-mono text-sm text-white/40">
				<span>Learn More</span>
				<svg class="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</div>
		</a>
	</svelte:fragment>
</SubSectionTemplate> 