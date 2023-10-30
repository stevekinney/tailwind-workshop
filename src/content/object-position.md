---
title: Object Position
---

# Object Position

`object-position` is a CSS property that works in conjunction with `object-fit` to specify the alignment of an `<img>` or `<video>` within its container. In other words, it determines how the resized image or video (based on `object-fit`) should be positioned inside the container.

## Basic Usage in Tailwind CSS

You can use various `object-position` utility classes to quickly adjust the positioning of the object (image or video):

- `object-bottom`: Aligns the bottom of the object with the bottom of the container.
- `object-center`: Centers the object within the container.
- `object-left`: Aligns the left side of the object with the left side of the container.
- `object-left-bottom`: Aligns the bottom left corner of the object with the bottom left corner of the container.
- `object-left-top`: Aligns the top left corner of the object with the top left corner of the container.
- `object-right`: Aligns the right side of the object with the right side of the container.
- `object-right-bottom`: Aligns the bottom right corner of the object with the bottom right corner of the container.
- `object-right-top`: Aligns the top right corner of the object with the top right corner of the container.
- `object-top`: Aligns the top of the object with the top of the container.

## Examples

In a Tailwind project, you can set these properties like so:

- **Bottom**: `<img src="image.jpg" class="object-bottom">`
- **Center**: `<img src="image.jpg" class="object-center">`
- **Left Top**: `<img src="image.jpg" class="object-left-top">`

## When to Use

- Use `object-center` if you want the object to be centered after applying `object-fit`.
- Use corner positions like `object-left-bottom` when you want the object to align with a specific corner of the container.
- Use `object-top` or `object-bottom` to vertically align the object.

## Combinations

These `object-position` utilities are most effective when used in conjunction with `object-fit` utilities. For example:

```html
<img src="image.jpg" class="object-cover object-center" />
```

Here, `object-cover` ensures that the image covers the entire container while maintaining its aspect ratio. `object-center` then centers the image within that space.
