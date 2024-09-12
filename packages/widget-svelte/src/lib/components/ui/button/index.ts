import { type VariantProps, tv } from "tailwind-variants";
import type { Button as ButtonPrimitive } from "bits-ui";
import Root from "./button.svelte";

const buttonVariants = tv({
	base: "lb-ring-offset-background focus-visible:lb-ring-ring lb-inline-flex lb-items-center lb-justify-center lb-whitespace-nowrap lb-rounded-md lb-text-sm lb-font-medium lb-transition-colors focus-visible:lb-outline-none focus-visible:lb-ring-2 focus-visible:lb-ring-offset-2 disabled:lb-pointer-events-none disabled:lb-opacity-50",
	variants: {
		variant: {
			default: "lb-bg-primary lb-text-primary-foreground hover:lb-bg-primary/90",
			destructive: "lb-bg-destructive lb-text-destructive-foreground hover:lb-bg-destructive/90",
			outline:
				"lb-border-input lb-bg-background hover:lb-bg-accent hover:lb-text-accent-foreground lb-border",
			secondary: "lb-bg-secondary lb-text-secondary-foreground hover:lb-bg-secondary/80",
			ghost: "hover:lb-bg-accent hover:lb-text-accent-foreground",
			link: "lb-text-primary lb-underline-offset-4 hover:lb-underline",
		},
		size: {
			default: "lb-h-10 lb-px-4 lb-py-2",
			sm: "lb-h-9 lb-rounded-md lb-px-3",
			lg: "lb-h-11 lb-rounded-md lb-px-8",
			icon: "lb-h-10 lb-w-10",
		},
	},
	defaultVariants: {
		variant: "default",
		size: "default",
	},
});

type Variant = VariantProps<typeof buttonVariants>["variant"];
type Size = VariantProps<typeof buttonVariants>["size"];

type Props = ButtonPrimitive.Props & {
	variant?: Variant;
	size?: Size;
};

type Events = ButtonPrimitive.Events;

export {
	Root,
	type Props,
	type Events,
	//
	Root as Button,
	type Props as ButtonProps,
	type Events as ButtonEvents,
	buttonVariants,
};
