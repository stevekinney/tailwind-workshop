<script lang="ts">
	import Section from './outline-section.svelte';
	import Link from './outline-link.svelte';
</script>

<nav class="flex flex-col gap-8">
	<Section title="Getting Started">
		<Link href="/introduction">Course Introduction</Link>
		<Link href="/what-is-tailwind">What is Tailwind?</Link>
		<Link href="/utility-first">Utility-First CSS</Link>
		<Link href="/tailwind-layers">Tailwind Layers</Link>
		<Link href="/preflight">Preflight and Base Styles</Link>
		<Link href="/using-apply">Using @apply</Link>
	</Section>
	<Section title="Basic Styling">
		<Link href="/styling-a-button">Styling a Button</Link>
		<Link href="/sizing-and-spacing">Sizing and Spacing</Link>
		<Link href="/text-sizing">Text Sizing</Link>
		<Link href="/colors">Customizing Colors</Link>
		<Link href="/styling-an-alert">Styling an Alert</Link>
		<Link href="/space">Adding Spacing</Link>
		<Link href="/divide">Adding Dividers</Link>
	</Section>
	<Section title="Variants">
		<Link href="/variants">Styling Psuedo-Classes</Link>
		<Link href="/form-state">Styling Form State</Link>
		<Link href="/group-modifier">Group Modifiers</Link>
		<Link href="/peer-modifier">Peer Modifiers</Link>
	</Section>
	<Section title="Plugins">
		<Link href="/why-plugins">Why Plugins?</Link>
	</Section>
	<Section title="Flex">
		<Link href="/flex">Flex</Link>
	</Section>
	<Section title="Grid">
		<Link href="/grid">Grid</Link>
	</Section>
	<Section title="Appendix">
		<Link href="/performance">Performance</Link>
	</Section>
</nav>
