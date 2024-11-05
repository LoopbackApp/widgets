import { useState } from "react";
import { Emotion } from "./emotions";
import styles from "./form.module.css";

const moods = Array.from({ length: 3 })
	.fill(0)
	.map((_, index) => index + 1);

export function EmojiForm() {
	const [selected, setSelected] = useState<number>(0);
	return (
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
	);
}
