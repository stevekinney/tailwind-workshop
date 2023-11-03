---
title: Place Items
---

# Place Items

Basically a combination of `justify-items` and `align-items`.

<script lang="ts">
  import { Example } from '$components';
  import { placeItems } from '../routes/playgrounds/grid/grid-classes.ts';
  import Select from '../routes/playgrounds/select.svelte';

  let selected = 'place-items-start';
</script>

<div class="space-y-4">
  <Select
    id="Grid"
    title="Place Items"
    bind:value={selected}
    options={placeItems}
    required
  />

  <Example highlight="place-items-">
    <div class="grid {selected} grid-cols-2 h-96 gap-4 text-white text-sm  bg-cyan-100 p-4 rounded-md">
      <div class="px-2 h-14 min-w-[5rem] rounded-md flex items-center justify-center bg-fuchsia-500 shadow-lg">01</div>
      <div class="px-2 h-14 min-w-[5rem] rounded-md flex items-center justify-center bg-fuchsia-500 shadow-lg">02</div>
      <div class="px-2 h-14 min-w-[5rem] rounded-md flex items-center justify-center bg-fuchsia-500 shadow-lg">03</div>
      <div class="px-2 h-14 min-w-[5rem] rounded-md flex items-center justify-center bg-fuchsia-500 shadow-lg">04</div>
      <div class="px-2 h-14 min-w-[5rem] rounded-md flex items-center justify-center bg-fuchsia-500 shadow-lg">05</div>
      <div class="px-2 h-14 min-w-[5rem] rounded-md flex items-center justify-center bg-fuchsia-500 shadow-lg">06</div>
    </div>
  </Example>
</div>
