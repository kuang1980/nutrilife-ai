# Nutrition safety and guideline provenance

## Reviewed attachments
The source chat returned `attachments.zip`, containing IMG_5163.JPG and IMG_5164.JPG. Both original images were visually inspected. They show printed Dietary Reference Intake tables: vitamins/elements on the first image and macronutrients on the second. Originals remain in the task's `work/references/` rather than the distributable repository because the photographs contain incidental surroundings and location-bearing metadata. No photo is embedded in the app.

The first image labels RDA and AI with an asterisk; its vitamin D and some element entries reflect the photographed edition, not necessarily current guidance. Do not copy the entire photographed tables into a production target engine. The second gives macronutrient amounts in g/day and AMDR percentages in parentheses. Its adult rows include carbohydrate 130g with 45–65%, protein values differentiated by sex with 10–35%, fat 20–35%, and fiber AIs varying by age/sex. Some pregnancy text is partly blank; do not infer a missing cell.

## Required distinctions
- **DRI** is the umbrella framework, including EAR, RDA, AI and UL; AMDR is a related dietary reference range.
- **RDA** is an amount intended to meet almost all healthy individuals' needs in a specified group. It is not an energy percentage.
- **AI** is used where evidence is insufficient to derive an RDA; it is not interchangeable with an EAR or a minimum diagnostic threshold.
- **EAR** is a group-oriented reference for estimated average requirements; it is not a default personal daily goal.
- **UL** is an upper intake boundary for risk assessment, not a target to reach. Missing/ND does not imply unlimited safety.
- **AMDR** represents a share of total energy, not grams/day and not a per-meal prescription. Adult references shown: carbohydrate 45–65%, protein 10–35%, fat 20–35%.

The app calculates logged macro energy as 4 kcal/g carbohydrate + 4 kcal/g protein + 9 kcal/g fat. This is illustrative: listed meal calories may differ because of rounding and fiber. Partial-day percentages are descriptive and must not label the day “adequate,” diagnose deficiency or trigger compensatory restrictions. Missing micronutrients are unknown, not zero. No individualized micronutrient targets, calorie prescription or body-weight calculation is delivered.

Official cross-check: [Health Canada macronutrient reference tables](https://www.canada.ca/en/health-canada/services/food-nutrition/healthy-eating/dietary-reference-intakes/tables/reference-values-macronutrients.html), reviewed October 27, 2026. Use current authoritative references and dietitian review for production. The photographed historical tables remain source context, not the authoritative current database.

## Product boundaries
General adult wellness only. Synthetic estimates are not nutrient-database evidence. Do not make treatment, deficiency, weight-loss, supplement, disease-control or outcome claims. Do not recommend skipping meals or compensating for intake. Hunger/fullness feedback changes the supportive copy; it does not automatically restrict future food. No real learning model is trained.

Allergy tags demonstrate exclusion logic only; actual ingredients, brand variability, kitchen cross-contact and the rest of the seeded day are not verified. Production must block unsafe candidates, offer no-result fallbacks, verify provenance and let people consult qualified professionals. Do not label a meal “allergy safe.”

Children, pregnancy/lactation, eating-disorder concerns and condition-specific diets are outside the demo's supported scope and require an appropriate qualified professional. Production onboarding must clarify scope and handle exclusions before generating a plan.

## Before any real-user pilot
Dietitian sign-off on content/rules and data sources; independent privacy/security review; explicit opt-in and revocation; deletion/export; notification quiet hours; accessibility testing; incident escalation; jurisdiction-specific legal assessment; evidence plan for claims. These are release gates, not implied certifications. A health-company partner receives aggregate pilot measures only under a separately reviewed arrangement; the demo implements no partner data sharing.
