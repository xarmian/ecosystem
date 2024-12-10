<script lang="ts">
	import SubSectionTemplate from '$lib/components/SubSectionTemplate.svelte';
	let activeTab: 'external' | 'internal' = 'internal';
</script>

<SubSectionTemplate title="Roadmap" description="Our development timeline and milestones">
	<div class="space-y-12">
		<!-- Introduction -->
		<section class="rounded-2xl border border-white/10 bg-white/5 p-8">
			<div class="prose prose-invert max-w-none">
				<p class="lead text-lg text-white/80">
					Voi's roadmap operates on two parallel tracks: building our internal ecosystem and developing solutions for our target market. This dual approach ensures we grow a strong community while delivering value to paying customers.
				</p>
			</div>
		</section>

		<!-- Track Selection -->
		<div class="grid gap-6 md:grid-cols-2">
			<button
				class="group rounded-xl border transition-all {activeTab === 'internal' ? 'border-purple-400/40 bg-purple-400/10' : 'border-white/10 bg-white/5 hover:border-purple-400/20 hover:bg-purple-400/5'} p-6 text-left"
				on:click={() => activeTab = 'internal'}
			>
				<div class="flex items-center justify-between">
					<h3 class="font-display text-xl text-purple-200">Internal Ecosystem</h3>
					<span class="rounded-full border border-purple-400/20 bg-purple-400/10 px-3 py-1 text-sm">Community Focus</span>
				</div>
				<p class="mt-2 text-sm text-white/60">
					Projects, events, incentives, and token launches for our community builders and participants.
				</p>
			</button>

			<button
				class="group rounded-xl border transition-all {activeTab === 'external' ? 'border-blue-400/40 bg-blue-400/10' : 'border-white/10 bg-white/5 hover:border-blue-400/20 hover:bg-blue-400/5'} p-6 text-left"
				on:click={() => activeTab = 'external'}
			>
				<div class="flex items-center justify-between">
					<h3 class="font-display text-xl text-blue-200">External Development</h3>
					<span class="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-sm">Market Focus</span>
				</div>
				<p class="mt-2 text-sm text-white/60">
					Platforms and applications serving our target market in the managed property industry.
				</p>
			</button>
		</div>

		{#if activeTab === 'external'}
			<!-- Timeline - External Market Development -->
			<section class="rounded-2xl border border-white/10 bg-white/5 p-8">
				<h2 class="mb-8 text-2xl font-bold">External Market Development</h2>
				
				<div class="relative space-y-8">
					<!-- Phase: Site Selection -->
					<div class="relative flex gap-8">
						<div class="flex-none">
							<div class="flex h-12 w-12 items-center justify-center rounded-full border border-blue-400/20 bg-blue-400/10 font-mono text-sm">Q4 24</div>
						</div>
						<div class="relative flex-1 rounded-xl border border-white/10 bg-gradient-to-r from-white/5 to-transparent p-6">
							<h3 class="flex items-center gap-3 font-display text-xl text-blue-200">
								Site Selection
								<span class="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-0.5 text-xs">Market Focus & Segmentation</span>
							</h3>
							<p class="mt-2 text-sm text-white/60">
								Identifying and selecting development companies for townhouses, apartments & condos as our beachhead segment in the $115.4B managed property industry.
							</p>
						</div>
					</div>

					<!-- Phase: Breaking Ground -->
					<div class="relative flex gap-8">
						<div class="flex-none">
							<div class="flex h-12 w-12 items-center justify-center rounded-full border border-blue-400/20 bg-blue-400/10 font-mono text-sm">Q1 25</div>
						</div>
						<div class="relative flex-1 rounded-xl border border-white/10 bg-gradient-to-r from-white/5 to-transparent p-6">
							<h3 class="flex items-center gap-3 font-display text-xl text-blue-200">
								Breaking Ground
								<span class="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-0.5 text-xs">Validation</span>
							</h3>
							<p class="mt-2 text-sm text-white/60">
								Validating problems, solutions & products through primary research with property developers, managers, owners & residents.
							</p>
						</div>
					</div>

					<!-- Phase: Foundations -->
					<div class="relative flex gap-8">
						<div class="flex-none">
							<div class="flex h-12 w-12 items-center justify-center rounded-full border border-blue-400/20 bg-blue-400/10 font-mono text-sm">Q2 25</div>
						</div>
						<div class="relative flex-1 rounded-xl border border-white/10 bg-gradient-to-r from-white/5 to-transparent p-6">
							<h3 class="flex items-center gap-3 font-display text-xl text-blue-200">
								Foundations
								<span class="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-0.5 text-xs">Voi ID & Prototypes</span>
							</h3>
							<p class="mt-2 text-sm text-white/60">
								Building core infrastructure and initial product prototypes for our beachhead segment.
							</p>
						</div>
					</div>

					<!-- Phase: Structure -->
					<div class="relative flex gap-8">
						<div class="flex-none">
							<div class="flex h-12 w-12 items-center justify-center rounded-full border border-blue-400/20 bg-blue-400/10 font-mono text-sm">Q3 25</div>
						</div>
						<div class="relative flex-1 rounded-xl border border-white/10 bg-gradient-to-r from-white/5 to-transparent p-6">
							<h3 class="flex items-center gap-3 font-display text-xl text-blue-200">
								Structure
								<span class="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-0.5 text-xs">MVPs</span>
							</h3>
							<p class="mt-2 text-sm text-white/60">
								Launching first thin slice of product MVPs to initial customers.
							</p>
						</div>
					</div>

					<!-- Phase: Fittings -->
					<div class="relative flex gap-8">
						<div class="flex-none">
							<div class="flex h-12 w-12 items-center justify-center rounded-full border border-blue-400/20 bg-blue-400/10 font-mono text-sm">Q4 25</div>
						</div>
						<div class="relative flex-1 rounded-xl border border-white/10 bg-gradient-to-r from-white/5 to-transparent p-6">
							<h3 class="flex items-center gap-3 font-display text-xl text-blue-200">
								Fittings
								<span class="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-0.5 text-xs">Launches</span>
							</h3>
							<p class="mt-2 text-sm text-white/60">
								Full product launches for target market customers, establishing ecosystem incubator.
							</p>
						</div>
					</div>

					<!-- Phase: Move In -->
					<div class="relative flex gap-8">
						<div class="flex-none">
							<div class="flex h-12 w-12 items-center justify-center rounded-full border border-blue-400/20 bg-blue-400/10 font-mono text-sm">Q1 26</div>
						</div>
						<div class="relative flex-1 rounded-xl border border-white/10 bg-gradient-to-r from-white/5 to-transparent p-6">
							<h3 class="flex items-center gap-3 font-display text-xl text-blue-200">
								Move In
								<span class="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-0.5 text-xs">Market Segment Served</span>
							</h3>
							<p class="mt-2 text-sm text-white/60">
								First customers fully onboarded and actively using platform features.
							</p>
						</div>
					</div>

					<!-- Phase: Expansion -->
					<div class="relative flex gap-8">
						<div class="flex-none">
							<div class="flex h-12 w-12 items-center justify-center rounded-full border border-blue-400/20 bg-blue-400/10 font-mono text-sm">Q2 26</div>
						</div>
						<div class="relative flex-1 rounded-xl border border-white/10 bg-gradient-to-r from-white/5 to-transparent p-6">
							<h3 class="flex items-center gap-3 font-display text-xl text-blue-200">
								Expansion
								<span class="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-0.5 text-xs">Next Market Segment</span>
							</h3>
							<p class="mt-2 text-sm text-white/60">
								Expanding product offerings to neighboring market segments.
							</p>
						</div>
					</div>
				</div>
			</section>
		{:else}
			<!-- Timeline - Internal Ecosystem -->
			<section class="rounded-2xl border border-white/10 bg-white/5 p-8">
				<h2 class="mb-8 text-2xl font-bold">Internal Ecosystem Development</h2>
				
				<div class="relative space-y-8">
					<!-- Q4 2024 -->
					<div class="relative flex gap-8">
						<div class="flex-none">
							<div class="flex h-12 w-12 items-center justify-center rounded-full border border-purple-400/20 bg-purple-400/10 font-mono text-sm">Q4 24</div>
						</div>
						<div class="space-y-4">
							<div class="rounded-xl border border-white/10 bg-gradient-to-r from-white/5 to-transparent p-6">
								<div class="flex flex-wrap items-center gap-3">
									<h3 class="font-display text-xl text-purple-200">Voi 2.0 Launch</h3>
									<span class="rounded-full border border-purple-400/20 bg-purple-400/10 px-3 py-0.5 text-xs">Mainnet</span>
								</div>
								<p class="mt-2 text-sm text-white/60">
									Mainnet launch with new website and ecosystem hub for community engagement.
								</p>
							</div>

							<div class="grid gap-4 md:grid-cols-2">
								<div class="rounded-xl border border-white/10 bg-gradient-to-r from-white/5 to-transparent p-6">
									<div class="flex flex-wrap items-center gap-3">
										<h3 class="font-display text-lg text-purple-200">Infrastructure</h3>
										<span class="rounded-full border border-purple-400/20 bg-purple-400/10 px-3 py-0.5 text-xs">Projects</span>
									</div>
									<ul class="mt-2 space-y-2 text-sm text-white/60">
										<li>Kibisis Mobile Launch</li>
										<li>Voi Naming Service</li>
										<li>No Loss Lottery</li>
									</ul>
								</div>

								<div class="rounded-xl border border-white/10 bg-gradient-to-r from-white/5 to-transparent p-6">
									<div class="flex flex-wrap items-center gap-3">
										<h3 class="font-display text-lg text-purple-200">Incentives</h3>
										<span class="rounded-full border border-purple-400/20 bg-purple-400/10 px-3 py-0.5 text-xs">Rewards</span>
									</div>
									<ul class="mt-2 space-y-2 text-sm text-white/60">
										<li>NFT Rewards</li>
										<li>DeFi Rewards</li>
										<li>Business Development Rewards</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					<!-- Q1 2025 -->
					<div class="relative flex gap-8">
						<div class="flex-none">
							<div class="flex h-12 w-12 items-center justify-center rounded-full border border-purple-400/20 bg-purple-400/10 font-mono text-sm">Q1 25</div>
						</div>
						<div class="space-y-4">
							<div class="grid gap-4 md:grid-cols-2">
								<div class="rounded-xl border border-white/10 bg-gradient-to-r from-white/5 to-transparent p-6">
									<div class="flex flex-wrap items-center gap-3">
										<h3 class="font-display text-lg text-purple-200">Core Infrastructure</h3>
										<span class="rounded-full border border-purple-400/20 bg-purple-400/10 px-3 py-0.5 text-xs">Voi ID</span>
									</div>
									<ul class="mt-2 space-y-2 text-sm text-white/60">
										<li>Voi ID Prototype</li>
										<li>Kibisis Integration</li>
										<li>Nautilus Marketplace</li>
									</ul>
								</div>

								<div class="rounded-xl border border-white/10 bg-gradient-to-r from-white/5 to-transparent p-6">
									<div class="flex flex-wrap items-center gap-3">
										<h3 class="font-display text-lg text-purple-200">Community Events</h3>
										<span class="rounded-full border border-purple-400/20 bg-purple-400/10 px-3 py-0.5 text-xs">Events</span>
									</div>
									<ul class="mt-2 space-y-2 text-sm text-white/60">
										<li>NFT Games Launch</li>
										<li>Community Tournament</li>
									</ul>
								</div>

								<div class="rounded-xl border border-white/10 bg-gradient-to-r from-white/5 to-transparent p-6">
									<div class="flex flex-wrap items-center gap-3">
										<h3 class="font-display text-lg text-purple-200">Ecosystem Tokens</h3>
										<span class="rounded-full border border-purple-400/20 bg-purple-400/10 px-3 py-0.5 text-xs">Tokens</span>
									</div>
									<ul class="mt-2 space-y-2 text-sm text-white/60">
										<li>enVoi Token Launch</li>
										<li>Kibisis Token</li>
										<li>Nautilus Token</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					<!-- Q2 2025 -->
					<div class="relative flex gap-8">
						<div class="flex-none">
							<div class="flex h-12 w-12 items-center justify-center rounded-full border border-purple-400/20 bg-purple-400/10 font-mono text-sm">Q2 25</div>
						</div>
						<div class="space-y-4">
							<div class="grid gap-4 md:grid-cols-2">
								<div class="rounded-xl border border-white/10 bg-gradient-to-r from-white/5 to-transparent p-6">
									<div class="flex flex-wrap items-center gap-3">
										<h3 class="font-display text-lg text-purple-200">Platform Development</h3>
										<span class="rounded-full border border-purple-400/20 bg-purple-400/10 px-3 py-0.5 text-xs">Projects</span>
									</div>
									<ul class="mt-2 space-y-2 text-sm text-white/60">
										<li>Voi ID MVP Release</li>
										<li>On-chain Governance Implementation</li>
									</ul>
								</div>

								<div class="rounded-xl border border-white/10 bg-gradient-to-r from-white/5 to-transparent p-6">
									<div class="flex flex-wrap items-center gap-3">
										<h3 class="font-display text-lg text-purple-200">Community Events</h3>
										<span class="rounded-full border border-purple-400/20 bg-purple-400/10 px-3 py-0.5 text-xs">Events</span>
									</div>
									<ul class="mt-2 space-y-2 text-sm text-white/60">
										<li>Virtual Hackathon</li>
										<li>Builder Showcase</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					<!-- Q3 2025 -->
					<div class="relative flex gap-8">
						<div class="flex-none">
							<div class="flex h-12 w-12 items-center justify-center rounded-full border border-purple-400/20 bg-purple-400/10 font-mono text-sm">Q3 25</div>
						</div>
						<div class="space-y-4">
							<div class="grid gap-4 md:grid-cols-2">
								<div class="rounded-xl border border-white/10 bg-gradient-to-r from-white/5 to-transparent p-6">
									<div class="flex flex-wrap items-center gap-3">
										<h3 class="font-display text-lg text-purple-200">Platform Development</h3>
										<span class="rounded-full border border-purple-400/20 bg-purple-400/10 px-3 py-0.5 text-xs">Projects</span>
									</div>
									<ul class="mt-2 space-y-2 text-sm text-white/60">
										<li>Target Market Platform MVPs</li>
										<li>Ecosystem Integration Tools</li>
									</ul>
								</div>

								<div class="rounded-xl border border-white/10 bg-gradient-to-r from-white/5 to-transparent p-6">
									<div class="flex flex-wrap items-center gap-3">
										<h3 class="font-display text-lg text-purple-200">Community Events</h3>
										<span class="rounded-full border border-purple-400/20 bg-purple-400/10 px-3 py-0.5 text-xs">Events</span>
									</div>
									<ul class="mt-2 space-y-2 text-sm text-white/60">
										<li>Token Wars</li>
										<li>DeFi Competition</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					<!-- Q4 2025 -->
					<div class="relative flex gap-8">
						<div class="flex-none">
							<div class="flex h-12 w-12 items-center justify-center rounded-full border border-purple-400/20 bg-purple-400/10 font-mono text-sm">Q4 25</div>
						</div>
						<div class="space-y-4">
							<div class="rounded-xl border border-white/10 bg-gradient-to-r from-white/5 to-transparent p-6">
								<div class="flex flex-wrap items-center gap-3">
									<h3 class="font-display text-lg text-purple-200">Ecosystem Growth</h3>
									<span class="rounded-full border border-purple-400/20 bg-purple-400/10 px-3 py-0.5 text-xs">Launch</span>
								</div>
								<ul class="mt-2 space-y-2 text-sm text-white/60">
									<li>Industry Focused Incubator Launch</li>
									<li>Ecosystem Partner Program</li>
									<li>Developer Grants Program</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
		{/if}
	</div>

	<svelte:fragment slot="related">
		<a
			href="/pages/governance/overview"
			class="group flex transform flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10"
		>
			<h3 class="font-display text-xl font-bold">Governance</h3>
			<p class="mt-2 font-mono text-sm text-white/60">
				Learn how community decisions shape Voi's future.
			</p>
			<div class="mt-4 flex items-center font-mono text-sm text-white/40">
				<span>Learn More</span>
				<svg class="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</div>
		</a>

		<a
			href="/pages/technical/developer-docs"
			class="group flex transform flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10"
		>
			<h3 class="font-display text-xl font-bold">Developer Docs</h3>
			<p class="mt-2 font-mono text-sm text-white/60">
				Technical documentation for building on Voi.
			</p>
			<div class="mt-4 flex items-center font-mono text-sm text-white/40">
				<span>Learn More</span>
				<svg class="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</div>
		</a>

		<a
			href="/pages/funding/grants"
			class="group flex transform flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10"
		>
			<h3 class="font-display text-xl font-bold">Grants Program</h3>
			<p class="mt-2 font-mono text-sm text-white/60">
				Explore funding opportunities for your project.
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