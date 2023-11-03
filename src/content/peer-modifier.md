---
title: Peer Modifier
---

# Peer Modifier

<script>
  import { Example, Playground } from '$components';
</script>

In Tailwind CSS, the `peer` modifier is designed to style an element based on the state of a "sibling" element. This makes it particularly useful for creating user interfaces where the appearance of an element should change based on user interactions with another element on the same DOM level.

## At a High Level

- **Peering**: You apply the `peer` class to an element that you want to "watch" for state changes like `focus`, `hover`, etc.
- **Conditional Styling**: On the sibling element you wish to style, you can use classes like `peer-hover:`, `peer-focus:`, etc., to apply styles when the "peer" element has a particular state.

Let's look at the example of a label related to a form element.

<Playground id="bbwGISO078" title="A Peer Error Message" />

```html
<div class="space-y-1">
	<label for="input" class="block text-sm font-semibold">Email Address</label>
	<input
		id="input"
		type="email"
		class="peer block w-full rounded-md border-2 border-purple-400 p-2 placeholder-purple-400 caret-purple-600 outline-none ring-purple-300 invalid:border-red-500 focus:border-purple-500 focus:ring-4 disabled:cursor-not-allowed disabled:border-purple-300 disabled:bg-purple-50"
		placeholder="Input Field"
	/>
	<p class="invisible text-red-600 peer-invalid:visible peer-focus:invisible">
		Must be a valid email address.
	</p>
</div>
```

**Important Note** Peer can only be used on future siblings. It doesn't work on elements that come before. That said, if the label comes after, then you can style it.

<Playground title="Style a Checkbox Label Based on State" id="5huZWlfrXb" />

## When to Use

- **Form Elements**: One common use case is styling labels based on whether an adjacent input field is focused or filled. For example, you might want the label's text to change color when the input is focused.
- **Interactive Components**: Similar to the `group` modifier but more localized. For example, you might have a button next to a piece of text, and you want the text to change when the button is hovered over.
- **Custom Checkboxes/Radio Buttons**: You can use the `peer` modifier to style a custom checkbox or radio button based on whether the actual (and possibly hidden) HTML input is checked.

## Trade Offs and Other Things to Consider

- **Sibling Requirement**: Both the peer and the element being styled have to be siblings in the DOM. This might limit how you structure your HTML.
- **Specificity**: Like the `group` modifier, using the `peer` modifier also increases specificity, so it might be harder to override styles.
- **Debugging**: Understanding which elements are peers and which styles are being applied conditionally can add a layer of complexity to your debugging process.
