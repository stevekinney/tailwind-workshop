---
title: Align Items
---

# Align Content

<script lang="ts">
  import { Example } from '$components';
  import { alignContent } from '../routes/playgrounds/grid/grid-classes.ts';
  import Select from '../routes/playgrounds/select.svelte';

  let selected = 'content-start';
</script>

<div class="space-y-4">
  <Select
    id="Grid"
    title="Align Content"
    bind:value={selected}
    options={alignContent}
    required
  />

  <Example highlight="justify-">
    <div class="grid {selected} h-96 grid-cols-2 gap-4 text-white text-sm  bg-cyan-100 p-4 rounded-md">
      <div class="px-2 h-14 rounded-md flex items-center justify-center bg-fuchsia-500 shadow-lg">01</div>
      <div class="px-2 h-14 rounded-md flex items-center justify-center bg-fuchsia-500 shadow-lg">02</div>
      <div class="px-2 h-14 rounded-md flex items-center justify-center bg-fuchsia-500 shadow-lg">03</div>
      <div class="px-2 h-14 rounded-md flex items-center justify-center bg-fuchsia-500 shadow-lg">04</div>
      <div class="px-2 h-14 rounded-md flex items-center justify-center bg-fuchsia-500 shadow-lg">05</div>
      <div class="px-2 h-14 rounded-md flex items-center justify-center bg-fuchsia-500 shadow-lg">06</div>
    </div>
  </Example>
</div>

- `content-start`: Aligns the grid's content at the start of the grid container along the cross axis (opposite to your main axis).
- `content-center`: Centers the grid's content along the cross axis.
- `content-end`: Aligns the grid's content at the end of the grid container along the cross axis.
- `content-between`: Distributes the grid's content evenly along the cross axis, with the first row/column at the start and the last row/column at the end.
- `content-around`: Distributes the grid's content evenly along the cross axis, with equal spacing around each row/column.
- `content-evenly`: Distributes the grid's content evenly along the cross axis, with equal spacing between each row/column, including the first and last ones.
