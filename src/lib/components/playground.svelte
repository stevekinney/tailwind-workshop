<script lang="ts">
	import Solution from './solution.svelte';

	export let id: string;
	export let title: string;
	export let height: number | string = 300;
	export let solution = false;
</script>

<Solution {solution} {title}>
	<div class="not-prose mb-8 space-y-4 rounded-md border-2 border-slate-300 bg-slate-200 p-4">
		<h3 class="mt-0">{title}</h3>
		<iframe
			class="w-full rounded-md border-2 border-slate-300 shadow-md"
			src="https://play.tailwindcss.com/{id}?layout=preview"
			{title}
			{height}
		/>
		<div class="flex justify-end">
			<a
				href="https://play.tailwindcss.com/{id}?layout=preview"
				target="_blank"
				class="block w-fit rounded-md border-2 border-slate-600 px-2 no-underline after:ml-2 after:content-['↗️'] hover:bg-slate-300 hover:no-underline"
				>Open</a
			>
		</div>
	</div>
</Solution>
