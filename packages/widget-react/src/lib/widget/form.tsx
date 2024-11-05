import { useState } from "react";
import { Emotion } from "./emotions";
import styles from "./form.module.css";

const moods = Array.from({ length: 3 })
	.fill(0)
	.map((_, index) => index + 1);

export function EmojiForm() {
	const [selected, setSelected] = useState<number>(0);
	return (
		<div>
			<form>
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
						<input type="email" placeholder="Enter your email" />
						<textarea placeholder="Add a comment"></textarea>
						<button type="submit">Submit</button>
						<div className="lb-powered-by">
							powered by
							<a href="https://loopback.works" target="_blank">
								Loopback
							</a>
						</div>
					</div>
				)}
			</form>
		</div>
	);
}
