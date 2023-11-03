---
title: Columns
---

# Columns

<script>
  import { Playground } from '$components';
</script>

The `columns` CSS shorthard property—and the associated Tailwind class, make it easy to masonry-like layouts like it's 2010 or someting.

<Playground id="qRR1Ho2O6f" title="Columns" height={700} />

We can use [`object-fit`](./object-fit.md) and a `max-h-*` to have a little bit more control over the layout.

<Playground id="YMFPhfCfYK" title="Columns with Object Fit and Maximum Height" height={700} />

We can also specify the desired width of the columns and then let CSS figure out the rest.

<Playground id="Cyz3JfvAbe" title="Columns with Specified Width" height={700} />

## Exercise

Can you turn this schedule into a multi-column layout? Try it with both:

- A certain number of columns
- A certain size of columns

<Playground id="Usd2KXQORk" title="Columns Layout Challenge" height={800} />

<Playground id="eb87kGJyCd" title="A Problematic Solution" solution />

<Playground id="QZtPj358Yo" title="A Better Solution" solution />
