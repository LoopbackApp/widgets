import styles from "./status.module.css";

type Props = {
	type: "success" | "error";
};
export function Status({ type }: Props) {
	return (
		<div className={styles["container"]}>
			{type === "success" ? <SuccessIcon /> : <ErrorIcon />}
			<p className={styles["headline"]}>
				{type === "success" ? "Your feedback has been received" : "Something went wrong..."}
			</p>
			<p className={styles["subheading"]}>
				{type === "success" ? "Thank you for your feedback!" : "Please try again later."}
			</p>
		</div>
	);
}

function SuccessIcon() {
	return (
		<svg
			className={styles["icon"]}
			xmlns="http://www.w3.org/2000/svg"
			width="36"
			height="36"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
		</svg>
	);
}

function ErrorIcon() {
	return (
		<svg
			className={styles["icon"]}
			xmlns="http://www.w3.org/2000/svg"
			width="36"
			height="36"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
			<path d="M12 6l-2 4l4 3l-2 4v3" />
		</svg>
	);
}
