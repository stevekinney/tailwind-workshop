---
title: Align Items and Align Self
---

# Align Items and Align Self

The properties `align-items` and `align-self` in Flexbox control the alignment of Flex Items along the cross-axis of the Flex Container. In Tailwind CSS, these functionalities are mapped to utility classes for ease of use.

## Align Items (a.k.a. `align-items`)

- **What it Does**: The `align-items` property aligns all Flex Items along the cross-axis inside the Flex Container. The alignment is applied to all items as a group.
- **How to Use in Tailwind**: Tailwind provides a variety of classes to set the `align-items` property, such as `items-start`, `items-center`, `items-end`, `items-baseline`, and `items-stretch`.
- **When to Use**: Use `align-items` when you want to uniformly control the alignment of all Flex Items within a Flex Container along the cross-axis. For example, centering all items vertically.
- **Trade-offs**: Because this property applies to all items in the Flex Container, it might not be suitable if you need individual control for each item's alignment.

## Align Self (`align-self`)

- **What it Does**: `align-self` allows you to override the `align-items` property for individual Flex Items, letting you set their alignment along the cross-axis.
- **How to Use in Tailwind**: You can use the `self-*` utility classes in Tailwind to set the `align-self` for individual items. Some of the classes include `self-auto`, `self-start`, `self-center`, `self-end`, and `self-stretch`.
- **When to Use**: Use `align-self` when you need to individually adjust the alignment of specific Flex Items within a Flex Container. For instance, if most items should be centered, but one should be aligned to the start, `align-self` allows for this kind of customization.
- **Trade-offs**: The `align-self` property will only override the `align-items` property for the items to which it's applied. It doesn't affect the alignment of other items in the container, so it's less useful for global alignment adjustments.

## Summary

- **Align Items**: Controls the alignment of all Flex Items along the cross-axis as a group. Useful for global alignment within the container.
- **Align Self**: Overrides `align-items` for individual Flex Items, giving you more granular control over their alignment.
