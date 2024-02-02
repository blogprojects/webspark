<script>
	import Icon from '@iconify/svelte';
</script>

<section id="packages" class="width">
	<div>
		<div class="col-span-2 mt-12">
			<h2 class="text-3xl font-bold tracking-widest text-sky-300 lg:text-4xl">SPECIAL PACKAGES</h2>
			<p class="border-b border-neutral-500 py-2.5 text-lg tracking-wide text-neutral-500">
				Explore our amazing offers, and select what suits your needs
			</p>
		</div>

		<div class="col-span-10 grid-cols-3 gap-12 lg:grid">
			<div
				class="mx-4 my-12 grid h-full place-items-center rounded-sm bg-sky-100 p-8
          text-black shadow-lg drop-shadow hover:shadow-xl md:mx-32 lg:mx-0"
			>
				<div class="w-full border-b border-sky-400 pb-4 text-center">
					<h4 class="mb-2 rounded-sm bg-sky-200 p-2 text-xl font-medium tracking-widest">
						STARTER
					</h4>
					<span class="py-4 text-4xl font-bold lg:text-5xl">$199</span>
				</div>
				<ul class="my-4 font-medium leading-8 lg:my-0">
					<li class="mb-1 text-base font-normal tracking-wider text-neutral-600">
						<p>What's included:</p>
					</li>
					<li class="flex items-center gap-2.5">
						<Icon icon="tabler:circle-check" />
						<p>1 Custom Page</p>
					</li>
					<li class="flex items-center gap-2.5">
						<Icon icon="tabler:circle-check" />
						<p>Modern Responsive Design</p>
					</li>
					<li class="flex items-center gap-2.5">
						<Icon icon="tabler:circle-check" />
						<p>Automatic Security Updates</p>
					</li>
					<li class="flex items-center gap-2.5">
						<Icon icon="tabler:circle-check" />
						<p>Social Networks Integration</p>
					</li>
				</ul>

				<a href="/get-website">
					<button
						class="w-48 rounded-full border-2 bg-black py-2 text-xl
           				font-medium tracking-wide text-white hover:bg-slate-800 active:bg-slate-950"
					>
						Get Website
					</button>
				</a>
			</div>

			<div
				class="mx-4 my-12 grid h-full place-items-center rounded-sm bg-sky-200 p-8
          		text-black shadow-lg drop-shadow hover:shadow-xl md:mx-32 lg:mx-0"
			>
				<div class="w-full border-b border-sky-50 pb-4 text-center">
					<h4 class="mb-2 rounded-sm bg-sky-100 p-2 text-xl font-medium tracking-widest">
						STANDARD
					</h4>
					<span class="py-4 text-4xl font-bold lg:text-5xl"> $499 </span>
				</div>
				<ul class="my-4 font-medium leading-8 lg:my-3">
					<li class="mb-1 text-base font-normal tracking-wider text-slate-800">
						<p>What's included:</p>
					</li>
					<li class="flex items-center gap-2.5">
						<Icon icon="tabler:circle-check" />
						<p>All Starter Package Benefits</p>
					</li>
					<li class="flex items-center gap-2.5">
						<Icon icon="tabler:circle-check" />
						<p>Up to 4 Custom Pages</p>
					</li>
					<li class="flex items-center gap-2.5">
						<Icon icon="tabler:circle-check" />
						<p>1 Year Free Site Hosting</p>
					</li>
					<li class="flex items-center gap-2.5">
						<Icon icon="tabler:circle-check" />
						<p>On-page SEO setup</p>
					</li>
				</ul>

				<a href="/get-website">
					<button
						class="w-48 rounded-full border-2 bg-black py-2 text-xl
           				font-medium tracking-wide text-white hover:bg-slate-800 active:bg-slate-950"
					>
						Get Website
					</button>
				</a>
			</div>

			<div
				class="mx-4 my-12 grid h-full place-items-center rounded-sm border bg-neutral-800
          			bg-opacity-60 p-8 md:mx-32 lg:mx-0"
			>
				<div
					class="flex h-40 w-40 flex-col items-center justify-center gap-2.5
         			 rounded-full border-2 border-gray-200 bg-black bg-opacity-60 p-4 text-white"
				>
					<!-- <BsExclamationDiamondFill size={25} /> -->
					<h4 class="rounded-sm text-center text-xl font-medium tracking-widest">
						CUSTOM <br /> ORDER
					</h4>
				</div>

				<p class="my-8 text-center text-xl lg:my-2">
					Do you have a unique website project tailored to your own custom requirements in mind?
					Let's discuss it, and bring your vision to life.
				</p>

				<a href="#contact">
					<button
						class="w-48 rounded-full border bg-gray-100 py-2 text-xl font-medium
              			tracking-wide text-black hover:bg-slate-300 active:bg-white"
					>
						Contact Us
					</button>
				</a>
			</div>
		</div>
	</div>
</section>
