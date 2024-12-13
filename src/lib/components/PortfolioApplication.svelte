<script>
	let { application } = $props();

	import TechStack from './TechStack.svelte';

	/** @type {import('$lib/data/projectData.js').TechStack[]} */
	let myStacks = application.techStacks;

	/** @type {string[]} */
	let myFeatures = application.features;

	/** @type {string[]} */
	let myContributions = application.contributions;
</script>

<section class="application">
	<h3 class="h3 article-title">기술 스택</h3>
	<ul class="tech-list">
		{#each myStacks as stack}
			<TechStack id={stack.id} desc={stack.desc} />
		{/each}
	</ul>

	<h3 class="h3 article-title">개발 기능</h3>
	<ul class="feature-list">
		{#each myFeatures as feature}
			<li class="feature-info">{feature}</li>
		{/each}
	</ul>

	<h3 class="h3 article-title">기여</h3>
	<ul class="feature-list">
		{#each myContributions as contributions}
			<li class="feature-info">{contributions}</li>
		{/each}
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
