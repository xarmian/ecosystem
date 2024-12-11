<script lang="ts">
	import SubSectionTemplate from '$lib/components/SubSectionTemplate.svelte';
	import Section from '$lib/components/Section.svelte';
	import InfoTile from '$lib/components/InfoTile.svelte';
	import ActionTile from '$lib/components/ActionTile.svelte';
	import LinkButton from '$lib/components/LinkButton.svelte';

	const productIcon = `<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
		<path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>`;

	const serviceIcon = `<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
		<path d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>`;

	const applyIcon = `<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
		<path d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>`;
</script>

<SubSectionTemplate title="Grants" description="Build and grow the ecosystem">
	<div class="space-y-8">
		<!-- Introduction -->
		<Section title="Overview">
			<p class="text-lg text-white/80">
				At Voi, we believe in rewarding value creation. Our grant program is designed to support both
				technical and non-technical contributors who help grow and strengthen our ecosystem. Whether
				you're a developer building products or a community member providing valuable services, there's an
				opportunity for you to earn tokens by adding value in your unique way.
			</p>
		</Section>

		<!-- Grant Types -->
		<Section title="Grant Types">
			<div class="grid gap-6 sm:grid-cols-2">
				<!-- Product Grants -->
				<InfoTile
					title="Product Grants"
					description="For developers and teams building essential infrastructure, DeFi protocols, tools, and other technical solutions that enhance the Voi ecosystem."
					variant="dark"
					icon={productIcon}
				>
					<ul class="mt-4 space-y-2 text-sm text-white/60">
						<li class="flex items-start gap-2">
							<svg class="mt-1 h-4 w-4 flex-shrink-0 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
								<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
							Infrastructure and tooling
						</li>
						<li class="flex items-start gap-2">
							<svg class="mt-1 h-4 w-4 flex-shrink-0 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
								<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
							DeFi protocols and applications
						</li>
						<li class="flex items-start gap-2">
							<svg class="mt-1 h-4 w-4 flex-shrink-0 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
								<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
							Developer tools and SDKs
						</li>
					</ul>
				</InfoTile>

				<!-- Service Grants -->
				<InfoTile
					title="Service Grants"
					description="For community members providing valuable non-technical services that help grow, educate, and strengthen the Voi community."
					variant="dark"
					icon={serviceIcon}
				>
					<ul class="mt-4 space-y-2 text-sm text-white/60">
						<li class="flex items-start gap-2">
							<svg class="mt-1 h-4 w-4 flex-shrink-0 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
								<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
							Community management and moderation
						</li>
						<li class="flex items-start gap-2">
							<svg class="mt-1 h-4 w-4 flex-shrink-0 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
								<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
							Educational content and courses
						</li>
						<li class="flex items-start gap-2">
							<svg class="mt-1 h-4 w-4 flex-shrink-0 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
								<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
							Marketing and community growth
						</li>
					</ul>
				</InfoTile>
			</div>
		</Section>

		<!-- Get Started -->
		<Section title="Ready to Apply?" icon={applyIcon}>
			<InfoTile
				title=""
				description="If you have an idea that could benefit the Voi ecosystem, we want to hear from you. Our grant program is open to both technical and non-technical contributions."
				variant="dark"
			>
				<div slot="footer" class="mt-4">
					<LinkButton
						href="https://docs.voi.network/governance/proposals/application-process/"
						label="Submit a Grant Application"
						external={true}
					/>
				</div>
			</InfoTile>
		</Section>
	</div>

	<svelte:fragment slot="related">
		<ActionTile
			title="Bounties"
			description="Complete specific tasks and earn rewards."
			href="/pages/funding/bounties"
		/>

		<ActionTile
			title="Partnerships"
			description="Partner with Voi to build the future together."
			href="/pages/funding/partnerships"
		/>

		<ActionTile
			title="Governance"
			description="Learn about the governance process."
			href="/pages/governance/overview"
		/>
	</svelte:fragment>
</SubSectionTemplate> 