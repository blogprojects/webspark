<script>
	// @ts-nocheck

	export let data;

	const posts = data.props.request.posts;
	const morePosts = data.props.newRequest.posts;

	console.log(data);
</script>

<div class="width">
	<h1 class="my-4 text-4xl font-bold text-sky-300">SOME BUSINESS AND INDUSTRIES WE COVER</h1>

	<ul class="grid lg:grid-cols-4">
		{#each posts as post}
			<li class="border-b border-gray-800 py-6 text-lg font-medium uppercase hover:text-gray-300">
				<a href={`/${post.slug}`}>
					{post.business}
				</a>
			</li>
		{/each}
	</ul>

	<ul class="grid lg:grid-cols-4">
		{#each morePosts as post}
			<li class="border-b border-gray-800 py-6 text-lg font-medium uppercase hover:text-gray-300">
				<a href={`/${post.slug}`}>
					{post.business}
				</a>
			</li>
		{/each}
	</ul>
</div>
