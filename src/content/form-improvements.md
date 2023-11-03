---
title: Further Form Improvements
---

# Further Form Improvements

<script>
  import { Example, Playground } from '$components';
</script>

There are a bunch of other little improvements that we can do to our form elements. Let's take it step by step.

## Getting Rid of the Focus Outline

<Example>
  <input class="block w-full rounded-md border-2 border-purple-400 p-2 focus:border-purple-500 disabled:border-purple-300 disabled:bg-purple-50" placeholder="Input Field" />
</Example>

We can get rid of that using `outline-none`.

<Example highlight="outline-none">
  <input class="block w-full rounded-md border-2 border-purple-400 p-2 focus:border-purple-500 disabled:border-purple-300 disabled:bg-purple-50 outline-none" placeholder="Input Field" />
</Example>

Instead, we can use the `ring-` classes to give it a better looking outline that matches our aesthetic.

<Example highlight="focus:ring-4 ring-purple-300">
  <input class="block w-full rounded-md border-2 border-purple-400 p-2 focus:border-purple-500 focus:ring-4 ring-purple-300 disabled:border-purple-300 disabled:bg-purple-50 outline-none" placeholder="Input Field" />
</Example>

Disabled fields can't be focused, so we don't have to worry too much about the focus ring in that case.

<Example highlight="focus:ring-4 ring-purple-300">
  <input class="block w-full rounded-md border-2 border-purple-400 p-2 focus:border-purple-500 focus:ring-4 ring-purple-300 disabled:border-purple-300 disabled:bg-purple-50 outline-none" placeholder="Disabled Field" disabled />
</Example>

## Styling the Placeholder Text

It's possible to style the placeholder text.

<Example highlight="placeholder-purple-400">
  <input class="block w-full rounded-md border-2 border-purple-400 p-2 focus:border-purple-500 focus:ring-4 ring-purple-300 disabled:border-purple-300 disabled:bg-purple-50 outline-none placeholder-purple-400" placeholder="Input Field" />
</Example>

## Caret and Accent Colors

In fact, we can even style the color of the caret in the input field.

<Example highlight="caret-purple-700">
  <input class="block w-full rounded-md border-2 border-purple-400 p-2 focus:border-purple-500 focus:ring-4 ring-purple-300 disabled:border-purple-300 disabled:bg-purple-50 outline-none placeholder-purple-400 caret-purple-600" placeholder="Input Field" />
</Example>

We can even style our checkboxes.

<Example highlight="caret-purple-700">
  <input class="accent-purple-700" type="checkbox" />
</Example>

This even works for radio buttons as well.

<Example highlight="caret-purple-700">
  <input class="accent-purple-700" type="radio" />
</Example>

## Valid and Invalid States

It may also be helpful to be able to style an element by whether or not the input is valid.

<Example highlight="invalid:border-red-400">
  <input type="email" class="block w-full rounded-md border-2 border-purple-400 p-2 focus:border-purple-500 focus:ring-4 ring-purple-300 disabled:border-purple-300 disabled:bg-purple-50 outline-none placeholder-purple-400 caret-purple-600
  invalid:border-red-400" placeholder="Input Field" />
</Example>

The opposite is also possible, you can style a form element if it's valid. You see this one a little less often.

<Example highlight="valid:border-green-500">
  <input type="email" required class="block w-full rounded-md border-2 border-purple-400 p-2 focus:border-purple-500 focus:ring-4 ring-purple-300 disabled:border-purple-300 disabled:bg-purple-50 outline-none placeholder-purple-400 caret-purple-600
  valid:border-green-500"
  value="hello@example.com"
  placeholder="Input Field" />
</Example>

## Cursors

We can customize the cursor as well using CSS.

<Example highlight="disabled:cursor-not-allowed">
  <input disabled class="block w-full rounded-md border-2 border-purple-400 p-2 placeholder-purple-400 caret-purple-600 outline-none ring-purple-300 valid:border-green-500 focus:border-purple-500 focus:ring-4 disabled:cursor-not-allowed disabled:border-purple-300 disabled:bg-purple-50" placeholder="Input Field" />
</Example>

## Exercise

Remember that form we styled earlier? Let's build on it a bit. [Here](https://play.tailwindcss.com/k7fPoV007m)'s something close to what we ended up with last time:

<Playground id="k7fPoV007m" title="A Form That Could Be Improved" height={700} />

Can you add the following:

- An accent color for the check box.
- Style the placeholder and caret.
- Remove the default outline from the input.
- Add a ring to the input when focused.
- Add a green border to the required field if it's valid.
