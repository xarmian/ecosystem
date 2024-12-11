<script lang="ts">
	import SubSectionTemplate from '$lib/components/SubSectionTemplate.svelte';
	import Section from '$lib/components/Section.svelte';
	import InfoTile from '$lib/components/InfoTile.svelte';
	import ActionTile from '$lib/components/ActionTile.svelte';

	const socialChannels = [
		{
			title: 'Twitter',
			handle: 'Public Discussions',
			description:
				"The voice of Voiagers in the wider crypto ecosystem. Join us in spreading the word about Voi's mission and achievements.",
			url: 'https://twitter.com/Voi_Net',
			icon: `<svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
				<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
			</svg>`,
			color: 'twitter'
		},
		{
			title: 'Discord',
			handle: 'Community Hub',
			description:
				'Our primary community hub for governance, real-time discussions, and transparent decision-making. The best place to get help and engage with the community.',
			url: 'https://discord.gg/vnFbrJrHeW',
			icon: `<svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
				<path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026c.462-.62.874-1.275 1.226-1.963.021-.04.001-.088-.041-.104a13.201 13.201 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z"/>
			</svg>`,
			color: 'discord'
		},
		{
			title: 'Telegram',
			handle: 'Updates & Events',
			description:
				'Stay updated on community events and participate in real-time conversations about ongoing activities.',
			url: 'https://t.me/VoiOfficial',
			icon: `<svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
				<path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
			</svg>`,
			color: 'telegram'
		},
		{
			title: 'Medium',
			handle: 'Official Updates',
			description:
				"Access official, ratified updates from the foundation after they've been through the community governance process.",
			url: 'https://medium.com/@voifoundation',
			icon: `<svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
				<path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
			</svg>`,
			color: 'medium'
		}
	];
</script>

<SubSectionTemplate title="Social Channels" description="Connect with the Voi community">
	<div class="space-y-8">
		<Section title="Overview">
			<p class="text-lg text-white/80">
				Join our vibrant community across multiple platforms, each serving a unique purpose in the
				Voi ecosystem.
			</p>
		</Section>

		<!-- Social Channels Grid -->
		<div class="social-grid">
			{#each socialChannels as channel}
				<a
					href={channel.url}
					target="_blank"
					rel="noopener noreferrer"
					class="group transition-transform hover:scale-[1.02]"
				>
					<InfoTile title={channel.title} description={channel.description} variant="dark">
						<div slot="header">
							<div class="flex items-center justify-between">
								<div class="flex items-center gap-4">
									<div
										class="flex h-12 w-12 items-center justify-center rounded-full border border-{channel.color}-400/20 bg-{channel.color}-400/10"
									>
										<div class="text-{channel.color}-400">
											{@html channel.icon}
										</div>
									</div>
									<div class="text-sm text-white/60">
										{channel.handle}
									</div>
								</div>
								<div
									class="flex h-8 w-8 items-center justify-center text-{channel.color}-400 opacity-60 transition-opacity group-hover:opacity-80"
								>
									{@html channel.icon}
								</div>
							</div>
						</div>
						<div class="mt-auto flex items-center justify-end pt-4">
							<div
								class="inline-flex items-center gap-2 rounded-full border border-{channel.color}-400/20 bg-{channel.color}-400/10 px-4 py-2 text-sm text-{channel.color}-400 transition-colors group-hover:bg-{channel.color}-400/20"
							>
								Join Now
								<svg
									class="h-4 w-4"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
								>
									<path
										d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</div>
						</div>
					</InfoTile>
				</a>
			{/each}
		</div>
	</div>

	<svelte:fragment slot="related">
		<ActionTile
			title="Governance"
			description="Learn how to participate in Voi's decision-making process."
			href="/pages/governance/overview"
		/>
		<ActionTile
			title="Events"
			description="Discover upcoming community events and activities."
			href="/pages/community/events"
		/>
		<ActionTile
			title="News"
			description="Stay updated with the latest Voi announcements."
			href="/pages/community/news"
		/>
	</svelte:fragment>
</SubSectionTemplate>

<style>
	.social-grid {
		display: grid;
		gap: 1.5rem;
		grid-template-columns: 1fr;
	}

	@media (min-width: 1024px) {
		.social-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	.social-grid > * {
		display: flex;
		height: 100%;
	}

	.social-grid :global(.info-tile) {
		display: flex;
		flex-direction: column;
		flex: 1;
	}

	.social-grid :global(.info-tile > div) {
		height: 100%;
	}

	/* Twitter brand color */
	:global(.text-twitter-400) {
		color: rgb(29, 161, 242) !important;
	}
	:global(.border-twitter-400\/20) {
		border-color: rgba(29, 161, 242, 0.2) !important;
	}
	:global(.bg-twitter-400\/10) {
		background-color: rgba(29, 161, 242, 0.1) !important;
	}

	/* Discord brand color */
	:global(.text-discord-400) {
		color: rgb(88, 101, 242) !important;
	}
	:global(.border-discord-400\/20) {
		border-color: rgba(88, 101, 242, 0.2) !important;
	}
	:global(.bg-discord-400\/10) {
		background-color: rgba(88, 101, 242, 0.1) !important;
	}

	/* Telegram brand color */
	:global(.text-telegram-400) {
		color: rgb(0, 136, 204) !important;
	}
	:global(.border-telegram-400\/20) {
		border-color: rgba(0, 136, 204, 0.2) !important;
	}
	:global(.bg-telegram-400\/10) {
		background-color: rgba(0, 136, 204, 0.1) !important;
	}

	/* Medium brand color */
	:global(.text-medium-400) {
		color: rgb(2, 184, 117) !important;
	}
	:global(.border-medium-400\/20) {
		border-color: rgba(2, 184, 117, 0.2) !important;
	}
	:global(.bg-medium-400\/10) {
		background-color: rgba(2, 184, 117, 0.1) !important;
	}
</style>
