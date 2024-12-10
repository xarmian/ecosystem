<script lang="ts">
	import SubSectionTemplate from '$lib/components/SubSectionTemplate.svelte';
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
		<section class="rounded-2xl border border-white/10 bg-white/5 p-8">
			<div class="mb-6">
				<h2 class="flex items-center gap-3 text-2xl">
					<svg
						class="h-6 w-6"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
					>
						<path
							d="M20 7h-3m3 0v3m0-3l-3 3M4 17h3m-3 0v-3m0 3l3-3M4 7h3M4 7v3m0-3l3 3M20 17h-3m3 0v-3m0 3l-3-3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
					1. Understanding SDKs & APIs
				</h2>
				<p class="mt-2 text-white/60">
					Choose from the official and community-maintained SDKs to interact with the blockchain
				</p>
			</div>

			<div class="space-y-6">
				<div class="rounded-xl border border-white/10 bg-white/5 p-6">
					<h3 class="mb-4 font-display text-xl">Official SDKs</h3>
					<div class="grid gap-4 md:grid-cols-2">
						<a
							href="https://github.com/algorand/js-algorand-sdk"
							target="_blank"
							rel="noopener"
							class="group flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4 transition-all hover:border-white/20 hover:bg-white/10"
						>
							<div class="font-display text-lg">JavaScript</div>
							<svg
								class="ml-auto h-4 w-4 transform transition-transform group-hover:translate-x-1"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
							>
								<path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
						</a>
						<a
							href="https://github.com/algorand/go-algorand-sdk"
							target="_blank"
							rel="noopener"
							class="group flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4 transition-all hover:border-white/20 hover:bg-white/10"
						>
							<div class="font-display text-lg">Go</div>
							<svg
								class="ml-auto h-4 w-4 transform transition-transform group-hover:translate-x-1"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
							>
								<path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
						</a>
						<a
							href="https://github.com/algorand/py-algorand-sdk"
							target="_blank"
							rel="noopener"
							class="group flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4 transition-all hover:border-white/20 hover:bg-white/10"
						>
							<div class="font-display text-lg">Python</div>
							<svg
								class="ml-auto h-4 w-4 transform transition-transform group-hover:translate-x-1"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
							>
								<path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
						</a>
						<a
							href="https://github.com/algorand/java-algorand-sdk"
							target="_blank"
							rel="noopener"
							class="group flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4 transition-all hover:border-white/20 hover:bg-white/10"
						>
							<div class="font-display text-lg">Java</div>
							<svg
								class="ml-auto h-4 w-4 transform transition-transform group-hover:translate-x-1"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
							>
								<path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
						</a>
					</div>
				</div>

				<div class="rounded-xl border border-white/10 bg-white/5 p-6">
					<h3 class="mb-4 font-display text-xl">REST APIs</h3>
					<div class="grid gap-4 md:grid-cols-3">
						<a
							href="https://developer.algorand.org/docs/rest-apis/algod/"
							target="_blank"
							rel="noopener"
							class="group flex flex-col rounded-lg border border-white/10 bg-white/5 p-4 transition-all hover:border-white/20 hover:bg-white/10"
						>
							<div class="font-display text-lg">Algod</div>
							<p class="mt-2 text-sm text-white/60">Core node API for blockchain interaction</p>
							<svg
								class="ml-auto mt-2 h-4 w-4 transform transition-transform group-hover:translate-x-1"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
							>
								<path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
						</a>
						<a
							href="https://developer.algorand.org/docs/rest-apis/indexer/"
							target="_blank"
							rel="noopener"
							class="group flex flex-col rounded-lg border border-white/10 bg-white/5 p-4 transition-all hover:border-white/20 hover:bg-white/10"
						>
							<div class="font-display text-lg">Indexer</div>
							<p class="mt-2 text-sm text-white/60">Query historical blockchain data</p>
							<svg
								class="ml-auto mt-2 h-4 w-4 transform transition-transform group-hover:translate-x-1"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
							>
								<path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
						</a>
						<a
							href="https://developer.algorand.org/docs/rest-apis/kmd/"
							target="_blank"
							rel="noopener"
							class="group flex flex-col rounded-lg border border-white/10 bg-white/5 p-4 transition-all hover:border-white/20 hover:bg-white/10"
						>
							<div class="font-display text-lg">KMD</div>
							<p class="mt-2 text-sm text-white/60">Key management daemon API</p>
							<svg
								class="ml-auto mt-2 h-4 w-4 transform transition-transform group-hover:translate-x-1"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
							>
								<path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
						</a>
					</div>
				</div>
			</div>
		</section>

		<!-- Smart Contracts Section -->
		<section class="rounded-2xl border border-white/10 bg-white/5 p-8">
			<div class="mb-6">
				<h2 class="flex items-center gap-3 text-2xl">
					<svg
						class="h-6 w-6"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
					>
						<path d="M20 7l-8 4-8-4V17l8 4 8-4V7z" stroke-linecap="round" stroke-linejoin="round" />
						<path d="M4 7l8 4 8-4" stroke-linecap="round" stroke-linejoin="round" />
						<path d="M12 11v10" stroke-linecap="round" stroke-linejoin="round" />
					</svg>
					2. Smart Contracts
				</h2>
				<p class="mt-2 text-white/60">Write smart contracts using these supported languages</p>
			</div>

			<div class="grid gap-4 md:grid-cols-2">
				<div class="rounded-xl border border-white/10 bg-white/5 p-6">
					<h3 class="mb-4 font-display text-xl">Official Languages</h3>
					<div class="space-y-3">
						<a
							href="https://algorandfoundation.github.io/puya/"
							target="_blank"
							rel="noopener"
							class="group flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3 transition-all hover:border-white/20 hover:bg-white/10"
						>
							<div class="font-display">Python (Puya)</div>
							<svg
								class="ml-auto h-4 w-4 transform transition-transform group-hover:translate-x-1"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
							>
								<path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
						</a>
						<a
							href="https://github.com/algorand/pyteal"
							target="_blank"
							rel="noopener"
							class="group flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3 transition-all hover:border-white/20 hover:bg-white/10"
						>
							<div class="font-display">PyTeal</div>
							<svg
								class="ml-auto h-4 w-4 transform transition-transform group-hover:translate-x-1"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
							>
								<path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
						</a>
						<a
							href="https://github.com/reach-sh/reach-lang"
							target="_blank"
							rel="noopener"
							class="group flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3 transition-all hover:border-white/20 hover:bg-white/10"
						>
							<div class="font-display">Reach</div>
							<svg
								class="ml-auto h-4 w-4 transform transition-transform group-hover:translate-x-1"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
							>
								<path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
						</a>
						<a
							href="https://developer.algorand.org/docs/get-details/dapps/avm/teal/"
							target="_blank"
							rel="noopener"
							class="group flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3 transition-all hover:border-white/20 hover:bg-white/10"
						>
							<div class="font-display">TEAL</div>
							<svg
								class="ml-auto h-4 w-4 transform transition-transform group-hover:translate-x-1"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
							>
								<path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
						</a>
					</div>
				</div>

				<div class="rounded-xl border border-white/10 bg-white/5 p-6">
					<h3 class="mb-4 font-display text-xl">Community Languages</h3>
					<div class="space-y-3">
						<a
							href="https://github.com/tinymanorg/tealish"
							target="_blank"
							rel="noopener"
							class="group flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3 transition-all hover:border-white/20 hover:bg-white/10"
						>
							<div class="font-display">Tealish</div>
							<svg
								class="ml-auto h-4 w-4 transform transition-transform group-hover:translate-x-1"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
							>
								<path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
						</a>
						<a
							href="https://github.com/algorandfoundation/TEALScript"
							target="_blank"
							rel="noopener"
							class="group flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3 transition-all hover:border-white/20 hover:bg-white/10"
						>
							<div class="font-display">TEALScript</div>
							<svg
								class="ml-auto h-4 w-4 transform transition-transform group-hover:translate-x-1"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
							>
								<path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
						</a>
					</div>
				</div>
			</div>
		</section>

		<!-- Development Tools Section -->
		<section class="rounded-2xl border border-white/10 bg-white/5 p-8">
			<div class="mb-6">
				<h2 class="flex items-center gap-3 text-2xl">
					<svg
						class="h-6 w-6"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
					>
						<path
							d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
					3. Development Tools
				</h2>
				<p class="mt-2 text-white/60">Essential tools to streamline your development process</p>
			</div>

			<div class="space-y-6">
				<div class="grid gap-4 md:grid-cols-2">
					<a
						href="https://github.com/algorandfoundation/algokit-cli"
						target="_blank"
						rel="noopener"
						class="group flex flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-all hover:border-white/20 hover:bg-white/10"
					>
						<h3 class="font-display text-xl">Algokit</h3>
						<p class="mt-2 text-sm text-white/60">
							Complete development toolkit for building AVM applications
						</p>
						<div class="mt-4 flex items-center text-sm text-white/40">
							<span>View Documentation</span>
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
						href="https://github.com/algorand-devrel/beaker"
						target="_blank"
						rel="noopener"
						class="group flex flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-all hover:border-white/20 hover:bg-white/10"
					>
						<h3 class="font-display text-xl">Beaker</h3>
						<p class="mt-2 text-sm text-white/60">
							Framework for writing and testing smart contracts
						</p>
						<div class="mt-4 flex items-center text-sm text-white/40">
							<span>View Documentation</span>
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
				</div>

				<div class="rounded-xl border border-white/10 bg-white/5 p-6">
					<h3 class="mb-4 font-display text-xl">Public Node APIs</h3>
					<div class="grid gap-4 md:grid-cols-2">
						<div class="rounded-lg border border-white/10 bg-white/5 p-4">
							<h4 class="font-semibold">Mainnet</h4>
							<div class="mt-2 space-y-2 font-mono text-sm">
								<div class="rounded bg-white/5 p-2">
									<div class="text-white/60">API</div>
									<a
										href="https://mainnet-api.voi.nodely.dev"
										class="text-purple-400 hover:underline">mainnet-api.voi.nodely.dev</a
									>
								</div>
								<div class="rounded bg-white/5 p-2">
									<div class="text-white/60">Indexer</div>
									<a
										href="https://mainnet-idx.voi.nodely.dev"
										class="text-purple-400 hover:underline">mainnet-idx.voi.nodely.dev</a
									>
								</div>
							</div>
						</div>

						<div class="rounded-lg border border-white/10 bg-white/5 p-4">
							<h4 class="font-semibold">Testnet</h4>
							<div class="mt-2 space-y-2 font-mono text-sm">
								<div class="rounded bg-white/5 p-2">
									<div class="text-white/60">API</div>
									<a
										href="https://testnet-api.voi.nodely.dev"
										class="text-purple-400 hover:underline">testnet-api.voi.nodely.dev</a
									>
								</div>
								<div class="rounded bg-white/5 p-2">
									<div class="text-white/60">Indexer</div>
									<a
										href="https://testnet-idx.voi.nodely.dev"
										class="text-purple-400 hover:underline">testnet-idx.voi.nodely.dev</a
									>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Networks Section -->
		<section class="rounded-2xl border border-white/10 bg-white/5 p-8">
			<div class="mb-6">
				<h2 class="flex items-center gap-3 text-2xl">
					<svg
						class="h-6 w-6"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
					>
						<path
							d="M9 17H7A5 5 0 012 12a5 5 0 015-5h2m6 0h2a5 5 0 015 5 5 5 0 01-5 5h-2M8 12h8"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
					4. Networks
				</h2>
				<p class="mt-2 text-white/60">Available networks for development and deployment</p>
			</div>

			<div class="grid gap-4 md:grid-cols-3">
				<div class="rounded-xl border border-white/10 bg-white/5 p-6">
					<h3 class="font-display text-xl">Mainnet</h3>
					<div class="mt-4 space-y-2 font-mono text-sm">
						<div>
							<div class="text-white/60">Genesis ID</div>
							<div class="text-purple-400">voimain-v1.0</div>
						</div>
						<div>
							<div class="text-white/60">Genesis Hash</div>
							<div class="break-all text-purple-400">
								r20fSQI8gWe/kFZziNonSPCXLwcQmH/nxROvnnueWOk=
							</div>
						</div>
					</div>
				</div>

				<div class="rounded-xl border border-white/10 bg-white/5 p-6">
					<h3 class="font-display text-xl">Testnet</h3>
					<div class="mt-4 space-y-2 font-mono text-sm">
						<div>
							<div class="text-white/60">Genesis ID</div>
							<div class="text-purple-400">voitest-v1</div>
						</div>
						<div>
							<div class="text-white/60">Genesis Hash</div>
							<div class="break-all text-purple-400">
								IXnoWtviVVJW5LGivNFc0Dq14V3kqaXuK2u5OQrdVZo=
							</div>
						</div>
					</div>
				</div>

				<div class="rounded-xl border border-white/10 bg-white/5 p-6">
					<h3 class="font-display text-xl">Devnet</h3>
					<p class="mt-4 text-sm text-white/60">
						Spin up your own local network for development before deploying to Testnet and Mainnet.
					</p>
				</div>
			</div>
		</section>

		<!-- Help Section -->
		<section class="rounded-2xl border border-white/10 bg-white/5 p-8">
			<div class="mb-6">
				<h2 class="flex items-center gap-3 text-2xl">
					<svg
						class="h-6 w-6"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
					>
						<path
							d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
					Need Help?
				</h2>
				<p class="mt-4 text-white/60">
					Join our <a
						href="https://discord.com/channels/1055863853633785857/1157684453607493652"
						target="_blank"
						rel="noopener"
						class="text-purple-400 hover:text-purple-300 hover:underline">Developer Support</a
					> channel on Discord for assistance with your development questions.
				</p>
			</div>
		</section>
	</div>

	<svelte:fragment slot="related">
		<a
			href="/pages/technical/developer-docs"
			class="group flex transform flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10"
		>
			<h3 class="font-display text-xl font-bold">Documentation</h3>
			<p class="mt-2 font-mono text-sm text-white/60">Comprehensive guides and API references.</p>
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
			href="/pages/funding/grants"
			class="group flex transform flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10"
		>
			<h3 class="font-display text-xl font-bold">Grants</h3>
			<p class="mt-2 font-mono text-sm text-white/60">Get funding for your project.</p>
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
			href="/pages/community/events"
			class="group flex transform flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10"
		>
			<h3 class="font-display text-xl font-bold">Events</h3>
			<p class="mt-2 font-mono text-sm text-white/60">Join developer events and workshops.</p>
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
