---
title: Using @apply
---

# Using @apply

**Pros of Using `@apply`**:

1. Consolidates multiple utility classes into one, making HTML cleaner.
2. Can be used recursively, i.e., you can `@apply` within another `@apply` directive.

**Cons of Using `@apply`**:

1. Sacrifices some of the benefits of utility-first CSS like easy maintainability.
2. Requires naming the new components, which can create disagreements among developers.
3. Overriding these styles can become difficult.
4. May not provide immediate clarity to developers who didn't create the custom classes.

The article also argues that if you're using a component-based frontend framework like Vue, React, or Angular, you're generally better off creating reusable components instead of using `@apply`. This approach allows you to encapsulate both structure and style, making your code more maintainable.

Furthermore, the article suggests that you should evaluate whether you genuinely have a problem with repeated classes. Often, what looks like repetition may not be, and using `@apply` might create more issues than it solves. The extra weight and complexity could be avoidable.

**Final Verdict**: Use `@apply` only if you're sure that it solves specific maintainability issues you're facing and if you're not using a framework that already offers a more robust solution for component reuse.
