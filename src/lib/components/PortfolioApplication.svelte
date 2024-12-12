<script>
	import { techStacks } from '$lib/data/techStack';

	import TechStack from './TechStack.svelte';
</script>

<section class="application">
	<h3 class="h3 article-title">기술 스택</h3>
	<ul class="tech-list">
		<TechStack data={techStacks['java']} desc="안정성과 성능이 검증된 언어" />
		<TechStack data={techStacks['spring boot']} desc="빠른 어플 개발 지원" />
		<TechStack data={techStacks['spring security']} desc="사용자 정보 암호화" />
		<TechStack data={techStacks['jpa']} desc="객체지향적 DB 관리" />
		<TechStack data={techStacks['mysql']} desc="안정적 관계형 DB" />
		<TechStack data={techStacks['kafka']} desc="대용량 사진 메시징 및 비동기 처리" />
		<TechStack data={techStacks['jwt']} desc="간편한 인증 관리" />
		<TechStack data={techStacks['fcm']} desc="실시간 알림 송신" />
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

<style>
	/**
	* application
	*/
	.application-title {
		margin-bottom: 20px;
	}

	.tech-list {
		display: grid;
		grid-template-columns: 1fr;
		gap: 16px;
		margin-bottom: 35px;
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

	/** feature */
	.feature-list {
		gap: 16px;
		margin-bottom: 35px;
	}

	.feature-info {
		/* color: var(--white-2); */
		/* font-size: var(--fs-7); */
		/* content: ''; */
		/* position: relative; */
		/* left: 0; */
		/* top: 8px; */
		/* width: 6px; */
		/* height: 6px; */
		/* background: var(--orange-yellow-crayola); */
		/* border-radius: 50%; */

		color: var(--light-gray);
		font-size: var(--fs-6);
		margin-bottom: 8px;
		padding-left: 20px;
		position: relative;
	}
</style>
