<script>
</script>

<section class="application">
	<h3 class="h3 article-title">기술 스택</h3>
	<ul class="tech-list">
		{@render makeTechStackBox(
			'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1667082075/noticon/evii0kwjuapddhzjmdrb.png',
			'Java',
			'안정성과 성능이 검증된 언어'
		)}
		{@render makeTechStackBox(
			'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1583139980/noticon/vtzecmjzn39cifnjtonx.png',
			'Spring Boot',
			'빠른 어플 개발 지원'
		)}
		{@render makeTechStackBox(
			'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1686935854/noticon/r7w1ipwmdmhlfzqfw69h.png',
			'Spring Security',
			'사용자 정보 암호화'
		)}
		{@render makeTechStackBox(
			'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1687307488/noticon/o9lxyva5z8zbwyeaxers.png',
			'JPA',
			'객체지향적 DB 관리'
		)}
		{@render makeTechStackBox(
			'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
			'MySQL',
			'안정적 관계형 DB'
		)}
		{@render makeTechStackBox(
			'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg',
			'Kafka',
			'대용량 사진 메시징 및 비동기 처리'
		)}
		{@render makeTechStackBox(
			'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1569654347/noticon/mdujedvj9w8c9rz9phny.png',
			'JWT',
			'간편한 인증 관리'
		)}
		{@render makeTechStackBox(
			'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566913958/noticon/uoqjdixts4lwsgtsa1pd.png',
			'FCM',
			'실시간 알림 송신'
		)}
	</ul>

	<h3 class="h3 article-title">개발 기능</h3>
	<ul class="feature-list">
		<li class="feature-info">OAuth 2.0 기반 인증 시스템 구현</li>
		<li class="feature-info">FCM 기반 실시간 알림 시스템 구축</li>
		<li class="feature-info">Kafka를 활용한 서버 간 비동기 통신 구현</li>
		<li class="feature-info">Gemini API 연동을 통한 영수증 텍스트 추출</li>
		<li class="feature-info">AI 서버 운영 및 유지보수</li>
	</ul>

	<h3 class="h3 article-title">기여</h3>
	<ul class="feature-list">
		<li class="feature-info">백엔드 시스템 및 아키텍처 설계</li>
		<li class="feature-info">기술 문서화 및 팀 내 지식 공유</li>
		<li class="feature-info">결제 정산 API 구현</li>
	</ul>
</section>

{#snippet makeTechStackBox(
	/** @type {string} */ src,
	/** @type {string} */ title,
	/** @type {string} */ desc
)}
	<li class="tech-item">
		<div class="tech-icon-box">
			<img {src} alt="tech stack" width="30" />
		</div>

		<div class="tech-info">
			<p class="tech-title">{title}</p>

			<desc>{desc}</desc>
		</div>
	</li>
{/snippet}

<style>
	/**
	* application
	*/
	.application-title {
		margin-bottom: 20px;
	}

	/**
   * # tech
   */

	.tech-icon-box {
		position: relative;
		/* background: var(--border-gradient-onyx); */
		background-color: aliceblue;
		width: 40px;
		height: 40px;
		border-radius: 8px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 16px;
		color: var(--orange-yellow-crayola);
		box-shadow: var(--shadow-1);
		z-index: 1;
	}

	.tech-list {
		display: grid;
		grid-template-columns: 1fr;
		gap: 16px;
		margin-bottom: 35px;
	}

	.tech-item {
		min-width: 100%;
		display: flex;
		align-items: center;
		gap: 16px;
	}

	.tech-info {
		max-width: calc(100% - 46px);
		width: calc(100% - 46px);
	}

	.tech-title {
		color: var(--light-gray-70);
		font-size: var(--fs-8);
		text-transform: uppercase;
		margin-bottom: 2px;
	}

	.tech-info :is(.tech-link, desc) {
		color: var(--white-2);
		font-size: var(--fs-7);
	}

	.tech-info address {
		font-style: normal;
	}

	.social-list {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		gap: 15px;
		padding-bottom: 4px;
		padding-left: 7px;
	}

	.social-item .social-link {
		color: var(--light-gray-70);
		font-size: 18px;
	}

	.social-item .social-link:hover {
		color: var(--light-gray);
	}

	@media (min-width: 580px) {
	}

	@media (min-width: 768px) {
		.tech-list {
			grid-template-columns: 1fr 1fr;
		}
	}

	@media (min-width: 1440px) {
		.tech-list {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}
</style>
