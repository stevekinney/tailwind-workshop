<script lang="ts">
	import { title } from '$metadata';

	export let data;
</script>

<svelte:head>
	<title>{data.metadata.title} — {title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.metadata.title} />
</svelte:head>

<svelte:component this={data.content} />
