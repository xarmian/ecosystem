<script lang="ts">
	import SubSectionTemplate from '$lib/components/SubSectionTemplate.svelte';
	import Section from '$lib/components/Section.svelte';
	import InfoTile from '$lib/components/InfoTile.svelte';
	import ActionTile from '$lib/components/ActionTile.svelte';
	import LinkButton from '$lib/components/LinkButton.svelte';

	const copyCommand = () => {
		navigator.clipboard.writeText('/bin/bash -c "$(curl -fsSL https://get.voi.network/swarm)"');
	};

	const walletIcon = `<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
		<path d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>`;

	const downloadIcon = `<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
		<path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>`;

	const tokenIcon = `<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
		<path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>`;

	const onlineIcon = `<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
		<path d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>`;

	const rewardsIcon = `<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
		<path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>`;

	const renewalIcon = `<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
		<path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>`;
</script>

<SubSectionTemplate title="For Node Runners" description="Start earning block rewards">
	<!-- Main Content -->
	<div class="space-y-8 max-w-[90rem] mx-auto">

		<!-- Step 1: Select Setup Type -->
		<Section title="Select Setup Type" icon={walletIcon} number={1}>
			<div class="grid gap-6 sm:grid-cols-2">
				<InfoTile
					title="VPS (Linux)"
					description="Run your node on a Virtual Private Server with Linux. Recommended for stable, 24/7 operation."
					variant="dark"
				/>
				<InfoTile
					title="Local Machine"
					description="Run your node on your personal computer with Linux or Windows."
					variant="dark"
				/>
			</div>
		</Section>

		<!-- Step 2: Install Software -->
		<Section title="Install Software" icon={downloadIcon} number={2}>
			<div class="grid gap-6 sm:grid-cols-2">
				<InfoTile
					title="Linux (Voi Swarm)"
					description="Official node running solution for Linux systems."
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

				<InfoTile
					title="Windows"
					description="Community solutions for Windows systems:"
					variant="dark"
				>
					<div class="mt-4 space-y-3">
						<LinkButton
							href="https://github.com/urtho/a1cn"
							label="A1CN"
							description="Simple node runner"
							external={true}
						/>
						<LinkButton
							href="https://github.com/FunctionalAlgorithm/VoiNode"
							label="Func"
							description="Advanced node management"
							external={true}
						/>
					</div>
				</InfoTile>
			</div>
		</Section>

		<!-- Step 3: Get Tokens -->
		<Section title="Get Tokens" icon={tokenIcon} number={3}>
			<div class="grid gap-6 sm:grid-cols-2">
				<ActionTile
					title="Quick Start (Fountain)"
					description="Get a small amount of tokens from the community fountain to get your node online quickly."
					href="https://fountain.voirewards.com/"
					external={true}
					actionText="Visit Fountain"
					variant="dark"
				/>
				<ActionTile
					title="Buy Tokens"
					description="Purchase VOI tokens from MEXC exchange for long-term node operation."
					href="https://www.mexc.com/exchange/VOI_USDT"
					external={true}
					actionText="Trade on MEXC"
					variant="dark"
				/>
			</div>
		</Section>

		<!-- Step 4: Go Online -->
		<Section title="Go Online" icon={onlineIcon} number={4}>
			<InfoTile
				title="Configuration Steps"
				description="Follow the setup instructions for your chosen software to configure and start your node. Make sure to:"
				variant="dark"
			>
				<ul class="mt-4 list-inside list-disc space-y-2 text-sm text-white/60">
					<li>Configure your network settings</li>
					<li>Set up your participation keys</li>
					<li>Start your node and verify it's syncing</li>
				</ul>
			</InfoTile>
		</Section>

		<!-- Step 5: Check Rewards -->
		<Section title="Check Rewards" icon={rewardsIcon} number={5}>
			<div class="grid gap-6 sm:grid-cols-2">
				<ActionTile
					title="Weekly Rewards"
					description="Track your weekly participation rewards on VoiRewards."
					href="https://voirewards.com"
					external={true}
					actionText="Visit Site"
					variant="dark"
				/>
				<ActionTile
					title="Block Rewards"
					description="Learn about block proposal rewards and how they're distributed."
					href="/pages/rewards/node-running"
					variant="dark"
				/>
			</div>
		</Section>

		<!-- Step 6: Key Renewal -->
		<Section title="Key Renewal" icon={renewalIcon} number={6}>
			<InfoTile
				title="Key Management"
				description="Participation keys must be renewed regularly to continue participating in consensus. Make sure to:"
				variant="dark"
			>
				<ul class="mt-4 list-inside list-disc space-y-2 text-sm text-white/60">
					<li>Monitor your key expiration date</li>
					<li>Generate new keys before the current ones expire</li>
					<li>Register your new keys on the network</li>
				</ul>
			</InfoTile>
		</Section>

		<!-- Help Section -->
		<div class="rounded-xl border border-white/10 bg-white/5 p-6">
			<div class="flex items-center justify-between">
				<div>
					<h3 class="font-display text-xl">Need Help?</h3>
					<p class="mt-2 text-sm text-white/60">
						Get support from the community
					</p>
				</div>
				<a href="https://discord.com/channels/1055863853633785857/1055864028083826748" 
					target="_blank" 
					rel="noopener"
					class="flex items-center rounded-lg border border-white/10 bg-black/30 px-4 py-2 text-sm text-white/60 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white/80"
				>
					<span>Join Discord</span>
					<svg class="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</a>
			</div>
		</div>
	</div>

	<!-- Related Resources -->
	<svelte:fragment slot="related">
		<ActionTile
			title="Node Requirements"
			description="Hardware requirements and staking details"
			href="/pages/rewards/node-running"
		/>

		<ActionTile
			title="Block Rewards"
			description="How block proposal rewards work"
			href="/pages/rewards/block-rewards"
		/>

		<ActionTile
			title="VoiRewards"
			description="Track your participation rewards"
			href="https://voirewards.com"
			external={true}
			actionText="Visit Site"
		/>
	</svelte:fragment>
</SubSectionTemplate>