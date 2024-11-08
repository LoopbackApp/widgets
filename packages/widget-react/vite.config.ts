import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		lib: {
			formats: ["es"],
			entry: resolve(__dirname, "./src/lib/index.ts"),
			fileName: (format) => `index.${format}.js`,
		},
		rollupOptions: {
			external: ["react", "react-dom", "tailwindcss"],
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
				},
			},
		},
		sourcemap: true,
		emptyOutDir: true,
	},
	resolve: {
		alias: {
			"@": "/src",
		},
	},
	plugins: [
		dts({
			entryRoot: resolve(__dirname, "./src/lib"),
			tsconfigPath: resolve(__dirname, "tsconfig.app.json"),
		}),
		react(),
	],
	server: {
		proxy: {
			"/api": "http://localhost:5173",
		},
	},
});
