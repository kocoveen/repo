<script>
	import { base } from '$app/paths';

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
		<h2 class="h2 article-title">안면 인식 정산 자동화 서비스</h2>
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
		<h3 class="h3 preview-title">프로젝트 소개</h3>
		<section class="preview">
			<ul class="preview-list">
				<li class="preview-item">
					<div class="content-card">
						<!-- <figure class="preview-icon-box">
							<img src="{base}/images/icon-dev.svg" alt="tmp icon" width="0" />
						</figure> -->
						<h4 class="h4 preview-item-title">개발 기간</h4>
						<div class="preview-text">
							<p>2024.08~2024.10 (6주)</p>
						</div>
					</div>
				</li>
				<li class="preview-item">
					<div class="content-card">
						<!-- <figure class="preview-icon-box">
							<img src="{base}/images/icon-dev.svg" alt="tmp icon" width="0" />
						</figure> -->
						<h4 class="h4 preview-item-title">개발 인원</h4>
						<div class="preview-text">
							<p>6명</p>
						</div>
					</div>
				</li>
				<li class="preview-item">
					<div class="content-card">
						<div class="preview-text">
							<h4 class="h4 preview-item-title">담당 역할</h4>
							<p>백엔드</p>
							<!-- <p>
								<strong>목표:</strong> 안면 인식 정산 자동화로 정산 시간을 대폭 단축<br />
								<strong>성과:</strong> 사진 등록 응답 시간 5초에서 1초 미만으로 단축<br />
								<strong>주요 기능:</strong> 사진 등록 대상 자동 인식, 영수증 자동 인식
								</p> -->
						</div>
					</div>
				</li>
				<li class="preview-item">
					<div class="content-card">
						<div class="preview-text">
							<h4 class="h4 preview-item-title">프로젝트 개요</h4>
							<p>
								<strong>Facement</strong> 프로젝트는 기존 정산 앱이 정산 대상 및 메뉴, 금액을 수동으로
								지정해야 하는 불편함을 해결하고자
							</p>
							<p>
								딥러닝 모델로 사용자를 구별하고, AI로 영수증을 인식해 각 메뉴와 금액, 수량을 분류해
							</p>
							<p>
								불필요한 입력없이 정산을 할 수 있는
								<strong>다중 안면 인식 정산 자동화 서비스</strong>입니다.
							</p>
						</div>
					</div>
				</li>
				<li class="preview-item">
					<div class="content-card">
						<div class="preview-text">
							<h4 class="h4 preview-item-title">주요 기능</h4>
							<p>
								프로젝트는 기존 정산 앱이 정산 대상 및 메뉴, 금액을 수동으로 지정해야 하는 불편함을
								해결하고자
							</p>
							<p>
								딥러닝 모델로 사용자를 구별하고, AI로 영수증을 인식해 각 메뉴와 금액, 수량을 분류해
							</p>
							<p>
								불필요한 입력없이 정산을 할 수 있는
								<strong>다중 안면 인식 정산 자동화 서비스</strong>입니다.
							</p>
						</div>
					</div>
				</li>
			</ul>
		</section>
	{:else if selectedFilter === 'Documentation'}
		<section>
			<h3 class="h3 architecture-title">System Architecture</h3>
			<img src="/path-to-architecture.png" alt="System Architecture" />
			<p>Kafka 기반 비동기 처리와 AI 기반 영수증 인식을 포함한 시스템 구조</p>
		</section>

		<section>
			<h3 class="h3 api-title">API and Data Management</h3>
			<p>RESTful API 설계, 데이터 최적화, 캐싱 전략</p>
			<ul>
				<li>사용자 정보 암호화 및 Spring Security 적용</li>
				<li>데이터베이스 설계 및 인덱스 최적화</li>
				<li>실시간 처리: Kafka를 활용한 메시지 큐</li>
			</ul>
		</section>
	{:else if selectedFilter === 'Application'}
		<section>
			<h3 class="h3 tech-title">Tech Stack and Deployment</h3>
			<ul>
				<li><strong>Kafka:</strong> 비동기 데이터 처리</li>
				<li><strong>Gemini:</strong> 영수증 텍스트 추출</li>
				<li><strong>FCM:</strong> 실시간 알림 송신</li>
				<li><strong>CI/CD:</strong> Jenkins를 활용한 자동화 배포</li>
				<li><strong>Spring Security:</strong> 사용자 정보 보호</li>
			</ul>
		</section>

		<section>
			<h3 class="h3 feature-title">Key Features</h3>
			<ul>
				<li>안면 인식 기반 대상 구분</li>
				<li>영수증 데이터 자동 추출 및 정산</li>
				<li>실시간 알림 송신</li>
			</ul>
		</section>
	{:else if selectedFilter === 'Lesson Learned'}
		<section>
			<h3 class="h3 problem-solving-title">Problem Solving</h3>
			<ul>
				<li>Kafka를 도입해 사진 등록 속도 개선</li>
				<li>Spring Security로 데이터 암호화</li>
				<li>성능 병목 해결 및 코드 리팩토링</li>
			</ul>
		</section>

		<section>
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
	/**
   * #testimonials 
   */

	.preview {
		margin-bottom: 30px;
	}

	.preview-title {
		margin-bottom: 20px;
	}

	.preview-list {
		/* display: grid;
		grid-template-columns: 1fr;
		gap: 20px; */

		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		gap: 15px;
		margin: 0 -15px;
		padding: 25px 15px;
		padding-bottom: 35px;
		overflow-x: auto;
		scroll-behavior: smooth;
		overscroll-behavior-inline: contain;
		scroll-snap-type: inline mandatory;
	}

	.preview-item {
		/* position: relative;
		background: var(--border-gradient-onyx);
		padding: 20px;
		border-radius: 14px;
		box-shadow: var(--shadow-2);
		z-index: 1; */

		min-width: 100%;
		scroll-snap-align: center;
	}

	.preview-item:nth-child(n + 4) {
		/* min-width: 100%;
		scroll-snap-align: center; */
		grid-column: 1 / -1;
	}

	.preview-icon-box {
		position: absolute;
		top: 0;
		left: 0;
		transform: translate(15px, -25px);
		background: var(--bg-gradient-onyx);
		border-radius: 14px;
		box-shadow: var(--shadow-1);
	}

	.preview-item-title {
		margin-bottom: 7px;
	}

	.preview-text {
		color: var(--light-gray);
		font-size: var(--fs-6);
		font-weight: var(--fw-300);
		line-height: 1.6;
		/* display: -webkit-box; */
		line-clamp: 4;
		-webkit-line-clamp: 4;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	/* testimonials */

	.preview-item {
		min-width: calc(50% - 15px);
	}

	.preview {
		margin-bottom: 35px;
	}

	.preview-title {
		margin-bottom: 20px;
	}

	.preview-list {
		display: grid;
		/* grid-template-columns: 1fr; */
		grid-template-columns: 1fr 1fr 1fr;
		gap: 20px;
	}

	@media (min-width: 580px) {
		/* testimonials */

		.preview-title {
			margin-bottom: 25px;
		}

		.preview-list {
			gap: 30px;
			margin: 0 -30px;
			padding: 30px;
			padding-bottom: 35px;
		}

		.content-card {
			padding: 30px;
			padding-top: 25px;
		}

		.preview-icon-box {
			transform: translate(30px, -30px);
			border-radius: 20px;
		}

		.preview-icon-box img {
			width: 80px;
		}

		.preview-item-title {
			margin-bottom: 10px;
			/* margin-left: 95px; */
		}

		.preview-text {
			line-clamp: 2;
			-webkit-line-clamp: 2;
		}
	}

	@media (min-width: 1440px) {
		/* testimonials */
		.preview-item {
			min-width: calc(50% - 15px);
		}
	}
</style>
