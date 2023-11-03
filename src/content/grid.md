---
title: Grid
---

# Grid

<script lang="ts">
  import { Playground } from '$components';
</script>

Via the [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout):

![Block Axis](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout/block_axis.png)

![Inline Axis](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout/7_inline_axis.png)

<div class="grid grid-cols-2 gap-x-2 gap-y-4 my-8">
  <div class="rounded bg-slate-50 border-2 border-slate-100 bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent font-bold text-3xl p-8">Justify</div>
  <div class="rounded bg-slate-50 border-2 border-slate-100 text-2xl p-8">Inline Axis</div>
  <div class="rounded bg-slate-50 border-2 border-slate-100 bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent font-bold text-3xl p-8">Align</div>
  <div class="rounded bg-slate-50 border-2 border-slate-100 text-2xl p-8">Block Axis</div>
  <div class="rounded bg-slate-50 border-2 border-slate-100 bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent font-bold text-3xl p-8">Place</div>
  <div class="rounded bg-slate-50 border-2 border-slate-100 text-2xl p-8">Both Axes</div>
  <div class="rounded bg-slate-50 border-2 border-slate-100 bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent font-bold text-3xl p-8">Content</div>
  <div class="rounded bg-slate-50 border-2 border-slate-100 text-2xl p-8">The Grid Itself</div>
  <div class="rounded bg-slate-50 border-2 border-slate-100 bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent font-bold text-3xl p-8">Items</div>
  <div class="rounded bg-slate-50 border-2 border-slate-100 text-2xl p-8">Each Grid Item</div>
</div>

See if you can lay this out in a grid.

- At the smallest viewport, it should be a one-column grid.
- At the largest it should be a one row, grid.

Use the **Grid Playground** to try out your ideas.

<Playground id="TZ8hb0wpQ1" title="A Grid Exercise" />

## Basic Grid Container

To establish a grid container in Tailwind, you can use the `grid` class. This sets `display: grid;` on the element, turning its direct children into grid items.

## Number of Columns and Rows

You can specify the number of columns and rows using `grid-cols-[n]` and `grid-rows-[n]` respectively. For example, `grid-cols-3` will create a 3-column grid.

## [Gap](./gap.md) Between Grid Items

You can use `gap-[size]` to set the gap between rows and columns. For instance, `gap-4` would set the row and column gap to `1rem`.

## Column and Row Span

Tailwind allows you to control how many columns or rows a grid item spans. Use `col-span-[n]` and `row-span-[n]` to set this. For example, `col-span-2` makes an item span two columns.

## [Justify and Align Items](./grid-justify-align-items.md)

For aligning and justifying items, you can use classes like `justify-items-[value]` and `align-items-[value]`. For example, `justify-items-center` will horizontally center all the grid items.

## [Justify and Align Content](./grid-justify-align-content.md)

To align and justify the entire grid content, use `justify-content-[value]` and `align-content-[value]`. These operate on the grid container as a whole, affecting the spacing between tracks.

## [Grid Area Templates](./grid-area-templates.md)

While Tailwind doesn't provide a direct utility for `grid-template-areas`, you can still define these using your stylesheet and then use Tailwind for other grid properties.

## [Grid Auto Flow](./grid-auto-flow.md)

Control the grid auto-flow with `grid-flow-row` or `grid-flow-col`, for setting row or column flow respectively. `grid-flow-row-dense` and `grid-flow-col-dense` will utilize empty cells when possible.
