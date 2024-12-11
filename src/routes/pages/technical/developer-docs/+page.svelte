<script lang="ts">
	import SubSectionTemplate from '$lib/components/SubSectionTemplate.svelte';
	import Section from '$lib/components/Section.svelte';
	import InfoTile from '$lib/components/InfoTile.svelte';
	import ActionTile from '$lib/components/ActionTile.svelte';
	import LinkButton from '$lib/components/LinkButton.svelte';

	const docsIcon = `<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
		<path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>`;

	const startIcon = `<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
		<path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>`;

	const apiIcon = `<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
		<path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>`;
</script>

<SubSectionTemplate title="Developer Documentation" description="Build on Voi">
	<div class="space-y-8">
		<!-- Introduction -->
		<Section title="Overview">
			<p class="text-lg text-white/80">
				Welcome to Voi's developer documentation. Here you'll find comprehensive guides, tutorials, and
				API references to help you build on the Voi network. Whether you're creating a DeFi application,
				NFT marketplace, or integrating Voi into your existing platform, we've got you covered.
			</p>
		</Section>

		<!-- Documentation -->
		<Section title="Documentation" icon={docsIcon}>
			<div class="grid gap-6 sm:grid-cols-2">
				<!-- Getting Started -->
				<InfoTile
					title="Getting Started"
					description="Quick start guides and tutorials to help you begin building on Voi."
					variant="dark"
					icon={startIcon}
				>
					<ul class="mt-4 space-y-2 text-sm text-white/60">
						<li class="flex items-start gap-2">
							<svg class="mt-1 h-4 w-4 flex-shrink-0 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
								<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
							Environment setup
						</li>
						<li class="flex items-start gap-2">
							<svg class="mt-1 h-4 w-4 flex-shrink-0 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
								<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
							Basic concepts
						</li>
						<li class="flex items-start gap-2">
							<svg class="mt-1 h-4 w-4 flex-shrink-0 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
								<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
							First application
						</li>
					</ul>
					<div slot="footer" class="mt-4">
						<LinkButton
							href="/pages/getting-started/developers"
							label="Quick Start"
						/>
					</div>
				</InfoTile>

				<!-- API Reference -->
				<InfoTile
					title="API Reference"
					description="Detailed API documentation and integration guides."
					variant="dark"
					icon={apiIcon}
				>
					<ul class="mt-4 space-y-2 text-sm text-white/60">
						<li class="flex items-start gap-2">
							<svg class="mt-1 h-4 w-4 flex-shrink-0 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
								<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
							REST API endpoints
						</li>
						<li class="flex items-start gap-2">
							<svg class="mt-1 h-4 w-4 flex-shrink-0 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
								<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
							SDK documentation
						</li>
						<li class="flex items-start gap-2">
							<svg class="mt-1 h-4 w-4 flex-shrink-0 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
								<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
							Smart contract interfaces
						</li>
					</ul>
					<div slot="footer" class="mt-4">
						<LinkButton
							href="https://docs.voi.network/developers/start-here/"
							label="View Documentation"
							external={true}
						/>
					</div>
				</InfoTile>
			</div>
		</Section>

		<!-- Bounties -->
		<Section title="Product Bounties" icon={`<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
			<path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>`}>
			<InfoTile
				title="Bounty Board"
				description="View available product bounties and earn rewards for building key features."
				variant="dark"
			>
				<div slot="footer" class="mt-4">
					<LinkButton
						href="/pages/funding/bounties"
						label="View Bounties"
					/>
				</div>
			</InfoTile>
		</Section>
	</div>

	<svelte:fragment slot="related">
		<ActionTile
			title="Nodes"
			description="Learn about running and maintaining nodes."
			href="/pages/technical/nodes"
		/>

		<ActionTile
			title="Analytics"
			description="View network statistics and performance metrics."
			href="/pages/technical/analytics"
		/>

		<ActionTile
			title="Grants"
			description="Apply for funding to build your project."
			href="/pages/funding/grants"
		/>
	</svelte:fragment>
</SubSectionTemplate> 