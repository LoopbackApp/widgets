import { ComponentType } from "react";
import { EmojiProps, Five, Four, One, Three, Two } from "./emotions";
import styles from "./emotion.module.css";

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
			className={styles["button"]}
			onClick={(e) => {
				e.preventDefault();
				onClick(emotionValue);
			}}
		>
			<Component selected={isSelected} />
		</button>
	);
}

//<button
// 	class:selected
// 	on:click|preventDefault={() => dispatch('click', emotionValue)}
// >
// 	<svelte:component
// 		this={components[emotionComponent]}
// 		{...$$restProps}
// 		selected={selected === emotionValue}
// 	/>
// </button>
