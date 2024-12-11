<script lang="ts">
	import SubSectionTemplate from '$lib/components/SubSectionTemplate.svelte';
	import Section from '$lib/components/Section.svelte';
	import InfoTile from '$lib/components/InfoTile.svelte';
	import ActionTile from '$lib/components/ActionTile.svelte';

	const councilMembers = [
		{
			name: 'Magnetartare',
			role: 'Council Member',
			image: '/profiles/magnetartar.jpg',
			twitter: 'https://x.com/magnetartare'
		},
		{
			name: 'Xarmian',
			role: 'Council Member',
			image: '/profiles/xarmian.jpg',
			twitter: 'https://x.com/xarmian'
		},
		{
			name: 'Bagman',
			role: 'Council Member',
			image: '/profiles/bagman.png',
			twitter: 'https://x.com/Bagman365'
		},
		{
			name: 'Wilder',
			role: 'Council Member',
			image: '/profiles/wilder.jpg',
			twitter: 'https://x.com/WilderStubbs'
		},
		{
			name: 'Shelly',
			role: 'Council Member',
			image: '/profiles/shelly.jpg',
			twitter: 'https://x.com/NicholasShella2'
		},
		{
			name: 'Scotty',
			role: 'Council Secretary',
			image: '/profiles/scotty.jpg',
			twitter: 'https://x.com/scottyvoi',
			isSecretary: true
		}
	];

	const responsibilities = {
		legislative: [
			'Establish governance policies',
			'Review and vote on proposals',
			'Represent community interests'
		],
		community: [
			'Work closely with committees',
			'Gather community feedback',
			'Drive ecosystem initiatives'
		]
	};
</script>

<SubSectionTemplate title="Council" description="Community representatives leading Voi's governance">
	<div class="space-y-8">
		<!-- Introduction -->
		<Section title="Overview">
			<p class="text-lg text-white/80">
				The Voi Council consists of five elected community representatives who serve as the
				legislative branch of our governance system. Council members work closely with committees, the
				other branches of governance, and the broader community to shape the future of Voi.
			</p>
		</Section>

		<!-- Council Members -->
		<Section title="Council Members">
			<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				{#each councilMembers as member}
					<a
						href={member.twitter}
						target="_blank"
						class="group block transition-transform hover:scale-[1.02]"
					>
						<InfoTile
							title={member.name}
							description={member.role}
							variant="dark"
						>
							<div class="flex items-center gap-4">
								<div class="flex-shrink-0">
									<img
										src={member.image}
										alt={member.name}
										class="h-12 w-12 rounded-full object-cover"
									/>
								</div>
							</div>
							<div class="mt-4 flex items-center text-sm text-purple-400 group-hover:text-purple-300">
								<span>View Profile</span>
								<svg class="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
									<path
										d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</div>
						</InfoTile>
					</a>
				{/each}
			</div>
		</Section>

		<!-- Council Responsibilities -->
		<Section title="Responsibilities">
			<div class="grid gap-6 md:grid-cols-2">
				<InfoTile 
					title="Legislative Leadership" 
					description="Core legislative responsibilities of the council"
					variant="dark"
				>
					<div class="space-y-2 text-white/80">
						{#each responsibilities.legislative as responsibility}
							<div class="flex items-start gap-2">
								<svg
									class="mt-1 h-4 w-4 flex-shrink-0 text-purple-400"
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
								{responsibility}
							</div>
						{/each}
					</div>
				</InfoTile>

				<InfoTile 
					title="Community Engagement" 
					description="Community-focused responsibilities of the council"
					variant="dark"
				>
					<div class="space-y-2 text-white/80">
						{#each responsibilities.community as responsibility}
							<div class="flex items-start gap-2">
								<svg
									class="mt-1 h-4 w-4 flex-shrink-0 text-purple-400"
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
								{responsibility}
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
			title="Committees"
			description="Explore the specialized committees that drive Voi forward."
			href="/pages/governance/committees"
		/>
		<ActionTile
			title="Voting"
			description="Understand how voting works and how to participate in governance decisions."
			href="/pages/governance/voting"
		/>
	</svelte:fragment>
</SubSectionTemplate> 