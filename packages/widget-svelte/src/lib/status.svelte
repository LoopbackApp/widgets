<script lang="ts">
	export let type: 'success' | 'error';
</script>

<div class="lb-flex lb-space-y-2 lb-flex-col lb-items-center lb-justify-center">
	{#if type === 'success'}
		<svg
			class="lb-text-red-700 slide-in-from-bottom-4 duration-700 fade-in animate-in"
			xmlns="http://www.w3.org/2000/svg"
			width="36"
			height="36"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
				d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"
			/></svg
		>
	{:else if type === 'error'}
		<svg
			class="lb-text-red-700 slide-in-from-bottom-4 duration-700 fade-in animate-in"
			xmlns="http://www.w3.org/2000/svg"
			width="36"
			height="36"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
				d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"
			/><path d="M12 6l-2 4l4 3l-2 4v3" /></svg
		>
	{/if}
	<p
		class="lb-status-title lb-animate-in lb-font-semibold lb-duration-700 lb-fade-in lb-slide-in-from-bottom-4"
	>
		{#if type === 'success'}
			Your feedback has been received
		{:else if type === 'error'}
			Something went wrong...
		{/if}
	</p>
	<p
		class="lb-status-description lb-animate-in lb-text-sm lb-duration-700 lb-fade-in lb-slide-in-from-bottom-4"
	>
		{#if type === 'success'}
			Thanks for submitting your feedback
		{:else if type === 'error'}
			Please try again later
		{/if}
	</p>
</div>

<style>
	.lb-status-title {
		color: var(--lb-description-color);
	}
	.lb-status-description {
		color: color-mix(in srgb, var(--lb-description-color), black 10%);
	}
	.lb-flex {
		display: flex;
	}
	.lb-flex-col {
		flex-direction: column;
	}
	.lb-items-center {
		align-items: center;
	}
	.lb-justify-center {
		justify-content: center;
	}
	.lb-space-y-2 > * + * {
		margin-top: 0.5rem;
	}
	.lb-text-sm {
		font-size: 0.875rem;
	}
	.lb-text-neutral-600 {
		color: #525252;
	}
	.lb-text-red-700 {
		color: #b91c1c;
	}
	.lb-font-semibold {
		font-weight: 600;
	}
	.lb-slide-in-from-bottom-4 {
		transform: translateY(1rem);
		animation: slideInFromBottom 0.7s forwards;
	}
	.lb-fade-in {
		opacity: 0;
		animation: fadeIn 0.7s forwards;
	}
	@keyframes slideInFromBottom {
		to {
			transform: translateY(0);
		}
	}
	@keyframes fadeIn {
		to {
			opacity: 1;
		}
	}
	.lb-animate-in {
		animation-fill-mode: forwards;
	}
	.lb-duration-700 {
		animation-duration: 0.7s;
	}
</style>
