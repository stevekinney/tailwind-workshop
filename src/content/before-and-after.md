---
title: Before and After
---

# Before and After

<script lang="ts">
  import { Example, Playground } from '$lib/components';
</script>

Tailwind also provides variants for adding content before and after an element. Unsurprisingly, these map to the `:before` and `:after` pseudo-classes.

<Example>
  <h1 class="before:content-['Before'] after:content-['After'] before:text-red-400 after:text-blue-400 before:mr-4 after:ml-4 before:px-2 after:px-2 before:bg-red-50 after:bg-blue-50 before:rounded after:rounded before:border-2 after:border-2 before:border-red-500 after:border-blue-500">The Actual Content</h1>
</Example>

You can also use the content of an attribue to populate the content of a `before:` or `after:` variant.

<Example highlight="before:content-[attr(before)]">
  <h1 before="Hello" class="before:content-[attr(before)] before:text-red-400  before:mr-4 before:px-2 before:bg-red-50  before:rounded after:rounded before:border-2  before:border-red-500">The Actual Content</h1>
</Example>

## Exercise
