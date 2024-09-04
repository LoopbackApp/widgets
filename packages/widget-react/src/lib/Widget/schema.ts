import { z } from "zod";

export const widgetSchema = z.object({
	emotion: z.enum(["good", "bad", "neutral"]),
	note: z.string(),
	email: z.union([z.literal(""), z.string().email()]),
});

export type WidgetFormType = z.infer<typeof widgetSchema>;
