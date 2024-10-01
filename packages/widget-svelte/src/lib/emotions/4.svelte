<script lang="ts">
	export let selected;

	$: fill = selected ? "#47914C" : "#363A40";
	$: size = selected ? 40 : 32;
</script>

<svg
	width={size}
	height={size}
	viewBox="0 0 32 32"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<rect width="32" height="32" rx="16" {fill} />
	<path
		d="M11.0479 19.8095C14.9908 22.6804 17.1643 22.7226 20.9526 19.8095"
		stroke="black"
		stroke-width="1.52381"
		stroke-linecap="round"
	/>
	<circle cx="23.6195" cy="13.7142" r="1.52381" fill="black" />
	<circle cx="8.38123" cy="13.7142" r="1.52381" fill="black" />
</svg>

<style>
    :global(button:hover) rect {
        fill: #47914C
    }
</style>