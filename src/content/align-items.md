---
title: Align Items
---

# Align Items

<script lang="ts">
  import { Example } from '$components';
  import { alignItems as flex } from '../routes/playgrounds/flex/flex-classes.ts';
  import { alignItems as grid } from '../routes/playgrounds/grid/grid-classes.ts';
  import Select from '../routes/playgrounds/select.svelte';
  
  const highlight = 'items-';

  let flexSelected = 'items-start';
  let gridSelected = 'items-stretch';
</script>

<div class="space-y-4 mb-6">
  <Select
    id="flex"
    title="Flex"
    bind:value={flexSelected}
    options={flex}
    required
  />

  <Example highlight={highlight}>
    <div class="flex {flexSelected} gap-4 text-white text-sm bg-cyan-100 p-4 rounded-md">
      <div class="w-14 h-14 rounded-md flex items-center justify-center bg-fuchsia-500 shadow-lg">01</div>
      <div class="w-14 h-14 rounded-md flex items-center justify-center bg-fuchsia-500 shadow-lg">02</div>
      <div class="w-14 h-14 rounded-md flex items-center justify-center bg-fuchsia-500 shadow-lg">03</div>
    </div>
  </Example>
</div>

<div class="space-y-4">
  <Select
    id="Grid"
    title="Justify Content"
    bind:value={gridSelected}
    options={grid}
    required
  />

  <Example highlight={highlight}>
    <div class="grid {gridSelected} grid-cols-2 gap-4 text-white text-sm h-96 bg-cyan-100 p-4 rounded-md">
      <div class="px-2 rounded-md flex items-center justify-center bg-fuchsia-500 shadow-lg">01</div>
      <div class="px-2 rounded-md flex items-center justify-center bg-fuchsia-500 shadow-lg">02</div>
      <div class="px-2 rounded-md flex items-center justify-center bg-fuchsia-500 shadow-lg">03</div>
      <div class="px-2 rounded-md flex items-center justify-center bg-fuchsia-500 shadow-lg">04</div>
      <div class="px-2 rounded-md flex items-center justify-center bg-fuchsia-500 shadow-lg">05</div>
      <div class="px-2 rounded-md flex items-center justify-center bg-fuchsia-500 shadow-lg">06</div>
    </div>
  </Example>
</div>
