<script>
	// @ts-nocheck

	import Icon from '@iconify/svelte';
	import Footer from '../../components/Footer.svelte';

	export let data;

	const post = data.props.post.post;
</script>

<div class="width">
	<div
		class="mb-8 items-center justify-evenly gap-10 rounded-md from-black to-neutral-800 p-4 py-8 md:flex lg:bg-gradient-to-br"
	>
		<h1 class=" text-4xl font-bold leading-9 text-sky-300 md:w-1/2 lg:text-6xl">
			{post.title}
		</h1>

		<img src="/business.jpg" alt="Business website" class="mt-8 rounded-md md:w-1/3" />
	</div>

	<article class="my-20">
		<div class="items-center justify-between gap-8 lg:flex">
			<div class="lg:w-1/2">
				<p class="my-4">
					Establishing a strong online presence is important for any company looking to reach a wide
					audience. However, for {post.business} operating on tight budgets, investing in a good website
					can be costly. At Webspark, we specialize in bridging this gap by offering cost-effective website
					solutions tailored to the specific needs of small to mid-scale {post.business}.
				</p>

				<p class="my-4">
					We understand that not every business requires a complex and expensive website loaded with
					features they may never use. Our approach is to provide simple yet effective custom
					website solutions that offer the online exposure needed, without incurring exorbitant
					costs. We believe in transparency and affordability, and helping businesses thrive.
				</p>
			</div>

			<img
				src="/web.svg"
				alt="website devices"
				class="my-12 block w-full object-cover p-8 lg:my-0 lg:w-1/3 lg:p-0"
			/>
		</div>

		<div class="mt-8 flex-row-reverse items-center justify-between gap-8 lg:flex">
			<div class="lg:w-1/2">
				<p class="my-4">
					The starter and professional packages we offer are ideal for {post.business} looking to get
					a modern website without breaking the bank. These packages include essential features such
					as a homepage, about us page, contact form, and basic SEO optimization to help businesses get
					found online. For those seeking more advanced solutions, our custom packages offer additional
					features and options to help businesses stand out online.
				</p>
				<p class="my-4">
					Our goal is to make it easy and accessible for businesses of all sizes to obtain premium
					websites at budget-friendly rates, without compromising on quality. Whether it's a simple
					one-page website or a fully customized e-commerce platform, we have the expertise to bring
					our clients' visions to life.
				</p>
			</div>

			<img
				src="/site.svg"
				alt="website devices"
				class="my-12 block w-full object-cover p-8 lg:my-0 lg:w-1/3"
			/>
		</div>
	</article>

	<div
		class="mb-32 mt-20 rounded-md bg-gradient-to-br from-sky-950 via-sky-900 to-sky-700 px-4 py-12 lg:py-20"
	>
		<div class="items-center justify-center gap-8 lg:flex">
			<p
				class="relative text-center text-2xl font-semibold md:w-1/2 lg:text-left lg:text-3xl lg:leading-9 lg:tracking-wide"
			>
				Interested in a quality website for your business? We've got you covered.
			</p>

			<div
				class="mt-8 flex flex-col items-center justify-center gap-4 text-lg font-bold lg:mt-0 lg:flex-row"
			>
				<a href="/#packages">
					<button
						class="rounded-full border-2 border-sky-50 bg-sky-50 px-6 py-3 uppercase
						text-black hover:bg-sky-200"
					>
						View Special Packages
					</button>
				</a>

				<a href="/contact">
					<button
						class="rounded-full border-2 border-white px-6 py-3 uppercase hover:bg-sky-200 hover:text-black"
					>
						Contact Us
					</button>
				</a>
			</div>
		</div>
	</div>

	<Footer />
</div>

<svelte:head>
	<title>{post.title}</title>
	<meta name="description" content={`Custom Web Solutions | ${post.title}`} />
</svelte:head>
