<script lang="ts">
	import Link from './a.svelte';

	export let href: `/${ContentFile}`;
</script>

<li>
	<Link {href}><slot /></Link>
</li>
