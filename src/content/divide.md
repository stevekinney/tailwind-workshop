---
title: Divide
---

# Divide

<script lang="ts">
  import { Example } from '$components';
</script>

In Tailwind CSS, the `divide` utility is used to add borders between child elements within a container. This is particularly useful when you want to create separators between a series of items without manually adding border classes to each item. The `divide` utility helps you manage this in a _dryer_ (as in "Don't Repeat Yourself") manner.

## Basic Usage

If you have a container with several child elements and you want to add horizontal borders between them, you can add `divide-y` to the parent container like this:

<Example highlight="divide-y-4">
  <div class="bg-blue-100 px-4 divide-y-4">
    <div class="bg-red-500 text-center text-semibold">First</div>
    <div class="bg-red-500 text-center text-semibold">Second</div>
    <div class="bg-red-500 text-center text-semibold">Third</div>
    <div class="bg-red-500 text-center text-semibold">Fourth</div>
  </div>
</Example>

## Customization

You can also customize the thickness and color of the dividing borders. For example, using `divide-y-2` will make the dividing line thicker, and using `divide-red-500` will color it red:

<Example highlight="divide-y-4 divide-red-800">
  <div class="bg-blue-100 px-4 divide-y-4 divide-red-800">
    <div class="bg-red-500 text-center text-semibold">First</div>
    <div class="bg-red-500 text-center text-semibold">Second</div>
    <div class="bg-red-500 text-center text-semibold">Third</div>
    <div class="bg-red-500 text-center text-semibold">Fourth</div>
  </div>
</Example>

**Bonus**: You can read more about [`space` versus `divide`](./space-versus-divide.md).
