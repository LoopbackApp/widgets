import { FeedbackWidget } from "./lib/widget/widget";
import styles from "./App.module.css";

export function App() {
	return (
		<div className={styles["wrapper"]}>
			<FeedbackWidget projectId="f2dupyf27ba1b9p4p9pdu9ex" />
		</div>
	);
}
