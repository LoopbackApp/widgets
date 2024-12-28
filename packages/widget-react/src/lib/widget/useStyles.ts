import { useEffect, useState } from "react";
import { getHost } from "./helper";

export function useStyles(projectId: string) {
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		const href = getHref(projectId);
		const link = createLink(href);

		// This prevents a flash of unstyled content
		link.onload = () => setIsLoaded(true);
		document.head.appendChild(link);

		return () => {
			document.head.removeChild(link);
		};
	}, [projectId]);

	return { isLoaded };
}

function createLink(href: string) {
	const link = document.createElement("link");
	link.rel = "stylesheet";
	link.href = href;
	return link;
}

function getHref(projectId: string) {
	const searchParams = new URLSearchParams(window.location.search);
	const isLoopbackDraft = searchParams.has("loopback-widget-draft");
	const host = getHost(searchParams);
	return `${host}/app/projects/${projectId}/widget/css${isLoopbackDraft ? "?loopback-widget-draft" : ""}`;
}
