<script lang="ts">
	import { page } from '$app/stores';
	import { twMerge as tw } from 'tailwind-merge';

	export let content: Contents | Content;
	export let as: 'li' | 'p' = 'p';

	let className = '';

	$: contents = Array.isArray(content) ? content : [content];

	export { className as class };
</script>

<nav class={tw(className)}>
	{#each contents as content}
		{#if content.contents}
			<div class="mb-8 break-inside-avoid-column">
				<h2 class="mb-1 font-semibold">{content.title}</h2>
				<ul>
					{#each content.contents as subcontent}
						<svelte:self content={subcontent} as="li" />
					{/each}
				</ul>
			</div>
		{:else}
			<svelte:element this={as}>
				<a href={content.slug} class:active={$page.params.slug === content.slug.slice(1)}>
					{content.title}
				</a>
			</svelte:element>
		{/if}
	{/each}
</nav>

<style>
	.active {
		font-weight: 600;
	}
</style>
