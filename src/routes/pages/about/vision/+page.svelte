<script lang="ts">
	import SubSectionTemplate from '$lib/components/SubSectionTemplate.svelte';
	import Section from '$lib/components/Section.svelte';
	import InfoTile from '$lib/components/InfoTile.svelte';
	import ActionTile from '$lib/components/ActionTile.svelte';
</script>

<SubSectionTemplate
	title="Vision"
	description="Our mission and goals"
>
	<div class="space-y-12">
		<!-- Core Vision Section -->
		<Section
			title="Built by You. Run by You. Owned by You."
			icon={`<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M12 21a9 9 0 100-18 9 9 0 000 18z" stroke-linecap="round" stroke-linejoin="round"/>
				<path d="M12 3v18M3 12h18" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>`}
		>
			<div class="space-y-8">
				<p class="text-lg text-white/80">
					Welcome to Voi, a revolutionary L1 blockchain designed to fulfill the promises of Web3. Voi is a highly performant network truly owned, run, and built by its community. We believe in the power of decentralization, governance, and ownership, making blockchain technology accessible and beneficial for all.
				</p>

				<div class="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
					<InfoTile
						title="Built by You"
						description="Community-driven development ensures Voi evolves based on real user needs, fostering innovation from the ground up."
						variant="dark"
					/>

					<InfoTile
						title="Run by You"
						description="Democratic governance empowers token holders to guide network direction through Council elections and key decisions."
						variant="dark"
					/>

					<InfoTile
						title="Owned by You"
						description="75% of tokens reserved for the community ensures those building the ecosystem benefit directly from its success."
						variant="dark"
					/>
				</div>
			</div>
		</Section>

		<!-- Performance Section -->
		<Section
			title="Highly Performant"
			icon={`<svg class="h-6 w-6 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>`}
		>
			<div class="space-y-6">
				<div class="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
					<InfoTile
						title="2.8s"
						description="Block Time"
						variant="dark"
					/>

					<InfoTile
						title="10K+"
						description="TPS Under Load"
						variant="dark"
					/>

					<InfoTile
						title="Instant"
						description="Finality"
						variant="dark"
					/>

					<InfoTile
						title="Quantum"
						description="Secure"
						variant="dark"
					/>
				</div>

				<p class="text-white/80">
					While these technical capabilities are impressive, we believe the true value of the network lies with the community. With you.
				</p>
			</div>
		</Section>

		<!-- Values Section -->
		<Section
			title="Voi's Values"
			description="To ensure true decentralization, the Voi community adheres to these guiding values:"
			icon={`<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M12 2L3 7l9 5 9-5-9-5z" stroke-linecap="round" stroke-linejoin="round"/>
				<path d="M3 12l9 5 9-5" stroke-linecap="round" stroke-linejoin="round"/>
				<path d="M3 17l9 5 9-5" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>`}
		>
			<div class="grid gap-6 grid-cols-1 sm:grid-cols-2">
				<InfoTile
					title="Goodwill"
					description="Assume positive intent, acting with kindness, compassion, and understanding."
					variant="dark"
				/>

				<InfoTile
					title="Integrity"
					description="Maintain honesty and transparency in all communications and interactions within the ecosystem."
					variant="dark"
				/>

				<InfoTile
					title="Collaboration"
					description="Prioritize collective efforts over individual pursuits, fostering innovation and accelerating Voi's vision."
					variant="dark"
				/>

				<InfoTile
					title="Intentionality"
					description="Ensure thoughtful, purpose-driven actions and communications align with Voi's broader mission."
					variant="dark"
				/>
			</div>
		</Section>
	</div>

	<svelte:fragment slot="related">
		<ActionTile
			href="/pages/about/tokenomics"
			title="Tokenomics"
			description="Learn about token distribution and utility."
		/>

		<ActionTile
			href="/pages/about/roadmap"
			title="Roadmap"
			description="Explore our development timeline and future plans."
		/>

		<ActionTile
			href="/pages/governance/overview"
			title="Governance"
			description="Understand how decisions are made in the Voi ecosystem."
		/>
	</svelte:fragment>
</SubSectionTemplate> 