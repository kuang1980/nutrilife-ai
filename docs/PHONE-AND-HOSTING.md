# Phone demo and GitHub Pages

## Open on a phone
The hosting target is **https://kuang1980.github.io/nutrilife-ai/**. Deployment must succeed before that address is live. Open it in Safari on iPhone or Chrome on Android. Your laptop does not need to be running. Any visitor with the address can view this synthetic demo; there is no login.

- iPhone: in Safari, open Share and choose **Add to Home Screen**. Open that shortcut for a standalone view. Menu wording may vary by OS version.
- Android: in Chrome, use the browser menu's **Add to Home screen** or **Install app**, when offered.
- First visit requires internet. Wait for the page to finish loading before going offline; the service worker caches its shell in supporting browsers. Keep an online copy open for the partner demo if phone caching is unavailable.
- Tap **Reset demo**, then **Simulate meeting conflict**. Approve a swap, preview the in-app reminder, log lunch and open Insights.
- The phone stores its own progress. It does not synchronize with your laptop or another browser. Opening from the home screen can use a separate storage context on some platforms.

This is a web demo with a home-screen manifest, not an App Store app. No real device push reminder, calendar integration or AI API is added. Use only synthetic data; browser storage is unencrypted. Reset clears the demo state, not the browser's asset cache.

## Hosting layout
The source repository is `kuang1980/nutrilife-ai`. `.github/workflows/pages.yml` runs tests and syntax checks, copies only web assets to `site/`, uploads that artifact and deploys it to GitHub Pages. The repository is public. Documentation and source are visible in GitHub; the hosted artifact contains only the app shell, illustration, manifest and icon.

Relative asset URLs and a project-scoped service worker support GitHub's `/nutrilife-ai/` base path. The cache cleanup removes only obsolete caches for this exact project scope. Touch controls and bottom navigation include phone safe-area spacing.

## Update from Codex
After source changes:
```sh
npm test
npm run check
npm run build
npm run build:site
git add <changed-files>
git commit -m "Describe the change"
git push origin main
```
The Pages workflow deploys successful pushes automatically. No API key or hosting secret is checked in. Check the repository's Actions tab for deployment progress. `site/` is generated and ignored; the workflow rebuilds it.

After shell changes, increment the cache version in `sw.js`, and regenerate the portable demo with `npm run build`. On a phone, reload online once to fetch new assets. If an older version persists, close/reopen the tab or clear site data for this site and reload. Browser cache clearing also clears saved demo progress.

## GitHub Pages configuration
Repository Settings → Pages → Source: **GitHub Actions**. HTTPS is provided by GitHub Pages. No custom domain is required. Reference: [GitHub Pages publishing sources](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Local fallback
`npm start` still runs at http://localhost:4173 on the laptop. `demo.html` remains self-contained for local browser use. A phone's `localhost` refers to the phone, so use the hosted HTTPS address on the phone.
