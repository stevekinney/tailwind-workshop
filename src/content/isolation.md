---
title: Isolation
---

# Isolation

In CSS, the `isolation` property is used to define whether an element creates a new stacking context. By setting the `isolation` property to `isolate`, you essentially create a new stacking context, similar to how `position: relative` and certain `z-index` values can do.

In the context of Tailwind CSS, you can use the `.isolate` utility class to apply `isolation: isolate;` to an element. This is particularly useful in complex layouts where stacking order (z-index) can become difficult to manage.

## Relationship with `z-index`

Creating a new stacking context with `isolation: isolate;` affects how the `z-index` property behaves for child elements. In a new stacking context:

- Child elements with `z-index` are stacked in order relative to the isolated parent, not the entire page or other stacking contexts.
- This allows for easier control over stacking without worrying about z-index values elsewhere in your application.

## When to Use `isolate` in Tailwind

- When you have overlapping elements and want to control their stacking order locally within a component, rather than globally.
- When you want to ensure that the stacking context of a particular section doesn't affect or get affected by other sections in the layout.

By applying the `.isolate` utility class, you can manage `z-index` more predictably within a confined scope, making it easier to build and maintain complex UIs.
