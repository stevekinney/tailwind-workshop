<script lang="ts">
	export let id: string;
	export let title = id;
	export let options: string[] = [];
	export let value: string | null = '';
</script>

<div class="@xs/select:text-base @[0px]/select:text-xs">
	<label for={id} class="sr-only">{title}</label>
	<select
		name={title}
		class="relative w-full rounded-md border-2 border-fuchsia-800 bg-fuchsia-50 p-1 shadow-md outline-none focus:border-fuchsia-600 focus:bg-fuchsia-100"
		{id}
		bind:value
		on:change
	>
		<option value={null} disabled={!value}>
			{#if !value}{title}{/if}
		</option>
		{#each options as option}
			<option value={option}>{option}</option>
		{/each}
	</select>
</div>
