export function getHost(searchParams: URLSearchParams) {
	const isLoopbackDev = searchParams.has("loopback-widget-dev");
	const host = isLoopbackDev ? "http://localhost:5173" : "https://dash.loopback.works";
	return host;
}
