<script lang="ts">
	import { createEventDispatcher } from "svelte";
	const dispatch = createEventDispatcher();

	import EmojiScale from "./emoji-scale.svelte";
	import UserInput from "./user-input.svelte";

	export let projectId: string;

	let selectedEmotion: 1 | 2 | 3;

	$: if (selectedEmotion) {
		dispatch("emotion-changed", { emotion: selectedEmotion });
	}
</script>

<div
	class="lb-m-auto lb-bg-background lb-text-foreground lb-font-medium loopback-root lb-max-w-md lb-rounded-tr-2xl lb-space-y-6 lb-px-6 lb-py-8"
>
	<p class="lb-text-center lb-font-bold">Leave feedback</p>
	<form action="post">
		<input type="hidden" name="projectId" value={projectId} />
		{#if selectedEmotion}
			<UserInput bind:selectedEmotion />
		{:else}
			<EmojiScale bind:selectedEmotion />
		{/if}
	</form>
	<p class="lb-text-[0.6rem] lb-text-center">
		Powered by{" "}
		<a
			rel="noopener noreferrer"
			target="_blank"
			href="https://loopback.works/"
			class="lb-font-bold"
		>
			Loopback
		</a>
	</p>
</div>
