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
