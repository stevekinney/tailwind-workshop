---
title: Group Modifier
---

# Group Modifier

<script lang="ts">
  import { Playground } from '$components';
</script>

The "group" modifier in Tailwind CSS is a powerful feature that allows you to conditionally style elements based on their parent's hover, focus, or other states. This is particularly useful for creating more interactive and dynamic components where you want to affect multiple elements within a parent container based on some interaction.

<Playground id="m5ew9QLKju" title="The Group Modifier" height={500} />

## At a High Level

- **Grouping**: You can add the `group` class to a parent container to indicate that it will control the state for its children.
- **Conditional Styling**: Within the children, you can then use classes like `group-hover:`, `group-focus:`, etc., to apply styles when the parent has that particular state.

## Exercise

Let's say we wanted to make a _really_ obnoxious alert like this one:

<div class="not-prose group container space-y-4 rounded border-2 border-slate-100 bg-slate-50 p-4 shadow-md hover:border-purple-600 hover:bg-purple-500 my-6">
  <h3 class="text-2xl font-semibold text-purple-500 group-hover:text-white">Important Announcement</h3>
  <p class="group-hover:text-purple-200">Attention, esteemed user! In the swirling vortex of our digital realm, a click on "log out" now will seal your fate with the ancient curse of 'Eternal Banishment.' Yes, dare to exit and you shall become a digital ghost, wandering the shadowy halls of the Internet, forever longing for the warm embrace of the login screen. Beware, for not even the mightiest password reset can break this spell. So, choose wisely, stay awhile and linger in the land of the logged-in, lest you wish to be a legend, a whisper on the Wi-Fi winds. Log out now, and 'Access Denied' becomes your eternal echo!</p>
  <button class="rounded border-2 border-current bg-inherit px-2 py-1 text-purple-600 hover:bg-purple-300 hover:text-purple-700 group-hover:text-white">I Understand</button>
</div>

You can start with this example and build from there.

<Playground id="GJsMakvCtJ" title="Starter Kit" />

<Playground id="DF0AoDsjL2" title="A Possible Solution" solution />

## When to Use

- **Interactive Components**: If you have a card, for example, where hovering over it should change the text color and border, you can use `group` on the card and then set `group-hover:` on the text and border.
- **Menu Items**: For dropdown menus where hovering over a parent item should reveal or change styles on child items.
- **Form Elements**: When you want to visually highlight related labels, inputs, and text when a user focuses on a form input.

## Trade Offs and Other Things to Consider

- **Specificity**: Using the group modifier increases specificity, which could make it challenging to override styles with normal utility classes.
- **Debugging**: Because the styling is contingent on the parent's state, it can sometimes be a little harder to debug why certain styles are or are not being applied.
