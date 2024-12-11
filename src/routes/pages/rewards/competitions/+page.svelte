<script lang="ts">
	import SubSectionTemplate from '$lib/components/SubSectionTemplate.svelte';
	import Section from '$lib/components/Section.svelte';
	import InfoTile from '$lib/components/InfoTile.svelte';
	import ActionTile from '$lib/components/ActionTile.svelte';

	const nftIcon = `<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
		<path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>`;

	const hackathonIcon = `<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
		<path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>`;

	const tokenIcon = `<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
		<path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>`;
</script>

<SubSectionTemplate title="Competitions" description="Participate in ecosystem challenges">
	<div class="space-y-8">
		<!-- Introduction -->
		<Section title="Overview">
			<p class="text-lg text-white/80">
				Throughout the year, Voi hosts exciting competitions that offer unique opportunities to win
				substantial prizes, including Voi tokens. From NFT challenges to hackathons, there's always
				something happening in the ecosystem for everyone to participate and earn rewards.
			</p>
		</Section>

		<!-- Upcoming Competitions -->
		<Section title="Upcoming Competitions">
			<div class="space-y-6">
				<!-- NFT Games -->
				<InfoTile
					title="NFT Games"
					description="Trade NFTs from new and existing collections. Collections from other networks can participate through cross-chain initiatives."
					variant="dark"
					icon={nftIcon}
				>
					<div slot="footer" class="mt-4 flex items-center justify-between">
						<span class="text-sm text-white/60">More details coming soon</span>
						<span class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/60">Coming Soon</span>
					</div>
				</InfoTile>

				<!-- Virtual Hackathon -->
				<InfoTile
					title="Virtual Hackathon"
					description="Build critical projects from the bounty board or bring your own innovative ideas to life on Voi."
					variant="dark"
					icon={hackathonIcon}
				>
					<div slot="footer" class="mt-4 flex items-center justify-between">
						<span class="text-sm text-white/60">More details coming soon</span>
						<span class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/60">Coming Soon</span>
					</div>
				</InfoTile>

				<!-- Token Wars -->
				<InfoTile
					title="Token Wars"
					description="Trade new and existing meme tokens. Existing communities from other networks can participate and compete."
					variant="dark"
					icon={tokenIcon}
				>
					<div slot="footer" class="mt-4 flex items-center justify-between">
						<span class="text-sm text-white/60">More details coming soon</span>
						<span class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/60">Coming Soon</span>
					</div>
				</InfoTile>
			</div>
		</Section>
	</div>

	<svelte:fragment slot="related">
		<ActionTile
			title="Incentives"
			description="Explore other ways to earn in the ecosystem."
			href="/pages/rewards/incentives"
		/>

		<ActionTile
			title="Bounties"
			description="View available bounties for builders."
			href="/pages/funding/bounties"
		/>

		<ActionTile
			title="Project Directory"
			description="Explore projects in the Voi ecosystem."
			href="/pages/projects/directory"
		/>
	</svelte:fragment>
</SubSectionTemplate> 