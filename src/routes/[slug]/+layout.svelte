<script lang="ts">
	import Outline from '$lib/components/outline.svelte';
</script>

<div class="mx-auto flex flex-col-reverse gap-8 md:flex-row">
	<Outline />
	<section id="content">
		<slot />
	</section>
</div>
