<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';

	import { FeedbackWidget } from '@loopbackapp/widget-svelte';

	let projectId = '';
</script>

<div class="min-w-[332px] space-y-2 p-4">
	<Label for="projectId" class="text-white">Project ID</Label>
	<Input type="text" bind:value={projectId} id="projectId" />
	{#if projectId}
		<FeedbackWidget {projectId} />
	{:else}
		<p class="text-white">Please enter your project ID above.</p>
	{/if}
</div>
