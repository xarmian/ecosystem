<script lang="ts">
	import SubSectionTemplate from '$lib/components/SubSectionTemplate.svelte';

	const copyCommand = () => {
		navigator.clipboard.writeText('/bin/bash -c "$(curl -fsSL https://get.voi.network/swarm)"');
	};
</script>

<SubSectionTemplate title="For Node Runners" description="Start earning block rewards">
	<!-- Main Content -->
	<div class="space-y-8 max-w-[90rem] mx-auto">
		<!-- Disclaimer -->
		<div class="rounded-lg border border-white/10 bg-white/5 p-4">
			<div class="flex items-center gap-3">
				<svg class="h-5 w-5 flex-shrink-0 text-white/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
				<p class="text-sm text-white/60">
					<span class="font-semibold text-white/80">Note:</span> Developing on Voi is identical to developing on Algorand, using the same tools and infrastructure. Voi extends functionality by supporting both Standard Assets and Smart Assets, providing more options for your use cases.
				</p>
			</div>
		</div>

		<!-- Step 1: Select Setup Type -->
		<div class="rounded-xl border border-white/10 bg-white/5 p-6">
			<div class="mb-6">
				<h2 class="flex items-center gap-3 text-xl">
					<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
					1. Select Setup Type
				</h2>
			</div>
			<div class="grid gap-6 sm:grid-cols-2">
				<div class="flex flex-col rounded-lg border border-white/10 bg-black/30 p-4">
					<h3 class="font-display text-lg">VPS (Linux)</h3>
					<p class="mt-2 text-sm text-white/60">
						Run your node on a Virtual Private Server with Linux. Recommended for stable, 24/7 operation.
					</p>
				</div>
				<div class="flex flex-col rounded-lg border border-white/10 bg-black/30 p-4">
					<h3 class="font-display text-lg">Local Machine</h3>
					<p class="mt-2 text-sm text-white/60">
						Run your node on your personal computer with Linux or Windows.
					</p>
				</div>
			</div>
		</div>

		<!-- Step 2: Install Software -->
		<div class="rounded-xl border border-white/10 bg-white/5 p-6">
			<div class="mb-6">
				<h2 class="flex items-center gap-3 text-xl">
					<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
					2. Install Software
				</h2>
			</div>
			<div class="grid gap-6 sm:grid-cols-2">
				<!-- Linux Option -->
				<div class="flex flex-col rounded-lg border border-white/10 bg-black/30 p-4">
					<h3 class="font-display text-lg">Linux (Voi Swarm)</h3>
					<p class="mt-2 text-sm text-white/60">
						Official node running solution for Linux systems.
					</p>
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
				</div>

				<!-- Windows Option -->
				<div class="flex flex-col rounded-lg border border-white/10 bg-black/30 p-4">
					<h3 class="font-display text-lg">Windows</h3>
					<p class="mt-2 text-sm text-white/60">
						Community solutions for Windows systems:
					</p>
					<div class="mt-4 space-y-3">
						<a href="https://github.com/urtho/a1cn" target="_blank" rel="noopener" 
							class="block rounded-lg border border-white/10 bg-black/50 p-3 text-sm text-purple-400 hover:text-purple-300 hover:border-white/20">
							<div class="flex justify-between items-center">
								<span>A1CN</span>
								<span class="text-white/40">Simple node runner</span>
							</div>
						</a>
						<a href="https://github.com/FunctionalAlgorithm/VoiNode" target="_blank" rel="noopener" 
							class="block rounded-lg border border-white/10 bg-black/50 p-3 text-sm text-purple-400 hover:text-purple-300 hover:border-white/20">
							<div class="flex justify-between items-center">
								<span>Func</span>
								<span class="text-white/40">Advanced node management</span>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>

		<!-- Step 3: Get Tokens -->
		<div class="rounded-xl border border-white/10 bg-white/5 p-6">
			<div class="mb-6">
				<h2 class="flex items-center gap-3 text-xl">
					<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
					3. Get Tokens
				</h2>
			</div>
			<div class="grid gap-6 sm:grid-cols-2">
				<div class="flex flex-col rounded-lg border border-white/10 bg-black/30 p-4">
					<h3 class="font-display text-lg">Quick Start (Fountain)</h3>
					<p class="mt-2 text-sm text-white/60">
						Get a small amount of tokens from the community fountain to get your node online quickly.
					</p>
					<div class="mt-auto pt-4">
						<a href="https://voi.fountain.fyi" target="_blank" rel="noopener" 
							class="inline-flex items-center rounded-lg border border-white/10 bg-black/50 px-4 py-2 text-sm text-purple-400 hover:text-purple-300 hover:border-white/20 font-mono">
							<span>Visit Fountain</span>
							<svg class="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
								<path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
						</a>
					</div>
				</div>
				<div class="flex flex-col rounded-lg border border-white/10 bg-black/30 p-4">
					<h3 class="font-display text-lg">Buy Tokens</h3>
					<p class="mt-2 text-sm text-white/60">
						Purchase VOI tokens from MEXC exchange for long-term node operation.
					</p>
					<div class="mt-auto pt-4">
						<a href="https://www.mexc.com/exchange/VOI_USDT" target="_blank" rel="noopener" 
							class="inline-flex items-center rounded-lg border border-white/10 bg-black/50 px-4 py-2 text-sm text-purple-400 hover:text-purple-300 hover:border-white/20 font-mono">
							<span>Trade on MEXC</span>
							<svg class="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
								<path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</div>

		<!-- Step 4: Go Online -->
		<div class="rounded-xl border border-white/10 bg-white/5 p-6">
			<div class="mb-6">
				<h2 class="flex items-center gap-3 text-xl">
					<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
					4. Go Online
				</h2>
			</div>
			<div class="rounded-lg border border-white/10 bg-black/30 p-4">
				<p class="text-sm text-white/60">
					Follow the setup instructions for your chosen software to configure and start your node. Make sure to:
				</p>
				<ul class="mt-4 list-inside list-disc space-y-2 text-sm text-white/60">
					<li>Configure your network settings</li>
					<li>Set up your participation keys</li>
					<li>Start your node and verify it's syncing</li>
				</ul>
			</div>
		</div>

		<!-- Step 5: Check Rewards -->
		<div class="rounded-xl border border-white/10 bg-white/5 p-6">
			<div class="mb-6">
				<h2 class="flex items-center gap-3 text-xl">
					<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
					5. Check Rewards
				</h2>
			</div>
			<div class="grid gap-6 sm:grid-cols-2">
				<a href="https://voirewards.com" target="_blank" rel="noopener" 
					class="flex flex-col rounded-lg border border-white/10 bg-black/30 p-4 hover:border-white/20">
					<h3 class="font-display text-lg">Weekly Rewards</h3>
					<p class="mt-2 text-sm text-white/60">
						Track your weekly participation rewards on VoiRewards.
					</p>
				</a>
				<a href="/pages/rewards/node-running" 
					class="flex flex-col rounded-lg border border-white/10 bg-black/30 p-4 hover:border-white/20">
					<h3 class="font-display text-lg">Block Rewards</h3>
					<p class="mt-2 text-sm text-white/60">
						Learn about block proposal rewards and how they're distributed.
					</p>
				</a>
			</div>
		</div>

		<!-- Step 6: Key Renewal -->
		<div class="rounded-xl border border-white/10 bg-white/5 p-6">
			<div class="mb-6">
				<h2 class="flex items-center gap-3 text-xl">
					<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
					6. Key Renewal
				</h2>
			</div>
			<div class="rounded-lg border border-white/10 bg-black/30 p-4">
				<p class="text-sm text-white/60">
					Participation keys must be renewed regularly to continue participating in consensus. Make sure to:
				</p>
				<ul class="mt-4 list-inside list-disc space-y-2 text-sm text-white/60">
					<li>Monitor your key expiration date</li>
					<li>Generate new keys before the current ones expire</li>
					<li>Register your new keys on the network</li>
				</ul>
			</div>
		</div>

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
		<a href="/pages/rewards/node-running" class="group flex transform flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10">
			<h3 class="font-display text-xl font-bold">Node Requirements</h3>
			<p class="mt-2 font-mono text-sm text-white/60">
				Hardware requirements and staking details
			</p>
			<div class="mt-4 flex items-center font-mono text-sm text-white/40">
				<span>Learn More</span>
				<svg class="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</div>
		</a>

		<a href="/pages/rewards/block-rewards" class="group flex transform flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10">
			<h3 class="font-display text-xl font-bold">Block Rewards</h3>
			<p class="mt-2 font-mono text-sm text-white/60">
				How block proposal rewards work
			</p>
			<div class="mt-4 flex items-center font-mono text-sm text-white/40">
				<span>Learn More</span>
				<svg class="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</div>
		</a>

		<a href="https://voirewards.com" target="_blank" rel="noopener" class="group flex transform flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10">
			<h3 class="font-display text-xl font-bold">VoiRewards</h3>
			<p class="mt-2 font-mono text-sm text-white/60">
				Track your participation rewards
			</p>
			<div class="mt-4 flex items-center font-mono text-sm text-white/40">
				<span>Visit Site</span>
				<svg class="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</div>
		</a>
	</svelte:fragment>
</SubSectionTemplate>