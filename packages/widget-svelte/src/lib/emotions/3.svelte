<script lang="ts">
	export let selected;

	$: fill = selected ? "#9A5833" : "#363A40";
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
	<circle cx="23.6195" cy="13.7142" r="1.52381" fill="black" />
	<circle cx="8.38123" cy="13.7142" r="1.52381" fill="black" />
	<path
		d="M11.4287 19.8096L20.8216 22.9526"
		stroke="black"
		stroke-width="1.52381"
		stroke-linecap="round"
	/>
</svg>

<style>
    :global(button:hover) rect {
        fill: #9A5833
    }
</style>