<script>
	let { documentation } = $props();
</script>

<section class="documentation">
	<h3 class="h3 article-title">시스템 아키텍처</h3>
	<img src={documentation.architecture} alt="system architecture" />
	<p></p>

	<h3 class="h3 article-title">API 명세서</h3>
	<img src={documentation.api} alt="api specification" />
	<p></p>

	<h3 class="h3 article-title">ERD</h3>
	<img src={documentation.erd} alt="erd" />
	<p></p>

	<!-- <ul>
        <li>데이터베이스 설계 및 인덱스 최적화</li>
        <li>실시간 처리: Kafka를 활용한 메시지 큐</li>
    </ul> -->
</section>
