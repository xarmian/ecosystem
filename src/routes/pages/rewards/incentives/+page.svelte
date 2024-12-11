<script lang="ts">
	import SubSectionTemplate from '$lib/components/SubSectionTemplate.svelte';
	import Section from '$lib/components/Section.svelte';
	import InfoTile from '$lib/components/InfoTile.svelte';
	import ActionTile from '$lib/components/ActionTile.svelte';

	const defiIcon = `<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
		<path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>`;

	const nodeIcon = `<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
		<path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>`;
</script>

<SubSectionTemplate title="Incentives" description="Earn rewards across the ecosystem">
	<div class="space-y-8">
		<!-- Introduction -->
		<Section title="Overview">
			<p class="text-lg text-white/80">
				Participate in various incentive programs across the Voi ecosystem to earn rewards. From DeFi
				liquidity mining to block rewards, there are multiple ways to participate and earn.
			</p>
		</Section>

		<!-- DeFi Incentives -->
		<Section title="DeFi Incentives" icon={defiIcon}>
			<div class="grid gap-6">
				<InfoTile
					title="Humble DEX"
					description="Provide liquidity on Humble DEX and earn rewards through liquidity mining programs."
					variant="dark"
					icon={defiIcon}
				>
					<div slot="footer" class="mt-4">
						<span class="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/60">Coming Soon</span>
					</div>
				</InfoTile>
			</div>
		</Section>

		<!-- Block Rewards -->
		<Section title="Block Rewards" icon={nodeIcon}>
			<div class="grid gap-6">
				<ActionTile
					title="Node Running"
					description="Run a node and earn block rewards for helping secure the network."
					href="/pages/rewards/node-running"
					variant="dark"
				/>
			</div>
		</Section>
	</div>

	<svelte:fragment slot="related">
		<ActionTile
			title="Node Running"
			description="Learn how to run a node and earn block rewards."
			href="/pages/rewards/node-running"
		/>

		<ActionTile
			title="Competitions"
			description="Participate in ecosystem competitions and challenges."
			href="/pages/rewards/competitions"
		/>

		<ActionTile
			title="Project Directory"
			description="Explore projects in the Voi ecosystem."
			href="/pages/projects/directory"
		/>
	</svelte:fragment>
</SubSectionTemplate> 