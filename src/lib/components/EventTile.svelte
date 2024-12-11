<script lang="ts">
	export let title: string;
	export let time: string;
	export let frequency: string = 'Weekly';
	export let color: string = 'purple';
	export let meetingUrl: string | undefined = undefined;
	export let archiveUrl: string | undefined = undefined;
	export let isLive: boolean = false;
</script>

<div class="rounded-xl border border-{color}-400/20 bg-{color}-400/5 p-4 sm:p-6">
	<div class="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
		<h3 class="font-display text-xl text-{color}-200">{title}</h3>
		<span class="inline-block rounded-full border border-{color}-400/20 bg-{color}-400/10 px-3 py-1 text-sm">{frequency}</span>
	</div>
	<div class="space-y-4">
		<div class="text-sm text-white/60">
			<div class="flex items-start gap-2">
				<svg
					class="mt-1 h-4 w-4 flex-shrink-0"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
				>
					<path
						d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
				<span>{time}</span>
			</div>
		</div>
		<div class="flex flex-wrap gap-2">
			{#if meetingUrl}
				<a
					href={meetingUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-1 rounded-full border border-{color}-400/20 bg-{color}-400/10 px-3 py-1 text-sm text-{color}-200 transition-colors hover:bg-{color}-400/20"
				>
					<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
						<path
							d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
					{isLive ? 'Watch Live' : 'Join Meeting'}
				</a>
			{/if}
			{#if archiveUrl}
				<a
					href={archiveUrl}
					class="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/60 transition-colors hover:bg-white/10"
				>
					<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
						<path
							d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
					{isLive ? 'Past Recordings' : 'Past Meetings'}
				</a>
			{/if}
		</div>
	</div>
</div> 