<script lang="ts">
	import { title } from '$metadata';

	import '../app.css';
</script>

<main class="mx-auto my-10 max-w-4xl px-10 lg:px-0">
	<header class="mb-10">
		<a href="/" class="text-black hover:bg-purple-500 hover:text-black hover:no-underline">
			<h1 class="font-title text-6xl font-normal">{title}</h1>
		</a>
	</header>
	<slot />
</main>
