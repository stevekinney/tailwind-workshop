---
title: Flex Ordering
---

# Flex Ordering

Flex Ordering in Tailwind CSS allows you to control the order in which flex items appear within a flex container, without modifying the HTML structure. Here's how to control the order of flex items using Tailwind:

1. **Default Order**: By default, flex items follow the order in which they appear in the HTML document. This is equivalent to having an order of `0`.
2. **Order Ascending**: Use `.order-[n]` where `n` is a number to set the order in ascending manner. For example, `.order-1`, `.order-2`, etc., will order the items based on the specified number.
3. **Order Descending**: You can use negative numbers to set items in descending order. For example, `.order-[-1]` will place the item before an item with `.order-0` or `.order-1`.

## When to Use Each

- **Default Order**: When the visual order and the HTML order should align, and there's no need for re-ordering.
- **Order Ascending**: Useful for dynamically re-arranging items based on user actions or other conditions without changing the HTML structure.
- **Order Descending**: Similar to ascending but allows you to place certain elements at the beginning of the layout. This is less commonly used but can be handy for specific use-cases.

## Trade Offs and Other Things to Consider

1. **Accessibility**: Changing the visual order might make it hard for screen readers to correctly interpret the page if the logical order is different from the visual order.
2. **Readability**: Having items with custom orders may make the HTML harder to follow, especially if the order numbers are not sequential or if you're using a mix of positive and negative values.
3. **Maintenance**: If items are often dynamically reordered, keeping track of ordering numbers can become complex and prone to errors.
