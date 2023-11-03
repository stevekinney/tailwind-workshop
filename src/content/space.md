---
title: Space
---

# Space

<script lang="ts">
  import { Example, Callout, Playground } from '$components';
</script>

The `space-` utility in Tailwind CSS is used for distributing fixed space between child elements within a Flexbox container. Essentially, it's a shorthand for managing the `margin` between Flex children in a straightforward way.

<Callout title="Space is Just a Shorthand">
  <code>space</code> is really just a short-hand for adding some margins to <strong>all but the last child<strong>.
</Callout>

- **Fixed Spacing**: The `space-` utility adds a fixed amount of margin between each flex item, but not on the outer edges. This eliminates the need to add individual margin classes to each flex item.
- **Directional Control**: You can control the spacing direction by appending `-x` or `-y` to the utility. For example, `space-x-4` would add horizontal spacing between items, while `space-y-4` would add vertical spacing.

Here is an example without spacing.

<Example>
  <div class="bg-blue-100 px-4">
    <div class="bg-red-500 border-2 border-red-600 text-center text-semibold">First</div>
    <div class="bg-red-500 border-2 border-red-600 text-center text-semibold">Second</div>
    <div class="bg-red-500 border-2 border-red-600 text-center text-semibold">Third</div>
    <div class="bg-red-500 border-2 border-red-600 text-center text-semibold">Fourth</div>
  </div>
</Example>

Now, let's add some spacing. This is a super useful tool for just quickly adding some space between different elements without needing to worry about pulling out `flex` or `grid`.

<Example highlight="space-y-4">
  <div class="bg-blue-100 px-4 space-y-4">
    <div class="bg-red-500 border-red-600 border-2 text-center text-semibold">First</div>
    <div class="bg-red-500 border-red-600 border-2 text-center text-semibold">Second</div>
    <div class="bg-red-500 border-red-600 border-2 text-center text-semibold">Third</div>
    <div class="bg-red-500 border-red-600 border-2 text-center text-semibold">Fourth</div>
  </div>
</Example>

Here is an example horizontal spacing.

<Example highlight="space-x-8">
  <div class="bg-blue-100 space-x-8 py-4">
    <button class="bg-blue-500 text-white px-4 py-2 rounded border-2 border-blue-700 shadow-md">Button</button>
    <button class="bg-blue-500 text-white px-4 py-2 rounded border-2 border-blue-700 shadow-md">Button</button>
    <button class="bg-blue-500 text-white px-4 py-2 rounded border-2 border-blue-700 shadow-md">Button</button>
  </div>
</Example>

## Exercise

<Playground id="UnYUh6shMy" title="Spacing Exercise" />

<Playground id="dw9o6BHYZq" title="Spacing Solution" solution />

## When to Use

- **Lists of Items**: It's ideal for use cases where you have a horizontal or vertical list of items and you want equal spacing between them.
- **Row/Column Layouts**: Use it in combination with the `flex` or `flex-col` classes to quickly create row or column layouts with even spacing between elements.

## Trade Offs and Other Things to Consider

- **Fixed Spacing**: Since it provides a fixed space, it may not be ideal for all responsive designs.
- **Not for Outer Margins**: The `space-` utilities don't affect the spacing on the outer edges of the first and last elements in the flex container.
