<script lang="ts">
	import { page } from '$app/stores';
</script>

<nav
	class="mb-6 flex gap-8 rounded-md border-2 border-blue-300 bg-blue-100 px-4 py-2 text-blue-700 shadow-md"
>
	<a
		href="/playgrounds/flex?boxes=3&height=600"
		class="rounded-md px-2 py-1 font-semibold underline decoration-blue-400 decoration-4 underline-offset-4 transition-colors hover:decoration-blue-500 active:text-blue-300"
		class:decoration-blue-800={$page.url.pathname === '/playgrounds/flex'}
	>
		Flex Playground
	</a>
	<a
		href="/playgrounds/grid?boxes=9&height=600"
		class="rounded-md px-2 py-1 font-semibold underline decoration-blue-400 decoration-4 underline-offset-4 transition-colors hover:decoration-blue-500 active:text-blue-300"
		class:decoration-blue-800={$page.url.pathname === '/playgrounds/grid'}
	>
		Grid Playground
	</a>
</nav>

<slot />
