---
title: Sytling Pseudo-Classes with Variants
---

# Styling Pseudo-Classes with Variants

<script lang="ts">
  import { Example } from '$components';
</script>

In Tailwind CSS, variants are utility classes that apply their styles conditionally based on the state of an element. Variants are essentially prefixed versions of existing utility classes. This feature is especially useful for defining behaviors like hover, focus, or responsive designs.

Let's consider a variation on our button from earlier.

<Example>
  <button class="bg-blue-500 border-2 border-blue-600 text-white px-2 py-1 rounded shadow-md">Button</button>
</Example>

But, we're used to buttons having some level of interaction to them. For example, they typically might change as you hover or click on them.

We can use variants in Tailwind to add effects on hover or active or focused or required or disabled or other pseudo-classes that I can't think of at the moment.

Let's add the ability to change the background color when we **hover** over the element.

<Example highlight="hover:bg-blue-400">
  <button class="bg-blue-500 border-2 border-blue-600 text-white px-2 py-1 rounded shadow-md hover:bg-blue-400">Button</button>
</Example>

We can do something similar for the **active** state as well.

<Example highlight="active:bg-blue-600 active:border-blue-700">
  <button class="bg-blue-500 border-2 border-blue-600 text-white px-2 py-1 rounded shadow-md hover:bg-blue-400 active:bg-blue-600 active:border-blue-700">Button</button>
</Example>

We call also change the styling when the button is disabled.

<Example highlight="disabled:opacity-50">
  <button disabled class="bg-blue-500 border-2 border-blue-600 text-white px-2 py-1 rounded shadow-md hover:bg-blue-400 active:bg-blue-600 active:border-blue-700 disabled:opacity-50">Button</button>
</Example>
