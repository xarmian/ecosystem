<script lang="ts">
	import SubSectionTemplate from '$lib/components/SubSectionTemplate.svelte';
	import Section from '$lib/components/Section.svelte';
	import InfoTile from '$lib/components/InfoTile.svelte';
	import ActionTile from '$lib/components/ActionTile.svelte';

	const committees = [
		{
			title: 'Network Committee',
			description:
				'Focuses on technical infrastructure, node operations, and network performance optimization.',
			registerLink: 'https://forms.gle/Y3MbAhdJbYgkXmzs7'
		},
		{
			title: 'Voiagers Committee',
			description:
				'Represents community interests, engagement initiatives, and ecosystem growth strategies.',
			registerLink: 'https://forms.gle/vDt1sgkrm671Uc9q6'
		},
		{
			title: 'Builders Committee',
			description:
				'Drives development initiatives, technical standards, and builder support programs.',
			registerLink: 'https://forms.gle/wc7pFCUsSBm3yoEB6'
		}
	];

	const features = [
		'Community members can propose and create new committees',
		'Council members represent committee interests in governance',
		'Direct channel for specialized input, feedback and proposal creation'
	];
</script>

<SubSectionTemplate
	title="Committees"
	description="Collaborative working groups driving ecosystem development"
>
	<div class="space-y-8">
		<!-- Introduction -->
		<Section title="Overview">
			<p class="text-lg text-white/80">
				Committees provide a structured way for community members to contribute their expertise and
				help shape Voi's future. While meetings are open to all, registering will ensure you receive
				calendar invites and never miss a meeting.
			</p>
		</Section>

		<!-- Committees Overview -->
		<Section title="Community Committees">
			<a
				href="/pages/community/events"
				class="inline-flex items-center rounded-lg border border-white/10 bg-[#1a0b2e]/80 px-4 py-2 text-sm text-purple-200 transition-all hover:border-white/20 hover:bg-[#1a0b2e]"
				slot="button"
			>
				View Meeting Schedule
				<svg class="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
					<path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</a>

			<!-- Current Committees -->
			<div class="mt-6 grid gap-6 md:grid-cols-3">
				{#each committees as committee}
					<a
						href={committee.registerLink}
						target="_blank"
						class="group block h-full transition-transform hover:scale-[1.02]"
					>
						<InfoTile
							title={committee.title}
							description={committee.description}
							variant="dark"
							icon={`<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
								<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>`}
						>
							<div slot="footer" class="mt-4 flex items-center font-mono text-sm text-white/40">
								<span>Register</span>
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
				{/each}
			</div>

			<!-- Key Features -->
			<div class="mt-12">
				<InfoTile
					title="Key Features"
					description="Core aspects of our committee system"
					variant="dark"
				>
					<div class="space-y-2 text-white/80">
						{#each features as feature}
							<div class="flex items-start gap-2">
								<svg
									class="mt-1 h-4 w-4 flex-shrink-0 text-voi-light"
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
								{feature}
							</div>
						{/each}
					</div>
				</InfoTile>
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
			description="Discover the role and responsibilities of the Voi Council."
			href="/pages/governance/council"
		/>
		<ActionTile
			title="Voting"
			description="Understand how voting works and how to participate in governance decisions."
			href="/pages/governance/voting"
		/>
	</svelte:fragment>
</SubSectionTemplate>
