import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		lib: {
			entry: ["src/lib/custom-element.svelte"],
			formats: ["iife"],
			fileName: () => "ce.js",
			name: "LoopbackWidget",
		},
	},
	plugins: [
		svelte({
			compilerOptions: {
				customElement: true,
			},
		}),
	],
});
