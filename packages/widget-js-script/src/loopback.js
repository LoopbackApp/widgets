(function () {
  const SRC = document.currentScript?.getAttribute("src") ?? "";
  const VERSION = SRC.match(/\/(\d+\.\d+\.\d+)\//)?.at(1) ?? "latest";
  const SUBDOMAIN = SRC.match(/^(?:https?:\/\/)?([a-zA-Z0-9-]+)\.loopback\.works/)?.at(1) ?? "widget"
  const BASE_URL =
    window.location.hostname === "localhost"
      ? "./dist"
      : `https://${SUBDOMAIN}.loopback.works/${VERSION}`;
  const projectId = document.currentScript?.getAttribute("data-project-id");

  const script = document.createElement("script");
  script.src = `${BASE_URL}/ce.js`;
  script.onload = () => {
    const widget = document.createElement("loopback-widget");
    widget.setAttribute("projectId", projectId);

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = `${BASE_URL}/widget.min.css`;

    const cssVariablesStyle = document.createElement("style");
    cssVariablesStyle.textContent = `
:host {
	--background: 0 0% 100%;
	--foreground: 0 0% 3.9%;
     
	--muted: 0 0% 96.1%;
	--muted-foreground: 0 0% 45.1%;
    
	--popover: 0 0% 100%;
	--popover-foreground: 0 0% 3.9%;
    
	--card: 0 0% 100%;
	--card-foreground: 0 0% 3.9%;
    
	--border: 0 0% 89.8%;
	--input: 0 0% 89.8%;
    
	--primary: 0 0% 9%;
	--primary-foreground: 0 0% 98%;
    
	--secondary: 0 0% 96.1%;
	--secondary-foreground: 0 0% 9%;
    
	--accent: 0 0% 96.1%;
	--accent-foreground: 0 0% 9%;
    
	--destructive: 0 72.2% 50.6%;
	--destructive-foreground: 0 0% 98%;
    
	--ring: 0 0% 3.9%;
    
	--radius: 0.5rem;
}

:host-context(.dark) {
	--background: 0 0% 3.9%;
	--foreground: 0 0% 98%;
    
	--muted: 0 0% 14.9%;
	--muted-foreground: 0 0% 63.9%;
    
	--popover: 0 0% 3.9%;
	--popover-foreground: 0 0% 98%;
    
	--card: 0 0% 3.9%;
	--card-foreground: 0 0% 98%;
    
	--border: 0 0% 14.9%;
	--input: 0 0% 14.9%;
    
	--primary: 0 0% 98%;
	--primary-foreground: 0 0% 9%;
    
	--secondary: 0 0% 14.9%;
	--secondary-foreground: 0 0% 98%;
    
	--accent: 0 0% 14.9%;
	--accent-foreground: 0 0% 98%;
    
	--destructive: 0 62.8% 30.6%;
	--destructive-foreground: 0 0% 98%;
    
	--ring: 0 0% 83.1%;
}`;

    const shadowRoot = widget.shadowRoot;
    shadowRoot?.prepend(link);
    shadowRoot?.prepend(cssVariablesStyle);
    document.body.appendChild(widget);
  };
  document.head.appendChild(script);
})();
