export interface FeedbackPayload {
	email?: string;
	note?: string;
	projectId: string;
	emotion: number;
}

/**
 * Submits user feedback to the API.
 *
 * @param {FeedbackPayload} feedback - The feedback payload containing user input.
 * @returns {Promise<Response>} The fetch response from the API.
 */
export async function submitFeedback(feedback: FeedbackPayload): Promise<Response> {
	const baseUrl = window.location.search?.includes("loopback-widget-dev")
		? "http://localhost:5173"
		: "https://dash.loopback.works";

	const res = await fetch(`${baseUrl}/api/feedback`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ ...feedback, type: "feedback", origin: window.location.href }),
	});
	return res;
}
