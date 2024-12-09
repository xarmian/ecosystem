<script lang="ts">
	import { fade, scale, slide } from 'svelte/transition';
	import { onMount } from 'svelte';

	// Define type for sections
	type Section = {
		title: string;
		description: string;
		icon: string;
		subSections: Record<string, { title: string; description: string }>;
	};

	type Sections = Record<string, Section>;

	let activeSection: keyof Sections | null = null;
	let activeSubSection: string | null = null;
	let hoveredSection: string | null = null;

	const hubRadius = 32; // Half of the hub width (64/2)
	const spokeLength = 300; // Back to original distance
	const tileSize = 28; // Size of the orbital tiles (w-28)

	const sections: Sections = {
		'getting-started': {
			title: 'Quick Start',
			description: 'Begin your Voi journey',
			icon: `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 3L3 9V21H9V15H15V21H21V9L12 3Z" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`,
			subSections: {
				users: { title: 'For Users', description: 'Getting Setup' },
				developers: { title: 'For Developers', description: 'Start Building' }
			}
		},
		about: {
			title: 'About',
			description: 'Vision & Strategy',
			icon: `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 8v4m0 4h.01" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`,
			subSections: {
				vision: { title: 'Vision', description: 'Our mission and goals' },
				tokenomics: { title: 'Tokenomics', description: 'Token distribution and utility' },
				roadmap: { title: 'Roadmap', description: 'Development timeline' }
			}
		},
		projects: {
			title: 'Projects',
			description: 'Explore the ecosystem',
			icon: `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 7V17M4 7H20M4 7L8 3H16L20 7M20 7V17M20 17L16 21H8L4 17" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`,
			subSections: {
				directory: { title: 'Directory', description: 'Browse all projects' },
				featured: { title: 'Featured', description: 'Highlighted projects' }
			}
		},
		community: {
			title: 'Community',
			description: 'Join the conversation',
			icon: `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M17 8H19C20.1046 8 21 8.89543 21 10V16C21 17.1046 20.1046 18 19 18H17V22L13 18H8C6.89543 18 6 17.1046 6 16V15M13 3H5C3.89543 3 3 3.89543 3 5V11C3 12.1046 3.89543 13 5 13H11L15 17V13H17C18.1046 13 19 12.1046 19 11V5C19 3.89543 18.1046 3 17 3H13Z" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`,
			subSections: {
				socials: { title: 'Socials', description: 'Follow the latest' },
				events: { title: 'Events', description: 'Spaces & Meetings' },
				news: { title: 'News', description: 'Latest Updates' }
			}
		},
		governance: {
			title: 'Governance',
			description: 'Shape the future',
			icon: `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 3L20 8.5V15.5L12 21L4 15.5V8.5L12 3Z" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 12L12 21M12 12L20 8.5M12 12L4 8.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`,
			subSections: {
				overview: { title: 'Overview', description: 'Governance Structure' },
				committees: { title: 'Committees', description: 'Working Groups' },
				council: { title: 'Council', description: 'Leadership' },
				voting: { title: 'Voting', description: 'Active Proposals' }
			}
		},
		rewards: {
			title: 'Rewards',
			description: 'Earn & Participate',
			icon: `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M19.6224 10.3954L18.5247 7.7448L20 6L18 4L16.2647 5.48295L13.5578 4.36974L12.9353 2H11.0647L10.4422 4.36974L7.73528 5.48295L6 4L4 6L5.47528 7.7448L4.37755 10.3954L2 11.0647V12.9353L4.37755 13.6046L5.47528 16.2552L4 18L6 20L7.73528 18.5171L10.4422 19.6303L11.0647 22H12.9353L13.5578 19.6303L16.2647 18.5171L18 20L20 18L18.5247 16.2552L19.6224 13.6046L22 12.9353V11.0647L19.6224 10.3954Z" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`,
			subSections: {
				nodeRunning: { title: 'Node Running', description: 'Earn Block Rewards' },
				incentives: { title: 'Incentives', description: 'Earning Opportunities' },
				competitions: { title: 'Competitions', description: 'Games & Challenges' }
			}
		},
		funding: {
			title: 'Funding',
			description: 'Build with support',
			icon: `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H7" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`,
			subSections: {
				grants: { title: 'Grants', description: 'Apply for ecosystem funding' },
				bounties: { title: 'Bounties', description: 'Complete tasks for rewards' },
				partnerships: { title: 'Partnerships', description: 'Collaborate with Voi' }
			}
		},
		technical: {
			title: 'Technical',
			description: 'Infrastructure & Data',
			icon: `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 4V6M14 10V12M10 4V6M10 10V12M6 4V6M6 10V12M3 8H21M5.2 20H18.8C19.9201 20 20.4802 20 20.908 19.782C21.2843 19.5903 21.5903 19.2843 21.782 18.908C22 18.4802 22 17.9201 22 16.8V7.2C22 6.0799 22 5.51984 21.782 5.09202C21.5903 4.71569 21.2843 4.40973 20.908 4.21799C20.4802 4 19.9201 4 18.8 4H5.2C4.0799 4 3.51984 4 3.09202 4.21799C2.71569 4.40973 2.40973 4.71569 2.21799 5.09202C2 5.51984 2 6.07989 2 7.2V16.8C2 17.9201 2 18.4802 2.21799 18.908C2.40973 19.2843 2.71569 19.5903 3.09202 19.782C3.51984 20 4.07989 20 5.2 20Z" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`,
			subSections: {
				nodes: { title: 'Nodes', description: 'Run a Node' },
				developerDocs: { title: 'Developer Docs', description: 'Documentation & Guides' },
				analytics: { title: 'Analytics', description: 'Network Stats' }
			}
		}
	};

	function toggleSection(section: keyof Sections) {
		if (activeSection === section) {
			activeSection = null;
			activeSubSection = null;
		} else {
			activeSection = section;
			activeSubSection = null;
		}
	}

	function toggleSubSection(subSection: string) {
		activeSubSection = activeSubSection === subSection ? null : subSection;
	}

	function calculateLineCoordinates(index: number) {
		const totalSections = Object.keys(sections).length;
		const angle = (index * (360 / totalSections) - 90) * (Math.PI / 180);

		// Start from the edge of the hub
		const x1 = Math.cos(angle) * hubRadius;
		const y1 = Math.sin(angle) * hubRadius;

		// End at the inner edge of the tile (28px is the tile size)
		const tileOffset = tileSize / 2; // Half the tile size
		const x2 = Math.cos(angle) * (spokeLength - tileOffset);
		const y2 = Math.sin(angle) * (spokeLength - tileOffset);

		return { x1, y1, x2, y2 };
	}

	function handleClickOutside(event: MouseEvent) {
		if (activeSection && event.target instanceof Element) {
			const modal = document.querySelector('.expanded-content');
			if (modal && !modal.contains(event.target) && !event.target.closest('.section-button')) {
				activeSection = null;
				activeSubSection = null;
			}
		}
	}

	function handleSectionHover(key: string, isEntering: boolean) {
		hoveredSection = isEntering ? key : null;
	}

	// Initialize star positions on mount
	onMount(() => {
		const root = document.documentElement;
		const randomPercent = () => `${Math.random() * 100}%`;

		root.style.setProperty('--star-1', randomPercent());
		root.style.setProperty('--star-2', randomPercent());
		root.style.setProperty('--star-3', randomPercent());
		root.style.setProperty('--star-4', randomPercent());
		root.style.setProperty('--star-5', randomPercent());
		root.style.setProperty('--star-6', randomPercent());
	});
</script>

<div
	class="relative min-h-screen overflow-hidden bg-voi-dark text-white"
	on:click={handleClickOutside}
>
	<!-- Background Effects -->
	<div class="absolute inset-0 overflow-hidden">
		<!-- Gradient Background -->
		<div
			class="bg-gradient-radial absolute inset-0 from-voi-dark via-voi-dark to-black opacity-80"
		></div>

		<!-- Animated Stars -->
		<div class="stars-small"></div>
		<div class="stars-medium"></div>
		<div class="stars-large"></div>

		<!-- Glowing Orbs -->
		<div class="glow-orb glow-orb-1"></div>
		<div class="glow-orb glow-orb-2"></div>
		<div class="glow-orb glow-orb-3"></div>
	</div>

	<div class="container mx-auto h-full px-4">
		<!-- Desktop Layout (≥750px) -->
		<div class="relative hidden min-h-screen items-center justify-center md:flex">
			<!-- Hub and Spoke Container with fixed dimensions -->
			<div class="relative h-[800px] w-[800px]">
				<!-- SVG layer for connecting lines -->
				<svg class="pointer-events-none absolute inset-0" viewBox="0 0 800 800">
					{#each Object.entries(sections) as [key, _], i}
						{@const angle = (i * (360 / Object.keys(sections).length) - 90) * (Math.PI / 180)}
						<line
							x1={400 + Math.cos(angle) * hubRadius}
							y1={400 + Math.sin(angle) * hubRadius}
							x2={400 + Math.cos(angle) * (spokeLength - tileSize / 2)}
							y2={400 + Math.sin(angle) * (spokeLength - tileSize / 2)}
							class="connection-line {hoveredSection === key ? 'reverse-flow' : ''}"
							stroke="rgba(255, 255, 255, 0.25)"
							stroke-width={activeSection === key || hoveredSection === key ? '3' : '1.5'}
							data-section={key}
							marker-end={hoveredSection === key ? 'url(#arrowhead)' : ''}
						/>
					{/each}

					<defs>
						<marker
							id="arrowhead"
							markerWidth="7"
							markerHeight="7"
							refX="6"
							refY="3.5"
							orient="auto"
							fill="rgba(255, 255, 255, 0.3)"
						>
							<polygon points="0 0, 7 3.5, 0 7" />
						</marker>
					</defs>
				</svg>

				<!-- Central Hub -->
				<div
					class="absolute left-1/2 top-1/2 z-10 flex h-64 w-64 -translate-x-1/2 -translate-y-1/2
						items-center justify-center rounded-full bg-gradient-to-br from-voi-light to-voi-dark
						shadow-[0_0_50px_rgba(103,46,217,0.3)] transition-all duration-300 hover:scale-105"
				>
					<div class="p-6 text-center">
						<img src="/voi-logo.svg" alt="Voi Logo" class="mx-auto mb-4 h-12" />
						<p class="mb-4 font-mono text-sm text-white/80">Ecosystem Portal</p>
						<p class="mx-auto max-w-[150px] font-mono text-xs text-white/60">
							Click any section to explore
						</p>
					</div>
				</div>

				<!-- Orbital Sections -->
				{#each Object.entries(sections) as [key, section], i}
					{@const angle = (i * (360 / Object.keys(sections).length) - 90) * (Math.PI / 180)}
					{@const x = 400 + Math.cos(angle) * spokeLength}
					{@const y = 400 + Math.sin(angle) * spokeLength}

					<div
						class="absolute left-0 top-0"
						style="transform: translate({x}px, {y}px) translate(-50%, -50%)"
					>
						<button
							class="section-button group relative"
							class:active={activeSection === key}
							on:click={() => toggleSection(key)}
							on:mouseenter={() => handleSectionHover(key, true)}
							on:mouseleave={() => handleSectionHover(key, false)}
						>
							<div
								class="flex h-28 w-28 transform items-center justify-center rounded-2xl
									border border-white/10 backdrop-blur-md transition-all duration-300
									group-hover:scale-110 group-hover:border-white/20 group-hover:shadow-lg
									{activeSection === key ? 'scale-110 border-white/30 from-white/15 to-white/10 shadow-lg' : ''}
									{key === 'getting-started'
									? 'animate-pulse-subtle scale-110 border-white/30 bg-gradient-to-br from-white/20 to-white/10 shadow-lg'
									: 'bg-gradient-to-br from-white/10 to-white/5'}"
							>
								<div class="flex flex-col items-center p-4 text-center">
									<div
										class="mb-2 flex items-center justify-center {key === 'getting-started'
											? 'text-white'
											: 'text-white/80'}"
									>
										{@html section.icon}
									</div>
									<div
										class="font-display text-sm leading-tight tracking-wide {key ===
										'getting-started'
											? 'font-bold text-white'
											: ''}"
									>
										{section.title}
									</div>
									<div
										class="mt-1 px-1 font-mono text-[10px] {key === 'getting-started'
											? 'text-white/80'
											: 'text-white/60'}"
									>
										{section.description}
									</div>
								</div>
							</div>
						</button>
					</div>
				{/each}

				<!-- Desktop Modal -->
				{#if activeSection}
					<div
						class="fixed inset-0 z-50 flex items-center justify-center p-4"
						transition:fade={{ duration: 200 }}
						on:click|self={() => (activeSection = null)}
					>
						<div class="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
						<div
							class="relative w-full max-w-2xl rounded-2xl border border-white/20 bg-gradient-to-br from-voi-dark to-voi-light p-8 shadow-2xl"
							transition:scale={{ duration: 200 }}
						>
							<div class="mb-6 flex items-start justify-between">
								<div>
									<h2 class="font-display text-3xl font-bold">
										{sections[activeSection].title}
									</h2>
									<p class="mt-2 font-mono text-lg text-white/60">
										{sections[activeSection].description}
									</p>
								</div>
								<button
									class="rounded-lg p-2 transition-colors hover:bg-white/10"
									on:click={() => (activeSection = null)}
								>
									<svg
										class="h-6 w-6"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										>
										<path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" />
									</svg>
								</button>
							</div>
							<div class="grid gap-4">
								{#each Object.entries(sections[activeSection].subSections) as [subKey, subSection]}
									<a
											href="/{activeSection.toLowerCase().replace(/([a-z])([A-Z])/g, '$1-$2')}/{subKey.toLowerCase()}"
											class="group flex transform flex-col rounded-xl border border-white/10 bg-white/5 p-6 text-left transition-all duration-200 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10 hover:shadow-lg"
										>
										<h3 class="font-display text-xl font-bold">{subSection.title}</h3>
										<p class="mt-2 font-mono text-white/60">{subSection.description}</p>
										<div class="mt-4 flex items-center font-mono text-sm text-white/40">
											<span>Learn more</span>
											<svg
												class="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="2"
											>
												<path
													d="M5 12h14M12 5l7 7-7 7"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
											</svg>
										</div>
									</a>
								{/each}
							</div>
						</div>
					</div>
				{/if}
			</div>
		</div>

		<!-- Mobile Layout (<750px) -->
		<div class="md:hidden">
			<!-- Mobile Header with increased top padding -->
			<div class="mb-8 pt-12 text-center">
				<img src="/voi-logo.svg" alt="Voi Logo" class="mx-auto mb-4 h-16" />
				<h1 class="font-display text-2xl font-bold">Ecosystem Portal</h1>
				<p class="mt-2 font-mono text-sm text-white/60">Explore the Voi ecosystem</p>
			</div>

			<!-- Mobile Section Cards -->
			<div class="grid gap-4 pb-12">
				{#each Object.entries(sections) as [key, section]}
					<div 
						class="overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br cursor-pointer
								{key === 'getting-started'
								? 'border-white/30 from-white/20 to-white/10 shadow-lg'
								: 'from-white/10 to-white/5'}"
						on:click={() => toggleSection(key)}
					>
						<div class="w-full p-4 text-left transition-all active:scale-[0.98]">
							<div class="flex items-center">
								<div class="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/5">
									{@html section.icon}
								</div>
								<div>
									<h2
										class="font-display text-lg font-bold {key === 'getting-started'
											? 'text-white'
											: ''}"
									>
										{section.title}
									</h2>
									<p class="font-mono text-sm text-white/60">{section.description}</p>
								</div>
								<div class="ml-auto">
									<svg
										class="h-5 w-5 text-white/40 transform transition-transform duration-300 {activeSection === key ? 'rotate-90' : ''}"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
									>
										<path d="M9 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" />
									</svg>
								</div>
							</div>
						</div>

						{#if activeSection === key}
							<div class="border-t border-white/10 bg-white/5" transition:slide>
								<div class="grid gap-4 p-4">
									{#each Object.entries(section.subSections) as [subKey, subSection]}
										<a
											href="/{key.toLowerCase().replace(/([a-z])([A-Z])/g, '$1-$2')}/{subKey.toLowerCase()}"
											class="group flex transform flex-col rounded-xl border border-white/10 bg-white/5 p-6 text-left transition-all duration-200 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10 hover:shadow-lg"
										>
											<h3 class="font-display text-xl font-bold">{subSection.title}</h3>
											<p class="mt-2 font-mono text-white/60">{subSection.description}</p>
											<div class="mt-4 flex items-center font-mono text-sm text-white/40">
												<span>Learn more</span>
												<svg
													class="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													stroke-width="2"
												>
													<path
														d="M5 12h14M12 5l7 7-7 7"
														stroke-linecap="round"
														stroke-linejoin="round"
													/>
												</svg>
											</div>
										</a>
									{/each}
								</div>
							</div>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	/* Add new animation for subtle pulsing */
	@keyframes pulse-subtle {
		0%,
		100% {
			transform: scale(1.1);
			box-shadow: 0 10px 30px -10px rgba(103, 46, 217, 0.3);
		}
		50% {
			transform: scale(1.12);
			box-shadow: 0 10px 30px -5px rgba(103, 46, 217, 0.4);
		}
	}

	.animate-pulse-subtle {
		animation: pulse-subtle 3s ease-in-out infinite;
	}

	.connection-line {
		stroke-dasharray: 4, 4;
		animation: flowForward 20s linear infinite;
		transition: all 0.3s ease;
		opacity: 0.5;
	}

	.connection-line.reverse-flow {
		animation: flowBackward 20s linear infinite;
		opacity: 0.8;
	}

	@keyframes flowForward {
		to {
			stroke-dashoffset: -100;
		}
	}

	@keyframes flowBackward {
		to {
			stroke-dashoffset: 100;
		}
	}

	:global(body) {
		@apply overflow-x-hidden bg-voi-dark;
	}

	:global(.connection-line) {
		opacity: var(--line-opacity, 1);
	}

	:global(.tour-active .connection-line) {
		--line-opacity: 0.25;
	}

	:global(.tour-active .connection-line[data-section='{activeSection}']) {
		--line-opacity: 1;
	}

	/* Ensure proper stacking context */
	.section-button {
		isolation: isolate;
	}

	/* Background Effects */
	.bg-gradient-radial {
		background: radial-gradient(
			circle at center,
			var(--tw-gradient-from) 0%,
			var(--tw-gradient-via) 50%,
			var(--tw-gradient-to) 100%
		);
	}

	/* Stars Animation */
	.stars-small,
	.stars-medium,
	.stars-large {
		position: absolute;
		inset: 0;
		background: transparent;
	}

	.stars-small {
		background-image: radial-gradient(
				1px 1px at var(--star-1) var(--star-2),
				white 100%,
				transparent 100%
			),
			radial-gradient(1px 1px at var(--star-3) var(--star-4), white 100%, transparent 100%),
			radial-gradient(1px 1px at var(--star-5) var(--star-6), white 100%, transparent 100%);
		background-size: 200px 200px;
		animation: twinkle 4s ease-in-out infinite alternate;
		opacity: 0.3;
	}

	.stars-medium {
		background-image: radial-gradient(
				1.5px 1.5px at var(--star-1) var(--star-2),
				white 100%,
				transparent 100%
			),
			radial-gradient(1.5px 1.5px at var(--star-3) var(--star-4), white 100%, transparent 100%),
			radial-gradient(1.5px 1.5px at var(--star-5) var(--star-6), white 100%, transparent 100%);
		background-size: 300px 300px;
		animation: twinkle 6s ease-in-out infinite alternate-reverse;
		opacity: 0.2;
	}

	.stars-large {
		background-image: radial-gradient(
				2px 2px at var(--star-1) var(--star-2),
				white 100%,
				transparent 100%
			),
			radial-gradient(2px 2px at var(--star-3) var(--star-4), white 100%, transparent 100%),
			radial-gradient(2px 2px at var(--star-5) var(--star-6), white 100%, transparent 100%);
		background-size: 400px 400px;
		animation: twinkle 8s ease-in-out infinite alternate;
		opacity: 0.1;
	}

	/* Glowing Orbs */
	.glow-orb {
		position: absolute;
		border-radius: 50%;
		filter: blur(60px);
		opacity: 0.15;
		animation: float 20s ease-in-out infinite;
	}

	.glow-orb-1 {
		width: 300px;
		height: 300px;
		background: var(--voi-light);
		top: 10%;
		right: 15%;
		animation-delay: -5s;
	}

	.glow-orb-2 {
		width: 400px;
		height: 400px;
		background: var(--voi-light);
		bottom: 15%;
		left: 10%;
		animation-delay: -10s;
	}

	.glow-orb-3 {
		width: 250px;
		height: 250px;
		background: var(--voi-light);
		top: 40%;
		left: 25%;
		animation-delay: -15s;
	}

	@keyframes twinkle {
		0% {
			opacity: 0.2;
		}
		100% {
			opacity: 0.4;
		}
	}

	@keyframes float {
		0%,
		100% {
			transform: translate(0, 0);
		}
		25% {
			transform: translate(10px, 10px);
		}
		50% {
			transform: translate(-5px, 15px);
		}
		75% {
			transform: translate(-15px, -5px);
		}
	}

	/* Star Positions */
	:global(:root) {
		--star-1: 10%;
		--star-2: 45%;
		--star-3: 65%;
		--star-4: 25%;
		--star-5: 85%;
		--star-6: 75%;
	}
</style>
