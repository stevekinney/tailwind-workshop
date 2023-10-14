---
title: Grid Justify and Align Content
---

# Grid Justify and Align Content

In Tailwind CSS, you can control the alignment and justification of grid items along both the main and cross axes using utilities that map to the CSS properties `justify-content` and `align-content`. Here's a breakdown of how these concepts are implemented in Tailwind.

## Grid Justify Content Utilities

- `justify-start`: Aligns the grid items at the start of the grid container along the main axis (row or column depending on your layout).
- `justify-center`: Centers the grid items along the main axis.
- `justify-end`: Aligns the grid items at the end of the grid container along the main axis.
- `justify-between`: Distributes the grid items evenly along the main axis, with the first item at the start and the last item at the end.
- `justify-around`: Distributes the grid items evenly along the main axis, with equal spacing around each item.
- `justify-evenly`: Distributes the grid items evenly along the main axis, with equal spacing between each item, including the first and last ones.

## Grid Align Content Utilities

- `content-start`: Aligns the grid's content at the start of the grid container along the cross axis (opposite to your main axis).
- `content-center`: Centers the grid's content along the cross axis.
- `content-end`: Aligns the grid's content at the end of the grid container along the cross axis.
- `content-between`: Distributes the grid's content evenly along the cross axis, with the first row/column at the start and the last row/column at the end.
- `content-around`: Distributes the grid's content evenly along the cross axis, with equal spacing around each row/column.
- `content-evenly`: Distributes the grid's content evenly along the cross axis, with equal spacing between each row/column, including the first and last ones.

## When to Use Each

- Use `justify-*` utilities to control the distribution of items along the main axis, which could be either rows or columns.
- Use `content-*` utilities to control the distribution of grid rows or columns along the cross axis.

## Trade-offs

- When you specify these utilities, you're controlling the layout at the container level, which means that all items within the container will be affected. If you need more granular control over individual items, you would use `justify-self` and `align-self` at the grid item level.

To summarize, Tailwind gives you fine-grained control over how your grid items and grid content are aligned and justified, helping you achieve complex layouts with ease.
