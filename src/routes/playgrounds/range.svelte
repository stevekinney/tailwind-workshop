<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import throttle from 'just-throttle';

	const dispatch = createEventDispatcher();

	type $$Props = Omit<Partial<HTMLInputElement>, 'type' | 'value' | 'id'> & {
		id: string;
		title?: string;
		value: string | number | null;
	};

	const handleChange = throttle(
		(event: Event) => {
			const target = event.target as HTMLInputElement;
			value = target.value;
			dispatch('change', target.value);
		},
		50,
		{ trailing: true }
	);

	export let id: string;
	export let title = id;
	export let value: string | number | null = '';
</script>

<div class="flex items-center gap-2">
	<label for={id} class="block whitespace-nowrap font-semibold">
		<span>{title}</span>
		<span class="text-fuchsia-400 after:text-fuchsia-600">
			{value}
		</span>
	</label>

	<input
		{value}
		type="range"
		{id}
		{...$$restProps}
		on:change={handleChange}
		class="block rounded-md border-2 border-fuchsia-400 bg-fuchsia-200 px-1 px-2 text-fuchsia-950 caret-fuchsia-500 accent-fuchsia-400 shadow-md shadow-none focus:bg-fuchsia-500/20 focus:outline-none"
	/>
</div>
