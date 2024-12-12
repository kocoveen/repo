<script>
	import { base } from '$app/paths';
	import { projects } from '$lib/data/projectData.js';

	const filters = ['All', 'Team Project', 'Web design', 'Applications', 'Web development'];

	let selectedFilter = 'All';

	$: filteredProjects =
		selectedFilter === 'All'
			? Object.values(projects)
			: Object.values(projects).filter(
					(/** @type {import('$lib/data/projectData.js').Project} */ project) =>
						project.category === selectedFilter.toLowerCase()
				);
</script>

<article id="portfolio" class="portfolio active" data-page="portfolio">
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
					<a href="{base}/portfolio/{project.id}">
						<figure class="project-img">
							<div class="project-item-icon-box">
								<ion-icon name="eye-outline"></ion-icon>
							</div>
							<img src="{base}{project.image}" alt="준비중입니다." loading="lazy" />
						</figure>
						<h3 class="project-title">{project.title}</h3>
						<p class="project-category">{project.category}</p>
					</a>
				</li>
			{/each}
		</ul>
	</section>
</article>
