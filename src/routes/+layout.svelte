<script lang="ts">
	import Outline from '$lib/components/contents.svelte';

	export let data: { contents: Contents };

	import '../app.css';
</script>

<main class="flex gap-8">
	<Outline content={data.contents} />
	<section id="content">
		<slot />
	</section>
</main>
