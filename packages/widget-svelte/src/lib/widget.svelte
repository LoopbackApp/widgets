<script lang="ts">
	import Emotion from '$lib/emotions/emotion.svelte';
	import Status from './status.svelte';
	export let projectId: string;
	const moods = new Array(3).fill(0).map((_, index) => index + 1);
	let selectedEmotion: number | null = null;
	let email: null | string;
	let note: null | string;
	let form: HTMLFormElement;
	let submitSuccess: boolean | null;
	$: submitSuccess = null;
	function selectMood(value: number) {
		selectedEmotion = value;
	}
	async function submitFeedback() {
		const feedback = {
			type: 'feedback',
			emotion: selectedEmotion,
			note,
			email,
			projectId
		};
		const url = `${window.location.hostname === 'localhost' ? 'http://localhost:5173' : 'https://dash.loopback.works'}/api/feedback`;
		const res = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(feedback)
		});
		if (res.ok) {
			submitSuccess = true;
		} else {
			submitSuccess = false;
		}
		form.reset();
		setTimeout(() => {
			selectedEmotion = null;
			email = null;
			note = null;
			submitSuccess = null;
		}, 5000);
	}
</script>

<div class="widget" part="widget">
	{#if submitSuccess === true}
		<Status>
			<svg
				slot="icon"
				class="text-red-700 slide-in-from-bottom-4 duration-700 fade-in animate-in"
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
			<svelte:fragment slot="messageTop">Your feedback has been received</svelte:fragment>
			<svelte:fragment slot="messageBottom">Thanks for submitting your feedback</svelte:fragment>
		</Status>
	{:else if submitSuccess === false}
		<Status>
			<svg
				slot="icon"
				class="text-red-700 slide-in-from-bottom-4 duration-700 fade-in animate-in"
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
			<svelte:fragment slot="messageTop">Something went wrong...</svelte:fragment>
			<svelte:fragment slot="messageBottom">Please try again later</svelte:fragment>
		</Status>
	{:else}
		{#if selectedEmotion}
			<button on:click={() => (selectedEmotion = null)} class="close" part="close">&times;</button>
			<h2 part="title">How are you feeling?</h2>
			<p part="description">Your feedback is valuable in helping us understand your needs.</p>
		{/if}
		<div class="emoji-container" part="emoji-container">
			{#each moods as mood}
				<Emotion
					on:click={(event) => selectMood(event.detail)}
					emotionComponent={moods.length === 5 ? mood : mood * 2 - 1}
					emotionValue={mood}
					bind:selected={selectedEmotion}
				/>
			{/each}
		</div>
		{#if selectedEmotion}
			<form bind:this={form} on:submit|preventDefault={submitFeedback} part="form">
				<input bind:value={email} type="email" placeholder="Enter your email" part="email" />
				<textarea bind:value={note} placeholder="Add a comment" part="note"></textarea>
				<button type="submit" part="submit">Submit</button>
			</form>
			<div class="powered-by">
				powered by <a href="https://loopback.works" target="_blank">Loopback</a>
			</div>
		{/if}
	{/if}
</div>

<style>
	.text-red-700 {
		color: #b91c1c; /* red-700 */
	}
</style>
