<p align="center">
  <img src="src/assets/icon.png" alt="OxideTerm" width="96" height="96">
</p>

<h1 align="center">OxideTerm Website</h1>

<p align="center">
  <strong>Documentation & landing page for <a href="https://github.com/AnalyseDeCircuit/oxideterm">OxideTerm</a></strong>
  <br>
  <a href="https://oxideterm.app">https://oxideterm.app</a>
</p>

---

## Tech Stack

- **[Astro](https://astro.build/)** 6.1 — static site generator
- **[Starlight](https://starlight.astro.build/)** 0.38 — documentation theme
- **[Tailwind CSS](https://tailwindcss.com/)** 4 — utility-first styling

## Development

```bash
pnpm install
pnpm dev          # Start dev server
pnpm build        # Production build → dist/
pnpm preview      # Preview production build
```

## Structure

```
src/
├── assets/           # Images & icons
├── components/       # Landing page sections (Hero, Features, Security, …)
├── content/docs/     # Documentation pages (Markdown, EN + ZH)
├── i18n/             # Landing page strings (11 languages)
├── overrides/        # Starlight component overrides
├── pages/            # index.astro (landing page)
└── styles/           # Global CSS + design tokens
```

## i18n

The landing page supports 11 languages. Translations live in `src/i18n/*.json`:

en · zh-hans · zh-hant · ja · ko · fr · de · es · it · pt-br · vi

## License

Content is licensed under [CC BY-NC 4.0](LICENSE).
OxideTerm itself is licensed under [GPL-3.0](https://github.com/AnalyseDeCircuit/oxideterm/blob/main/LICENSE).
