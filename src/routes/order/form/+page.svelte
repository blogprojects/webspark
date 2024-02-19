<script>
	import { onMount } from 'svelte';

	onMount(() => {
		const script = document.createElement('script');
		script.src = 'https://tally.so/widgets/embed.js';
		script.async = true;
		document.head.appendChild(script);
	});
</script>

<section>
	<iframe
		class="bg-white"
		data-tally-src="https://tally.so/r/wALDeN?transparentBackground=1"
		width="100%"
		height="100%"
		frameborder="0"
		marginheight="0"
		marginwidth="0"
		title="Website Order Form"
	></iframe>
</section>

<style>
	section {
		margin: 0;
		height: 100%;
		overflow: hidden;
	}
	iframe {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		border: 0;
	}
</style>
