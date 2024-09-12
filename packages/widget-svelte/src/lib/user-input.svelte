<script lang="ts">
	import { Button } from "$lib/components/ui/button/index.js";
	import { Input } from "$lib/components/ui/input/index.js";
	import { Textarea } from "$lib/components/ui/textarea/index.js";
	import IconLoader2 from "@tabler/icons-svelte/icons/loader-2";
	import IconSend from "@tabler/icons-svelte/icons/send";
	import EmojiScale from "./emoji-scale.svelte";

	export let selectedEmotion: null | 1 | 2 | 3;
	export let email: null | string;
	export let note: null | string;

	let errors: {
		email?: string;
		note?: string;
	} = {};
	let isSubmitting = false;
</script>

<div class="lb-space-y-4">
	<div class="lb-space-y-2">
		<label class="lb-block lb-text-left lb-text-xs lb-uppercase" for="note">
			Note (optional)
		</label>
		<Textarea
			bind:value={note}
			draggable="false"
			autocapitalize="off"
			autocomplete="off"
			autocorrect="off"
			placeholder="Your feedback..."
			id="note"
			class="lb-resize-none"
		/>
		{#if errors?.note}
			<p class="lb-text-xs lb-text-red-600 lb-text-left">{errors.note.message}</p>
		{/if}
	</div>
	<div class="lb-space-y-2">
		<label class="lb-block lb-text-left lb-text-xs lb-uppercase" for="email">
			Email (optional)
		</label>
		<Input bind:value={email} id="email" placeholder="john@doe.com" />
		{#if errors?.email}
			<p class="lb-text-xs lb-text-red-600 lb-text-left">{errors.email.message}</p>
		{/if}
	</div>
	<div class="lb-flex lb-justify-between lb-flex-wrap lb-items-center">
		<EmojiScale size="small" bind:selectedEmotion />

		<Button
			type="submit"
			disabled={isSubmitting}
			class="lb-flex lb-w-[100px] lb-items-center lb-gap-2"
			variant="default"
		>
			{#if isSubmitting}
				<IconLoader2 className="lb-animate-spin" />
			{:else}
				Submit
				<IconSend size={16} />
			{/if}
		</Button>
	</div>
</div>
