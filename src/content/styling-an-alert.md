---
title: Styling an Alert
---

# Styling an Alert

<script lang="ts">
  import { Playground } from '$components';
</script>

Alright, let's take everything we've looked at so far and see if we can pull it together into making a little alert or modal or whatever you deem worthy to call it. We'll improve on this as we go along, but—for starters—this is what we're going for.

Your starting point can be found [here](https://play.tailwindcss.com/QBodHAvVBk).

```html
<div>
	<h1>An Important Alert</h1>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in metus ornare, volutpat mauris
		sit amet, ornare est. Praesent massa nulla, lacinia sit amet neque sed, ornare porttitor ante.
		Nunc vulputate ultrices sollicitudin. Quisque in tristique felis, vel blandit felis. Aliquam ut
		vestibulum massa. Proin at lectus in risus ultrices interdum a fringilla nisi. Maecenas
		tristique augue at pretium consectetur.
	</p>
	<div>
		<button>Confirm</button>
		<button>Cancel</button>
	</div>
</div>
```

**Nota bene**: You don't have to match the colors exactly, but if you did want to, I'm using `purple-600` for the heading and `purple-400` for the buttons. But, these were just random values that I picked and I don't feel strongly about them.

<Playground id="38Nex02hmh" title="The Goal" height={500} />

You can see the solution [here](https://play.tailwindcss.com/38Nex02hmh).
