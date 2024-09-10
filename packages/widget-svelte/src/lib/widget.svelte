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
	style={`
    --background: 0 0% 100%;
    --foreground: 0 0% 3.9%;
    
    --muted: 0 0% 96.1%;
    --muted-foreground: 0 0% 45.1%;
    
    --popover: 0 0% 100%;
    --popover-foreground: 0 0% 3.9%;
    
    --card: 0 0% 100%;
    --card-foreground: 0 0% 3.9%;
    
    --border: 0 0% 89.8%;
    --input: 0 0% 89.8%;
    
    --primary: 0 0% 9%;
    --primary-foreground: 0 0% 98%;
    
    --secondary: 0 0% 96.1%;
    --secondary-foreground: 0 0% 9%;
    
    --accent: 0 0% 96.1%;
    --accent-foreground: 0 0% 9%;
    
    --destructive: 0 72.2% 50.6%;
    --destructive-foreground: 0 0% 98%;
    
    --ring: 0 0% 3.9%;
    
    --radius: 0.5rem;
    `}
	class="lb-m-auto lb-bg-background lb-text-foreground lb-border-border lb-font-medium loopback-root lb-max-w-md lb-rounded-2xl lb-space-y-6 lb-px-6 lb-py-8"
>
	<p class="lb-text-center lb-font-bold lb-text-black">Leave feedback</p>
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
