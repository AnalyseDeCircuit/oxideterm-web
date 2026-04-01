// OxideTerm application version — fetched from GitHub latest release at build time.
// Falls back to hardcoded version if the API call fails.
const FALLBACK_VERSION = "1.0.0";

let _cachedVersion: string | null = null;

export async function getOxideTermVersion(): Promise<string> {
  if (_cachedVersion) return _cachedVersion;
  try {
    const res = await fetch(
      "https://api.github.com/repos/AnalyseDeCircuit/oxideterm/releases/latest",
      {
        headers: { Accept: "application/vnd.github.v3+json" },
        signal: AbortSignal.timeout(5000),
      }
    );
    if (res.ok) {
      const data = await res.json();
      const tag: string = data.tag_name ?? "";
      _cachedVersion = tag.replace(/^v/, "") || FALLBACK_VERSION;
    } else {
      _cachedVersion = FALLBACK_VERSION;
    }
  } catch {
    _cachedVersion = FALLBACK_VERSION;
  }
  return _cachedVersion;
}
