<script lang="ts">
	import SubSectionTemplate from '$lib/components/SubSectionTemplate.svelte';
	import { projects } from '$lib/data/projects';

	// Filter for featured projects only, with type safety
	const getFeaturedProjects = () => {
		try {
			return projects.filter(project => project.featured === true);
		} catch (error) {
			console.error('Error filtering featured projects:', error);
			return [];
		}
	};

	const featuredProjects = getFeaturedProjects();

	// Default highlights for featured projects
	const defaultHighlights = [
		'Community-driven development',
		'Active ecosystem contributor',
		'Regular updates'
	] as const;
</script>

<SubSectionTemplate title="Featured Projects" description="Highlighted projects in the ecosystem">
	<!-- Introduction -->
	<div class="mt-10 rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-8">
		<div class="prose prose-invert max-w-none">
			<p class="text-base sm:text-lg text-white/80">
				Discover the most innovative and impactful projects building on Voi. These featured projects
				represent the cutting edge of what's possible in our ecosystem.
			</p>
		</div>
	</div>

	<!-- Featured Projects -->
	<div class="mt-10 space-y-4 sm:space-y-6">
		{#each featuredProjects as project (project.id)}
			<div class="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-8">
				<div class="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
					<!-- Logo -->
					<div class="flex-shrink-0">
						{#if project.logo}
							<img
								src={project.logo}
								alt={`${project.title} logo`}
								class="h-16 w-16 rounded-xl border border-white/10 bg-white/5 object-contain"
							/>
						{:else}
							<div class="flex h-16 w-16 items-center justify-center rounded-xl border border-white/10 bg-white/5">
								<svg class="h-8 w-8 text-white/40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
									<path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>
							</div>
						{/if}
					</div>

					<div class="flex-grow">
						<!-- Header -->
						<div class="flex flex-col sm:flex-row items-start justify-between gap-4">
							<div>
								<div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
									<h3 class="font-display text-xl sm:text-2xl">{project.title}</h3>
									<div class="flex flex-wrap gap-2">
										{#if project.new}
											<span class="rounded-full border border-purple-400/20 bg-purple-400/10 px-3 py-1 text-sm text-purple-400">New</span>
										{/if}
										<span class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/60">{project.type}</span>
									</div>
								</div>
								<p class="mt-4 text-base sm:text-lg text-white/80">{project.description}</p>
							</div>

							<!-- Links -->
							<div class="mt-6 flex flex-wrap gap-3">
								{#if project.url}
									<a
										href={project.url}
										target="_blank"
										rel="noopener noreferrer"
										class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white/80"
									>
										Visit Website
										<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
											<path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" stroke-linecap="round" stroke-linejoin="round"/>
										</svg>
									</a>
								{/if}
								{#if project.twitter}
									<a
										href={project.twitter}
										target="_blank"
										rel="noopener noreferrer"
										class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white/80"
									>
										Follow on X
										<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
											<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" stroke-linecap="round" stroke-linejoin="round"/>
										</svg>
									</a>
								{/if}
							</div>
						</div>

						<!-- Key Features -->
						<div class="mt-6">
							<h4 class="text-sm font-semibold text-white/60">Key Features</h4>
							<ul class="mt-3 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
								{#each defaultHighlights as highlight}
									<li class="flex items-center gap-2">
										<svg class="h-5 w-5 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
											<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"/>
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
	<div class="mt-10 rounded-2xl border border-white/10 bg-gradient-to-br from-purple-400/10 to-transparent p-4 sm:p-8">
		<div class="flex flex-col sm:flex-row items-start sm:items-center gap-4">
			<div class="flex-shrink-0">
				<div class="rounded-full border border-purple-400/20 bg-purple-400/10 p-3">
					<svg class="h-6 w-6 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
						<path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"/>
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
						<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" stroke-linecap="round" stroke-linejoin="round"/>
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
				<svg class="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
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
				<svg class="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
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
				<svg class="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</div>
		</a>
	</svelte:fragment>
</SubSectionTemplate> 