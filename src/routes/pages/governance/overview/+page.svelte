<script lang="ts">
	import SubSectionTemplate from '$lib/components/SubSectionTemplate.svelte';
</script>

<SubSectionTemplate
	title="Governance Overview"
	description="Understanding Voi's tripartite governance system"
>
	<div class="space-y-12">
		<!-- Introduction -->
		<section class="rounded-2xl border border-white/10 bg-white/5 p-8">
			<div class="prose prose-invert max-w-none">
				<p class="lead text-lg text-white/80">
					Voi's governance model is inspired by the tripartite system, adapted to create a truly
					decentralized, community-driven blockchain. This system ensures equitable distribution of
					power through three distinct branches, each with specific responsibilities and checks on
					the others.
				</p>
			</div>
		</section>

		<!-- Governance Branches -->
		<section class="rounded-2xl border border-white/10 bg-white/5 p-8">
			<h2 class="mb-6 text-2xl font-bold">Governance Structure</h2>
			<div class="grid gap-6 md:grid-cols-3">
				<!-- Council -->
				<div class="rounded-xl border border-purple-400/20 bg-purple-400/5 p-6">
					<div class="mb-4">
						<h3 class="font-display text-xl text-purple-200">Voi Council</h3>
						<div class="mt-1 text-sm text-purple-200/60">Legislative Branch</div>
					</div>
					<ul class="mt-4 space-y-2 text-sm text-white/80">
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
							Community-elected members
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
							Crafts and modifies governance rules
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
							Proposes new initiatives
						</li>
					</ul>
					<a
						href="https://docs.voi.network/governance/governance/council/"
						target="_blank"
						rel="noopener noreferrer"
						class="mt-4 inline-flex items-center text-sm text-purple-200 hover:text-purple-300"
					>
						Learn more
						<svg class="ml-1 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
							<path
								d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</a>
				</div>

				<!-- Treasury -->
				<div class="rounded-xl border border-blue-400/20 bg-blue-400/5 p-6">
					<div class="mb-4">
						<h3 class="font-display text-xl text-blue-200">Voi Treasury</h3>
						<div class="mt-1 text-sm text-blue-200/60">Executive Branch</div>
					</div>
					<ul class="mt-4 space-y-2 text-sm text-white/80">
						<li class="flex items-start gap-2">
							<svg
								class="mt-1 h-4 w-4 flex-shrink-0 text-blue-400"
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
							Elected and appointed members
						</li>
						<li class="flex items-start gap-2">
							<svg
								class="mt-1 h-4 w-4 flex-shrink-0 text-blue-400"
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
							Implements policies and decisions
						</li>
						<li class="flex items-start gap-2">
							<svg
								class="mt-1 h-4 w-4 flex-shrink-0 text-blue-400"
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
							Aligns operations with community values
						</li>
					</ul>
					<a
						href="https://docs.voi.network/governance/governance/treasury/"
						target="_blank"
						rel="noopener noreferrer"
						class="mt-4 inline-flex items-center text-sm text-blue-200 hover:text-blue-300"
					>
						Learn more
						<svg class="ml-1 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
							<path
								d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</a>
				</div>

				<!-- Judiciary -->
				<div class="rounded-xl border border-green-400/20 bg-green-400/5 p-6">
					<div class="mb-4">
						<h3 class="font-display text-xl text-green-200">Voi Judiciary</h3>
						<div class="mt-1 text-sm text-green-200/60">Judicial Branch</div>
					</div>
					<ul class="mt-4 space-y-2 text-sm text-white/80">
						<li class="flex items-start gap-2">
							<svg
								class="mt-1 h-4 w-4 flex-shrink-0 text-green-400"
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
							Provides guidance and continuity
						</li>
						<li class="flex items-start gap-2">
							<svg
								class="mt-1 h-4 w-4 flex-shrink-0 text-green-400"
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
							Safeguards constitutional principles
						</li>
						<li class="flex items-start gap-2">
							<svg
								class="mt-1 h-4 w-4 flex-shrink-0 text-green-400"
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
							Ensures justified amendments
						</li>
					</ul>
					<a
						href="https://docs.voi.network/governance/governance/judiciary/"
						target="_blank"
						rel="noopener noreferrer"
						class="mt-4 inline-flex items-center text-sm text-green-200 hover:text-green-300"
					>
						Learn more
						<svg class="ml-1 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
							<path
								d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</a>
				</div>
			</div>
		</section>

		<!-- Checks and Balances -->
		<section
			class="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-8"
		>
			<div class="flex items-center gap-4">
				<div class="flex-shrink-0">
					<div class="rounded-full border border-white/10 bg-white/5 p-3">
						<svg
							class="h-6 w-6 text-white/80"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
						>
							<path
								d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2M6 7v13m6-13v13m6-13v13"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</div>
				</div>
				<div>
					<h3 class="font-display text-xl">Checks and Balances</h3>
					<p class="mt-2 text-white/80">
						Our governance system ensures no single branch becomes too powerful through a carefully
						designed system of checks and balances.
					</p>
					<a
						href="https://docs.voi.network/governance/governance/checks-and-balances/"
						target="_blank"
						rel="noopener noreferrer"
						class="hover:text-voi mt-4 inline-flex items-center text-sm text-voi-light"
					>
						Learn more about our checks and balances
						<svg class="ml-1 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
							<path
								d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</a>
				</div>
			</div>
		</section>

		<!-- Constitutional Values -->
		<section class="rounded-2xl border border-white/10 bg-white/5 p-8">
			<h2 class="mb-6 text-2xl font-bold">Core Values</h2>
			<div class="prose prose-invert mb-6 max-w-none">
				<p class="text-lg text-white/80">
					These values serve as a shared ethical framework that guides all community members,
					enabling decentralized coordination without the need for central authority. By embracing
					these principles, each member contributes to maintaining the ecosystem's integrity and
					positive culture.
				</p>
			</div>
			<div class="grid gap-6 md:grid-cols-2">
				<div
					class="rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6"
				>
					<h3 class="font-display text-xl">Goodwill</h3>
					<p class="mt-2 text-sm text-white/60">
						Assume positive intent, acting with kindness, compassion, and understanding within the
						ecosystem.
					</p>
				</div>

				<div
					class="rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6"
				>
					<h3 class="font-display text-xl">Integrity</h3>
					<p class="mt-2 text-sm text-white/60">
						Maintain honesty and transparency in all communications and interactions within the
						ecosystem.
					</p>
				</div>

				<div
					class="rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6"
				>
					<h3 class="font-display text-xl">Collaboration</h3>
					<p class="mt-2 text-sm text-white/60">
						Prioritize collective efforts over individual pursuits, fostering innovation and
						accelerating Voi's vision.
					</p>
				</div>

				<div
					class="rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6"
				>
					<h3 class="font-display text-xl">Intentionality</h3>
					<p class="mt-2 text-sm text-white/60">
						Ensure thoughtful, purpose-driven actions and communications align with Voi's broader
						mission.
					</p>
				</div>
			</div>
			<div
				class="mt-6 rounded-xl border border-white/10 bg-gradient-to-br from-purple-400/5 to-transparent p-6"
			>
				<div class="flex items-center gap-3">
					<svg
						class="h-5 w-5 text-purple-200"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
					>
						<path d="M13 10V3L4 14h7v7l9-11h-7z" stroke-linecap="round" stroke-linejoin="round" />
					</svg>
					<p class="text-sm text-white/80">
						These values empower community members to make decisions and take actions autonomously
						while maintaining alignment with Voi's mission and culture.
					</p>
				</div>
			</div>
		</section>

		<!-- Mission -->
		<section
			class="rounded-2xl border border-white/10 bg-gradient-to-br from-purple-400/10 to-transparent p-8"
		>
			<div class="flex items-center gap-4">
				<div class="flex-shrink-0">
					<div class="rounded-full border border-purple-400/20 bg-purple-400/10 p-3">
						<svg
							class="h-6 w-6 text-purple-400"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
						>
							<path
								d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</div>
				</div>
				<div>
					<h3 class="font-display text-xl">Our Mission</h3>
					<p class="mt-2 text-white/80">
						To create a community-driven blockchain ecosystem <span class="text-purple-200"
							>built</span
						>
						by the community, <span class="text-purple-200">run</span> by the community, and
						<span class="text-purple-200">owned</span> by the community.
					</p>
				</div>
			</div>
		</section>
	</div>

	<svelte:fragment slot="related">
		<a
			href="/pages/governance/council"
			class="group flex transform flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10"
		>
			<h3 class="font-display text-xl font-bold">Council</h3>
			<p class="mt-2 font-mono text-sm text-white/60">
				Learn about Voi's legislative branch and decision-making process.
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
			href="/pages/governance/committees"
			class="group flex transform flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10"
		>
			<h3 class="font-display text-xl font-bold">Committees</h3>
			<p class="mt-2 font-mono text-sm text-white/60">
				Explore the specialized committees that drive Voi forward.
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
			href="/pages/governance/voting"
			class="group flex transform flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10"
		>
			<h3 class="font-display text-xl font-bold">Voting</h3>
			<p class="mt-2 font-mono text-sm text-white/60">
				Understand how to participate in governance decisions.
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
