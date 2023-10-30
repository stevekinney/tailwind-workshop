---
title: Nested Flexbox
---

# Nested Flexbox

In the context of Tailwind CSS, you can create nested Flexbox layouts by adding Flexbox utility classes to child elements within a flex container. Here's how it works:

See also: [nested-flexbox-versus-grid](./nested-flexbox-versus-grid.md)

## Core Concepts

1. **Parent Flex Container**: The parent element becomes a flex container by adding `.flex` or `.inline-flex`.
2. **Child Flex Container**: Any child within a parent flex container can also be turned into a flex container by adding `.flex` or `.inline-flex`.
3. **Nested Flex Items**: The children of a nested flex container are flex items to that nested container, and they can have their own flex properties.

## When to Use

- **Nested Layouts**: When you need complex layouts with multiple axes or different alignment rules, nested flex containers can make it simpler to organize your items.
- **Reusable Components**: When a flex item is itself a reusable component that also uses flex layout.
- **Grid Simulation**: When you need a more complex layout that a single flex container can't easily achieve.

## Trade-Offs

1. **Complexity**: The more deeply you nest flex containers, the more difficult your CSS might become to understand and maintain.
2. **Performance**: While most modern browsers handle nested flex containers well, extreme nesting might cause performance issues.
3. **Overhead**: Each nested flex container has its own layout calculations, which might not be as efficient as a single flex or grid layout for certain designs.
