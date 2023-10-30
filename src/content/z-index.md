---
title: Z-Index and Stacking Contexts
---

# Z-Index and Stacking Contexts

In the context of Tailwind CSS, the `z-index` property is used to control the stacking order of positioned elements along the z-axis (front-to-back). You can use Tailwind's utility classes to easily manage `z-index`.

## Understanding Z-Index Stacking Context

- **Concept**: The stacking context is an imaginary three-dimensional space in which elements reside. A higher `z-index` value means an element will be closer to the viewer, overlaying those with lower values.
- **Use-case**: Use `z-index` when you want to control which elements overlay others. This is often relevant for modals, tooltips, dropdowns, and floating buttons.
- **Trade-offs**: It can get complex in larger projects where many elements have defined z-indices. If not managed well, this can lead to unintended overlaps or elements appearing beneath others.

## Using Tailwind for Z-Index

Tailwind provides utility classes for `z-index` ranging from `z-0` for `z-index: 0` to `z-50` for `z-index: 50`. There's also a `z-auto` class to set `z-index: auto`.

## Establishing a New Stacking Context

In CSS, creating a new stacking context involves setting a `z-index` value other than `auto` on a positioned element (`relative`, `absolute`, `fixed`, `sticky`). In Tailwind, simply adding a `z-[value]` along with a positioning class like `relative` or `absolute` will create a new stacking context.

## Tailwind's Approach

Tailwind encourages a utility-first approach, which can actually make managing `z-index` simpler because you add z-index classes directly to the elements where they're needed. This can make it easier to see and understand the stacking context directly in the markup, rather than having to dig through separate CSS files.
