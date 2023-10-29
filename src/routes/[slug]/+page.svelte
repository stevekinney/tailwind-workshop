<script lang="ts">
	import { dev } from '$app/environment';
	import { title } from '$metadata';

	export let data;
</script>

<svelte:head>
	<title>{data.metadata.title} — {title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.metadata.title} />
</svelte:head>

{#if dev}
	<a
		class="mb-6 block rounded-md border-2 border-yellow-500 bg-yellow-300 px-4 py-2 shadow-md transition-colors hover:bg-yellow-400 hover:no-underline"
		href="vscode://file{data.filePath}"
	>
		✍️ Open in <span class="font-semibold underline">Visual Studio Code</span>
		<span class="font-semibold text-black">&rarr;</span>
	</a>
{/if}

<svelte:component this={data.content} />
