# NCWiki Redesign

Modernes, statisches Next.js-Redesign der NCWiki-Plattform zur Vorbereitung auf die Schweizer medizinische Prüfung.

## Tech Stack

- Next.js 14 + TypeScript (App Router)
- Tailwind CSS (responsive, mobile-first)
- React Icons
- Static Site Generation (`output: export`) für GitHub Pages
- GitHub Actions für automatisches Deployment

## Lokale Entwicklung

```bash
npm install
npm run dev
```

Danach im Browser öffnen: `http://localhost:3000`

## Build (statisch)

```bash
npm run build
```

Die statische Website liegt danach in `out/`.

## Seitenstruktur

- `/` Startseite mit Dashboard
- `/uebungsserien`
- `/untertests`
- `/neuigkeiten`
- `/erfahrungsberichte`
- `/kurse-events`
- `/ueber-uns`
- `/kontakt`

## GitHub Pages Deployment

Deployment läuft automatisch über `.github/workflows/deploy.yml` bei Push auf `main`.

1. In GitHub: **Settings → Pages**
2. Source auf **GitHub Actions** setzen
3. Nach dem ersten erfolgreichen Workflow ist die Seite unter folgender URL erreichbar:

`https://kroeppster.github.io/ncwiki-redesign/`

## Prototype schnell ansehen

- Lokal: `npm run dev` und `http://localhost:3000` öffnen
- Produktiv-ähnlich (statisch): `npm run build` und dann z. B. `npx serve out`
