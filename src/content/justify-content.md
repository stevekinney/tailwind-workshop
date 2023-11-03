---
title: Justify Content
---

# Justify Content

- `justifu-start` is the default for Flexbox.
- `justify-stretch` is the default for CSS grid.

<script lang="ts">
  import { Example } from '$components';
  import { justifyContent as flex } from '../routes/playgrounds/flex/flex-classes.ts';
  import { justifyContent as grid } from '../routes/playgrounds/grid/grid-classes.ts';
  import Select from '../routes/playgrounds/select.svelte';
  
  const highlight = 'justify-';

  let flexSelected = 'justify-start';
  let gridSelected = 'justify-stretch';
</script>

<div class="space-y-4 mb-6">
  <Select
    id="flex"
    title="Flex"
    bind:value={flexSelected}
    options={flex}
    required
  />

  <Example highlight={highlight}>
    <div class="flex {flexSelected} gap-4 text-white text-sm  bg-cyan-100 p-4 rounded-md">
      <div class="w-14 h-14 rounded-md flex items-center justify-center bg-fuchsia-500 shadow-lg">01</div>
      <div class="w-14 h-14 rounded-md flex items-center justify-center bg-fuchsia-500 shadow-lg">02</div>
      <div class="w-14 h-14 rounded-md flex items-center justify-center bg-fuchsia-500 shadow-lg">03</div>
    </div>
  </Example>
</div>

<div class="space-y-4">
  <Select
    id="Grid"
    title="Justify Content"
    bind:value={gridSelected}
    options={grid}
    required
  />

  <Example highlight={highlight}>
    <div class="grid {gridSelected} grid-flow-col gap-4 text-white text-sm  bg-cyan-100 p-4 rounded-md">
      <div class="px-2 h-14 rounded-md flex items-center justify-center bg-fuchsia-500 shadow-lg">01</div>
      <div class="px-2 h-14 rounded-md flex items-center justify-center bg-fuchsia-500 shadow-lg">02</div>
      <div class="px-2 h-14 rounded-md flex items-center justify-center bg-fuchsia-500 shadow-lg">03</div>
      <div class="px-2 h-14 rounded-md flex items-center justify-center bg-fuchsia-500 shadow-lg">04</div>
      <div class="px-2 h-14 rounded-md flex items-center justify-center bg-fuchsia-500 shadow-lg">05</div>
      <div class="px-2 h-14 rounded-md flex items-center justify-center bg-fuchsia-500 shadow-lg">06</div>
    </div>
  </Example>
</div>

The `justify-content` property in Flexbox is used to align Flex Items along the main-axis of the Flex Container. Here's how it works in the context of Tailwind CSS:

## Justify Content (`justify-content`)

- **What it Does**: The `justify-content` property determines how Flex Items are spaced along the main axis inside a Flex Container. It deals with the distribution of free space when the items do not consume all the available space in the container.
- **How to Use in Tailwind**: Tailwind provides a set of utility classes to set the `justify-content` property easily. Some of the commonly used classes are `justify-start`, `justify-center`, `justify-end`, `justify-between`, `justify-around`, and `justify-evenly`.
- **When to Use**: Use `justify-content` when you want to control the horizontal alignment and spacing of Flex Items in a row layout, or vertical alignment and spacing in a column layout. For instance, you can use it to center items, distribute them evenly across the container, or push them to opposite ends.
- **Trade Offs and Other Things to Consider**: The `justify-content` property will affect all items in the Flex Container uniformly according to the chosen alignment method. If you need to individually align items along the main axis, `justify-content` alone won't suffice; you may need to use margins or other layout techniques for more granular control.

## Summary

- **Justify Content**: Determines the alignment and spacing of all Flex Items along the main axis inside the Flex Container. Effective for handling the distribution of space when items do not fill the entire main axis.

The `justify-content` property in Tailwind offers you a straightforward way to manage horizontal or vertical alignment in a Flex layout, providing you with multiple options for how items are spaced. Understanding this property will give you greater control over the visual presentation and layout of your content.
