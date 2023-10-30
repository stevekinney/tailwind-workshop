---
title: Grid Justify and Align Items
---

# Grid Justify and Align Items

In the context of Tailwind CSS, you can control the alignment and justification of individual grid items using utilities that map to the CSS properties `justify-items` and `align-items`.

## Grid Justify Items Utilities

- `justify-items-start`: Aligns individual grid items at the start of their cells along the main axis.
- `justify-items-center`: Centers individual grid items along the main axis within their cells.
- `justify-items-end`: Aligns individual grid items at the end of their cells along the main axis.
- `justify-items-stretch`: Stretches individual grid items to fill their entire cell along the main axis (default behavior).

## Grid Align Items Utilities

- `items-start`: Aligns individual grid items at the start of their cells along the cross axis.
- `items-center`: Centers individual grid items along the cross axis within their cells.
- `items-end`: Aligns individual grid items at the end of their cells along the cross axis.
- `items-stretch`: Stretches individual grid items to fill their entire cell along the cross axis (default behavior).

## When to Use Each

- `justify-items-*`: Use these utilities when you want to control how individual grid items align within their grid cells along the main axis (row or column, depending on your grid orientation).
- `items-*`: Use these utilities when you want to control how individual grid items align within their grid cells along the cross axis (opposite of the main axis).

## Trade-offs

- These utilities set the alignment for all grid items in the grid container, making them less flexible if you want to apply different alignments to different items. In such cases, you would use `justify-self` and `align-self` utilities for more specific item-level control.
