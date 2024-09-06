import { useFormContext } from "react-hook-form";
import { WidgetFormType } from "./schema";
import { emotions } from "./constants";

export function EmojiScale({ size = "big" }: { size?: "small" | "big" }) {
	const { register, watch } = useFormContext<WidgetFormType>();

	return (
		<div
			className={`lb-flex lb-justify-center lb-w-fit ${size === "big" ? "lb-space-x-6" : "lb-space-x-2"}`}
		>
			{emotions.map((emotion, idx) => (
				<label
					key={idx}
					className={`${watch("emotion") == emotion.value && emotion.className} lb-rounded-full lb-p-1 lb-cursor-pointer lb-transform lb-transition lb-duration-150 ${emotion.hover}`}
				>
					<input
						type="radio"
						value={emotion.value}
						{...register("emotion")}
						className="lb-sr-only"
					/>
					<emotion.icon width={size === "big" ? 48 : 24} height={size === "big" ? 48 : 24} />
				</label>
			))}
		</div>
	);
}
