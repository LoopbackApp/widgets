<script lang="ts">
	import type { ComponentType } from 'svelte';
	import { createEventDispatcher } from 'svelte';

	import One from './1.svelte';
	import Two from './2.svelte';
	import Three from './3.svelte';
	import Four from './4.svelte';
	import Five from './5.svelte';

	export let emotionComponent: number;
	export let emotionValue: number;
	export let selected;

	const components: Record<number, ComponentType> = {
		1: One,
		2: Two,
		3: Three,
		4: Four,
		5: Five
	};

	const dispatch = createEventDispatcher();
</script>

<button
	class:selected
	on:click|preventDefault={() => dispatch('click', emotionValue)}
>
	<svelte:component
		this={components[emotionComponent]}
		{...$$restProps}
		selected={selected === emotionValue}
	/>
</button>

<style>
	button {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: transparent;
		border: 0;
		min-height: 4rem;
		min-width: 4rem;
		padding: 0.75rem;
		cursor: pointer;
	}

	button.selected {
		min-height: 64px;
		min-width: 64px;
		padding: 0.5rem;
	}

	button :global(svg) {
		transition: all 0.3s ease-in-out;
	}

	button:hover :global(svg) {
		height: 2.5rem;
		width: 2.5rem;
	}

	/* button:hover :global(svg rect) {
		fill: blue;
	} */
</style>
