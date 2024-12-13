<script>
	let { overview } = $props();
</script>

<section class="overview">
	<h3 class="h3 article-title">프로젝트 소개</h3>
	<ul class="overview-list">
		<li class="overview-item">
			<div class="content-card">
				{@render makeIconBox('calendar-outline', '개발 기간')}
				<div class="overview-text">
					<p>{overview.period} ({overview.week}주)</p>
				</div>
			</div>
		</li>
		<li class="overview-item">
			<div class="content-card">
				<figure class="overview-item">
					<div class="icon-box">
						<ion-icon name="people-outline"></ion-icon>
					</div>

					<div class="overview-info">
						<h4 class="h4 overview-item-title">개발 인원</h4>
					</div>
				</figure>
				<div class="overview-text">
					<p>{overview.number}명</p>
				</div>
			</div>
		</li>
		<li class="overview-item">
			<div class="content-card">
				<figure class="overview-item">
					<div class="icon-box">
						<ion-icon name="person-circle-outline"></ion-icon>
					</div>

					<div class="overview-info">
						<h4 class="h4 overview-item-title">담당 역할</h4>
					</div>
				</figure>
				<div class="overview-text">
					<p>{overview.role}</p>
					<!-- <p>
                        <strong>목표:</strong> 안면 인식 정산 자동화로 정산 시간을 대폭 단축<br />
                        <strong>성과:</strong> 사진 등록 응답 시간 5초에서 1초 미만으로 단축<br />
                        <strong>주요 기능:</strong> 사진 등록 대상 자동 인식, 영수증 자동 인식
                        </p> -->
				</div>
			</div>
		</li>
		<li class="overview-item">
			<div class="content-card">
				<figure class="overview-item">
					<div class="icon-box">
						<ion-icon name="newspaper-outline"></ion-icon>
					</div>

					<div class="overview-info">
						<h4 class="h4 overview-item-title">프로젝트 개요</h4>
					</div>
				</figure>
				<div class="overview-text">
					<p>
						{@html overview.summary}
					</p>
				</div>
			</div>
		</li>
		<li class="overview-item">
			<div class="content-card">
				<figure class="overview-item">
					<div class="icon-box">
						<ion-icon name="key-outline"></ion-icon>
					</div>

					<div class="overview-info">
						<h4 class="h4 overview-item-title">주요 기능</h4>
					</div>
				</figure>
				<div class="overview-text">
					<p>
						{@html overview.keyFeature}
					</p>
				</div>
			</div>
		</li>
	</ul>
</section>

{#snippet makeIconBox(/** @type {string} */ name, /** @type {string} */ title)}
	<figure class="overview-item">
		<div class="icon-box">
			<ion-icon {name}></ion-icon>
		</div>

		<div class="overview-info">
			<h4 class="h4 overview-item-title">{title}</h4>
		</div>
	</figure>
{/snippet}

<style>
	.content-card {
		flex: 1 0 auto;
		flex-basis: 100%; /* break line 방지 */
	}

	/**
   * # overview
   */

	.overview {
		/* margin-bottom: 30px; */
	}

	.overview-title {
		/* margin-bottom: 20px; */
	}

	.overview-list {
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

	.overview-item {
		/* position: relative;
		background: var(--border-gradient-onyx);
		padding: 20px;
		border-radius: 14px;
		box-shadow: var(--shadow-2);
		z-index: 1; */

		min-width: 100%;
		display: flex;
		align-items: center;
		gap: 16px;
	}

	.overview-info {
		max-width: calc(100% - 46px);
		width: calc(100% - 46px);
	}

	.overview-icon-box {
		position: absolute;
		top: 0;
		left: 0;
		transform: translate(15px, -25px);
		background: var(--bg-gradient-onyx);
		border-radius: 14px;
		box-shadow: var(--shadow-1);
	}

	.overview-item-title {
		margin-bottom: 7px;
	}

	.overview-text {
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

	.overview-item {
		min-width: calc(50% - 15px);
	}

	.overview {
		/* margin-bottom: 35px; */
	}

	.overview-title {
		margin-bottom: 20px;
	}

	.overview-list {
		display: grid;
		grid-template-columns: 1fr;
		gap: 20px;
	}

	@media (min-width: 580px) {
		/* testimonials */

		.overview-title {
			margin-bottom: 25px;
		}

		.overview-list {
			gap: 30px;
			margin: 0 -30px;
			padding: 30px;
			padding-bottom: 35px;
			grid-template-columns: 1fr;
		}

		.overview-item:nth-child(n + 4) {
			/* min-width: 100%; */
			scroll-snap-align: center;
			grid-column: 1 / -1;
		}

		.overview-icon-box {
			transform: translate(30px, -30px);
			border-radius: 20px;
		}

		.overview-icon-box img {
			width: 80px;
		}

		.overview-item-title {
			margin-bottom: 10px;
			/* margin-left: 95px; */
		}

		.overview-text {
			line-clamp: 2;
			-webkit-line-clamp: 2;
			margin-left: 62px;
		}
	}

	@media (min-width: 768px) {
		.overview-list {
			gap: 30px;
			margin: 0 -30px;
			padding: 30px;
			padding-bottom: 35px;
			grid-template-columns: 1fr 1fr;
		}
	}

	@media (min-width: 1440px) {
		/* testimonials */
		.overview-item {
			min-width: calc(50% - 15px);
		}

		.overview-list {
			gap: 30px;
			margin: 0 -30px;
			padding: 30px;
			padding-bottom: 35px;
			grid-template-columns: 1fr 1fr 1fr;
		}
	}
</style>
