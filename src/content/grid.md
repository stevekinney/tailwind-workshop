---
title: Grid
---

# Grid

## Basic Grid Container

To establish a grid container in Tailwind, you can use the `grid` class. This sets `display: grid;` on the element, turning its direct children into grid items.

## Number of Columns and Rows

You can specify the number of columns and rows using `grid-cols-[n]` and `grid-rows-[n]` respectively. For example, `grid-cols-3` will create a 3-column grid.

##[[gap]] Between Grid Items

You can use `gap-[size]` to set the gap between rows and columns. For instance, `gap-4` would set the row and column gap to `1rem`.

## Column and Row Span

Tailwind allows you to control how many columns or rows a grid item spans. Use `col-span-[n]` and `row-span-[n]` to set this. For example, `col-span-2` makes an item span two columns.

##[[grid-justify-align-items]]

For aligning and justifying items, you can use classes like `justify-items-[value]` and `align-items-[value]`. For example, `justify-items-center` will horizontally center all the grid items.

##[[grid-justify-align-content]]

To align and justify the entire grid content, use `justify-content-[value]` and `align-content-[value]`. These operate on the grid container as a whole, affecting the spacing between tracks.

##[[grid-area-templates]]

While Tailwind doesn't provide a direct utility for `grid-template-areas`, you can still define these using your stylesheet and then use Tailwind for other grid properties.

##[[grid-auto-flow]]

Control the grid auto-flow with `grid-flow-row` or `grid-flow-col`, for setting row or column flow respectively. `grid-flow-row-dense` and `grid-flow-col-dense` will utilize empty cells when possible.
