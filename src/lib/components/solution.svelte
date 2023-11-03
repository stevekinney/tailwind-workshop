<script lang="ts">
	export let solution = false;
	export let title = 'Solution';
</script>

{#if solution}
	<details class="my-4">
		<summary class="mb-4">{title}</summary>
		<slot />
	</details>
{:else}
	<slot />
{/if}
