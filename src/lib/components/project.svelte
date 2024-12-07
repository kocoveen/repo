<script>
	// 필터 정의
	const filters = ['Summary', 'Architecture', 'Application', 'Lesson Learned'];

	// 프로젝트 세부 정보 정의
	const projectDetails = [
		{
			title: 'Finance',
			category: 'Summary',
			description:
				'Finance 프로젝트는 개인 자산 관리 및 금융 데이터 분석 도구를 제공하는 웹 애플리케이션입니다. 주요 기능은 거래 추적, 예산 설정, 시각화 도구 등을 포함합니다.',
			details:
				'Spring Boot와 Vue.js를 사용하여 개발되었으며, PostgreSQL을 데이터베이스로 활용하였습니다.',
			image: '/images/project-1.jpg',
			alt: 'Finance Project'
		},
		{
			title: 'Orizon',
			category: 'Architecture',
			description:
				'Orizon은 소프트웨어 아키텍처 설계 패턴을 기반으로 확장 가능한 웹 서비스를 개발하기 위한 템플릿 프로젝트입니다.',
			details: 'Microservices 기반 설계, Docker 및 Kubernetes를 사용한 배포 환경 구축.',
			image: '/images/project-2.png',
			alt: 'Orizon Project'
		},
		{
			title: 'Fundo',
			category: 'Application',
			description:
				'Fundo는 크라우드펀딩 플랫폼으로, 프로젝트 생성부터 후원까지의 전 과정을 간단하고 효율적으로 제공합니다.',
			details: 'React와 Node.js를 사용하여 개발되었으며, MongoDB를 데이터베이스로 활용.',
			image: '/images/project-3.jpg',
			alt: 'Fundo Project'
		},
		{
			title: 'Brawlhalla',
			category: 'Lesson Learned',
			description:
				'Brawlhalla 프로젝트는 게임 개발 프로세스에서 배운 교훈과 도전 과제를 공유하는 데 초점을 맞췄습니다.',
			details:
				'Unity 엔진과 C#을 사용하여 개발되었으며, 멀티플레이 환경 구축의 어려움이 주요 과제였습니다.',
			image: '/images/project-4.png',
			alt: 'Brawlhalla Project'
		}
	];

	// 선택된 필터 상태
	let selectedFilter = 'All';

	// 선택된 필터에 따라 프로젝트 필터링
	$: filteredDetails =
		selectedFilter === 'All'
			? projectDetails
			: projectDetails.filter((project) => project.category === selectedFilter);
</script>

<article id="project" class="project active" data-page="project">
	<header>
		<h2 class="h2 article-title">Project Details</h2>
	</header>

	<section class="project-details">
		<!-- 필터 버튼 -->
		<ul class="filter-list">
			<li class="filter-item">
				<button class:selected={selectedFilter === 'All'} on:click={() => (selectedFilter = 'All')}>
					All
				</button>
			</li>
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

		<!-- 프로젝트 세부 정보 -->
		<ul class="project-detail-list">
			{#each filteredDetails as detail}
				<li class="project-detail-item active" data-filter-item data-category={detail.category}>
					<figure class="project-img">
						<img src={detail.image} alt={detail.alt} loading="lazy" />
					</figure>
					<h3 class="project-title">{detail.title}</h3>
					<p class="project-category"><strong>Category:</strong> {detail.category}</p>
					<p class="project-description"><strong>Description:</strong> {detail.description}</p>
					<p class="project-details"><strong>Details:</strong> {detail.details}</p>
				</li>
			{/each}
		</ul>
	</section>
</article>
