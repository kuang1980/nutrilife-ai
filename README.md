# NutriLife AI

**A nutrition execution companion for busy working adults.** It helps turn a reasonable plan into a meal that actually happens when work gets in the way.

Partner-demo build for **October 28, 2026**. Mobile-first, interactive, dependency-free web prototype. All people, meals, nutrient amounts, calendar events and times are synthetic. The “agent” is a transparent deterministic state machine, not a connected LLM or API.

## Run now

**Quick fallback:** Open `demo.html` directly in a modern browser. It contains the entire working prototype, styles and illustrations in one file. No server is required; file-based storage support varies by browser. The local-server route below is recommended for development and consistent persistence. On macOS you can also double-click `Start Demo.command` to start that server.

Requires Node.js 20 or newer. No package installation, API keys, account, paid service, or internet connection required.

```sh
cd /Users/khsu1/Documents/Codex/2026-10-27/referenced-chatgpt-conversation-this-is-an/outputs/nutrilife-ai
npm start
```

Open **http://localhost:4173**. Keep the terminal running during your demo. Stop with Ctrl+C. If the port is occupied: `PORT=4174 npm start`. Open the matching URL. Use a desktop browser responsive view at approximately 390px to show the mobile layout, or simply use the full desktop layout. A real phone cannot reach this loopback address directly; use the laptop for the reliable demo.

## Three-minute walkthrough

1. Click **Reset demo**. Breakfast is logged; dashboard shows 420 kcal, 22g protein, 9g fiber and 1/4 meals.
2. Click **Simulate meeting conflict**. A 12:30–13:30 work meeting conflicts with lunch. Compare two quick options and their nutrition/allergen disclosures.
3. Select a meal and click **Approve swap & update plan**. Only now does lunch move to 12:10, and its in-app reminder move to 12:05. Open **My plan** to inspect the timeline and audit trail.
4. Click **Preview 12:05 reminder**, then **I’ve had lunch · log meal**. Select how lunch felt. This logs one serving and records feedback.
5. Open **Insights**. The default wrap produces 940 kcal, 45g protein, 21g fiber and 2/4 meals. The salad branch produces 920 kcal, 44g protein and 23g fiber. Planned meals are excluded from totals.

See [the presenter script](docs/DEMO.md) for narration, alternate paths and recovery.

## What works

- Conflict simulation; two selectable alternatives; approval or decline; synchronized plan/reminder changes; simulated reminder; one-time lunch logging with feedback; computed dashboard; timeline audit.
- Four functional navigation views, meal detail dialogs, exclusion filtering, hydration recording, JSON progress export, browser persistence, reset.
- Local assets only; service worker caches the shell after the first successful localhost load. No external font/image/CDN. Internet can remain off with the local server running. A warmed service-worker cache adds a fallback if the server stops, but rehearse with the server running. Browser storage failures fall back to in-memory progress with a visible notice.

## Boundaries

Not medical advice or a clinical nutrition plan. There is no real calendar connection, push notification, food ordering, nutritional database, image recognition, AI inference, authentication, clinician dashboard or health outcome prediction. No placeholder control pretends to invoke one. Data persists in browser local storage, unencrypted; use synthetic data only. No analytics or outbound application requests (unless you open the optional reference link).

## Project map

| File | Purpose |
| --- | --- |
| `src/domain.js` | Seed data, state transitions, option filters, totals and state loading |
| `src/app.js` | Rendering, navigation, dialogs, events, storage, export |
| `src/style.css` | Responsive design system and accessible interaction styling |
| `public/meal.svg` | Local original food illustration |
| `server.mjs` | Tiny local static server |
| `sw.js` | Offline shell cache |
| `tests/domain.test.js` | Meaningful state and nutrition regression tests |
| `docs/PRODUCT.md` | Requirements, user journeys and acceptance criteria |
| `docs/COMPETITORS.md` | Evidence-based positioning and differentiation hypothesis |
| `docs/ARCHITECTURE.md` | Current implementation and proposed production architecture |
| `docs/SAFETY.md` | DRI/AMDR nuance, source image review and safety boundaries |
| `docs/ROADMAP.md` | Scoped milestones and pilot decision gates |
| `docs/CODEX-TASKS.md` | Actionable next development tasks |
| `docs/SOURCE-CONTEXT.md` | Recovered prior-chat requirements and known source gaps |

## Continue in Codex

Open this **nutrilife-ai** folder as a local Codex project. Start with: “Read AGENTS.md and docs/CODEX-TASKS.md. Implement task 1 and verify its acceptance criteria.” The folder is a standalone local Git repository with a baseline commit; no remote is configured. Publish to your own remote when ready.

```sh
npm test
npm run check
git log --oneline
```

The editable app has no build step. Regenerate the portable single-file fallback after changes with `npm run build`. Future hosting can serve this directory as static files. Before changing `sw.js`, increment its cache version when shell assets change; reload while the server is running. For a clean browser rehearsal, reset the demo. If an older shell persists, clear site data for localhost and reload.

## Verification

See `docs/QA.md` for executed checks and remaining limitations. This is a partner-facing interaction prototype, not evidence of clinical efficacy or a production-ready health product.
