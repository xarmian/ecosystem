<script lang="ts">
	import SubSectionTemplate from '$lib/components/SubSectionTemplate.svelte';
	import Section from '$lib/components/Section.svelte';
	import InfoTile from '$lib/components/InfoTile.svelte';
	import ActionTile from '$lib/components/ActionTile.svelte';
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
	<div class="space-y-12">
		<Section
			title="Filters"
			icon={`<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>`}
		>
			<div class="flex flex-wrap gap-6">
				<div class="flex flex-col gap-2">
					<label for="type-filter" class="text-sm font-semibold text-white/60">Type</label>
					<select
						id="type-filter"
						bind:value={selectedType}
						class="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white/80 hover:border-white/20"
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
						class="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white/80 hover:border-white/20"
					>
						{#each statuses as status}
							<option value={status}>{status}</option>
						{/each}
					</select>
				</div>
			</div>
		</Section>

		<!-- Project List -->
		<Section
			title="Projects"
			icon={`<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>`}
		>
			<div class="grid gap-6 grid-cols-1 md:grid-cols-2">
				{#each filteredProjects as project (project.id)}
					<InfoTile
						title={project.title}
						description={project.description}
						variant="dark"
					>
						<div class="flex flex-col h-full">
							<!-- Spacer to push content to bottom -->
							<div class="flex-grow"></div>

							<!-- Bottom row with labels, links, and logo -->
							<div class="mt-6 flex items-center justify-between">
								<!-- Labels -->
								<div class="flex flex-wrap items-center gap-2">
									{#if project.new}
										<span class="rounded-full border border-purple-400/20 bg-purple-400/10 px-3 py-1 text-sm text-purple-400">New</span>
									{/if}
									<span class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/60">{project.type}</span>
								</div>

								<!-- Links and Logo -->
								<div class="flex items-center gap-4">
									<div class="flex items-center gap-2">
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
							</div>
						</div>
					</InfoTile>
				{/each}
			</div>
		</Section>
	</div>

	<svelte:fragment slot="related">
		<ActionTile
			title="Featured Projects"
				description="Discover highlighted projects."
				href="/pages/projects/featured"
		/>
		<ActionTile
			title="Grants"
			description="Apply for funding to build your project."
			href="/pages/funding/grants"
		/>
		<ActionTile
			title="Bounties"
			description="Complete bounties to earn rewards."
			href="/pages/funding/bounties"
		/>
	</svelte:fragment>
</SubSectionTemplate> 