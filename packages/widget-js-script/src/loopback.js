(function () {
	const script = document.createElement("script");
	script.src = "./dist/ce.js";
	script.onload = () => {
		const widget = document.createElement("loopback-widget");

		const link = document.createElement("link");
		link.rel = "stylesheet";
		link.type = "text/css";
		link.href = "./dist/widget.min.css";

		const shadowRoot = widget.shadowRoot;
		shadowRoot?.prepend(link);
		document.body.appendChild(widget);
	};
	document.head.appendChild(script);
})();
