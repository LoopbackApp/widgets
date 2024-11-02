import { Status } from "./status";
import styles from "./widget.module.css";

export function Widget() {
	return (
		<div className={styles["widget"]}>
			<Status type="error"></Status>
		</div>
	);
}
