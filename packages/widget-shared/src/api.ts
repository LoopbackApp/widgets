export interface FeedbackPayload {
	email?: string;
	note?: string;
	projectId: string;
	emotion: number;
}

/**
 * Gets the current URL from either the browser window or active Chrome tab.
 *
 * @returns {Promise<URL>} URL object for the current page
 */
export async function getCurrentURL(): Promise<URL> {
	if (typeof chrome !== "undefined" && chrome.tabs) {
		// Get URL from Chrome extension
		const [activeTab] = await chrome.tabs.query({ active: true, currentWindow: true });
		if (activeTab?.url) {
			return new URL(activeTab.url);
		}
	}

	// Get URL from browser window
	return new URL(window.location.href);
}

/**
 * Submits user feedback to the API.
 *
 * @param {FeedbackPayload} feedback - The feedback payload containing user input.
 * @returns {Promise<Response>} The fetch response from the API.
 */
export async function submitFeedback(feedback: FeedbackPayload): Promise<Response> {
	const currentURL = await getCurrentURL();

	const baseUrl = currentURL.searchParams.has("loopback-widget-dev")
		? "http://localhost:5173"
		: "https://dash.loopback.works";

	const res = await fetch(`${baseUrl}/api/feedback`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ ...feedback, type: "feedback", origin: currentURL.href }),
	});
	return res;
}
