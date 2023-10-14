---
title: Preflight
---

# Preflight

## Global Settings

1. **Box Sizing**: Sets the `box-sizing` property to `border-box` for all elements and their before/after pseudo-elements. This makes it easier to manage layouts as the padding and border are included in the element's total width and height.
2. **Border Reset**: Resets the `border-width`, `border-style`, and `border-color` for all elements to ensure consistent styling.

## HTML and Body

1. **HTML Styling**: Sets various global styles at the HTML level, including line height, font size adjustments, tab size, and font family.
2. **Body Styling**: Resets the body margin to 0 and inherits the line-height from the HTML element.

## Typography

1. **Heading Reset**: Resets the font size and weight for headings (`h1` to `h6`).
2. **Link Reset**: Makes the links inherit their parent's color and removes default text decoration.
3. **Strong and Bold**: Ensures that `b` and `strong` elements render as bolder.
4. **Code Styling**: Sets a monospace font for code blocks and related elements.
5. **Small Text**: Sets a smaller font size for the `small` element.

## Form Elements

1. **Form Control Styling**: Standardizes the appearance and removes browser-specific padding and margins for form elements like `button`, `input`, `select`, etc.

## Misc Elements

1. **Horizontal Rule (hr)**: Sets specific styles for `<hr>` elements.
2. **Abbreviations**: Styles for abbreviation tags with a title attribute.
3. **Subscript and Superscript**: Styles for `sub` and `sup` tags to ensure they don't affect line height.

## Table Styles

1. **Table Defaults**: Standardizes table styling to remove gaps between borders and correct border color inheritance.

## Focus Styles

1. **Focus Ring for Firefox**: Adjusts the focus style in Firefox to use an auto-outline.
2. **Invalid UI for Firefox**: Removes the box-shadow on invalid elements in Firefox.

## Replaced Elements

1. **Replaced Elements (img, svg, etc.)**: Sets these elements to `display: block` and vertically aligns them in the middle. It also ensures they scale properly and maintain aspect ratios.

## Placeholder Styling

1. **Placeholder Text**: Sets a specific opacity and color for placeholder text in input and textarea elements.

## Cursor Settings

1. **Cursor for Buttons**: Makes sure that buttons and role-based buttons have a pointer cursor.

## Hidden Attribute

1. **Hidden Elements**: Sets elements with the `[hidden]` attribute to `display: none`.

This is a pretty thorough CSS utility setup and it seems to be geared towards both normalization and some base styling. Would you like to know more details about any specific section?
