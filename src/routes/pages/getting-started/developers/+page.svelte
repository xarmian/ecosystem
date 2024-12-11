<script lang="ts">
	import SubSectionTemplate from '$lib/components/SubSectionTemplate.svelte';
	import Section from '$lib/components/Section.svelte';
	import InfoTile from '$lib/components/InfoTile.svelte';
	import ActionTile from '$lib/components/ActionTile.svelte';
	import LinkButton from '$lib/components/LinkButton.svelte';
	import CopyButton from '$lib/components/CopyButton.svelte';
</script>

<SubSectionTemplate title="For Developers" description="Start building on Voi">
	<div class="space-y-12">
		<!-- Disclaimer -->
		<div class="rounded-lg border border-white/10 bg-white/5 p-4">
			<div class="flex items-center gap-3">
				<svg
					class="h-5 w-5 flex-shrink-0 text-white/80"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
				>
					<path
						d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
				<p class="text-sm text-white/60">
					<span class="font-semibold text-white/80">Note:</span> Developing on Voi is identical to developing
					on Algorand, using the same tools and infrastructure. Voi extends functionality by supporting
					both Standard Assets and Smart Assets, providing more options for your use cases.
				</p>
			</div>
		</div>

		<!-- SDKs & APIs Section -->
		<Section
			title="Understanding SDKs & APIs"
			icon={`<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M20 7h-3m3 0v3m0-3l-3 3M4 17h3m-3 0v-3m0 3l3-3M4 7h3M4 7v3m0-3l3 3M20 17h-3m3 0v-3m0 3l-3-3" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>`}
			number={1}
		>
			<div class="space-y-6">
				<InfoTile
					title="Official SDKs"
					variant="dark"
				>
					<div class="grid gap-4 md:grid-cols-2">
						<LinkButton
							href="https://github.com/algorand/js-algorand-sdk"
							label="JavaScript"
							description="Official JavaScript SDK"
							external={true}
						/>
						<LinkButton
							href="https://github.com/algorand/go-algorand-sdk"
							label="Go"
							description="Official Go SDK"
							external={true}
						/>
						<LinkButton
							href="https://github.com/algorand/py-algorand-sdk"
							label="Python"
							description="Official Python SDK"
							external={true}
						/>
						<LinkButton
							href="https://github.com/algorand/java-algorand-sdk"
							label="Java"
							description="Official Java SDK"
							external={true}
						/>
					</div>
				</InfoTile>

				<InfoTile
					title="REST APIs"
					variant="dark"
				>
					<div class="grid gap-4 md:grid-cols-3">
						<LinkButton
							href="https://developer.algorand.org/docs/rest-apis/algod/"
							label="Algod"
							description="Core node API for blockchain interaction"
							external={true}
						/>
						<LinkButton
							href="https://developer.algorand.org/docs/rest-apis/indexer/"
							label="Indexer"
							description="Query historical blockchain data"
							external={true}
						/>
						<LinkButton
							href="https://developer.algorand.org/docs/rest-apis/kmd/"
							label="KMD"
							description="Key management daemon API"
							external={true}
						/>
					</div>
				</InfoTile>
			</div>
		</Section>

		<!-- Smart Contracts Section -->
		<Section
			title="Smart Contracts"
			icon={`<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M20 7l-8 4-8-4V17l8 4 8-4V7z" stroke-linecap="round" stroke-linejoin="round"/>
				<path d="M4 7l8 4 8-4" stroke-linecap="round" stroke-linejoin="round"/>
				<path d="M12 11v10" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>`}
			number={2}
		>
			<div class="grid gap-4 md:grid-cols-2">
				<InfoTile
					title="Official Languages"
					variant="dark"
				>
					<div class="space-y-3">
						<LinkButton
							href="https://algorandfoundation.github.io/puya/"
							label="Python (Puya)"
							description="Official Python smart contract language"
							external={true}
						/>
						<LinkButton
							href="https://github.com/algorand/pyteal"
							label="PyTeal"
							description="Python library for Algorand smart contracts"
							external={true}
						/>
						<LinkButton
							href="https://github.com/reach-sh/reach-lang"
							label="Reach"
							description="High-level smart contract language"
							external={true}
						/>
						<LinkButton
							href="https://developer.algorand.org/docs/get-details/dapps/avm/teal/"
							label="TEAL"
							description="Low-level assembly language"
							external={true}
						/>
					</div>
				</InfoTile>

				<InfoTile
					title="Community Languages"
					variant="dark"
				>
					<div class="space-y-3">
						<LinkButton
							href="https://github.com/tinymanorg/tealish"
							label="Tealish"
							description="High-level language that compiles to TEAL"
							external={true}
						/>
						<LinkButton
							href="https://github.com/algorandfoundation/TEALScript"
							label="TEALScript"
							description="TypeScript-like language for smart contracts"
							external={true}
						/>
					</div>
				</InfoTile>
			</div>
		</Section>

		<!-- Development Tools Section -->
		<Section
			title="Development Tools"
			icon={`<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>`}
			number={3}
		>
			<div class="space-y-6">
				<div class="grid gap-4 md:grid-cols-2">
					<ActionTile
						title="Algokit"
						description="Complete development toolkit for building AVM applications"
						href="https://github.com/algorandfoundation/algokit-cli"
						external={true}
						actionText="View Documentation"
						variant="dark"
					/>

					<ActionTile
						title="Beaker"
						description="Framework for writing and testing smart contracts"
						href="https://github.com/algorand-devrel/beaker"
						external={true}
						actionText="View Documentation"
						variant="dark"
					/>
				</div>

				<InfoTile
					title="Public Node APIs"
					description="Access the blockchain through our public API endpoints"
					variant="dark"
				>
					<div class="grid gap-4 md:grid-cols-2">
						<div class="space-y-3">
							<h4 class="font-semibold text-white/80">Mainnet</h4>
							<div class="space-y-3">
								<div class="flex items-center justify-between rounded-lg border border-white/10 bg-black/30 p-3">
									<div class="flex flex-col">
										<span class="text-sm text-white/60">API</span>
										<span class="font-mono text-sm text-purple-400">mainnet-api.voi.nodely.dev</span>
									</div>
									<CopyButton text="mainnet-api.voi.nodely.dev" />
								</div>
								<div class="flex items-center justify-between rounded-lg border border-white/10 bg-black/30 p-3">
									<div class="flex flex-col">
										<span class="text-sm text-white/60">Indexer</span>
										<span class="font-mono text-sm text-purple-400">mainnet-idx.voi.nodely.dev</span>
									</div>
									<CopyButton text="mainnet-idx.voi.nodely.dev" />
								</div>
							</div>
						</div>

						<div class="space-y-3">
							<h4 class="font-semibold text-white/80">Testnet</h4>
							<div class="space-y-3">
								<div class="flex items-center justify-between rounded-lg border border-white/10 bg-black/30 p-3">
									<div class="flex flex-col">
										<span class="text-sm text-white/60">API</span>
										<span class="font-mono text-sm text-purple-400">testnet-api.voi.nodely.dev</span>
									</div>
									<CopyButton text="testnet-api.voi.nodely.dev" />
								</div>
								<div class="flex items-center justify-between rounded-lg border border-white/10 bg-black/30 p-3">
									<div class="flex flex-col">
										<span class="text-sm text-white/60">Indexer</span>
										<span class="font-mono text-sm text-purple-400">testnet-idx.voi.nodely.dev</span>
									</div>
									<CopyButton text="testnet-idx.voi.nodely.dev" />
								</div>
							</div>
						</div>
					</div>
				</InfoTile>
			</div>
		</Section>

		<!-- Networks Section -->
		<Section
			title="Networks"
				icon={`<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M9 17H7A5 5 0 012 12a5 5 0 015-5h2m6 0h2a5 5 0 015 5 5 5 0 01-5 5h-2M8 12h8" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>`}
			number={4}
		>
			<div class="grid gap-4 md:grid-cols-3">
				<InfoTile
					title="Mainnet"
					variant="dark"
				>
					<div class="space-y-3">
						<div class="flex items-center justify-between rounded-lg border border-white/10 bg-black/30 p-3">
							<div class="flex flex-col">
								<span class="text-sm text-white/60">Genesis ID</span>
								<span class="font-mono text-sm text-purple-400">voimain-v1.0</span>
							</div>
							<CopyButton text="voimain-v1.0" />
						</div>
						<div class="flex items-center justify-between rounded-lg border border-white/10 bg-black/30 p-3">
							<div class="flex flex-col">
								<span class="text-sm text-white/60">Genesis Hash</span>
								<span class="font-mono text-sm text-purple-400 break-all">r20fSQI8gWe/kFZziNonSPCXLwcQmH/nxROvnnueWOk=</span>
							</div>
							<CopyButton text="r20fSQI8gWe/kFZziNonSPCXLwcQmH/nxROvnnueWOk=" />
						</div>
					</div>
				</InfoTile>

				<InfoTile
					title="Testnet"
					variant="dark"
				>
					<div class="space-y-3">
						<div class="flex items-center justify-between rounded-lg border border-white/10 bg-black/30 p-3">
							<div class="flex flex-col">
								<span class="text-sm text-white/60">Genesis ID</span>
								<span class="font-mono text-sm text-purple-400">voitest-v1</span>
							</div>
							<CopyButton text="voitest-v1" />
						</div>
						<div class="flex items-center justify-between rounded-lg border border-white/10 bg-black/30 p-3">
							<div class="flex flex-col">
								<span class="text-sm text-white/60">Genesis Hash</span>
								<span class="font-mono text-sm text-purple-400 break-all">IXnoWtviVVJW5LGivNFc0Dq14V3kqaXuK2u5OQrdVZo=</span>
							</div>
							<CopyButton text="IXnoWtviVVJW5LGivNFc0Dq14V3kqaXuK2u5OQrdVZo=" />
						</div>
					</div>
				</InfoTile>

				<InfoTile
					title="Devnet"
					description="Spin up your own local network for development before deploying to Testnet and Mainnet."
					variant="dark"
				/>
			</div>
		</Section>

		<!-- Get Tokens Section -->
		<Section
			title="Get Tokens"
			icon={`<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<circle cx="12" cy="12" r="10" stroke-linecap="round" stroke-linejoin="round"/>
				<path d="M8 9L12 15L16 9" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>`}
			number={5}
		>
			<div class="space-y-6">
				<InfoTile
					title="Testnet"
					variant="dark"
				>
					<div class="grid gap-4 md:grid-cols-2">
						<ActionTile
							title="Testnet Faucet"
							description="Get free testnet tokens to develop and test your applications."
							href="https://faucet.nautilus.sh/"
							external={true}
							actionText="Get Tokens"
							variant="dark"
						/>
					</div>
				</InfoTile>

				<InfoTile
					title="Mainnet"
					variant="dark"
				>
					<div class="grid gap-4 md:grid-cols-2">
						<ActionTile
							title="Quick Start (Fountain)"
							description="Get a small amount of tokens from the community fountain to get started."
							href="https://fountain.voirewards.com"
							external={true}
							actionText="Visit Fountain"
							variant="dark"
						/>

						<ActionTile
							title="Buy Tokens"
							description="Purchase VOI tokens from MEXC exchange for production deployment."
							href="https://www.mexc.com/exchange/VOI_USDT"
							external={true}
							actionText="Trade on MEXC"
							variant="dark"
						/>
					</div>
				</InfoTile>
			</div>
		</Section>

		<!-- Help Section -->
		<Section
			title="Need Help?"
			icon={`<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>`}
		>
			<p class="mt-4 text-white/60">
				Join our <a
					href="https://discord.com/channels/1055863853633785857/1157684453607493652"
					target="_blank"
					rel="noopener"
					class="text-purple-400 hover:text-purple-300 hover:underline">Developer Support</a
				> channel on Discord for assistance with your development questions.
			</p>
		</Section>
	</div>

	<svelte:fragment slot="related">
		<ActionTile
			title="Documentation"
			description="Comprehensive guides and API references."
			href="/pages/technical/developer-docs"
		/>

		<ActionTile
			title="Grants"
			description="Get funding for your project."
			href="/pages/funding/grants"
		/>

		<ActionTile
			title="Events"
			description="Join developer events and workshops."
			href="/pages/community/events"
		/>
	</svelte:fragment>
</SubSectionTemplate>
