<script lang="ts">
	export let selected;

	$: fill = selected ? "#E7344F" : "#363A40";
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
		d="M11.0479 21.9786C14.9908 19.1077 17.1643 19.0655 20.9526 21.9786"
		stroke="#121315"
		stroke-width="1.52381"
		stroke-linecap="round"
	/>
	<path
		d="M25.5243 11.4285L22.0957 13.3332"
		stroke="#121315"
		stroke-width="1.52381"
		stroke-linecap="round"
	/>
	<path
		d="M6.85756 11.4285L10.2861 13.3332"
		stroke="#121315"
		stroke-width="1.52381"
		stroke-linecap="round"
	/>
	<circle cx="23.6195" cy="13.7142" r="1.52381" fill="#121315" />
	<circle cx="8.38123" cy="13.7142" r="1.52381" fill="#121315" />
</svg>

<style>
    :global(button:hover) rect {
        fill: #E7344F
    }
</style>