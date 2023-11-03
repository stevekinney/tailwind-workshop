---
title: Using @apply
---

# Using @apply

**Short Version**: `@apply` let's you compose [utility classes](./utility-first.md).

```css
h1 {
	@apply mb-6 text-2xl;
}
```

You could also accomplish the same thing using something like this:

```css
h1 {
	margin-bottom: theme(space.6);
	font-size: theme(fontSize.2xl);
}
```

It's useful when you've got a third-party library, that is expecting certain classes. (I'm looking at you, [Select2](https://select2.org/)) _and_ you want to use Tailwind.

I'm not here to fight about this, so I'll just leave [this tweet from Tailwind's creator, Adam Wathan](https://twitter.com/adamwathan/status/1226511611592085504?lang=en), here:

> Confession: The `apply` feature in Tailwind basically only exists to trick people who are put off by long lists of classes into trying the framework.
>
> You should almost never use it 😬. Reuse your utility-littered HTML instead.

## Pros of Using `@apply`:

1. Consolidates multiple utility classes into one, making HTML cleaner.
2. Can be used recursively, i.e., you can `@apply` within another `@apply` directive.

## Cons of Using `@apply`:

1. Sacrifices some of the benefits of utility-first CSS like easy maintainability.
2. Requires naming the new components, which can create disagreements among developers.
3. Overriding these styles can become difficult.
4. May not provide immediate clarity to developers who didn't create the custom classes.

The article also argues that if you're using a component-based frontend framework like Vue, React, or Angular, you're generally better off creating reusable components instead of using `@apply`. This approach allows you to encapsulate both structure and style, making your code more maintainable.

Furthermore, the article suggests that you should evaluate whether you genuinely have a problem with repeated classes. Often, what looks like repetition may not be, and using `@apply` might create more issues than it solves. The extra weight and complexity could be avoidable.

## Final Verdict

Use `@apply` only if you're sure that it solves specific maintainability issues you're facing and if you're not using a framework that already offers a more robust solution for component reuse.
