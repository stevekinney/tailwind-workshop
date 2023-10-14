---
title: The @layer Directive
---

# The @layer Directive

The `@layer` CSS at-rule is used to declare a cascade layer, allowing web developers to have more control over the CSS cascade and the order of precedence among multiple cascade layers. Here's a summarized explanation of its key features:

## Syntax

- `@layer layer-name { rules }`: Defines a named layer with CSS rules.
- `@layer layer-name;`: Defines a named layer without any rules.
- `@layer layer-name, layer-name, layer-name;`: Multiple layers can be defined at once.
- `@layer { rules }`: Creates an anonymous layer.

## Key Points

- **Order of Precedence**: Layers initially declared first have lower precedence. The last layer declared takes precedence even if it has lower specificity.
- **Anonymous Layer**: Styles not declared in any layer are put into an anonymous layer, which overrides all other layers regardless of specificity.
- **Nesting Layers**: Layers can be nested within other layers.
- **Appending Rules**: You can add rules to existing layers by re-declaring the layer; this won't change the layer's order.
- **Layer with @import**: Layers can also be defined using the `@import` at-rule.

## Practical Applications

1. **Full Layer Definition**: `@layer utilities { .padding-sm { padding: 0.5rem; } }`
2. **Layer Without Styles**: `@layer utilities;`
3. **Multiple Layers**: `@layer theme, layout, utilities;`
4. **Anonymous Layer**: `@layer { p { margin-block: 1rem; } }`
5. **Nesting**: `@layer framework { @layer layout { } }`

This feature enables more straightforward CSS organization, better control over specificity, and ease of maintaining large codebases.
