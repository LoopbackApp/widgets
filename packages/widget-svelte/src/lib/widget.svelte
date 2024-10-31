<script lang="ts">
	import { onMount } from 'svelte';
	import Status from './status.svelte';
	import { initializeStyles } from './styles';
	import { submitFeedbackForm } from './api-helper';
	import Form from './form.svelte';
	import type { WidgetState } from './types';
	export let projectId: string;

	const MOODS = Array.from({ length: 3 })
		.fill(0)
		.map((_, index) => index + 1);
	const WIDGET_RESET_DELAY_MS = 500000;

	let state: WidgetState = {
		selectedEmotion: null,
		email: null,
		note: null,
		submitSuccess: null
	};
	let form: HTMLFormElement;

	function resetForm() {
		form.reset();
		setTimeout(() => {
			state = {
				selectedEmotion: null,
				email: null,
				note: null,
				submitSuccess: null
			};
		}, WIDGET_RESET_DELAY_MS);
	}

	async function handleSubmit() {
		state.submitSuccess = await submitFeedbackForm({
			...state,
			projectId,
			origin: window.location.href
		});
		resetForm();
	}

	onMount(() => {
		initializeStyles(projectId);
	});
</script>

<div class="lb-widget" part="widget">
	{#if state.submitSuccess === true}
		<Status type="success" />
	{:else if state.submitSuccess === false}
		<Status type="error" />
	{:else}
		<Form {MOODS} bind:state on:submit={handleSubmit} bind:form />
	{/if}
</div>

<style>
	.lb-text-red-700 {
		color: #b91c1c; /* red-700 */
	}
</style>
