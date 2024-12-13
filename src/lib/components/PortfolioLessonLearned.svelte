<script>
	let { lessonLearned } = $props();

	let myProblemSolving = lessonLearned.problemSolving;
	let kpts = lessonLearned.kpt;
</script>

<section class="lesson-learned">
	<h3 class="h3 article-title">Problem Solving</h3>
	<ul class="feature-list">
		{#each myProblemSolving as problemSolving}
			<li class="feature-info">{problemSolving.problem}</li>
			<li class="feature-info">{problemSolving.solution}</li>
		{/each}
	</ul>

	<h3 class="h3 article-title">Retrospective</h3>
	<ul class="feature-list">
		{#each kpts as kpt}
			<li class="feature-info">Keep: {kpt.keep}</li>
			<li class="feature-info">Problem: {kpt.problem}</li>
			<li class="feature-info">Try: {kpt.try}</li>
		{/each}
	</ul>
</section>

<style>
	/** feature */
	.feature-list {
		gap: 16px;
		margin-bottom: 35px;
	}

	.feature-info {
		color: var(--light-gray);
		font-size: var(--fs-6);
		margin-bottom: 8px;
		padding-left: 20px;
		position: relative;
	}
</style>
