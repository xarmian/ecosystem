<script lang="ts">
	import SubSectionTemplate from '$lib/components/SubSectionTemplate.svelte';
	import Section from '$lib/components/Section.svelte';
	import InfoTile from '$lib/components/InfoTile.svelte';
	import ActionTile from '$lib/components/ActionTile.svelte';

	const governanceIcon = `<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
		<path d="M12 3L20 8.5V15.5L12 21L4 15.5V8.5L12 3Z" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M12 12L12 21M12 12L20 8.5M12 12L4 8.5" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>`;

	const defiIcon = `<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
		<path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>`;

	const networkIcon = `<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
		<path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>`;

	const marketingIcon = `<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
		<path d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>`;
</script>

<SubSectionTemplate title="Bounties" description="Complete tasks and earn rewards">
	<div class="space-y-8">
		<!-- Introduction -->
		<Section title="Overview">
			<p class="text-lg text-white/80">
				Contribute to the Voi ecosystem by completing specific tasks from our bounty boards. Whether
				you're a developer looking to build critical infrastructure or a community member offering
				valuable services, there are opportunities for everyone to participate and earn rewards.
			</p>
		</Section>

		<!-- Product Bounties -->
		<Section title="Product Bounty Board">
			<div class="space-y-8">
				<!-- Governance Category -->
				<div class="space-y-6">
					<h3 class="font-display text-xl text-purple-400">Governance</h3>
					<div class="grid gap-6 sm:grid-cols-2">
						<InfoTile
							title="Governance Portal"
							description="A portal that facilitates decentralized governance within the Voi ecosystem, allowing community members to vote on key decisions."
							variant="dark"
							icon={governanceIcon}
						>
							<div class="mt-4 space-y-2">
								<div class="text-sm text-white/60">Key Features:</div>
								<ul class="list-inside list-disc space-y-1 text-sm text-white/60">
									<li>Voting mechanisms</li>
									<li>Transparent results display</li>
									<li>Integration with Voi wallets for seamless participation</li>
								</ul>
							</div>
						</InfoTile>

						<InfoTile
							title="DAO Tooling"
							description="Tools and utilities to support the creation, management, and operation of DAOs within the Voi ecosystem."
							variant="dark"
							icon={governanceIcon}
						>
							<div class="mt-4 space-y-2">
								<div class="text-sm text-white/60">Key Features:</div>
								<ul class="list-inside list-disc space-y-1 text-sm text-white/60">
									<li>DAO creation and management interface</li>
									<li>Smart contract templates for common DAO functions</li>
									<li>Voting and governance tools specific to DAOs</li>
									<li>Analytics and reporting features for DAO activities</li>
								</ul>
							</div>
						</InfoTile>
					</div>
				</div>

				<!-- DeFi Category -->
				<div class="space-y-6">
					<h3 class="font-display text-xl text-purple-400">DeFi</h3>
					<div class="grid gap-6 sm:grid-cols-2">
						<InfoTile
							title="Dex Router"
							description="A decentralized exchange router that aggregates liquidity and routes trades across multiple Dexes to secure the best price with the least amount of fees."
							variant="dark"
							icon={defiIcon}
						>
							<div class="mt-4 space-y-2">
								<div class="text-sm text-white/60">Key Features:</div>
								<ul class="list-inside list-disc space-y-1 text-sm text-white/60">
									<li>Multi-Dex routing</li>
									<li>Fee optimization</li>
									<li>Integration with popular Dexes</li>
									<li>Real-time price comparison</li>
								</ul>
							</div>
						</InfoTile>

						<InfoTile
							title="Concentrated Liquidity AMM Pools"
							description="An Automated Market Maker that allows liquidity providers to concentrate their liquidity within specific price ranges, maximizing capital efficiency."
							variant="dark"
							icon={defiIcon}
						>
							<div class="mt-4 space-y-2">
								<div class="text-sm text-white/60">Key Features:</div>
								<ul class="list-inside list-disc space-y-1 text-sm text-white/60">
									<li>Customizable price ranges for liquidity providers</li>
									<li>Enhanced capital efficiency</li>
									<li>Dynamic fee structures</li>
									<li>Integration with Dexes and other DeFi protocols</li>
								</ul>
							</div>
						</InfoTile>
					</div>
				</div>
			</div>
		</Section>

		<!-- Services Bounties -->
		<Section title="Services Bounty Board">
			<div class="space-y-8">
				<!-- Network Category -->
				<div class="space-y-6">
					<h3 class="font-display text-xl text-purple-400">Network</h3>
					<div class="grid gap-6">
						<InfoTile
							title="Network Stress Testers"
							description="Conduct thorough stress tests on the Voi network to ensure its robustness and reliability."
							variant="dark"
							icon={networkIcon}
						>
							<div class="mt-4 space-y-2">
								<div class="text-sm text-white/60">Key Responsibilities:</div>
								<ul class="list-inside list-disc space-y-1 text-sm text-white/60">
									<li>Conducting stress tests on the Voi network</li>
									<li>Recording and analyzing test results</li>
									<li>Publishing detailed reports on findings</li>
								</ul>
							</div>
						</InfoTile>
					</div>
				</div>

				<!-- Marketing Category -->
				<div class="space-y-6">
					<h3 class="font-display text-xl text-purple-400">Marketing</h3>
					<div class="grid gap-6">
						<InfoTile
							title="Social Media Management"
							description="Help grow and engage with our community across various social media platforms."
							variant="dark"
							icon={marketingIcon}
						>
							<div class="mt-4 space-y-2">
								<div class="text-sm text-white/60">Key Responsibilities:</div>
								<ul class="list-inside list-disc space-y-1 text-sm text-white/60">
									<li>Creating and scheduling engaging content</li>
									<li>Community engagement and moderation</li>
									<li>Analytics and reporting</li>
								</ul>
							</div>
						</InfoTile>
					</div>
				</div>
			</div>
		</Section>
	</div>

	<svelte:fragment slot="related">
		<ActionTile
			title="Grants"
			description="Apply for funding to build your project."
			href="/pages/funding/grants"
		/>

		<ActionTile
			title="Partnerships"
			description="Partner with Voi to build the future together."
			href="/pages/funding/partnerships"
		/>

		<ActionTile
			title="Project Directory"
			description="Explore projects in the Voi ecosystem."
			href="/pages/projects/directory"
		/>
	</svelte:fragment>
</SubSectionTemplate> 