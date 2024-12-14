<script>
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	let { lessonLearned } = $props();

	let myProblemSolving = $state(lessonLearned.problemSolving);
	let kpts = $state(lessonLearned.kpt);
	let accordionStates = $state(myProblemSolving.map(() => true));

	$effect(() => {
		accordionStates = myProblemSolving.map(() => true);
	});

	/** @param {number} index */
	function toggleAccordion(index) {
		accordionStates[index] = !accordionStates[index];
	}
</script>

<section class="lesson-learned">
	<h3 class="h3 article-title">트러블 슈팅</h3>
	<ul class="feature-list">
		{#each myProblemSolving as problemSolving, index}
			{@render problemSolvingItem(problemSolving, index)}
		{/each}
	</ul>

	<h3 class="h3 article-title">회고</h3>
	<ul class="feature-list">
		{#each kpts as kpt}
			{@render kptItem(kpt)}
		{/each}
	</ul>
</section>

{#snippet problemSolvingItem(
	/** @type {import('$lib/data/projectData.js').ProblemSolving} */ problemSolving,
	/** @type {number} */ index
)}
	<li class="accordion-item">
		<button
			class="accordion-button"
			onclick={() => toggleAccordion(index)}
			aria-expanded={accordionStates[index]}
		>
			{accordionStates[index] ? '접기' : '펼치기'}
		</button>
		{#if accordionStates[index]}
			<div transition:slide={{ duration: 300, easing: quintOut }}>
				<ul class="feature-item">
					{@render featureCard('help-outline', '문제', problemSolving.problem)}
					{@render featureCard('alert-outline', '해결', problemSolving.solution)}
					{@render featureCard('checkmark-circle-outline', '결과', problemSolving.result)}
					{@render featureCard('book-sharp', '배운 점', problemSolving.takeaway)}
				</ul>
			</div>
		{/if}
	</li>
{/snippet}

{#snippet featureCard(
	/** @type {string} */ icon,
	/** @type {string} */ title,
	/** @type {string} */ content
)}
	<li class="feature-content-card">
		<figure class="feature-icon-box">
			<div class="icon-box">
				<ion-icon name={icon}>{title}</ion-icon>
			</div>
		</figure>
		<div class="feature-info">
			{@html content}
		</div>
	</li>
{/snippet}

{#snippet kptItem(/** @type {import('$lib/data/projectData.js').KPT} */ kpt)}
	<li class="feature-info">
		<strong>Keep:</strong>
		{kpt.keep}
	</li>
	<li class="feature-info">
		<strong>Problem:</strong>
		{kpt.problem}
	</li>
	<li class="feature-info">
		<strong>Try:</strong>
		{kpt.try}
	</li>
{/snippet}

<style>
	.feature-list {
		gap: 16px;
		margin-bottom: 35px;
	}

	.feature-content-card {
		display: flex;
		padding: 10px;
	}

	.feature-info {
		display: flex;
		align-items: center;
		color: var(--light-gray);
		font-size: var(--fs-6);
		padding-left: 20px;
	}

	.accordion-item {
		margin-bottom: 16px;
	}

	.accordion-button {
		width: 100%;
		text-align: left;
		padding: 10px;
		background-color: var(--border-gradient-onyx);
		color: var(--light-gray);
		border: none;
		border-radius: 14px;
		cursor: pointer;
		transition: background-color 0.3s ease;
	}

	.accordion-button:hover {
		background-color: var(--bg-gradient-jet);
	}

	@media (min-width: 580px) {
		.feature-content-card::before {
			content: '';
			position: absolute;
			inset: 1px;
			background: var(--bg-gradient-jet);
			border-radius: inherit;
			z-index: -1;
		}

		.feature-content-card {
			position: relative;
			background: var(--border-gradient-onyx);
			width: 100%;
			border-radius: 14px;
			box-shadow: var(--shadow-2);
			z-index: 1;
		}

		.feature-item {
			display: flex;
			flex-direction: column;
			gap: 10px;
			margin-bottom: 25px;
		}

		.feature-info {
			font-size: var(--fs-5);
		}
	}

	@media (min-width: 1440px) {
		.feature-item {
			flex-basis: 100%;
		}
	}
</style>
