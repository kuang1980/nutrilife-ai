# Verification record

Executed October 27, 2026, using Node 24 and the Codex in-app Chromium browser.

## Passed
- `npm test`: seven domain tests covering complete wrap loop, salad arithmetic, decline immutability, ingredient exclusions, invalid action order/feedback, malformed saved state and water bounds.
- `npm run check`: JavaScript syntax checks for app, domain and server.
- `npm run build`: self-contained HTML generated successfully from current sources.
- Live browser: initial plan → conflict → approve wrap → preview reminder → log satisfied → dashboard shows 940 kcal / 45g protein / 21g fiber / 2 meals.
- Live browser: reset → conflict → choose salad → approve → log hungry → 920 kcal / 44g protein / 23g fiber / 2 meals.
- Browser reload preserves completed salad state and totals.
- Updated plan shows approved meal, 12:10 lunch, 12:05 reminder and audit events.
- Mobile visual inspection at 390 × 844; dashboard and navigation fit. DOM measurements show no horizontal overflow at 390px and 320px widths.
- Desktop visual inspection at default 1280px width; cohesive hero, agent and page navigation.
- Service-worker fallback: stopped local server, reloaded the warmed main page, verified heading and successfully triggered conflict with both candidates visible.
- Reset restores the opening scene.
- Self-contained demo.html rendered in browser over localhost; decline preserved the original lunch and reminder. Direct file:// loading is provided as a fallback but was not separately browser-tested.
- Decline path verified in the browser, alongside domain tests.

## Limits
No automated browser regression suite yet. No real phone, Safari/Firefox, screen-reader, exhaustive keyboard/focus or formal contrast audit. Optional JSON export and forced storage-denial path are implemented but not exercised end-to-end. Nutrition and ingredients are manually authored synthetic fixtures, not clinically validated. No external API or notification provider exists. See SAFETY.md and CODEX-TASKS.md before any real-user pilot.

Previews: desktop-home.png, mobile-home.png and mobile-dashboard.png show actual browser output. They are reference captures, not interactive mocks.
