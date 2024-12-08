<script lang="ts">
  export let title: string;
  export let description: string;
  export let section: string;
</script>

<div class="container mx-auto px-4 py-12">
  <!-- Breadcrumb -->
  <nav class="mb-8">
    <ol class="flex items-center space-x-2 font-mono text-sm text-white/60">
      <li><a href="/" class="hover:text-white">Home</a></li>
      <li>
        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M9 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        </svg>
      </li>
      <li><a href="/{section.toLowerCase()}" class="hover:text-white">{section}</a></li>
      <li>
        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M9 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        </svg>
      </li>
      <li class="text-white">{title}</li>
    </ol>
  </nav>

  <!-- Header -->
  <header class="mb-12">
    <h1 class="font-display text-4xl font-bold mb-4">{title}</h1>
    <p class="font-mono text-lg text-white/60 max-w-3xl">{description}</p>
  </header>

  <!-- Main Content -->
  <div class="prose prose-invert max-w-none">
    <slot />
  </div>

  <!-- Related Links -->
  <div class="mt-16 pt-8 border-t border-white/10">
    <h2 class="font-display text-2xl font-bold mb-6">Related Resources</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <slot name="related" />
    </div>
  </div>
</div>

<style>
  /* Add custom prose styles for markdown content */
  :global(.prose) {
    @apply text-white/80;
  }
  
  :global(.prose strong) {
    @apply text-white;
  }
  
  :global(.prose a) {
    @apply text-voi-light hover:text-white;
  }
  
  :global(.prose h2) {
    @apply font-display text-white mt-12 first:mt-0;
  }
  
  :global(.prose h3) {
    @apply font-display text-white;
  }
  
  :global(.prose code) {
    @apply bg-white/10 text-white px-1.5 py-0.5 rounded;
  }
  
  :global(.prose pre) {
    @apply bg-white/5 border border-white/10;
  }
  
  :global(.prose blockquote) {
    @apply border-l-4 border-voi-light bg-white/5 px-6 py-4;
  }
  
  :global(.prose ul) {
    @apply space-y-2;
  }
  
  :global(.prose table) {
    @apply border-white/10;
  }
  
  :global(.prose th) {
    @apply bg-white/5 text-white;
  }
  
  :global(.prose td) {
    @apply border-white/10;
  }
</style> 