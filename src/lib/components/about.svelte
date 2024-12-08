<script>
	import { base } from '$app/paths';

	// Service 데이터
	const services = [
		{
			icon: '/images/icon-dev.svg',
			title: 'Web development',
			text: 'High-quality development of sites at the professional level.'
		},
		{
			icon: '/images/icon-design.svg',
			title: 'Web design',
			text: 'The most modern and high-quality design made at a professional level.'
		},
		{
			icon: '/images/icon-app.svg',
			title: 'Mobile apps',
			text: 'Professional development of applications for iOS and Android.'
		},
		{
			icon: '/images/icon-photo.svg',
			title: 'Photography',
			text: 'I make high-quality photos of any category at a professional level.'
		}
	];

	// Testimonials 데이터
	const testimonials = [
		{
			avatar: '/images/avatar-1.png',
			name: 'Daniel lewis',
			text: 'Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client.'
		},
		{
			avatar: '/images/avatar-2.png',
			name: 'Jessica miller',
			text: 'Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client.'
		},
		{
			avatar: '/images/avatar-3.png',
			name: 'Emily evans',
			text: 'Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client.'
		},
		{
			avatar: '/images/avatar-4.png',
			name: 'Henry william',
			text: 'Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client.'
		}
	];

	// Clients 데이터
	const clients = [
		'/images/logo-1-color.png',
		'/images/logo-2-color.png',
		'/images/logo-3-color.png',
		'/images/logo-4-color.png',
		'/images/logo-5-color.png',
		'/images/logo-6-color.png'
	];
</script>

<article id="about" class="about active" data-page="about">
	<header>
		<h2 class="h2 article-title">About me</h2>
	</header>

	<section class="about-text">
		<p>안녕하세요. Java / Spring 기반 백엔드 개발자 장웅기입니다.</p>
		<p>
			개인이 하고 싶은 일도 좋지만 <strong>팀에 도움이 되는</strong> 개발을 해야 한다는 생각에 팀원이
			필요한 기술인 Vue.js 및 React, ELK stack 및 API 연결, FCM, Wear OS, Docker 등을 공부했습니다.
		</p>
	</section>

	<!-- Service -->
	<section class="service">
		<h3 class="h3 service-title">What I'm doing</h3>
		<ul class="service-list">
			{#each services as service}
				<li class="service-item">
					<div class="service-icon-box">
						<img src="{base}{service.icon}" alt={`${service.title} icon`} width="40" />
					</div>
					<div class="service-content-box">
						<h4 class="h4 service-item-title">{service.title}</h4>
						<p class="service-item-text">{service.text}</p>
					</div>
				</li>
			{/each}
		</ul>
	</section>

	<!-- Testimonials -->
	<section class="testimonials">
		<h3 class="h3 testimonials-title">Testimonials</h3>
		<ul class="testimonials-list has-scrollbar">
			{#each testimonials as testimonial}
				<li class="testimonials-item">
					<div class="content-card" data-testimonials-item>
						<figure class="testimonials-avatar-box">
							<img
								src={testimonial.avatar}
								alt={testimonial.name}
								width="60"
								data-testimonials-avatar
							/>
						</figure>
						<h4 class="h4 testimonials-item-title" data-testimonials-title>{testimonial.name}</h4>
						<div class="testimonials-text" data-testimonials-text>
							<p>{testimonial.text}</p>
						</div>
					</div>
				</li>
			{/each}
		</ul>
	</section>

	<!-- Clients -->
	<section class="clients">
		<h3 class="h3 clients-title">Clients</h3>
		<ul class="clients-list has-scrollbar">
			{#each clients as client}
				<li class="clients-item">
					<a href="#">
						<img src="{base}{client}" alt="client logo" />
					</a>
				</li>
			{/each}
		</ul>
	</section>
</article>
