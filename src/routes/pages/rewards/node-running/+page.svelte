<script lang="ts">
	import SubSectionTemplate from '$lib/components/SubSectionTemplate.svelte';

	const copyCommand = () => {
		navigator.clipboard.writeText('/bin/bash -c "$(curl -fsSL https://get.voi.network/swarm)"');
	};
</script>

<SubSectionTemplate
	title="Node Running"
	description="Earn rewards by securing the network"
>
	<!-- Introduction -->
	<div class="mt-10 rounded-2xl border border-white/10 bg-white/5 p-8">
		<div class="prose prose-invert max-w-none">
			<p class="text-lg text-white/80">
				Participate in Voi's network security by running a node and earn rewards from the 1 billion $VOI block reward allocation. Rewards are distributed weekly based on your node's block production.
			</p>
		</div>
	</div>

	<!-- Quick Start -->
	<div class="mt-10 rounded-2xl border border-white/10 bg-white/5 p-8">
		<div class="flex items-center justify-between">
			<h2 class="text-2xl font-bold">Quick Start with Voi Swarm</h2>
			<a
				href="https://voinetwork.github.io/voi-swarm/installation/installation/"
				target="_blank"
				class="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm transition-all hover:border-white/20 hover:bg-white/10"
			>
				Installation Guide
				<svg class="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
					<path d="M9 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</a>
		</div>
		<div class="mt-6">
			<div class="rounded-xl border border-white/10 bg-gradient-to-br from-purple-400/10 to-transparent p-6">
				<div class="flex items-center justify-between">
					<div class="font-mono text-sm">
						<span class="text-white/60">$</span>
						<span class="text-purple-400">/bin/bash -c "$(curl -fsSL https://get.voi.network/swarm)"</span>
					</div>
					<button
						on:click={copyCommand}
						class="ml-4 flex items-center rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/60 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white/80"
					>
						<svg class="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
							<path
								d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
						Copy
					</button>
				</div>
				<p class="mt-4 text-sm text-white/60">
					One-line installation for Voi Swarm, the official node running software.
				</p>
			</div>
		</div>
	</div>

	<!-- Reward Structure -->
	<div class="mt-10 rounded-2xl border border-white/10 bg-white/5 p-8">
		<h2 class="text-2xl font-bold">Block Rewards</h2>
		<div class="mt-6 grid gap-6 md:grid-cols-2">
			<div class="rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6">
				<h3 class="font-display text-xl">Current Rewards</h3>
				<ul class="mt-4 space-y-3 text-white/80">
					<li class="flex items-start gap-2">
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
						~45% Annual Percentage Rate (APR)
					</li>
					<li class="flex items-start gap-2">
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
						~20 $VOI per block produced
					</li>
					<li class="flex items-start gap-2">
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
						Rewards paid every Wednesday
					</li>
				</ul>
			</div>

			<div class="rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6">
				<h3 class="font-display text-xl">Distribution Schedule</h3>
				<ul class="mt-4 space-y-3 text-white/80">
					<li class="flex items-start gap-2">
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
						27% distributed in first 2 years
					</li>
					<li class="flex items-start gap-2">
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
						55% distributed in first 5 years
					</li>
					<li class="flex items-start gap-2">
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
						Initial weekly reward: 3M tokens
					</li>
				</ul>
			</div>
		</div>
	</div>

	<!-- Track Your Rewards -->
	<div class="mt-10 rounded-2xl border border-white/10 bg-gradient-to-br from-purple-400/10 to-transparent p-8">
		<div class="flex items-center gap-4">
			<div class="flex-shrink-0">
				<div class="rounded-full border border-purple-400/20 bg-purple-400/10 p-3">
					<svg class="h-6 w-6 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
						<path
							d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</div>
			</div>
			<div>
				<h3 class="font-display text-xl">Monitor Your Performance</h3>
				<p class="mt-2 text-white/80">
					Track your node's block production and pending rewards in real-time.
				</p>
				<a
					href="https://voirewards.com/"
					target="_blank"
					class="mt-4 inline-flex items-center text-sm text-purple-400 hover:text-purple-300"
				>
					Check your rewards
					<svg class="ml-1 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
						<path
							d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</a>
			</div>
		</div>
	</div>

	<!-- System Requirements -->
	<div class="mt-10 rounded-2xl border border-white/10 bg-white/5 p-8">
		<div class="flex items-center justify-between">
			<h2 class="text-2xl font-bold">System Requirements</h2>
			<a
				href="https://voinetwork.github.io/voi-swarm/installation/system-requirements/"
				target="_blank"
				class="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm transition-all hover:border-white/20 hover:bg-white/10"
			>
				Full Requirements
				<svg class="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
					<path d="M9 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</a>
		</div>
		<p class="mt-4 text-white/80">Running a Voi node has minimal hardware requirements, making it accessible to most users:</p>
		<div class="mt-6 grid gap-6 md:grid-cols-4">
			<div class="rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6">
				<h3 class="font-display text-xl">CPU</h3>
				<p class="mt-2 text-sm text-white/60">8 vCPUs</p>
			</div>
			<div class="rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6">
				<h3 class="font-display text-xl">Memory</h3>
				<p class="mt-2 text-sm text-white/60">8GB RAM</p>
			</div>
			<div class="rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6">
				<h3 class="font-display text-xl">Storage</h3>
				<p class="mt-2 text-sm text-white/60">100GB</p>
			</div>
			<div class="rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6">
				<h3 class="font-display text-xl">Network</h3>
				<p class="mt-2 text-sm text-white/60">100 Mbps</p>
			</div>
		</div>
	</div>

	<!-- Staking Flexibility -->
	<div class="mt-10 rounded-2xl border border-white/10 bg-gradient-to-br from-purple-400/10 to-transparent p-8">
		<div class="flex items-center gap-4">
			<div class="flex-shrink-0">
				<div class="rounded-full border border-purple-400/20 bg-purple-400/10 p-3">
					<svg class="h-6 w-6 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
						<path
							d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</div>
			</div>
			<div>
				<h3 class="font-display text-xl">Flexible Staking Options</h3>
				<p class="mt-2 text-white/80">
					Stake your tokens with complete flexibility - no lockup period required. You can stake any account on a node, and even use Node as a Service providers who will stake your account on their node for a fee.
				</p>
			</div>
		</div>
	</div>

	<!-- Community Software -->
	<div class="mt-10 rounded-2xl border border-white/10 bg-white/5 p-8">
		<h2 class="text-2xl font-bold">Running Options</h2>
		<div class="mt-6 grid gap-6 md:grid-cols-2">
			<div class="rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6">
				<h3 class="font-display text-xl">Official Software</h3>
				<p class="mt-2 text-white/80">
					Voi Swarm provides a streamlined installation process and is officially maintained by the Voi team.
				</p>
			</div>
			<div class="rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6">
				<h3 class="font-display text-xl">Community Software</h3>
				<p class="mt-2 text-white/80">
					Run nodes from your local machine using alternative software developed and maintained by the Voi community.
				</p>
			</div>
		</div>
	</div>

	<!-- Support -->
	<div class="mt-10 rounded-2xl border border-white/10 bg-gradient-to-br from-purple-400/10 to-transparent p-8">
		<div class="flex items-center gap-4">
			<div class="flex-shrink-0">
				<div class="rounded-full border border-purple-400/20 bg-purple-400/10 p-3">
					<svg class="h-6 w-6 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
						<path
							d="M17 8H19C20.1046 8 21 8.89543 21 10V16C21 17.1046 20.1046 18 19 18H17V22L13 18H8C6.89543 18 6 17.1046 6 16V15M13 3H5C3.89543 3 3 3.89543 3 5V11C3 12.1046 3.89543 13 5 13H11L15 17V13H17C18.1046 13 19 12.1046 19 11V5C19 3.89543 18.1046 3 17 3H13Z"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</div>
			</div>
			<div>
				<h3 class="font-display text-xl">Need Help?</h3>
				<p class="mt-2 text-white/80">
					Join our dedicated node runners support channel on Discord for assistance and community support.
				</p>
				<a
					href="https://discord.com/channels/1055863853633785857/1128672413048115250"
					target="_blank"
					class="mt-4 inline-flex items-center text-sm text-purple-400 hover:text-purple-300"
				>
					Join Node Support Channel
					<svg class="ml-1 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
						<path
							d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</a>
			</div>
		</div>
	</div>

	<!-- Related Resources -->
	<svelte:fragment slot="related">
		<a
			href="/pages/rewards/incentives"
			class="group flex transform flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10"
		>
			<h3 class="font-display text-xl font-bold">Incentives</h3>
			<p class="mt-2 font-mono text-sm text-white/60">
				Explore additional ways to earn rewards in the Voi ecosystem.
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
			href="/pages/rewards/competitions"
			class="group flex transform flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10"
		>
			<h3 class="font-display text-xl font-bold">Competitions</h3>
			<p class="mt-2 font-mono text-sm text-white/60">
				Participate in competitions and earn special rewards.
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
			href="/pages/technical/nodes"
			class="group flex transform flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10"
		>
			<h3 class="font-display text-xl font-bold">Technical Details</h3>
			<p class="mt-2 font-mono text-sm text-white/60">
				Deep dive into node specifications and requirements.
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