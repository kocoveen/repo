<!--
  - #CONTACT
-->

<article id="contact" class="contact active" data-page="contact">
	<header>
		<h2 class="h2 article-title">Contact</h2>
	</header>

	<section class="mapbox" data-mapbox>
		<figure>
			<iframe
				title="mapbox"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6331.747987661466!2d126.93905246459337!3d37.48729977834594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9f9087101355%3A0x47c13fc1e48a2473!2z7ISc7Jq47Yq567OE7IucIOq0gOyVheq1rCDsnYDsspzrj5k!5e0!3m2!1sko!2skr!4v1733053657351!5m2!1sko!2skr"
				width="400"
				height="300"
				loading="lazy"
			></iframe>
		</figure>
	</section>

	<section class="contact-form">
		<h3 class="h3 form-title">Contact Form</h3>

		<form action="#" class="form" data-form>
			<div class="input-wrapper">
				<input
					type="text"
					name="fullname"
					class="form-input"
					placeholder="Full name"
					required
					data-form-input
				/>

				<input
					type="email"
					name="email"
					class="form-input"
					placeholder="Email address"
					required
					data-form-input
				/>
			</div>

			<textarea
				name="message"
				class="form-input"
				placeholder="Your Message"
				required
				data-form-input
			></textarea>

			<button class="form-btn" type="submit" disabled data-form-btn>
				<ion-icon name="paper-plane"></ion-icon>
				<span>Send Message</span>
			</button>
		</form>
	</section>
</article>
