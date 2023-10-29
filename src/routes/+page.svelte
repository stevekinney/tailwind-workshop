<script lang="ts">
	import Outline from '$lib/components/outline.svelte';
	import { title } from '$metadata';
</script>

<svelte:head>
	<title>{title}</title>
	<meta property="og:title" content={title} />
</svelte:head>

<Outline />
