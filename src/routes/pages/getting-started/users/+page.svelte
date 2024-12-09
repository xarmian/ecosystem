<script lang="ts">
	import SubSectionTemplate from '$lib/components/SubSectionTemplate.svelte';
</script>

<SubSectionTemplate
	title="For Users"
	description="Getting Started with Voi"
>
	<div class="space-y-12">
		<!-- Wallet Section -->
		<section class="rounded-2xl border border-white/10 bg-white/5 p-8">
			<div class="mb-6">
				<h2 class="flex items-center gap-3 text-2xl">
					<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M2 6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M18 4v4h4" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M18 11h2" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
					1. Install a Wallet
				</h2>
				<p class="mt-2 text-white/60">To interact with the Voi network, you'll need a compatible wallet. Choose from these trusted options:</p>
			</div>
			
			<div class="grid gap-4 md:grid-cols-3">
				<a href="https://kibis.is" target="_blank" rel="noopener" 
					class="group flex flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-all hover:scale-[1.02] hover:border-white/20 hover:bg-white/10">
					<h3 class="font-display text-xl font-bold">Kibisis</h3>
					<p class="mt-2 font-mono text-sm text-white/60">Browser Extension & Mobile app for daily use and DApp interactions.</p>
					<div class="mt-4 flex items-center font-mono text-sm text-white/40">
						<span>Visit Website</span>
						<svg class="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</div>
				</a>

				<a href="https://lute.app" target="_blank" rel="noopener"
					class="group flex flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-all hover:scale-[1.02] hover:border-white/20 hover:bg-white/10">
					<h3 class="font-display text-xl font-bold">Lute</h3>
					<p class="mt-2 font-mono text-sm text-white/60">User-friendly web wallet focused on simplicity and security.</p>
					<div class="mt-4 flex items-center font-mono text-sm text-white/40">
						<span>Visit Website</span>
						<svg class="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</div>
				</a>

				<a href="https://wallet.biatec.io/new-wallet" target="_blank" rel="noopener"
					class="group flex flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-all hover:scale-[1.02] hover:border-white/20 hover:bg-white/10">
					<h3 class="font-display text-xl font-bold">Biatec</h3>
					<p class="mt-2 font-mono text-sm text-white/60">Feature-rich web wallet with an intuitive interface.</p>
					<div class="mt-4 flex items-center font-mono text-sm text-white/40">
						<span>Visit Website</span>
						<svg class="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</div>
				</a>
			</div>
		</section>

		<!-- Account Creation Section -->
		<section class="rounded-2xl border border-white/10 bg-white/5 p-8">
			<div class="mb-6">
				<h2 class="flex items-center gap-3 text-2xl">
					<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M12 4v6m0 0v6m0-6h6m-6 0H6" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
					2. Create Your Account
				</h2>
				<p class="mt-2 text-white/60">After installing your wallet of choice, you'll need to create a new account:</p>
			</div>

			<div class="rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6">
				<ul class="space-y-4">
					<li class="flex items-start gap-3">
						<span class="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-xs">1</span>
						<span>Select "Create New Account" or similar option in your wallet</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-xs">2</span>
						<span>You'll receive a 25-word mnemonic phrase - this is your account's master key</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-xs">3</span>
						<div>
							<strong class="text-voi-light">Important:</strong> Write down your mnemonic phrase and store it securely offline. Never share it with anyone!
						</div>
					</li>
					<li class="flex items-start gap-3">
						<span class="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-xs">4</span>
						<span>Confirm your mnemonic phrase to activate your account</span>
					</li>
				</ul>
			</div>
		</section>

		<!-- Get Tokens Section -->
		<section class="rounded-2xl border border-white/10 bg-white/5 p-8">
			<div class="mb-6">
				<h2 class="flex items-center gap-3 text-2xl">
					<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<circle cx="12" cy="12" r="10" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M8 9L12 15L16 9" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
					3. Get Your First VOI Tokens
				</h2>
			</div>

			<a href="https://fountain.voirewards.com" target="_blank" rel="noopener"
				class="group flex flex-col rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6 transition-all hover:scale-[1.02] hover:border-white/20">
				<h3 class="font-display text-xl font-bold">Voi Fountain</h3>
				<p class="mt-2 font-mono text-sm text-white/60">
					The Voi Foundation provides free tokens to help new users get started. Visit the Voi Fountain to claim your initial tokens.
				</p>
				<div class="mt-4 flex items-center font-mono text-sm text-white/40">
					<span>Claim Tokens</span>
					<svg class="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</div>
			</a>
		</section>

		<!-- Explore Section -->
		<section class="rounded-2xl border border-white/10 bg-white/5 p-8">
			<div class="mb-6">
				<h2 class="flex items-center gap-3 text-2xl">
					<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M9 10a3 3 0 015.12-2.12L15 9m-3 3h2m-1 3a3 3 0 01-5.12 2.12L7 15" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
					4. Explore the Ecosystem
				</h2>
			</div>

			<a href="/pages/projects/directory"
				class="group flex flex-col rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6 transition-all hover:scale-[1.02] hover:border-white/20">
				<h3 class="font-display text-xl font-bold">Project Directory</h3>
				<p class="mt-2 font-mono text-sm text-white/60">
					Discover the various projects and applications being built on Voi.
				</p>
				<div class="mt-4 flex items-center font-mono text-sm text-white/40">
					<span>Browse Projects</span>
					<svg class="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</div>
			</a>
		</section>

		<!-- Earn Rewards Section -->
		<section class="rounded-2xl border border-white/10 bg-white/5 p-8">
			<div class="mb-6">
				<h2 class="flex items-center gap-3 text-2xl">
					<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M12 8v8m-4-4h8" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
					5. Earn Rewards
				</h2>
				<p class="mt-2 text-white/60">There are several ways to earn rewards in the Voi ecosystem:</p>
			</div>

			<div class="grid gap-4 md:grid-cols-3">
				<a href="/pages/rewards/node-running"
					class="group flex flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-all hover:scale-[1.02] hover:border-white/20 hover:bg-white/10">
					<h3 class="font-display text-xl font-bold">Run a Node</h3>
					<p class="mt-2 font-mono text-sm text-white/60">Help secure the network and earn block rewards.</p>
					<div class="mt-4 flex items-center font-mono text-sm text-white/40">
						<span>Learn More</span>
						<svg class="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</div>
				</a>

				<a href="/pages/rewards/incentives"
					class="group flex flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-all hover:scale-[1.02] hover:border-white/20 hover:bg-white/10">
					<h3 class="font-display text-xl font-bold">Incentives</h3>
					<p class="mt-2 font-mono text-sm text-white/60">Various opportunities to earn by contributing.</p>
					<div class="mt-4 flex items-center font-mono text-sm text-white/40">
						<span>Learn More</span>
						<svg class="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</div>
				</a>

				<a href="/pages/rewards/competitions"
					class="group flex flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-all hover:scale-[1.02] hover:border-white/20 hover:bg-white/10">
					<h3 class="font-display text-xl font-bold">Competitions</h3>
					<p class="mt-2 font-mono text-sm text-white/60">Engage in community challenges and games.</p>
					<div class="mt-4 flex items-center font-mono text-sm text-white/40">
						<span>Learn More</span>
						<svg class="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</div>
				</a>
			</div>
		</section>

		<!-- Community Section -->
		<section class="rounded-2xl border border-white/10 bg-white/5 p-8">
			<div class="mb-6">
				<h2 class="flex items-center gap-3 text-2xl">
					<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-1" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M13 3H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l4-4h2a2 2 0 002-2V5a2 2 0 00-2-2z" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
					6. Join the Community
				</h2>
				<p class="mt-2 text-white/60">Connect with other Voi users and stay updated:</p>
			</div>

			<div class="grid gap-4 md:grid-cols-4">
				<a href="https://twitter.com/Voi_Net" target="_blank" rel="noopener"
					class="group flex flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-all hover:scale-[1.02] hover:border-white/20 hover:bg-white/10">
					<h3 class="font-display text-xl font-bold">Twitter</h3>
					<p class="mt-2 font-mono text-sm text-white/60">Follow for latest updates</p>
					<div class="mt-4 flex items-center font-mono text-sm text-white/40">
						<span>Follow Us</span>
						<svg class="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</div>
				</a>

				<a href="https://discord.gg/vnFbrJrHeW" target="_blank" rel="noopener"
					class="group flex flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-all hover:scale-[1.02] hover:border-white/20 hover:bg-white/10">
					<h3 class="font-display text-xl font-bold">Discord</h3>
					<p class="mt-2 font-mono text-sm text-white/60">Join discussions and get support</p>
					<div class="mt-4 flex items-center font-mono text-sm text-white/40">
						<span>Join Server</span>
						<svg class="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</div>
				</a>

				<a href="https://t.me/VoiOfficial" target="_blank" rel="noopener"
					class="group flex flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-all hover:scale-[1.02] hover:border-white/20 hover:bg-white/10">
					<h3 class="font-display text-xl font-bold">Telegram</h3>
					<p class="mt-2 font-mono text-sm text-white/60">Join our community chat</p>
					<div class="mt-4 flex items-center font-mono text-sm text-white/40">
						<span>Join Chat</span>
						<svg class="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</div>
				</a>

				<a href="https://medium.com/@voifoundation" target="_blank" rel="noopener"
					class="group flex flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-all hover:scale-[1.02] hover:border-white/20 hover:bg-white/10">
					<h3 class="font-display text-xl font-bold">Medium</h3>
					<p class="mt-2 font-mono text-sm text-white/60">Read our latest articles</p>
					<div class="mt-4 flex items-center font-mono text-sm text-white/40">
						<span>Read More</span>
						<svg class="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</div>
				</a>
			</div>
		</section>

		<!-- Governance Section -->
		<section class="rounded-2xl border border-white/10 bg-white/5 p-8">
			<div class="mb-6">
				<h2 class="flex items-center gap-3 text-2xl">
					<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M12 3L20 8.5V15.5L12 21L4 15.5V8.5L12 3Z" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M12 12L12 21M12 12L20 8.5M12 12L4 8.5" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
					7. Participate in Governance
				</h2>
			</div>

			<a href="/pages/governance/overview"
				class="group flex flex-col rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6 transition-all hover:scale-[1.02] hover:border-white/20">
				<h3 class="font-display text-xl font-bold">Governance Overview</h3>
				<p class="mt-2 font-mono text-sm text-white/60">
					Have a say in the future of Voi! Learn about our governance process and how to participate.
				</p>
				<div class="mt-4 flex items-center font-mono text-sm text-white/40">
					<span>Learn More</span>
					<svg class="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</div>
			</a>
		</section>
	</div>

	<svelte:fragment slot="related">
		<a
			href="/pages/getting-started/developers"
			class="group flex transform flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10"
		>
			<h3 class="font-display text-xl font-bold">For Developers</h3>
			<p class="mt-2 font-mono text-sm text-white/60">
				Ready to build on Voi? Check out our developer resources.
			</p>
			<div class="mt-4 flex items-center font-mono text-sm text-white/40">
				<span>Learn More</span>
				<svg class="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</div>
		</a>

		<a
			href="/pages/technical/nodes"
			class="group flex transform flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10"
		>
			<h3 class="font-display text-xl font-bold">Run a Node</h3>
			<p class="mt-2 font-mono text-sm text-white/60">
				Learn how to set up and operate a Voi node.
			</p>
			<div class="mt-4 flex items-center font-mono text-sm text-white/40">
				<span>Learn More</span>
				<svg class="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</div>
		</a>

		<a
			href="/pages/governance/overview"
			class="group flex transform flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10"
		>
			<h3 class="font-display text-xl font-bold">Governance</h3>
			<p class="mt-2 font-mono text-sm text-white/60">
				Understand how Voi's governance works and how to participate.
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