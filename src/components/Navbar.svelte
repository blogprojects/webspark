<script>
	import MobileMenu from './MobileMenu.svelte';

	const navigation = [
		{ href: '/', title: 'Home' },
		{ href: '/#services', title: 'Services' },
		{ href: '/#packages', title: 'Packages' },
		{ href: '/#projects', title: 'Projects' }
	];
</script>

<nav class="width">
	<div class="flex items-center justify-between">
		<a href="/">
			<div class="flex items-center justify-center space-x-2">
				<img src="/logo.jpg" alt="site logo" class="block w-10 rounded-full" />
				<p class="text-xl font-medium tracking-widest text-gray-200">WEBSPARK</p>
			</div>
		</a>

		<ul class="hidden space-x-8 lg:flex">
			{#each navigation as link}
				<li
					class="font-semibold uppercase tracking-widest text-gray-50 underline-offset-8 hover:text-sky-300 hover:underline"
				>
					<a href={link.href}>{link.title}</a>
				</li>
			{/each}
		</ul>

		<div class="hidden lg:block">
			<a href="/contact">
				<button
					class="rounded-sm border-2 border-sky-300 px-6 py-2 font-bold uppercase
              tracking-wider text-sky-300 hover:bg-sky-300 hover:text-black"
				>
					<span>Get A Free Quote</span>
				</button>
			</a>
		</div>

		<div class="lg:hidden">
			<MobileMenu />
		</div>
	</div>
</nav>
