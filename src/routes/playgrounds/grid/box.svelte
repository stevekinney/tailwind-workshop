<script lang="ts">
	import clsx from 'clsx';
	import * as classes from './grid-item-classes';
	import Select from '../select.svelte';

	import { queryParam } from 'sveltekit-search-params';
	import { clickoutside } from '$lib/utilities/click-outside';

	export let id: number;

	let open = false;
	const toggle = () => (open = !open);

	let columnSpan = queryParam(`box-${id}-columnSpan`);
	let rowSpan = queryParam(`box-${id}-rowSpan`);
	let order = queryParam(`box-${id}-order`);

	let justifySelf = queryParam(`box-${id}-justifySelf`);
	let alignSelf = queryParam(`box-${id}-alignSelf`);
	let placeSelf = queryParam(`box-${id}-placeSelf`);

	let className: string | null = '';
	export { className as class };
</script>

<div
	id="box-{id}"
	class={clsx('box', $columnSpan, $rowSpan, $order, className)}
	on:contextmenu|preventDefault={toggle}
	role="button"
	tabindex={id}
>
	<div class="box-label">{id}</div>
	{#if open}
		<div class="box-options" use:clickoutside={toggle}>
			<Select
				id="columnSpan"
				title="Column Span"
				bind:value={$columnSpan}
				options={classes.columnSpan}
			/>
			<Select id="rowSpan" title="Row Span" bind:value={$rowSpan} options={classes.rowSpan} />
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
