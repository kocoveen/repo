<script>
	const filters = ['Summary', 'Architecture', 'Application', 'Lesson Learned'];

	let selectedFilter = 'All';

	// $: filteredProjects =
	//     selectedFilter === 'All'
	//         ? projects
	//         : projects.filter((project) => project.category === selectedFilter.toLowerCase());
</script>

<article id="portfolio" class="portfolio active" data-page="portfolio">
	<header>
		<h2 class="h2 article-title">Project Name</h2>
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
		<!-- <ul class="project-list">
			{#each filteredProjects as project}
				<li class="project-item active" data-filter-item data-category={project.category}>
					<a href="{base}/portfolio/{project.title}">
						<figure class="project-img">
							<div class="project-item-icon-box">
								<ion-icon name="eye-outline"></ion-icon>
							</div>
							<img src="{base}{project.image}" alt={project.alt} loading="lazy" />
						</figure>
						<h3 class="project-title">{project.title}</h3>
						<p class="project-category">{project.category}</p>
					</a>
				</li>
			{/each}
		</ul> -->
	</section>
</article>
