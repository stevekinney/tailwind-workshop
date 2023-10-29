---
title: Styling Form State
---

## Styling Form State

In [the last section](./variants.md), we looked at styling a button's various states. For this challenge, you're going to look at styling this simple form.

You've got the following variants at your disposal to make use of:

- `hover`
- `active`
- `focus`
- `disabled`
- `required`
- `checked`

Given [this markup](https://play.tailwindcss.com/149rX8ty7v), can you style the form to look like the example below?

```html
<form
	onsubmit="event.preventDefault()"
	class="container mx-auto space-y-6 rounded-md border-2 border-purple-400 bg-white p-4 shadow-md"
>
	<div>
		<label class="block">Required Field</label>
		<input placeholder="Required Field" required />
	</div>

	<div>
		<label class="block">Disabled Field</label>
		<input placeholder="Disabled Field" disabled />
	</div>

	<div>
		<label class="block">Input Field</label>
		<input placeholder="" disabled />
	</div>

	<div>
		<input type="checkbox" />
		I accept the terms and conditions.
	</div>

	<div class="space-x-4">
		<button>Submit</button>
		<button>Reset</button>
	</div>
</form>
```
