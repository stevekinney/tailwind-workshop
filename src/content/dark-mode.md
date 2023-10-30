---
title: Dark Mode
---

# Dark Mode

Enabling dark mode in a Tailwind CSS project involves a few steps. Let's get into it.

## Configuration

First, you need to configure dark mode in your `tailwind.config.js` file. Here's how you can enable it:

```javascript
// tailwind.config.js
module.exports = {
	darkMode: 'class' // This can also be 'media' if you prefer to use the OS setting of the user
	// rest of the config
};
```

Here, `class` means you'll be using a specific CSS class to toggle dark mode. Alternatively, if you set `media`, Tailwind will use the `prefers-color-scheme` media query to automatically set the theme based on the user's system settings.

## Toggling Dark Mode

## If You're Using `class`

You'll need to add or remove the `.dark` class to your `<html>` or `<body>` tag based on user actions or preferences. This could be done via JavaScript:

```javascript
// To enable dark mode
document.documentElement.classList.add('dark');

// To disable dark mode
document.documentElement.classList.remove('dark');
```

## If You're Using `media`

No additional steps are needed, as the browser or operating system's dark mode setting will automatically trigger the dark styles.

## Applying Dark Styles

With dark mode enabled, you can now use the `dark:` variant before any standard utility to apply it only when dark mode is active. Here's an example:

```html
<div class="bg-white dark:bg-gray-800">
	<p class="text-gray-900 dark:text-white">This is a dark-mode-friendly element.</p>
</div>
```

In this example, the `<div>` will have a white background (`bg-white`) and the text will be almost black (`text-gray-900`) in light mode. In dark mode, the background will switch to almost black (`bg-gray-800`) and the text to white (`text-white`).

## Best Practices

Here are some best practices that you didn't ask for:

- **User Preference**: Consider providing a toggle that lets users switch between dark and light modes, regardless of their system settings.
- **Contrast**: Ensure that your dark mode color choices are accessible and high-contrast.
- **Test**: Thoroughly test all your components and layouts in both light and dark modes to ensure readability and usability.
