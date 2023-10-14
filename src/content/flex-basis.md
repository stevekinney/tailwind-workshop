---
title: Flex Basis
---

# Flex Basis

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

For example:

```html
<div class="flex">
	<div class="flex-grow">Item 1 - I will grow</div>
	<div class="flex-none">Item 2 - I won't grow</div>
	<div class="self-center">Item 3 - I am vertically centered</div>
</div>
```

In this example, the parent `div` is a Flex Container, and the child `div`s are Flex Items. The first item will grow to take up any available space, the second item won't grow, and the third item will be vertically centered within the container.

So in terms of Tailwind CSS:

- A Flex Container is any element with a `flex` or `inline-flex` class.
- Flex Items are the children of a Flex Container, and you can control their behavior with various utility classes related to flex sizing and alignment.
