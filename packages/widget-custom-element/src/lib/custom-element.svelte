<svelte:options customElement="loopback-widget" />

<script lang="ts">
	import { FeedbackWidget } from "@loopbackapp/widget-svelte";

	export let projectId: string;

	let wrapperElement: HTMLDivElement;
</script>

<div bind:this={wrapperElement} class="wrapper">
	<div class="title">Feedback 💬</div>
	<FeedbackWidget
		{projectId}
		on:emotion-changed={(event) => {
			console.log({ event });
			wrapperElement.style.height = "400px";
			wrapperElement.style.width = "450px";
		}}
	/>
</div>

<style>
	.wrapper {
		position: fixed;
		bottom: 0;
		left: 1rem;
		width: 200px;
		height: 44px;
		overflow: hidden;
		transition:
			height 0.3s ease,
			width 0.3s ease;
	}

	.title {
		padding: 5px 10px;
		cursor: pointer;
	}

	.wrapper:hover {
		height: 215px;
	}
</style>
