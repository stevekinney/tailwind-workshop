---
title: Flex Grow and Flex Shrink
---

# Flex Grow and Flex Shrink

In Flexbox layout, `flex-grow` and `flex-shrink` are properties applied to Flex Items to control how they grow and shrink relative to other items inside the Flex Container. Tailwind CSS offers utility classes for these as well.

## Flex Grow (`flex-grow`)

- **What it Does**: When a Flex Item has the `flex-grow` property, it will grow to fill any extra space within the Flex Container, in proportion to its `flex-grow` value compared to other items.
- **How to Use in Tailwind**: The Tailwind class for enabling `flex-grow` is `flex-grow`. Applying this class means that the item will grow to occupy any remaining space inside the Flex Container.
- **When to Use**: Use `flex-grow` when you want a Flex Item to take up all or a portion of any available extra space within a Flex Container.

Example in Tailwind:

```html
<div class="flex">
	<div class="flex-grow">
		<!-- This item will grow to fill available space -->
	</div>
	<div>
		<!-- This item will not grow -->
	</div>
</div>
```

## Flex Shrink (`flex-shrink`)

- **What it Does**: The `flex-shrink` property determines how an item will shrink relative to other items when there isn't enough space in the Flex Container.
- **How to Use in Tailwind**: The Tailwind class for enabling `flex-shrink` is `flex-shrink`. By applying this class, the item will shrink when the container can't accommodate all items at their default size.
- **When to Use**: Use `flex-shrink` when you want a Flex Item to give up some of its space when the Flex Container can't fit all items naturally.

Example in Tailwind:

```html
<div class="flex">
	<div class="flex-shrink">
		<!-- This item will shrink if there isn't enough space -->
	</div>
	<div class="flex-shrink-0">
		<!-- This item will not shrink -->
	</div>
</div>
```

## Trade Offs and Other Things to Consider

- **Flex Grow**: By allowing an item to grow, you may end up with unevenly sized items if not managed correctly. It's also possible to lose control over an item's width.
- **Flex Shrink**: Allowing an item to shrink may make the content inside it unreadable or cause layout issues. You lose a certain amount of control over the item's size when it's allowed to shrink.

## To Summarize

- **Flex Grow**: Enables a Flex Item to grow and fill available space within the Flex Container.
- **Flex Shrink**: Allows a Flex Item to shrink when there isn't enough space in the Flex Container.
