---
title: Flex Container and Flex Items
---

# Flex Container and Flex Items

Understanding the concepts of Flex Containers and Flex Items is essential for leveraging the power of Flexbox, especially in the context of Tailwind CSS.

## Flex Container

- **What it Does**: The Flex Container is the parent element that holds Flex Items. It's where you define how the Flex Items should be laid out, aligned, and spaced.
- **How to Use in Tailwind**: You can create a Flex Container using the `flex` class. This makes the immediate children Flex Items and activates the Flexbox layout model for them.
- **When to Use**: Use a Flex Container when you want to create complex layouts involving multiple items that need to be aligned or distributed in specific ways horizontally or vertically.
- **Trade Offs and Other Things to Consider**: When you activate the Flexbox model by making an element a Flex Container, all of its immediate children become Flex Items by default, inheriting their behavior from the Flex Container.

## Flex Items

- **What it Does**: Flex Items are the immediate children of a Flex Container. They are the elements you're aligning, distributing, and arranging within the Flex Container.
- **How to Use in Tailwind**: Once you set a parent as a Flex Container, all its immediate children automatically become Flex Items. You can then apply Tailwind classes like `flex-grow`, `flex-shrink`, and `self-center` to these items to control their behavior.
- **When to Use**: Flex Items are used whenever you need individual elements to behave in a specific way within a Flex Container—such as taking up extra space, shrinking, or aligning differently from other items.
- **Trade Offs and Other Things to Consider**: While Flex Items inherit default behaviors from their Flex Container, you can override these by applying Tailwind classes directly to the Flex Items. However, it can get complicated if you're not clear about the cascading rules and how Flex Containers and Flex Items interact.

## Summary

- **Flex Container**: The parent element that controls the layout, alignment, and distribution of its immediate children, which become Flex Items.
- **Flex Items**: These are the immediate children of a Flex Container. They are the elements you're looking to layout and can have specific Flexbox properties applied to them for granular control.
