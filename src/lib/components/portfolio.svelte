<script>
	const filters = ['All', 'Web design', 'Applications', 'Web development'];

	const projects = [
		{
			title: 'Finance',
			category: 'web development',
			image: '/images/project-1.jpg',
			alt: 'finance'
		},
		{ title: 'Orizon', category: 'web development', image: '/images/project-2.png', alt: 'orizon' },
		{ title: 'Fundo', category: 'web design', image: '/images/project-3.jpg', alt: 'fundo' },
		{
			title: 'Brawlhalla',
			category: 'applications',
			image: '/images/project-4.png',
			alt: 'brawlhalla'
		},
		{ title: 'DSM.', category: 'web design', image: '/images/project-5.png', alt: 'dsm.' },
		{
			title: 'MetaSpark',
			category: 'web design',
			image: '/images/project-6.png',
			alt: 'metaspark'
		},
		{
			title: 'Summary',
			category: 'web development',
			image: '/images/project-7.png',
			alt: 'summary'
		},
		{
			title: 'Task Manager',
			category: 'applications',
			image: '/images/project-8.jpg',
			alt: 'task manager'
		},
		{
			title: 'Arrival',
			category: 'web development',
			image: '/images/project-9.png',
			alt: 'arrival'
		}
	];

	let selectedFilter = 'All';

	$: filteredProjects =
		selectedFilter === 'All'
			? projects
			: projects.filter((project) => project.category === selectedFilter.toLowerCase());
</script>

<article id="portfolio" class="portfolio active box" data-page="portfolio">
	<header>
		<h2 class="h2 article-title">Portfolio</h2>
	</header>

	<section class="projects">
		<!-- 필터 버튼 -->
		<ul class="filter-list">
			{#each filters as filter}
				<li class="filter-item">
					<button
						class:selected={filter === selectedFilter}
						on:click={() => (selectedFilter = filter)}
					>
						{filter}
					</button>
				</li>
			{/each}
		</ul>

		<!-- 프로젝트 목록 -->
		<ul class="project-list">
			{#each filteredProjects as project}
				<li class="project-item active" data-filter-item data-category={project.category}>
					<a href="#{project.title}">
						<figure class="project-img">
							<div class="project-item-icon-box">
								<ion-icon name="eye-outline"></ion-icon>
							</div>
							<img src={project.image} alt={project.alt} loading="lazy" />
						</figure>
						<h3 class="project-title">{project.title}</h3>
						<p class="project-category">{project.category}</p>
					</a>
				</li>
			{/each}
		</ul>
	</section>
</article>
