<script lang="ts">
	import SubSectionTemplate from '$lib/components/SubSectionTemplate.svelte';
</script>

<SubSectionTemplate
	title="Bounties"
	description="Complete tasks and earn rewards"
>
	<!-- Introduction -->
	<div class="mt-10 rounded-2xl border border-white/10 bg-white/5 p-8">
		<div class="prose prose-invert max-w-none">
			<p class="text-lg text-white/80">
				Contribute to the Voi ecosystem by completing specific tasks from our bounty boards. Whether
				you're a developer looking to build critical infrastructure or a community member offering
				valuable services, there are opportunities for everyone to participate and earn rewards.
			</p>
		</div>
	</div>

	<!-- Product Bounties -->
	<div class="mt-10 rounded-2xl border border-white/10 bg-white/5 p-8">
		<h2 class="text-2xl font-bold">Product Bounty Board</h2>
		<div class="mt-6 space-y-8">
			<!-- Governance Category -->
			<div class="space-y-6">
				<h3 class="font-display text-xl text-purple-400">Governance</h3>
				<div class="rounded-xl border border-white/10 bg-gradient-to-br from-purple-400/10 to-transparent p-6">
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0">
							<div class="rounded-lg bg-purple-400/10 p-3">
								<svg
									class="h-6 w-6 text-purple-400"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
								>
									<path
										d="M12 3L20 8.5V15.5L12 21L4 15.5V8.5L12 3Z"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M12 12L12 21M12 12L20 8.5M12 12L4 8.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</div>
						</div>
						<div>
							<h4 class="font-display text-lg">Governance Portal</h4>
							<p class="mt-2 text-white/80">
								A portal that facilitates decentralized governance within the Voi ecosystem, allowing
								community members to vote on key decisions.
							</p>
							<div class="mt-4 space-y-2">
								<div class="text-sm text-white/60">Key Features:</div>
								<ul class="list-inside list-disc space-y-1 text-sm text-white/60">
									<li>Voting mechanisms</li>
									<li>Transparent results display</li>
									<li>Integration with Voi wallets for seamless participation</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div class="rounded-xl border border-white/10 bg-gradient-to-br from-purple-400/10 to-transparent p-6">
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0">
							<div class="rounded-lg bg-purple-400/10 p-3">
								<svg
									class="h-6 w-6 text-purple-400"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
								>
									<path
										d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M3 7h18"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</div>
						</div>
						<div>
							<h4 class="font-display text-lg">DAO Tooling</h4>
							<p class="mt-2 text-white/80">
								Tools and utilities to support the creation, management, and operation of DAOs within the
								Voi ecosystem.
							</p>
							<div class="mt-4 space-y-2">
								<div class="text-sm text-white/60">Key Features:</div>
								<ul class="list-inside list-disc space-y-1 text-sm text-white/60">
									<li>DAO creation and management interface</li>
									<li>Smart contract templates for common DAO functions</li>
									<li>Voting and governance tools specific to DAOs</li>
									<li>Analytics and reporting features for DAO activities</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- DeFi Category -->
			<div class="space-y-6">
				<h3 class="font-display text-xl text-purple-400">DeFi</h3>
				<div class="rounded-xl border border-white/10 bg-gradient-to-br from-purple-400/10 to-transparent p-6">
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0">
							<div class="rounded-lg bg-purple-400/10 p-3">
								<svg
									class="h-6 w-6 text-purple-400"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
								>
									<path
										d="M8 7h12m0 0v8a4 4 0 01-4 4H8m12-12L4 20m0-13v8a4 4 0 004 4h12M4 7l16 13"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</div>
						</div>
						<div>
							<h4 class="font-display text-lg">Dex Router</h4>
							<p class="mt-2 text-white/80">
								A decentralized exchange router that aggregates liquidity and routes trades across
								multiple Dexes to secure the best price with the least amount of fees.
							</p>
							<div class="mt-4 space-y-2">
								<div class="text-sm text-white/60">Key Features:</div>
								<ul class="list-inside list-disc space-y-1 text-sm text-white/60">
									<li>Multi-Dex routing</li>
									<li>Fee optimization</li>
									<li>Integration with popular Dexes</li>
									<li>Real-time price comparison</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div class="rounded-xl border border-white/10 bg-gradient-to-br from-purple-400/10 to-transparent p-6">
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0">
							<div class="rounded-lg bg-purple-400/10 p-3">
								<svg
									class="h-6 w-6 text-purple-400"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
								>
									<path
										d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</div>
						</div>
						<div>
							<h4 class="font-display text-lg">Concentrated Liquidity AMM Pools</h4>
							<p class="mt-2 text-white/80">
								An Automated Market Maker that allows liquidity providers to concentrate their liquidity
								within specific price ranges, maximizing capital efficiency.
							</p>
							<div class="mt-4 space-y-2">
								<div class="text-sm text-white/60">Key Features:</div>
								<ul class="list-inside list-disc space-y-1 text-sm text-white/60">
									<li>Customizable price ranges for liquidity providers</li>
									<li>Enhanced capital efficiency</li>
									<li>Dynamic fee structures</li>
									<li>Integration with Dexes and other DeFi protocols</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Services Bounties -->
	<div class="mt-10 rounded-2xl border border-white/10 bg-white/5 p-8">
		<h2 class="text-2xl font-bold">Services Bounty Board</h2>
		<div class="mt-6 space-y-8">
			<!-- Network Category -->
			<div class="space-y-6">
				<h3 class="font-display text-xl text-purple-400">Network</h3>
				<div class="rounded-xl border border-white/10 bg-gradient-to-br from-purple-400/10 to-transparent p-6">
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0">
							<div class="rounded-lg bg-purple-400/10 p-3">
								<svg
									class="h-6 w-6 text-purple-400"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
								>
									<path
										d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</div>
						</div>
						<div>
							<h4 class="font-display text-lg">Network Stress Testers</h4>
							<p class="mt-2 text-white/80">
								Conduct thorough stress tests on the Voi network to ensure its robustness and
								reliability.
							</p>
							<div class="mt-4 space-y-2">
								<div class="text-sm text-white/60">Key Responsibilities:</div>
								<ul class="list-inside list-disc space-y-1 text-sm text-white/60">
									<li>Conducting stress tests on the Voi network</li>
									<li>Recording and analyzing test results</li>
									<li>Publishing detailed reports on findings</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Marketing Category -->
			<div class="space-y-6">
				<h3 class="font-display text-xl text-purple-400">Marketing</h3>
				<div class="rounded-xl border border-white/10 bg-gradient-to-br from-purple-400/10 to-transparent p-6">
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0">
							<div class="rounded-lg bg-purple-400/10 p-3">
								<svg
									class="h-6 w-6 text-purple-400"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
								>
									<path
										d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</div>
						</div>
						<div>
							<h4 class="font-display text-lg">Social Media Management</h4>
							<p class="mt-2 text-white/80">
								Handle the Voi ecosystem's social media presence, engaging with the community and
								increasing brand visibility.
							</p>
							<div class="mt-4 space-y-2">
								<div class="text-sm text-white/60">Key Responsibilities:</div>
								<ul class="list-inside list-disc space-y-1 text-sm text-white/60">
									<li>Managing social media channels such as Twitter</li>
									<li>Creating and scheduling weekly content</li>
									<li>Engaging with the Voi community online</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Education Category -->
			<div class="space-y-6">
				<h3 class="font-display text-xl text-purple-400">Education</h3>
				<div class="rounded-xl border border-white/10 bg-gradient-to-br from-purple-400/10 to-transparent p-6">
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0">
							<div class="rounded-lg bg-purple-400/10 p-3">
								<svg
									class="h-6 w-6 text-purple-400"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
								>
									<path
										d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</div>
						</div>
						<div>
							<h4 class="font-display text-lg">External Course Instructors</h4>
							<p class="mt-2 text-white/80">
								Develop and deliver educational content to promote Voi to a broader audience, targeting
								various user groups.
							</p>
							<div class="mt-4 space-y-2">
								<div class="text-sm text-white/60">Key Responsibilities:</div>
								<ul class="list-inside list-disc space-y-1 text-sm text-white/60">
									<li>Developing educational courses about Voi</li>
									<li>Targeting different user groups (developers, node runners, power users)</li>
									<li>Creating engaging and informative content</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<svelte:fragment slot="related">
		<a
			href="/pages/funding/grants"
			class="group flex transform flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10"
		>
			<h3 class="font-display text-xl font-bold">Grants</h3>
			<p class="mt-2 font-mono text-sm text-white/60">
				Apply for funding to build your project.
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
				Learn how bounty decisions are made.
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