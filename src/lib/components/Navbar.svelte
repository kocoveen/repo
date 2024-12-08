<script>
	import { base } from '$app/paths';
	import { activeArticleFilter } from '$lib/stores/activeFilter.js'; // Store 가져오기

	// 메뉴 아이템
	const menuItems = [
		{ id: 'about', label: 'About', icon: 'person-outline' },
		{ id: 'resume', label: 'Resume', icon: 'reader-outline' },
		{ id: 'portfolio', label: 'Portfolio', icon: 'file-tray-full-outline' },
		{ id: 'blog', label: 'Blog', icon: 'albums-outline' },
		{ id: 'contact', label: 'Contact', icon: 'send-outline' }
	];
</script>

<!--
- #NAVBAR
-->

<nav class="navbar">
	<ul class="navbar-list">
		{#each menuItems as item}
			<li class="navbar-item">
				<a
					href="{base}/{item.id}"
					class="navbar-link {$activeArticleFilter === item.id ? 'active' : ''}"
					on:click={() => activeArticleFilter.set(item.id)}
					aria-label="article"
				>
					<ion-icon name={item.icon}></ion-icon>
				</a>
			</li>
		{/each}
	</ul>
</nav>
