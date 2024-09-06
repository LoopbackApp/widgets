import { z } from "zod";

export const widgetSchema = z
	.object({
		emotion: z.union([z.literal(1), z.literal(2), z.literal(3)]),
		note: z.string(),
		email: z.union([z.literal(""), z.string().email()]),
	})
	.refine(
		(data) => {
			if (!!data.email && !data.note) {
				return false;
			}
			return true;
		},
		{
			message: "Please leave a note along with your email",
			path: ["note"],
		}
	);

export type WidgetFormType = z.infer<typeof widgetSchema>;
