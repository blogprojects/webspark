<script>
	import Icon from '@iconify/svelte';
</script>

<section id="projects" class="width">
	<div>
		<h2 class="text-3xl font-bold tracking-widest text-sky-300 lg:text-4xl">FEATURED PROJECTS</h2>
		<p class="border-b border-neutral-500 py-2.5 text-lg tracking-wide text-neutral-500">
			Selected custom website projects designed and created by us
		</p>
	</div>

	<ul class="grid-cols-3 gap-6 lg:grid">
		<li class="relative my-12 rounded-sm border-2 border-neutral-200 p-6 hover:border-neutral-600">
			<a href="/projects/astron-media">
				<div class="absolute inset-0 h-full w-full bg-neutral-900 bg-opacity-80 hover:-z-10"></div>
				<div class="hover:relative hover:z-20">
					<img
						src="/main/project-astron.jpg"
						alt="project-cover"
						class="block h-60 w-full bg-transparent object-cover"
					/>

					<div class="mt-4 flex items-center justify-between">
						<h3
							class="relative z-10 cursor-pointer font-medium tracking-widest
               text-sky-200 hover:text-white"
						>
							ASTRON MEDIA
						</h3>

						<span class="relative z-10 cursor-pointer text-2xl text-sky-200 hover:text-white">
							<Icon icon="jam:arrow-up-right" />
						</span>
					</div>
				</div>
			</a>
		</li>

		<li class="relative my-12 rounded-sm border-2 border-neutral-200 p-6 hover:border-neutral-600">
			<a href="/projects/litspring-network">
				<div class="absolute inset-0 h-full w-full bg-neutral-900 bg-opacity-80 hover:-z-10"></div>
				<div class="hover:relative hover:z-20">
					<img
						src="/main/project-litspring.jpg"
						alt="project-cover"
						class="block h-60 w-full bg-transparent object-cover"
					/>

					<div class="mt-4 flex items-center justify-between">
						<h3
							class="relative z-10 cursor-pointer font-medium tracking-widest
               text-sky-200 hover:text-white"
						>
							LITSPRING NETWORK
						</h3>

						<span class="relative z-10 cursor-pointer text-2xl text-sky-200 hover:text-white">
							<Icon icon="jam:arrow-up-right" />
						</span>
					</div>
				</div>
			</a>
		</li>

		<li class="relative my-12 rounded-sm border-2 border-neutral-200 p-6 hover:border-neutral-600">
			<a href="/projects/helm-spaces">
				<div class="absolute inset-0 h-full w-full bg-neutral-900 bg-opacity-80 hover:-z-10"></div>
				<div class="hover:relative hover:z-20">
					<img
						src="/main/project-helm.jpg"
						alt="project-cover"
						class="block h-60 w-full bg-transparent object-cover"
					/>

					<div class="mt-4 flex items-center justify-between">
						<h3
							class="relative z-10 cursor-pointer font-medium tracking-widest
               text-sky-200 hover:text-white"
						>
							HELM SPACES
						</h3>

						<span class="relative z-10 cursor-pointer text-2xl text-sky-200 hover:text-white">
							<Icon icon="jam:arrow-up-right" />
						</span>
					</div>
				</div>
			</a>
		</li>
	</ul>
</section>
