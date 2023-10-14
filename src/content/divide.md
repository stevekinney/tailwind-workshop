---
title: Divide
---

# Divide

In Tailwind CSS, the `divide` utility is used to add borders between child elements within a container. This is particularly useful when you want to create separators between a series of items without manually adding border classes to each item. The `divide` utility helps you manage this in a more DRY (Don't Repeat Yourself) manner.

## Basic Usage

If you have a container with several child elements and you want to add horizontal borders between them, you can add `divide-y` to the parent container like this:

```html
<div class="divide-y">
	<div>Item 1</div>
	<div>Item 2</div>
	<div>Item 3</div>
</div>
```

## Customization

You can also customize the thickness and color of the dividing borders. For example, using `divide-y-2` will make the dividing line thicker, and using `divide-red-500` will color it red:

```html
<div class="divide-y-2 divide-red-500">
	<div>Item 1</div>
	<div>Item 2</div>
	<div>Item 3</div>
</div>
```

## Vertical Dividers

If you're working with inline or inline-block elements, or elements laid out using flexbox or CSS grid, you can use `divide-x` to add vertical dividers between them:

```html
<div class="flex divide-x">
	<div>Item 1</div>
	<div>Item 2</div>
	<div>Item 3</div>
</div>
```

## Reverting

If you want to remove the divider for specific child elements, you can use the `divide-y-0` or `divide-x-0` classes:

```html
<div class="divide-y">
	<div>Item 1</div>
	<div class="divide-y-0">Item 2</div>
	<div>Item 3</div>
</div>
```

In this example, there will be no divider between Item 2 and Item 3.

The `divide` utilities in Tailwind are a powerful way to manage element separations in a clean and maintainable way.
