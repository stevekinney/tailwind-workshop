---
title: Performance
---

# Performance

Performance considerations are essential for any front-end framework, and Tailwind CSS is no exception. Here are some points to consider:

## File Size

1. **Purge Unused Styles**: One of the most important features Tailwind offers is the ability to purge unused styles. This can drastically reduce the size of your production CSS file. Make sure you configure the purge option correctly in your `tailwind.config.js` file.
2. **JIT Mode**: Tailwind’s Just-in-Time (JIT) mode compiles your utility classes on-demand, ensuring that only the styles you use are included in your build, offering a great performance benefit.

## Build Time

1. **Optimization**: If you find that your build time is slow, you might want to look into optimizing your PostCSS configuration or only enabling the plugins you actually need.
2. **Incremental Builds**: Some build tools support incremental builds, which can improve build times by only recompiling changed files.

## Best Practices

1. **Avoid `@apply` Overuse**: The `@apply` directive is useful but can result in duplicated styles if used excessively, increasing the CSS file size.
2. **Mobile-First**: Tailwind is designed to be mobile-first, so make sure you understand how its responsive utility classes work to avoid unnecessary overrides.
3. **Tree Shaking**: Ensure your build process is set up to remove any unused CSS or JS code, beyond what Tailwind already does.

## Monitoring

1. **Performance Audits**: Regularly run performance audits using tools like Google Lighthouse to monitor the real-world impact of your styles.
2. **Real User Metrics (RUM)**: Consider gathering performance data from real users to understand how your site performs in various conditions.
