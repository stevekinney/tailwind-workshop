---
title: Flex Direction
---

# Flex Direction

In Tailwind CSS, Flex Direction is used to set the direction in which flex items are placed within a flex container. By default, flex items are laid out in a row, but you can also set them to be in a column. Here's how to control flex direction with Tailwind:

1. **Row Direction (Default)**: Using the `.flex` class makes the container a flex container and sets the direction to row by default. Flex items will be aligned from left to right.
2. **Row Reverse Direction**: The `.flex-row-reverse` class will make the flex items align from right to left within the container.
3. **Column Direction**: The `.flex-col` class will arrange the flex items from top to bottom, stacking them vertically.
4. **Column Reverse Direction**: With `.flex-col-reverse`, flex items are stacked vertically but from bottom to top, reversing the normal top-to-bottom order.

## When to Use Each

- **Row Direction**: Use this when you want a horizontal layout, which is often the case for menus, buttons, or any UI elements laid out beside each other.
- **Row Reverse Direction**: Useful for changing the visual order of elements without affecting the DOM order, such as in right-to-left language layouts.
- **Column Direction**: Ideal for stacking items vertically, like cards, list items, or any other content where a top-to-bottom flow is appropriate.
- **Column Reverse Direction**: Useful for altering the visual stacking order of elements without changing their order in the markup, similar to `flex-row-reverse` but in a vertical orientation.

## Trade-Offs

1. **DOM Order vs Visual Order**: When you reverse the direction, the visual order changes but the DOM order remains the same, which could be confusing for screen reader users.
2. **Flex Properties**: Properties like `justify-content` and `align-items` work along the main axis and cross axis, which are determined by the flex direction. Changing the direction may require adjusting these properties.
3. **Responsive Design**: Tailwind allows for responsive flex direction, meaning you can set the flex direction to change at different breakpoints. This can be both powerful and potentially complex to manage.
