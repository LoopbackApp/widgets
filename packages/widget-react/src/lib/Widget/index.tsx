import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { IconLoader2, IconSend } from "@tabler/icons-react";
import { Dispatch, SetStateAction, useState } from "react";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { emotions } from "./constants";
import { WidgetFormType, widgetSchema } from "./schema";
import { FailedMessage, SuccessMessage } from "./Status";

export function LoopbackWidget() {
	const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);
	return (
		<div className="lb-m-auto lb-bg-background lb-text-foreground lb-border-border lb-font-medium loopback-root lb-max-w-md lb-rounded-2xl lb-space-y-6 lb-px-6 lb-py-8">
			{submitSuccess === true && <SuccessMessage />}
			{submitSuccess === false && <FailedMessage />}

			{submitSuccess === null && (
				<>
					<p className="lb-text-center lb-font-bold lb-text-black">Leave feedback</p>
					<WidgetForm setSuccess={setSubmitSuccess} />
				</>
			)}
			<p className="lb-text-[0.6rem] lb-text-center">
				Powered by{" "}
				<a
					rel="noopener noreferrer"
					target="_blank"
					href="https://loopback.works/"
					className="lb-font-bold"
				>
					Loopback
				</a>
			</p>
		</div>
	);
}

type WidgetFormProps = {
	setSuccess: Dispatch<SetStateAction<boolean | null>>;
};
function WidgetForm({ setSuccess }: WidgetFormProps) {
	const form = useForm<WidgetFormType>({ resolver: zodResolver(widgetSchema) });

	async function submitFeedback(data: WidgetFormType) {
		const feedback = {
			emotion: data.emotion,
			note: data.note,
			email: data.email,
		};

		const res = await fetch("tbd", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(feedback),
		});
		console.log(res.ok);
		if (res.ok) {
			setSuccess(true);
		} else {
			setSuccess(false);
		}
		form.reset();

		setTimeout(() => {
			setSuccess(null);
		}, 5000);
	}

	return (
		<FormProvider {...form}>
			<form onSubmit={form.handleSubmit(submitFeedback)} className="lb-space-y-6">
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
		formState: { isSubmitting, errors },
	} = useFormContext<WidgetFormType>();
	return (
		<div className="lb-space-y-4">
			<div className="lb-space-y-2">
				<label
					className="lb-block lb-text-left lb-text-xs lb-uppercase lb-text-black"
					htmlFor="note"
				>
					Note (optional)
				</label>
				<Textarea
					{...register("note")}
					draggable="false"
					autoCapitalize="off"
					autoComplete="off"
					autoCorrect="off"
					placeholder="Your feedback..."
					id="note"
					className="lb-resize-none"
				/>
				{errors.note && (
					<p className="lb-text-xs lb-text-red-600 lb-text-left">{errors.note.message} </p>
				)}
			</div>
			<div className="lb-space-y-2">
				<label
					className="lb-block lb-text-left lb-text-xs lb-uppercase lb-text-black"
					htmlFor="email"
				>
					Email (optional)
				</label>
				<Input {...register("email")} id="email" placeholder="john@doe.com" />
				{errors.email && (
					<p className="lb-text-xs lb-text-red-600 lb-text-left">{errors.email.message} </p>
				)}
			</div>
			<div className="lb-flex lb-justify-between lb-flex-wrap lb-items-center">
				<EmojiScale size="small" />

				<Button
					disabled={isSubmitting}
					className="lb-flex lb-items-center lb-gap-2"
					variant="default"
				>
					{isSubmitting ? (
						<IconLoader2 className="lb-animate-spin" />
					) : (
						<>
							Submit
							<IconSend size={16} />
						</>
					)}
				</Button>
			</div>
		</div>
	);
}
