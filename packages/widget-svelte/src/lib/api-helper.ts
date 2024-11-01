import type { FeedbackPayload } from './types.js';

export async function submitFeedbackForm({
	email,
	note,
	origin,
	projectId,
	selectedEmotion
}: FeedbackPayload): Promise<boolean> {
	const feedback = {
		type: 'feedback',
		emotion: selectedEmotion,
		note,
		email,
		projectId,
		origin
	};

	const baseUrl = window.location.search?.includes('loopback-widget-dev')
		? 'http://localhost:5173'
		: 'https://dash.loopback.works';

	const url = `${baseUrl}/api/feedback`;

	try {
		const res = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(feedback)
		});
		return res.ok;
	} catch (error) {
		console.error('Failed to submit feedback:', error);
		return false;
	}
}
