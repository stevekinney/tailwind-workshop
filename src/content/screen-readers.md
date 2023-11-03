---
title: Screen Reader Only
---

# Screen Readers Only

<script lang="ts">
  import { Playground } from '$components';
</script>

Labels are import for accessibility, but sometimes we don't want to show them in our actual design.

Tailwind provides an `sr-only` class that will hide the element _unless_ the user is using a screen reader.

## Exercise

Consider this login form. Can you hide the labels?

<Playground id="YEP6X0OAB2" title="Exercise: Show Labels for Screen Readers Only" height={500} />

<Playground id="76m2N6IhDt" title="Potential Solution" solution />
