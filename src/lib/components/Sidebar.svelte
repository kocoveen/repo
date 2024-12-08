<script>
	import { base } from '$app/paths';
</script>

<!--
- #SIDEBAR
-->

<aside class="sidebar" data-sidebar>
	<div class="sidebar-info">
		<figure class="avatar-box">
			<img src={`${base}/images/my-photo.png`} alt="장웅기" width="80" />
		</figure>

		<div class="info-content">
			<h1 class="name" title="장웅기">장웅기</h1>

			<p class="title">Backend developer</p>
		</div>

		<button class="info_more-btn" data-sidebar-btn>
			<span>Show Contacts</span>

			<ion-icon name="chevron-down"></ion-icon>
		</button>
	</div>

	<div class="sidebar-info_more">
		<div class="separator"></div>

		<ul class="contacts-list">
			<li class="contact-item">
				<div class="icon-box">
					<ion-icon name="mail-outline"></ion-icon>
				</div>

				<div class="contact-info">
					<p class="contact-title">Email</p>

					<a href="mailto:kocoveen@gmail.com" class="contact-link">kocoveen@gmail.com</a>
				</div>
			</li>

			<li class="contact-item">
				<div class="icon-box">
					<ion-icon name="phone-portrait-outline"></ion-icon>
				</div>

				<div class="contact-info">
					<p class="contact-title">Phone</p>

					<a href="tel:+821063698903" class="contact-link">+8210-6369-8903</a>
				</div>
			</li>

			<li class="contact-item">
				<div class="icon-box">
					<ion-icon name="calendar-outline"></ion-icon>
				</div>

				<div class="contact-info">
					<p class="contact-title">Birthday</p>

					<time datetime="1997-01-31">January 31, 1997</time>
				</div>
			</li>

			<li class="contact-item">
				<div class="icon-box">
					<ion-icon name="location-outline"></ion-icon>
				</div>

				<div class="contact-info">
					<p class="contact-title">Location</p>

					<address>Gwanak-gu, Seoul, Rep. of KOREA</address>
				</div>
			</li>
		</ul>

		<div class="separator"></div>

		<ul class="social-list">
			<li class="social-item">
				<a href="#" class="social-link" aria-label="social-link">
					<ion-icon name="logo-facebook"></ion-icon>
				</a>
			</li>

			<li class="social-item">
				<a href="#" class="social-link" aria-label="social-link">
					<ion-icon name="logo-twitter"></ion-icon>
				</a>
			</li>

			<li class="social-item">
				<a href="#" class="social-link" aria-label="social-link">
					<ion-icon name="logo-instagram"></ion-icon>
				</a>
			</li>
		</ul>
	</div>
</aside>
