<script lang="ts">
	import clsx from 'clsx';
	import { queryParam } from 'sveltekit-search-params';

	import * as classes from './grid-classes';

	import Box from './box.svelte';
	import Select from '../select.svelte';
	import Range from '../range.svelte';
	import Reset from '../reset.svelte';

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
	let justifyContent = queryParam('justifyContent');
	let alignContent = queryParam('alignContent');
	let placeContent = queryParam('placeContent');
	let justifyItems = queryParam('justifyItems');
	let alignItems = queryParam('alignItems');
	let placeItems = queryParam('placeItems');

	let width = queryParam('width', {
		encode: (value: (typeof classes)['width'][number]) => value,
		decode: (value: string | null) => value as (typeof classes)['width'][number],
		defaultValue: 'w-20'
	});
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
		<Select title="Box Width" id="boxWidth" bind:value={$width} options={classes.width} />
		<Reset params="?boxes=9&height=600&width=w-20" />
	</div>

	<div
		class={clsx(
			'@container',
			'grid rounded-md border-2 border-teal-300 bg-teal-100 p-2 shadow-md',
			$gridTemplateColumns,
			$gridTemplateRows,
			$gridAutoFlow,
			$gridAutoColumns,
			$gridAutoRows,
			$justifyContent,
			$alignContent,
			$placeContent,
			$justifyItems,
			$alignItems,
			$placeItems,
			$gap
		)}
		style="height: {$containerHeight}px"
	>
		{#each Array($boxes) as _, id}
			<Box class={$width} {id} />
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
		<Select
			title="Justify Content"
			id="justifyContent"
			bind:value={$justifyContent}
			options={classes.justifyContent}
		/>
		<Select
			title="Align Content"
			id="alignContent"
			bind:value={$alignContent}
			options={classes.alignContent}
		/>
		<Select
			title="Place Content"
			id="placeContent"
			bind:value={$placeContent}
			options={classes.placeContent}
		/>
		<Select
			title="Justify Items"
			id="justifyItems"
			bind:value={$justifyItems}
			options={classes.justifyItems}
		/>
		<Select
			title="Align Items"
			id="alignItems"
			bind:value={$alignItems}
			options={classes.alignItems}
		/>
		<Select
			title="Place Items"
			id="placeItems"
			bind:value={$placeItems}
			options={classes.placeItems}
		/>
	</section>
</div>
