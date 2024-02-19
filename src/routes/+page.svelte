<script>
	import Features from '../components/Features.svelte';
	import Footer from '../components/Footer.svelte';
	import Hero from '../components/Hero.svelte';
	import Packages from '../components/Packages.svelte';
	import Projects from '../components/Projects.svelte';
	import Services from '../components/Services.svelte';
	import Stats from '../components/Stats.svelte';
</script>

<div>
	<Hero />
	<Services />
	<Stats />
	<Packages />
	<Features />
	<Projects />
	<Footer />
</div>

<svelte:head>
	<title>Webspark</title>
	<meta name="description" content="We Build Premium Custom Websites For Businesses" />
</svelte:head>
