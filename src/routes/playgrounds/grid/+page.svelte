<script lang="ts">
	import clsx from 'clsx';
	import { queryParam } from 'sveltekit-search-params';

	import * as classes from './grid-classes';

	import Box from './box.svelte';
	import Select from '../select.svelte';
	import Range from '../range.svelte';
	import Reset from '../reset.svelte';

	import '../playground.css';
	import { title } from '$lib/metadata';

	let boxes = queryParam('boxes', {
		encode: (value: number) => value.toString(),
		decode: (value: string | null) => (value ? parseInt(value) : null),
		defaultValue: 9
	});

	let containerHeight = queryParam('height', {
		encode: (value: number) => value.toString(),
		decode: (value: string | null) => (value ? parseInt(value) : null),
		defaultValue: 600
	});

	let gridTemplateColumns = queryParam('gridTemplateColumns');
	let gridTemplateRows = queryParam('gridTemplateRows');
	let gridAutoFlow = queryParam('gridAutoFlow');
	let gridAutoColumns = queryParam('gridAutoColumns');
	let gridAutoRows = queryParam('gridAutoRows');
	let gap = queryParam('gap');
</script>

<svelte:head>
	<title>Grid Playground - {title}</title>
</svelte:head>

<div class="space-y-6">
	<div class="flex items-center justify-between gap-8">
		<Range id="boxes" title="Boxes" bind:value={$boxes} min="1" max="20" />
		<Range
			id="height"
			title="Container Height"
			bind:value={$containerHeight}
			min="300"
			max="2000"
			step="50"
		/>
		<Reset params="?boxes=9&height=600" />
	</div>

	<div
		class={clsx(
			'@container',
			'grid overflow-scroll rounded-md border-2 border-teal-300 bg-teal-100 p-2 shadow-md',
			$gridTemplateColumns,
			$gridTemplateRows,
			$gridAutoFlow,
			$gridAutoColumns,
			$gridAutoRows,
			$gap
		)}
		style="height: {$containerHeight}px"
	>
		{#each Array($boxes) as _, id}
			<Box {id} />
		{/each}
	</div>

	<section id="controls" class="grid grid-cols-1 grid-rows-1 gap-4 md:grid-cols-3 md:grid-rows-3">
		<Select
			id="gridTemplateColumns"
			title="Grid Template Columns"
			bind:value={$gridTemplateColumns}
			options={classes.gridTemplateColumns}
		/>
		<Select
			id="gridTemplateRows"
			title="Grid Template Rows"
			bind:value={$gridTemplateRows}
			options={classes.gridTemplateRows}
		/>
		<Select
			id="gridAutoFlow"
			title="Grid Auto Flow"
			bind:value={$gridAutoFlow}
			options={classes.gridAutoFlow}
		/>
		<Select
			id="gridAutoColumns"
			title="Grid Auto Columns"
			bind:value={$gridAutoColumns}
			options={classes.gridAutoColumns}
		/>
		<Select
			id="gridAutoRows"
			title="Grid Auto Rows"
			bind:value={$gridAutoRows}
			options={classes.gridAutoRows}
		/>
		<Select title="Gap" id="gap" bind:value={$gap} options={classes.gap} />
	</section>
</div>
