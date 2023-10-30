---
title: Object Fit
---

# Object Fit

`object-fit` is a CSS property that specifies how an `<img>` or `<video>` should be resized to fit its container. It's particularly useful when you want to maintain the aspect ratio of these elements while ensuring that they fill their container in a visually pleasing way. Here's how Tailwind CSS incorporates this property:

## Basic Usage

You can use the `object-fit` utility classes in Tailwind to quickly set this property:

- `object-contain`: The image or video maintains its aspect ratio but is resized to fit within the container. The remaining space will be empty.
- `object-cover`: The image or video will completely cover the container while maintaining its aspect ratio. Some parts may be clipped if the aspect ratios of the container and content differ.
- `object-fill`: Fills the entire container, ignoring the aspect ratio. This can lead to stretching.
- `object-none`: The image or video is not resized at all.
- `object-scale-down`: The image or video is scaled down to fit the container, similar to `object-contain`, but it won't increase in size if it's smaller than the container.

## Examples

Using Tailwind, you can set these properties like so:

- **Contain**: `<img src="image.jpg" class="object-contain">`
- **Cover**: `<img src="image.jpg" class="object-cover">`
- **Fill**: `<img src="image.jpg" class="object-fill">`
- **None**: `<img src="image.jpg" class="object-none">`
- **Scale-Down**: `<img src="image.jpg" class="object-scale-down">`

## Additional Controls

You can also control the position of the object within the container using `object-position` utilities:

- `object-bottom`, `object-center`, `object-left`, `object-left-bottom`, etc.

## When to Use

- Use `object-cover` when you want to fill a container without stretching the image, and you don't mind some clipping.
- Use `object-contain` when you want to see the entire image or video, and you don't mind some empty space in the container.
- Use `object-fill` cautiously, as it can distort the content.
- Use `object-none` if you want the image to ignore the size of the container.
- Use `object-scale-down` if you want the image to fit within the container but not scale up if it's smaller.
