---
title: Main Axis and Cross Axis
---

# Main Axis and Cross Axis

## Main Axis

- **What it Does**: The main axis is the primary axis along which flex items are laid out. It isn't necessarily horizontal or vertical; its direction depends on the `flex-direction` property.
- **How to Use in Tailwind**: The direction of the main axis is set using classes like `flex-row` (horizontal) and `flex-col` (vertical).
- **When to Use**: Whenever you're setting up a Flex Container, you're implicitly working along the main axis. If you want to align or distribute items horizontally in a row, or vertically in a column, you're operating along the main axis.
- **Trade-offs**: The main axis is essential for setting up the primary layout structure, but it doesn't handle alignment perpendicular to itself—that's the job of the cross axis.

## Cross Axis

- **What it Does**: The cross axis is the axis perpendicular to the main axis. If your main axis is set to row (horizontal), the cross axis is vertical, and vice versa.
- **How to Use in Tailwind**: You usually deal with the cross axis when you use classes like `items-center`, `items-start`, or `items-end`, which control how items align along the cross axis.
- **When to Use**: Use the cross-axis controls when you want to align items in the direction that is perpendicular to your main axis. For instance, if your flex direction is a row and you want to center items vertically, you're operating on the cross axis.
- **Trade-offs**: Just like the main axis, aligning items along the cross axis will affect all the Flex Items in the container unless you specify otherwise. For individual control, you might have to use additional classes like `self-start` or `self-end`.

## Summary

- **Main Axis**: Controls the primary layout direction in a Flex Container, influenced by the `flex-direction` property. Essential for distributing space and aligning items along the primary direction.
- **Cross Axis**: Perpendicular to the main axis, useful for aligning items in a way that is orthogonal to the main layout direction.
