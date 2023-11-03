---
title: Responsive Breakpoints
---

# Responsive Breakpoints

<script>
  import defaultTheme from 'tailwindcss/defaultTheme';
  import { Example, Playground } from '$lib/components';
</script>

Okay, so this is one of my favorite parts of Tailwind. They make the responsive breakpoints super easy. We'll rely a little bit more heavily on these when we start talking about [Grid](./grid.md) and [Flexbox](./flex.md), but let's introduce the idea now.

Out of the box, Tailwind comes with the following breakpoints.

<table class="table-fixed">
  <thead>
  <tr>
    <th>Size</th>
    <th>Minimum Width</th>
  </tr>
  </thead>
  <tbody>
  {#each Object.entries(defaultTheme.screens) as [key, value]}
  <tr>
    <td>{key}</td>
    <td>{value}</td>
  </tr>
  {/each}
  </tbody>
</table>

## Mobile First

If you don't use a variant to define what screen size the style should apply to, then it'll start from the smallest. You can only override styles to apply to wider viewports. Consider the following:

<Playground id="dTF6IWv2tr" title="Breakpoint Example" height={700} />
