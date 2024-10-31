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
