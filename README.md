# Pashu Arogya Academy (LMS)

A self-paced, instructor-free learning management system for the **entire ground force** — field staff working around dairy cattle and buffaloes who may have **no prior animal or veterinary background at all**. Built the same way as [Shreeja Learning Academy](../shreeja-lms) — a dependency-free static site (plain HTML/CSS/JS, no build step, no login, no backend) so it can be hosted anywhere or opened straight from a static file server.

Content is adapted from NDDB's *Handbook of Good Dairy Husbandry Practices* and *Ethnoveterinary Formulations for Important Ailments in Bovines*.

## Module 1: General Observation of an Animal

Written from zero — no assumption that the learner has ever worked with an animal before. Every term (rumen, ruminate, muzzle, backbone line, dry cow...) is explained in plain words the moment it's introduced, with everyday comparisons wherever they help. The course is deliberately framed around **notice and report, not diagnose and treat** — a ground-force learner's job is to spot that something looks different and tell the owner or a vet, never to decide on treatment themselves.

1. **The Seven Questions for a Healthy Animal** — the quick behaviour/attitude/condition/appetite/excretion/milk-yield checklist every visit should start with, taught from first principles (what "observation" even means, what "ruminating" is).
2. **Reading Vital Signs** — step-by-step instructions for counting breathing and feeling the stomach move, normal ranges explained in plain numbers, coat/appearance, and the classic surprising signs of fever (cold ears/horns/legs, hot body).
3. **Body Condition Scoring (BCS)** — the 5-point scale explained without jargon (what a "backbone line" or "hip bone" actually is), what each score means for health/breeding risk, and a short case study applying it.

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

The UI chrome (buttons, labels, navigation) and all lesson/exam content are translated into English, Hindi, Telugu, Tamil and Kannada. **All non-English lesson content — including vaccination schedules, dosages and treatment steps — is machine-translated and has not yet been reviewed by a qualified vet/para-vet.** The app shows a visible "pending vet review" notice on the dashboard whenever a learner is on a non-English language, matching this caveat. Get every non-English technical passage reviewed by a qualified vet/para-vet fluent in the target language before treating it as authoritative — a sloppy or ambiguous translation of a dosage or treatment step could lead to a real animal being mistreated.

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
