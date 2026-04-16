// OxideTerm application version — fetched from GitHub latest release at build time.
// Falls back to hardcoded version if the API call fails.
const FALLBACK_VERSION = "1.2.1";

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

// GitHub star count — fetched from GitHub repo API at build time.
// Returns null if the API call fails (button degrades gracefully).
let _cachedStars: string | null | undefined = undefined;

export async function getGitHubStars(): Promise<string | null> {
  if (_cachedStars !== undefined) return _cachedStars;
  try {
    const res = await fetch(
      "https://api.github.com/repos/AnalyseDeCircuit/oxideterm",
      {
        headers: { Accept: "application/vnd.github.v3+json" },
        signal: AbortSignal.timeout(5000),
      }
    );
    if (res.ok) {
      const data = await res.json();
      const count: number = data.stargazers_count ?? 0;
      if (count >= 1000) {
        _cachedStars = `${(count / 1000).toFixed(1).replace(/\.0$/, "")}k`;
      } else {
        _cachedStars = String(count);
      }
    } else {
      _cachedStars = null;
    }
  } catch {
    _cachedStars = null;
  }
  return _cachedStars;
}
