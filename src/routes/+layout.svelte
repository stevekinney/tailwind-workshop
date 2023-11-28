<script lang="ts">
	import { title } from '$metadata';
	import { page } from '$app/stores';

	import '../app.css';
</script>

<main class="mx-auto my-10 max-w-4xl px-10 lg:px-0">
	<header class="mb-10">
		<a href="/" class="text-black hover:bg-purple-500 hover:text-black hover:no-underline">
			<h1 class="font-title text-6xl font-normal">{title}</h1>
		</a>
		<nav
			class="mb-6 flex justify-end gap-8 rounded-md border-2 border-slate-200 bg-slate-100 px-4 py-2 shadow-md"
		>
			<a
				href="https://frontendmasters.com/courses/tailwind-css/"
				target="_blank"
				class="block flex-grow rounded-md border-2 border-slate-300 px-2 py-1 text-center font-bold text-black decoration-blue-400 underline-offset-4 shadow-sm transition-all hover:-translate-y-px hover:bg-slate-200 hover:text-black hover:no-underline hover:decoration-blue-500 hover:decoration-4 hover:shadow-md active:text-blue-900"
				>Watch this course on Frontend Masters</a
			>
			<a
				href="/introduction"
				class="rounded-md px-2 py-1 underline decoration-blue-400 underline-offset-4 transition-colors hover:decoration-blue-500 hover:decoration-4 active:text-blue-300"
				class:font-bold={!$page.url.pathname.includes('/playgrounds')}
			>
				Content
			</a>
			<a
				href="/playgrounds/flex?boxes=3&height=600&width=w-20"
				class="rounded-md px-2 py-1 underline decoration-blue-400 underline-offset-4 transition-colors hover:decoration-blue-500 hover:decoration-4 active:text-blue-300"
				class:font-bold={$page.url.pathname.includes('/playgrounds/flex')}
			>
				Flex Playground
			</a>
			<a
				href="/playgrounds/grid?boxes=9&height=600&width=w-20"
				class="rounded-md px-2 py-1 underline decoration-blue-400 underline-offset-4 transition-colors hover:decoration-blue-500 hover:decoration-4 active:text-blue-300"
				class:font-bold={$page.url.pathname.includes('/playgrounds/grid')}
			>
				Grid Playground
			</a>
		</nav>
	</header>
	<slot />
</main>
