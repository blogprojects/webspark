<script>
	import Icon from '@iconify/svelte';
</script>

<section class="width lg:h-screen">
	<div class="justify-between space-x-12 rounded-sm py-10 lg:flex">
		<div class="rounded-sm bg-sky-300 px-6 py-8 text-black lg:w-1/4">
			<h2
				class="text-gray mb-4 pb-4 text-3xl
                    font-bold tracking-widest lg:text-4xl"
			>
				OUR WORK PROCESS
			</h2>

			<p>
				At Webspark, transparency is at the core of what we do. We encourage all our prospective
				clients to get familiar with our working process to ensure we are all on the same page from
				start to finish.
			</p>

			<a
				href="/order/form"
				class="mt-10 flex items-center justify-center space-x-4 rounded-sm border-2 border-white
                 bg-gray-800 p-4 text-xl font-bold text-white hover:bg-black"
			>
				<button class="tracking-wider"> GET STARTED </button>
				<span>
					<Icon icon="solar:map-arrow-right-bold" />
				</span>
			</a>
		</div>

		<div class="col-span-10 lg:w-3/4">
			<ul class="md:grid md:grid-cols-2 lg:grid-cols-3">
				<li class="p-6">
					<h3
						class="my-6 inline-block rounded-full bg-sky-300 px-5 py-3 text-4xl font-bold text-black"
					>
						1
					</h3>
					<p class="text-lg font-medium tracking-wide">
						Select your preferred package. Get the starter or professional website.
					</p>
				</li>

				<li class="p-6">
					<h3
						class="my-6 inline-block rounded-full bg-sky-300 px-5 py-3 text-4xl font-bold text-black"
					>
						2
					</h3>
					<p class="text-lg font-medium tracking-wide">
						Fill out the order form. Provide all the information to be added to your site
					</p>
				</li>

				<li class="p-6">
					<h3
						class="my-6 inline-block rounded-full bg-sky-300 px-5 py-3 text-4xl font-bold text-black"
					>
						3
					</h3>
					<p class="text-lg font-medium tracking-wide">
						Make an initial payment of $99. This serves as a down-payment commitment
					</p>
				</li>

				<li class="p-6">
					<h3
						class="my-6 inline-block rounded-full bg-sky-300 px-5 py-3 text-4xl font-bold text-black"
					>
						4
					</h3>
					<p class="text-lg font-medium tracking-wide">
						The website development process is initiated. This should take 5 days at most.
					</p>
				</li>

				<li class="p-6">
					<h3
						class="my-6 inline-block rounded-full bg-sky-300 px-5 py-3 text-4xl font-bold text-black"
					>
						5
					</h3>
					<p class="text-lg font-medium tracking-wide">
						Review the finished website, and proceed to complete the final payment.
					</p>
				</li>

				<li class="p-6">
					<h3
						class="my-6 inline-block rounded-full bg-sky-300 px-5 py-3 text-4xl font-bold text-black"
					>
						6
					</h3>
					<p class="text-lg font-medium tracking-wide">
						Website launch and handover. You get full owner access to the code and backend.
					</p>
				</li>
			</ul>
		</div>

		<a
			href="/order/form"
			class="mt-10 flex items-center justify-center space-x-4 rounded-sm border-2 border-white
		 bg-gray-800 p-4 text-xl font-bold text-white hover:bg-black lg:hidden"
		>
			<button class="tracking-wider"> GET STARTED </button>
			<span>
				<Icon icon="solar:map-arrow-right-bold" />
			</span>
		</a>
	</div>
</section>
