export interface WidgetState {
	selectedEmotion: number | null;
	email: string | null;
	note: string | null;
	submitSuccess: boolean | null;
}

export interface FeedbackPayload extends WidgetState {
	projectId: string;
	origin: string;
}
