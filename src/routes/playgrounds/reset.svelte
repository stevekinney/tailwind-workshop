<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	export let params: `?${string}` | undefined;
</script>

<button
	class="font-semibold underline decoration-fuchsia-400 decoration-4 underline-offset-4 hover:text-fuchsia-700"
	on:click={() => goto($page.url.pathname + params || '', { replaceState: true })}
>
	Reset
</button>
