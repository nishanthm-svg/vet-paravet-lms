# Pashu Arogya Academy (LMS)

A self-paced, instructor-free learning management system for **veterinarians and para-vets** working with dairy cattle and buffaloes. Built the same way as [Shreeja Learning Academy](../shreeja-lms) — a dependency-free static site (plain HTML/CSS/JS, no build step, no login, no backend) so it can be hosted anywhere or opened straight from a static file server.

Content is adapted from NDDB's *Handbook of Good Dairy Husbandry Practices* and *Ethnoveterinary Formulations for Important Ailments in Bovines*.

## Module 1: General Observation of an Animal

Written for learners who already work with animals day to day (vets and para-vets), so the reading level is a notch more technical than a farmer-facing course — but still plain, direct language with every term explained.

1. **The Seven Questions for a Healthy Animal** — the quick behaviour/attitude/condition/appetite/excretion/milk-yield checklist every visit should start with.
2. **Reading Vital Signs** — normal breathing rate, rumination rate, rumen movement, coat/appearance, and the classic signs of fever (cold ears/horns/legs, hot body).
3. **Body Condition Scoring (BCS)** — the 5-point scale, what each score means for health/breeding risk, and a short case study applying it.

Modules 2–17 are listed on the dashboard as "Coming soon" placeholders, titled directly from the source handbook's table of contents, ready to be filled in the same way (see "Adding the next module" below).

## How it works

Same design as Shreeja Learning Academy:

- **No login, no backend.** Progress is saved automatically in the learner's browser via `localStorage`.
- **Sequential unlock.** Lesson 1 of each module is always open; each next lesson unlocks only after the previous lesson is fully completed.
- **Teach fully, then test once.** All topics are taught first; the quiz happens in one combined pass at the end of the lesson.
- **Remedial, not punitive.** A wrong quiz answer shows the exact topic's teaching content again, then a fresh question on just that topic.
- **Content model.** All lesson content lives in [`data.js`](data.js): each lesson has a `hook`, a `topics` array (each with `teach` blocks + `check` questions), and a `finalQuiz` (questions tagged with `topicId` for remedial routing). Add a new module by adding an entry to the `MODULES` array — no other code changes needed.
- **Block types available for content:** `hero`, `text`, `callout`, `example`, `glossary`, `ledger`, `stat-grid`, `barchart`, `timeline`, `poll`.

## ⚠️ On translations

The UI chrome (buttons, labels, navigation) is translated into English, Telugu, Tamil and Kannada, same as Shreeja's app. **The actual Module 1 veterinary content is shipped in English only** — the Telugu/Tamil/Kannada fields currently just repeat the English text (the `L()` helper's documented fallback behavior). This is deliberate: this content includes vaccination schedules, dosages and treatment steps, and a sloppy or ambiguous translation of that kind of material could lead to a real animal being mistreated. Get technical translations reviewed by a qualified vet/para-vet fluent in the target language before publishing them — don't machine-translate this file wholesale.

## Running locally

```bash
py -m http.server 5301
```

Then open `http://localhost:5301`. (Opening `index.html` directly via `file://` will NOT work — ES modules require an HTTP server.)

## Adding the next module

1. Pull the relevant section out of `Handbook-of-Good-Dairy-Husbandry-Practices.pdf` or `EVM_Brochure_Eng.pdf` (title, key facts, steps, cautions).
2. Add a new object to `MODULES` in `data.js` with `available: true`, a `lessons` array, following the Module 1 pattern.
3. Reuse the existing block types listed above. Add a new block type in `app.js` (`renderBlockHtml`) only if none of these fit.
4. Get any non-English veterinary content reviewed before publishing (see "On translations" above).

## Deployment

Any static hosting works (Render static site, Netlify, Vercel, GitHub Pages, or an internal file server) — just publish this folder as-is.

## Source material

- `Handbook of Good Dairy Husbandry Practices` — National Dairy Development Board (animal health & breeding, nutrition & management, INAPH information network).
- `Ethnoveterinary Formulations for Important Ailments in Bovines` — NDDB, July 2021 (home-remedy formulations for 20 common bovine ailments, with the caution that a veterinarian should still be consulted for diagnosis).
