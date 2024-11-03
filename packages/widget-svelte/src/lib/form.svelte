<script lang="ts">
	import Emotion from '$lib/emotions/emotion.svelte';
	import type { FeedbackState } from '../types';

	export let MOODS: number[];
	export let state: FeedbackState;
	export let form: HTMLFormElement;
</script>

{#if state.selectedEmotion}
	<button on:click={() => (state.selectedEmotion = null)} class="lb-close" part="close"
		>&times;</button
	>
	<h2 class="lb-title" part="title">How are you feeling?</h2>
	<p class="lb-description" part="description">
		Your feedback is valuable in helping us understand your needs.
	</p>
{/if}

<div class="lb-emoji-container" part="emoji-container">
	{#each MOODS as mood}
		<Emotion
			on:click={(event) => (state.selectedEmotion = event.detail)}
			emotionComponent={MOODS.length === 5 ? mood : mood * 2 - 1}
			emotionValue={mood}
			bind:selected={state.selectedEmotion}
		/>
	{/each}
</div>

{#if state.selectedEmotion}
	<form class="lb-form" bind:this={form} on:submit|preventDefault part="form">
		<input bind:value={state.email} type="email" placeholder="Enter your email" part="email" />
		<textarea bind:value={state.note} placeholder="Add a comment" part="note"></textarea>
		<button type="submit" part="submit" class="lb-btn-submit"> Submit </button>
	</form>
	<div class="lb-powered-by">
		powered by <a href="https://loopback.works" target="_blank">Loopback</a>
	</div>
{/if}

<style>
	.lb-close {
		position: absolute;
		top: 0;
		right: 10px;
		font-size: 24px;
		color: #777;
		border: none;
		cursor: pointer;
		max-width: fit-content;
		background-color: transparent;
		padding: 0;
	}
	.lb-close:hover {
		background-color: transparent;
	}

	.lb-title {
		color: var(--lb-title-color);
		margin-top: 0;
		margin-bottom: 10px;
	}
	.lb-description {
		color: var(--lb-description-color);
		font-size: 14px;
		margin-bottom: 20px;
	}
	.lb-emoji-container {
		display: flex;
		justify-content: space-between;
	}
	.lb-form {
		margin-top: 20px;
	}
	.lb-form input,
	.lb-form textarea {
		width: 100%;
		padding: 10px;
		margin-bottom: 10px;
		border: none;
		border-radius: 5px;
		background-color: #333;
		color: var(--lb-input-color);
	}
	.lb-form input::placeholder,
	.lb-form textarea::placeholder {
		color: var(--lb-input-placeholder-color);
	}
	.lb-form textarea {
		height: 80px;
		resize: vertical;
	}
	.lb-btn-submit {
		width: 100%;
		padding: 10px;
		border: none;
		border-radius: 5px;
		background-color: var(--lb-btn-submit-bg);
		color: var(--lb-btn-submit-color);
		font-weight: bold;
		cursor: pointer;
		transition: background-color 0.2s;
	}
	.lb-btn-submit:hover {
		background-color: color-mix(in srgb, var(--lb-btn-submit-bg) 100%, white 20%);
	}

	.lb-powered-by {
		text-align: center;
		font-size: 12px;
		color: #aaa;
		margin-top: 10px;
	}
	.lb-powered-by a {
		color: white;
	}
</style>
