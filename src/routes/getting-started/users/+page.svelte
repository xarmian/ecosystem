<script lang="ts">
  import SubSectionTemplate from '../../../lib/components/SubSectionTemplate.svelte';
</script>

<SubSectionTemplate
  title="Getting Started for Users"
  description="Learn how to join the Voi network, create a wallet, and start participating in the ecosystem."
  section="Getting Started"
>
  <!-- Main Content -->
  <h2>Welcome to Voi</h2>
  <p>
    Getting started with Voi is simple. Follow this guide to create your wallet, obtain VOI tokens,
    and begin participating in the network.
  </p>

  <h2>Create Your Wallet</h2>
  <p>
    To interact with the Voi network, you'll need a compatible wallet. We recommend using one of the following options:
  </p>
  <ul>
    <li>Defly Wallet (Mobile)</li>
    <li>Pera Wallet (Mobile & Web)</li>
    <li>Exodus Wallet (Desktop & Mobile)</li>
  </ul>

  <h2>Obtain VOI Tokens</h2>
  <p>
    There are several ways to obtain VOI tokens:
  </p>
  <ul>
    <li>Participate in community events and competitions</li>
    <li>Run a node and earn block rewards</li>
    <li>Trade on supported exchanges</li>
    <li>Contribute to ecosystem projects</li>
  </ul>

  <h2>Network Participation</h2>
  <p>
    As a Voi user, you can participate in the network in various ways:
  </p>
  <ul>
    <li>Vote on governance proposals</li>
    <li>Stake your tokens</li>
    <li>Join community discussions</li>
    <li>Support ecosystem projects</li>
  </ul>

  <h2>Security Best Practices</h2>
  <p>
    Keeping your assets safe is crucial. Follow these security guidelines:
  </p>
  <ul>
    <li>Never share your private keys or seed phrase</li>
    <li>Use strong passwords and enable 2FA where available</li>
    <li>Keep your wallet software updated</li>
    <li>Verify all transaction details before confirming</li>
  </ul>

  <!-- Related Resources -->
  <svelte:fragment slot="related">
    <a
      href="/getting-started/developers"
      class="block p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
    >
      <h3 class="font-display text-xl font-bold mb-2">For Developers</h3>
      <p class="font-mono text-sm text-white/60">
        Ready to build on Voi? Check out our developer resources.
      </p>
    </a>

    <a
      href="/technical/nodes"
      class="block p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
    >
      <h3 class="font-display text-xl font-bold mb-2">Run a Node</h3>
      <p class="font-mono text-sm text-white/60">
        Learn how to set up and operate a Voi node.
      </p>
    </a>

    <a
      href="/community/events"
      class="block p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
    >
      <h3 class="font-display text-xl font-bold mb-2">Community Events</h3>
      <p class="font-mono text-sm text-white/60">
        Join our community events and stay connected.
      </p>
    </a>
  </svelte:fragment>
</SubSectionTemplate> 