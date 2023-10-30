---
title: Gap
---

# Gap

In Tailwind CSS, the `gap` utility is used to define the space between rows and columns within both Flexbox and CSS Grid containers. It's a shorthand for both `row-gap` and `column-gap`.

## Syntax

You can set the gap between rows and columns using the `gap-[size]` classes. The size can be in terms of spacing scales provided by Tailwind, from `gap-0` for no spacing to `gap-96` for 24rem.

For example:

- `gap-1`: sets the row and column gap to `0.25rem`
- `gap-4`: sets the row and column gap to `1rem`
- `gap-8`: sets the row and column gap to `2rem`

## Row Gap and Column Gap

Tailwind also allows you to set row and column gaps independently:

- `row-gap-[size]`: sets the row gap.
- `col-gap-[size]`: sets the column gap.

## When to Use Gap

Use the gap utility when you need consistent space between child elements in a Flexbox or Grid container. This is often easier and more maintainable than setting margins on each child element.

## Trade-Offs

Using `gap` is straightforward and clean, but be aware that older browsers might not support it, especially in Flexbox layouts. Also, using `gap` with Flexbox might not yield the same results across all browsers, so testing is essential.
