<script lang="ts">
	import SubSectionTemplate from '$lib/components/SubSectionTemplate.svelte';
	import Section from '$lib/components/Section.svelte';
	import InfoTile from '$lib/components/InfoTile.svelte';
	import ActionTile from '$lib/components/ActionTile.svelte';
	let activeTab: 'external' | 'internal' = 'internal';
</script>

<SubSectionTemplate title="Roadmap" description="Our development timeline and milestones">
	<div class="space-y-12">
		<Section
			title="Overview"
			icon={`<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M9 17l6-6-6-6" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>`}
		>
			<p class="text-lg text-white/80">
				Voi's roadmap operates on two parallel tracks: building our internal ecosystem and developing solutions for our target market. This dual approach ensures we grow a strong community while delivering value to paying customers.
			</p>
		</Section>

		<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
			<button
				class="group relative w-full cursor-pointer transition-all duration-200 hover:scale-[1.02] rounded-xl {activeTab === 'internal' ? 'ring-2 ring-purple-400/40' : 'hover:ring-2 hover:ring-purple-400/20'}"
				on:click={() => activeTab = 'internal'}
			>
				<InfoTile
					title="Internal Ecosystem"
					description="Projects, events, incentives, and token launches for our community builders and participants."
					variant={activeTab === 'internal' ? 'dark' : 'default'}
				>
					<div class="mt-6 flex items-center justify-between">
						<span class="font-mono text-sm text-purple-200/60">Click to View Timeline</span>
						<span class="rounded-full border border-purple-400/20 bg-purple-400/10 px-3 py-1 text-sm text-purple-200">Community Focus</span>
					</div>
				</InfoTile>
			</button>

			<button
				class="group relative w-full cursor-pointer transition-all duration-200 hover:scale-[1.02] rounded-xl {activeTab === 'external' ? 'ring-2 ring-blue-400/40' : 'hover:ring-2 hover:ring-blue-400/20'}"
				on:click={() => activeTab = 'external'}
			>
				<InfoTile
					title="External Development"
					description="Platforms and applications serving our target market in the managed property industry."
					variant={activeTab === 'external' ? 'dark' : 'default'}
				>
					<div class="mt-6 flex items-center justify-between">
						<span class="font-mono text-sm text-blue-200/60">Click to View Timeline</span>
						<span class="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-sm text-blue-200">Market Focus</span>
					</div>
				</InfoTile>
			</button>
		</div>

		{#if activeTab === 'external'}
			<Section
				title="External Market Development"
				icon={`<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"/>
					<path d="M12 7v5l3 3" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>`}
			>
				<div class="space-y-8">
					<!-- Phase: Site Selection -->
					<div class="flex flex-col gap-4 sm:flex-row sm:gap-8">
						<div class="flex-none">
							<div class="flex h-12 w-12 items-center justify-center rounded-full border border-blue-400/20 bg-blue-400/10 font-mono text-sm">Q4 24</div>
						</div>
						<div class="flex-1">
							<InfoTile
								title="Site Selection"
								description="Identifying and selecting development companies for townhouses, apartments & condos as our beachhead segment in the $115.4B managed property industry."
								variant="dark"
							>
								<div class="mt-6 flex items-center justify-end">
									<span class="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-sm text-blue-200">Market Focus & Segmentation</span>
								</div>
							</InfoTile>
						</div>
					</div>

					<!-- Phase: Foundations -->
					<div class="flex flex-col gap-4 sm:flex-row sm:gap-8">
						<div class="flex-none">
							<div class="flex h-12 w-12 items-center justify-center rounded-full border border-blue-400/20 bg-blue-400/10 font-mono text-sm">Q2 25</div>
						</div>
						<div class="flex-1">
							<InfoTile
								title="Foundations"
								description="Building core infrastructure and initial product prototypes for our beachhead segment."
								variant="dark"
							>
								<div class="mt-6 flex items-center justify-end">
									<span class="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-sm text-blue-200">Voi ID & Prototypes</span>
								</div>
							</InfoTile>
						</div>
					</div>

					<!-- Phase: Structure -->
					<div class="flex flex-col gap-4 sm:flex-row sm:gap-8">
						<div class="flex-none">
							<div class="flex h-12 w-12 items-center justify-center rounded-full border border-blue-400/20 bg-blue-400/10 font-mono text-sm">Q3 25</div>
						</div>
						<div class="flex-1">
							<InfoTile
								title="Structure"
								description="Launching first thin slice of product MVPs to initial customers."
								variant="dark"
							>
								<div class="mt-6 flex items-center justify-end">
									<span class="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-sm text-blue-200">MVPs</span>
								</div>
							</InfoTile>
						</div>
					</div>

					<!-- Phase: Fittings -->
					<div class="flex flex-col gap-4 sm:flex-row sm:gap-8">
						<div class="flex-none">
							<div class="flex h-12 w-12 items-center justify-center rounded-full border border-blue-400/20 bg-blue-400/10 font-mono text-sm">Q4 25</div>
						</div>
						<div class="flex-1">
							<InfoTile
								title="Fittings"
								description="Full product launches for target market customers, establishing ecosystem incubator."
								variant="dark"
							>
								<div class="mt-6 flex items-center justify-end">
									<span class="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-sm text-blue-200">Launches</span>
								</div>
							</InfoTile>
						</div>
					</div>

					<!-- Phase: Move In -->
					<div class="flex flex-col gap-4 sm:flex-row sm:gap-8">
						<div class="flex-none">
							<div class="flex h-12 w-12 items-center justify-center rounded-full border border-blue-400/20 bg-blue-400/10 font-mono text-sm">Q1 26</div>
						</div>
						<div class="flex-1">
							<InfoTile
								title="Move In"
								description="First customers fully onboarded and actively using platform features."
								variant="dark"
							>
								<div class="mt-6 flex items-center justify-end">
									<span class="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-sm text-blue-200">Market Segment Served</span>
								</div>
							</InfoTile>
						</div>
					</div>

					<!-- Phase: Expansion -->
					<div class="flex flex-col gap-4 sm:flex-row sm:gap-8">
						<div class="flex-none">
							<div class="flex h-12 w-12 items-center justify-center rounded-full border border-blue-400/20 bg-blue-400/10 font-mono text-sm">Q2 26</div>
						</div>
						<div class="flex-1">
							<InfoTile
								title="Expansion"
								description="Expanding product offerings to neighboring market segments."
								variant="dark"
							>
								<div class="mt-6 flex items-center justify-end">
									<span class="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-sm text-blue-200">Next Market Segment</span>
								</div>
							</InfoTile>
						</div>
					</div>
				</div>
			</Section>
		{:else}
			<Section
				title="Internal Ecosystem Development"
				icon={`<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"/>
					<path d="M12 7v5l3 3" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>`}
			>
				<div class="space-y-8">
					<!-- Q4 2024 -->
					<div class="flex flex-col gap-4 sm:flex-row sm:gap-8">
						<div class="flex-none">
							<div class="flex h-12 w-12 items-center justify-center rounded-full border border-purple-400/20 bg-purple-400/10 font-mono text-sm">Q4 24</div>
						</div>
						<div class="flex-1 space-y-4">
							<InfoTile
								title="Voi 2.0 Launch"
								description="Mainnet launch with new website and ecosystem hub for community engagement."
								variant="dark"
							>
								<div class="mt-6 flex items-center justify-end">
									<span class="rounded-full border border-purple-400/20 bg-purple-400/10 px-3 py-1 text-sm text-purple-200">Mainnet</span>
								</div>
							</InfoTile>
						</div>
					</div>

					<!-- Q1 2025 -->
					<div class="flex flex-col gap-4 sm:flex-row sm:gap-8">
						<div class="flex-none">
							<div class="flex h-12 w-12 items-center justify-center rounded-full border border-purple-400/20 bg-purple-400/10 font-mono text-sm">Q1 25</div>
						</div>
						<div class="flex-1 space-y-4">
							<div class="grid gap-4 grid-cols-1 md:grid-cols-2">
								<InfoTile
									title="Infrastructure"
									description="Core infrastructure projects and developments."
									variant="dark"
								>
									<ul class="mt-4 space-y-3">
										<li class="flex items-center gap-3">
											<div class="h-1.5 w-1.5 rounded-full bg-purple-400/60"></div>
											<span class="text-base text-white/80">Kibisis Mobile Launch</span>
										</li>
										<li class="flex items-center gap-3">
											<div class="h-1.5 w-1.5 rounded-full bg-purple-400/60"></div>
											<span class="text-base text-white/80">Voi ID Prototype</span>
										</li>
										<li class="flex items-center gap-3">
											<div class="h-1.5 w-1.5 rounded-full bg-purple-400/60"></div>
											<span class="text-base text-white/80">Kibisis Integration</span>
										</li>
										<li class="flex items-center gap-3">
											<div class="h-1.5 w-1.5 rounded-full bg-purple-400/60"></div>
											<span class="text-base text-white/80">Nautilus Marketplace</span>
										</li>
									</ul>
									<div class="mt-6 flex items-center justify-end">
										<span class="rounded-full border border-purple-400/20 bg-purple-400/10 px-3 py-1 text-sm text-purple-200">Projects</span>
									</div>
								</InfoTile>

								<InfoTile
									title="Community Events"
										description="Community rewards and incentives."
										variant="dark"
								>
									<ul class="mt-4 space-y-3">
										<li class="flex items-center gap-3">
											<div class="h-1.5 w-1.5 rounded-full bg-purple-400/60"></div>
											<span class="text-base text-white/80">NFT Rewards</span>
										</li>
										<li class="flex items-center gap-3">
											<div class="h-1.5 w-1.5 rounded-full bg-purple-400/60"></div>
											<span class="text-base text-white/80">DeFi Rewards</span>
										</li>
										<li class="flex items-center gap-3">
											<div class="h-1.5 w-1.5 rounded-full bg-purple-400/60"></div>
											<span class="text-base text-white/80">NFT Games Launch</span>
										</li>
										<li class="flex items-center gap-3">
											<div class="h-1.5 w-1.5 rounded-full bg-purple-400/60"></div>
											<span class="text-base text-white/80">Community Tournament</span>
										</li>
									</ul>
									<div class="mt-6 flex items-center justify-end">
										<span class="rounded-full border border-purple-400/20 bg-purple-400/10 px-3 py-1 text-sm text-purple-200">Events</span>
									</div>
								</InfoTile>
							</div>
						</div>
					</div>

					<!-- Q2 2025 -->
					<div class="flex flex-col gap-4 sm:flex-row sm:gap-8">
						<div class="flex-none">
							<div class="flex h-12 w-12 items-center justify-center rounded-full border border-purple-400/20 bg-purple-400/10 font-mono text-sm">Q2 25</div>
						</div>
						<div class="flex-1 space-y-4">
							<div class="grid gap-4 grid-cols-1 md:grid-cols-2">
								<InfoTile
									title="Platform Development"
									description="Core platform features and governance."
									variant="dark"
								>
									<ul class="mt-4 space-y-3">
										<li class="flex items-center gap-3">
											<div class="h-1.5 w-1.5 rounded-full bg-purple-400/60"></div>
											<span class="text-base text-white/80">Voi ID MVP Release</span>
										</li>
										<li class="flex items-center gap-3">
											<div class="h-1.5 w-1.5 rounded-full bg-purple-400/60"></div>
											<span class="text-base text-white/80">On-chain Governance Implementation</span>
										</li>
									</ul>
									<div class="mt-6 flex items-center justify-end">
										<span class="rounded-full border border-purple-400/20 bg-purple-400/10 px-3 py-1 text-sm text-purple-200">Projects</span>
									</div>
								</InfoTile>

								<InfoTile
									title="Community Events"
									description="Developer and builder focused events."
									variant="dark"
								>
									<ul class="mt-4 space-y-3">
										<li class="flex items-center gap-3">
											<div class="h-1.5 w-1.5 rounded-full bg-purple-400/60"></div>
											<span class="text-base text-white/80">Virtual Hackathon</span>
										</li>
										<li class="flex items-center gap-3">
											<div class="h-1.5 w-1.5 rounded-full bg-purple-400/60"></div>
											<span class="text-base text-white/80">Builder Showcase</span>
										</li>
									</ul>
									<div class="mt-6 flex items-center justify-end">
										<span class="rounded-full border border-purple-400/20 bg-purple-400/10 px-3 py-1 text-sm text-purple-200">Events</span>
									</div>
								</InfoTile>
							</div>
						</div>
					</div>

					<!-- Q3 2025 -->
					<div class="flex flex-col gap-4 sm:flex-row sm:gap-8">
						<div class="flex-none">
							<div class="flex h-12 w-12 items-center justify-center rounded-full border border-purple-400/20 bg-purple-400/10 font-mono text-sm">Q3 25</div>
						</div>
						<div class="flex-1 space-y-4">
							<div class="grid gap-4 grid-cols-1 md:grid-cols-2">
								<InfoTile
									title="Platform Development"
									description="Market-focused platform development."
									variant="dark"
								>
									<ul class="mt-4 space-y-3">
										<li class="flex items-center gap-3">
											<div class="h-1.5 w-1.5 rounded-full bg-purple-400/60"></div>
											<span class="text-base text-white/80">Target Market Platform MVPs</span>
										</li>
										<li class="flex items-center gap-3">
											<div class="h-1.5 w-1.5 rounded-full bg-purple-400/60"></div>
											<span class="text-base text-white/80">Ecosystem Integration Tools</span>
										</li>
									</ul>
									<div class="mt-6 flex items-center justify-end">
										<span class="rounded-full border border-purple-400/20 bg-purple-400/10 px-3 py-1 text-sm text-purple-200">Projects</span>
									</div>
								</InfoTile>

								<InfoTile
									title="Community Events"
									description="Community competitions and tournaments."
									variant="dark"
								>
									<ul class="mt-4 space-y-3">
										<li class="flex items-center gap-3">
											<div class="h-1.5 w-1.5 rounded-full bg-purple-400/60"></div>
											<span class="text-base text-white/80">Token Wars</span>
										</li>
										<li class="flex items-center gap-3">
											<div class="h-1.5 w-1.5 rounded-full bg-purple-400/60"></div>
											<span class="text-base text-white/80">DeFi Competition</span>
										</li>
									</ul>
									<div class="mt-6 flex items-center justify-end">
										<span class="rounded-full border border-purple-400/20 bg-purple-400/10 px-3 py-1 text-sm text-purple-200">Events</span>
									</div>
								</InfoTile>
							</div>
						</div>
					</div>

					<!-- Q4 2025 -->
					<div class="flex flex-col gap-4 sm:flex-row sm:gap-8">
						<div class="flex-none">
							<div class="flex h-12 w-12 items-center justify-center rounded-full border border-purple-400/20 bg-purple-400/10 font-mono text-sm">Q4 25</div>
						</div>
						<div class="flex-1">
							<InfoTile
								title="Ecosystem Growth"
								description="Ecosystem expansion and partner programs."
								variant="dark"
							>
								<ul class="mt-4 space-y-3">
									<li class="flex items-center gap-3">
										<div class="h-1.5 w-1.5 rounded-full bg-purple-400/60"></div>
										<span class="text-base text-white/80">Industry Focused Incubator Launch</span>
									</li>
									<li class="flex items-center gap-3">
										<div class="h-1.5 w-1.5 rounded-full bg-purple-400/60"></div>
										<span class="text-base text-white/80">Ecosystem Partner Program</span>
									</li>
									<li class="flex items-center gap-3">
										<div class="h-1.5 w-1.5 rounded-full bg-purple-400/60"></div>
										<span class="text-base text-white/80">Developer Grants Program</span>
									</li>
								</ul>
								<div class="mt-6 flex items-center justify-end">
									<span class="rounded-full border border-purple-400/20 bg-purple-400/10 px-3 py-1 text-sm text-purple-200">Launch</span>
								</div>
							</InfoTile>
						</div>
					</div>
				</div>
			</Section>
		{/if}
	</div>

	<svelte:fragment slot="related">
		<ActionTile
			title="Governance"
				description="Learn how community decisions shape Voi's future."
				href="/pages/governance/overview"
		/>
		<ActionTile
			title="Developer Docs"
				description="Technical documentation for building on Voi."
				href="/pages/technical/developer-docs"
		/>
		<ActionTile
			title="Grants Program"
				description="Explore funding opportunities for your project."
				href="/pages/funding/grants"
		/>
	</svelte:fragment>
</SubSectionTemplate> 