---
title: variants
---

In Tailwind CSS, variants are utility classes that apply their styles conditionally based on the state of an element. Variants are essentially prefixed versions of existing utility classes. This feature is especially useful for defining behaviors like hover, focus, or responsive designs. Here's an overview:

## Standard Variants

- **Hover**: Use the `hover:` prefix to apply a utility class when an element is hovered over. For example, `hover:bg-blue-500` changes the background color to blue when hovered.
- **Focus**: Use the `focus:` prefix to apply styles when an element is focused. For example, `focus:border-yellow-300` applies a yellow border on focus.
- **Active**: Apply styles when an element is active, using the `active:` prefix.

## Stateful Variants

- **Disabled**: Use the `disabled:` prefix to style disabled elements.
- **Visited**: The `visited:` prefix styles links that have been visited.

## Responsive Variants

- **Breakpoints**: Tailwind has built-in breakpoints (`sm`, `md`, `lg`, `xl`, `2xl`) that you can use to apply styles at different screen sizes. For example, `sm:text-base lg:text-xl` changes the text size based on the screen size.

## [[group-modifier|Group]] Variants

- **Group Hover**: The `group-hover:` prefix targets a child element when its parent has a `.group` class and is hovered over.
- **Group Focus**: Similar to `group-hover`, but applies when the parent is focused.

## Dark Mode

- **Dark**: The `dark:` variant applies styles when dark mode is active.

## When to Use

- When you want to change the style of an element based on its state or interaction (hover, focus, etc.).
- When you want to apply different styles at different screen sizes.

## Trade-Offs

- **Increased Complexity**: While variants make styling interactive states easier, they can also make the HTML more verbose, as you're essentially embedding style logic directly into the markup.
- **Customization Required**: For some advanced states or conditions, Tailwind’s built-in variants might not suffice, requiring custom variants or direct CSS.

Overall, variants are a cornerstone feature in Tailwind's utility-first philosophy, allowing you to create highly interactive and responsive UIs directly from your HTML markup. Would you like to know more about any specific type of variant?
