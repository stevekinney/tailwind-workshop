<script lang="ts">
	export let title: string;
</script>

<div>
	<h3 class="mb-2 mt-0">{title}</h3>
	<ul>
		<slot />
	</ul>
</div>
