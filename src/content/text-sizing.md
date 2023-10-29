---
title: Text Sizing
---

# Text Sizing

<script>
  import defaultTheme from 'tailwindcss/defaultTheme';
  import { Example, Playground } from '$lib/components';
</script>

Just like padding, margins, height, and width. There some [defaults](https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/config.full.js#L324-L338) for sizing up text and it's again totally configurable. The other nice part is that Tailwind does try to also adjust the line spacing along with with font size, so you don't have to think about that.

Out of the box, you get the following sizes:

<table>
  <thead>
    <tr>
      <th>Utility Class</th>
      <th>Font Size</th>
      <th>Line Spacing</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>text-xs</code></td>
      <td>0.75rem</td>
      <td>1rem</td>
    </tr>
    <tr>
      <td><code>text-sm</code></td>
      <td>0.875rem</td>
      <td>1.25rem</td>
    </tr>
    <tr>
      <td><code>text-base</code></td>
      <td>1rem</td>
      <td>1.5rem</td>
    </tr>
    <tr>
      <td><code>text-lg</code></td>
      <td>1.125rem</td>
      <td>1.75rem</td>
    </tr>
    <tr>
      <td><code>text-xl</code></td>
      <td>1.25rem</td>
      <td>1.75rem</td>
    </tr>
    <tr>
      <td><code>text-2xl</code></td>
      <td>1.5rem</td>
      <td>2rem</td>
    </tr>
    <tr>
      <td><code>text-3xl</code></td>
      <td>1.875rem</td>
      <td>2.25rem</td>
    </tr>
    <tr>
      <td><code>text-4xl</code></td>
      <td>2.25rem</td>
      <td>2.5rem</td>
    </tr>
    <tr>
      <td><code>text-5xl</code></td>
      <td>3rem</td>
      <td>1</td>
    </tr>
    <tr>
      <td><code>text-6xl</code></td>
      <td>3.75rem</td>
      <td>1</td>
    </tr>
    <tr>
      <td><code>text-7xl</code></td>
      <td>4.5rem</td>
      <td>1</td>
    </tr>
    <tr>
      <td><code>text-8xl</code></td>
      <td>6rem</td>
      <td>1</td>
    </tr>
    <tr>
      <td><code>text-9xl</code></td>
      <td>8rem</td>
      <td>1</td>
    </tr>
  </tbody>
</table>
