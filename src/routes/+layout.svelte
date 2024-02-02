<script>
	import Navbar from '../components/Navbar.svelte';
	import '../index.css';
</script>

<div class="bg-black text-white">
	<header class="border-b border-gray-500">
		<Navbar />
	</header>

	<main>
		<slot />
	</main>
</div>
