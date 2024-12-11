<script lang="ts">
	import SubSectionTemplate from '$lib/components/SubSectionTemplate.svelte';
	import Section from '$lib/components/Section.svelte';
	import InfoTile from '$lib/components/InfoTile.svelte';
	import ActionTile from '$lib/components/ActionTile.svelte';
	import LinkButton from '$lib/components/LinkButton.svelte';

	const relayIcon = `<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
		<path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>`;

	const participatingIcon = `<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
		<path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>`;

	const quickStartIcon = `<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
		<path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>`;

	const docsIcon = `<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
		<path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>`;

	const rewardsIcon = `<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
		<path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>`;

	const communityIcon = `<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
		<path d="M13 10V3L4 14h7v7l9-11h-7z" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>`;
</script>

<SubSectionTemplate title="Nodes" description="Run and maintain Voi network nodes">
	<div class="space-y-8">
		<!-- Introduction -->
		<Section title="Overview">
			<p class="text-lg text-white/80">
				Running a node is crucial for maintaining the decentralization and security of the Voi network.
				Whether you're interested in running a relay node or participating node, our comprehensive
				documentation will guide you through the process.
			</p>
		</Section>

		<!-- Node Types -->
		<Section title="Node Types">
			<div class="grid gap-6 sm:grid-cols-2">
				<!-- Relay Node -->
				<InfoTile
					title="Relay Node"
					description="Relay nodes are the backbone of the Voi network, helping to maintain network connectivity and propagate transactions."
					variant="dark"
					icon={relayIcon}
				>
					<ul class="mt-4 space-y-2 text-sm text-white/60">
						<li class="flex items-start gap-2">
							<svg class="mt-1 h-4 w-4 flex-shrink-0 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
								<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
							High availability requirements
						</li>
						<li class="flex items-start gap-2">
							<svg class="mt-1 h-4 w-4 flex-shrink-0 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
								<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
							Network routing and connectivity
						</li>
						<li class="flex items-start gap-2">
							<svg class="mt-1 h-4 w-4 flex-shrink-0 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
								<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
							Transaction propagation
						</li>
					</ul>
				</InfoTile>

				<!-- Participating Node -->
				<InfoTile
					title="Participating Node"
					description="Participating nodes actively engage in consensus and help secure the network through transaction validation."
					variant="dark"
					icon={participatingIcon}
				>
					<ul class="mt-4 space-y-2 text-sm text-white/60">
						<li class="flex items-start gap-2">
							<svg class="mt-1 h-4 w-4 flex-shrink-0 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
								<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
							Consensus participation
						</li>
						<li class="flex items-start gap-2">
							<svg class="mt-1 h-4 w-4 flex-shrink-0 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
								<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
							Transaction validation
						</li>
						<li class="flex items-start gap-2">
							<svg class="mt-1 h-4 w-4 flex-shrink-0 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
								<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
							Block production
						</li>
					</ul>
				</InfoTile>
			</div>
		</Section>

		<!-- Resources -->
		<Section title="Important Information">
			<div class="grid gap-6 sm:grid-cols-3">
				<!-- Quick Start -->
				<InfoTile
					title="Quick Start"
					description="Get started with running your first node on the Voi network."
					variant="dark"
					icon={quickStartIcon}
				>
					<div slot="footer" class="mt-4">
						<LinkButton
							href="/pages/getting-started/node-runners"
							label="Start Running"
						/>
					</div>
				</InfoTile>

				<!-- Documentation -->
				<InfoTile
					title="Documentation"
					description="Access detailed node documentation and setup guides."
					variant="dark"
					icon={docsIcon}
				>
					<div slot="footer" class="mt-4">
						<LinkButton
							href="https://voinetwork.github.io/voi-swarm/"
							label="View Docs"
							external={true}
						/>
					</div>
				</InfoTile>

				<!-- Rewards -->
				<InfoTile
					title="Rewards"
					description="Learn about the rewards available for running a node."
					variant="dark"
					icon={rewardsIcon}
				>
					<div slot="footer" class="mt-4">
						<LinkButton
							href="/pages/rewards/node-running"
							label="View Rewards"
						/>
					</div>
				</InfoTile>
			</div>
		</Section>

		<!-- Community Tools -->
		<Section title="Community Node Tools">
			<p class="mb-6 text-white/80">
				Our community has developed alternative tools to help you run nodes on your local machine.
			</p>
			<div class="grid gap-6 sm:grid-cols-2">
				<!-- Aust's One Click Node -->
				<InfoTile
					title="Aust's One Click Node"
					description="A simple tool to help you get started with running a node quickly."
					variant="dark"
					icon={communityIcon}
				>
					<div slot="footer" class="mt-4">
						<LinkButton
							href="https://github.com/AustP/austs-one-click-node"
							label="View Tool"
							external={true}
						/>
					</div>
				</InfoTile>

				<!-- Func -->
				<InfoTile
					title="Func"
					description="A community-maintained node implementation for local deployment."
					variant="dark"
					icon={`<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>`}
				>
					<div slot="footer" class="mt-4">
						<LinkButton
							href="https://github.com/GalaxyPay/func"
							label="View Tool"
							external={true}
						/>
					</div>
				</InfoTile>
			</div>
		</Section>
	</div>

	<svelte:fragment slot="related">
		<ActionTile
			title="Analytics"
			description="View network statistics and performance metrics."
			href="/pages/technical/analytics"
		/>

		<ActionTile
			title="Developer Docs"
			description="Access technical documentation and guides."
			href="/pages/technical/developer-docs"
		/>

		<ActionTile
			title="Governance"
			description="Learn about network governance and decision making."
			href="/pages/governance/overview"
		/>
	</svelte:fragment>
</SubSectionTemplate> 