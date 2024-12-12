<script>
	import { page } from '$app/stores';
	import { projects } from '$lib/data/projectData';

	import PortfolioApplication from '$lib/components/PortfolioApplication.svelte';
	import PortfolioDocumentation from '$lib/components/PortfolioDocumentation.svelte';
	import PortfolioLessonLearned from '$lib/components/PortfolioLessonLearned.svelte';
	import PortfolioOverview from '$lib/components/PortfolioOverview.svelte';

	// 컴포넌트를 선택하기 위한 매핑
	/**
	 * @typedef {Object} FilterItem
	 * @property {string} id - 필터의 고유 식별자 (예: "Overview", "Documentation").
	 * @property {typeof PortfolioOverview | typeof PortfolioDocumentation | typeof PortfolioApplication | typeof PortfolioLessonLearned} component - 필터에 해당하는 컴포넌트.
	 * @description 각 필터와 해당 컴포넌트를 매핑하는 객체입니다.
	 */

	/**
	 * @type {FilterItem[]}
	 */
	const filters = [
		{ id: 'Overview', component: PortfolioOverview },
		{ id: 'Documentation', component: PortfolioDocumentation },
		{ id: 'Application', component: PortfolioApplication },
		{ id: 'Lesson Learned', component: PortfolioLessonLearned }
	];

	let selectedFilter = $state(filters[0]);

	/**
	 * @type {string}
	 */
	const lastPathname = $page.url.pathname.split('/')[2];
</script>

<article id="portfolio" class="portfolio active" data-page="portfolio">
	<header>
		<!-- <h2 class="h2 article-title">{projects[lastPathname].title}</h2> -->
		<h2 class="h2 article-title">Project Name</h2>
	</header>

	<!-- 필터 버튼 -->
	<ul class="filter-list">
		{#each filters as filter}
			<li class="filter-item">
				<button
					class:selected={filter.id === selectedFilter.id}
					class:active={filter.id === selectedFilter.id}
					onclick={() => (selectedFilter = filter)}
				>
					{filter.id}
				</button>
			</li>
		{/each}
	</ul>

	<selectedFilter.component />
</article>

<style>
	/* @media (min-width: 580px) {
		.content-card {
			padding: 30px;
			padding-top: 25px;
		}
	} */
</style>
