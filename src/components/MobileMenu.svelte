<script>
	// @ts-nocheck

	import Icon from '@iconify/svelte';

	const navigation = [
		{ href: '/', title: 'Home' },
		{ href: '/services', title: 'Services' },
		{ href: '/packages', title: 'Packages' },
		{ href: '/projects', title: 'Projects' },
		{ href: '/contact', title: 'Contact' }
	];
</script>

<div class="flex">
	<input type="checkbox" id="drawer-toggle" class="peer sr-only relative" />

	<button class="mb-1.5 inline-block text-3xl text-gray-50 hover:text-gray-50">
		<label for="drawer-toggle">
			<Icon icon="tabler:menu-deep" />
		</label>
	</button>

	<div
		class="fixed left-0 top-0 z-20 h-full w-full -translate-y-full transform bg-black
      p-12 text-white transition-all duration-500 peer-checked:translate-y-0"
	>
		<div class="w-full text-right text-5xl">
			<button class="hover:text-gray-50">
				<label for="drawer-toggle">
					<Icon icon="eva:close-outline" />
				</label>
			</button>
		</div>

		<ul class="my-12 grid place-content-center">
			{#each navigation as link}
				<li
					class="py-4 text-4xl font-bold uppercase underline-offset-8 hover:text-gray-50 hover:underline"
				>
					<a
						href={link.href}
						on:click={() => (document.getElementById('drawer-toggle').checked = false)}
					>
						{link.title}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</div>
