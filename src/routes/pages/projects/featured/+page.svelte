<script lang="ts">
	import SubSectionTemplate from '$lib/components/SubSectionTemplate.svelte';
	import Section from '$lib/components/Section.svelte';
	import InfoTile from '$lib/components/InfoTile.svelte';
	import ActionTile from '$lib/components/ActionTile.svelte';
	import { projects } from '$lib/data/projects';

	// Filter for featured projects only, with type safety
	const getFeaturedProjects = () => {
		try {
			return projects.filter((project) => project.featured === true);
		} catch (error) {
			console.error('Error filtering featured projects:', error);
			return [];
		}
	};

	const featuredProjects = getFeaturedProjects();

	// Group projects by category
	const walletProjects = featuredProjects.filter((p) => p.type === 'Wallet');
	const defiProjects = featuredProjects.filter(
		(p) => p.type === 'DeFi' || p.title === 'Nomadex' || p.title === 'Humble'
	);
	const infrastructureProjects = featuredProjects.filter(
		(p) => p.type === 'Infrastructure' || p.type === 'Bridge'
	);
	const nftProjects = featuredProjects.filter(
		(p) =>
			p.type === 'NFT' ||
			p.type === 'Marketplace' ||
			p.title?.toLowerCase().includes('nft') ||
			['Nautilus', 'High Forge'].includes(p.title || '')
	);

	// Category icons
	const categoryIcons = {
		wallet: `<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
			<path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>`,
		defi: `<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
			<path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>`,
		infrastructure: `<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
			<path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>`,
		nft: `<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
			<path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>`
	};
</script>

<SubSectionTemplate title="Featured Projects" description="Highlighted projects in the ecosystem">
	<div class="space-y-8">
		<Section title="Overview">
			<p class="text-lg text-white/80">
				Discover the most accessible projects building on Voi to get started.
			</p>
		</Section>

		<!-- Project Categories Grid -->
		<div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
			<!-- Wallets -->
			{#if walletProjects.length > 0}
				<Section title="Wallets" icon={categoryIcons.wallet}>
					<div class="space-y-4">
						{#each walletProjects as project}
							<InfoTile title={project.title} description={project.description} variant="dark">
								<div class="mt-4 flex items-center justify-between">
									{#if project.new && project.title !== 'Nomadex'}
										<span
											class="rounded-full border border-purple-400/20 bg-purple-400/10 px-3 py-1 text-sm text-purple-400"
											>New</span
										>
									{:else}
										<div />
									{/if}
									<div class="flex items-center gap-2">
										{#if project.url}
											<a
												href={project.url}
												target="_blank"
												rel="noopener noreferrer"
												class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white/80"
											>
												Visit
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
										{/if}
									</div>
								</div>
							</InfoTile>
						{/each}
					</div>
				</Section>
			{/if}

			<!-- DeFi -->
			{#if defiProjects.length > 0}
				<Section title="DeFi" icon={categoryIcons.defi}>
					<div class="space-y-4">
						{#each defiProjects as project}
							<InfoTile title={project.title} description={project.description} variant="dark">
								<div class="mt-4 flex items-center justify-between">
									{#if project.new && project.title !== 'Nomadex'}
										<span
											class="rounded-full border border-purple-400/20 bg-purple-400/10 px-3 py-1 text-sm text-purple-400"
											>New</span
										>
									{:else}
										<div />
									{/if}
									<div class="flex items-center gap-2">
										{#if project.url}
											<a
												href={project.url}
												target="_blank"
												rel="noopener noreferrer"
												class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white/80"
											>
												Visit
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
										{/if}
									</div>
								</div>
							</InfoTile>
						{/each}
					</div>
				</Section>
			{/if}

			<!-- Infrastructure -->
			{#if infrastructureProjects.length > 0}
				<Section title="Infrastructure" icon={categoryIcons.infrastructure}>
					<div class="space-y-4">
						{#each infrastructureProjects as project}
							<InfoTile title={project.title} description={project.description} variant="dark">
								<div class="mt-4 flex items-center justify-between">
									{#if project.new && project.title !== 'Nomadex'}
										<span
											class="rounded-full border border-purple-400/20 bg-purple-400/10 px-3 py-1 text-sm text-purple-400"
											>New</span
										>
									{:else}
										<div />
									{/if}
									<div class="flex items-center gap-2">
										{#if project.url}
											<a
												href={project.url}
												target="_blank"
												rel="noopener noreferrer"
												class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white/80"
											>
												Visit
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
										{/if}
									</div>
								</div>
							</InfoTile>
						{/each}
					</div>
				</Section>
			{/if}

			<!-- NFTs -->
			{#if nftProjects.length > 0}
				<Section title="NFTs" icon={categoryIcons.nft}>
					<div class="space-y-4">
						{#each nftProjects as project}
							<InfoTile title={project.title} description={project.description} variant="dark">
								<div class="mt-4 flex items-center justify-between">
									{#if project.new && project.title !== 'Nomadex'}
										<span
											class="rounded-full border border-purple-400/20 bg-purple-400/10 px-3 py-1 text-sm text-purple-400"
											>New</span
										>
									{:else}
										<div />
									{/if}
									<div class="flex items-center gap-2">
										{#if project.url}
											<a
												href={project.url}
												target="_blank"
												rel="noopener noreferrer"
												class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white/80"
											>
												Visit
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
										{/if}
									</div>
								</div>
							</InfoTile>
						{/each}
					</div>
				</Section>
			{/if}
		</div>

		<!-- Submit Project -->
		<Section
			title="Want to be Featured?"
			icon={`<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>`}
		>
			<InfoTile
				title="Apply for Funding"
				description="Building something exceptional on Voi? Apply to have your project featured in our showcase."
				variant="dark"
			>
				<div class="mt-4 flex items-center justify-end">
					<a
						href="/pages/funding/grants"
						class="inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-400/10 px-4 py-2 text-sm text-purple-400 transition-colors hover:bg-purple-400/20"
					>
						Apply Now
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
			</InfoTile>
		</Section>
	</div>

	<svelte:fragment slot="related">
		<ActionTile
			title="Project Directory"
			description="Browse all projects in the ecosystem."
			href="/pages/projects/directory"
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
