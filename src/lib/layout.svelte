<script context="module" lang="ts">
	import { title as siteTitle } from '$metadata';

	import a from './components/a.svelte';

	export { a };
</script>

<script>
	export let title = 'Untitled';
</script>

<svelte:head>
	<title>{title} - {siteTitle}</title>
	<meta property="og:title" content={title} />
	<meta property="og:type" content="article" />
</svelte:head>

<article class="prose">
	<slot />
</article>
