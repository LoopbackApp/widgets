import { getCurrentURL } from '@loopbackapp/widget-shared';

export async function initializeStyles(projectId: string) {
	const isInShadowDOM = checkIfInShadowDOM();
	const host = await getHostUrl();
	const styleLink = await createStyleLink(projectId, host);

	if (isInShadowDOM) {
		appendToShadowRoot(styleLink);
	} else {
		document.head.appendChild(styleLink);
	}
}

function checkIfInShadowDOM(): boolean {
	const element = document.querySelector('loopback-widget');
	let currentElement: Element | null | undefined = element;

	do {
		if (element?.shadowRoot) {
			return true;
		}
		currentElement = currentElement?.parentElement;
	} while (currentElement);

	return false;
}

async function getHostUrl() {
	const currentUrl = await getCurrentURL();
	const isLoopbackDev = currentUrl.searchParams.has('loopback-widget-dev');
	return isLoopbackDev ? 'http://localhost:5173' : 'https://dash.loopback.works';
}

async function createStyleLink(projectId: string, host: string) {
	const currentUrl = await getCurrentURL();
	const isLoopbackDraft = currentUrl.searchParams.has('loopback-widget-draft');
	const link = document.createElement('link');
	link.rel = 'stylesheet';
	link.type = 'text/css';
	link.href = `${host}/projects/${projectId}/widget/css${isLoopbackDraft ? '?loopback-widget-draft' : ''}`;
	return link;
}

function appendToShadowRoot(link: HTMLLinkElement): void {
	const shadowRoot = document.querySelector('loopback-widget')?.shadowRoot;
	if (!shadowRoot) return;
	shadowRoot.appendChild(link);
}
