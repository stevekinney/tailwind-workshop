<script lang="ts">
	import format from '$utilities/format-href';

	interface $$Props extends HTMLAnchorElement {}

	export let href: string;
</script>

<a {...$$restProps} href={format(href)}>
	<slot />
</a>
