<script lang="ts">
	import SubSectionTemplate from '$lib/components/SubSectionTemplate.svelte';
</script>

<SubSectionTemplate
	title="Community Events"
	description="Join our regular meetings and community events"
>
	<div class="space-y-12">
		<!-- Introduction -->
		<section class="rounded-2xl border border-white/10 bg-white/5 p-8">
			<div class="prose prose-invert max-w-none">
				<p class="lead text-lg text-white/80">
					Voi's community is built on active participation and open dialogue. All committee meetings
					are open to the public, recorded, and transcribed for transparency.
				</p>
			</div>
		</section>

		<!-- Regular Committee Meetings -->
		<section class="rounded-2xl border border-white/10 bg-white/5 p-8">
			<h2 class="mb-6 text-2xl font-bold">Regular Governance Meetings</h2>
			<div class="grid gap-6 md:grid-cols-2">
				<!-- Builders Committee -->
				<div class="rounded-xl border border-purple-400/20 bg-purple-400/5 p-6">
					<div class="mb-4 flex items-center justify-between">
						<h3 class="font-display text-xl text-purple-200">Builders Committee</h3>
						<span
							class="rounded-full border border-purple-400/20 bg-purple-400/10 px-3 py-1 text-sm"
							>Weekly</span
						>
					</div>
					<div class="space-y-4">
						<div class="text-sm text-white/60">
							<div class="flex items-start gap-2">
								<svg
									class="mt-1 h-4 w-4 flex-shrink-0"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
								>
									<path
										d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
								<span>Wednesdays at 9:00 AM EST</span>
							</div>
						</div>
						<div class="flex flex-wrap gap-2">
							<a
								href="https://meet.google.com/neh-cnjd-uuo"
								target="_blank"
								rel="noopener noreferrer"
								class="inline-flex items-center gap-1 rounded-full border border-purple-400/20 bg-purple-400/10 px-3 py-1 text-sm text-purple-200 transition-colors hover:bg-purple-400/20"
							>
								<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
									<path
										d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
								Join Meeting
							</a>
							<a
								href="#"
								class="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/60 transition-colors hover:bg-white/10"
							>
								<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
									<path
										d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
								Past Meetings
							</a>
						</div>
					</div>
				</div>

				<!-- Voiagers Committee -->
				<div class="rounded-xl border border-blue-400/20 bg-blue-400/5 p-6">
					<div class="mb-4 flex items-center justify-between">
						<h3 class="font-display text-xl text-blue-200">Voiagers Committee</h3>
						<span class="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-sm"
							>Weekly</span
						>
					</div>
					<div class="space-y-4">
						<div class="text-sm text-white/60">
							<div class="flex items-start gap-2">
								<svg
									class="mt-1 h-4 w-4 flex-shrink-0"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
								>
									<path
										d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
								<span>Wednesdays at 12:00 PM EST</span>
							</div>
						</div>
						<div class="flex flex-wrap gap-2">
							<a
								href="https://meet.google.com/roc-qmto-wxm"
								target="_blank"
								rel="noopener noreferrer"
								class="inline-flex items-center gap-1 rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-sm text-blue-200 transition-colors hover:bg-blue-400/20"
							>
								<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
									<path
										d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
								Join Meeting
							</a>
							<a
								href="#"
								class="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/60 transition-colors hover:bg-white/10"
							>
								<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
									<path
										d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
								Past Meetings
							</a>
						</div>
					</div>
				</div>

				<!-- Network Committee -->
				<div class="rounded-xl border border-green-400/20 bg-green-400/5 p-6">
					<div class="mb-4 flex items-center justify-between">
						<h3 class="font-display text-xl text-green-200">Network Committee</h3>
						<span class="rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1 text-sm"
							>Weekly</span
						>
					</div>
					<div class="space-y-4">
						<div class="text-sm text-white/60">
							<div class="flex items-start gap-2">
								<svg
									class="mt-1 h-4 w-4 flex-shrink-0"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
								>
									<path
										d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
								<span>Thursdays at 12:00 PM EST</span>
							</div>
						</div>
						<div class="flex flex-wrap gap-2">
							<a
								href="https://meet.google.com/gbk-rkho-jnm"
								target="_blank"
								rel="noopener noreferrer"
								class="inline-flex items-center gap-1 rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1 text-sm text-green-200 transition-colors hover:bg-green-400/20"
							>
								<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
									<path
										d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
								Join Meeting
							</a>
							<a
								href="#"
								class="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/60 transition-colors hover:bg-white/10"
							>
								<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
									<path
										d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
								Past Meetings
							</a>
						</div>
					</div>
				</div>

				<!-- Council Meeting -->
				<div class="rounded-xl border border-yellow-400/20 bg-yellow-400/5 p-6">
					<div class="mb-4 flex items-center justify-between">
						<h3 class="font-display text-xl text-yellow-200">Council Meeting</h3>
						<span
							class="rounded-full border border-yellow-400/20 bg-yellow-400/10 px-3 py-1 text-sm"
							>Weekly</span
						>
					</div>
					<div class="space-y-4">
						<div class="text-sm text-white/60">
							<div class="flex items-start gap-2">
								<svg
									class="mt-1 h-4 w-4 flex-shrink-0"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
								>
									<path
										d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
								<span>Tuesdays at 11:00 AM EST</span>
							</div>
						</div>
						<div class="flex flex-wrap gap-2">
							<a
								href="#"
								class="inline-flex items-center gap-1 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-3 py-1 text-sm text-yellow-200 transition-colors hover:bg-yellow-400/20"
							>
								<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
									<path
										d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
								Watch Live
							</a>
							<a
								href="#"
								class="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/60 transition-colors hover:bg-white/10"
							>
								<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
									<path
										d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
								Past Recordings
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Community Events -->
		<section class="rounded-2xl border border-white/10 bg-white/5 p-8">
			<h2 class="mb-6 text-2xl font-bold">Community Events</h2>
			<div class="space-y-6">
				<p class="text-lg text-white/80">
					Follow our community KOLs for Twitter Spaces and additional events
				</p>
				<div class="grid gap-4 md:grid-cols-3">
					<a
						href="https://x.com/crehate"
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:border-blue-400/20 hover:bg-blue-400/5"
					>
						<div
							class="flex h-10 w-10 items-center justify-center rounded-full border border-blue-400/20 bg-blue-400/10"
						>
							<svg class="h-5 w-5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
								<path
									d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
								/>
							</svg>
						</div>
						<div>
							<div class="font-display text-lg">@crehate</div>
							<div class="text-sm text-white/60">Community KOL</div>
						</div>
					</a>

					<a
						href="https://x.com/taco_coin"
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:border-blue-400/20 hover:bg-blue-400/5"
					>
						<div
							class="flex h-10 w-10 items-center justify-center rounded-full border border-blue-400/20 bg-blue-400/10"
						>
							<svg class="h-5 w-5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
								<path
									d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
								/>
							</svg>
						</div>
						<div>
							<div class="font-display text-lg">@taco_coin</div>
							<div class="text-sm text-white/60">Community KOL</div>
						</div>
					</a>

					<a
						href="https://x.com/IceAgeTrails"
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:border-blue-400/20 hover:bg-blue-400/5"
					>
						<div
							class="flex h-10 w-10 items-center justify-center rounded-full border border-blue-400/20 bg-blue-400/10"
						>
							<svg class="h-5 w-5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
								<path
									d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
								/>
							</svg>
						</div>
						<div>
							<div class="font-display text-lg">@IceAgeTrails</div>
							<div class="text-sm text-white/60">Community KOL</div>
						</div>
					</a>

					<a
						href="https://x.com/itsmazza_eth"
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:border-blue-400/20 hover:bg-blue-400/5"
					>
						<div
							class="flex h-10 w-10 items-center justify-center rounded-full border border-blue-400/20 bg-blue-400/10"
						>
							<svg class="h-5 w-5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
								<path
									d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
								/>
							</svg>
						</div>
						<div>
							<div class="font-display text-lg">@itsmazza_eth</div>
							<div class="text-sm text-white/60">Community KOL</div>
						</div>
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
				Learn how decisions are made in the Voi ecosystem.
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
			href="/pages/community/socials"
			class="group flex transform flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10"
		>
			<h3 class="font-display text-xl font-bold">Social Channels</h3>
			<p class="mt-2 font-mono text-sm text-white/60">
				Connect with the Voi community on social media.
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
			href="/pages/community/news"
			class="group flex transform flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10"
		>
			<h3 class="font-display text-xl font-bold">News</h3>
			<p class="mt-2 font-mono text-sm text-white/60">
				Stay updated with the latest announcements.
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
