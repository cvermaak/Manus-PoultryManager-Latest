export function getApiBaseUrl() {
  if (typeof window !== "undefined") {
    return window.location.origin;
  }

  return process.env.VITE_API_BASE_URL ?? "http://localhost:3000";
}
