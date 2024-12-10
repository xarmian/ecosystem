<script lang="ts">
	import SubSectionTemplate from '$lib/components/SubSectionTemplate.svelte';
	import { projects } from '$lib/data/projects';
	import { onMount } from 'svelte';

	// Get unique project types for filter, with type safety
	const getUniqueTypes = () => {
		const types = new Set(['All']);
		projects.forEach(project => {
			if (project.type) {
				types.add(project.type);
			}
		});
		return Array.from(types);
	};

	const projectTypes = getUniqueTypes();
	const statuses = ['All', 'active', 'inactive'] as const;
	
	let selectedType = 'All';
	let selectedStatus = 'All';
	let filteredProjects = [...projects];

	// Filter projects based on selected type and status
	$: {
		try {
			filteredProjects = projects.filter((project) => {
				const typeMatch = selectedType === 'All' || project.type === selectedType;
				const statusMatch = selectedStatus === 'All' || project.status === selectedStatus;
				return typeMatch && statusMatch;
			});
		} catch (error) {
			console.error('Error filtering projects:', error);
			filteredProjects = [...projects];
		}
	}
</script>

<SubSectionTemplate title="Project Directory" description="Browse all projects in the ecosystem">
	<!-- Filters -->
	<div class="mt-10 flex flex-wrap gap-4">
		<div class="flex flex-col gap-2">
			<label for="type-filter" class="text-sm font-semibold text-white/60">Type</label>
			<select
				id="type-filter"
				bind:value={selectedType}
				class="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white/80"
			>
				{#each projectTypes as type}
					<option value={type}>{type}</option>
				{/each}
			</select>
		</div>

		<div class="flex flex-col gap-2">
			<label for="status-filter" class="text-sm font-semibold text-white/60">Status</label>
			<select
				id="status-filter"
				bind:value={selectedStatus}
				class="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white/80"
			>
				{#each statuses as status}
					<option value={status}>{status}</option>
				{/each}
			</select>
		</div>
	</div>

	<!-- Project List -->
	<div class="mt-10 grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2">
		{#each filteredProjects as project (project.id)}
			<div class="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-6">
				<div class="flex flex-col sm:flex-row sm:items-start gap-4">
					<!-- Logo -->
					<div class="flex-shrink-0">
						{#if project.logo}
							<img
								src={project.logo}
								alt={`${project.title} logo`}
								class="h-12 w-12 rounded-xl border border-white/10 bg-white/5 object-contain"
							/>
						{:else}
							<div class="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5">
								<svg class="h-6 w-6 text-white/40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
									<path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>
							</div>
						{/if}
					</div>

					<div class="flex-grow">
						<!-- Header -->
						<div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
							<div>
								<h3 class="font-display text-xl">{project.title}</h3>
								<p class="mt-2 text-white/80">{project.description}</p>
							</div>
						</div>

						<!-- Labels -->
						<div class="mt-4 flex flex-wrap gap-2">
							{#if project.new}
								<span class="rounded-full border border-purple-400/20 bg-purple-400/10 px-3 py-1 text-sm text-purple-400">New</span>
							{/if}
							<span class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/60">{project.type}</span>
						</div>

						<!-- Links -->
						<div class="mt-4 flex flex-wrap items-center gap-2">
							{#if project.url}
								<a
									href={project.url}
									target="_blank"
									rel="noopener noreferrer"
									class="rounded-lg border border-white/10 bg-white/5 p-2 text-white/60 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white/80"
									title="Visit Website"
								>
									<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
										<path d="M12 21a9 9 0 100-18 9 9 0 000 18zm0 0a9 9 0 100-18 9 9 0 000 18zM3.6 9h16.8M3.6 15h16.8" stroke-linecap="round" stroke-linejoin="round"/>
									</svg>
								</a>
							{/if}
							{#if project.twitter}
								<a
									href={project.twitter}
									target="_blank"
									rel="noopener noreferrer"
									class="rounded-lg border border-white/10 bg-white/5 p-2 text-white/60 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white/80"
									title="Follow on X (Twitter)"
								>
									<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
										<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" stroke-linecap="round" stroke-linejoin="round"/>
									</svg>
								</a>
							{/if}
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>

	<svelte:fragment slot="related">
		<a
			href="/pages/projects/featured"
			class="group flex transform flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10"
		>
			<h3 class="font-display text-xl font-bold">Featured Projects</h3>
			<p class="mt-2 font-mono text-sm text-white/60">
				Discover highlighted projects.
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