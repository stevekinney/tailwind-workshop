---
title: Utility-First CSS
---

<script>
  import Playground from '$components/playground.svelte';
</script>

# Utility-First CSS

Utility-first CSS is a methodology for writing CSS that prioritizes the use of utility classes to construct a user interface. Unlike traditional CSS approaches, where you define styles for semantic classes or IDs, utility-first CSS focuses on applying low-level utility classes directly to HTML elements. These utility classes are small, single-purpose classes that do one thing well, such as setting the margin, padding, text alignment, or color.

In Tailwind, that's going to look something like this:

```html
<div class="p-8">
	<button class="rounded border-2 border-blue-600 bg-blue-500 px-4 py-2 font-bold text-white">
		A Very Important Button
	</button>
</div>
```

<Playground id="cNn6Gp5WZS" title="A Simple Button with Utilities" />

We'll get into what all of these little utility classes are in a little bit. You can see an example of our button [here](https://play.tailwindcss.com/cNn6Gp5WZS).

## Further Reading

- [By The Numbers: A Year and Half with Atomic CSS](https://johnpolacek.medium.com/by-the-numbers-a-year-and-half-with-atomic-css-39d75b1263b4)
- [No, Utility Classes Aren't the Same As Inline Styles](https://frontstuff.io/no-utility-classes-arent-the-same-as-inline-styles)

## Advantages of Utility-First CSS

1. **Rapid Prototyping**: It's easier to build and prototype layouts because you can style elements directly in your HTML without switching to a separate CSS file.
2. **Reduced Side Effects**: Utility classes are scoped to individual elements, reducing the likelihood of unintended styling conflicts.
3. **Reusability**: Because utility classes are designed to do one thing well, they are inherently reusable across different parts of an application.
4. **Maintainability**: With utility-first, it's straightforward to predict how adding or removing a class will affect styling. You can often understand the design by looking at the HTML markup.
5. **Easy to Extend**: Utility-first CSS frameworks often provide ways to extend or customize the set of utility classes, making it easier to maintain a consistent design system.

## Common Criticisms

1. **Verbose HTML**: Your HTML files might become cluttered with numerous class names, making them harder to read.
2. **Learning Curve**: It may take some time to become familiar with the utility classes provided by the framework.
3. **Lack of Semantics**: Using utility classes exclusively can make it difficult to capture the semantic meaning of an element, although this can be mitigated by combining utility-first CSS with traditional semantic classes.

## Popular Utility-First Frameworks

1. [**Tailwind CSS**](https://tailwindcss.com/docs/utility-first): One of the most popular utility-first frameworks, it provides a wide range of utilities for everything from layouts to theming.
2. [**Tachyons**](https://tachyons.io/): Another utility-first framework focused on creating fast-loading, highly readable, and highly maintainable code.
3. [**Basscss**:](https://basscss.com/) A lightweight collection of base utility classes that are easy to extend.
