---
title: Gradients
---

# Gradients

<script>
  import { Example } from '$components';
</script>

There are a few moving pieces to creating gradients:

- The direction
- Where you want to start
- Where you want to end up

<Example highlight="r">
  <div class="h-10 w-full bg-gradient-to-r from-orange-400 to-red-700">
</Example>

<Example highlight="r">
  <div class="h-96 w-full bg-gradient-to-b from-blue-400 to-rose-600 via-purple-500">
</Example>

## Text Gradients

<Example>
  <span class="bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent font-bold text-3xl">
    Hello World
  </span>
</Example>
