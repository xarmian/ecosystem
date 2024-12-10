<script lang="ts">
	import '../../app.css';
	import { fade, scale, fly, slide } from 'svelte/transition';
	import { onMount } from 'svelte';

	let isNavPanelOpen = false;

	// Initialize star positions on mount
	onMount(() => {
		const root = document.documentElement;
		const randomPercent = () => `${Math.random() * 100}%`;

		function updateStarPositions() {
			root.style.setProperty('--star-1', randomPercent());
			root.style.setProperty('--star-2', randomPercent());
			root.style.setProperty('--star-3', randomPercent());
			root.style.setProperty('--star-4', randomPercent());
			root.style.setProperty('--star-5', randomPercent());
			root.style.setProperty('--star-6', randomPercent());
		}

		// Initial positions
		updateStarPositions();

		// Update positions every 20 seconds
		const interval = setInterval(updateStarPositions, 20000);

		return () => {
			clearInterval(interval);
			toggleScrollLock(false);
		};
	});

	// Define type for sections
	type Section = {
		title: string;
		description: string;
		icon: string;
		subSections: Record<string, { title: string; description: string }>;
	};

	type Sections = Record<string, Section>;

	let activeSection: keyof Sections | null = null;
	let hoveredSection: string | null = null;

	const hubRadius = 32;
	const spokeLength = 300;
	const tileSize = 28;

	// Handle scroll locking
	function toggleScrollLock(lock: boolean) {
		if (lock) {
			document.body.style.overflow = 'hidden';
			document.body.style.position = 'fixed';
			document.body.style.width = '100%';
			document.body.style.height = '100%';
		} else {
			document.body.style.overflow = '';
			document.body.style.position = '';
			document.body.style.width = '';
			document.body.style.height = '';
		}
	}

	function toggleNavPanel() {
		isNavPanelOpen = !isNavPanelOpen;
		toggleScrollLock(isNavPanelOpen);
	}

	function closeNavPanel() {
		isNavPanelOpen = false;
		toggleScrollLock(false);
	}

	// Define sections
	const sections: Sections = {
		'getting-started': {
			title: 'Quick Start',
			description: 'Begin your Voi journey',
			icon: `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 3L3 9V21H9V15H15V21H21V9L12 3Z" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`,
			subSections: {
				users: { title: 'For Users', description: 'Getting Setup' },
				developers: { title: 'For Developers', description: 'Start Building' },
				'node-runners': { title: 'For Node Runners', description: 'Earn Block Rewards' }
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
				<circle cx="12" cy="12" r="10" stroke-linecap="round" stroke-linejoin="round"/>
				<path d="M8 9L12 15L16 9" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>`,
			subSections: {
				'node-running': { title: 'Node Running', description: 'Earn Block Rewards' },
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
              <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M19.6224 10.3954L18.5247 7.7448L20 6L18 4L16.2647 5.48295L13.5578 4.36974L12.9353 2H11.0647L10.4422 4.36974L7.73528 5.48295L6 4L4 6L5.47528 7.7448L4.37755 10.3954L2 11.0647V12.9353L4.37755 13.6046L5.47528 16.2552L4 18L6 20L7.73528 18.5171L10.4422 19.6303L11.0647 22H12.9353L13.5578 19.6303L16.2647 18.5171L18 20L20 18L18.5247 16.2552L19.6224 13.6046L22 12.9353V11.0647L19.6224 10.3954Z" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`,
			subSections: {
				nodes: { title: 'Nodes', description: 'Run a Node' },
				'developer-docs': { title: 'Developer Docs', description: 'Documentation & Guides' },
				analytics: { title: 'Analytics', description: 'Network Stats' }
			}
		}
	};

	function toggleSection(section: keyof Sections) {
		if (activeSection === section) {
			activeSection = null;
		} else {
			activeSection = section;
		}
	}

	function handleSectionHover(key: string, isEntering: boolean) {
		hoveredSection = isEntering ? key : null;
	}
</script>

<div class="min-h-screen bg-voi-dark text-white">
	<!-- Navigation Toggle Button (Mobile Only) -->
	<button
		class="fixed right-4 top-4 z-[60] flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-md transition-all hover:bg-white/20 md:hidden"
		on:click={toggleNavPanel}
		aria-label="Toggle navigation"
	>
		<div class="relative flex h-5 w-5 items-center justify-center">
			<div
				class="absolute h-0.5 w-5 transform bg-white transition-all duration-300"
				style:transform="rotate({isNavPanelOpen ? '45deg' : '0'}) translateY({isNavPanelOpen
					? '0'
					: '-6px'})"
			></div>
			<div
				class="absolute h-0.5 w-5 transform bg-white transition-all duration-300"
				style:opacity={isNavPanelOpen ? '0' : '1'}
			></div>
			<div
				class="absolute h-0.5 w-5 transform bg-white transition-all duration-300"
				style:transform="rotate({isNavPanelOpen ? '-45deg' : '0'}) translateY({isNavPanelOpen
					? '0'
					: '6px'})"
			></div>
		</div>
	</button>

	<!-- Navigation Toggle Button (Desktop Only) -->
	<button
		class="fixed right-4 top-4 z-[60] hidden h-12 items-center justify-center rounded-full bg-white/10 px-6 backdrop-blur-md transition-all hover:bg-white/20 md:flex min-w-[100px]"
		on:click={toggleNavPanel}
		aria-label="Toggle ecosystem navigation"
	>
		<span class="font-display text-sm font-medium text-white">
			{isNavPanelOpen ? 'Close' : 'Portal'}
		</span>
	</button>

	<!-- Navigation Panel -->
	{#if isNavPanelOpen}
		<div
			class="fixed inset-0 z-50 bg-voi-dark"
			transition:fly={{ x: -window.innerWidth, duration: 300, opacity: 1 }}
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

			<div class="relative h-full overflow-auto">
				<div class="container mx-auto h-full px-4">
					<!-- Mobile Navigation (< 768px) -->
					<div class="md:hidden">
						<!-- Header with Logo -->
						<div class="mb-8 pt-20 text-center">
							<img src="/voi-logo.svg" alt="Voi Logo" class="mx-auto mb-4 h-16" />
							<h1 class="font-display text-2xl font-bold">Ecosystem Portal</h1>
							<p class="mt-2 font-mono text-sm text-white/60">Explore the Voi ecosystem</p>
						</div>

						<div class="grid gap-4 pb-12">
							{#each Object.entries(sections) as [key, section]}
								<div
									class="cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br
											{key === 'getting-started'
										? 'border-white/30 from-white/20 to-white/10 shadow-lg'
										: 'from-white/10 to-white/5'}"
									on:click={() => toggleSection(key)}
								>
									<div class="w-full p-4 text-left transition-all active:scale-[0.98]">
										<div class="flex items-center">
											<div
												class="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/5"
											>
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
													class="h-5 w-5 transform text-white/40 transition-transform duration-300 {activeSection ===
													key
														? 'rotate-90'
														: ''}"
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
														href={key === 'getting-started' && subKey === 'node-runners'
															? '/pages/getting-started/node-runners'
															: `/pages/${key.toLowerCase().replace(/([a-z])([A-Z])/g, '$1-$2')}/${subKey.toLowerCase()}`}
														class="group flex transform flex-col rounded-xl border border-white/10 bg-white/5 p-6 text-left transition-all duration-200 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10 hover:shadow-lg"
														on:click={closeNavPanel}
														on:mouseenter={() => handleSectionHover(key, true)}
														on:mouseleave={() => handleSectionHover(key, false)}
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
																<path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" />
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

					<!-- Desktop Navigation (≥ 768px) -->
					<div class="relative hidden min-h-screen items-center justify-center md:flex">
						<!-- Hub and Spoke Container -->
						<div class="relative h-[800px] w-[800px]">
							<!-- SVG layer for connecting lines -->
							<svg
								class="pointer-events-none absolute inset-0"
								style="z-index: 1;"
								viewBox="0 0 800 800"
							>
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
								class="absolute left-1/2 top-1/2 flex h-64 w-64 -translate-x-1/2 -translate-y-1/2
									items-center justify-center rounded-full bg-gradient-to-br from-voi-light to-voi-dark
									shadow-[0_0_50px_rgba(103,46,217,0.3)] transition-all duration-300 hover:scale-105"
								style="z-index: 5;"
							>
								<div class="p-6 text-center">
									<img src="/voi-logo.svg" alt="Voi Logo" class="mx-auto mb-4 h-12" />
									<p class="mb-4 font-mono text-sm text-white/80">Ecosystem Portal</p>
									<p class="mx-auto max-w-[150px] font-mono text-xs text-white/60">
										Click any section to explore
									</p>
								</div>
							</div>

							<!-- Section Buttons -->
							{#each Object.entries(sections) as [key, section], i}
								{@const angle = (i * (360 / Object.keys(sections).length) - 90) * (Math.PI / 180)}
								{@const x = 400 + Math.cos(angle) * spokeLength}
								{@const y = 400 + Math.sin(angle) * spokeLength}

								<div
									class="absolute"
									style="transform: translate({x}px, {y}px) translate(-50%, -50%); z-index: 10;"
								>
									<button
										class="section-button group relative"
										class:active={activeSection === key}
										on:mouseenter={() => handleSectionHover(key, true)}
										on:mouseleave={() => handleSectionHover(key, false)}
										on:click={() => toggleSection(key)}
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
													<path
														d="M6 18L18 6M6 6l12 12"
														stroke-linecap="round"
														stroke-linejoin="round"
													/>
												</svg>
											</button>
										</div>
										<div class="grid gap-4">
											{#each Object.entries(sections[activeSection].subSections) as [subKey, subSection]}
												<a
													href={activeSection === 'getting-started' && subKey === 'node-runners'
														? '/pages/getting-started/node-runners'
														: `/pages/${activeSection.toLowerCase().replace(/([a-z])([A-Z])/g, '$1-$2')}/${subKey.toLowerCase()}`}
													class="group flex transform flex-col rounded-xl border border-white/10 bg-white/5 p-6 text-left transition-all duration-200 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10 hover:shadow-lg"
													on:click={closeNavPanel}
													on:mouseenter={() => handleSectionHover(activeSection, true)}
													on:mouseleave={() => handleSectionHover(activeSection, false)}
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
															<path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" />
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
				</div>
			</div>
		</div>
	{/if}

	<!-- Main Content -->
	<main class="pt-16">
		<slot />
	</main>
</div>

<style>
	:global(body) {
		@apply bg-voi-dark;
	}

	.connection-line {
		stroke-dasharray: 4;
		animation: flow 1s linear infinite;
	}

	.connection-line.reverse-flow {
		animation: reverse-flow 1s linear infinite;
	}

	@keyframes flow {
		from {
			stroke-dashoffset: 8;
		}
		to {
			stroke-dashoffset: 0;
		}
	}

	@keyframes reverse-flow {
		from {
			stroke-dashoffset: 0;
		}
		to {
			stroke-dashoffset: 8;
		}
	}

	.footer {
		background: linear-gradient(135deg, #e8e9ec 0%, #d8d9dc 100%);
		padding: 8rem 2rem 4rem;
		position: relative;
		overflow: hidden;
	}

	.footer-content {
		max-width: 1200px;
		margin: 0 auto;
		position: relative;
		z-index: 1;
	}

	.footer-accent {
		position: absolute;
		top: -50%;
		right: -10%;
		width: 80%;
		height: 200%;
		background: linear-gradient(135deg, rgba(255, 255, 255, 0.6) 0%, rgba(216, 217, 220, 0.3) 100%);
		transform: rotate(-15deg);
		border-radius: 100px;
		filter: blur(50px);
		z-index: 0;
	}

	.footer-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
		margin-bottom: 4rem;
	}

	.brand-section {
		padding-right: 2rem;
	}

	.footer-nav {
		padding-right: 2rem;
	}

	.footer-logo {
		max-width: 120px;
		margin-bottom: 2.5rem;
		transition: transform 0.3s ease;
	}

	.footer-logo:hover {
		transform: translateY(-2px);
	}

	.footer-heading {
		font-size: 1.25rem;
		font-weight: 600;
		margin-bottom: 2rem;
		color: #000;
		letter-spacing: 0.5px;
	}

	.footer-links {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	.footer-link {
		color: #666;
		text-decoration: none;
		transition: all 0.3s ease;
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		position: relative;
		width: fit-content;
	}

	.footer-link:hover {
		color: #000;
		transform: translateX(4px);
	}

	.link-arrow {
		font-size: 0.8em;
		opacity: 0;
		transform: translateX(-4px);
		transition: all 0.3s ease;
	}

	.footer-link:hover .link-arrow {
		opacity: 1;
		transform: translateX(0);
	}

	.social-links {
		display: flex;
		gap: 1.75rem;
		margin-top: 2.5rem;
	}

	.social-icon {
		width: 24px;
		height: 24px;
		color: #666;
		transition: all 0.3s ease;
		position: relative;
	}

	.social-icon:hover {
		color: #000;
		transform: translateY(-2px);
	}

	.social-icon[data-tooltip]:before {
		content: attr(data-tooltip);
		position: absolute;
		bottom: 100%;
		left: 50%;
		transform: translateX(-50%) translateY(-8px);
		background: #000;
		color: white;
		padding: 4px 8px;
		border-radius: 4px;
		font-size: 12px;
		opacity: 0;
		visibility: hidden;
		transition: all 0.3s ease;
	}

	.social-icon[data-tooltip]:hover:before {
		opacity: 1;
		visibility: visible;
		transform: translateX(-50%) translateY(-4px);
	}

	@media (max-width: 768px) {
		.footer {
			padding: 6rem 1.5rem 3rem;
		}

		.footer-grid {
			grid-template-columns: 1fr;
			gap: 3rem;
		}

		.footer-nav,
		.brand-section {
			padding-right: 0;
		}

		.footer-accent {
			display: none;
		}
	}

	@media (max-width: 480px) {
		.footer-bottom {
			flex-direction: column;
			gap: 1.5rem;
			text-align: center;
		}
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
</style>
