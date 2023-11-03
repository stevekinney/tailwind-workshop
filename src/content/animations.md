---
title: Animations
---

# Animations

<script>
  import { Example } from '$components';
</script>

Tailwind comes with a few built-in animations that you can use.

## Pulse

The pulse animation is super useful for displaying loading content.

<Example highlight="animate-pulse">
  <div class="animate-pulse flex space-x-4">
    <div class="rounded-full bg-slate-400 h-10 w-10"></div>
    <div class="flex-1 space-y-6 py-1">
      <div class="h-2 bg-slate-400 rounded"></div>
      <div class="space-y-3">
        <div class="grid grid-cols-3 gap-4">
          <div class="h-2 bg-slate-400 rounded col-span-2"></div>
          <div class="h-2 bg-slate-400 rounded col-span-1"></div>
        </div>
        <div class="h-2 bg-slate-400 rounded"></div>
      </div>
    </div>
  </div>
</Example>

You can also make stuff spin. Could I have used a more traditional spinner here? Sure. Did I think this was funnier? Also yes.

## Spin

<Example highlight="animate-spin">
  <div class="animate-spin inline-block text-6xl">
    🙄
  </div>
</Example>

## Pulse

<Example highlight="animate-ping">
  <div class="animate-ping inline-block text-6xl">
    🙄
  </div>
</Example>

## Bounce

<Example highlight="animate-bounce">
  <div class="animate-bounce inline-block text-6xl">
    🙄
  </div>
</Example>
