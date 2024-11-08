<script lang="ts">
	import { onMount } from 'svelte';
	import Status from './status.svelte';
	import { initializeStyles } from './styles';
	import { submitFeedback } from '@loopbackapp/widget-shared';
	import Form from './form.svelte';
	import type { FormState } from './types.js';
	export let projectId: string;

	const MOODS = Array.from({ length: 3 })
		.fill(0)
		.map((_, index) => index + 1);
	const WIDGET_RESET_DELAY_MS = 5000;

	let formState: FormState;
	$: formState = {
		emotion: null,
		email: undefined,
		note: undefined,
		projectId
	};
	let submitSuccess: null | boolean;
	$: submitSuccess = null;
	let form: HTMLFormElement;

	function resetForm() {
		form.reset();
		setTimeout(() => {
			submitSuccess = null;
			formState = {
				emotion: null,
				email: undefined,
				note: undefined,
				projectId
			};
		}, WIDGET_RESET_DELAY_MS);
	}

	async function handleSubmit() {
		try {
			if (formState.emotion !== null) {
				const response = await submitFeedback({ ...formState, emotion: formState.emotion });
				resetForm();
				submitSuccess = response.ok;
			} else {
				submitSuccess = false;
			}
		} catch {
			submitSuccess = false;
		}
	}

	onMount(() => {
		initializeStyles(projectId);
	});
</script>

<div class="lb-widget" part="widget">
	{#if submitSuccess === true}
		<Status type="success" />
	{:else if submitSuccess === false}
		<Status type="error" />
	{:else}
		<Form {MOODS} bind:formState on:submit={handleSubmit} bind:form />
	{/if}
</div>

<style>
	.lb-widget {
		background-color: var(--lb-widget-bg);
		border-radius: 15px;
		padding: 20px;
		width: 300px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		position: relative;
		font-family: sans-serif;
	}
</style>
