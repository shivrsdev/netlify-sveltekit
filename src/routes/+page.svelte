<script lang="ts">
	import type { PageData } from "./$types";

    let { data }: { data: PageData } = $props();
</script>

<h1>Netlify Sveltekit</h1>
<h3>{data.woofCount} people have woofed.</h3>
<form action="?/woof" method="post">
    <button type="submit">Woof</button>
</form>