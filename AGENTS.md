# Working on NutriLife AI

Read README.md, docs/PRODUCT.md, docs/SAFETY.md and docs/CODEX-TASKS.md before feature changes. Keep the demo runnable without installation or network access. Use src/domain.js for state transitions and derived totals; do not duplicate meal nutrition in views. Preserve explicit approval before plan mutations. Do not count planned meals as consumed. Keep synthetic data labels and simulated reminders honest. Never add real credentials, personal health data or external transmissions to the demo.

Run npm test and npm run check for behavior changes. Verify the complete flow in the browser and at a narrow viewport after layout changes. Record material QA limits in docs/QA.md. Increment service-worker cache version after shell changes. Keep product documentation aligned with delivered behavior. Do not turn DRI amounts into AMDR percentages or treat missing micronutrient data as zero. Scope changes to one task at a time; production adapters stay behind explicit interfaces and consent.

After editing source or styles, run npm run build to refresh the self-contained demo.html fallback.
