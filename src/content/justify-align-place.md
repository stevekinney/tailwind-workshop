---
title: Justify, Align, and Place
---

# Justify, Align, and Place

These properties are part of the CSS Flexbox and Grid layout models, and they control alignment and positioning of items within their containers. Understanding them is key to mastering layout in CSS, and they're all available in Tailwind CSS for quick utility-based styles. Here's a breakdown:

## Flexbox and Grid Shared Concepts

1. **Justify Content**: Aligns flex/grid items along the main axis (horizontal in a row, vertical in a column). Useful in distributing space between items when the container is larger than the sum of the items.
   - **Use**: When you want to control the spacing of direct children within a flex or grid container.
   - **Don't Use**: On the individual flex or grid items.
2. **Align Items**: Aligns flex/grid items on the cross-axis (opposite of the main axis).
   - **Use**: When you want to vertically align items in a row or horizontally align items in a column.
   - **Don't Use**: On individual flex or grid items.

## Flexbox Specific Concepts

1. **Align Content**: Controls how rows (in a flex container set as a row) or columns (in a flex container set as a column) distribute space within a container. Not much use in a single-line flex container.
   - **Use**: When you have a multi-line flex container and want to distribute the space between the lines.
   - **Don't Use**: In single-line flex containers or grid containers.
2. **Align Self**: Overrides the `align-items` value for specific flex items.
   - **Use**: When a specific item should be aligned differently from others within the same container.
   - **Don't Use**: On the container itself.
3. **Justify Self**: This property isn't typically used in Flexbox; it's more common in Grid.

## Grid Specific Concepts

1. **Justify Items**: Aligns grid items along the row axis within their respective grid areas.
   - **Use**: When you want to set the default alignment for all items within their grid areas.
   - **Don't Use**: On individual grid items unless you want to override the container setting.
2. **Place Content**: A shorthand for setting both `align-content` and `justify-content` in a grid container.
   - **Use**: When you want to simultaneously set `align-content` and `justify-content`.
   - **Don't Use**: When you need different values for aligning and justifying content.
3. **Place Items**: A shorthand for setting both `align-items` and `justify-items`.
   - **Use**: When you want to set both `align-items` and `justify-items` to the same value.
   - **Don't Use**: When you need different values for aligning and justifying items.
4. **Place Self**: A shorthand for setting both `align-self` and `justify-self` on a specific grid item.
   - **Use**: When a specific item should have the same value for both `align-self` and `justify-self`.
   - **Don't Use**: On the grid container itself.

## Tasting Notes

- Use justify properties to control spacing and alignment along the main axis.
- Use align properties to control spacing and alignment along the cross axis.
- Use place properties as shorthands when both align and justify settings will be the same.
