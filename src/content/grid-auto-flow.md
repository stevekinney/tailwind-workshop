---
title: Grid Auto-Flow
---

# Grid Auto-Flow

In Tailwind CSS, the `grid-auto-flow` CSS property controls how auto-placed items get inserted into the grid. This becomes relevant when you have grid items that span multiple rows or columns, or when you haven't explicitly placed all items. The utilities for controlling the auto-flow behavior in Tailwind are straightforward.

## Grid Auto Flow Utilities

- `grid-flow-row`: This sets the grid auto flow to "row," meaning items will fill in each row from top to bottom before moving to the next column.
- `grid-flow-col`: Sets the grid auto flow to "column," meaning items will fill in each column from left to right before moving to the next row.
- `grid-flow-row-dense`: This is like "row," but it tries to fill in holes earlier in the grid if smaller items come up later.
- `grid-flow-col-dense`: Similar to "column," but fills in holes in the grid as soon as they are available.

## When to Use Each

- Use `grid-flow-row` when you want grid items to populate rows first and move to the next column only when the current column is full.
- Use `grid-flow-col` when you want grid items to populate columns first and move to the next row only when the current row is full.
- The "dense" options are useful when you have items of varying size and want to maximize space utilization. However, this can cause items to appear out of order.

## Trade-offs

- While the "dense" options can lead to a more compact layout, they can disrupt the visual order of your items, which might not always be what you want.

In summary, Tailwind's grid auto-flow utilities give you control over how grid items are auto-placed in scenarios where not all items are explicitly placed. This helps you manage complex layouts more effectively.
