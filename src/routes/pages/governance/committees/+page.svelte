<script lang="ts">
	import SubSectionTemplate from '$lib/components/SubSectionTemplate.svelte';
</script>

<SubSectionTemplate
	title="Committees"
	description="Collaborative working groups driving ecosystem development"
>
	<!-- Intro Section -->
	<div class="mt-10 rounded-2xl border border-white/10 bg-white/5 p-8">
		<div class="prose prose-invert max-w-none">
			<p class="text-lg text-white/80">
				Committees provide a structured way for community members to contribute their expertise and
				help shape Voi's future. While meetings are open to all, registering will ensure you receive
				calendar invites and never miss a meeting.
			</p>
		</div>
	</div>

	<!-- Committees Overview -->
	<div class="mt-10 rounded-2xl border border-white/10 bg-white/5 p-8">
		<div class="flex items-center justify-between">
			<h2 class="text-2xl font-bold">Community Committees</h2>
			<a
				href="/pages/community/events"
				class="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm transition-all hover:border-white/20 hover:bg-white/10"
			>
				View Meeting Schedule
				<svg class="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
					<path d="M9 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</a>
		</div>

		<!-- Current Committees -->
		<div class="mt-8 grid gap-6 md:grid-cols-3">
			<div
				class="rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6"
			>
				<h3 class="font-display text-xl">Network Committee</h3>
				<p class="mt-2 text-sm text-white/60">
					Focuses on technical infrastructure, node operations, and network performance
					optimization.
				</p>
				<div class="mt-4">
					<a
						href="https://forms.gle/Y3MbAhdJbYgkXmzs7"
						target="_blank"
						class="inline-flex items-center text-sm text-purple-400 hover:text-purple-300"
					>
						Register →
					</a>
				</div>
			</div>

			<div
				class="rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6"
			>
				<h3 class="font-display text-xl">Voiagers Committee</h3>
				<p class="mt-2 text-sm text-white/60">
					Represents community interests, engagement initiatives, and ecosystem growth strategies.
				</p>
				<div class="mt-4">
					<a
						href="https://forms.gle/vDt1sgkrm671Uc9q6"
						target="_blank"
						class="inline-flex items-center text-sm text-purple-400 hover:text-purple-300"
					>
						Register →
					</a>
				</div>
			</div>

			<div
				class="rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6"
			>
				<h3 class="font-display text-xl">Builders Committee</h3>
				<p class="mt-2 text-sm text-white/60">
					Drives development initiatives, technical standards, and builder support programs.
				</p>
				<div class="mt-4">
					<a
						href="https://forms.gle/wc7pFCUsSBm3yoEB6"
						target="_blank"
						class="inline-flex items-center text-sm text-purple-400 hover:text-purple-300"
					>
						Register →
					</a>
				</div>
			</div>
		</div>

		<div
			class="mt-6 rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6"
		>
			<h3 class="text-xl">Key Features</h3>
			<ul class="mt-4 space-y-2 text-white/80">
				<li class="flex items-start gap-2">
					<svg
						class="mt-1 h-4 w-4 flex-shrink-0 text-voi-light"
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
					Community members can propose and create new committees
				</li>
				<li class="flex items-start gap-2">
					<svg
						class="mt-1 h-4 w-4 flex-shrink-0 text-voi-light"
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
					Council members represent committee interests in governance
				</li>
				<li class="flex items-start gap-2">
					<svg
						class="mt-1 h-4 w-4 flex-shrink-0 text-voi-light"
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
					Direct channel for specialized input and feedback
				</li>
			</ul>
		</div>
	</div>

	<svelte:fragment slot="related">
		<a
			href="/pages/governance/overview"
			class="group flex transform flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10"
		>
			<h3 class="font-display text-xl font-bold">Governance Overview</h3>
			<p class="mt-2 font-mono text-sm text-white/60">
				Learn about Voi's tripartite governance system and how it works.
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
			href="/pages/governance/council"
			class="group flex transform flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10"
		>
			<h3 class="font-display text-xl font-bold">Council</h3>
			<p class="mt-2 font-mono text-sm text-white/60">
				Discover the role and responsibilities of the Voi Council.
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
			href="/pages/governance/voting"
			class="group flex transform flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10"
		>
			<h3 class="font-display text-xl font-bold">Voting</h3>
			<p class="mt-2 font-mono text-sm text-white/60">
				Understand how voting works and how to participate in governance decisions.
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
