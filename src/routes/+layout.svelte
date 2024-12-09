<script lang="ts">
	import '../app.css';
</script>

<div class="min-h-screen bg-voi-dark text-white">
	<main class="min-h-screen">
		<slot />
	</main>
</div>

<style>
	:global(body) {
		@apply bg-voi-dark;
	}
</style>
