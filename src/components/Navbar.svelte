<script>
	import Icon from '@iconify/svelte';
	import MobileMenu from './MobileMenu.svelte';

	const navigation = [
		{ href: '/', title: 'Home' },
		{ href: '/#services', title: 'Services' },
		{ href: '/#packages', title: 'Packages' },
		{ href: '/#projects', title: 'Projects' },
		{ href: '/contact', title: 'Contact' }
	];
</script>

<nav class="width">
	<div class="flex items-center justify-between">
		<a href="/">
			<figure>
				<img src="/main/logo-black.jpg" alt="site logo" class="block w-32" />
			</figure>
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
			<a href="/#packages">
				<button
					class="w-40 rounded-sm border-2 border-sky-300 p-2 font-bold uppercase
              tracking-wider text-sky-300 hover:bg-sky-300 hover:text-black"
				>
					<span>Get Website</span>
				</button>
			</a>
		</div>

		<div class="lg:hidden">
			<MobileMenu />
		</div>
	</div>
</nav>
