<script>
	import '../app.css';

	import Sidebar from '$lib/components/sidebar.svelte';
	import Navbar from '$lib/components/navbar.svelte';

	import About from '$lib/components/about.svelte';
	import Resume from '$lib/components/resume.svelte';
	import Portfolio from '$lib/components/portfolio.svelte';
	import Blog from '$lib/components/blog.svelte';
	import Contact from '$lib/components/contact.svelte';

	import { activeSection } from '$lib/stores/activeSection.js'; // Store 가져오기

	let { children } = $props();
</script>

<main>
	<Sidebar />

	<!--
	- #main-content
	-->

	<div class="main-content">
		{#if $activeSection === 'about'}
			<About />
		{:else if $activeSection === 'resume'}
			<Resume />
		{:else if $activeSection === 'portfolio'}
			<Portfolio />
		{:else if $activeSection === 'blog'}
			<Blog />
		{:else if $activeSection === 'contact'}
			<Contact />
		{/if}
	</div>

	<Navbar />
</main>

{@render children()}
