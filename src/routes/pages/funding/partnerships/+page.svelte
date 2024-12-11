<script lang="ts">
	import SubSectionTemplate from '$lib/components/SubSectionTemplate.svelte';
	import Section from '$lib/components/Section.svelte';
	import InfoTile from '$lib/components/InfoTile.svelte';
	import ActionTile from '$lib/components/ActionTile.svelte';

	const communityIcon = `<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
		<path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>`;

	const marketIcon = `<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
		<path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>`;

	const supportIcon = `<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
		<path d="M13 10V3L4 14h7v7l9-11h-7z" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>`;

	const marketingIcon = `<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
		<path d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>`;

	const accessIcon = `<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
		<path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>`;
</script>

<SubSectionTemplate title="Partnerships" description="Build the future together">
	<div class="space-y-8">
		<!-- Introduction -->
		<Section title="Overview">
			<p class="text-lg text-white/80">
				Join forces with Voi to shape the future of decentralized technology. We're actively seeking
				partnerships with innovative projects that share our vision of building a more accessible and
				efficient blockchain ecosystem.
			</p>
		</Section>

		<!-- Partnership Types -->
		<Section title="Partnership Opportunities">
			<div class="grid gap-6 sm:grid-cols-2">
				<!-- Internal Community -->
				<InfoTile
					title="Internal Community Projects"
					description="Partner with us to provide essential services and tools for the Voi community."
					variant="dark"
					icon={communityIcon}
				>
					<ul class="mt-4 space-y-2 text-sm text-white/60">
						<li class="flex items-start gap-2">
							<svg class="mt-1 h-4 w-4 flex-shrink-0 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
								<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
							DeFi Projects
						</li>
						<li class="flex items-start gap-2">
							<svg class="mt-1 h-4 w-4 flex-shrink-0 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
								<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
							Development tools
						</li>
						<li class="flex items-start gap-2">
							<svg class="mt-1 h-4 w-4 flex-shrink-0 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
								<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
							Infrastructure solutions
						</li>
					</ul>
				</InfoTile>

				<!-- Target Market -->
				<InfoTile
					title="Target Market Solutions"
					description="Build applications and platforms that serve our growing ecosystems target market."
					variant="dark"
					icon={marketIcon}
				>
					<ul class="mt-4 space-y-2 text-sm text-white/60">
						<li class="flex items-start gap-2">
							<svg class="mt-1 h-4 w-4 flex-shrink-0 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
								<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
							Tokenization
						</li>
						<li class="flex items-start gap-2">
							<svg class="mt-1 h-4 w-4 flex-shrink-0 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
								<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
							Loyalty Points
						</li>
						<li class="flex items-start gap-2">
							<svg class="mt-1 h-4 w-4 flex-shrink-0 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
								<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
							Credentials
						</li>
					</ul>
				</InfoTile>
			</div>
		</Section>

		<!-- Benefits -->
		<Section title="Partnership Benefits">
			<div class="grid gap-6 sm:grid-cols-3">
				<InfoTile
					title="Technical Support"
					description="Access to our technical team for integration support and optimization guidance."
					variant="dark"
					icon={supportIcon}
				/>

				<InfoTile
					title="Marketing Exposure"
					description="Joint marketing opportunities and exposure to our growing community."
					variant="dark"
					icon={marketingIcon}
				/>

				<InfoTile
					title="Community Access"
					description="Direct access to our engaged community and potential early adopters."
					variant="dark"
					icon={accessIcon}
				/>
			</div>
		</Section>

		<!-- Get Started -->
		<Section title="Ready to Partner?">
			<InfoTile
				title=""
				description="If you're interested in partnering with Voi, we'd love to hear from you. Reach out to discuss how we can work together to build something amazing."
				variant="dark"
			>
				<div slot="footer" class="mt-4">
					<span class="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm">Applications Opening Soon</span>
				</div>
			</InfoTile>
		</Section>
	</div>

	<svelte:fragment slot="related">
		<ActionTile
			title="Grants"
			description="Apply for funding to build your project."
			href="/pages/funding/grants"
		/>

		<ActionTile
			title="Bounties"
			description="Complete specific tasks and earn rewards."
			href="/pages/funding/bounties"
		/>

		<ActionTile
			title="Project Directory"
			description="Explore projects in the Voi ecosystem."
			href="/pages/projects/directory"
		/>
	</svelte:fragment>
</SubSectionTemplate> 