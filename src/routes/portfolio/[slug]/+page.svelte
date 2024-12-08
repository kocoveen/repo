<script>
	// import { activeProjectFilter } from '$lib/stores/activeFilter.js';

	const filters = ['Summary', 'Architecture', 'Application', 'Lesson Learned'];

	let selectedFilter = 'Summary';

	// $: filteredProjects =
	//     selectedFilter === 'Summary'
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
						class:active={filter === selectedFilter}
						on:click={() => (selectedFilter = filter)}
					>
						{filter}
					</button>
				</li>
			{/each}
		</ul>

		{#if selectedFilter === 'Summary'}
			<div>프로젝트 요약</div>
		{:else if selectedFilter === 'Architucture'}
			<div>아키텍처</div>
		{:else if selectedFilter === 'Application'}
			<div>어플리케이션</div>
		{:else if selectedFilter === 'Lesson Learned'}
			<div>회고(KPT)</div>
		{/if}
	</section>
</article>
