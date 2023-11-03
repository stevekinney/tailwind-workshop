---
title: Justify Items
---

# Justify Items

In the context of Tailwind CSS, you can control the alignment and justification of individual grid items using utilities that map to the CSS properties `justify-items` and `align-items`.

<script lang="ts">
  import { Example } from '$components';
  import { justifyItems } from '../routes/playgrounds/grid/grid-classes.ts';
  import Select from '../routes/playgrounds/select.svelte';

  let selected = 'justify-items-start';
</script>

<div class="space-y-4">
  <Select
    id="Grid"
    title="Justify Content"
    bind:value={selected}
    options={justifyItems}
    required
  />

  <Example highlight="justify-">
    <div class="grid {selected} grid-flow-col gap-4 text-white text-sm  bg-cyan-100 p-4 rounded-md">
      <div class="px-2 h-14 rounded-md flex items-center justify-center bg-fuchsia-500 shadow-lg">01</div>
      <div class="px-2 h-14 rounded-md flex items-center justify-center bg-fuchsia-500 shadow-lg">02</div>
      <div class="px-2 h-14 rounded-md flex items-center justify-center bg-fuchsia-500 shadow-lg">03</div>
      <div class="px-2 h-14 rounded-md flex items-center justify-center bg-fuchsia-500 shadow-lg">04</div>
      <div class="px-2 h-14 rounded-md flex items-center justify-center bg-fuchsia-500 shadow-lg">05</div>
      <div class="px-2 h-14 rounded-md flex items-center justify-center bg-fuchsia-500 shadow-lg">06</div>
    </div>
  </Example>
</div>

- `justify-items-start`: Aligns individual grid items at the start of their cells along the main axis.
- `justify-items-center`: Centers individual grid items along the main axis within their cells.
- `justify-items-end`: Aligns individual grid items at the end of their cells along the main axis.
- `justify-items-stretch`: Stretches individual grid items to fill their entire cell along the main axis (default behavior).
