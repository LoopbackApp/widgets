<script lang="ts">
	import IconMoodEmpty from "@tabler/icons-svelte/icons/mood-empty";
	import IconMoodHappy from "@tabler/icons-svelte/icons/mood-happy";
	import IconMoodSad from "@tabler/icons-svelte/icons/mood-sad";

	export let size: "small" | "big" = "big";
	export let selectedEmotion: null | 1 | 2 | 3;

	const emotions = [
		{
			value: 1,
			icon: IconMoodSad,
			className: "lb-bg-red-100 lb-text-red-900",
			hover: "hover:lb-bg-red-100 hover:lb-text-red-900",
		},
		{
			value: 2,
			icon: IconMoodEmpty,
			className: "lb-bg-amber-100 lb-text-amber-900",
			hover: "hover:lb-bg-amber-100 hover:lb-text-amber-900",
		},
		{
			value: 3,
			icon: IconMoodHappy,
			className: "lb-bg-green-100 lb-text-green-900",
			hover: "hover:lb-bg-green-100 hover:lb-text-green-900",
		},
	];
</script>

<div class="lb-flex lb-justify-center">
	<div
		class:lb-space-x-6={size === "big"}
		class:lb-space-x-2={size !== "big"}
		class="lb-flex lb-justify-center lb-w-fit"
	>
		{#each emotions as emotion}
			<label
				class="{selectedEmotion === emotion.value
					? emotion.className
					: ''} {emotion.hover} lb-rounded-full lb-p-1 lb-cursor-pointer lb-transform lb-transition lb-duration-150"
			>
				<input type="radio" value={emotion.value} bind:group={selectedEmotion} class="lb-sr-only" />
				<svelte:component this={emotion.icon} size={size === "big" ? 48 : 24} />
			</label>
		{/each}
	</div>
</div>
