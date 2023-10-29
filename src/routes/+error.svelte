<script lang="ts">
	import { page } from '$app/stores';
	import { title } from '$metadata';
</script>

<svelte:head>
	<title>{$page.status} — {title}</title>
	<meta property="og:title" content="{$page.status} — {title}" />
</svelte:head>

<h1 class="font-bold">{$page.status}</h1>

{#if $page.status === 404}
	<p>Sorry, we couldn't find <code>{$page.url.pathname}</code>.</p>
{/if}

<footer class="mt-6">
	<p><a href="/"><span class="font-semibold text-black">&larr;</span> Home</a></p>
</footer>
