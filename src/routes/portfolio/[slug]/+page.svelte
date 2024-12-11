<script>
	import { base } from '$app/paths';
	import PortfolioApplication from '$lib/components/PortfolioApplication.svelte';
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
		<section class="documentation">
			<h3 class="h3 architecture-title">System Architecture</h3>
			<img src="/path-to-architecture.png" alt="system architecture" />
			<p>Kafka 기반 비동기 처리와 AI 기반 영수증 인식을 포함한 시스템 구조</p>

			<h3 class="h3 api-title">API specification</h3>
			<img src="/path-to-api.png" alt="api specification" />
			<p>RESTful API 설계</p>

			<h3 class="h3 api-title">ER Diagram</h3>
			<img src="/path-to-api.png" alt="api specification" />
			<p>ER 다이어그램</p>

			<!-- <ul>
				<li>데이터베이스 설계 및 인덱스 최적화</li>
				<li>실시간 처리: Kafka를 활용한 메시지 큐</li>
			</ul> -->
		</section>
	{:else if selectedFilter === 'Application'}
		<PortfolioApplication />
	{:else if selectedFilter === 'Lesson Learned'}
		<section class="lesson-learned">
			<h3 class="h3 problem-solving-title">Problem Solving</h3>
			<ul>
				<li>Kafka를 도입해 사진 등록 속도 5초에서 1초로 개선</li>
				<li>Spring Security로 데이터 암호화</li>
				<li>성능 병목 해결 및 코드 리팩토링</li>
			</ul>

			<h3 class="h3 retrospective-title">Retrospective</h3>
			<ul>
				<li>Keep: 안정적인 시스템 설계 및 구현</li>
				<li>Problem: 초기 기획에서 서비스 범위 과도 설정</li>
				<li>Try: 작은 단계별 목표로 프로젝트 진행</li>
			</ul>
		</section>
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
