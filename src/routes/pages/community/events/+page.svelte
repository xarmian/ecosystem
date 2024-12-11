<script lang="ts">
	import SubSectionTemplate from '$lib/components/SubSectionTemplate.svelte';
	import Section from '$lib/components/Section.svelte';
	import InfoTile from '$lib/components/InfoTile.svelte';
	import ActionTile from '$lib/components/ActionTile.svelte';

	const twitterIcon = `<svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
		<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
	</svg>`;

	const meetings = [
		{
			title: 'Builders Committee',
			time: 'Wednesdays at 9:00 AM EST',
			color: 'purple',
			meetingUrl: 'https://meet.google.com/neh-cnjd-uuo',
			description: 'Weekly discussions on ecosystem development and technical improvements.'
		},
		{
			title: 'Voiagers Committee',
			time: 'Wednesdays at 12:00 PM EST',
			color: 'blue',
			meetingUrl: 'https://meet.google.com/roc-qmto-wxm',
			description: 'Community engagement and growth initiatives planning.'
		},
		{
			title: 'Network Committee',
			time: 'Thursdays at 12:00 PM EST',
			color: 'green',
			meetingUrl: 'https://meet.google.com/gbk-rkho-jnm',
			description: 'Network performance and infrastructure discussions.'
		},
		{
			title: 'Council Meeting',
			time: 'Tuesdays at 11:00 AM EST',
			color: 'yellow',
			meetingUrl: '#',
			description: 'High-level ecosystem decisions and governance.',
			isLive: true
		}
	];

	const communityKols = [
		{
			name: 'Crehate',
			handle: '@crehate',
			role: 'Community KOL',
			url: 'https://x.com/crehate',
			icon: twitterIcon
		},
		{
			name: 'Taco',
			handle: '@taco_coin',
			role: 'Community KOL',
			url: 'https://x.com/taco_coin',
			icon: twitterIcon
		},
		{
			name: 'Ice Age',
			handle: '@IceAgeTrails',
			role: 'Community KOL',
			url: 'https://x.com/IceAgeTrails',
			icon: twitterIcon
		},
		{
			name: 'Mazza',
			handle: '@itsmazza_eth',
			role: 'Community KOL',
			url: 'https://x.com/itsmazza_eth',
			icon: twitterIcon
		}
	];
</script>

<SubSectionTemplate title="Community Events" description="Join our regular meetings and community events">
	<div class="space-y-8">
		<!-- Introduction -->
		<Section title="Overview">
			<p class="text-lg text-white/80">
				Voi's community is built on active participation and open dialogue. All committee meetings are open
				to the public, recorded, and transcribed for transparency.
			</p>
		</Section>

		<!-- Regular Committee Meetings -->
		<Section title="Regular Governance Meetings">
			<div class="grid gap-6 grid-cols-1 md:grid-cols-2">
				{#each meetings as meeting}
					<InfoTile
						title={meeting.title}
						description={meeting.description}
						variant="dark"
					>
						<div class="mt-4 flex flex-col gap-4">
							<div class="flex items-center gap-2 text-sm text-white/60">
								<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
									<path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>
								<span>{meeting.time}</span>
							</div>
							<div class="flex flex-wrap gap-2">
								<a
									href={meeting.meetingUrl}
									target="_blank"
									rel="noopener noreferrer"
									class="inline-flex items-center gap-1 rounded-full border border-{meeting.color}-400/20 bg-{meeting.color}-400/10 px-3 py-1 text-sm text-{meeting.color}-200 transition-colors hover:bg-{meeting.color}-400/20"
								>
									<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
										<path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" stroke-linecap="round" stroke-linejoin="round"/>
									</svg>
									{meeting.isLive ? 'Watch Live' : 'Join Meeting'}
								</a>
								<a
									href="#"
									class="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/60 transition-colors hover:bg-white/10"
								>
									<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
										<path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" stroke-linecap="round" stroke-linejoin="round"/>
									</svg>
									{meeting.isLive ? 'Past Recordings' : 'Past Meetings'}
								</a>
							</div>
						</div>
					</InfoTile>
				{/each}
			</div>
		</Section>

		<!-- Community Events -->
		<Section title="Community Events">
			<p class="mb-6 text-lg text-white/80">
				Follow our community KOLs for Twitter Spaces and additional events
			</p>
			<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
				{#each communityKols as kol}
					<a
						href={kol.url}
						target="_blank"
						rel="noopener noreferrer"
						class="group block transform transition-all duration-200 hover:scale-[1.02]"
					>
						<InfoTile
							title={kol.handle}
							description=""
							variant="dark"
						>
							<div slot="header" class="flex items-center gap-3">
								<div class="flex h-10 w-10 items-center justify-center rounded-full border border-blue-400/20 bg-blue-400/10">
									<div class="text-blue-400">
										{@html kol.icon}
									</div>
								</div>
								<div class="text-sm text-white/60">{kol.role}</div>
							</div>
							<div class="mt-4 flex items-center gap-1 text-sm text-blue-400 transition-all duration-200 group-hover:text-blue-300">
								<span>Follow on Twitter</span>
								<svg class="h-4 w-4 transform transition-all duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
									<path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>
							</div>
						</InfoTile>
					</a>
				{/each}
			</div>
		</Section>
	</div>

	<svelte:fragment slot="related">
		<ActionTile
			title="Governance"
			description="Learn how decisions are made in the Voi ecosystem."
			href="/pages/governance/overview"
		/>
		<ActionTile
			title="Social Channels"
			description="Connect with the Voi community on social media."
			href="/pages/community/socials"
		/>
		<ActionTile
			title="News"
			description="Stay updated with the latest announcements."
			href="/pages/community/news"
		/>
	</svelte:fragment>
</SubSectionTemplate>
