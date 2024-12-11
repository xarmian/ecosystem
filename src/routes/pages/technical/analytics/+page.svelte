<script lang="ts">
	import SubSectionTemplate from '$lib/components/SubSectionTemplate.svelte';
	import Section from '$lib/components/Section.svelte';
	import InfoTile from '$lib/components/InfoTile.svelte';
	import ActionTile from '$lib/components/ActionTile.svelte';

	const networkIcon = `<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
		<path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>`;

	const defiIcon = `<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
		<path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>`;

	const nftIcon = `<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
		<path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>`;
</script>

<SubSectionTemplate title="Analytics" description="Network metrics and insights">
	<div class="space-y-8">
		<!-- Introduction -->
		<Section title="Overview">
			<p class="text-lg text-white/80">
				Track the growth and performance of the Voi ecosystem through comprehensive analytics across
				network activity, DeFi metrics, and NFT markets. Our analytics dashboard provides real-time
				insights into the health and adoption of the network.
			</p>
		</Section>

		<!-- Network Metrics -->
		<Section title="Network Statistics" icon={networkIcon}>
			<div class="grid gap-6 sm:grid-cols-3">
				<InfoTile
					title="Active Nodes"
					description="Coming Soon"
					variant="dark"
				/>
				<InfoTile
					title="Daily Transactions"
					description="Coming Soon"
					variant="dark"
				/>
				<InfoTile
					title="Network TPS"
					description="Coming Soon"
					variant="dark"
				/>
			</div>
		</Section>

		<!-- DeFi Metrics -->
		<Section title="DeFi Statistics" icon={defiIcon}>
			<div class="grid gap-6 sm:grid-cols-3">
				<InfoTile
					title="Total Value Locked"
					description="Coming Soon"
					variant="dark"
				/>
				<InfoTile
					title="Stables Minted"
					description="Coming Soon"
					variant="dark"
				/>
				<InfoTile
					title="Daily Trading Volume"
					description="Coming Soon"
					variant="dark"
				/>
			</div>
		</Section>

		<!-- NFT Metrics -->
		<Section title="NFT Statistics" icon={nftIcon}>
			<div class="grid gap-6 sm:grid-cols-3">
				<InfoTile
					title="Daily Volume"
					description="Coming Soon"
					variant="dark"
				/>
				<InfoTile
					title="Active Collections"
					description="Coming Soon"
					variant="dark"
				/>
				<InfoTile
					title="Unique Traders"
					description="Coming Soon"
					variant="dark"
				/>
			</div>
		</Section>
	</div>

	<svelte:fragment slot="related">
		<ActionTile
			title="Nodes"
			description="Learn about running and maintaining nodes."
			href="/pages/technical/nodes"
		/>

		<ActionTile
			title="Developer Docs"
			description="Access technical documentation and guides."
			href="/pages/technical/developer-docs"
		/>

		<ActionTile
			title="Governance"
			description="Learn about network governance and decision making."
			href="/pages/governance/overview"
		/>
	</svelte:fragment>
</SubSectionTemplate>