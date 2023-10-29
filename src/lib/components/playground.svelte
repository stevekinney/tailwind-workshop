<script lang="ts">
	export let id: string;
	export let title: string;
	export let height: number | string = 300;
</script>

<div class="rounded-md border-2 border-slate-300 bg-slate-200 p-4">
	<h3 class="mt-0">{title}</h3>
	<iframe
		class="w-full rounded-md border-2 border-slate-300 shadow-md"
		src="https://play.tailwindcss.com/{id}?layout=preview"
		{title}
		{height}
	/>
</div>
