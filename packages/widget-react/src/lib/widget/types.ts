export type FeedbackPayload = {
	type: "feedback";
	emotion: number;
	origin: string;
	note?: string;
	email?: string;
	projectId: string;
};
