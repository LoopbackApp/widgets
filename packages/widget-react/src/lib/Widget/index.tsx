import { zodResolver } from "@hookform/resolvers/zod";
import { IconMoodEmpty, IconMoodHappy, IconMoodSad } from "@tabler/icons-react";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { WidgetFormType, widgetSchema } from "./schema";

const emotions = [
	{
		value: "bad",
		icon: IconMoodSad,
		className: "lb-bg-red-100 lb-text-red-900",
		hover: "hover:lb-bg-red-100 hover:lb-text-red-900",
	},
	{
		value: "neutral",
		icon: IconMoodEmpty,
		className: "lb-bg-amber-100 lb-text-amber-900",
		hover: "hover:lb-bg-amber-100 hover:lb-text-amber-900",
	},
	{
		value: "good",
		icon: IconMoodHappy,
		className: "lb-bg-green-100 lb-text-green-900",
		hover: "hover:lb-bg-green-100 hover:lb-text-green-900",
	},
];

export function LoopbackWidget() {
	return (
		<div className="lb-m-auto lb-max-w-md lb-rounded-2xl lb-space-y-6 lb-px-6 lb-py-8">
			<p className="lb-text-center lb-font-bold lb-text-black dark:lb-text-white">
				Was this helpful?
			</p>
			<WidgetForm />
		</div>
	);
}

function WidgetForm() {
	const form = useForm<WidgetFormType>({ resolver: zodResolver(widgetSchema) });

	return (
		<FormProvider {...form}>
			<form onSubmit={form.handleSubmit((e) => console.log(e))} className="lb-space-y-6">
				{!!form.watch("emotion") ? (
					<UserInput />
				) : (
					<div className="lb-flex lb-justify-center">
						<EmojiScale />
					</div>
				)}
			</form>
		</FormProvider>
	);
}

function EmojiScale({ size = "big" }: { size?: "small" | "big" }) {
	const { register, watch } = useFormContext<WidgetFormType>();

	return (
		<div
			className={`lb-flex lb-justify-center lb-w-fit ${size === "big" ? "lb-space-x-6" : "lb-space-x-2"}`}
		>
			{emotions.map((emotion, idx) => (
				<label
					key={idx}
					className={`${watch("emotion") === emotion.value && emotion.className} lb-rounded-full lb-p-1 lb-cursor-pointer lb-transform lb-transition lb-duration-150 ${emotion.hover}`}
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

function UserInput() {
	const {
		register,
		formState: { isValid },
	} = useFormContext<WidgetFormType>();
	return (
		<div className="lb-space-y-4">
			<div className="lb-space-y-2">
				<label
					className="lb-block lb-text-left lb-text-xs lb-uppercase lb-text-black lb-dark:text-white"
					htmlFor="note"
				>
					Feedback
				</label>
				<textarea
					{...register("note")}
					draggable="false"
					autoCapitalize="off"
					autoComplete="off"
					autoCorrect="off"
					placeholder="Your feedback..."
					id="note"
					className="lb-w-full lb-resize-none lb-rounded-lg lb-border lb-border-gray-300 lb-p-2 lb-text-gray-800 lb-dark:text-white"
				/>
			</div>
			<div className="lb-space-y-2">
				<label
					className="lb-block lb-text-left lb-text-xs lb-uppercase lb-text-black lb-dark:text-white"
					htmlFor="email"
				>
					Email (optional)
				</label>
				<input
					{...register("email", {})}
					className="lb-w-full lb-resize-none lb-rounded-lg lb-border lb-border-gray-300 lb-p-2 lb-text-gray-800 lb-dark:text-white"
					id="email"
					placeholder="john@doe.com"
				/>
			</div>
			<div className="lb-flex lb-justify-between lb-flex-wrap lb-items-center">
				<EmojiScale size="small" />
				<button
					className="lb-h-9 lb-px-4 lb-py-2 lb-bg-neutral-800 lb-text-white shadow hover:lb-bg-neutral-800/90 lb-inline-flex lb-items-center lb-justify-center lb-whitespace-nowrap lb-rounded-md lb-text-sm lb-font-medium lb-transition-colors focus-visible:lb-outline-none focus-visible:lb-ring-1 focus-visible:lb-ring-neutral-800 disabled:lb-pointer-events-none disabled:lb-opacity-50"
					disabled={!isValid}
				>
					Submit
				</button>
			</div>
		</div>
	);
}
