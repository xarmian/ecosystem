<script lang="ts">
	import SubSectionTemplate from '$lib/components/SubSectionTemplate.svelte';
</script>

<SubSectionTemplate
	title="Tokenomics"
	description="Token distribution and utility"
>
	<div class="space-y-12">
		<!-- Overview Section -->
		<section class="rounded-2xl border border-white/10 bg-white/5 p-8">
			<div class="mb-8">
				<h2 class="flex items-center gap-3 text-2xl">
					<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
					Token Distribution Overview
				</h2>
				<div class="mt-4 space-y-4 text-lg text-white/80">
					<p>
						Voi's economic architecture spans 20 years, designed to protect both early adopters and future participants through strategic inflation control.
					</p>
					<p>
						With 75% of tokens allocated to our community and just 1.73% required for launch investment, Voi demonstrates an unprecedented commitment to true decentralization.
					</p>
					<p>
						Our carefully planned distribution and vesting periods create a foundation for sustainable, long-term growth.
					</p>
				</div>
			</div>

			<div class="space-y-6">
				<!-- Community - Larger Card -->
				<div class="flex flex-col rounded-xl border-2 border-purple-400/40 bg-purple-400/10 p-8">
					<div class="flex items-center justify-between">
						<h3 class="font-display text-2xl text-purple-300">Community</h3>
						<span class="rounded-full border border-purple-400/40 bg-purple-400/20 px-4 py-1 text-sm text-purple-200">75% Total Allocation</span>
					</div>
					<div class="mt-4 font-display text-4xl font-bold text-purple-200">7,500,000,000</div>
					<p class="mt-4 text-base text-purple-200/80">
						The majority of tokens are reserved for the community, distributed through block rewards, early adopters, and various community initiatives. This ensures true decentralization and community ownership.
					</p>
				</div>

				<!-- Other Categories in single row -->
				<div class="grid grid-cols-3 gap-6">
					<div class="flex flex-col rounded-xl border border-yellow-400/20 bg-yellow-400/5 p-6">
						<div class="flex items-center justify-between">
							<h3 class="font-display text-xl text-yellow-300">Team</h3>
							<span class="rounded-full border border-yellow-400/20 bg-yellow-400/10 px-3 py-0.5 text-sm text-yellow-200">10%</span>
						</div>
						<div class="mt-2 font-display text-2xl font-bold text-yellow-200">1,000,000,000</div>
						<p class="mt-2 text-sm text-yellow-200/60">Allocated for team compensation</p>
					</div>

					<div class="flex flex-col rounded-xl border border-orange-400/20 bg-orange-400/5 p-6">
						<div class="flex items-center justify-between">
							<h3 class="font-display text-xl text-orange-300">Investors</h3>
							<span class="rounded-full border border-orange-400/20 bg-orange-400/10 px-3 py-0.5 text-sm text-orange-200">1.73%</span>
						</div>
						<div class="mt-2 font-display text-2xl font-bold text-orange-200">172,800,000</div>
						<p class="mt-2 text-sm text-orange-200/60">Investments from industry leading VCs</p>
					</div>

					<div class="flex flex-col rounded-xl border border-green-400/20 bg-green-400/5 p-6">
						<div class="flex items-center justify-between">
							<h3 class="font-display text-xl text-green-300">Treasury</h3>
							<span class="rounded-full border border-green-400/20 bg-green-400/10 px-3 py-0.5 text-sm text-green-200">13.27%</span>
						</div>
						<div class="mt-2 font-display text-2xl font-bold text-green-200">1,327,200,000</div>
						<p class="mt-2 text-sm text-green-200/60">Reserved for ecosystem security</p>
					</div>
				</div>
			</div>
		</section>

		<!-- Detailed Breakdown -->
		<section class="rounded-2xl border border-white/10 bg-white/5 p-8">
			<div class="mb-6">
				<h2 class="flex items-center gap-3 text-2xl">
					<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
					Detailed Allocation Breakdown
				</h2>
			</div>

			<!-- Community Section -->
			<div class="mb-8 overflow-hidden rounded-xl border-2 border-purple-400/40">
				<div class="bg-purple-400/20 px-6 py-4">
					<h3 class="font-display text-xl text-purple-200">Community Distribution (75%)</h3>
				</div>
				<div class="divide-y divide-white/5">
					<div class="grid grid-cols-4 px-6 py-4">
						<div class="font-medium text-purple-200">Block Rewards</div>
						<div class="text-purple-200/60">10%</div>
						<div class="text-purple-200/60">1,000,000,000</div>
						<div class="text-right text-purple-200/60">240 months vesting</div>
					</div>
					<div class="grid grid-cols-4 px-6 py-4">
						<div class="font-medium text-purple-200">Early</div>
						<div class="text-purple-200/60">15%</div>
						<div class="text-purple-200/60">1,500,000,000</div>
						<div class="text-right text-purple-200/60">No lock</div>
					</div>
					<div class="grid grid-cols-4 px-6 py-4">
						<div class="font-medium text-purple-200">Mid</div>
						<div class="text-purple-200/60">30%</div>
						<div class="text-purple-200/60">3,000,000,000</div>
						<div class="text-right text-purple-200/60">60 months vesting</div>
					</div>
					<div class="grid grid-cols-4 px-6 py-4">
						<div class="font-medium text-purple-200">Late</div>
						<div class="text-purple-200/60">20%</div>
						<div class="text-purple-200/60">2,000,000,000</div>
						<div class="text-right text-purple-200/60">60 month lock, 120 months vesting</div>
					</div>
				</div>
			</div>

			<!-- Team Section -->
			<div class="mb-8 overflow-hidden rounded-xl border border-yellow-400/20">
				<div class="bg-yellow-400/10 px-6 py-4">
					<h3 class="font-display text-xl text-yellow-200">Team (10%)</h3>
				</div>
				<div class="divide-y divide-white/5">
					<div class="grid grid-cols-4 px-6 py-4">
						<div class="font-medium text-yellow-200">Team Allocation</div>
						<div class="text-yellow-200/60">10%</div>
						<div class="text-yellow-200/60">1,000,000,000</div>
						<div class="text-right text-yellow-200/60">24 month lock, 36 months vesting</div>
					</div>
				</div>
			</div>

			<!-- Investors Section -->
			<div class="mb-8 overflow-hidden rounded-xl border border-orange-400/20">
				<div class="bg-orange-400/10 px-6 py-4">
					<h3 class="font-display text-xl text-orange-200">Investors (1.73%)</h3>
				</div>
				<div class="divide-y divide-white/5">
					<div class="grid grid-cols-4 px-6 py-4">
						<div class="font-medium text-orange-200">Private Round</div>
						<div class="text-orange-200/60">0.56%</div>
						<div class="text-orange-200/60">56,000,000</div>
						<div class="text-right text-orange-200/60">24 month lock, 36 months vesting</div>
					</div>
					<div class="grid grid-cols-4 px-6 py-4">
						<div class="font-medium text-orange-200">Pre-Seed</div>
						<div class="text-orange-200/60">1.01%</div>
						<div class="text-orange-200/60">100,800,000</div>
						<div class="text-right text-orange-200/60">24 month lock, 36 months vesting</div>
					</div>
					<div class="grid grid-cols-4 px-6 py-4">
						<div class="font-medium text-orange-200">Seed</div>
						<div class="text-orange-200/60">0.16%</div>
						<div class="text-orange-200/60">16,000,000</div>
						<div class="text-right text-orange-200/60">12 month lock and vesting</div>
					</div>
				</div>
			</div>

			<!-- Treasury Section -->
			<div class="overflow-hidden rounded-xl border border-green-400/20">
				<div class="bg-green-400/10 px-6 py-4">
					<h3 class="font-display text-xl text-green-200">Treasury Distribution (13.27%)</h3>
				</div>
				<div class="divide-y divide-white/5">
					<div class="grid grid-cols-4 px-6 py-4">
						<div class="font-medium text-green-200">Early</div>
						<div class="text-green-200/60">3.27%</div>
						<div class="text-green-200/60">327,200,000</div>
						<div class="text-right text-green-200/60">No lock</div>
					</div>
					<div class="grid grid-cols-4 px-6 py-4">
						<div class="font-medium text-green-200">Mid</div>
						<div class="text-green-200/60">5%</div>
						<div class="text-green-200/60">500,000,000</div>
						<div class="text-right text-green-200/60">24 month lock</div>
					</div>
					<div class="grid grid-cols-4 px-6 py-4">
						<div class="font-medium text-green-200">Late</div>
						<div class="text-green-200/60">5%</div>
						<div class="text-green-200/60">500,000,000</div>
						<div class="text-right text-green-200/60">60 month lock</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Governance Note -->
		<section class="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-8">
			<div class="flex items-center gap-4">
				<div class="flex-shrink-0">
					<div class="rounded-full border border-white/10 bg-white/5 p-3">
						<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</div>
				</div>
				<div>
					<h3 class="font-display text-xl">Community Governance</h3>
					<p class="mt-2 text-white/60">
						These allocations represent the current state of Voi's token distribution. Through our decentralized governance system, the community has the power to propose and vote on changes to these allocations, ensuring the ecosystem evolves according to the collective will of its participants.
					</p>
					<a
						href="/pages/governance/overview"
						class="mt-4 inline-flex items-center text-sm text-voi-light hover:text-voi"
					>
						Learn more about governance
						<svg class="ml-1 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</a>
				</div>
			</div>
		</section>
	</div>

	<svelte:fragment slot="related">
		<a
			href="/pages/governance/overview"
			class="group flex transform flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10"
		>
			<h3 class="font-display text-xl font-bold">Governance</h3>
			<p class="mt-2 font-mono text-sm text-white/60">
				Learn how token holders participate in decision-making.
			</p>
			<div class="mt-4 flex items-center font-mono text-sm text-white/40">
				<span>Learn More</span>
				<svg class="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</div>
		</a>

		<a
			href="/pages/rewards/incentives"
			class="group flex transform flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10"
		>
			<h3 class="font-display text-xl font-bold">Incentives</h3>
			<p class="mt-2 font-mono text-sm text-white/60">
				Explore the various ways to earn tokens.
			</p>
			<div class="mt-4 flex items-center font-mono text-sm text-white/40">
				<span>Learn More</span>
				<svg class="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</div>
		</a>

		<a
			href="/pages/about/vision"
			class="group flex transform flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10"
		>
			<h3 class="font-display text-xl font-bold">Vision</h3>
			<p class="mt-2 font-mono text-sm text-white/60">
				Understand Voi's mission and goals.
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