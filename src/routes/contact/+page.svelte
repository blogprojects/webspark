<script>
	// @ts-nocheck

	import { onMount } from 'svelte';

	// Function to load Tally embeds
	const loadTallyEmbeds = () => {
		if (typeof Tally !== 'undefined') {
			Tally.loadEmbeds();
		} else {
			document.querySelectorAll('iframe[data-tally-src]:not([src])').forEach((element) => {
				element.src = element.dataset.tallySrc;
			});
		}
	};

	// Load Tally embeds on component mount
	onMount(() => {
		const tallyScriptSrc = 'https://tally.so/widgets/embed.js';
		if (!document.querySelector(`script[src="${tallyScriptSrc}"]`)) {
			const script = document.createElement('script');
			script.src = tallyScriptSrc;
			script.onload = loadTallyEmbeds;
			script.onerror = loadTallyEmbeds;
			document.body.appendChild(script);
		} else {
			loadTallyEmbeds();
		}
	});
</script>

<section class="width">
	<div class="mx-auto max-w-5xl">
		<iframe
			class="bg-black text-white"
			src="https://tally.so/r/3xay1o?transparentBackground=1"
			width="100%"
			height="100%"
			frameborder="0"
			marginheight="0"
			marginwidth="0"
			title="Send Us A Message"
		></iframe>
	</div>
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
