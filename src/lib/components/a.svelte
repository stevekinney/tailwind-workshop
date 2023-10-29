<script lang="ts">
	import { page } from '$app/stores';
	import format from '$utilities/format-href';

	type $$Props = Partial<HTMLAnchorElement> & {
		href: string;
	};

	export let href: string;

	href = format(href);
</script>

<a {...$$restProps} class:active={$page.url.pathname === href} {href}>
	<slot />
</a>

<style lang="postcss">
	.active {
		@apply font-semibold text-black underline decoration-purple-300 hover:text-purple-700 hover:decoration-black;
	}
</style>
