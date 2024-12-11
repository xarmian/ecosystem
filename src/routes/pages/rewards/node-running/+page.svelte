<script lang="ts">
	import SubSectionTemplate from '$lib/components/SubSectionTemplate.svelte';
	import Section from '$lib/components/Section.svelte';
	import InfoTile from '$lib/components/InfoTile.svelte';
	import ActionTile from '$lib/components/ActionTile.svelte';

	const copyCommand = () => {
		navigator.clipboard.writeText('/bin/bash -c "$(curl -fsSL https://get.voi.network/swarm)"');
	};
</script>

<SubSectionTemplate title="Node Running" description="Earn rewards by securing the network">
	<div class="space-y-8" slot="default">
		<!-- Introduction -->
		<Section title="Overview">
			<p class="text-lg text-white/80">
				Participate in Voi's network security by running a node and earn rewards from the 1 billion
				$VOI block reward allocation. Rewards are distributed weekly based on your node's block
				production.
			</p>
		</Section>

		<!-- Quick Start -->
		<Section title="Quick Start with Voi Swarm">
			<a
				href="https://voinetwork.github.io/voi-swarm/installation/installation/"
				target="_blank"
				class="inline-flex items-center rounded-lg border border-white/10 bg-[#1a0b2e]/80 px-4 py-2 text-sm text-purple-200 transition-all hover:border-white/20 hover:bg-[#1a0b2e]"
				slot="button"
			>
				Installation Guide
				<svg class="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
					<path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</a>

			<InfoTile
				title=""
				description="One-line installation for Voi Swarm, the official node running software."
				variant="dark"
			>
				<div class="mt-4 rounded-lg border border-white/10 bg-black/50 p-4">
					<div class="flex flex-col gap-4">
						<div class="font-mono text-sm overflow-x-auto">
							<span class="text-white/60">$</span>
							<span class="text-purple-400">/bin/bash -c "$(curl -fsSL https://get.voi.network/swarm)"</span>
						</div>
						<div class="flex justify-between items-center">
							<span class="text-xs text-white/40">One-line installation command</span>
							<button
								on:click={copyCommand}
								class="flex items-center rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/60 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white/80"
							>
								<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
									<path d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>
								<span class="ml-2">Copy</span>
							</button>
						</div>
					</div>
				</div>
			</InfoTile>
		</Section>

		<!-- Block Rewards -->
		<Section title="Block Rewards">
			<div class="grid gap-6 md:grid-cols-2">
				<InfoTile
					title="Current Rewards"
					description=""
					variant="dark"
				>
					<div class="space-y-3 text-white/80">
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
							~45% Annual Percentage Rate (APR)
						</div>
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
							~20 $VOI per block produced
						</div>
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
							Rewards paid every Wednesday
						</div>
					</div>
				</InfoTile>

				<InfoTile
					title="Distribution Schedule"
					description=""
					variant="dark"
				>
					<div class="space-y-3 text-white/80">
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
							27% distributed in first 2 years
						</div>
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
							55% distributed in first 5 years
						</div>
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
							Initial weekly reward: 3M tokens
						</div>
					</div>
				</InfoTile>
			</div>
		</Section>

		<!-- Track Your Rewards -->
		<Section title="Monitor Your Performance">
			<InfoTile
				title=""
				description="Track your node's block production and pending rewards in real-time."
				variant="dark"
				icon={`<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
					<path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>`}
			>
				<div slot="footer" class="mt-4 flex items-center font-mono text-sm text-white/40">
					<a
						href="https://voirewards.com/"
						target="_blank"
						class="inline-flex items-center"
					>
						<span>Check your rewards</span>
						<svg class="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
							<path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
					</a>
				</div>
			</InfoTile>
		</Section>

		<!-- System Requirements -->
		<Section title="System Requirements">
			<a
				href="https://voinetwork.github.io/voi-swarm/installation/system-requirements/"
				target="_blank"
				class="inline-flex items-center rounded-lg border border-white/10 bg-[#1a0b2e]/80 px-4 py-2 text-sm text-purple-200 transition-all hover:border-white/20 hover:bg-[#1a0b2e]"
				slot="button"
			>
				Full Requirements
				<svg class="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
					<path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</a>

			<p class="text-white/80">
				Running a Voi node has minimal hardware requirements, making it accessible to most users:
			</p>

			<div class="mt-6 grid gap-6 md:grid-cols-4">
				<InfoTile title="CPU" description="8 vCPUs" variant="dark" />
				<InfoTile title="Memory" description="8GB RAM" variant="dark" />
				<InfoTile title="Storage" description="100GB" variant="dark" />
				<InfoTile title="Network" description="100 Mbps" variant="dark" />
			</div>
		</Section>

		<!-- Staking Flexibility -->
		<Section title="Flexible Staking Options">
			<InfoTile
				title=""
				description="Stake your tokens with complete flexibility - no lockup period required. You can stake any account on a node, and even use Node as a Service providers who will stake your account on their node for a fee."
				variant="dark"
				icon={`<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
					<path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>`}
			/>
		</Section>

		<!-- Node Running Options -->
		<Section title="Node Running Options">
			<div class="grid gap-6 md:grid-cols-2">
				<InfoTile
					title="Official Documentation"
					description="Follow our official documentation to set up and run your node using Voi Swarm."
					variant="dark"
					icon={`<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
						<path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>`}
				>
					<div slot="footer" class="mt-4">
						<a
							href="https://voinetwork.github.io/voi-swarm/"
							target="_blank"
							class="inline-flex w-full items-center justify-between rounded-xl border border-white/10 bg-black/30 px-4 py-2 text-white transition-all duration-200 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10"
						>
							<div class="flex items-center gap-2">
								<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
									<path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>
								<span class="font-display text-base">Voi Swarm</span>
							</div>
							<span class="text-sm text-white/60">Official node software</span>
						</a>
					</div>
				</InfoTile>

				<InfoTile
					title="Community Solutions"
					description="Try community-maintained alternatives for running nodes on Windows or Mac."
					variant="dark"
					icon={`<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
						<path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>`}
				>
					<div class="mt-4 space-y-3">
						<a
							href="https://github.com/AustP/austs-one-click-node"
							target="_blank"
							class="inline-flex w-full items-center justify-between rounded-xl border border-white/10 bg-black/30 px-4 py-2 text-white transition-all duration-200 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10"
						>
							<div class="flex items-center gap-2">
								<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
									<path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>
								<span class="font-display text-base">A1CN</span>
							</div>
							<span class="text-sm text-white/60">Simple node runner</span>
						</a>

						<a
							href="https://github.com/GalaxyPay/func"
							target="_blank"
							class="inline-flex w-full items-center justify-between rounded-xl border border-white/10 bg-black/30 px-4 py-2 text-white transition-all duration-200 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10"
						>
							<div class="flex items-center gap-2">
								<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
									<path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>
								<span class="font-display text-base">Func</span>
							</div>
							<span class="text-sm text-white/60">Advanced node management</span>
						</a>
					</div>
				</InfoTile>
			</div>
		</Section>

		<!-- Support -->
		<Section title="Need Help?">
			<InfoTile
				title=""
				description="Join our dedicated node runners support channel on Discord for assistance and community support."
				variant="dark"
				icon={`<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
					<path d="M17 8H19C20.1046 8 21 8.89543 21 10V16C21 17.1046 20.1046 18 19 18H17V22L13 18H8C6.89543 18 6 17.1046 6 16V15M13 3H5C3.89543 3 3 3.89543 3 5V11C3 12.1046 3.89543 13 5 13H11L15 17V13H17C18.1046 13 19 12.1046 19 11V5C19 3.89543 18.1046 3 17 3H13Z" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>`}
			>
				<div slot="footer" class="mt-4 flex items-center font-mono text-sm text-white/40">
					<a
						href="https://discord.com/channels/1055863853633785857/1128672413048115250"
						target="_blank"
						class="inline-flex items-center"
					>
						<span>Join Node Support Channel</span>
						<svg class="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
							<path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
					</a>
				</div>
			</InfoTile>
		</Section>
	</div>

	<svelte:fragment slot="related">
		<ActionTile
			title="Incentives"
			description="Explore additional ways to earn rewards in the Voi ecosystem."
			href="/pages/rewards/incentives"
		/>
		<ActionTile
			title="Competitions"
			description="Participate in competitions and earn special rewards."
			href="/pages/rewards/competitions"
		/>
		<ActionTile
			title="Technical Details"
			description="Deep dive into node specifications and requirements."
			href="/pages/technical/nodes"
		/>
	</svelte:fragment>
</SubSectionTemplate>
