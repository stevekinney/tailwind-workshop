---
title: Styling a Button
---

# Styling a Button

<script lang="ts">
  import { Playground, Example } from '$components';
</script>

We've already covered the fact that [Preflight's base styles don't exactly give us a lot to work with.](./preflight.md) Consider this basic button for a monent.

<Playground title="An Unstyled Button" id="q3YDQFy7VC" />

I _could_ make you slog through every single utility class, but that feels rude. So, why don't we take a quick tour through some of the greatest hits.

## Setting the Text and Background Color

Tailwind provides us utility classes for setting a background color. The format is
`bg-{color}-{shade}`. Let's add a blue background.

<Example>
  <button class="bg-blue-500">Button</button>
</Example>

We can also set the text color using `text-{color}-{shade}`.

<Example>
  <button class="bg-blue-500 text-white">Button</button>
</Example>

## Adding Padding

We probably also want to add some padding, right?

<Example>
  <button class="bg-blue-500 text-white p-4">Button</button>
</Example>

Our button is looking a little square-ish. Let's make the padding a little different on the top and bottom.

<Example>
  <button class="bg-blue-500 text-white px-4 py-2">Button</button>
</Example>

## Rounding Corners

How about some rounded corners? Everybody loves rounded corners.

<Example>
  <button class="bg-blue-500 text-white px-4 py-2 rounded">Button</button>
</Example>

## Adding a Border

We can add a border using `border-{width}`.

<Example highlight="border-2">
  <button class="bg-blue-500 text-white px-4 py-2 rounded border-2">Button</button>
</Example>

But, that's looking a little gray. We should give that border some color. To no one's surpise, we can set the border using `border-{color}-{shade}`.

<Example highlight="border-blue-700">
  <button class="bg-blue-500 text-white px-4 py-2 rounded border-2 border-blue-700">Button</button>
</Example>

## Adding a Shadow

Just for extra effect, let's add a little shadow to our button.

<Example highlight="shadow-md">
  <button class="bg-blue-500 text-white px-4 py-2 rounded border-2 border-blue-700 shadow-md">Button</button>
</Example>
