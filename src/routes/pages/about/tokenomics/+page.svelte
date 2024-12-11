<script lang="ts">
	import SubSectionTemplate from '$lib/components/SubSectionTemplate.svelte';
	import Section from '$lib/components/Section.svelte';
	import InfoTile from '$lib/components/InfoTile.svelte';
	import ActionTile from '$lib/components/ActionTile.svelte';
</script>

<SubSectionTemplate title="Tokenomics" description="Token distribution and utility">
	<div class="space-y-12">
		<Section
			title="Token Distribution Overview"
			icon={`<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>`}
		>
			<div class="mb-6 text-lg text-white/80">
				<p>
					Voi's economic architecture spans 20 years, designed to protect both early adopters and
					future participants through strategic inflation control.
				</p>
				<p class="mt-2">
					With 75% of tokens allocated to our community and just 1.73% required for launch
					investment, Voi demonstrates an unprecedented commitment to true decentralization.
				</p>
			</div>

			<div class="space-y-6">
				<InfoTile
					title="Community"
					description="The majority of tokens are reserved for the community, distributed through block rewards, early adopters, and various community initiatives. This ensures true decentralization and community ownership."
					variant="dark"
				>
					<div class="flex items-center justify-between">
						<span
							class="rounded-full border border-purple-400/40 bg-purple-400/20 px-4 py-1 text-sm text-purple-200"
							>75% Total Allocation</span
						>
						<div class="font-display text-2xl font-bold text-white">7,500,000,000</div>
					</div>
				</InfoTile>

				<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					<InfoTile title="Team" description="Allocated for team compensation" variant="dark">
						<div class="flex items-center justify-between">
							<span
								class="rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-1 text-sm text-yellow-200"
								>10%</span
							>
							<div class="font-display text-2xl font-bold text-white">1,000,000,000</div>
						</div>
					</InfoTile>

					<InfoTile
						title="Investors"
						description="Investments from industry leading VCs"
						variant="dark"
					>
						<div class="flex items-center justify-between">
							<span
								class="rounded-full border border-orange-400/20 bg-orange-400/10 px-4 py-1 text-sm text-orange-200"
								>1.73%</span
							>
							<div class="font-display text-2xl font-bold text-white">172,800,000</div>
						</div>
					</InfoTile>

					<InfoTile title="Treasury" description="Reserved for ecosystem security" variant="dark">
						<div class="flex items-center justify-between">
							<span
								class="rounded-full border border-green-400/20 bg-green-400/10 px-4 py-1 text-sm text-green-200"
								>13.27%</span
							>
							<div class="font-display text-2xl font-bold text-white">1,327,200,000</div>
						</div>
					</InfoTile>
				</div>
			</div>
		</Section>

		<Section
			title="Detailed Allocation Breakdown"
			icon={`<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>`}
		>
			<div class="space-y-8">
				<InfoTile
					title="Community Distribution (75%)"
					description="Breakdown of community token allocation"
					variant="dark"
				>
					<div class="divide-y divide-white/5">
						<div class="grid grid-cols-2 gap-4 py-4 lg:grid-cols-4">
							<div class="font-medium text-purple-200">Block Rewards</div>
							<div class="text-purple-200/60">10%</div>
							<div class="text-purple-200/60">1,000,000,000</div>
							<div class="text-left text-purple-200/60 lg:text-right">240 months vesting</div>
						</div>
						<div class="grid grid-cols-2 gap-4 py-4 lg:grid-cols-4">
							<div class="font-medium text-purple-200">Early</div>
							<div class="text-purple-200/60">15%</div>
							<div class="text-purple-200/60">1,500,000,000</div>
							<div class="text-left text-purple-200/60 lg:text-right">No lock</div>
						</div>
						<div class="grid grid-cols-2 gap-4 py-4 lg:grid-cols-4">
							<div class="font-medium text-purple-200">Mid</div>
							<div class="text-purple-200/60">30%</div>
							<div class="text-purple-200/60">3,000,000,000</div>
							<div class="text-left text-purple-200/60 lg:text-right">60 months vesting</div>
						</div>
						<div class="grid grid-cols-2 gap-4 py-4 lg:grid-cols-4">
							<div class="font-medium text-purple-200">Late</div>
							<div class="text-purple-200/60">20%</div>
							<div class="text-purple-200/60">2,000,000,000</div>
							<div class="text-left text-purple-200/60 lg:text-right">
								60 month lock, 120 months vesting
							</div>
						</div>
					</div>
				</InfoTile>

				<InfoTile
					title="Team (10%)"
					description="Team token allocation and vesting schedule"
					variant="dark"
				>
					<div class="grid grid-cols-2 gap-4 py-4 lg:grid-cols-4">
						<div class="font-medium text-yellow-200">Team Allocation</div>
						<div class="text-yellow-200/60">10%</div>
						<div class="text-yellow-200/60">1,000,000,000</div>
						<div class="text-left text-yellow-200/60 lg:text-right">
							24 month lock, 36 months vesting
						</div>
					</div>
				</InfoTile>

				<InfoTile
					title="Investors (1.73%)"
					description="Investment rounds and vesting schedules"
					variant="dark"
				>
					<div class="divide-y divide-white/5">
						<div class="grid grid-cols-2 gap-4 py-4 lg:grid-cols-4">
							<div class="font-medium text-orange-200">Private Round</div>
							<div class="text-orange-200/60">0.56%</div>
							<div class="text-orange-200/60">56,000,000</div>
							<div class="text-left text-orange-200/60 lg:text-right">
								24 month lock, 36 months vesting
							</div>
						</div>
						<div class="grid grid-cols-2 gap-4 py-4 lg:grid-cols-4">
							<div class="font-medium text-orange-200">Pre-Seed</div>
							<div class="text-orange-200/60">1.01%</div>
							<div class="text-orange-200/60">100,800,000</div>
							<div class="text-left text-orange-200/60 lg:text-right">
								24 month lock, 36 months vesting
							</div>
						</div>
						<div class="grid grid-cols-2 gap-4 py-4 lg:grid-cols-4">
							<div class="font-medium text-orange-200">Seed</div>
							<div class="text-orange-200/60">0.16%</div>
							<div class="text-orange-200/60">16,000,000</div>
							<div class="text-left text-orange-200/60 lg:text-right">
								12 month lock and vesting
							</div>
						</div>
					</div>
				</InfoTile>

				<InfoTile
					title="Treasury Distribution (13.27%)"
					description="Treasury allocation and vesting periods"
					variant="dark"
				>
					<div class="divide-y divide-white/5">
						<div class="grid grid-cols-2 gap-4 py-4 lg:grid-cols-4">
							<div class="font-medium text-green-200">Early</div>
							<div class="text-green-200/60">3.27%</div>
							<div class="text-green-200/60">327,200,000</div>
							<div class="text-left text-green-200/60 lg:text-right">No lock</div>
						</div>
						<div class="grid grid-cols-2 gap-4 py-4 lg:grid-cols-4">
							<div class="font-medium text-green-200">Mid</div>
							<div class="text-green-200/60">5%</div>
							<div class="text-green-200/60">500,000,000</div>
							<div class="text-left text-green-200/60 lg:text-right">24 month lock</div>
						</div>
						<div class="grid grid-cols-2 gap-4 py-4 lg:grid-cols-4">
							<div class="font-medium text-green-200">Late</div>
							<div class="text-green-200/60">5%</div>
							<div class="text-green-200/60">500,000,000</div>
							<div class="text-left text-green-200/60 lg:text-right">60 month lock</div>
						</div>
					</div>
				</InfoTile>
			</div>
		</Section>

		<Section
			title="Community Governance"
			icon={`<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>`}
		>
			<div class="mb-6 text-lg text-white/80">
				<p>
					These allocations represent the current state of Voi's token distribution. Through our
					decentralized governance system, the community has the power to propose and vote on
					changes to these allocations, ensuring the ecosystem evolves according to the collective
					will of its participants.
				</p>
			</div>
		</Section>
	</div>

	<svelte:fragment slot="related">
		<ActionTile
			title="Governance"
			description="Learn how token holders participate in decision-making."
			href="/pages/governance/overview"
		/>
		<ActionTile
			title="Incentives"
			description="Explore the various ways to earn tokens."
			href="/pages/rewards/incentives"
		/>
		<ActionTile
			title="Vision"
			description="Understand Voi's mission and goals."
			href="/pages/about/vision"
		/>
	</svelte:fragment>
</SubSectionTemplate>
