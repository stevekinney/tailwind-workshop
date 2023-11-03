---
title: Flex
---

# Flex

<script lang="ts">
  import { Playground } from '$components';
</script>

Flexbox is a layout model in CSS that's designed to distribute space along a single axis, either horizontally or vertically. It's incredibly useful for building complex layout structures with a more predictable way than traditional models, especially when the sizes of your items are unknown or dynamic.

<div class="not-prose relative flex items-center w-full aspect-square bg-slate-50 border-slate-100 border-2">
  <p class="absolute bg-gradient-to-r pl-10 text-white font-bold from-pink-400 to-pink-600 rotate-90 w-full">Cross Axis (Align)</p>
  <p class=" bg-gradient-to-r pl-10 text-white font-bold from-cyan-400 to-cyan-600 w-full">Main Axis (Justify)</p>
</div>

<div class="grid grid-cols-2 gap-x-2 gap-y-4 my-8">
  <div class="rounded bg-slate-50 border-2 border-slate-100 bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent font-bold text-3xl p-8">Justify</div>
  <div class="rounded bg-slate-50 border-2 border-slate-100 text-2xl p-8">Main Axis</div>
  <div class="rounded bg-slate-50 border-2 border-slate-100 bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent font-bold text-3xl p-8">Align</div>
  <div class="rounded bg-slate-50 border-2 border-slate-100 text-2xl p-8">Cross Axis</div>
  <div class="rounded bg-slate-50 border-2 border-slate-100 bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent font-bold text-3xl p-8">Place</div>
  <div class="rounded bg-slate-50 border-2 border-slate-100 text-2xl p-8">Both Axes</div>
</div>

- **Main Axis**: Controls the primary layout direction in a Flex Container, influenced by the `flex-direction` property. Essential for distributing space and aligning items along the primary direction.
- **Cross Axis**: Perpendicular to the main axis, useful for aligning items in a way that is orthogonal to the main layout direction.

## Exercise

Take a look at these quotes and try the following:

- Lay them out in a row layout.
- Lay them out in a column layout.
- Add a breakpoint that lays them out in a column in smaller screens and then wraps them for larger screens.
- Add an appropriate gap.

We'll explore it together in a few minutes.

<Playground id="R5aRaZBARh" title="A Flexbox Challenge" height={500} />

## Enabling Flexbox

- `flex`: Enables flex layout for a container.

## Setting the Direction

- `flex-row` and `flex-row-reverse`: For horizontal layouts.
- `flex-col` and `flex-col-reverse`: For vertical layouts.

## Justifying Content

- `justify-start`, `justify-center`, `justify-end`, `justify-between`, and `justify-around`: Align children along the main axis.

## Aligning Items

- `items-start`, `items-center`, `items-end`, `items-baseline`, `items-stretch`: Align children along the cross axis.

## Aligning Individual Items

- `self-start`, `self-center`, `self-end`, `self-auto`, `self-stretch`: Override alignment for specific children.

## Flex Wrapping

- `flex-wrap`, `flex-nowrap`, `flex-wrap-reverse`: Control if children should wrap onto multiple lines.

## Growing and Shrinking

- `flex-grow` and `flex-shrink`: Determine how much a flex item should grow or shrink relative to its siblings.

## Flex Sizing

- `flex-initial`, `flex-1`, `flex-auto`: Control the size of flex items.

## Gap Spacing

- `gap-{size}`: Allows you to add space between flex items without affecting the outer container.

## Further Reading

- **`flex-container`**: Understand the parent-child relationship.
- **`main-axis-and-cross-axis`**: The two axes along which flex items are laid out.
- **`justify-content`**: Main-axis alignment.
- **`align-items-and-align-self`**: Cross-axis alignment and their overrides.
- **`flex-wrap`**: Behavior when flex items exceed the container's size.
- **`flex-grow-and-shrink`**: The mechanism to fill available space or reduce items to fit.
- **`flex-basis`**: The initial size of a flex item before growing and shrinking.
- **`flex-direction`**: Specifies the direction in which Flex Items are laid out in the Flex Container. By default, items are laid out in a row, but you can also set them to be in a column.
- **`flex-ordering`**: Tailwind allows you to control the order in which Flex Items appear within the Flex Container, overriding their natural order in the HTML.
- **`flex-spacing`**: While we discussed alignment and distribution, Tailwind also provides utility classes for managing the spacing (gutters) between Flex Items.
- **`nested-flexbox`**: Flex Containers can also be Flex Items if they are nested within another Flex Container, opening up more complex layout possibilities.
- **`auto-margins`**: Tailwind allows you to use auto-margins for alignment, which can be especially helpful for distributing space within a Flex Container.
