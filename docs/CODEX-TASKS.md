# Actionable Codex development tasks

Keep changes narrow. Each task should end with tests, browser verification where relevant and updated docs. Do not implement the entire backlog in one turn.

## 1. Harden state invariants
Prompt: “Read AGENTS.md. Replace basic hydration checks with semantic schema validation. Preserve every demo branch and add regression cases.”

Acceptance: logged stage requires one approved lunch, matching feedback and reminder; non-approved stages cannot have swapped lunch; event records become structured; malformed/extra data cannot render as valid progress; original demo remains zero-install. Existing seven tests pass plus targeted corruption cases. Add a migration or intentionally reset the old version.

## 2. Improve accessibility and UI regression coverage
Prompt: “Review the responsive prototype for keyboard use and narrow screens. Add a minimal reproducible UI test setup without introducing a network requirement to run the app.”

Acceptance: proper single-choice radio semantics; sensible focus after selection, approval and dialog close; all meaningful buttons have ≥44px touch targets; 320/390/768/1280px screens show no horizontal overflow; complete keyboard demo; automated tests cover both swap paths, decline, reload, reset and modal close. Keep test dependencies optional for running the app.

## 3. Let users correct a meal log
Prompt: “Add a local-only portion selector and edit/undo lunch log using pure domain transitions.”

Acceptance: amounts scale coherently; confirm before consumption is recorded; edit replaces rather than adds; undo restores totals; no automatic restrictive advice; feedback remains optional/supportive in the redesigned flow. Add meaningful arithmetic tests.

## 4. Introduce adapter boundaries
Prompt: “Separate synthetic calendar, food catalog and reminder adapters from the UI while preserving all demo behavior.”

Acceptance: explicit fixture adapter mode; no secret credentials; injected clock; reminder schedule/cancel states; integration interfaces documented; mocked provider error path still allows manual replanning; no actual external calls yet.

## 5. Build a reviewed nutrition catalog (release gate)
Prompt: “Prepare an ingestion schema for verified meal composition with source, units, serving amount, provenance, confidence, allergen verification state and guideline version. Use synthetic fixtures until approved sources are selected.”

Acceptance: unknown nutrient fields stay unknown; RDA/AI/UL/AMDR are distinct record types; dietitian-review checklist and no-result handling; no personal target calculation without approved scope. Never derive clinical rules from image OCR alone.

## 6. Consent and data lifecycle (before real users)
Prompt: “Design the consent, data inventory, retention, export and deletion flows for a voluntary pilot. Implement only approved scoped behavior.”

Acceptance: purpose-specific opt-in; calendar revocation; local clearing separate from remote deletion; access boundaries; no employer access to individual logs; security/privacy review documented. Do not connect real accounts by default.

## 7. Implement one real integration after review
Prompt: “Implement a consented free/busy calendar adapter and reminder delivery against the approved backend architecture, with a deterministic demo fallback.”

Acceptance: least-privilege scopes; timezone/DST handling; stale-proposal revalidation; idempotent approved updates; failure recovery; explicit scheduled/delivered distinctions; quiet hours; provider revocation. Keep synthetic mode the default for presentations.
