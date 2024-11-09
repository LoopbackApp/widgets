import { useEffect, useState } from "react";
import { EmojiForm } from "./form";
import { Status } from "./status";
import { useStyles } from "./useStyles";
import "./styles.css";

export type FeedbackWidgetProps = {
	/**
	 * The project ID of your loopback project
	 */
	projectId: string;
};
export function FeedbackWidget({ projectId }: FeedbackWidgetProps) {
	const { isLoaded } = useStyles(projectId);
	const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);

	useEffect(() => {
		if (submitSuccess === null) return;
		const timeout = setTimeout(() => {
			setSubmitSuccess(null);
		}, 5000);

		return () => {
			clearTimeout(timeout);
		};
	}, [submitSuccess]);

	if (!isLoaded) return null;
	return (
		<>
			<div className="loopback-root">
				<div className="lb-w-[300px] lb-p-4 lb-rounded-2xl lb-bg-loopback-background">
					{submitSuccess === false && <Status type="error"></Status>}
					{submitSuccess === true && <Status type="success"></Status>}
					{submitSuccess === null && (
						<EmojiForm projectId={projectId} submitStateHandler={setSubmitSuccess} />
					)}
				</div>
			</div>
		</>
	);
}
