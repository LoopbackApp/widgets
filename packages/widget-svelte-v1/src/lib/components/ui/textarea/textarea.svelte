<script lang="ts">
	import type { HTMLTextareaAttributes } from "svelte/elements";
	import type { TextareaEvents } from "./index.js";
	import { cn } from "$lib/utils.js";

	type $$Props = HTMLTextareaAttributes;
	type $$Events = TextareaEvents;

	let className: $$Props["class"] = undefined;
	export let value: $$Props["value"] = undefined;
	export { className as class };

	// Workaround for https://github.com/sveltejs/svelte/issues/9305
	// Fixed in Svelte 5, but not backported to 4.x.
	export let readonly: $$Props["readonly"] = undefined;
</script>

<textarea
	class={cn(
		"lb-border-input lb-bg-background lb-ring-offset-background placeholder:lb-text-muted-foreground focus-visible:lb-ring-ring lb-flex lb-min-h-[80px] lb-w-full lb-rounded-md lb-border lb-px-3 lb-py-2 lb-text-sm focus-visible:lb-outline-none focus-visible:lb-ring-2 focus-visible:lb-ring-offset-2 disabled:lb-cursor-not-allowed disabled:lb-opacity-50",
		className
	)}
	bind:value
	{readonly}
	on:blur
	on:change
	on:click
	on:focus
	on:keydown
	on:keypress
	on:keyup
	on:mouseover
	on:mouseenter
	on:mouseleave
	on:paste
	on:input
	{...$$restProps}
></textarea>
