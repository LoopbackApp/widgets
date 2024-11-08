import { FormEvent, useState } from "react";
import { Emotion } from "./emotions";
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
			<form onSubmit={handleFormSubmit}>
				<ul className="lb-flex lb-items-center lb-justify-between">
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
					<div className="lb-space-y-4">
						<input
							required
							onChange={(e) => setEmail(e.target.value)}
							className="lb-rounded-lg lb-text-loopback-input lb-w-full lb-bg-[#333] placeholder:lb-text-loopback-placeholder lb-p-3"
							type="email"
							placeholder="Enter your email"
						/>
						<textarea
							onChange={(e) => setNote(e.target.value)}
							className="lb-rounded-lg lb-text-loopback-input lb-w-full lb-bg-[#333] placeholder:lb-text-loopback-placeholder lb-p-3 lb-resize-y lb-min-h-[80px]"
							placeholder="Add a comment"
						></textarea>
						<button
							className="lb-bg-loopback-submit lb-p-3 lb-rounded-md lb-w-full lb-text-loopback-submit-text"
							type="submit"
						>
							Submit
						</button>
						<div className="lb-text-center lb-text-xs lb-text-[#aaa]">
							powered by{" "}
							<a
								className="lb-underline hover:lb-decoration-transparent lb-transition-all lb-duration-200"
								href="https://loopback.works"
								target="_blank"
							>
								Loopback
							</a>
						</div>
					</div>
				)}
			</form>
		</div>
	);
}
