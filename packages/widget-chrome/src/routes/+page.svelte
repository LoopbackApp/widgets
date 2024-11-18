<script lang="ts">
	import { FeedbackWidget } from '@loopbackapp/widget-svelte';

	let projectId = '';
</script>

<div>
	<label for="projectId" class="text-white">Project ID</label>
	<input type="text" bind:value={projectId} id="projectId" />
	<FeedbackWidget {projectId} />
</div>
