---
title: User Select
---

# User Select

There are a lot of times where you want make it easy for a user to select some text and copy it to the clipboard. The `select-*` utilities classes make it easy for us to make it easy for them.

<div class="flex space-x-8 bg-slate-100 shadow-md not-prose p-4">
  <dl>
    <dt class="font-semibold">Workflow ID</dt>
    <dd>550e8400-e29b-41d4-a716-446655440000</dd>
  </dl>
</div>

You can see that it's a little bit annoying to try to grab the entire UUID.

What would happen if we put `select-all` on the UUID?

<div class="flex space-x-8 bg-slate-100 shadow-md not-prose p-4">
  <dl>
    <dt class="font-semibold">Workflow ID</dt>
    <dd class="select-all">550e8400-e29b-41d4-a716-446655440000</dd>
  </dl>
</div>

Similarly, we can try `select-none`.

<div class="flex space-x-8 bg-slate-100 shadow-md not-prose p-4">
  <dl>
    <dt class="font-semibold">Workflow ID</dt>
    <dd class="select-none">550e8400-e29b-41d4-a716-446655440000</dd>
  </dl>
</div>
