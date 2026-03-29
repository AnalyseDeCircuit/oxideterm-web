import en from "./en.json";
import zhHans from "./zh-hans.json";
import zhHant from "./zh-hant.json";
import ja from "./ja.json";
import ko from "./ko.json";
import fr from "./fr.json";
import de from "./de.json";
import es from "./es.json";
import it from "./it.json";
import ptBr from "./pt-br.json";
import vi from "./vi.json";

export type LangKey =
  | "en"
  | "zh-hans"
  | "zh-hant"
  | "ja"
  | "ko"
  | "fr"
  | "de"
  | "es"
  | "it"
  | "pt-br"
  | "vi";

export const translations: Record<LangKey, typeof en> = {
  en,
  "zh-hans": zhHans,
  "zh-hant": zhHant,
  ja,
  ko,
  fr,
  de,
  es,
  it,
  "pt-br": ptBr,
  vi,
};

export const languages: { key: LangKey; label: string }[] = [
  { key: "en", label: "English" },
  { key: "zh-hans", label: "简体中文" },
  { key: "zh-hant", label: "繁體中文" },
  { key: "ja", label: "日本語" },
  { key: "ko", label: "한국어" },
  { key: "fr", label: "Français" },
  { key: "de", label: "Deutsch" },
  { key: "es", label: "Español" },
  { key: "it", label: "Italiano" },
  { key: "pt-br", label: "Português" },
  { key: "vi", label: "Tiếng Việt" },
];

export function t(lang: LangKey) {
  return translations[lang] ?? translations.en;
}

export function langPath(lang: LangKey): string {
  return lang === "en" ? "/" : `/${lang}/`;
}
