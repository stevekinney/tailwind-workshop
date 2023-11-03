---
title: Styling Form State
---

## Styling Form State

<script lang="ts">
	import { Playground } from '$components';
</script>

In [the last section](./variants.md), we looked at styling a button's various states. For this challenge, you're going to look at styling this simple form.

You've got the following variants at your disposal to make use of:

- `hover`
- `valid`
- `invalid`
- `in-range`
- `out-of-range`
- `focus`
- `focus-within`
- `focus-visible`
- `enabled`
- `disabled`
- `required`
- `placeholder-shown`
- `autofill`
- `read-only`
- `active`
- `visited`
- `target`
- `checked`
- `indeterminate`
- `default`

Given [this markup](https://play.tailwindcss.com/F8sJABhqEv), can you style the form to look like the example below?

<Playground title="A Starting Position" id="qwqDt48v8P" height={700} />

Here is what you're aiming for.

<Playground title="A Somewhat Stylized Form" id="78UApQFLOv" height={700} />

And, here is the markup used in the first example.

```html
<form
	onsubmit="event.preventDefault()"
	class="container mx-auto space-y-6 rounded-md border-2 border-purple-600 bg-white p-4 text-purple-950 shadow-md"
>
	<div class="space-y-1">
		<label for="required" class="block text-sm font-semibold">Required Field</label>
		<input id="required" placeholder="Required Field" required />
	</div>

	<div class="space-y-1">
		<label for="disabled" class="block text-sm font-semibold">Disabled Field</label>
		<input id="disabled" placeholder="Disabled Field" disabled />
	</div>

	<div class="space-y-1">
		<label for="input" class="block text-sm font-semibold"> Input Field </label>
		<input id="input" placeholder="Input Field" />
	</div>

	<div class="space-x-1">
		<input id="terms" type="checkbox" />
		<label for="terms">I accept the terms and conditions.</label>
	</div>

	<div class="space-x-2">
		<button>Submit</button>
		<button>Reset</button>
		<button disabled>Disabled</button>
	</div>
</form>
```
