(function () {
	const CONFIG = {
		defaultSubdomain: "widget",
		devUrl: "http://localhost:5176/dist",
		prodUrlTemplate: "https://{subdomain}.loopback.works/{version}",
		customStyles: `
      .lb-widget {
        border-radius: 0px;
        border-top-right-radius: 15px;
      }
      
      .lb-close {
        display: none;
      }
    `,
	};

	const getScriptAttributes = () => {
		const script = document.currentScript;
		return {
			src: script?.getAttribute("src") ?? "",
			projectId:
				script?.getAttribute("data-project-id") ?? "<not-specified-in-script-attribute-project-id>",
		};
	};

	const isWidgetDev = () => {
		return window.location.search?.includes("loopback-widget-dev");
	};

	const extractWidgetVersion = (src) => {
		return src.match(/\/(\d+\.\d+\.\d+)\//)?.at(1) ?? "latest";
	};

	const extractWidgetSubdomain = (src) => {
		return (
			src.match(/^(?:https?:\/\/)?([a-zA-Z0-9-]+)\.loopback\.works/)?.at(1) ??
			CONFIG.defaultSubdomain
		);
	};

	const getBaseUrl = (scriptSrc) => {
		if (isWidgetDev()) {
			return CONFIG.devUrl;
		}

		const widgetSubdomain = extractWidgetSubdomain(scriptSrc);
		const widgetVersion = extractWidgetVersion(scriptSrc);
		return CONFIG.prodUrlTemplate
			.replace("{subdomain}", widgetSubdomain)
			.replace("{version}", widgetVersion);
	};

	const createAndLoadScript = (baseUrl, projectId) => {
		const script = document.createElement("script");
		script.src = `${baseUrl}/ce.js`;
		script.onload = () => createAndSetupWidget(projectId);
		document.head.appendChild(script);
	};

	const createAndSetupWidget = (projectId) => {
		const widget = document.createElement("loopback-widget");
		widget.setAttribute("projectId", projectId);
		document.body.appendChild(widget);

		customElements.whenDefined("loopback-widget").then(() => applyCustomStyles(widget));
	};

	const applyCustomStyles = (widget) => {
		const styleElement = document.createElement("style");
		styleElement.textContent = CONFIG.customStyles;
		widget.shadowRoot?.append(styleElement);
	};

	const init = () => {
		const { src, projectId } = getScriptAttributes();
		const baseUrl = getBaseUrl(src);
		createAndLoadScript(baseUrl, projectId);
	};

	init();
})();
