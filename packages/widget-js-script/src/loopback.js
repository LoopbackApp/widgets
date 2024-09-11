(function () {
  const VERSION = document.currentScript?.getAttribute("src").match(/\/(\d+\.\d+\.\d+)\//)?.at(1) ?? "latest"
  const BASE_URL = window.location.hostname === "localhost" ? "./dist" : `https://widget-preview.loopback.works/${VERSION}`;
	const script = document.createElement("script");
	script.src = `${BASE_URL}/ce.js`;
	script.onload = () => {
		const widget = document.createElement("loopback-widget");

		const link = document.createElement("link");
		link.rel = "stylesheet";
		link.type = "text/css";
		link.href = `${BASE_URL}/widget.min.css`;

		const shadowRoot = widget.shadowRoot;
		shadowRoot?.prepend(link);
		document.body.appendChild(widget);
	};
	document.head.appendChild(script);
})();
