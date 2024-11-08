import { ComponentType } from "react";
import { EmojiProps, Five, Four, One, Three, Two } from "./emotions";

type Props = {
	selected: number;
	emotionComponent: number;
	emotionValue: number;
	onClick: (value: number) => void;
};

const Emotions: Record<number, ComponentType<EmojiProps>> = {
	1: One,
	2: Two,
	3: Three,
	4: Four,
	5: Five,
};

export function Emotion({ emotionComponent, emotionValue, selected, onClick }: Props) {
	const Component = Emotions[emotionComponent];

	const isSelected = selected === emotionValue;
	return (
		<button
			className="lb-flex lb-items-center lb-justify-center lb-bg-transparent lb-min-h-16 lb-min-w-16 lb-p-3 lb-group"
			onClick={(e) => {
				e.preventDefault();
				onClick(emotionValue);
			}}
		>
			<Component selected={isSelected} />
		</button>
	);
}
