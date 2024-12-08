<!--
- #BLOG
-->

<script>
	import { base } from '$app/paths';

	const blogPosts = [
		{
			image: '/images/blog-1.jpg',
			alt: 'Design conferences in 2022',
			category: 'Design',
			date: '2022-02-23',
			formattedDate: 'Fab 23, 2022',
			title: 'Design conferences in 2022',
			text: 'Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.'
		},
		{
			image: '/images/blog-2.jpg',
			alt: 'Best fonts every designer',
			category: 'Design',
			date: '2022-02-23',
			formattedDate: 'Fab 23, 2022',
			title: 'Best fonts every designer',
			text: 'Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.'
		},
		{
			image: '/images/blog-3.jpg',
			alt: 'Design digest #80',
			category: 'Design',
			date: '2022-02-23',
			formattedDate: 'Fab 23, 2022',
			title: 'Design digest #80',
			text: 'Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit.'
		},
		{
			image: '/images/blog-4.jpg',
			alt: 'UI interactions of the week',
			category: 'Design',
			date: '2022-02-23',
			formattedDate: 'Fab 23, 2022',
			title: 'UI interactions of the week',
			text: 'Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi.'
		},
		{
			image: '/images/blog-5.jpg',
			alt: 'The forgotten art of spacing',
			category: 'Design',
			date: '2022-02-23',
			formattedDate: 'Fab 23, 2022',
			title: 'The forgotten art of spacing',
			text: 'Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		},
		{
			image: '/images/blog-6.jpg',
			alt: 'Design digest #79',
			category: 'Design',
			date: '2022-02-23',
			formattedDate: 'Fab 23, 2022',
			title: 'Design digest #79',
			text: 'Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum.'
		}
	];
</script>

<article id="blog" class="blog active" data-page="blog">
	<header>
		<h2 class="h2 article-title">Blog</h2>
	</header>

	<section class="blog-posts">
		<ul class="blog-posts-list">
			{#each blogPosts as post}
				<li class="blog-post-item">
					<a href="#">
						<figure class="blog-banner-box">
							<img src="{base}{post.image}" alt={post.alt} loading="lazy" />
						</figure>

						<div class="blog-content">
							<div class="blog-meta">
								<p class="blog-category">{post.category}</p>

								<span class="dot"></span>

								<time datetime={post.date}>{post.formattedDate}</time>
							</div>

							<h3 class="h3 blog-item-title">{post.title}</h3>

							<p class="blog-text">{post.text}</p>
						</div>
					</a>
				</li>
			{/each}
		</ul>
	</section>
</article>
