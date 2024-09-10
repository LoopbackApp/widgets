import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
// import tailwindcss from 'tailwindcss';

export default defineConfig({
	// build: {
	//   lib: {
	//     entry: ["src/lib/index.ts"],
	//     formats: ["es"],
	//   },
	// },
	// css: {
	//   postcss: {
	//     plugins: [tailwindcss()]
	//   },
	// },
	plugins: [sveltekit()],
});
