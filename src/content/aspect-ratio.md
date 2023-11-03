---
title: Image Aspect Ratio and Cropping with Tailwind CSS
---

# Image Aspect Ratio and Cropping with Tailwind CSS

<script>
  import { Example } from '$components';
</script>

Need to shape an image into a square or circle on your webpage? You don't need to crop your images manually. Tailwind CSS offers utility classes that allow you to fit images into specific aspect ratios while maintaining their original proportions.

<Example>
	<img src="https://placekitten.com/400/600" class="aspect-square object-cover w-40" />
</Example>

<Example>
	<img src="https://placekitten.com/800/400" class="aspect-square rounded-full object-cover w-40" />
</Example>

## Square and Circular Images

For a square image, you can use the following:

```html
<img src="your-image-source" class="aspect-square object-cover" />
```

If you want a circular image, simply add the `rounded-full` class:

```html
<img src="your-image-source" class="aspect-square rounded-full object-cover" />
```

**Note**: Make sure to define either the image's height or width for these utilities to work.

## Divide Utility for Borders

If you're using a list or grid of items and want to add horizontal or vertical borders between them, you can use the `divide-y` class:

```css
divide-y > * + * {
	border-top-width: 1px;
	border-bottom-width: 0px;
}
```

This automatically adds a border between each direct child element of the parent container.

## Responsive Embedded Videos

Embedding a responsive YouTube video can be challenging due to the `iframe` requirements for both height and width. The `aspect-video` utility class in Tailwind makes this simple:

```html
<iframe class="aspect-video w-full" src="your-video-source"></iframe>
```

This class automatically applies a 16:9 aspect ratio, commonly used for YouTube videos. For other ratios, you can use arbitrary values like `aspect-[3/2]`.
