import { FormEvent, useState } from "react";
import { Emotion } from "./emotions";
import styles from "./form.module.css";
import { submitFeedback } from "./submit";

const moods = Array.from({ length: 3 })
	.fill(0)
	.map((_, index) => index + 1);

type Props = {
	submitStateHandler: (submitSuccess: boolean | null) => void;
	projectId: string;
};
export function EmojiForm({ submitStateHandler, projectId }: Props) {
	const [selected, setSelected] = useState<number>(0);

	const [note, setNote] = useState<string>("");
	const [email, setEmail] = useState<string>("");

	async function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		try {
			const res = await submitFeedback({
				emotion: selected,
				note,
				type: "feedback",
				email,
				origin: window.location.href,
				projectId,
			});

			submitStateHandler(res);
		} catch (err) {
			console.error("Failed to submit feedback:", err);
			submitStateHandler(false);
		}
	}
	return (
		<div>
			<form onSubmit={handleFormSubmit} className={styles["form"]}>
				<ul className={styles["list"]}>
					{moods.map((mood) => (
						<li key={mood}>
							<Emotion
								selected={selected}
								onClick={(value) => setSelected(value)}
								emotionComponent={moods.length === 5 ? mood : mood * 2 - 1}
								emotionValue={mood}
							/>
						</li>
					))}
				</ul>
				{!!selected && (
					<div>
						<input
							onChange={(e) => setEmail(e.target.value)}
							className={`${styles["input"]}`}
							type="email"
							placeholder="Enter your email"
						/>
						<textarea
							onChange={(e) => setNote(e.target.value)}
							className={`${styles["input"]} ${styles["textarea"]}`}
							placeholder="Add a comment"
						></textarea>
						<button className={styles["button"]} type="submit">
							Submit
						</button>
						<div className={styles["powered-by"]}>
							powered by{" "}
							<a style={{ color: "white" }} href="https://loopback.works" target="_blank">
								Loopback
							</a>
						</div>
					</div>
				)}
			</form>
		</div>
	);
}
