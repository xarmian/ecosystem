<script lang="ts">
	import SubSectionTemplate from '$lib/components/SubSectionTemplate.svelte';

	// Sample featured projects data (to be replaced with real data)
	const featuredProjects = [
		{
			name: 'Sample DeFi Project',
			logo: '/images/projects/sample-logo.png', // Path to project logo
			description:
				'A leading decentralized exchange built on Voi, offering innovative trading features and deep liquidity.',
			category: 'DeFi',
			status: 'Live',
			labels: ['DEX', 'AMM', 'Liquidity'],
			highlights: [
				'Advanced trading features',
				'Deep liquidity pools',
				'Cross-chain integration'
			],
				website: 'https://example.com',
				twitter: 'https://twitter.com/example',
				discord: 'https://discord.gg/example',
				github: 'https://github.com/example'
		}
		// More projects will be added here
	];
</script>

<SubSectionTemplate title="Featured Projects" description="Highlighted projects in the ecosystem">
	<!-- Introduction -->
	<div class="mt-10 rounded-2xl border border-white/10 bg-white/5 p-8">
		<div class="prose prose-invert max-w-none">
			<p class="text-lg text-white/80">
				Discover the most innovative and impactful projects building on Voi. These featured projects
				represent the cutting edge of what's possible in our ecosystem.
			</p>
		</div>
	</div>

	<!-- Featured Projects -->
	<div class="mt-10 space-y-6">
		{#each featuredProjects as project}
			<div class="rounded-2xl border border-white/10 bg-white/5 p-8">
				<div class="flex items-start gap-6">
					<!-- Logo -->
					<div class="flex-shrink-0">
						<img
							src={project.logo}
							alt={`${project.name} logo`}
							class="h-16 w-16 rounded-xl border border-white/10 bg-white/5"
						/>
					</div>

					<div class="flex-grow">
						<!-- Header -->
						<div class="flex items-start justify-between">
							<div>
								<div class="flex items-center gap-3">
									<h3 class="font-display text-2xl">{project.name}</h3>
									<div class="flex gap-2">
										<span
											class="rounded-full border border-purple-400/20 bg-purple-400/10 px-3 py-1 text-sm text-purple-400"
											>{project.status}</span
										>
										<span
											class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/60"
											>{project.category}</span
										>
									</div>
								</div>
								<p class="mt-4 text-lg text-white/80">{project.description}</p>
							</div>

							<!-- Social Links -->
							<div class="flex gap-2">
								{#if project.website}
									<a
										href={project.website}
										target="_blank"
										rel="noopener noreferrer"
										class="rounded-lg border border-white/10 bg-white/5 p-2 text-white/60 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white/80"
									>
										<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
											<path
												d="M12 21a9 9 0 100-18 9 9 0 000 18zm0 0a9 9 0 100-18 9 9 0 000 18zM3.6 9h16.8M3.6 15h16.8"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
									</a>
								{/if}
								{#if project.twitter}
									<a
										href={project.twitter}
										target="_blank"
										rel="noopener noreferrer"
										class="rounded-lg border border-white/10 bg-white/5 p-2 text-white/60 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white/80"
									>
										<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
											<path
												d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
									</a>
								{/if}
								{#if project.discord}
									<a
										href={project.discord}
										target="_blank"
										rel="noopener noreferrer"
										class="rounded-lg border border-white/10 bg-white/5 p-2 text-white/60 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white/80"
									>
										<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
											<path
												d="M8.5 12C8.5 12.8284 7.82843 13.5 7 13.5C6.17157 13.5 5.5 12.8284 5.5 12C5.5 11.1716 6.17157 10.5 7 10.5C7.82843 10.5 8.5 11.1716 8.5 12Z"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
											<path
												d="M17.5 12C17.5 12.8284 16.8284 13.5 16 13.5C15.1716 13.5 14.5 12.8284 14.5 12C14.5 11.1716 15.1716 10.5 16 10.5C16.8284 10.5 17.5 11.1716 17.5 12Z"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
											<path
												d="M20 21C20 21 18.5 19.5 18.5 19.5C18.5 19.5 19.5 22 16.5 22H7.5C4.5 22 5.5 19.5 5.5 19.5L4 21"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
											<path
												d="M12 17C14.5 17 16.5 15.5 16.5 15.5L19.5 16V8L16.5 7C15 5.5 13 5 12 5C11 5 9 5.5 7.5 7L4.5 8V16L7.5 15.5C7.5 15.5 9.5 17 12 17Z"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
									</a>
								{/if}
								{#if project.github}
									<a
										href={project.github}
										target="_blank"
										rel="noopener noreferrer"
										class="rounded-lg border border-white/10 bg-white/5 p-2 text-white/60 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white/80"
									>
										<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
											<path
												d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
									</a>
								{/if}
							</div>
						</div>

						<!-- Labels -->
						<div class="mt-4 flex flex-wrap gap-2">
							{#each project.labels as label}
								<span
									class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/60"
									>{label}</span
								>
							{/each}
						</div>

						<!-- Highlights -->
						<div class="mt-6">
							<h4 class="text-sm font-semibold text-white/60">Key Features</h4>
							<ul class="mt-3 grid gap-3 md:grid-cols-3">
								{#each project.highlights as highlight}
									<li class="flex items-center gap-2">
										<svg
											class="h-5 w-5 text-purple-400"
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
										<span class="text-white/80">{highlight}</span>
									</li>
								{/each}
							</ul>
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>

	<!-- Submit Project -->
	<div class="mt-10 rounded-2xl border border-white/10 bg-gradient-to-br from-purple-400/10 to-transparent p-8">
		<div class="flex items-center gap-4">
			<div class="flex-shrink-0">
				<div class="rounded-full border border-purple-400/20 bg-purple-400/10 p-3">
					<svg class="h-6 w-6 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
						<path
							d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</div>
			</div>
			<div>
				<h3 class="font-display text-xl">Want to be Featured?</h3>
				<p class="mt-2 text-white/80">
					Building something exceptional on Voi? Apply to have your project featured in our showcase.
				</p>
				<div class="mt-4">
					<a
						href="/pages/funding/grants"
						class="inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-400/10 px-4 py-2 text-sm text-purple-400 transition-colors hover:bg-purple-400/20"
					>
						Apply for Funding
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
			href="/pages/projects/directory"
			class="group flex transform flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10"
		>
			<h3 class="font-display text-xl font-bold">Project Directory</h3>
			<p class="mt-2 font-mono text-sm text-white/60">
				Browse all projects in the ecosystem.
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
			href="/pages/funding/bounties"
			class="group flex transform flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10"
		>
			<h3 class="font-display text-xl font-bold">Bounties</h3>
			<p class="mt-2 font-mono text-sm text-white/60">
				Complete bounties to earn rewards.
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