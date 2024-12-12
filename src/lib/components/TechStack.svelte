<script>
	let { data, desc } = $props();
</script>

<li class="tech-item">
	<div class="tech-icon-box">
		<img src={data.icon} alt="tech stack" width="30" />
	</div>

	<div class="tech-info">
		<p class="tech-title">{data.name}</p>

		<desc>{desc}</desc>
	</div>
</li>

<style>
	.tech-icon-box {
		position: relative;
		/* background: var(--border-gradient-onyx); */
		background-color: aliceblue;
		width: 40px;
		height: 40px;
		border-radius: 8px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 16px;
		color: var(--orange-yellow-crayola);
		box-shadow: var(--shadow-1);
		z-index: 1;
	}

	.tech-item {
		min-width: 100%;
		display: flex;
		align-items: center;
		gap: 16px;
	}

	.tech-info {
		max-width: calc(100% - 46px);
		width: calc(100% - 46px);
	}

	.tech-title {
		color: var(--light-gray-70);
		font-size: var(--fs-8);
		text-transform: uppercase;
		margin-bottom: 2px;
	}

	.tech-info :is(.tech-link, desc) {
		color: var(--white-2);
		font-size: var(--fs-7);
	}
</style>
