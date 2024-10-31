<svelte:options customElement="loopback-widget" />

<script lang="ts">
	import { FeedbackWidget } from "@loopbackapp/widget-svelte";
	export let projectId: string;
</script>

<div class="container">
	<div class="title">Feedback 💬</div>
	<div role="dialog" class="wrapper">
		<FeedbackWidget {projectId} />
	</div>
</div>

<style>
	.container {
		position: fixed;
		bottom: 0;
		display: flex;
		flex-direction: column;
		right: var(--widget-offset-right);
		left: var(--widget-offset-left);
		align-items: var(--widget-align-items);
	}

	.wrapper {
		height: 0px;
		font-family: sans-serif;
		border: var(--lb-widget-bg) solid 1px;
		border-bottom: 0;
		border-top-left-radius: calc(var(--border-top-left-radius) + 1px);
		border-top-right-radius: calc(var(--border-top-right-radius) + 1px);
		transition:
			height 0.3s ease,
			width 0.3s ease;
	}

	.container:hover .wrapper {
		height: fit-content;
	}

	.wrapper :global(.lb-widget) {
		border-top-left-radius: var(--border-top-left-radius);
		border-top-right-radius: var(--border-top-right-radius);
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}

	.title {
		position: relative;
		background-color: var(--lb-widget-bg);
		color: var(--lb-title-color);
		text-align: center;
		width: 135px;
		padding: 5px 10px;
		cursor: pointer;
		font-family: sans-serif;
		border: var(--lb-widget-bg) solid 1px;
		border-bottom: 0;
		border-radius: 1rem 1rem 0 0;
	}
</style>
