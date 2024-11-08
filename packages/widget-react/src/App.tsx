import { LoopbackWidget } from "./lib/widget/widget";
import styles from "./App.module.css";

export function App() {
	return (
		<div className={styles["wrapper"]}>
			<LoopbackWidget projectId="c4w3dt5dk2ndjw6xq4ke6u2k" />
		</div>
	);
}
