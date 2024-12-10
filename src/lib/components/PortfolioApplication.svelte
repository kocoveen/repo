<section class="application">
	<h3 class="h3 tech-title">Tech Stack and Deployment</h3>

	<h3 class="h3 tech-title">프로젝트 소개</h3>

	<li><strong>Kafka:</strong> 비동기 데이터 처리</li>
	<li><strong>Gemini:</strong> 영수증 텍스트 추출</li>
	<li><strong>FCM:</strong> 실시간 알림 송신</li>
	<li><strong>Spring Security:</strong> 사용자 정보 암호화</li>

	<ul class="tech-list">
		<li class="tech-item">
			<div class="content-card">
				<figure class="contact-item">
					<div class="icon-box">
						<ion-icon name="calendar-outline"></ion-icon>
					</div>
					<div class="contact-info">
						<h4 class="h4 tech-item-title">Java</h4>
					</div>
				</figure>
				<div class="tech-text">
					<p>자바</p>
				</div>
			</div>
		</li>
		<li class="tech-item">
			<div class="content-card">
				<!-- <figure class="tech-icon-box">
                    <img src="{base}/images/icon-dev.svg" alt="tmp icon" width="0" />
                </figure> -->
				<figure class="contact-item">
					<div class="icon-box">
						<ion-icon name="calendar-outline"></ion-icon>
					</div>

					<div class="contact-info">
						<h4 class="h4 tech-item-title">개발 인원</h4>
					</div>
				</figure>
				<div class="tech-text">
					<p>6명</p>
				</div>
			</div>
		</li>
		<li class="tech-item">
			<div class="content-card">
				<figure class="contact-item">
					<div class="icon-box">
						<ion-icon name="calendar-outline"></ion-icon>
					</div>

					<div class="contact-info">
						<h4 class="h4 tech-item-title">담당 역할</h4>
					</div>
				</figure>
				<div class="tech-text">
					<p>백엔드</p>
					<!-- <p>
                        <strong>목표:</strong> 안면 인식 정산 자동화로 정산 시간을 대폭 단축<br />
                        <strong>성과:</strong> 사진 등록 응답 시간 5초에서 1초 미만으로 단축<br />
                        <strong>주요 기능:</strong> 사진 등록 대상 자동 인식, 영수증 자동 인식
                        </p> -->
				</div>
			</div>
		</li>
		<li class="tech-item">
			<div class="content-card">
				<div class="tech-text">
					<h4 class="h4 tech-item-title">프로젝트 개요</h4>
					<p>
						<strong>Facement</strong> 프로젝트는 기존 정산 앱이 정산 대상 및 메뉴, 금액을 수동으로
						지정해야 하는 불편함을 해결하고자 딥러닝 모델로 사용자를 구별하고, AI로 영수증을 인식해
						각 메뉴와 금액, 수량을 분류해 불필요한 입력없이 정산을 할 수 있는
						<strong>다중 안면 인식 정산 자동화 서비스</strong>입니다.
					</p>
				</div>
			</div>
		</li>
		<li class="tech-item">
			<div class="content-card">
				<div class="tech-text">
					<h4 class="h4 tech-item-title">주요 기능</h4>
					<p>
						프로젝트는 기존 정산 앱이 정산 대상 및 메뉴, 금액을 수동으로 지정해야 하는 불편함을
						해결하고자
					</p>
					<p>딥러닝 모델로 사용자를 구별하고, AI로 영수증을 인식해 각 메뉴와 금액, 수량을 분류해</p>
					<p>
						불필요한 입력없이 정산을 할 수 있는
						<strong>다중 안면 인식 정산 자동화 서비스</strong>입니다.
					</p>
				</div>
			</div>
		</li>
	</ul>

	<ul>
		<li><strong>Kafka:</strong> 비동기 데이터 처리</li>
		<li><strong>Gemini:</strong> 영수증 텍스트 추출</li>
		<li><strong>FCM:</strong> 실시간 알림 송신</li>
		<li><strong>Spring Security:</strong> 사용자 정보 암호화</li>
	</ul>

	<h3 class="h3 feature-title">Key Features</h3>
	<ul>
		<li>안면 인식 기반 대상 구분</li>
		<li>영수증 데이터 자동 추출 및 정산</li>
		<li>실시간 알림 송신</li>
	</ul>
</section>

<style>
	/**
   * # tech
   */

	.tech {
		/* margin-bottom: 30px; */
	}

	.tech-title {
		/* margin-bottom: 20px; */
	}

	.tech-list {
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

	.tech-item {
		/* position: relative;
		background: var(--border-gradient-onyx);
		padding: 20px;
		border-radius: 14px;
		box-shadow: var(--shadow-2);
		z-index: 1; */

		min-width: 100%;
		scroll-snap-align: center;
	}

	.tech-icon-box {
		position: absolute;
		top: 0;
		left: 0;
		transform: translate(15px, -25px);
		background: var(--bg-gradient-onyx);
		border-radius: 14px;
		box-shadow: var(--shadow-1);
	}

	.tech-item-title {
		margin-bottom: 7px;
	}

	.tech-text {
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

	.tech-item {
		min-width: calc(50% - 15px);
	}

	.tech {
		margin-bottom: 35px;
	}

	.tech-title {
		margin-bottom: 20px;
	}

	.tech-list {
		display: grid;
		grid-template-columns: 1fr;
		gap: 20px;
	}

	@media (min-width: 580px) {
		/* testimonials */

		.tech-title {
			margin-bottom: 25px;
		}

		.tech-list {
			gap: 30px;
			margin: 0 -30px;
			padding: 30px;
			padding-bottom: 35px;
			grid-template-columns: 1fr;
		}

		.tech-item:nth-child(n + 4) {
			/* min-width: 100%; */
			scroll-snap-align: center;
			grid-column: 1 / -1;
		}

		.tech-icon-box {
			transform: translate(30px, -30px);
			border-radius: 20px;
		}

		.tech-icon-box img {
			width: 80px;
		}

		.tech-item-title {
			margin-bottom: 10px;
			/* margin-left: 95px; */
		}

		.tech-text {
			line-clamp: 2;
			-webkit-line-clamp: 2;
			margin-left: 62px;
		}
	}

	@media (min-width: 768px) {
		.tech-list {
			gap: 30px;
			margin: 0 -30px;
			padding: 30px;
			padding-bottom: 35px;
			grid-template-columns: 1fr 1fr;
		}
	}

	@media (min-width: 1440px) {
		/* testimonials */
		.tech-item {
			min-width: calc(50% - 15px);
		}

		.tech-list {
			gap: 30px;
			margin: 0 -30px;
			padding: 30px;
			padding-bottom: 35px;
			grid-template-columns: 1fr 1fr 1fr;
		}
	}
</style>
