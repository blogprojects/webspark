<script>
	// @ts-nocheck

	export let data;

	const post = data.props.post.post;
</script>

<div class="mx-auto w-full p-6 md:px-12 lg:max-w-[50rem] xl:px-0">
	<div class="my-6 p-4 text-center">
		<span class="rounded-full bg-gray-700 p-2 px-4 text-sm font-medium text-sky-50">
			{new Date(post.updatedAt).toISOString().split('T')[0]}
		</span>

		<h1 class="border-b pb-12 pt-6 text-4xl font-bold leading-9 text-sky-300 lg:text-5xl">
			{post.title}
		</h1>
	</div>

	<article>
		<p>
			Establishing a strong online presence is important for any company looking to reach a wide
			audience. However, for {post.business} operating on tight budgets, investing in a good website
			can be costly. At Webspark, we specialize in bridging this gap by offering cost-effective website
			solutions tailored to the specific needs of small to mid-scale {post.business}.
		</p>

		<p>
			We understand that not every business requires a complex and expensive website loaded with
			features they may never use. Our approach is to provide simple yet effective custom website
			solutions that offer the online exposure needed, without incurring exorbitant costs. We
			believe in transparency and affordability, and helping businesses thrive.
		</p>

		<p>
			The starter and professional packages we offer are ideal for {post.business} looking to get a modern
			website without breaking the bank. These packages include essential features such as a homepage,
			about us page, contact form, and basic SEO optimization to help businesses get found online. For
			those seeking more advanced solutions, our custom packages offer additional features and options
			to help businesses stand out online.
		</p>

		<p>
			Our goal is to make it easy and accessible for businesses of all sizes to obtain premium
			websites at budget-friendly rates, without compromising on quality. Whether it's a simple
			one-page website or a fully customized e-commerce platform, we have the expertise to bring our
			clients' visions to life.
		</p>
	</article>

	<a href="/#packages" class="grid place-content-center">
		<button
			class="mx-auto mb-20 mt-10 rounded-md bg-sky-300 px-8 py-4 text-xl font-bold
			 text-black hover:bg-sky-200"
		>
			View Our Amazing Packages
		</button>
	</a>
</div>

<svelte:head>
	<title>{post.title}</title>
	<meta name="description" content={`Custom Web Solutions | ${post.title}`} />
</svelte:head>
