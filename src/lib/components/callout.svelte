<script lang="ts">
	export let title: string;
</script>

<callout class="not-prose my-6 block rounded-md border-2 border-blue-200 bg-blue-100 p-4">
	<cot class="mb-2 mt-0 font-semibold">
		{title}
	</cot>
	<p class="prose">
		<slot />
	</p>
</callout>
