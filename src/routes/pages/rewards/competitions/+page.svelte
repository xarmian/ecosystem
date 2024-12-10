<script lang="ts">
	import SubSectionTemplate from '$lib/components/SubSectionTemplate.svelte';
</script>

<SubSectionTemplate title="Competitions" description="Participate in ecosystem challenges">
	<!-- Introduction -->
	<div class="mt-10 rounded-2xl border border-white/10 bg-white/5 p-8">
		<div class="prose prose-invert max-w-none">
			<p class="text-lg text-white/80">
				Throughout the year, Voi hosts exciting competitions that offer unique opportunities to win
				substantial prizes, including Voi tokens. From NFT challenges to hackathons, there's always
				something happening in the ecosystem for everyone to participate and earn rewards.
			</p>
		</div>
	</div>

	<!-- Upcoming Competitions -->
	<div class="mt-10 rounded-2xl border border-white/10 bg-white/5 p-8">
		<h2 class="text-2xl font-bold">Upcoming Competitions</h2>
		<div class="mt-6 space-y-4">
			<!-- NFT Games -->
			<div class="rounded-xl border border-white/10 bg-gradient-to-br from-purple-400/10 to-transparent p-6">
				<div class="flex items-start gap-6">
					<div class="flex-shrink-0">
						<div class="rounded-lg bg-purple-400/10 p-3">
							<svg class="h-6 w-6 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
								<path
									d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</div>
					</div>
					<div class="flex-grow">
						<div class="flex items-center justify-between">
							<h3 class="font-display text-xl">NFT Games</h3>
							<span class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm"
								>Coming Soon</span
							>
						</div>
						<p class="mt-2 text-white/80">
							Trade NFTs from new and existing collections. Collections from other networks can participate
							through cross-chain initiatives.
						</p>
						<div class="mt-4">
							<span class="text-sm text-white/60">More details coming soon</span>
						</div>
					</div>
				</div>
			</div>

			<!-- Virtual Hackathon -->
			<div class="rounded-xl border border-white/10 bg-gradient-to-br from-purple-400/10 to-transparent p-6">
				<div class="flex items-start gap-6">
					<div class="flex-shrink-0">
						<div class="rounded-lg bg-purple-400/10 p-3">
							<svg class="h-6 w-6 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
								<path
									d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</div>
					</div>
					<div class="flex-grow">
						<div class="flex items-center justify-between">
							<h3 class="font-display text-xl">Virtual Hackathon</h3>
							<span class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm"
								>Coming Soon</span
							>
						</div>
						<p class="mt-2 text-white/80">
							Build critical projects from the bounty board or bring your own innovative ideas to life on
							Voi.
						</p>
						<div class="mt-4">
							<span class="text-sm text-white/60">More details coming soon</span>
						</div>
					</div>
				</div>
			</div>

			<!-- Token Wars -->
			<div class="rounded-xl border border-white/10 bg-gradient-to-br from-purple-400/10 to-transparent p-6">
				<div class="flex items-start gap-6">
					<div class="flex-shrink-0">
						<div class="rounded-lg bg-purple-400/10 p-3">
							<svg class="h-6 w-6 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
								<path
									d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</div>
					</div>
					<div class="flex-grow">
						<div class="flex items-center justify-between">
							<h3 class="font-display text-xl">Token Wars</h3>
							<span class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm"
								>Coming Soon</span
							>
						</div>
						<p class="mt-2 text-white/80">
							Trade new and existing meme tokens. Existing communities from other networks can participate
							and compete.
						</p>
						<div class="mt-4">
							<span class="text-sm text-white/60">More details coming soon</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<svelte:fragment slot="related">
		<a
			href="/pages/rewards/incentives"
			class="group flex transform flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10"
		>
			<h3 class="font-display text-xl font-bold">Incentives</h3>
			<p class="mt-2 font-mono text-sm text-white/60">
				Explore other ways to earn in the ecosystem.
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
			href="/pages/funding/bounties"
			class="group flex transform flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10"
		>
			<h3 class="font-display text-xl font-bold">Bounties</h3>
			<p class="mt-2 font-mono text-sm text-white/60">
				View available bounties for builders.
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
			href="/pages/projects/directory"
			class="group flex transform flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10"
		>
			<h3 class="font-display text-xl font-bold">Project Directory</h3>
			<p class="mt-2 font-mono text-sm text-white/60">
				Explore projects in the Voi ecosystem.
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