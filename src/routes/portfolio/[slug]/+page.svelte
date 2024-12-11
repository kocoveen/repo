<script>
	import { base } from '$app/paths';
	import PortfolioApplication from '$lib/components/PortfolioApplication.svelte';
	import PortfolioDocumentation from '$lib/components/PortfolioDocumentation.svelte';
	import PortfolioLessonLearned from '$lib/components/PortfolioLessonLearned.svelte';
	import PortfolioOverview from '$lib/components/PortfolioOverview.svelte';

	// import { activeProjectFilter } from '$lib/stores/activeFilter.js';

	const filters = ['Overview', 'Documentation', 'Application', 'Lesson Learned'];

	let selectedFilter = 'Overview';

	// $: filteredProjects =
	//     selectedFilter === 'Overview'
	//         ? projects
	//         : projects.filter((project) => project.category === selectedFilter.toLowerCase());
</script>

<article id="portfolio" class="portfolio active" data-page="portfolio">
	<header>
		<h2 class="h2 article-title">Facement</h2>
	</header>

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

	{#if selectedFilter === 'Overview'}
		<PortfolioOverview />
	{:else if selectedFilter === 'Documentation'}
		<PortfolioDocumentation />
	{:else if selectedFilter === 'Application'}
		<PortfolioApplication />
	{:else if selectedFilter === 'Lesson Learned'}
		<PortfolioLessonLearned />
	{/if}
</article>

<style>
	/* @media (min-width: 580px) {
		.content-card {
			padding: 30px;
			padding-top: 25px;
		}
	} */
</style>
