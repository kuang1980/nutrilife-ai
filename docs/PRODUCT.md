# Product requirements · v0.1

## Positioning
NutriLife AI helps busy working adults execute nourishing meals when their day changes. The wedge is the **closed action loop**: notice disruption → explain feasible alternatives → ask permission → update plan and reminder → record what happened → use feedback. “Less daily coordination” is the value proposition to test, not a proven clinical outcome.

Primary persona: Alex, a fictional 34-year-old office worker with back-to-back meetings, a plant-forward preference and ready-to-eat staples. Wants consistency without another tracking chore. Secondary customer hypothesis: a health company offering a voluntary employee wellness benefit. Partner access to individual eating data is not part of the MVP.

## MVP delivered
| Requirement | Acceptance criterion |
| --- | --- |
| Daily plan | Four eating occasions with time, preparation time and illustrative nutrient estimates |
| Disruption awareness | Explicit synthetic meeting trigger overlaps 12:30 lunch; original plan remains unchanged pending approval |
| Feasible alternatives | Wrap (8 min) and salad (6 min) fit a 20-minute pre-meeting window; transparent ingredients and allergen tags |
| User control | Select either option; approve or decline. Decline keeps original reminder and acknowledges unresolved conflict |
| Consistent execution | Approval moves lunch to 12:10 and reminder to 12:05 in the same state transition |
| Reminder | Manual clock advance displays in-app reminder, honestly labeled simulated |
| Meal logging | One serving plus satisfaction feedback; repeated logging cannot double-count |
| Dashboard | Derived consumed-only calories, protein, fiber, meal count and macro distribution |
| Reliability | No internet dependency; resettable data; persisted progress; safe initial-state fallback on malformed storage |
| Explainability | Audit trail shows meeting, approval, schedule update, reminder and log |

Other delivered conveniences: meal details, hydration record, food exclusion filters for swaps, JSON export. No full recipe editor or open-ended chat.

## User journeys
1. **Flexible lunch:** Today → simulate conflict → compare → approve → My plan → preview reminder → log and check in → Insights. Success means no involuntary change and visible consistency across views.
2. **Different preference:** Conflict → choose salad → approve → log “Still a little hungry.” Salad nutrient values flow through every downstream view; response encourages listening to hunger without compensation.
3. **Keep control:** Conflict → keep original lunch. No meal/reminder mutation, conflict remains visible, reset available.
4. **Ingredient constraint:** Before approval, Preferences → exclude wheat → Today → conflict. Wrap is omitted and salad selected. This is fixture filtering, not verified allergy safety.
5. **Resume/rehearse:** Reload returns to saved stage; reset returns to the deterministic opening scene.

## Proposed pilot requirements (not implemented)
Explicit opt-in calendar free/busy access; quiet hours; vetted food/ingredient data; editable portions; consent and deletion; professional-reviewed nutrition rules; safe fallbacks for uncertainty; delivery/consumption distinction; testing across diverse work schedules. Collect the minimum required context and avoid meeting titles where free/busy suffices.

## Success measures to validate
Primary: share of consenting participants with a disruption who approve a feasible adaptation and report eating a meal. Secondary: decision time, reminder helpfulness, opt-out rate, weekly retention and self-reported effort. Instrument each state transition only after consent; demo has no analytics. Do not substitute approval rate for diet quality or claim improved biomarkers. Run interviews and a small feasibility study before outcome claims.

## Out of scope
Treatment, diagnosis, supplements, eating-disorder care, child/pregnancy nutrition, automated purchasing, comprehensive micronutrient assessment, real-time restaurant inventory, health-company surveillance and autonomous changes.
