---
title: Colors
---

# Colors

<script>
  import { Playground, Example } from '$lib/components';
</script>

Tailwind comes with [a decent set of colors](https://tailwindcss.com/docs/customizing-colors) out of the box. But, you—like everything else—tweak your color pallet to your heart's content.

## Follow-Along

Let's head over to [uicolors.app](https://uicolors.app/create) and create some new colors. Your special new color might look something like this.

```json
{
	"mandy": {
		"50": "#fef2f3",
		"100": "#fde6e7",
		"200": "#fbd0d5",
		"300": "#f7aab2",
		"400": "#f27a8a",
		"500": "#ea546c",
		"600": "#d5294d",
		"700": "#b31d3f",
		"800": "#961b3c",
		"900": "#811a39",
		"950": "#48091a"
	}
}
```

We can extend our theme to look something like this.

```js
/** @type {import('tailwindcss').Config} */
export default {
	theme: {
		extend: {
			colors: {
				mandy: {
					50: '#fef2f3',
					100: '#fde6e7',
					200: '#fbd0d5',
					300: '#f7aab2',
					400: '#f27a8a',
					500: '#ea546c',
					600: '#d5294d',
					700: '#b31d3f',
					800: '#961b3c',
					900: '#811a39',
					950: '#48091a'
				}
			}
		}
	},
	plugins: []
};
```

## Completed Example

<Playground id="4mZ0SK9peM" title="A Button with a Custom Color" />

## Arbitrary Colors

Let's say we have a color that we only use once in our entire application. And, let's say we're _very_ lazy and we don't want to have to add it to our theme. (Or, more likely, we don't _want_ to). In those cases, we can interpolate the value in and Tailwind will figure it out for us on our behalf.

<Example>
  <button class="bg-[#FFFF00] text-black px-4 py-2 shadow-md">
	  Button
  </button>
</Example>

## Appendix

Here is that basic button from earlier if you need some markup.

```html
<button class="rounded border-2 border-blue-700 bg-blue-500 px-4 py-2 text-white shadow-md">
	Button
</button>
```
