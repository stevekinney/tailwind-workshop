<script lang="ts">
	import { page } from '$app/stores';

	export let content: Contents | Content;
	export let as: 'li' | 'p' = 'p';

	$: contents = Array.isArray(content) ? content : [content];
</script>

<nav class="flex flex-col gap-8">
	{#each contents as content}
		{#if content.contents}
			<div>
				<h2 class="font-semibold mb-1">{content.title}</h2>
				<ul>
					{#each content.contents as subcontent}
						<svelte:self content={subcontent} as="li" />
					{/each}
				</ul>
			</div>
		{:else}
			<svelte:element this={as}>
				<a href={content.slug} class:active={$page.params.slug === content.slug.slice(1)}
					>{content.title}</a
				>
			</svelte:element>
		{/if}
	{/each}
</nav>

<style>
	.active {
		font-weight: 600;
	}
</style>
