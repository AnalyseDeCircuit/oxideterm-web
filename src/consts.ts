export const releasesUrl = "https://github.com/AnalyseDeCircuit/oxideterm/releases";

type StableRelease = {
  tag: string;
  version: string;
  assets: ReadonlySet<string>;
};

let stableRelease: Promise<StableRelease | null> | undefined;

export function getStableRelease(): Promise<StableRelease | null> {
  return stableRelease ??= fetchStableRelease();
}

async function fetchStableRelease(): Promise<StableRelease | null> {
  try {
    const res = await fetch(
      "https://api.github.com/repos/AnalyseDeCircuit/oxideterm/releases/latest",
      {
        headers: { Accept: "application/vnd.github.v3+json" },
        signal: AbortSignal.timeout(5000),
      }
    );
    if (!res.ok) return null;
    const data = await res.json();
    const version = typeof data?.tag_name === "string"
      ? /^v(\d+\.\d+\.\d+)$/.exec(data.tag_name)?.[1]
      : undefined;
    if (!version || data.draft || data.prerelease || !Array.isArray(data.assets)) return null;
    const assets = new Set<string>();
    for (const asset of data.assets) {
      if (typeof asset?.name === "string" && asset.state === "uploaded") assets.add(asset.name);
    }
    return { tag: data.tag_name, version, assets };
  } catch {
    return null;
  }
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
