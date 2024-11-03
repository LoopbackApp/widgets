import { getHost } from "./helper";
import { FeedbackPayload } from "./types";

export async function submitFeedback(payload: FeedbackPayload): Promise<boolean> {
	const searchParams = new URLSearchParams(window.location.search);
	const host = getHost(searchParams);
	const url = `${host}/api/feedback`;

	try {
		const res = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(payload),
		});
		return res.ok;
	} catch (error) {
		console.error("Failed to submit feedback:", error);
		return false;
	}
}
