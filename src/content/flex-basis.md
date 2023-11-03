---
title: Flex Basis
---

# Flex Basis

<script lang="ts">
  import { Playground } from '$components';
</script>

## Flex Container in Tailwind CSS

The Flex Container is the parent element in which you want to apply the Flexbox layout. When you define an element as a Flex Container, its children automatically become Flex Items.

**Tailwind Class for Flex Container**: You make an element a Flex Container by adding the `flex` or `inline-flex` class to it.

- `flex`: This creates a block-level Flex Container.
- `inline-flex`: This creates an inline-level Flex Container.

For example, in your HTML, if you have:

```html
<div class="flex">
	<!-- Your content here -->
</div>
```

The `div` with the `flex` class becomes a Flex Container, and its children are the Flex Items.

## Flex Items in Tailwind CSS

Flex Items are the children of a Flex Container. You don't necessarily have to apply any specific Tailwind class to make an element a Flex Item; it automatically becomes a Flex Item when its parent is a Flex Container. However, you often want to control how these items behave within the container, and Tailwind provides utility classes for that.

- **Tailwind Classes for Flex Items**: Tailwind has utility classes for controlling the size (`flex-grow`, `flex-shrink`, `flex-none`), alignment (`self-start`, `self-center`, `self-end`), and order (`order-{number}`) of Flex Items.

<div class="flex gap-px h-20 mb-6">
	<div contenteditable class="font-mono bg-cyan-500 p-1 border-2 border-cyan-800  flex-grow">flex-grow</div>
	<div contenteditable class="font-mono bg-cyan-500 p-1 border-2 border-cyan-800 ">flex-none</div>
	<div contenteditable class="font-mono bg-cyan-500 p-1 border-2 border-cyan-800 self-center">self-center</div>
</div>

For example:

```html
<div class="mb-6 flex h-20 gap-px">
	<div class="flex-grow">flex-grow</div>
	<div class="flex-none">flex-none</div>
	<div class="self-center">self-center</div>
</div>

<div class="flex h-20 gap-px">
	<div class="w-full flex-shrink">flex-shrink</div>
	<div class="w-full flex-none">flex-none</div>
	<div class="w-full self-center">self-center</div>
</div>
```

You can see it [here](http://localhost:5173/playgrounds/flex?boxes=3&height=600&width=w-20&box-2-alignSelf=self-center&box-0-grow=grow&box-1-flex=flex-none).

In this example, the parent `div` is a Flex Container, and the child `div`s are Flex Items. The first item will grow to take up any available space, the second item won't grow, and the third item will be vertically centered within the container.

So, in terms of Tailwind CSS:

- A Flex Container is any element with a `flex` or `inline-flex` class.
- Flex Items are the children of a Flex Container, and you can control their behavior with various utility classes related to flex sizing and alignment.

## Exercise

Consider this navigation bar. Let's say we want to push all of the menu items to the right and have the logo take up as much space as possible. How could we do that?

<Playground id="ufzDOFTF8L" title="Flex Basis Exercise" />

<Playground id="Baa5m35GSk" title="A Possible Solution" solution />
