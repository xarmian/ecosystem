<script lang="ts">
	import SubSectionTemplate from '$lib/components/SubSectionTemplate.svelte';
	import Section from '$lib/components/Section.svelte';
	import InfoTile from '$lib/components/InfoTile.svelte';
	import ActionTile from '$lib/components/ActionTile.svelte';

	const proposalCategories = [
		{
			title: 'Product',
			description: 'Building applications and tools for the ecosystem',
			icon: `<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
				<path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>`
		},
		{
			title: 'Service',
			description: 'Providing essential services to the ecosystem',
			icon: `<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
				<path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>`
		},
		{
			title: 'Policy',
			description: 'Establishing rules and implementing strategies',
			icon: `<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
				<path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>`
		},
		{
			title: 'Initiative',
			description: 'Large events and incentive programs',
			icon: `<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
				<path d="M13 10V3L4 14h7v7l9-11h-7z" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>`
		}
	];

	const lifecycle = [
		{
			title: 'Community Review',
			description: '5-day discussion period for community feedback and refinement',
			icon: `<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
				<path d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>`
		},
		{
			title: 'Council Voting',
			description: '5-day voting period where council members cast their votes',
			icon: `<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
				<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>`
		},
		{
			title: 'Implementation',
			description: 'Approved proposals are scheduled and implemented',
			icon: `<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
				<path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>`
		}
	];
</script>

<SubSectionTemplate title="Voting" description="Participate in Voi's governance decisions">
	<div class="space-y-8">
		<!-- Introduction -->
		<Section title="Overview">
			<p class="text-lg text-white/80">
				Voi's governance relies on elected council members who vote on community proposals. The five
				council members are elected by the community, with majority vote needed for proposals to
				pass.
			</p>
		</Section>

		<!-- Current Proposals -->
		<Section title="Active Proposals">
			<a
				href="https://discord.com/channels/1055863853633785857/1146406541084348426"
				target="_blank"
				class="inline-flex items-center rounded-lg border border-white/10 bg-[#1a0b2e]/80 px-4 py-2 text-sm text-purple-200 transition-all hover:border-white/20 hover:bg-[#1a0b2e]"
				slot="button"
			>
				View All Proposals
				<svg class="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
					<path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</a>

			<!-- Coming Soon Banner -->
			<div class="rounded-xl border border-purple-400/20 bg-gradient-to-br from-purple-400/10 to-transparent p-6">
				<div class="flex items-center gap-3">
					<svg class="h-5 w-5 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
						<path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
					<p class="text-sm text-purple-200">
						On-chain voting coming soon! Community members will be able to elect council members,
						change their voting power, and vote on proposals directly.
					</p>
				</div>
			</div>

			<div class="mt-6 grid gap-6 md:grid-cols-2">
				<a
					href="https://discord.com/channels/1055863853633785857/1146406541084348426"
					target="_blank"
					class="group block transition-transform hover:scale-[1.02]"
				>
					<InfoTile
						title="Proposal Forum"
						description="Browse and discuss current governance proposals in the official Voi Discord."
						variant="dark"
						icon={`<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
							<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>`}
					>
						<div slot="header" class="text-sm text-white/40">Active Proposals</div>
						<div slot="footer" class="mt-4 flex items-center font-mono text-sm text-white/40">
							<span>View Forum</span>
							<svg
								class="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
							>
								<path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
						</div>
					</InfoTile>
				</a>

				<a
					href="https://docs.voi.network/governance/proposals/application-process/"
					target="_blank"
					class="group block transition-transform hover:scale-[1.02]"
				>
					<InfoTile
						title="Proposal Guide"
						description="Learn how to submit your proposal and guide it through the governance process."
						variant="dark"
						icon={`<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
							<path d="M12 4v16m8-8H4" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>`}
					>
						<div slot="header" class="text-sm text-white/40">Submit Proposal</div>
						<div slot="footer" class="mt-4 flex items-center font-mono text-sm text-white/40">
							<span>View Guide</span>
							<svg
								class="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
							>
								<path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
						</div>
					</InfoTile>
				</a>
			</div>
		</Section>

		<!-- Proposal Categories -->
		<Section title="Proposal Categories">
			<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
				{#each proposalCategories as category}
					<InfoTile
						title={category.title}
						description={category.description}
						variant="dark"
						icon={category.icon}
					/>
				{/each}
			</div>
		</Section>

		<!-- Proposal Lifecycle -->
		<Section title="Proposal Lifecycle">
			<div class="grid gap-6 md:grid-cols-3">
				{#each lifecycle as stage}
					<InfoTile
						title={stage.title}
						description={stage.description}
						variant="dark"
						icon={stage.icon}
					/>
				{/each}
			</div>
		</Section>
	</div>

	<svelte:fragment slot="related">
		<ActionTile
			title="Governance Overview"
			description="Learn about Voi's tripartite governance system and how it works."
			href="/pages/governance/overview"
		/>
		<ActionTile
			title="Council"
			description="Meet the council members who help guide governance decisions."
			href="/pages/governance/council"
		/>
		<ActionTile
			title="Committees"
			description="Explore the specialized committees that help shape proposals."
			href="/pages/governance/committees"
		/>
	</svelte:fragment>
</SubSectionTemplate>
