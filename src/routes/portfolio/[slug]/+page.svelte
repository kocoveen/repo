<script>
	import { page } from '$app/stores';
	import { projects } from '$lib/data/projectData';

	import PortfolioApplication from '$lib/components/PortfolioApplication.svelte';
	import PortfolioDocumentation from '$lib/components/PortfolioDocumentation.svelte';
	import PortfolioLessonLearned from '$lib/components/PortfolioLessonLearned.svelte';
	import PortfolioOverview from '$lib/components/PortfolioOverview.svelte';

	const filters = ['Overview', 'Documentation', 'Application', 'Lesson Learned'];

	let selectedFilter = filters[0];

	/**
	 * @type {string | undefined}
	 */
	let lastPathname = $page.url.pathname.split('/').pop();

	let project = projects[lastPathname ? lastPathname : ''];
</script>

<article id="portfolio" class="portfolio active" data-page="portfolio">
	<header>
		<h2 class="h2 article-title">{project.title}</h2>
	</header>

	<!-- 필터 버튼 -->
	<ul class="filter-list">
		{#each filters as filter}
			<li class="filter-item">
				<button
					class:selected={filter === selectedFilter}
					class:active={filter === selectedFilter}
					onclick={() => (selectedFilter = filter)}
				>
					{filter}
				</button>
			</li>
		{/each}
	</ul>

	{#if selectedFilter === 'Overview'}
		<PortfolioOverview overview={project.overview} />
	{:else if selectedFilter === 'Documentation'}
		<PortfolioDocumentation documentation={project.documentation} />
	{:else if selectedFilter === 'Application'}
		<PortfolioApplication application={project.application} />
	{:else if selectedFilter === 'Lesson Learned'}
		<PortfolioLessonLearned lessonLearned={project.lessonLearned} />
	{/if}
</article>

<style>
</style>
