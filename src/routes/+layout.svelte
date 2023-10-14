<script lang="ts">
	import { title } from '$metadata';
	import Outline from '$lib/components/contents.svelte';

	export let data: { contents: Contents };

	import '../app.css';
</script>

<main class="mx-auto my-10 max-w-4xl px-10 lg:px-0">
	<header class="mb-10">
		<h1 class="font-title text-6xl">{title}</h1>
	</header>
	<div class="mx-auto flex flex-col-reverse gap-8 md:flex-row">
		<Outline class="w-full columns-2 md:w-60 md:columns-1" content={data.contents} />
		<section id="content">
			<slot />
		</section>
	</div>
</main>
