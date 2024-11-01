export function initializeStyles(projectId: string): void {
	const isInShadowDOM = checkIfInShadowDOM();
	const host = getHostUrl();
	const styleLink = createStyleLink(projectId, host);

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

function getHostUrl(): string {
	const search = window.location.search;
	const isLoopbackDev = search?.includes('loopback-widget-dev');
	return isLoopbackDev ? 'http://localhost:5173' : 'https://dash.loopback.works';
}

function createStyleLink(projectId: string, host: string): HTMLLinkElement {
	const isLoopbackDraft = window.location.search?.includes('loopback-widget-draft');
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
