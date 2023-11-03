<script lang="ts">
	export let id: string;
	export let title = id;
	export let options: string[] = [];
	export let value: string | null = '';
	export let required = false;
</script>

<div class="@[0px]/select:text-xs @xs/select:text-base">
	<label for={id} class="sr-only">{title}</label>
	<select
		name={title}
		class="rounded-md border-2 border-fuchsia-800 bg-fuchsia-50 p-1 shadow-md outline-none focus:border-fuchsia-600 focus:bg-fuchsia-100"
		{id}
		bind:value
		on:change
	>
		{#if !required}
			<option value={null} disabled={!value}>
				{#if !value}{title}{/if}
			</option>
		{/if}
		{#each options as option}
			<option value={option}>{option}</option>
		{/each}
	</select>
</div>

<style lang="postcss">
	select:has(option:checked[value='']) {
		@apply text-fuchsia-500;
	}

	select:has(option:checked:not([value=''])) {
		@apply bg-yellow-200;
	}
</style>
