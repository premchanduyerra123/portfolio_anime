# Prem Chandu Portfolio

React and Vite portfolio powered by Sanity CMS. The bundled JSON data remains as a read-only fallback if Sanity is unavailable or has not been seeded yet.

## Development

```bash
npm run dev
```

The portfolio runs at `http://localhost:5173`. Use this exact hostname because it is registered in the Sanity CORS settings.

On this Windows installation, if the `npm` shortcut reports a missing `npm-cli.js`, run the same command with `C:\Program Files\nodejs\npm.cmd` instead of `npm`.

## Sanity Studio

The Studio is configured for project `fchi1qxx` and the public `production` dataset.

```bash
npm run studio
```

The Studio runs at `http://localhost:3333`. Sign in with the Sanity account that owns the project.

## Initial content import

Generate the import file from the current fallback data:

```bash
npm run sanity:seed
```

Log in once and import the generated documents:

```bash
npx sanity login
npm run sanity:import
```

The import uses stable document IDs and `--replace`, so it can be rerun when intentionally resetting the CMS content from `src/data/portfolio.json`. Normal content updates should be made and published in Sanity Studio.

## Production builds

```bash
npm run build
npm run studio:build
```

The portfolio is built into `dist`, while the Studio is built separately into `sanity-dist`.
