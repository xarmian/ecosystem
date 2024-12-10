<script lang="ts">
	import SubSectionTemplate from '$lib/components/SubSectionTemplate.svelte';
	import StepSection from '$lib/components/StepSection.svelte';
	import CardLink from '$lib/components/CardLink.svelte';
</script>

<SubSectionTemplate title="For Users" description="Getting Started with Voi">
	<div class="space-y-12">
		<!-- Wallet Section -->
		<StepSection
			stepNumber={1}
			title="Install a Wallet"
			description="To interact with the Voi network, you'll need a compatible wallet. Choose from these trusted options:"
			icon={`<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M2 6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" stroke-linecap="round" stroke-linejoin="round"/>
				<path d="M18 4v4h4" stroke-linecap="round" stroke-linejoin="round"/>
				<path d="M18 11h2" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>`}
		>
			<div class="grid gap-4 md:grid-cols-3">
				<CardLink
					href="https://kibis.is"
					title="Kibisis"
					description="Browser Extension & Mobile app for daily use and DApp interactions."
					external={true}
					actionText="Visit Website"
				/>

				<CardLink
					href="https://lute.app"
					title="Lute"
					description="User-friendly web wallet focused on simplicity and security."
					external={true}
					actionText="Visit Website"
				/>

				<CardLink
					href="https://wallet.biatec.io/new-wallet"
					title="Biatec"
					description="Feature-rich web wallet with an intuitive interface."
					external={true}
					actionText="Visit Website"
				/>
			</div>
		</StepSection>

		<!-- Account Creation Section -->
		<StepSection
			stepNumber={2}
			title="Create Your Account"
			description="After installing your wallet of choice, you'll need to create a new account:"
			icon={`<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M12 4v6m0 0v6m0-6h6m-6 0H6" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>`}
		>
			<div class="rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6">
				<ul class="space-y-4">
					<li class="flex items-start gap-3">
						<span class="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-purple-400/10 text-xs font-mono text-purple-400">1</span>
						<span>Select "Create New Account" or similar option in your wallet</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-purple-400/10 text-xs font-mono text-purple-400">2</span>
						<span>You'll receive a 25-word mnemonic phrase - this is your account's master key</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-purple-400/10 text-xs font-mono text-purple-400">3</span>
						<div>
							<strong class="text-purple-400">Important:</strong> Write down your mnemonic phrase and store it securely offline. Never share it with anyone!
						</div>
					</li>
					<li class="flex items-start gap-3">
						<span class="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-purple-400/10 text-xs font-mono text-purple-400">4</span>
						<span>Confirm your mnemonic phrase to activate your account</span>
					</li>
				</ul>
			</div>
		</StepSection>

		<!-- Get Tokens Section -->
		<StepSection
			stepNumber={3}
			title="Get Your First VOI Tokens"
			icon={`<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<circle cx="12" cy="12" r="10" stroke-linecap="round" stroke-linejoin="round"/>
				<path d="M8 9L12 15L16 9" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>`}
		>
			<div class="grid gap-4 sm:grid-cols-2">
				<CardLink
					href="https://fountain.voirewards.com"
					title="Quick Start (Fountain)"
					description="Get a small amount of tokens from the community fountain to get started with Voi."
					external={true}
					actionText="Visit Fountain"
					highlight={true}
				/>
				<CardLink
					href="https://www.mexc.com/exchange/VOI_USDT"
					title="Buy Tokens"
					description="Purchase VOI tokens from MEXC exchange for long-term use."
					external={true}
					actionText="Trade on MEXC"
					highlight={true}
				/>
			</div>
		</StepSection>

		<!-- Explore Section -->
		<StepSection
			stepNumber={4}
			title="Explore the Ecosystem"
				icon={`<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"/>
				<path d="M9 10a3 3 0 015.12-2.12L15 9m-3 3h2m-1 3a3 3 0 01-5.12 2.12L7 15" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>`}
		>
			<CardLink
				href="/pages/projects/directory"
				title="Project Directory"
				description="Discover the various projects and applications being built on Voi."
				highlight={true}
				actionText="Browse Projects"
			/>
		</StepSection>

		<!-- Earn Rewards Section -->
		<StepSection
			stepNumber={5}
			title="Earn Rewards"
			description="There are several ways to earn rewards in the Voi ecosystem:"
			icon={`<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M12 8v8m-4-4h8" stroke-linecap="round" stroke-linejoin="round"/>
				<path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>`}
		>
			<div class="grid gap-4 md:grid-cols-3">
				<CardLink
					href="/pages/rewards/node-running"
					title="Run a Node"
					description="Help secure the network and earn block rewards."
				/>

				<CardLink
					href="/pages/rewards/incentives"
					title="Incentives"
					description="Various opportunities to earn by contributing."
				/>

				<CardLink
					href="/pages/rewards/competitions"
					title="Competitions"
					description="Engage in community challenges and games."
				/>
			</div>
		</StepSection>

		<!-- Community Section -->
		<StepSection
			stepNumber={6}
			title="Join the Community"
			description="Connect with other Voi users and stay updated:"
			icon={`<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-1" stroke-linecap="round" stroke-linejoin="round"/>
				<path d="M13 3H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l4-4h2a2 2 0 002-2V5a2 2 0 00-2-2z" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>`}
		>
			<div class="grid gap-4 md:grid-cols-4">
				<CardLink
					href="https://twitter.com/Voi_Net"
					title="Twitter"
					description="Follow for latest updates"
					external={true}
					actionText="Follow Us"
				/>

				<CardLink
					href="https://discord.gg/vnFbrJrHeW"
					title="Discord"
					description="Join discussions and get support"
					external={true}
					actionText="Join Server"
				/>

				<CardLink
					href="https://t.me/VoiOfficial"
					title="Telegram"
					description="Join our community chat"
					external={true}
					actionText="Join Chat"
				/>

				<CardLink
					href="https://medium.com/@voifoundation"
					title="Medium"
					description="Read our latest articles"
					external={true}
					actionText="Read More"
				/>
			</div>
		</StepSection>

		<!-- Governance Section -->
		<StepSection
			stepNumber={7}
			title="Participate in Governance"
			icon={`<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M12 3L20 8.5V15.5L12 21L4 15.5V8.5L12 3Z" stroke-linecap="round" stroke-linejoin="round"/>
				<path d="M12 12L12 21M12 12L20 8.5M12 12L4 8.5" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>`}
		>
			<CardLink
				href="/pages/governance/overview"
				title="Governance Overview"
				description="Have a say in the future of Voi! Learn about our governance process and how to participate."
				highlight={true}
			/>
		</StepSection>
	</div>

	<svelte:fragment slot="related">
		<CardLink
			href="/pages/getting-started/developers"
			title="For Developers"
			description="Ready to build on Voi? Check out our developer resources."
		/>

		<CardLink
			href="/pages/technical/nodes"
			title="Run a Node"
			description="Learn how to set up and operate a Voi node."
		/>

		<CardLink
			href="/pages/governance/overview"
			title="Governance"
			description="Understand how Voi's governance works and how to participate."
		/>
	</svelte:fragment>
</SubSectionTemplate>
