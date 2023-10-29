---
title: Sizing and Spacing
---

# Sizing and Spacing

<script>
  import defaultTheme from 'tailwindcss/defaultTheme';
  import { Example, Playground } from '$lib/components';
</script>

Tailwind's spacing scale is based on a system where a unit is equivalent to `4rem`. This system is fully customizable, but Tailwind also ships with some [sensible defaults](https://tailwindcss.com/docs/customizing-spacing#default-spacing-scale). If we wanted something that had a height of `40rem`, then we'd use the `h-10` utility class.

<Playground title="An Spacing Example" id="HO0M8wzddg" height={500} />

## Default Spacing

<table class="table-fixed">
  <thead>
  <tr>
    <th>Spacing</th>
    <th>Value</th>
  </tr>
  </thead>
  <tbody>
  {#each Object.entries(defaultTheme.spacing) as [key, value]}
  <tr>
    <td>{key}</td>
    <td>{value}</td>
  </tr>
  {/each}
  </tbody>
</table>
