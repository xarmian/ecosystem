<script lang="ts">
	import SubSectionTemplate from '$lib/components/SubSectionTemplate.svelte';
</script>

<SubSectionTemplate title="Nodes" description="Run and maintain Voi network nodes">
	<!-- Introduction -->
	<div class="mt-10 rounded-2xl border border-white/10 bg-white/5 p-8">
		<div class="prose prose-invert max-w-none">
			<p class="text-lg text-white/80">
				Running a node is crucial for maintaining the decentralization and security of the Voi network.
				Whether you're interested in running a relay node or participating node, our comprehensive
				documentation will guide you through the process.
			</p>
		</div>
	</div>

	<!-- Documentation Link -->
	<div class="mt-10 rounded-2xl border border-white/10 bg-gradient-to-br from-purple-400/10 to-transparent p-8">
		<div class="flex items-center gap-4">
			<div class="flex-shrink-0">
				<div class="rounded-full border border-purple-400/20 bg-purple-400/10 p-3">
					<svg class="h-6 w-6 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
						<path
							d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</div>
			</div>
			<div>
				<h3 class="font-display text-xl">Voi Swarm Documentation</h3>
				<p class="mt-2 text-white/80">
					Access our detailed node documentation to learn about setup, maintenance, and best practices.
				</p>
				<div class="mt-4">
					<a
						href="https://voinetwork.github.io/voi-swarm/"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-400/10 px-4 py-2 text-sm text-purple-400 transition-colors hover:bg-purple-400/20"
					>
						View Documentation
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
					</a>
				</div>
			</div>
		</div>
	</div>

	<!-- Node Types -->
	<div class="mt-10 rounded-2xl border border-white/10 bg-white/5 p-8">
		<h2 class="text-2xl font-bold">Node Types</h2>
		<div class="mt-6 grid gap-6 md:grid-cols-2">
			<!-- Relay Node -->
			<div class="rounded-xl border border-white/10 bg-gradient-to-br from-purple-400/10 to-transparent p-6">
				<div class="mb-4 rounded-lg bg-purple-400/10 p-2 w-fit">
					<svg class="h-5 w-5 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
						<path
							d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</div>
				<h3 class="font-display text-xl">Relay Node</h3>
				<p class="mt-2 text-white/80">
					Relay nodes are the backbone of the Voi network, helping to maintain network connectivity and
					propagate transactions.
				</p>
				<ul class="mt-4 space-y-2 text-sm text-white/60">
					<li class="flex items-start gap-2">
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
						High availability requirements
					</li>
					<li class="flex items-start gap-2">
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
						Network routing and connectivity
					</li>
					<li class="flex items-start gap-2">
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
						Transaction propagation
					</li>
				</ul>
			</div>

			<!-- Participating Node -->
			<div class="rounded-xl border border-white/10 bg-gradient-to-br from-purple-400/10 to-transparent p-6">
				<div class="mb-4 rounded-lg bg-purple-400/10 p-2 w-fit">
					<svg class="h-5 w-5 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
						<path
							d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</div>
				<h3 class="font-display text-xl">Participating Node</h3>
				<p class="mt-2 text-white/80">
					Participating nodes actively engage in consensus and help secure the network through
					transaction validation.
				</p>
				<ul class="mt-4 space-y-2 text-sm text-white/60">
					<li class="flex items-start gap-2">
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
						Consensus participation
					</li>
					<li class="flex items-start gap-2">
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
						Transaction validation
					</li>
					<li class="flex items-start gap-2">
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
						Block production
					</li>
				</ul>
			</div>
		</div>
	</div>

	<!-- Community Tools -->
	<div class="mt-10 rounded-2xl border border-white/10 bg-white/5 p-8">
		<h2 class="text-2xl font-bold">Community Node Tools</h2>
		<p class="mt-2 text-white/80">
			Our community has developed alternative tools to help you run nodes on your local machine.
		</p>
		<div class="mt-6 grid gap-6 md:grid-cols-2">
			<!-- Aust's One Click Node -->
			<div class="rounded-xl border border-white/10 bg-gradient-to-br from-purple-400/10 to-transparent p-6">
				<div class="mb-4 rounded-lg bg-purple-400/10 p-2 w-fit">
					<svg class="h-5 w-5 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
						<path
							d="M13 10V3L4 14h7v7l9-11h-7z"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</div>
				<h3 class="font-display text-xl">Aust's One Click Node</h3>
				<p class="mt-2 text-white/80">
					A simplified node setup solution for easy deployment.
				</p>
				<div class="mt-4">
					<a
						href="https://github.com/AustP/austs-one-click-node"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-400/10 px-4 py-2 text-sm text-purple-400 transition-colors hover:bg-purple-400/20"
					>
						View on GitHub
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
					</a>
				</div>
			</div>

			<!-- Func -->
			<div class="rounded-xl border border-white/10 bg-gradient-to-br from-purple-400/10 to-transparent p-6">
				<div class="mb-4 rounded-lg bg-purple-400/10 p-2 w-fit">
					<svg class="h-5 w-5 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
						<path
							d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</div>
				<h3 class="font-display text-xl">Func</h3>
				<p class="mt-2 text-white/80">
					A community-maintained node implementation for local deployment.
				</p>
				<div class="mt-4">
					<a
						href="https://github.com/GalaxyPay/func"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-400/10 px-4 py-2 text-sm text-purple-400 transition-colors hover:bg-purple-400/20"
					>
						View on GitHub
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
					</a>
				</div>
			</div>
		</div>
	</div>

	<svelte:fragment slot="related">
		<a
			href="/pages/technical/developer-docs"
			class="group flex transform flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10"
		>
			<h3 class="font-display text-xl font-bold">Developer Docs</h3>
			<p class="mt-2 font-mono text-sm text-white/60">
				Access technical documentation and guides.
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
			href="/pages/technical/analytics"
			class="group flex transform flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10"
		>
			<h3 class="font-display text-xl font-bold">Analytics</h3>
			<p class="mt-2 font-mono text-sm text-white/60">
				View network statistics and performance metrics.
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
			href="/pages/rewards/node-running"
			class="group flex transform flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10"
		>
			<h3 class="font-display text-xl font-bold">Node Running</h3>
			<p class="mt-2 font-mono text-sm text-white/60">
				Learn about node running rewards and requirements.
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