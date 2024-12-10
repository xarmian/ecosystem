<script lang="ts">
	import SubSectionTemplate from '$lib/components/SubSectionTemplate.svelte';
</script>

<SubSectionTemplate title="Analytics" description="Network metrics and insights">
	<!-- Introduction -->
	<div class="mt-10 rounded-2xl border border-white/10 bg-white/5 p-8">
		<div class="prose prose-invert max-w-none">
			<p class="text-lg text-white/80">
				Track the growth and performance of the Voi ecosystem through comprehensive analytics across
				network activity, DeFi metrics, and NFT markets. Our analytics dashboard provides real-time
				insights into the health and adoption of the network.
			</p>
		</div>
	</div>

	<!-- Network Metrics -->
	<div class="mt-10 rounded-2xl border border-white/10 bg-white/5 p-8">
		<div class="flex items-center gap-4">
			<div class="flex-shrink-0">
				<div class="rounded-full border border-purple-400/20 bg-purple-400/10 p-3">
					<svg class="h-6 w-6 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
						<path
							d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</div>
			</div>
			<div>
				<h3 class="font-display text-xl">Network Statistics</h3>
				<p class="mt-2 text-white/80">
					Monitor network performance and growth metrics.
				</p>
			</div>
		</div>
		<div class="mt-6 grid gap-6 md:grid-cols-3">
			<div class="rounded-xl border border-white/10 bg-gradient-to-br from-purple-400/10 to-transparent p-6">
				<div class="text-sm text-white/60">Active Nodes</div>
				<div class="mt-2 text-2xl font-bold">Coming Soon</div>
			</div>
			<div class="rounded-xl border border-white/10 bg-gradient-to-br from-purple-400/10 to-transparent p-6">
				<div class="text-sm text-white/60">Daily Transactions</div>
				<div class="mt-2 text-2xl font-bold">Coming Soon</div>
			</div>
			<div class="rounded-xl border border-white/10 bg-gradient-to-br from-purple-400/10 to-transparent p-6">
				<div class="text-sm text-white/60">Network TPS</div>
				<div class="mt-2 text-2xl font-bold">Coming Soon</div>
			</div>
		</div>
	</div>

	<!-- DeFi Metrics -->
	<div class="mt-10 rounded-2xl border border-white/10 bg-white/5 p-8">
		<div class="flex items-center gap-4">
			<div class="flex-shrink-0">
				<div class="rounded-full border border-purple-400/20 bg-purple-400/10 p-3">
					<svg class="h-6 w-6 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
						<path
							d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</div>
			</div>
			<div>
				<h3 class="font-display text-xl">DeFi Statistics</h3>
				<p class="mt-2 text-white/80">
					Track DeFi activity and growth across the ecosystem.
				</p>
			</div>
		</div>
		<div class="mt-6 grid gap-6 md:grid-cols-3">
			<div class="rounded-xl border border-white/10 bg-gradient-to-br from-purple-400/10 to-transparent p-6">
				<div class="text-sm text-white/60">Total Value Locked</div>
				<div class="mt-2 text-2xl font-bold">Coming Soon</div>
			</div>
			<div class="rounded-xl border border-white/10 bg-gradient-to-br from-purple-400/10 to-transparent p-6">
				<div class="text-sm text-white/60">Stables Minted</div>
				<div class="mt-2 text-2xl font-bold">Coming Soon</div>
			</div>
			<div class="rounded-xl border border-white/10 bg-gradient-to-br from-purple-400/10 to-transparent p-6">
				<div class="text-sm text-white/60">Daily Trading Volume</div>
				<div class="mt-2 text-2xl font-bold">Coming Soon</div>
			</div>
		</div>
	</div>

	<!-- NFT Metrics -->
	<div class="mt-10 rounded-2xl border border-white/10 bg-white/5 p-8">
		<div class="flex items-center gap-4">
			<div class="flex-shrink-0">
				<div class="rounded-full border border-purple-400/20 bg-purple-400/10 p-3">
					<svg class="h-6 w-6 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
						<path
							d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</div>
			</div>
			<div>
				<h3 class="font-display text-xl">NFT Statistics</h3>
				<p class="mt-2 text-white/80">
					Monitor NFT market activity and trends.
				</p>
			</div>
		</div>
		<div class="mt-6 grid gap-6 md:grid-cols-3">
			<div class="rounded-xl border border-white/10 bg-gradient-to-br from-purple-400/10 to-transparent p-6">
				<div class="text-sm text-white/60">Daily Volume</div>
				<div class="mt-2 text-2xl font-bold">Coming Soon</div>
			</div>
			<div class="rounded-xl border border-white/10 bg-gradient-to-br from-purple-400/10 to-transparent p-6">
				<div class="text-sm text-white/60">Active Collections</div>
				<div class="mt-2 text-2xl font-bold">Coming Soon</div>
			</div>
			<div class="rounded-xl border border-white/10 bg-gradient-to-br from-purple-400/10 to-transparent p-6">
				<div class="text-sm text-white/60">Unique Traders</div>
				<div class="mt-2 text-2xl font-bold">Coming Soon</div>
			</div>
		</div>
	</div>

	<svelte:fragment slot="related">
		<a
			href="/pages/technical/nodes"
			class="group flex transform flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10"
		>
			<h3 class="font-display text-xl font-bold">Nodes</h3>
			<p class="mt-2 font-mono text-sm text-white/60">
				Learn about running and maintaining nodes.
			</p>
			<div class="mt-4 flex items-center font-mono text-sm text-white/40">
				<span>Learn More</span>
				<svg
					class="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
				>
					<path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</div>
		</a>

		<a
			href="/pages/technical/developer-docs"
			class="group flex transform flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10"
		>
			<h3 class="font-display text-xl font-bold">Developer Docs</h3>
			<p class="mt-2 font-mono text-sm text-white/60">
				Access technical documentation and guides.
			</p>
			<div class="mt-4 flex items-center font-mono text-sm text-white/40">
				<span>Learn More</span>
				<svg
					class="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
				>
					<path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</div>
		</a>

		<a
			href="/pages/governance/overview"
			class="group flex transform flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10"
		>
			<h3 class="font-display text-xl font-bold">Governance</h3>
			<p class="mt-2 font-mono text-sm text-white/60">
				Learn about network governance and decision making.
			</p>
			<div class="mt-4 flex items-center font-mono text-sm text-white/40">
				<span>Learn More</span>
				<svg
					class="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
				>
					<path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</div>
		</a>
	</svelte:fragment>
</SubSectionTemplate>