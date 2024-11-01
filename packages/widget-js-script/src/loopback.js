(function () {
	const SRC = document.currentScript?.getAttribute("src") ?? "";
	const isLocalhost = new URL(SRC).hostname === "localhost";

	let baseUrl = "";
	if (isLocalhost) {
		baseUrl = "http://localhost:5176/dist";
	} else {
		const VERSION = SRC.match(/\/(\d+\.\d+\.\d+)\//)?.at(1) ?? "latest";
		const SUBDOMAIN =
			SRC.match(/^(?:https?:\/\/)?([a-zA-Z0-9-]+)\.loopback\.works/)?.at(1) ?? "widget";
		baseUrl = `https://${SUBDOMAIN}.loopback.works/${VERSION}`;
	}

	const projectId = document.currentScript?.getAttribute("data-project-id");
	const script = document.createElement("script");
	script.src = `${baseUrl}/ce.js`;
	script.onload = () => {
		const widget = document.createElement("loopback-widget");
		widget.setAttribute("projectId", projectId);
		document.body.appendChild(widget);
	};
	document.head.appendChild(script);
})();
