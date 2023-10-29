<script lang="ts">
	import clsx from 'clsx';
	import * as classes from './grid-item-classes';
	import Select from '../select.svelte';

	import { queryParam } from 'sveltekit-search-params';

	export let id: number;

	let columnSpan = queryParam(`box-${id}-columnSpan`);
	let rowSpan = queryParam(`box-${id}-rowSpan`);
	let order = queryParam(`box-${id}-order`);
</script>

<div
	id="box-{id}"
	class={clsx(
		'@container/select',
		'flex items-center justify-center gap-4',
		'relative',
		'select-none rounded-md border-2 border-fuchsia-500 bg-fuchsia-400 shadow-md',
		$columnSpan,
		$rowSpan,
		$order
	)}
>
	<div class="absolute left-0 top-0 p-2 font-bold text-fuchsia-900">{id}</div>
	<div class="@xs:flex-row flex flex-col gap-4">
		<Select
			id="columnSpan"
			title="Column Span"
			bind:value={$columnSpan}
			options={classes.columnSpan}
		/>
		<Select id="rowSpan" title="Row Span" bind:value={$rowSpan} options={classes.rowSpan} />
		<Select id="order" title="Order" bind:value={$order} options={classes.order} />
	</div>
</div>
