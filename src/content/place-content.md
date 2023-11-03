---
title: Place Content
---

# Place Content

`place-content-*` let you to align content along both the block and inline directions at once.

It's Basically a combination of `justify-content` and `align-content`.

<script lang="ts">
  import { Example } from '$components';
  import { placeContent } from '../routes/playgrounds/grid/grid-classes.ts';
  import Select from '../routes/playgrounds/select.svelte';

  let selected = 'place-content-start';
</script>

<div class="space-y-4">
  <Select
    id="Grid"
    title="Place Content"
    bind:value={selected}
    options={placeContent}
    required
  />

  <Example highlight="place-content-">
    <div class="grid {selected} grid-cols-[repeat(2,56px)] h-96 gap-4 text-white text-sm  bg-cyan-100 p-4 rounded-md">
      <div class="px-2 h-14 w-14 rounded-md flex items-center justify-center bg-fuchsia-500 shadow-lg">01</div>
      <div class="px-2 h-14 w-14 rounded-md flex items-center justify-center bg-fuchsia-500 shadow-lg">02</div>
      <div class="px-2 h-14 w-14 rounded-md flex items-center justify-center bg-fuchsia-500 shadow-lg">03</div>
      <div class="px-2 h-14 w-14 rounded-md flex items-center justify-center bg-fuchsia-500 shadow-lg">04</div>
      <div class="px-2 h-14 w-14 rounded-md flex items-center justify-center bg-fuchsia-500 shadow-lg">05</div>
      <div class="px-2 h-14 w-14 rounded-md flex items-center justify-center bg-fuchsia-500 shadow-lg">06</div>
    </div>
  </Example>
</div>
