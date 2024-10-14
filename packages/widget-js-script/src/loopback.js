(function () {
	const SRC = document.currentScript?.getAttribute("src") ?? "";
	const VERSION = SRC.match(/\/(\d+\.\d+\.\d+)\//)?.at(1) ?? "latest";
	const SUBDOMAIN =
		SRC.match(/^(?:https?:\/\/)?([a-zA-Z0-9-]+)\.loopback\.works/)?.at(1) ?? "widget";
	const BASE_URL = `https://${SUBDOMAIN}.loopback.works/${VERSION}`;
	const projectId = document.currentScript?.getAttribute("data-project-id");

	const script = document.createElement("script");
	script.src = `${BASE_URL}/ce.js`;
	script.onload = () => {
		const widget = document.createElement("loopback-widget");
		widget.setAttribute("projectId", projectId);

		const link = document.createElement("link");
		link.rel = "stylesheet";
		link.type = "text/css";
		const HOST =
			new URL(SRC).hostname === "localhost"
				? "http://localhost:5173"
				: "https://dash.loopback.works";
		link.href = `${HOST}/projects/${projectId}/widget/css`;

		const shadowRoot = widget.shadowRoot;
		shadowRoot?.prepend(link);
		document.body.appendChild(widget);
	};
	document.head.appendChild(script);
})();
