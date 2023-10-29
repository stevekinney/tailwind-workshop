<script lang="ts">
	export let highlight: string = '';
	export let selector = '*';

	let container: HTMLDivElement;

	$: node = container?.querySelector(selector);

	$: attributes = Array.from(node?.attributes || []).filter(
		({ name }) => !name.startsWith('data-') && name !== 'class'
	);
</script>

<div class="not-prose space-y-6 rounded-md border-2 border-slate-200 bg-slate-100 p-4">
	<div bind:this={container} class="not-prose">
		<slot />
	</div>

	{#if container}
		<ul class="flex">
			{#each attributes || [] as { name, value }}
				<li class="rounded-md border-2 border-slate-300 bg-slate-200 px-2">
					<span class="font-semibold">{name}</span>
					{#if value}<span class="bg-slate-100">{value}</span>{/if}
				</li>
			{/each}
		</ul>
		<ul class="flex flex-wrap gap-2">
			{#each node?.classList || [] as className}
				<li
					class="select-all list-none rounded-md border-2 border-yellow-200 bg-yellow-50 px-2 font-mono"
					class:highlight={highlight.includes(className)}
				>
					{className}
				</li>
			{/each}
		</ul>
	{/if}
</div>

<style lang="postcss">
	.highlight {
		@apply border-orange-200 bg-orange-100 font-semibold;
	}
</style>
