# Partner demonstration · October 28, 2026

## Phone walkthrough
Open https://kuang1980.github.io/nutrilife-ai/ after deployment succeeds. No laptop server is needed. See PHONE-AND-HOSTING.md for home-screen setup. Rehearse online once before relying on offline caching; phone progress is separate from laptop progress.

## Before the meeting
Start with `npm start`, open http://localhost:4173 and keep the terminal running. Reset demo, use one tab, and turn off distracting personal notifications yourself. No login or internet needed. Use the laptop at its normal browser width, or a 390px responsive viewport for the mobile experience. Do not use real calendar or personal nutrition data. Rehearse once with the wrap and once with the salad. Have this script and the repository available locally.

## Three-minute story
| Time | Action | Suggested narration |
| --- | --- | --- |
| 0:00 | Show Today | “Meet Alex. Alex knows what a balanced lunch looks like. The hard part is making it happen between meetings. NutriLife helps a reasonable plan survive a real working day.” |
| 0:20 | Point to original lunch and dashboard | “Breakfast is logged. Lunch is still a plan, so its nutrients aren’t counted as consumed.” |
| 0:35 | Simulate meeting conflict | “This is a synthetic calendar event. A meeting now overlaps lunch. We have a 20-minute window before it, using ingredients Alex already has ready.” |
| 0:55 | Compare options | “The agent offers two practical options, with preparation time, approximate nutrition, ingredients and trade-offs. The wrap saves 22 minutes and keeps plants, protein and fiber in the meal.” |
| 1:20 | Approve swap | “The user decides. Only after approval do the meal and reminder move together. No silent changes.” |
| 1:35 | My plan | “Lunch is now 12:10, with a 12:05 nudge. The audit trail explains what changed.” |
| 1:50 | Preview 12:05 reminder | “This is a simulated in-app reminder. A future consented integration would deliver the real notification.” |
| 2:05 | Log lunch and choose satisfied | “We close the loop with a quick check-in. Approval is not the same as consumption. Now the meal is logged once.” |
| 2:20 | Insights | “The dashboard updates from actual logs: 940 estimated calories, 45 grams of protein, 21 grams of fiber and two meals. These are descriptive demo values, not a health grade.” |
| 2:40 | Close with partnership ask | “We’d like to test whether adapting at the point of disruption reduces daily effort. Could we work together on dietitian review and a small, voluntary feasibility pilot?” |

## If they ask about AI
“The prototype uses deterministic rules and synthetic data so we can demonstrate the experience reliably. Production AI could help explain and personalize proposals, while verified nutrition rules, permissions and transactional updates remain controlled in software. There is no connected model in this build.”

## If they ask what is different
“Meal planning and food tracking are established categories. Our hypothesis is that the workday execution loop—disruption, feasible action, approval, reminder, consumption and feedback—can be a more useful starting point for this audience. We need to validate that, not claim competitors lack every component.”

## Alternative paths
- Salad: Reset → simulate → choose lentil & quinoa → approve → log. Totals: 920 kcal, 44g protein, 23g fiber.
- User autonomy: Reset → simulate → keep original lunch. Original meal/reminder stay and conflict remains unresolved.
- Constraint: Reset → Preferences → exclude wheat → Today → simulate. Only salad is suggested. Explain that this shows tag filtering, not clinical allergy assurance.

## Recovery
- Portable fallback: open `demo.html` directly in a modern browser; the complete experience is embedded. Browser file-storage behavior can vary.
- Accidental clicks: Reset demo and start again; no external effects.
- Refresh: Stage and logs persist in the same browser. Select Today if you want to return to the main scene.
- No internet: Continue normally; all app assets and state are local.
- Blank/unreachable page: Ensure terminal server is running. Retry with 127.0.0.1:4173. Port occupied: `PORT=4174 npm start`, then use that URL.
- Storage blocked: A notice explains that progress lasts for the session; keep the tab open. Reset still works in memory.
- Old assets: Keep server running, reload; if needed clear localhost site data and reload. Rehearse before presenting.
- Server stopped: Restart it. The cached shell may provide a fallback but is not the primary rehearsal method.

## Do not imply
No real integrations, device push, learned personalization, measured clinical efficacy, verified food composition, personalized DRI prescription or deployed production service. No fabricated user metrics or partner endorsements.
