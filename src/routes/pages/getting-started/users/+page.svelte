<script lang="ts">
	import SubSectionTemplate from '$lib/components/SubSectionTemplate.svelte';
	import Section from '$lib/components/Section.svelte';
	import InfoTile from '$lib/components/InfoTile.svelte';
	import ActionTile from '$lib/components/ActionTile.svelte';
	import LinkButton from '$lib/components/LinkButton.svelte';
</script>

<SubSectionTemplate title="For Users" description="Getting Started with Voi">
	<div class="space-y-12">
		<!-- Wallet Section -->
		<Section
			title="Install a Wallet"
			description="To interact with the Voi network, you'll need a compatible wallet. Choose from these trusted options:"
			icon={`<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M2 6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" stroke-linecap="round" stroke-linejoin="round"/>
				<path d="M18 4v4h4" stroke-linecap="round" stroke-linejoin="round"/>
				<path d="M18 11h2" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>`}
			number={1}
		>
			<div class="grid gap-4 md:grid-cols-3">
				<ActionTile
					href="https://kibis.is"
					title="Kibisis"
					description="Browser Extension & Mobile app for daily use and DApp interactions."
					external={true}
					actionText="Visit Website"
					variant="dark"
				/>

				<ActionTile
					href="https://lute.app"
					title="Lute"
					description="User-friendly web wallet focused on simplicity and security."
					external={true}
					actionText="Visit Website"
					variant="dark"
				/>

				<ActionTile
					href="https://wallet.biatec.io/new-wallet"
					title="Biatec"
					description="Feature-rich web wallet with an intuitive interface."
					external={true}
					actionText="Visit Website"
					variant="dark"
				/>
			</div>
		</Section>

		<!-- Account Creation Section -->
		<Section
			title="Create Your Account"
			description="After installing your wallet of choice, you'll need to create a new account:"
			icon={`<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M12 4v6m0 0v6m0-6h6m-6 0H6" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>`}
			number={2}
		>
			<InfoTile
				title="Account Setup Steps"
				description="Follow these steps to create your account securely"
				variant="dark"
			>
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
			</InfoTile>
		</Section>

		<!-- Get Tokens Section -->
		<Section
			title="Get Your First VOI Tokens"
			icon={`<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<circle cx="12" cy="12" r="10" stroke-linecap="round" stroke-linejoin="round"/>
				<path d="M8 9L12 15L16 9" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>`}
			number={3}
		>
			<div class="grid gap-4 sm:grid-cols-2">
				<ActionTile
					href="https://fountain.voirewards.com"
					title="Quick Start (Fountain)"
					description="Get a small amount of tokens from the community fountain to get started with Voi."
					external={true}
					actionText="Visit Fountain"
					variant="dark"
				/>
				<ActionTile
					href="https://www.mexc.com/exchange/VOI_USDT"
					title="Buy Tokens"
					description="Purchase VOI tokens from MEXC exchange for long-term use."
						external={true}
					actionText="Trade on MEXC"
					variant="dark"
				/>
			</div>
		</Section>

		<!-- Explore Section -->
		<Section
			title="Explore the Ecosystem"
			icon={`<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"/>
				<path d="M9 10a3 3 0 015.12-2.12L15 9m-3 3h2m-1 3a3 3 0 01-5.12 2.12L7 15" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>`}
			number={4}
		>
			<ActionTile
				href="/pages/projects/directory"
				title="Project Directory"
				description="Discover the various projects and applications being built on Voi."
				actionText="Browse Projects"
				variant="dark"
			/>
		</Section>

		<!-- Earn Rewards Section -->
		<Section
			title="Earn Rewards"
			description="There are several ways to earn rewards in the Voi ecosystem:"
			icon={`<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M12 8v8m-4-4h8" stroke-linecap="round" stroke-linejoin="round"/>
				<path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>`}
			number={5}
		>
			<div class="grid gap-4 md:grid-cols-3">
				<ActionTile
					href="/pages/rewards/node-running"
					title="Run a Node"
					description="Help secure the network and earn block rewards."
					variant="dark"
				/>

				<ActionTile
					href="/pages/rewards/incentives"
					title="Incentives"
					description="Various opportunities to earn by contributing."
					variant="dark"
				/>

				<ActionTile
					href="/pages/rewards/competitions"
					title="Competitions"
					description="Engage in community challenges and games."
					variant="dark"
				/>
			</div>
		</Section>

		<!-- Community Section -->
		<Section
			title="Join the Community"
			description="Connect with other Voi users and stay updated:"
			icon={`<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-1" stroke-linecap="round" stroke-linejoin="round"/>
				<path d="M13 3H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l4-4h2a2 2 0 002-2V5a2 2 0 00-2-2z" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>`}
			number={6}
		>
			<div class="grid gap-4 md:grid-cols-4">
				<ActionTile
					href="https://twitter.com/Voi_Net"
					title="Twitter"
					description="Follow for latest updates"
					external={true}
					actionText="Follow Us"
					variant="dark"
				/>

				<ActionTile
					href="https://discord.gg/vnFbrJrHeW"
					title="Discord"
					description="Join discussions and get support"
					external={true}
					actionText="Join Server"
					variant="dark"
				/>

				<ActionTile
					href="https://t.me/VoiOfficial"
					title="Telegram"
					description="Join our community chat"
					external={true}
					actionText="Join Chat"
					variant="dark"
				/>

				<ActionTile
					href="https://medium.com/@voifoundation"
					title="Medium"
					description="Read our latest articles"
					external={true}
					actionText="Read More"
					variant="dark"
				/>
			</div>
		</Section>

		<!-- Governance Section -->
		<Section
			title="Participate in Governance"
			icon={`<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M12 3L20 8.5V15.5L12 21L4 15.5V8.5L12 3Z" stroke-linecap="round" stroke-linejoin="round"/>
				<path d="M12 12L12 21M12 12L20 8.5M12 12L4 8.5" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>`}
			number={7}
		>
			<ActionTile
				href="/pages/governance/overview"
				title="Governance Overview"
				description="Have a say in the future of Voi! Learn about our governance process and how to participate."
				variant="dark"
			/>
		</Section>
	</div>

	<svelte:fragment slot="related">
		<ActionTile
			href="/pages/getting-started/developers"
			title="For Developers"
			description="Ready to build on Voi? Check out our developer resources."
		/>

		<ActionTile
			href="/pages/technical/nodes"
			title="Run a Node"
			description="Learn how to set up and operate a Voi node."
		/>

		<ActionTile
			href="/pages/governance/overview"
			title="Governance"
			description="Understand how Voi's governance works and how to participate."
		/>
	</svelte:fragment>
</SubSectionTemplate>
