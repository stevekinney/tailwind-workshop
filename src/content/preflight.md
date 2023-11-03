---
title: Preflight and Base Styles
---

# Preflight and Base Styles

<script lang="ts">
  import { Playground } from '$lib/components';
</script>

Preflight is where you set up your base styles in Tailwind. It's build on top of [modern-normalize](https://github.com/sindresorhus/modern-normalize), which is pretty aggressive. But, you can customize it as much as you want.

```css
@tailwind base; /* This is where the preflight styles are loaded. */
@tailwind components;
@tailwind utilities;
```

As you can see, Tailwind's base styles are pretty aggressive. Consider this markup:

```html
<div>
	<button>I am a button.</button>
	<input placeholder="Input placeholder." />
</div>
```

<Playground id="cgJYCp8LoL" title="Tailwind's Base Styling for a Button and an Input" />

## Extending Tailwind's Base Styles

Extending, changing, or modifying Tailwind's base styles is pretty straight-forward. You can reopen the CSS layer and add whatever styles you want.

```css
@tailwind base;

@layer base {
	pre {
		background-color: #f0f0f0;
	}
}

@tailwind components;
@tailwind utilities;
```

## Disabling Tailwind's Base Styles

Preflight is technically a core plugin. If you want to disable Tailwind's preflight completely, you can do that in it's configuration.

```ts
export default {
	corePlugins: {
		preflight: false
	}
};
```

## What comes with Tailwind's base styles?

### Global Settings

1. **Box Sizing**: Sets the `box-sizing` property to `border-box` for all elements and their before/after pseudo-elements. This makes it easier to manage layouts as the padding and border are included in the element's total width and height.
2. **Border Reset**: Resets the `border-width`, `border-style`, and `border-color` for all elements to ensure consistent styling.

### HTML and Body

1. **HTML Styling**: Sets various global styles at the HTML level, including line height, font size adjustments, tab size, and font family.
2. **Body Styling**: Resets the body margin to 0 and inherits the line-height from the HTML element.

### Typography

1. **Heading Reset**: Resets the font size and weight for headings (`h1` to `h6`).
2. **Link Reset**: Makes the links inherit their parent's color and removes default text decoration.
3. **Strong and Bold**: Ensures that `b` and `strong` elements render as bolder.
4. **Code Styling**: Sets a monospace font for code blocks and related elements.
5. **Small Text**: Sets a smaller font size for the `small` element.

### Form Elements

1. **Form Control Styling**: Standardizes the appearance and removes browser-specific padding and margins for form elements like `button`, `input`, `select`, etc.

### Misc Elements

1. **Horizontal Rule (hr)**: Sets specific styles for `<hr>` elements.
2. **Abbreviations**: Styles for abbreviation tags with a title attribute.
3. **Subscript and Superscript**: Styles for `sub` and `sup` tags to ensure they don't affect line height.

### Table Styles

1. **Table Defaults**: Standardizes table styling to remove gaps between borders and correct border color inheritance.

### Focus Styles

1. **Focus Ring for Firefox**: Adjusts the focus style in Firefox to use an auto-outline.
2. **Invalid UI for Firefox**: Removes the box-shadow on invalid elements in Firefox.

### Replaced Elements

1. **Replaced Elements (img, svg, etc.)**: Sets these elements to `display: block` and vertically aligns them in the middle. It also ensures they scale properly and maintain aspect ratios.

### Placeholder Styling

1. **Placeholder Text**: Sets a specific opacity and color for placeholder text in input and textarea elements.

### Cursor Settings

1. **Cursor for Buttons**: Makes sure that buttons and role-based buttons have a pointer cursor.

### Hidden Attribute

1. **Hidden Elements**: Sets elements with the `[hidden]` attribute to `display: none`.
