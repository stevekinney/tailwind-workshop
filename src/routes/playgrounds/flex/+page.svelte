<script lang="ts">
	import clsx from 'clsx';
	import { queryParam } from 'sveltekit-search-params';

	import * as classes from './flex-classes';

	import Box from './box.svelte';
	import Select from '../select.svelte';
	import Range from '../range.svelte';
	import Reset from '../reset.svelte';

	import { title } from '$lib/metadata';

	let boxes = queryParam('boxes', {
		encode: (value: number) => value.toString(),
		decode: (value: string | null) => (value ? parseInt(value) : null),
		defaultValue: 3
	});

	let containerHeight = queryParam('height', {
		encode: (value: number) => value.toString(),
		decode: (value: string | null) => (value ? parseInt(value) : null),
		defaultValue: 400
	});

	let flexDirection = queryParam('flexDirection');
	let flexWrap = queryParam('flexWrap');
	let justifyContent = queryParam('justifyContent');
	let alignContent = queryParam('alignContent');
	let placeContent = queryParam('placeContent');
	let justifyItems = queryParam('justifyItems');
	let alignItems = queryParam('alignItems');
	let placeItems = queryParam('placeItems');
	let gap = queryParam('gap');
	let width = queryParam('width');
</script>

<svelte:head>
	<title>Flex Playground - {title}</title>
</svelte:head>

<div class="space-y-6">
	<div class="flex items-center justify-between gap-8">
		<Range id="boxes" title="Boxes" bind:value={$boxes} min="1" max="10" />
		<Range
			id="height"
			title="Container Height"
			bind:value={$containerHeight}
			min="300"
			max="2000"
			step="50"
		/>
		<Select title="Box Width" id="boxWidth" bind:value={$width} options={classes.width} />
		<Reset params="?boxes=3&height=400&width=w-20" />
	</div>

	<div
		class={clsx(
			'@container',
			'flex rounded-md border-2 border-teal-300 bg-teal-100 p-2 shadow-md',
			$flexDirection,
			$flexWrap,
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
			title="Flex Direction"
			id="flexDirection"
			bind:value={$flexDirection}
			options={classes.flexDirection}
		/>
		<Select title="Flex Wrap" id="flexWrap" bind:value={$flexWrap} options={classes.flexWrap} />
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
