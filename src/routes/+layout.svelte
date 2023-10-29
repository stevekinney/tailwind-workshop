<script lang="ts">
	import Outline from '$lib/components/outline.svelte';
	import { title } from '$metadata';

	import '../app.css';
</script>

<main class="mx-auto my-10 max-w-4xl px-10 lg:px-0">
	<header class="mb-10">
		<h1 class="font-title text-6xl font-normal">{title}</h1>
	</header>
	<div class="mx-auto flex flex-col-reverse gap-8 md:flex-row">
		<Outline />
		<section id="content">
			<slot />
		</section>
	</div>
</main>
