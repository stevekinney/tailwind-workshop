---
title: What is Tailwind and Why Would I Use It?
---

# What is Tailwind and Why Would I Use It?

## What is [Tailwind CSS](https://tailwindcss.com)?

The core idea behind Tailwind is to give developers a little bit more freedom by providing [utility classes](/utility-first)—short CSS snippets for specific styling like background color, margins, and fonts. Instead of offering generic, hard-to-modify components, Tailwind encourages developers to create unique designs directly in their HTML markup.

It's a somewhat controversial, but also super powerful pattern.

## Key Features in Architecture

- **Configurable Design System**: Tailwind is powered by a central `tailwind.config.js` file where you can set design variables like colors, fonts, and breakpoints.
- **Utility Generation**: Based on this config file, Tailwind auto-generates a myriad of utility classes to handle nearly every design requirement.
- **PurgeCSS Integration**: To avoid bloating the CSS, Tailwind integrates with PurgeCSS, removing unused styles during production builds.
- **Plugin Architecture**: Extensibility is a major plus, with plugins letting you add custom utilities and design variants.
- **Just-In-Time (JIT) Mode**: This newer feature generates utility classes on-the-fly, improving build performance and allowing for more dynamic styling options like hover and focus states.
