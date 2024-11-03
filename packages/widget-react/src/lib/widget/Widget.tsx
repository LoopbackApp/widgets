import { Status } from "./status";
import { useStyles } from "./useStyles";
import styles from "./widget.module.css";
import { submitFeedback } from "./submit";

export type LoopbackWidgetProps = {
	/**
	 * The project ID of your loopback project
	 */
	projectId: string;
};
export function Widget({ projectId }: LoopbackWidgetProps) {
	console.log(submitFeedback);
	const { isLoaded } = useStyles(projectId);

	if (!isLoaded) return null;
	return (
		<>
			<div className="lb-widget">
				<div className={styles["widget"]}>
					<Status type="success"></Status>
				</div>
			</div>
		</>
	);
}
