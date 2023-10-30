<script lang="ts">
	import clsx from 'clsx';
	import * as classes from './flex-item-classes';
	import Select from '../select.svelte';

	import { queryParam } from 'sveltekit-search-params';

	export let id: number;

	let open = false;
	const toggle = () => (open = !open);

	let flex = queryParam(`box-${id}-flex`);
	let flexBasis = queryParam(`box-${id}-flexBasis`);
	let grow = queryParam(`box-${id}-grow`);
	let shrink = queryParam(`box-${id}-shrink`);
	let order = queryParam(`box-${id}-order`);
	let justifySelf = queryParam(`box-${id}-justifySelf`);
	let alignSelf = queryParam(`box-${id}-alignSelf`);
	let placeSelf = queryParam(`box-${id}-placeSelf`);
</script>

<div
	id="box-{id}"
	class={clsx(
		'@container/select',
		'flex items-center justify-center gap-4',
		'relative',
		'min-h-48 w-48',
		'p-2',
		'rounded-md border-2 border-fuchsia-500 bg-fuchsia-400 shadow-md',
		$flex,
		$flexBasis,
		$grow,
		$shrink,
		$order,
		$justifySelf,
		$alignSelf,
		$placeSelf
	)}
	on:contextmenu|preventDefault={toggle}
	role="button"
	tabindex={id}
>
	<div class="text-center font-bold text-fuchsia-900" contenteditable>{id}</div>
	{#if open}
		<div class="flex min-w-fit flex-col gap-4 @xs:flex-row">
			<Select id="flexBasis" title="Basis" bind:value={$flexBasis} options={classes.flexBasis} />
			<Select id="flex" title="Flex" bind:value={$flex} options={classes.flex} />
			<Select id="grow" title="Grow" bind:value={$grow} options={classes.grow} />
			<Select id="shrink" title="Shrink" bind:value={$shrink} options={classes.shrink} />
			<Select id="order" title="Order" bind:value={$order} options={classes.order} />
			<Select
				id="justifySelf"
				title="Justify Self"
				bind:value={$justifySelf}
				options={classes.justifySelf}
			/>
			<Select
				id="alignSelf"
				title="Align Self"
				bind:value={$alignSelf}
				options={classes.alignSelf}
			/>
			<Select
				id="placeSelf"
				title="Place Self"
				bind:value={$placeSelf}
				options={classes.placeSelf}
			/>
		</div>
	{/if}
</div>
