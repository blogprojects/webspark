<script>
	import Icon from '@iconify/svelte';
</script>

<section class="width mt-8 lg:mt-0 lg:grid lg:h-[88vh]">
	<div class="items-center justify-center lg:flex">
		<div class="lg:w-1/2">
			<h1 class="text-5xl font-semibold xl:text-6xl">
				<span
					class="inline-block bg-gradient-to-r from-sky-300 via-sky-200 to-white
            bg-clip-text font-bold text-transparent"
				>
					We Build Premium <br /> Custom Websites <br /> For Businesses
				</span>
			</h1>

			<p class="my-8 text-xl text-neutral-300 md:w-3/4 lg:w-4/5">
				Unlock your digital potential. Let us create your dream website, and get you closer to your
				goals.
			</p>

			<a
				href="/#packages"
				class="flex w-80 items-center justify-center space-x-4 rounded-sm border-2 border-white bg-sky-300 p-4 text-xl font-bold
				tracking-wider text-black hover:border-b-4 hover:bg-sky-100"
			>
				<button> START A PROJECT </button>
				<span>
					<Icon icon="solar:map-arrow-right-bold" />
				</span>
			</a>
		</div>

		<div class="items-center lg:flex lg:w-1/2 lg:pl-12">
			<img
				src="/main/bg-image.jpg"
				alt="laptop_img"
				class="mt-20 block rounded-sm object-cover md:w-1/2 lg:mt-0 lg:w-4/5"
			/>

			<div
				class="relative bottom-48 z-10 mx-4 rounded-sm border-8 border-black bg-gradient-to-r from-sky-950 via-sky-900 to-sky-800 p-6 text-white
        md:bottom-72 md:left-72 md:w-96 lg:absolute lg:bottom-auto lg:left-auto lg:right-24 lg:mx-0"
			>
				<p
					class="my-2.5 rounded-sm bg-black p-4 text-[1.385rem] font-semibold tracking-wide text-white"
				>
					Making Quality Web Solutions Accessible
				</p>
				<p class="mt-4 text-lg">
					We understand the unique challenges faced by businesses on a tight budget, and provide
					affordable starter websites to help boost your visiblity and growth.
				</p>
			</div>
		</div>
	</div>
</section>
