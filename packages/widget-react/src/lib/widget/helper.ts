export function getHost(searchParams: URLSearchParams) {
	const isLoopbackDev = searchParams.has("loopback-widget-dev");
	const host = isLoopbackDev ? "http://localhost:5173" : "https://loopback.works";
	return host;
}
