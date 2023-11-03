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
		<Link href="/form-improvements">Further Form Improvements</Link>
		<Link href="/peer-modifier">Peer Modifiers</Link>
		<Link href="/group-modifier">Group Modifiers</Link>
		<Link href="/before-and-after">Before and After</Link>
		<Link href="/dark-mode">Dark Mode</Link>
		<Link href="/responsive-breakpoints">Responsive Breakpoints</Link>
	</Section>
	<Section title="Layout">
		<Link href="/columns">Columns</Link>
		<Link href="/flex">Flex Box</Link>
		<Link href="/grid">Grid</Link>
		<Link href="/flex-direction">Flex Direction</Link>
		<Link href="/flex-basis">Flex Basis, Grow, Shrink</Link>
		<Link href="/flex-ordering">Ordering</Link>
		<Link href="/justify-content">Justify Content</Link>
		<Link href="/align-content">Align Content</Link>
		<Link href="/place-content">Place Content</Link>
		<Link href="/justify-items">Justify Items</Link>
		<Link href="/align-items">Align Items</Link>
		<Link href="/place-items">Place Items</Link>
		<Link href="/grid-area-templates">Grid Area Templates</Link>
		<Link href="/grid-auto-flow">Grid Auto Flow</Link>
	</Section>
	<Section title="Plugins">
		<Link href="/why-plugins">Why Plugins?</Link>
		<Link href="/plugins-for-styles">Plugins for Styles</Link>
		<Link href="/plugins-for-variants">Plugins for Variants</Link>
	</Section>
	<Section title="Useful Tricks">
		<Link href="/screen-readers">Screen Readers</Link>
		<Link href="/user-select">User Select</Link>
		<Link href="/shadows">Shadows</Link>
		<Link href="/aspect-ratio">Aspect Ratio</Link>
	</Section>
	<Section title="Appendix">
		<Link href="/animations">Animations</Link>
		<Link href="/performance">Performance</Link>
		<Link href="/object-fit">Object Fit</Link>
		<Link href="/object-position">Object Position</Link>
		<Link href="/positioning">Positioning</Link>
		<Link href="/text-sizing">Text Sizing</Link>
		<Link href="/z-index">Z-Index</Link>
		<Link href="/z-index-isolation">Z-Index Isolation</Link>
		<Link href="/scroll-behavior">Scroll Behavior</Link>
		<Link href="/nested-flexbox">Nested Flexbox</Link>
		<Link href="/nested-flexbox-versus-grid">Nested Flexbox vs Grid</Link>
	</Section>
</nav>
