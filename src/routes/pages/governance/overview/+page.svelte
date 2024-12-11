<script lang="ts">
	import SubSectionTemplate from '$lib/components/SubSectionTemplate.svelte';
	import Section from '$lib/components/Section.svelte';
	import InfoTile from '$lib/components/InfoTile.svelte';
	import ActionTile from '$lib/components/ActionTile.svelte';

	const branches = [
		{
			title: 'Voi Council',
			subtitle: 'Legislative Branch',
			color: 'purple',
			description: 'Crafts and modifies governance rules while representing community interests.',
			features: [
				'Community-elected members',
				'Crafts and modifies governance rules',
				'Proposes new initiatives'
			],
			link: 'https://docs.voi.network/governance/governance/council/'
		},
		{
			title: 'Voi Treasury',
			subtitle: 'Executive Branch',
			color: 'blue',
			description: 'Implements policies and manages ecosystem resources.',
			features: [
				'Elected and appointed members',
				'Implements policies and decisions',
				'Aligns operations with community values'
			],
			link: 'https://docs.voi.network/governance/governance/treasury/'
		},
		{
			title: 'Voi Judiciary',
			subtitle: 'Judicial Branch',
			color: 'green',
			description: 'Ensures alignment with constitutional principles.',
			features: [
				'Provides guidance and continuity',
				'Safeguards constitutional principles',
				'Ensures justified amendments'
			],
			link: 'https://docs.voi.network/governance/governance/judiciary/'
		}
	];

	const values = [
		{
			title: 'Goodwill',
			description: 'Assume positive intent, acting with kindness, compassion, and understanding within the ecosystem.'
		},
		{
			title: 'Integrity',
			description: 'Maintain honesty and transparency in all communications and interactions within the ecosystem.'
		},
		{
			title: 'Collaboration',
			description: 'Prioritize collective efforts over individual pursuits, fostering innovation and accelerating Voi\'s vision.'
		},
		{
			title: 'Intentionality',
			description: 'Ensure thoughtful, purpose-driven actions and communications align with Voi\'s broader mission.'
		}
	];
</script>

<SubSectionTemplate title="Governance Overview" description="Understanding Voi's tripartite governance system">
	<div class="space-y-8">
		<!-- Introduction -->
		<Section title="Overview">
			<p class="text-lg text-white/80">
				Voi's governance model is inspired by the tripartite system, adapted to create a truly
				decentralized, community-driven blockchain. This system ensures equitable distribution of power
				through three distinct branches, each with specific responsibilities and checks on the others.
			</p>
		</Section>

		<!-- Governance Branches -->
		<Section title="Governance Structure">
			<div class="grid gap-6 grid-cols-1 md:grid-cols-3">
				{#each branches as branch}
					<InfoTile
						title={branch.title}
						description={branch.description}
						variant="dark"
					>
						<div slot="header" class="mb-2">
							<div class="text-sm text-{branch.color}-200/60">{branch.subtitle}</div>
						</div>
						<div class="mt-4 space-y-2">
							{#each branch.features as feature}
								<div class="flex items-start gap-2 text-sm text-white/80">
									<svg
										class="mt-1 h-4 w-4 flex-shrink-0 text-{branch.color}-400"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
									>
										<path
											d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
									<span>{feature}</span>
								</div>
							{/each}
							<a
								href={branch.link}
								target="_blank"
								rel="noopener noreferrer"
								class="mt-4 inline-flex items-center text-sm text-{branch.color}-200 hover:text-{branch.color}-300"
							>
								Learn more
								<svg class="ml-1 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
									<path
										d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</a>
						</div>
					</InfoTile>
				{/each}
			</div>
		</Section>

		<!-- Checks and Balances -->
		<Section title="Checks and Balances">
			<InfoTile
				title="Balanced Power Distribution"
				description="Our governance system ensures no single branch becomes too powerful through a carefully designed system of checks and balances."
				variant="dark"
				icon={`<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
					<path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2M6 7v13m6-13v13m6-13v13" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>`}
			>
				<div class="mt-4">
					<a
						href="https://docs.voi.network/governance/governance/checks-and-balances/"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center text-sm text-purple-400 hover:text-purple-300"
					>
						Learn more about our checks and balances
						<svg class="ml-1 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
							<path
								d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</a>
				</div>
			</InfoTile>
		</Section>

		<!-- Constitutional Values -->
		<Section title="Core Values">
			<p class="mb-6 text-lg text-white/80">
				These values serve as a shared ethical framework that guides all community members, enabling
				decentralized coordination without the need for central authority. By embracing these
				principles, each member contributes to maintaining the ecosystem's integrity and positive
				culture.
			</p>
			<div class="grid gap-6 md:grid-cols-2 mb-8">
				{#each values as value}
					<InfoTile
						title={value.title}
						description={value.description}
						variant="dark"
						/>
				{/each}
			</div>
			<InfoTile
				title=""
				description="These values empower community members to make decisions and take actions autonomously while maintaining alignment with Voi's mission and culture."
				variant="dark"
				icon={`<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
					<path d="M13 10V3L4 14h7v7l9-11h-7z" stroke-linecap="round" stroke-linejoin="round" />
				</svg>`}
			/>
		</Section>

		<!-- Mission -->
		<Section title="Our Mission">
			<InfoTile
				title="Community-Driven Blockchain"
				description="To create a community-driven blockchain ecosystem built by the community, run by the community, and owned by the community."
				variant="dark"
				icon={`<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
					<path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>`}
			/>
		</Section>
	</div>

	<svelte:fragment slot="related">
		<ActionTile
			title="Council"
			description="Learn about Voi's legislative branch and decision-making process."
			href="/pages/governance/council"
		/>
		<ActionTile
			title="Committees"
			description="Explore the specialized committees that drive Voi forward."
			href="/pages/governance/committees"
		/>
		<ActionTile
			title="Voting"
			description="Understand how to participate in governance decisions."
			href="/pages/governance/voting"
		/>
	</svelte:fragment>
</SubSectionTemplate>
