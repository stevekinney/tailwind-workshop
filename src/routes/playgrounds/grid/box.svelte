<script lang="ts">
	import clsx from 'clsx';
	import * as classes from './grid-item-classes';
	import Select from '../select.svelte';

	import { queryParam } from 'sveltekit-search-params';

	export let id: number;

	let open = false;
	const toggle = () => (open = !open);

	let columnSpan = queryParam(`box-${id}-columnSpan`);
	let rowSpan = queryParam(`box-${id}-rowSpan`);
	let order = queryParam(`box-${id}-order`);
</script>

<div
	id="box-{id}"
	class={clsx(
		'@container/select',
		'gap-4',
		'relative',
		'min-h-48 w-48',
		'rounded-md border-2 border-fuchsia-500 bg-fuchsia-400 shadow-md',
		$columnSpan,
		$rowSpan,
		$order
	)}
	on:contextmenu|preventDefault={toggle}
	role="button"
	tabindex={id}
>
	<div class="p-2 text-center font-bold text-fuchsia-900" contenteditable>{id}</div>
	{#if open}
		<div class="flex min-w-fit flex-col gap-4 @xs:flex-row">
			<Select
				id="columnSpan"
				title="Column Span"
				bind:value={$columnSpan}
				options={classes.columnSpan}
			/>
			<Select id="rowSpan" title="Row Span" bind:value={$rowSpan} options={classes.rowSpan} />
			<Select id="order" title="Order" bind:value={$order} options={classes.order} />
		</div>
	{/if}
</div>
