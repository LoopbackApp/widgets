<script lang="ts">
	export let selected;

	$: fill = selected ? "#5BBF5F" : "#363A40";
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
		d="M16.5645 24.3792C20.0599 24.4861 21.3335 19.8096 21.3335 19.8096H11.4287C11.4287 19.8096 13.1492 24.2748 16.5645 24.3792Z"
		fill="black"
		stroke="black"
		stroke-width="1.52381"
		stroke-linecap="round"
	/>
</svg>

<style>
    :global(button:hover) rect {
        fill: #5BBF5F
    }
</style>