<script lang="ts">
	import SubSectionTemplate from '$lib/components/SubSectionTemplate.svelte';
</script>

<SubSectionTemplate
	title="Grants"
	description="Build and grow the ecosystem"
>
	<!-- Introduction -->
	<div class="mt-10 rounded-2xl border border-white/10 bg-white/5 p-8">
		<div class="prose prose-invert max-w-none">
			<p class="text-lg text-white/80">
				At Voi, we believe in rewarding value creation. Our grant program is designed to support both
				technical and non-technical contributors who help grow and strengthen our ecosystem. Whether
				you're a developer building products or a community member providing valuable services, there's an
				opportunity for you to earn tokens by adding value in your unique way.
			</p>
		</div>
	</div>

	<!-- Grant Types -->
	<div class="mt-10 rounded-2xl border border-white/10 bg-white/5 p-8">
		<h2 class="text-2xl font-bold">Grant Types</h2>
		<div class="mt-6 grid gap-6 md:grid-cols-2">
			<!-- Product Grants -->
			<div class="rounded-xl border border-white/10 bg-gradient-to-br from-purple-400/10 to-transparent p-6">
				<div class="mb-4 rounded-lg bg-purple-400/10 p-2 w-fit">
					<svg class="h-5 w-5 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
						<path
							d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</div>
				<h3 class="font-display text-xl">Product Grants</h3>
				<p class="mt-2 text-white/80">
					For developers and teams building essential infrastructure, DeFi protocols, tools, and other
					technical solutions that enhance the Voi ecosystem.
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
						Infrastructure and tooling
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
						DeFi protocols and applications
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
						Developer tools and SDKs
					</li>
				</ul>
			</div>

			<!-- Service Grants -->
			<div class="rounded-xl border border-white/10 bg-gradient-to-br from-purple-400/10 to-transparent p-6">
				<div class="mb-4 rounded-lg bg-purple-400/10 p-2 w-fit">
					<svg class="h-5 w-5 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
						<path
							d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</div>
				<h3 class="font-display text-xl">Service Grants</h3>
				<p class="mt-2 text-white/80">
					For community members providing valuable non-technical services that help grow, educate, and
					strengthen the Voi community.
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
						Community management and moderation
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
						Educational content and courses
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
						Marketing and community growth
					</li>
				</ul>
			</div>
		</div>
	</div>

	<!-- Get Started -->
	<div class="mt-10 rounded-2xl border border-white/10 bg-gradient-to-br from-purple-400/10 to-transparent p-8">
		<div class="flex items-center gap-4">
			<div class="flex-shrink-0">
				<div class="rounded-full border border-purple-400/20 bg-purple-400/10 p-3">
					<svg class="h-6 w-6 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
						<path
							d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</div>
			</div>
			<div>
				<h3 class="font-display text-xl">Ready to Apply?</h3>
				<p class="mt-2 text-white/80">
					If you have an idea that could benefit the Voi ecosystem, we want to hear from you. Our grant
					program is open to both technical and non-technical contributions.
				</p>
				<div class="mt-4">
					<a
						href="https://docs.voi.network/governance/proposals/application-process/"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-400/10 px-4 py-2 text-sm text-purple-400 transition-colors hover:bg-purple-400/20"
					>
						Submit a Grant Application
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
			href="/pages/funding/bounties"
			class="group flex transform flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10"
		>
			<h3 class="font-display text-xl font-bold">Bounties</h3>
			<p class="mt-2 font-mono text-sm text-white/60">
				Complete specific tasks and earn rewards.
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
			href="/pages/funding/partnerships"
			class="group flex transform flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10"
		>
			<h3 class="font-display text-xl font-bold">Partnerships</h3>
			<p class="mt-2 font-mono text-sm text-white/60">
				Partner with Voi to build the future together.
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
			href="/pages/governance/overview"
			class="group flex transform flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10"
		>
			<h3 class="font-display text-xl font-bold">Governance</h3>
			<p class="mt-2 font-mono text-sm text-white/60">
				Learn how funding decisions are made.
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