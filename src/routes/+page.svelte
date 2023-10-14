<script lang="ts">
	import { title } from '$metadata';
</script>

<svelte:head>
	<title>{title}</title>
	<meta property="og:title" content={title} />
</svelte:head>
