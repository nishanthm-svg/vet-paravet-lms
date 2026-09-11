// ============================================================================
// Pashu Arogya Academy — Content data
// Written for veterinarians and para-vets who already work with animals day
// to day — a notch more technical than a farmer-facing course, but still
// plain, direct language with every term explained. Content is adapted from
// NDDB's "Handbook of Good Dairy Husbandry Practices" and "Ethnoveterinary
// Formulations for Important Ailments in Bovines".
//
// Every learner-facing string is written with the L() helper:
//   L("English", "Telugu", "Tamil", "Kannada")
// so the whole app can render in the language the learner picked. English
// is always the fallback if a translation is thin.
//
// IMPORTANT — Module 1's veterinary content (vital-sign ranges, BCS
// interpretation, etc.) is shipped in English only: the te/ta/kn slots
// below intentionally repeat the English text. This is medical/treatment
// content — a sloppy translation of a number or a dosage could lead to a
// real animal being mistreated, so get it reviewed by a qualified
// vet/para-vet fluent in the target language before publishing a real
// translation. See README.md.
// ============================================================================

import { L } from "./i18n.js";

export const MODULES = [
  {
    id: "m1",
    number: 1,
    title: L("General Observation of an Animal"),
    subtitle: L(
      "The seven quick questions and the vital signs every vet and para-vet checks first — so problems get caught before they become emergencies."
    ),
    icon: "stethoscope",
    available: true,
    lessons: [
      // ==================================================================
      // LESSON 1 — The Seven Questions for a Healthy Animal
      // ==================================================================
      {
        id: "m1-l1",
        title: L("The Seven Questions for a Healthy Animal"),
        estMinutes: 7,
        hook: [
          {
            type: "hero",
            heading: L("Every Visit Starts With These Seven Questions"),
            text: L(
              "Before you touch a thermometer or a stethoscope, a few minutes of careful watching tells you most of what you need to know. This lesson covers the seven questions that belong at the start of every visit."
            ),
          },
        ],
        topics: [
          {
            id: "t-seven-q-behaviour",
            title: L("Behaviour, Attitude and Condition"),
            teach: [
              {
                type: "text",
                heading: L("Why General Observation Comes First"),
                html: L(
                  "General observation means watching how the animal looks and acts, without touching it, before you begin any hands-on exam. It costs nothing, takes only a few minutes, and often catches a problem days before it would show up any other way. Timely intervention — noticing early and acting early — is what prevents a small problem from becoming a big economic loss for the owner."
                ),
              },
              {
                type: "stat-grid",
                items: [
                  {
                    label: L("Q1 — Behaviour"),
                    text: L(
                      "Does the animal react normally to its environment and to the rest of the herd, or is it acting strangely — standing apart, unusually restless, or unusually dull?"
                    ),
                  },
                  {
                    label: L("Q2 — Attitude"),
                    text: L(
                      "Does it carry its head, ears, body and tail the way it usually does? Does it walk normally, or is something 'off' about its posture and gait?"
                    ),
                  },
                  {
                    label: L("Q3 — Condition"),
                    text: L(
                      "Is the animal in good condition — well muscled, neither too thin nor too fat? (You'll learn to put a number on this with Body Condition Scoring later in this module.)"
                    ),
                  },
                ],
              },
              {
                type: "glossary",
                term: L("Attitude"),
                meaning: L(
                  "In animal health, 'attitude' does not mean mood — it means how the animal carries itself: the position of its head, ears, body and tail, and the way it walks. A change in attitude is often the very first visible sign of illness."
                ),
              },
              {
                type: "callout",
                style: "tip",
                heading: L("The Golden Rule"),
                text: L(
                  "Consult a veterinarian in case any change is noticed — you do not need to wait for a dramatic symptom. A herd owner or attendant who reports a small change early is doing exactly the right thing."
                ),
              },
            ],
            check: [
              {
                type: "mcq",
                q: L("In animal health terms, what does 'attitude' refer to?"),
                options: [
                  L("Whether the animal seems friendly toward people"),
                  L("How the animal carries its head, ears, body and tail, and how it walks"),
                  L("The animal's breed and colour"),
                  L("How much milk the animal gives"),
                ],
                answer: 1,
                explain: L(
                  "Attitude means posture and gait — head, ear, body and tail carriage, and the way the animal walks. A change here is often the earliest visible sign of illness."
                ),
              },
              {
                type: "truefalse",
                q: L("A body condition that is 'too fat' is just as much a concern as 'too thin'."),
                answer: true,
                explain: L(
                  "Question 3 explicitly asks whether the animal is well muscled and neither too thin NOR too fat — both extremes are a concern, as you'll see in the Body Condition Scoring lesson."
                ),
              },
            ],
          },
          {
            id: "t-seven-q-function",
            title: L("Appetite, Elimination and Output"),
            teach: [
              {
                type: "text",
                heading: L("The Rest of the Checklist"),
                html: L(
                  "The first three questions were about how the animal looks and holds itself. The next four are about how its body is actually functioning — eating, digesting, eliminating waste, and (for a milking animal) producing milk."
                ),
              },
              {
                type: "stat-grid",
                items: [
                  {
                    label: L("Q4 — Intake"),
                    text: L("Does it eat, drink and ruminate (chew the cud) properly?"),
                  },
                  {
                    label: L("Q5 — Elimination"),
                    text: L("Does it urinate and defaecate normally — normal frequency, colour and consistency?"),
                  },
                  {
                    label: L("Q6 — Milk Yield"),
                    text: L("If the animal is in milk, is there a sudden drop in milk production?"),
                  },
                  {
                    label: L("Q7 — Anything Else"),
                    text: L("Any other abnormal sign at all — discharge, swelling, limping, coughing, and so on."),
                  },
                ],
              },
              {
                type: "example",
                heading: L("Putting It Together"),
                text: L(
                  "A cow that ate normally yesterday but refuses her feed today, and is standing apart from the rest of the herd, has just failed Question 1 (behaviour) AND Question 4 (intake) at the same time. Two flags together is a stronger signal than one — that animal deserves a closer look right away, not a 'wait and see'."
                ),
              },
              {
                type: "callout",
                style: "warning",
                heading: L("Don't Wait for a Dramatic Sign"),
                text: L(
                  "A sudden drop in milk yield is frequently the very first sign of disease in a lactating animal — it can show up before fever, before visible lameness, before anything else. Treat it as a genuine warning, not routine variation."
                ),
              },
            ],
            check: [
              {
                type: "mcq",
                q: L(
                  "A milking cow's yield drops suddenly with no obvious cause yet. What should you do?"
                ),
                options: [
                  L("Ignore it — yield naturally varies day to day"),
                  L("Treat it as an early warning sign and examine the animal closely"),
                  L("Wait a full week to see if it recovers on its own"),
                  L("Only act if she also stops eating"),
                ],
                answer: 1,
                explain: L(
                  "A sudden drop in milk yield is often the first visible sign of disease — it can appear before fever or any other symptom, so it deserves a prompt closer look."
                ),
              },
              {
                type: "mcq",
                q: L("Which pair of the seven questions, when both are 'abnormal' together, is used as the example of a stronger warning signal?"),
                options: [
                  L("Condition and milk yield"),
                  L("Behaviour and intake (eating)"),
                  L("Attitude and elimination"),
                  L("Milk yield and elimination"),
                ],
                answer: 1,
                explain: L(
                  "The worked example combines an animal acting strangely (behaviour) with refusing feed (intake) — two simultaneous flags are a stronger signal than either alone."
                ),
              },
            ],
          },
        ],
        finalQuiz: {
          passScore: 70,
          questions: [
            {
              topicId: "t-seven-q-behaviour",
              type: "mcq",
              q: L("Which of the seven questions is checked by watching how the animal walks and how it holds its head, ears and tail?"),
              options: [L("Behaviour"), L("Attitude"), L("Condition"), L("Elimination")],
              answer: 1,
              explain: L("Attitude covers posture and gait: head, ear, body and tail carriage, and normal walking."),
            },
            {
              topicId: "t-seven-q-behaviour",
              type: "truefalse",
              q: L("If an animal reacts normally to its herd and environment, Question 1 (Behaviour) is satisfied."),
              answer: true,
              explain: L("Question 1 asks exactly that: does the animal react normally to its environment and the herd, or is it acting strangely?"),
            },
            {
              topicId: "t-seven-q-function",
              type: "mcq",
              q: L("Which question covers whether the animal is eating, drinking and chewing the cud properly?"),
              options: [L("Question 3 — Condition"), L("Question 4 — Intake"), L("Question 5 — Elimination"), L("Question 7 — Anything else")],
              answer: 1,
              explain: L("Question 4 is specifically about intake: eating, drinking and ruminating properly."),
            },
            {
              topicId: "t-seven-q-function",
              type: "truefalse",
              q: L("A sudden drop in milk yield should be dismissed unless the animal also shows fever."),
              answer: false,
              explain: L(
                "A sudden drop in milk yield is often the FIRST sign of disease, sometimes appearing before fever — it should never be dismissed on its own."
              ),
            },
            {
              topicId: "t-seven-q-behaviour",
              type: "mcq",
              q: L("What is the recommended action the moment any change is noticed in one of the seven questions?"),
              options: [
                L("Wait to see if two or more questions are affected before acting"),
                L("Consult a veterinarian"),
                L("Immediately isolate the entire herd"),
                L("Note it down and review at the end of the month"),
              ],
              answer: 1,
              explain: L("The golden rule from this lesson: consult a veterinarian as soon as any change is noticed, without waiting for a dramatic symptom."),
            },
          ],
        },
      },

      // ==================================================================
      // LESSON 2 — Reading Vital Signs
      // ==================================================================
      {
        id: "m1-l2",
        title: L("Reading Vital Signs"),
        estMinutes: 7,
        hook: [
          {
            type: "hero",
            heading: L("Numbers Don't Lie"),
            text: L(
              "Once you've watched the animal, the next step is measuring a few simple things: breathing, rumination, and rumen movement. Knowing the normal range means you'll instantly recognise when something is wrong."
            ),
          },
        ],
        topics: [
          {
            id: "t-vitals-normal",
            title: L("Breathing, Rumination and Rumen Movement"),
            teach: [
              {
                type: "text",
                heading: L("Why a Normal Range Matters"),
                html: L(
                  "You cannot tell if something is abnormal unless you know what normal looks like first. These three measurements take under two minutes each and need no equipment beyond a watch and your own hands."
                ),
              },
              {
                type: "stat-grid",
                items: [
                  {
                    label: L("Breathing — adults"),
                    text: L("10–30 breaths per minute (one in + one out = one breath). Best observed from the animal's right flank, watching from behind."),
                  },
                  {
                    label: L("Breathing — calves"),
                    text: L("30–50 breaths per minute — noticeably faster than an adult, and normally so."),
                  },
                  {
                    label: L("Rumination"),
                    text: L("Not less than 40 chews per minute, for 7–10 hours across the day — this is the cud-chewing you see an animal doing at rest."),
                  },
                  {
                    label: L("Rumen movement"),
                    text: L("2–3 contractions per minute — felt by pressing lightly on the upper part of the left flank."),
                  },
                ],
              },
              {
                type: "glossary",
                term: L("Rumen"),
                meaning: L(
                  "The largest of the animal's four stomach chambers, where billions of microbes break down fibrous feed like straw and grass. A rumen that has stopped moving is an early sign that something is seriously wrong with digestion."
                ),
              },
              {
                type: "glossary",
                term: L("Rumination"),
                meaning: L(
                  "Chewing the cud — bringing swallowed, partly digested feed back up from the rumen to chew it again. A healthy animal at rest spends most of the day doing this."
                ),
              },
              {
                type: "example",
                heading: L("How to Check Rumen Movement"),
                text: L(
                  "Stand at the animal's left side and press lightly with your fist on the upper part of the left flank (the hollow just in front of the hip bone). Count how many times you feel it push against your hand over one minute. 2–3 is normal; fewer (or none) points toward indigestion or a more serious problem."
                ),
              },
            ],
            check: [
              {
                type: "mcq",
                q: L("What is the normal breathing rate for an adult animal at rest?"),
                options: [L("10–30 breaths per minute"), L("30–50 breaths per minute"), L("60–80 breaths per minute"), L("2–3 breaths per minute")],
                answer: 0,
                explain: L("10–30 breaths per minute is normal for adults; calves breathe faster, at 30–50 per minute."),
              },
              {
                type: "mcq",
                q: L("Where do you feel for rumen movement?"),
                options: [
                  L("Upper part of the right flank"),
                  L("Upper part of the left flank"),
                  L("Underneath the jaw"),
                  L("Behind the front leg"),
                ],
                answer: 1,
                explain: L("Rumen movement is felt by pressing lightly on the upper part of the LEFT flank, since the rumen sits on the animal's left side."),
              },
            ],
          },
          {
            id: "t-vitals-appearance-fever",
            title: L("Appearance and Fever"),
            teach: [
              {
                type: "text",
                heading: L("What a Healthy Coat Looks Like"),
                html: L(
                  "A healthy animal has a shining, smooth, even coat and shiny horns and hoofs. The eyes should be normal, without discharge or tears, and the muzzle should be moist. Any dullness, roughness, or discharge is worth a second look."
                ),
              },
              {
                type: "callout",
                style: "warning",
                heading: L("Fever — The Surprising Part"),
                text: L(
                  "Fever is usually accompanied by rapid breathing, shivering, and occasionally diarrhoea. Here is the part that surprises new learners: the ears, horns and legs are usually COLD to touch during fever, while the body itself is too warm. Checking only the ears or legs can make you miss a fever completely."
                ),
              },
              {
                type: "poll",
                heading: L("Guess Before You Look"),
                questions: [
                  {
                    q: L("An animal has a fever. What will its ears and legs feel like to the touch?"),
                    options: [L("Hot, like the rest of the body"), L("Cold, even though the body is warm"), L("No different from a healthy animal")],
                    answer: 1,
                    reveal: L(
                      "Cold ears, horns and legs alongside a hot body is a classic, counterintuitive sign of fever — the body pulls blood away from the extremities. Relying on 'does the ear feel hot' alone will make you miss real fevers."
                    ),
                  },
                ],
              },
            ],
            check: [
              {
                type: "truefalse",
                q: L("During fever, an animal's ears, horns and legs are usually cold to touch even though the body is too warm."),
                answer: true,
                explain: L("This is the classic, counterintuitive pattern of fever in cattle and buffaloes — don't rule out fever just because the ears feel cool."),
              },
              {
                type: "mcq",
                q: L("Which of these is NOT listed as a sign that usually accompanies fever?"),
                options: [L("Rapid breathing"), L("Shivering"), L("Occasional diarrhoea"), L("Increased milk yield")],
                answer: 3,
                explain: L("Fever typically comes with rapid breathing, shivering and sometimes diarrhoea — and usually a DROP, not an increase, in milk yield."),
              },
            ],
          },
        ],
        finalQuiz: {
          passScore: 70,
          questions: [
            {
              topicId: "t-vitals-normal",
              type: "mcq",
              q: L("A calf's normal breathing rate is:"),
              options: [L("Slower than an adult's"), L("The same as an adult's"), L("Faster than an adult's, at 30–50 breaths per minute"), L("Not measurable")],
              answer: 2,
              explain: L("Calves breathe faster than adults — 30–50 breaths per minute compared to 10–30 for adults."),
            },
            {
              topicId: "t-vitals-normal",
              type: "truefalse",
              q: L("Normal rumination is fewer than 20 chews per minute."),
              answer: false,
              explain: L("Normal rumination is NOT LESS than 40 chews per minute, sustained for 7–10 hours a day."),
            },
            {
              topicId: "t-vitals-appearance-fever",
              type: "mcq",
              q: L("Which combination is the classic sign pattern of fever?"),
              options: [
                L("Hot ears and hot body together"),
                L("Cold ears/horns/legs together with a hot body"),
                L("Cold body and cold ears together"),
                L("No change in temperature anywhere"),
              ],
              answer: 1,
              explain: L("Fever classically presents as a hot body with cold extremities (ears, horns, legs) — the opposite of what most people expect."),
            },
            {
              topicId: "t-vitals-appearance-fever",
              type: "truefalse",
              q: L("A moist muzzle and a shining, even coat are signs of good health."),
              answer: true,
              explain: L("Yes — a healthy animal has a shining, smooth, even coat, shiny horns/hoofs, normal eyes, and a moist muzzle."),
            },
          ],
        },
      },

      // ==================================================================
      // LESSON 3 — Body Condition Scoring (BCS)
      // ==================================================================
      {
        id: "m1-l3",
        title: L("Body Condition Scoring (BCS)"),
        estMinutes: 8,
        hook: [
          {
            type: "hero",
            heading: L("One Score That Predicts Trouble Before It Happens"),
            text: L(
              "Body Condition Scoring turns 'does this animal look thin or fat' into a number you can track over time, compare across animals, and use to catch calving and breeding problems before they happen."
            ),
          },
        ],
        topics: [
          {
            id: "t-bcs-scale",
            title: L("The 5-Point Scale"),
            teach: [
              {
                type: "text",
                heading: L("What BCS Measures"),
                html: L(
                  "Body Condition Score (BCS) is a 1-to-5 rating of how much fat and muscle cover an animal is carrying, judged by looking at and feeling specific points: the vertebrae along the middle of the back, the hook bones, the pin bones, and the cavity between the tail head and the pin bone. A low score can mean disease or poor feeding; a high score raises the risk of breeding and metabolic problems."
                ),
              },
              {
                type: "glossary",
                term: L("Body Condition Score (BCS)"),
                meaning: L(
                  "A 1 (very thin) to 5 (very fat) rating of an animal's fat and muscle cover, used as a quick, repeatable health and management check."
                ),
              },
              {
                type: "stat-grid",
                items: [
                  {
                    label: L("Score 1 — Severe under-conditioning"),
                    text: L(
                      "Extremely thin. No fat in the brisket or tail dock, all skeletal structures visible, dull hair coat. Not in good health — will not milk well or reproduce, and may be diseased."
                    ),
                  },
                  {
                    label: L("Score 2 — Frame obvious"),
                    text: L(
                      "Thin. Vertebrae, hips and pin bone prominent, with only some tissue cover around the tail dock, hip bones and flank. Health may be OK, but milk production is low and reproduction is poor."
                    ),
                  },
                  {
                    label: L("Score 3 — Frame and covering well"),
                    text: L(
                      "Muscle tissue evident but not abundant; ribcage only slightly visible. This is the high-producing, well-balanced score — though at this level, fat reserves may not be enough for peak production."
                    ),
                  },
                  {
                    label: L("Score 4 — Frame not very visible"),
                    text: L(
                      "Obvious fat deposit behind the shoulder and in the brisket area — ideal condition just before calving, but may bring more metabolic problems AT calving."
                    ),
                  },
                  {
                    label: L("Score 5 — Severe over-conditioning"),
                    text: L(
                      "Obese, flat appearance to the topline, folds of fat over the ribs and thighs, mobility impaired by fat deposits. Extremely fat, with high probability of metabolic and breeding problems."
                    ),
                  },
                ],
              },
            ],
            check: [
              {
                type: "mcq",
                q: L("Which two body areas are specifically checked to assign a Body Condition Score?"),
                options: [
                  L("Ears and muzzle"),
                  L("Vertebrae along the back, hook bones and pin bones"),
                  L("Teeth and horns"),
                  L("Udder size only"),
                ],
                answer: 1,
                explain: L("BCS is judged from the vertebrae along the middle of the back, the hook bones, pin bones, and the cavity near the tail head."),
              },
              {
                type: "truefalse",
                q: L("A Score 5 animal has a higher risk of metabolic and breeding problems than a Score 3 animal."),
                answer: true,
                explain: L("Score 5 (severe over-conditioning) carries a high probability of metabolic and breeding problems; Score 3 is the well-balanced, high-producing score."),
              },
            ],
          },
          {
            id: "t-bcs-application",
            title: L("Using BCS in Practice"),
            teach: [
              {
                type: "text",
                heading: L("The Target Number: 3.5"),
                html: L(
                  "Dry cows and cows close to calving should have a Body Condition Score of about 3.5. Too thin at calving raises the risk of a weak calf and disease in the cow; too fat raises the risk of a difficult calving and metabolic disease right after. BCS is a helpful yardstick to monitor over time — it's a trend to track, not a one-time snapshot."
                ),
              },
              {
                type: "example",
                heading: L("Case: Two Cows, Three Weeks From Calving"),
                text: L(
                  "Cow A is BCS 1.5 — ribs and hip bones clearly visible, dull coat. Cow B is BCS 5 — flat, heavy topline, visibly struggling to move. Both are due to calve in three weeks. Cow A's owner needs to hear that she is at risk of a weak calf and disease after calving, and needs her ration reviewed urgently. Cow B's owner needs to hear that she is at risk of a difficult calving and metabolic disease, and that her feeding needs to change well before her NEXT calving — you cannot safely 'slim down' an animal this close to term."
                ),
              },
              {
                type: "callout",
                style: "tip",
                heading: L("Track the Trend, Not Just the Number"),
                text: L(
                  "The real value of BCS comes from checking it at the same points in every animal's cycle (drying-off, calving, peak lactation) and watching how it changes — a sudden drop between visits is often your earliest warning of an underlying problem."
                ),
              },
            ],
            check: [
              {
                type: "mcq",
                q: L("What Body Condition Score should a dry cow or a cow close to calving ideally have?"),
                options: [L("2.0"), L("3.5"), L("5.0"), L("1.0")],
                answer: 1,
                explain: L("A BCS of about 3.5 is the target for dry cows and cows close to calving — balanced enough to avoid both under- and over-conditioning risks."),
              },
              {
                type: "mcq",
                q: L("A cow due to calve in three weeks is scored BCS 5. What should you recommend?"),
                options: [
                  L("Sharply cut her feed right now to slim her down before calving"),
                  L("Nothing — a high score close to calving is ideal"),
                  L("Flag the calving-difficulty and metabolic-disease risk now, and adjust feeding well before her NEXT calving cycle"),
                  L("Increase her feed further to prepare for lactation"),
                ],
                answer: 2,
                explain: L(
                  "You cannot safely slim an animal down this close to calving. The right move is to flag the risk for this calving and correct the feeding program ahead of the next cycle."
                ),
              },
            ],
          },
        ],
        finalQuiz: {
          passScore: 70,
          questions: [
            {
              topicId: "t-bcs-scale",
              type: "mcq",
              q: L("A Score 1 animal (severe under-conditioning) is described as:"),
              options: [
                L("Well-muscled with a slightly visible ribcage"),
                L("Extremely thin, with all skeletal structures visible and a dull coat"),
                L("Obese with an impaired ability to move"),
                L("Ideal condition for calving"),
              ],
              answer: 1,
              explain: L("Score 1 is extremely thin — no fat in the brisket or tail dock, all skeletal structures visible, dull hair."),
            },
            {
              topicId: "t-bcs-scale",
              type: "truefalse",
              q: L("BCS is scored on a scale from 1 (very thin) to 5 (very fat)."),
              answer: true,
              explain: L("Correct — it's a 1-to-5 scale, with 3 to 3.5 generally representing the well-balanced range."),
            },
            {
              topicId: "t-bcs-application",
              type: "mcq",
              q: L("Why is BCS described as most useful when tracked as a trend rather than a single reading?"),
              options: [
                L("Because a single reading is never accurate"),
                L("Because a sudden drop between visits is often the earliest warning sign of a problem"),
                L("Because BCS changes every hour"),
                L("Trend tracking isn't actually recommended"),
              ],
              answer: 1,
              explain: L("Checking BCS at the same points in an animal's cycle and watching the trend catches problems earlier than a single isolated score."),
            },
            {
              topicId: "t-bcs-application",
              type: "truefalse",
              q: L("An animal that is too thin at calving time only risks low milk yield, with no risk to the calf."),
              answer: false,
              explain: L("Being too thin at calving raises the risk of a weak calf AND disease in the cow herself — not just a milk-yield issue."),
            },
          ],
        },
      },
    ],
  },

  // ============================================================================
  // Modules 2–17 — titled directly from the source handbook's table of
  // contents. Ready to fill in using the same pattern as Module 1 above.
  // ============================================================================
  {
    id: "m2",
    number: 2,
    title: L("Buying, Inducting & Aging a New Animal"),
    subtitle: L("Choosing a healthy animal, quarantine protocol, and estimating age by dentition."),
    icon: "clipboard",
    available: false,
    lessons: [],
  },
  {
    id: "m3",
    number: 3,
    title: L("Care of the Newborn Calf"),
    subtitle: L("The critical first 24 hours, colostrum feeding, and managing calf diarrhoea."),
    icon: "calf",
    available: false,
    lessons: [],
  },
  {
    id: "m4",
    number: 4,
    title: L("Diseases Preventable by Vaccination"),
    subtitle: L("FMD, HS, Black Quarter, Brucellosis, IBR, Rabies, Anthrax, Theileriosis and the vaccination schedule."),
    icon: "syringe",
    available: false,
    lessons: [],
  },
  {
    id: "m5",
    number: 5,
    title: L("Other Important Diseases"),
    subtitle: L("Johne's Disease, Bovine TB, Mycotoxicosis, Ephemeral Fever, Foot Rot, Dermatophytosis, Dermatophilosis and Lumpy Skin Disease."),
    icon: "microscope",
    available: false,
    lessons: [],
  },
  {
    id: "m6",
    number: 6,
    title: L("Tick, Fly & Worm-Borne Diseases and Their Control"),
    subtitle: L("Anaplasmosis, Babesiosis, Trypanosomiasis (Surra), Theileriosis, and how to control ticks, flies and worms."),
    icon: "bug",
    available: false,
    lessons: [],
  },
  {
    id: "m7",
    number: 7,
    title: L("Diseases That Occur After Calving"),
    subtitle: L("Retention of placenta, prolapse, milk fever and the other post-calving conditions to watch for."),
    icon: "heart",
    available: false,
    lessons: [],
  },
  {
    id: "m8",
    number: 8,
    title: L("Diseases Due to Faulty Feeding"),
    subtitle: L("Bloat, acidosis and other conditions caused by an unbalanced ration."),
    icon: "wheat",
    available: false,
    lessons: [],
  },
  {
    id: "m9",
    number: 9,
    title: L("Mastitis & Diseases of the Teats"),
    subtitle: L("Recognising and managing udder and teat health problems."),
    icon: "droplet",
    available: false,
    lessons: [],
  },
  {
    id: "m10",
    number: 10,
    title: L("Common Poisoning Conditions"),
    subtitle: L("Recognising and responding to the poisoning cases seen most often in the field."),
    icon: "warning",
    available: false,
    lessons: [],
  },
  {
    id: "m11",
    number: 11,
    title: L("Common Zoonotic Diseases"),
    subtitle: L("Diseases that can pass between animals and people, and how to handle them safely."),
    icon: "shield",
    available: false,
    lessons: [],
  },
  {
    id: "m12",
    number: 12,
    title: L("Breeding & Related Activities"),
    subtitle: L("Heat detection, artificial insemination, pregnancy diagnosis and related breeding practices."),
    icon: "calendar",
    available: false,
    lessons: [],
  },
  {
    id: "m13",
    number: 13,
    title: L("Traditional & Ethnoveterinary Remedies"),
    subtitle: L("NDDB-documented home-remedy formulations for common ailments — for use alongside, not instead of, veterinary advice."),
    icon: "leaf",
    available: false,
    lessons: [],
  },
  {
    id: "m14",
    number: 14,
    title: L("Feeding of Animals"),
    subtitle: L("Balanced rations, feeding schedules and nutrition basics for dairy animals."),
    icon: "feed",
    available: false,
    lessons: [],
  },
  {
    id: "m15",
    number: 15,
    title: L("Fodder Production"),
    subtitle: L("Growing and managing green and dry fodder for a reliable year-round supply."),
    icon: "sprout",
    available: false,
    lessons: [],
  },
  {
    id: "m16",
    number: 16,
    title: L("Housing of Animals"),
    subtitle: L("Shed design, ventilation and space requirements for animal comfort and health."),
    icon: "home",
    available: false,
    lessons: [],
  },
  {
    id: "m17",
    number: 17,
    title: L("Animal Identification & the INAPH Information Network"),
    subtitle: L("Individual animal ID and how INAPH supports health, breeding and nutrition record-keeping."),
    icon: "id",
    available: false,
    lessons: [],
  },
];

export function getModule(moduleId) {
  return MODULES.find((m) => m.id === moduleId);
}

export function getLesson(moduleId, lessonId) {
  const mod = getModule(moduleId);
  if (!mod || !mod.lessons) return null;
  return mod.lessons.find((l) => l.id === lessonId);
}

export function getLessonIndex(moduleId, lessonId) {
  const mod = getModule(moduleId);
  if (!mod || !mod.lessons) return -1;
  return mod.lessons.findIndex((l) => l.id === lessonId);
}
