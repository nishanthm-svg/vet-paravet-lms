// ============================================================================
// Pashu Arogya Academy — Content data
// Written for the entire ground force — field staff with NO prior animal or
// veterinary background at all. Nothing is assumed: every single term is
// explained in plain words the moment it is first used, with everyday
// comparisons wherever they help. Content is adapted from NDDB's "Handbook
// of Good Dairy Husbandry Practices" and "Ethnoveterinary Formulations for
// Important Ailments in Bovines".
//
// A ground-force learner's job is to NOTICE and REPORT — not to diagnose or
// treat. That framing is repeated deliberately throughout Module 1 so it's
// never confused with a course that trains someone to practise veterinary
// medicine.
//
// Every learner-facing string is written with the L() helper:
//   L("English", "Telugu", "Tamil", "Kannada", "Hindi")
// so the whole app can render in the language the learner picked. English
// is always the fallback if a translation is thin.
//
// IMPORTANT — all non-English text in this file (including Module 1's
// veterinary content: vital-sign ranges, BCS interpretation, dosages,
// vaccination schedules, treatment steps) is machine-translated. This is
// medical/treatment content — a sloppy translation of a number or dosage
// could lead to a real animal being mistreated. The app shows learners a
// "pending vet review" notice on non-English languages for exactly this
// reason. Get every non-English technical passage reviewed by a qualified
// vet/para-vet fluent in the target language before treating it as
// authoritative. See README.md.
// ============================================================================

import { L } from "./i18n.js";

export const MODULES = [
  {
    id: "m1",
    number: 1,
    title: L("General Observation of an Animal"),
    subtitle: L(
      "No animal or veterinary background needed. If you can watch, count on your fingers, and feel gently with your hand, you can learn to notice when something is wrong — and know exactly who to tell."
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
        estMinutes: 8,
        hook: [
          {
            type: "hero",
            heading: L("You Don't Need to Be an Expert to Notice Trouble"),
            text: L(
              "Long before any veterinarian arrives, the person who sees the animal every day can already tell something is wrong — just by watching. No equipment, no training in animal medicine, no diagnosis needed. This lesson starts from zero and teaches you exactly what to watch for."
            ),
          },
        ],
        topics: [
          {
            id: "t-seven-q-behaviour",
            title: L("Just by Looking: Behaviour, Attitude and Condition"),
            teach: [
            {
              type: "photo",
              src: "assets/photo-m1-herd-behaviour.jpg",
              alt: L("A herd of black-and-white dairy cows grazing calmly together in a green pasture under a dark sky."),
              caption: L("A calm herd, grazing together normally — exactly the baseline picture Question 1 (Behaviour) asks you to compare an animal against."),
            },
              {
                type: "text",
                heading: L("Start With Just Looking"),
                html: L(
                  "Before anyone touches the animal or uses any tool, a lot can already be learned simply by watching it for a minute or two — how it stands, how it holds its body, whether it seems interested in what's going on around it. This is called <b>observation</b>, and it costs nothing and needs no equipment at all — just your eyes and a little patience."
                ),
              },
              {
                type: "glossary",
                term: L("Observation"),
                meaning: L(
                  "Simply watching an animal carefully, without touching it, to notice anything that looks different from how it usually looks or behaves."
                ),
              },
              {
                type: "example",
                heading: L("A Comparison You Already Understand"),
                text: L(
                  "Think about how you can often tell a family member is unwell before they even say a word — they sit differently, eat a little less, seem quieter than usual. Animals show the very same kind of early signs. Learning to notice them is the same skill you already have — you're just applying it to a cow or buffalo instead of a person."
                ),
              },
              {
                type: "glossary",
                term: L("Herd"),
                meaning: L("A group of cows or buffaloes that live, graze, and are milked together, usually on the same farm."),
              },
              {
                type: "stat-grid",
                items: [
                  {
                    label: L("Question 1 — Behaviour"),
                    text: L(
                      "Is the animal acting the way it normally does with the rest of the group (the herd)? Or is it standing apart on its own, unusually quiet, or unusually restless?"
                    ),
                  },
                  {
                    label: L("Question 2 — Attitude"),
                    text: L(
                      "Is it holding its head, ears and tail the way it usually does? Is it walking normally, or does the way it moves look a little different today?"
                    ),
                  },
                  {
                    label: L("Question 3 — Condition"),
                    text: L(
                      "Just from looking at its body — does it look neither too thin (bones sticking out sharply) nor too fat (very round and heavy all over)? You'll learn to put an exact number on this later in this module."
                    ),
                  },
                ],
              },
              {
                type: "callout",
                style: "tip",
                heading: L("Your Job: Notice First, Then Tell Someone"),
                text: L(
                  "You do not need to work out what disease it might be — that part is always the veterinarian's job. Your job is to notice that something looks different, and to tell the animal's owner or the vet right away. Even a small, early observation is genuinely useful — it can save the animal's life."
                ),
              },
            ],
            check: [
              {
                type: "mcq",
                q: L("What does 'observation' mean in this lesson?"),
                options: [
                  L("Giving the animal medicine"),
                  L("Watching the animal carefully, without touching it"),
                  L("Milking the animal"),
                  L("Feeding the animal extra food"),
                ],
                answer: 1,
                explain: L("Observation simply means watching carefully, with no touching and no equipment — just your eyes and a little time."),
              },
              {
                type: "truefalse",
                q: L("If you notice something looks different about an animal, it is your job to first work out exactly what disease it has."),
                answer: false,
                explain: L(
                  "No — your job is only to notice and report. Working out what disease it is, and what to do about it, is always the veterinarian's job."
                ),
              },
            ],
          },
          {
            id: "t-seven-q-function",
            title: L("What Goes In and What Comes Out"),
            teach: [
              {
                type: "text",
                heading: L("Why This Part Matters"),
                html: L(
                  "The first three questions were about how the animal looks. These next four are about how its body is actually working on the inside — is it eating properly, passing waste normally, and (if it's being milked) still giving roughly the same amount of milk as before."
                ),
              },
              {
                type: "glossary",
                term: L("Ruminate / Chewing the Cud"),
                meaning: L(
                  "Cows and buffaloes have a special kind of stomach. After they swallow grass or feed, they often bring a little of it back up into their mouth to chew it again slowly, while sitting calmly and resting. This is completely normal — it's called ruminating, or 'chewing the cud'. You have probably already seen an animal doing this without knowing what it was called."
                ),
              },
              {
                type: "stat-grid",
                items: [
                  {
                    label: L("Question 4 — Eating"),
                    text: L("Is it eating and drinking normally, and does it look like it's chewing the cud (see above) the way it usually does?"),
                  },
                  {
                    label: L("Question 5 — Waste"),
                    text: L(
                      "Is it urinating and passing dung normally — not clearly more or less than usual, and not looking unusual in any way?"
                    ),
                  },
                  {
                    label: L("Question 6 — Milk"),
                    text: L("If it's a milking animal, is it still giving roughly the same amount of milk as it has over the last few days?"),
                  },
                  {
                    label: L("Question 7 — Anything Else"),
                    text: L(
                      "Is there anything else at all that looks unusual — swelling anywhere, discharge from the eyes or nose, limping, coughing?"
                    ),
                  },
                ],
              },
              {
                type: "example",
                heading: L("Putting Two Signs Together"),
                text: L(
                  "Imagine a cow that was eating normally yesterday, but today leaves her feed untouched and is standing apart from the other cows. That's two separate warning signs happening together — how she's acting (Question 1) AND whether she's eating (Question 4). When two signs show up at the same time, treat it as more serious, and tell someone straight away rather than waiting to see what happens."
                ),
              },
              {
                type: "callout",
                style: "warning",
                heading: L("A Sudden Drop in Milk Is a Big Deal"),
                text: L(
                  "A sudden drop in milk is very often the FIRST sign that a milking animal is unwell — sometimes it shows up before the animal looks sick in any other way at all. Don't wait for more signs to appear. If you notice it, report it the same day."
                ),
              },
            ],
            check: [
              {
                type: "mcq",
                q: L("What does 'ruminating' or 'chewing the cud' mean?"),
                options: [
                  L("The animal is in pain"),
                  L("The animal brings swallowed feed back up to chew it again, calmly, while resting"),
                  L("The animal is refusing to eat"),
                  L("The animal is giving milk"),
                ],
                answer: 1,
                explain: L(
                  "Ruminating is a completely normal, healthy behaviour — bringing food back up from the stomach to chew it a second time while resting."
                ),
              },
              {
                type: "mcq",
                q: L("A milking animal's yield drops suddenly, with no other obvious sign yet. What should you do?"),
                options: [
                  L("Ignore it — milk amount naturally goes up and down"),
                  L("Report it the same day, as an early warning sign"),
                  L("Wait a full week to see if it goes back to normal on its own"),
                  L("Only report it if the animal also stops eating"),
                ],
                answer: 1,
                explain: L(
                  "A sudden drop in milk is often the very first sign that something is wrong — it deserves to be reported straight away, not watched and waited on."
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
              q: L("Which question is checked simply by watching how the animal walks, and how it holds its head, ears and tail?"),
              options: [L("Question 1 — Behaviour"), L("Question 2 — Attitude"), L("Question 3 — Condition"), L("Question 5 — Waste")],
              answer: 1,
              explain: L("Question 2 (Attitude) is about posture and walking — the position of the head, ears, body and tail, and how normally it moves."),
            },
            {
              topicId: "t-seven-q-behaviour",
              type: "truefalse",
              q: L("Observation — just watching an animal — needs no special equipment."),
              answer: true,
              explain: L("Correct. Observation needs nothing more than your eyes and a little time — no tools, no training in animal medicine."),
            },
            {
              topicId: "t-seven-q-function",
              type: "mcq",
              q: L("Which question is about whether the animal is eating, drinking and chewing the cud normally?"),
              options: [L("Question 3 — Condition"), L("Question 4 — Eating"), L("Question 5 — Waste"), L("Question 7 — Anything else")],
              answer: 1,
              explain: L("Question 4 is specifically about eating, drinking and ruminating (chewing the cud) normally."),
            },
            {
              topicId: "t-seven-q-function",
              type: "truefalse",
              q: L("A sudden drop in milk should only be reported once the animal also has a fever."),
              answer: false,
              explain: L(
                "No — a sudden drop in milk is often the very FIRST warning sign, sometimes appearing before fever or anything else. Report it on its own, right away."
              ),
            },
            {
              topicId: "t-seven-q-behaviour",
              type: "mcq",
              q: L("If you notice a change in any of the seven questions, what should you do?"),
              options: [
                L("Wait until two or more questions look 'wrong' before telling anyone"),
                L("Tell the animal's owner or the veterinarian right away"),
                L("Decide for yourself what medicine to give"),
                L("Write it down and mention it at the end of the month"),
              ],
              answer: 1,
              explain: L("The rule from this lesson: notice, then tell someone right away. You never need to wait for a dramatic sign, and you never decide treatment yourself."),
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
        estMinutes: 8,
        hook: [
          {
            type: "hero",
            heading: L("Simple Checks Anyone Can Learn"),
            text: L(
              "You don't need to be a vet to count breathing or gently feel a stomach move — you only need to know what a normal number looks like, and exactly how to check it. This lesson teaches three simple checks, step by step, using nothing but your own hands and a watch."
            ),
          },
        ],
        topics: [
          {
            id: "t-vitals-normal",
            title: L("Breathing and Chewing the Cud"),
            teach: [
            {
              type: "photo",
              src: "assets/photo-m1-chewing-cud.jpg",
              alt: L("A cow lying down in grass, resting, with its mouth open mid-chew while chewing the cud."),
              caption: L("A resting cow chewing the cud — the calm, repetitive jaw movement this lesson teaches you to check for."),
            },
              {
                type: "text",
                heading: L("Why 'Normal' Comes First"),
                html: L(
                  "You cannot tell that something is unusual unless you first know what usual looks like. The two checks in this topic take about two minutes altogether, and all you need is a watch (or a phone) and your own hand."
                ),
              },
              {
                type: "example",
                heading: L("How to Count Breathing — Step by Step"),
                text: L(
                  "Stand a little behind and to the side of the animal, where you can clearly see its belly and chest. Every time the belly moves out AND back in, that counts as ONE breath. Using a watch, count breaths for 15 seconds, then multiply that number by 4 — that gives you breaths per minute."
                ),
              },
              {
                type: "stat-grid",
                items: [
                  {
                    label: L("Breathing — adult animals"),
                    text: L("10–30 breaths every minute is normal for a resting adult cow or buffalo."),
                  },
                  {
                    label: L("Breathing — calves"),
                    text: L("30–50 breaths every minute is normal for a calf — noticeably faster than an adult, and that's expected."),
                  },
                  {
                    label: L("Chewing the cud"),
                    text: L(
                      "A resting, healthy animal chews the cud at least 40 times a minute, for a total of 7–10 hours across the whole day — you'll often see this happening while it's sitting down and calm."
                    ),
                  },
                ],
              },
              {
                type: "glossary",
                term: L("Rumen"),
                meaning: L(
                  "The largest of the four stomach parts inside a cow or buffalo, sitting mainly on the LEFT side of its belly. Good microbes inside it break down grass and feed. If you rest your hand gently on the animal's left side, you can actually feel it move as it works — you'll learn exactly how in the next box."
                ),
              },
              {
                type: "example",
                heading: L("How to Feel the Stomach Move — Step by Step"),
                text: L(
                  "Stand at the animal's LEFT side. Make a loose fist and press gently on the soft, hollow part of the belly, just in front of the hip bone. Count how many times you feel a gentle push against your hand over one full minute. Feeling 2 to 3 pushes in that minute is normal; feeling none at all is worth reporting."
                ),
              },
            ],
            check: [
              {
                type: "mcq",
                q: L("How do you count one breath?"),
                options: [
                  L("Every time the tail moves"),
                  L("Every time the belly/chest moves out AND back in, once"),
                  L("Every time the animal chews"),
                  L("You cannot count breathing without special equipment"),
                ],
                answer: 1,
                explain: L("One full out-and-in movement of the belly or chest counts as one breath."),
              },
              {
                type: "mcq",
                q: L("Which side of the animal do you check for the gentle stomach-moving feeling?"),
                options: [L("The right side"), L("The left side"), L("Underneath the jaw"), L("Behind the front leg")],
                answer: 1,
                explain: L("Feel on the LEFT side, in the soft hollow just in front of the hip bone — that's where the main stomach (rumen) sits."),
              },
            ],
          },
          {
            id: "t-vitals-appearance-fever",
            title: L("How It Looks: Coat, Eyes and Fever"),
            teach: [
            {
              type: "photo",
              src: "assets/photo-m1-coat-eyes-muzzle.jpg",
              alt: L("Extreme close-up of a dairy cow's face in profile, showing a clear eye, a moist muzzle/nostril, and a smooth, shiny coat."),
              caption: L("A close look at exactly what this lesson asks you to check: a clear eye, a moist nose, and a smooth, even coat."),
            },
              {
                type: "text",
                heading: L("What a Healthy Animal Looks Like"),
                html: L(
                  "A healthy animal's coat (its hair) looks shiny, smooth and even all over — not dull or patchy in places. Its horns and hooves (the hard part of its feet) look shiny too. Its eyes look clear, with no watering or discharge, and its muzzle feels a little moist to the touch, not dry or crusty."
                ),
              },
              {
                type: "glossary",
                term: L("Muzzle"),
                meaning: L("The nose-and-mouth area of an animal's face — the part it uses to sniff, eat and drink."),
              },
              {
                type: "callout",
                style: "warning",
                heading: L("Fever — The Surprising Part"),
                text: L(
                  "Fever means the animal's body has become too warm on the inside. It usually comes together with fast breathing, shivering, and sometimes loose dung. Here is the part that surprises almost everyone the first time: the ears, horns and legs are usually COLD to the touch during a fever, even though the body itself is too warm. If you only feel the ears and they feel cool, you might wrongly assume there's no fever — so always check more than one sign."
                ),
              },
              {
                type: "poll",
                heading: L("Guess Before You Look"),
                questions: [
                  {
                    q: L("An animal has a fever. What will its ears and legs feel like if you touch them?"),
                    options: [L("Hot, just like the rest of the body"), L("Cold, even though the body itself is too warm"), L("Exactly the same as a healthy animal")],
                    answer: 1,
                    reveal: L(
                      "Cold ears, horns and legs together with a hot body is a classic, surprising sign of fever. Relying only on 'does the ear feel warm' will make you miss real fevers — always look at breathing, appetite and behaviour together too."
                    ),
                  },
                ],
              },
            ],
            check: [
              {
                type: "truefalse",
                q: L("During a fever, an animal's ears, horns and legs usually feel cold, even though its body is too warm."),
                answer: true,
                explain: L("Correct — this surprising pattern is exactly why you should never judge fever from the ears alone."),
              },
              {
                type: "mcq",
                q: L("Which of these is a sign of a HEALTHY coat and appearance?"),
                options: [L("Dull, patchy hair"), L("A shiny, smooth, even coat and a moist muzzle"), L("Watery, runny eyes"), L("A dry, crusty muzzle")],
                answer: 1,
                explain: L("A healthy animal has a shiny, smooth, even coat, clear eyes, and a muzzle that feels a little moist."),
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
              options: [L("Slower than an adult's"), L("The same as an adult's"), L("Faster than an adult's — 30–50 breaths a minute"), L("Impossible to count")],
              answer: 2,
              explain: L("Calves breathe faster than adults — 30–50 breaths a minute is normal for a calf, compared with 10–30 for an adult."),
            },
            {
              topicId: "t-vitals-normal",
              type: "truefalse",
              q: L("A healthy, resting animal chews the cud for 7–10 hours across the whole day."),
              answer: true,
              explain: L("Yes — chewing the cud (ruminating) for 7–10 hours a day, at least 40 chews a minute, is completely normal."),
            },
            {
              topicId: "t-vitals-appearance-fever",
              type: "mcq",
              q: L("What is the surprising, classic sign pattern of fever?"),
              options: [
                L("Hot ears together with a hot body"),
                L("Cold ears, horns and legs together with a hot body"),
                L("A cold body with cold ears"),
                L("No change anywhere on the body"),
              ],
              answer: 1,
              explain: L("Fever classically shows up as a hot body with cold ears, horns and legs — the opposite of what most people expect the first time."),
            },
            {
              topicId: "t-vitals-appearance-fever",
              type: "truefalse",
              q: L("A moist muzzle and a shiny, even coat are both signs of good health."),
              answer: true,
              explain: L("Yes — both are signs the animal is healthy: a shiny, even coat, and a muzzle that feels a little moist rather than dry or crusty."),
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
        estMinutes: 9,
        hook: [
          {
            type: "hero",
            heading: L("Too Thin or Too Fat? Learn to Tell at a Glance"),
            text: L(
              "You don't need a weighing scale to know if an animal is too thin or too fat — your eyes and a gentle hand are enough. This lesson teaches a simple 1-to-5 scoring system that vets everywhere use and understand instantly."
            ),
          },
        ],
        topics: [
          {
            id: "t-bcs-scale",
            title: L("The 5-Point Scale"),
            teach: [
              {
                type: "photo",
                src: "assets/illustration-m1-bcs-scale.png",
                alt: L("Illustrated diagram showing five Body Condition Score silhouettes side by side, numbered 1 to 5, from very thin to very fat."),
                caption: L("Illustration: the Body Condition Score scale from 1 (very thin) to 5 (very fat) — score 3 is the healthy target for most dairy animals."),
              },
              {
                type: "text",
                heading: L("What Are We Actually Looking At?"),
                html: L(
                  "When we score an animal's body condition, we're checking how much soft covering — fat and muscle — it has over a few bony parts of its body. Mainly: the row of small bumps running down the middle of its back, the two bony points at the top of its hips, and the small bony points near the base of its tail. On a very thin animal, all of these stick out sharply and are easy to see. On a fat animal, they disappear completely under soft, rounded cover."
                ),
              },
              {
                type: "glossary",
                term: L("Backbone Line (Spine)"),
                meaning: L(
                  "The row of small bones running down the middle of an animal's back, from its shoulders to its tail. On a very thin animal, you can clearly see each bump; on a well-covered animal, it looks like one smooth, gentle ridge."
                ),
              },
              {
                type: "glossary",
                term: L("Hip Bones and Tail Bones"),
                meaning: L(
                  "The bony points you can see or feel at the top of the hips, and the smaller bony points near where the tail begins. These are usually among the first places soft cover disappears from when an animal loses condition, and among the last places it reappears when an animal gains condition back."
                ),
              },
              {
                type: "stat-grid",
                items: [
                  {
                    label: L("Score 1 — Very thin"),
                    text: L(
                      "You can easily see the backbone, hip bones and ribs sticking out — there is almost no soft covering anywhere, and the coat often looks dull. This animal is not in good health and will not milk or breed well."
                    ),
                  },
                  {
                    label: L("Score 2 — Thin"),
                    text: L(
                      "The backbone, hips and tail bones are still easy to see, but a little soft covering is starting to appear near the tail and hips. The animal may otherwise seem healthy, but milk and breeding will suffer at this score."
                    ),
                  },
                  {
                    label: L("Score 3 — Well balanced"),
                    text: L(
                      "You can still just about see the ribs, but overall the animal looks smoothly covered rather than bony. This is the best score for high milk production — though it may not have quite enough extra reserve for the very peak of milking."
                    ),
                  },
                  {
                    label: L("Score 4 — Well covered"),
                    text: L(
                      "The backbone and hip bones are now hard to see, and there's an obvious soft, rounded pad near the shoulder and chest. This is good condition just before calving — but this same animal may face more health problems right around the time it gives birth."
                    ),
                  },
                  {
                    label: L("Score 5 — Very fat"),
                    text: L(
                      "The animal looks flat and round on top, with visible folds of fat, and may even move a little less easily because of the extra weight. This animal has a high chance of health and breeding problems."
                    ),
                  },
                ],
              },
            ],
            check: [
              {
                type: "mcq",
                q: L("What are we mainly looking at to give an animal a Body Condition Score?"),
                options: [
                  L("Its ears and its muzzle"),
                  L("How much soft covering there is over the backbone, hip bones and tail bones"),
                  L("Its teeth and horns"),
                  L("Only the size of its udder"),
                ],
                answer: 1,
                explain: L("BCS is judged by how much soft fat-and-muscle covering there is over the backbone line, hip bones and tail bones."),
              },
              {
                type: "truefalse",
                q: L("A Score 5 animal (very fat) has a higher chance of health and breeding problems than a Score 3 animal."),
                answer: true,
                explain: L("Yes — Score 5 (very fat) carries a high chance of health and breeding problems, while Score 3 is the well-balanced, best-producing score."),
              },
            ],
          },
          {
            id: "t-bcs-application",
            title: L("Why This Score Matters"),
            teach: [
              {
                type: "text",
                heading: L("The Target Number: 3.5"),
                html: L(
                  "A dry cow, or any cow close to giving birth, should ideally have a Body Condition Score of about 3.5. Too thin at that time raises the risk of a weak calf and illness in the mother. Too fat raises the risk of a difficult birth and health problems right afterwards. Body Condition Score is most useful as something you track over time, not just a one-time look."
                ),
              },
              {
                type: "glossary",
                term: L("Dry Cow"),
                meaning: L(
                  "A cow that has temporarily stopped being milked, resting for a few weeks before she gives birth to her next calf."
                ),
              },
              {
                type: "example",
                heading: L("A Real Example: Two Cows, Three Weeks From Giving Birth"),
                text: L(
                  "Cow A is Score 1.5 — ribs and hip bones clearly visible, dull coat. Cow B is Score 5 — flat, heavy back, visibly struggling to move. Both are due to give birth in three weeks. For Cow A, the owner needs to be told she is at risk of a weak calf and illness after birth, and her food needs to be reviewed urgently. For Cow B, the owner needs to be told she is at risk of a difficult birth and health problems right after — but her food should change well before her NEXT pregnancy, not right now. You cannot safely 'slim down' an animal this close to giving birth."
                ),
              },
              {
                type: "callout",
                style: "tip",
                heading: L("Check It Again and Again — Not Just Once"),
                text: L(
                  "The real value of this score comes from checking it at the same moments in every animal's cycle — for example, when she stops being milked, right before she gives birth, and at her best milking period — and watching how the number changes. A sudden drop between two checks is often the earliest warning sign of a problem, well before anything else shows up."
                ),
              },
            ],
            check: [
              {
                type: "mcq",
                q: L("What Body Condition Score should a dry cow, or a cow close to giving birth, ideally have?"),
                options: [L("2.0"), L("3.5"), L("5.0"), L("1.0")],
                answer: 1,
                explain: L("About 3.5 is the target score for a dry cow or a cow close to giving birth — balanced enough to avoid the risks of both being too thin and too fat."),
              },
              {
                type: "mcq",
                q: L("A cow due to give birth in three weeks is scored 5 (very fat). What is the right thing to do?"),
                options: [
                  L("Sharply cut her food right now to make her thinner before she gives birth"),
                  L("Nothing — a high score right before birth is ideal"),
                  L("Report the risk now, and change her feeding well before her NEXT pregnancy"),
                  L("Give her even more food to prepare for milking"),
                ],
                answer: 2,
                explain: L(
                  "You cannot safely slim an animal down this close to giving birth — that itself can cause harm. The right step is to report the risk now, and fix the feeding plan ahead of her next pregnancy cycle."
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
              q: L("A 'Score 1' animal (very thin) is best described as:"),
              options: [
                L("Smoothly covered with ribs barely visible"),
                L("Very thin, with the backbone, hip bones and ribs all easy to see, and a dull coat"),
                L("Very fat, with folds of fat and reduced movement"),
                L("The ideal condition for giving birth"),
              ],
              answer: 1,
              explain: L("Score 1 is very thin — backbone, hip bones and ribs all easy to see, with a dull coat and almost no soft covering."),
            },
            {
              topicId: "t-bcs-scale",
              type: "truefalse",
              q: L("Body Condition Score is scored from 1 (very thin) to 5 (very fat)."),
              answer: true,
              explain: L("Correct — it's a 1-to-5 scale, with about 3 to 3.5 generally being the well-balanced range."),
            },
            {
              topicId: "t-bcs-application",
              type: "mcq",
              q: L("Why is it best to check Body Condition Score again and again, rather than just once?"),
              options: [
                L("Because a single check is never accurate at all"),
                L("Because a sudden drop between two checks is often the earliest warning sign of a problem"),
                L("Because the score changes every hour"),
                L("Checking repeatedly isn't actually useful"),
              ],
              answer: 1,
              explain: L("Checking at the same points in an animal's cycle and watching how the score changes catches problems earlier than a single one-time look."),
            },
            {
              topicId: "t-bcs-application",
              type: "truefalse",
              q: L("An animal that is too thin close to giving birth only risks giving less milk, with no risk to the calf."),
              answer: false,
              explain: L("No — being too thin close to giving birth raises the risk of a weak calf AND illness in the mother, not just a milk problem."),
            },
          ],
        },
      },
    ],
  },

  // ============================================================================
  // Modules 2–17 — titled directly from the source handbook's table of
  // contents. Ready to fill in using the same beginner-friendly pattern as
  // Module 1 above.
  // ============================================================================
  {
    id: "m2",
    number: 2,
    title: L("Buying, Inducting & Aging a New Animal"),
    subtitle: L("Choosing a healthy animal, keeping a new arrival separate for a while, and telling roughly how old an animal is."),
    icon: "clipboard",
    available: true,
    lessons: [
      // ==================================================================
      // LESSON 1 — Choosing a Healthy Animal to Buy
      // ==================================================================
      {
        id: "m2-l1",
        title: L("Choosing a Healthy Animal to Buy"),
        estMinutes: 9,
        hook: [
          {
            type: "hero",
            heading: L("A New Animal Can Bring New Problems With It"),
            text: L(
              "A newly bought animal is one of the biggest ways a new disease can enter a herd (a group of animals kept together). Before anyone hands over money, a careful look — using the same watching-and-checking skills from Module 1 — can save the whole herd a lot of trouble later. This lesson shows you exactly what to look for."
            ),
          },
        ],
        topics: [
          {
            id: "t-m2-source-signs",
            title: L("Where to Buy From, and the Signs of a Healthy Animal"),
            teach: [
            {
              type: "photo",
              src: "assets/photo-m2-healthy-signs.jpg",
              alt: L("A tethered Sahiwal cow standing indoors on a dairy unit floor, ears up and alert, with a glossy reddish-brown coat."),
              caption: L("A healthy animal stands alert with ears up and a glossy coat — exactly the signs to look for before buying."),
            },
              {
                type: "text",
                heading: L("Why the Purchase Decision Matters"),
                html: L(
                  "Where an animal comes from, and how it looks and behaves on the day it's bought, both matter enormously. A hidden problem picked up before purchase can spread through an entire herd once the new animal arrives. None of this requires special equipment — it's the same kind of watching you already practised in Module 1, just applied before an animal even joins the herd."
                ),
              },
              {
                type: "glossary",
                term: L("Cattle Market / Shandy"),
                meaning: L(
                  "A place where animals from many different farms are brought together at once to be bought and sold. Because so many unrelated animals mix in one place, the chance that an animal has been exposed to disease there is higher than buying directly from a farm whose animals you can see for yourself."
                ),
              },
              {
                type: "callout",
                style: "info",
                heading: L("Prefer a Known, Tested Farm"),
                text: L(
                  "It is better to buy from a known farm (government or private) that regularly tests its animals for serious diseases — such as TB, Johne's Disease (JD) and brucellosis — and removes any animal that tests positive. Buying directly from an owner's farm like this is safer than buying from a cattle market or shandy."
                ),
              },
              {
                type: "stat-grid",
                items: [
                  {
                    label: L("Eyes"),
                    text: L("Should be bright and clear — beware of eyes that look runny, crusty, or bloodshot."),
                  },
                  {
                    label: L("Nose and breathing"),
                    text: L(
                      "The muzzle (nose-and-mouth area) should feel cool and a little moist, with the animal licking it now and then. Breathing should look regular and easy — beware of discharge, coughing, wheezing, or laboured breathing."
                    ),
                  },
                  {
                    label: L("Coat"),
                    text: L("Should look glossy, clean, and even — free of ticks, lice, or any other parasites or skin eruptions."),
                  },
                ],
              },
              {
                type: "stat-grid",
                items: [
                  {
                    label: L("Weight"),
                    text: L("Should look like an average weight for its breed — beware of an animal that looks emaciated (very thin) or underweight."),
                  },
                  {
                    label: L("Attitude"),
                    text: L(
                      "A healthy animal looks curious, alert and content. Beware of one that stands apart from the herd, seems disinterested in what's going on, or shows signs of a bad temper."
                    ),
                  },
                  {
                    label: L("Mobility"),
                    text: L(
                      "Walking should look easy and free of limps. Beware of a slow or uneven gait, a hunched position while sitting, or difficulty rising back up afterwards."
                    ),
                  },
                ],
              },
              {
                type: "example",
                heading: L("Two Animals, Side by Side"),
                text: L(
                  "Picture two animals for sale next to each other. The first stands with the group, ears up, watching what's going on, coat shining. The second stands off to one side on its own, coat looking dull and patchy, in no hurry to get up when nudged. Even without touching either animal, you already have real information — the second one deserves a much closer look, or a pass altogether."
                ),
              },
              {
                type: "callout",
                style: "tip",
                heading: L("Your Job: Check and Report, Not Decide Alone"),
                text: L(
                  "Whether you're helping choose an animal or just present when one is inspected, your job is to look carefully at each of these signs and pass on exactly what you saw. The final call on whether to buy is always the owner's (often together with a veterinarian) — never make that decision alone based on a hunch."
                ),
              },
            ],
            check: [
              {
                type: "mcq",
                q: L("Why is it generally safer to buy an animal directly from a known farm rather than from a cattle market or shandy?"),
                options: [
                  L("Animals are always cheaper at a cattle market"),
                  L("More unrelated animals mix together at a market/shandy, raising the chance of disease exposure"),
                  L("Cattle markets always test every animal for TB, JD and brucellosis"),
                  L("There is no real difference between the two"),
                ],
                answer: 1,
                explain: L(
                  "Because so many different animals from different places mix together at a market or shandy, the chance an animal has been exposed to disease there is higher than buying from a known, tested farm."
                ),
              },
              {
                type: "truefalse",
                q: L("A healthy animal's coat should look glossy, clean, and free of ticks or lice."),
                answer: true,
                explain: L("Correct — a glossy, clean, unmatted coat with no ticks, lice or other parasites is one of the signs of a healthy animal."),
              },
            ],
          },
          {
            id: "t-m2-udder-records-transport",
            title: L("Udder, Body Score, Past Records, and the Journey Home"),
            teach: [
            {
              type: "photo",
              src: "assets/photo-m2-udder-veins.jpg",
              alt: L("Close-up of the underside of a dairy cow's udder and flank, showing prominent, clearly visible milk veins running toward the belly."),
              caption: L("Prominent milk veins running along the underside of the udder toward the belly — one of the signs worth checking."),
            },
              {
                type: "text",
                heading: L("Checking the Udder"),
                html: L(
                  "The <b>udder</b> is the milk-producing organ, and it's worth a careful look on any milking animal you're considering. A healthy udder sits forward on the body, doesn't sag, and isn't too meaty or fleshy. As the animal walks, watch the udder — it shouldn't swing too much from side to side. Size on its own is NOT a reliable sign of a good udder — a large udder isn't automatically a healthy one."
                ),
              },
              {
                type: "glossary",
                term: L("Milk Veins"),
                meaning: L(
                  "The visible veins running along the underside of the udder toward the belly. On a healthy milking animal, these are usually easy to see — a good sign to look for alongside the udder's shape and firmness."
                ),
              },
              {
                type: "text",
                heading: L("Body Score: A Number You Already Know How to Read"),
                html: L(
                  "You already learned how to score an animal's body condition from 1 (very thin) to 5 (very fat) in Module 1 — this is exactly the same score. For an animal you're thinking of buying, aim for a <b>Body Condition Score between 3 and 4</b>. Anything much lower or higher is a good reason to look more closely, and to mention it, before any purchase decision is made."
                ),
              },
              {
                type: "callout",
                style: "info",
                heading: L("Ask About Its Past, Too"),
                text: L(
                  "Try to get a record of the animal's history: how many times it has calved, its milk yield in its last lactation, and whether it has had any past health problems (for example, an udder infection called mastitis, or difficulties around calving). You don't need to understand every medical term on that record — your role is to collect it and pass it along so the owner or vet can make sense of it."
                ),
              },
              {
                type: "text",
                heading: L("The Journey Home Matters Too"),
                html: L(
                  "Transport itself can be stressful for an animal, and a stressed animal is more likely to fall sick. If you're involved in transporting or receiving a newly bought animal, make sure it gets water, enough space, feed, and rest at regular intervals along the way, and that the vehicle floor has some bedding, such as paddy straw, rather than being bare."
                ),
              },
              {
                type: "callout",
                style: "warning",
                heading: L("Never Decide Alone"),
                text: L(
                  "By now you have a full checklist — source, general signs, udder, body score, records, age. Your job on every single one of these is to check carefully and report exactly what you find. The final decision to buy, reject, or ask for more tests is always made by the owner, usually together with a veterinarian — never by guesswork on your own."
                ),
              },
            ],
            check: [
              {
                type: "mcq",
                q: L("What Body Condition Score should you generally look for in a healthy animal being considered for purchase?"),
                options: [L("1 to 2"), L("3 to 4"), L("5 only"), L("Body score doesn't matter for purchase")],
                answer: 1,
                explain: L("A Body Condition Score of about 3 to 4 is a good sign of health in an animal being considered for purchase."),
              },
              {
                type: "truefalse",
                q: L("The size of an animal's udder alone is a reliable way to judge whether it is a good, healthy udder."),
                answer: false,
                explain: L("No — udder size on its own is not a reliable indicator. Shape, firmness, milk veins, and how it moves while walking all matter more."),
              },
            ],
          },
        ],
        finalQuiz: {
          passScore: 70,
          questions: [
            {
              topicId: "t-m2-source-signs",
              type: "mcq",
              q: L("Why is it generally safer to buy an animal directly from a known farm rather than from a cattle market or shandy?"),
              options: [
                L("Animals are always cheaper at a cattle market"),
                L("More unrelated animals mix together at a market/shandy, raising the chance of disease exposure"),
                L("Cattle markets always test every animal for TB, JD and brucellosis"),
                L("There is no real difference between the two"),
              ],
              answer: 1,
              explain: L("More unrelated animals mixing together at a market or shandy raises the chance of disease exposure compared with a known, tested farm."),
            },
            {
              topicId: "t-m2-source-signs",
              type: "truefalse",
              q: L("A healthy animal being considered for purchase should look curious, alert and content, not standing apart from the group."),
              answer: true,
              explain: L("Correct — a curious, alert, content attitude is a healthy sign. Standing apart or seeming disinterested is a warning sign worth reporting."),
            },
            {
              topicId: "t-m2-udder-records-transport",
              type: "mcq",
              q: L("What Body Condition Score should you generally look for in a healthy animal being considered for purchase?"),
              options: [L("1 to 2"), L("3 to 4"), L("5 only"), L("Body score doesn't matter for purchase")],
              answer: 1,
              explain: L("A Body Condition Score of about 3 to 4 is a good sign of health when considering an animal for purchase."),
            },
            {
              topicId: "t-m2-udder-records-transport",
              type: "truefalse",
              q: L("The size of an animal's udder alone is a reliable way to judge whether it is a good, healthy udder."),
              answer: false,
              explain: L("No — size alone is not reliable. Shape, firmness, prominent milk veins, and minimal side-to-side movement while walking matter more."),
            },
            {
              topicId: "t-m2-udder-records-transport",
              type: "mcq",
              q: L("What should be provided at regular intervals while transporting a newly purchased animal?"),
              options: [
                L("Nothing — it should simply endure the journey"),
                L("Water, feed, space and rest"),
                L("Loud noise to keep it alert"),
                L("Only water, and nothing else"),
              ],
              answer: 1,
              explain: L("Water, feed, adequate space, and rest at regular intervals all help reduce stress during transport, along with bedding on the vehicle floor."),
            },
          ],
        },
      },

      // ==================================================================
      // LESSON 2 — Keeping a New Arrival Separate, and Telling Its Age
      // ==================================================================
      {
        id: "m2-l2",
        title: L("Keeping a New Arrival Separate, and Telling Its Age"),
        estMinutes: 8,
        hook: [
          {
            type: "hero",
            heading: L("Don't Let a New Animal Put the Whole Herd at Risk"),
            text: L(
              "Even an animal that passed every check in the last lesson might still be carrying something that isn't obvious yet. That's why every new arrival is kept apart for a while before joining the herd. This lesson also teaches a simple, independent way to check roughly how old an animal really is — useful because a seller's word about age isn't always reliable."
            ),
          },
        ],
        topics: [
          {
            id: "t-m2-quarantine",
            title: L("Quarantine: Keeping a New Arrival Separate"),
            teach: [
              {
                type: "text",
                heading: L("Why Keep It Apart First?"),
                html: L(
                  "Looking healthy on the day of purchase, using everything from the last lesson, still doesn't guarantee an animal is free of every disease. Some problems take time to show themselves. Keeping a newly purchased animal separate from the rest of the herd for a while gives everyone a chance to find out, before any hidden problem can spread."
                ),
              },
              {
                type: "glossary",
                term: L("Quarantine"),
                meaning: L(
                  "Keeping a newly arrived animal completely separate from the rest of the herd for a set period, so that if it is carrying a hidden disease, it doesn't get the chance to spread before anyone notices."
                ),
              },
              {
                type: "stat-grid",
                items: [
                  {
                    label: L("How long"),
                    text: L("At least 3 weeks of isolation, with no contact at all with the rest of the herd."),
                  },
                  {
                    label: L("Order of work"),
                    text: L("Attend to the rest of your herd FIRST, every time. Only visit or handle the newly purchased animal afterwards."),
                  },
                  {
                    label: L("Before you rejoin the herd"),
                    text: L("Wash properly and change your clothes before going back to attend to the rest of the herd after handling the new animal."),
                  },
                ],
              },
              {
                type: "text",
                heading: L("What Happens During Quarantine"),
                html: L(
                  "During this period, the animal is dewormed, treated for fluke (a type of parasite, where relevant), and vaccinated, as decided by the vet. If it's a milking animal, it is milked separately, and only after every other animal in the herd has already been milked. A vet will also test it for a few specific problems: sub-clinical mastitis (an udder infection that isn't obvious just from looking), brucella, bovine TB, and Johne's Disease. Your role is to help present the animal for these checks and pass on the results — reading and interpreting them is the vet's job."
                ),
              },
              {
                type: "glossary",
                term: L("All-in, All-out"),
                meaning: L(
                  "A rule for the quarantine area: it is fully cleared out, cleaned and disinfected before the next new animal moves in. Animals that arrived at different times are never mixed together in the same quarantine space."
                ),
              },
              {
                type: "callout",
                style: "warning",
                heading: L("A Negative Test Doesn't Always Mean Disease-Free"),
                text: L(
                  "Even if an animal tests negative during quarantine, that is not a complete guarantee it is free of disease. This is exactly why the full quarantine period still matters, and why you should keep applying your Module 1 observation skills throughout — and report anything unusual you notice in the new animal right away, test results or not."
                ),
              },
            ],
            check: [
              {
                type: "truefalse",
                q: L("A newly purchased animal should be kept separate from the rest of the herd for at least 3 weeks."),
                answer: true,
                explain: L("Correct — at least 3 weeks of quarantine, with no contact with the rest of the herd, is the rule."),
              },
              {
                type: "mcq",
                q: L("After handling the newly purchased animal during quarantine, what should you do before going back to the rest of the herd?"),
                options: [
                  L("Nothing special is needed"),
                  L("Wash properly and change your clothes"),
                  L("Wait exactly one hour"),
                  L("Feed the new animal again first"),
                ],
                answer: 1,
                explain: L("Wash and change your clothes before attending to the rest of the herd, to avoid carrying anything over from the newly purchased animal."),
              },
            ],
          },
          {
            id: "t-m2-age-dentition",
            title: L("Telling an Animal's Age From Its Teeth"),
            teach: [
            {
              type: "photo",
              src: "assets/photo-m2-age-teeth.jpg",
              alt: L("Extreme close-up of an old cow's lower incisor teeth, viewed from the front, showing yellowed, worn, flattened tooth surfaces with visible gaps between them."),
              caption: L("By around the 10th year, an animal's incisors show heavy wear and visible gaps like these — one clue to its real age."),
            },
              {
                type: "text",
                heading: L("Why Bother Checking Age?"),
                html: L(
                  "When buying an animal, the age the seller tells you may not always be reliable. Checking the animal's own teeth gives an independent way to get a rough idea of its real age — no paperwork needed, just a look inside its mouth."
                ),
              },
              {
                type: "glossary",
                term: L("Dentition"),
                meaning: L(
                  "The arrangement and condition of an animal's teeth. Here, it specifically refers to the front teeth on the lower jaw, which change in a fairly predictable pattern as the animal grows older — and can be used to estimate its age."
                ),
              },
              {
                type: "glossary",
                term: L("Incisors"),
                meaning: L(
                  "The flat front teeth used for gripping grass. In cattle and buffaloes, these are found only on the bottom jaw, and they are the teeth this age-checking method focuses on."
                ),
              },
              {
                type: "timeline",
                heading: L("How the Front Teeth Change With Age"),
                items: [
                  {
                    year: L("Birth – 1 month"),
                    text: L("Two or more temporary (baby) incisors are present at birth. By one month, all 8 temporary incisors have appeared."),
                  },
                  {
                    year: L("2 years"),
                    text: L("The middle (central) pair of temporary incisors is replaced by permanent ones, which reach full growth by 2 years."),
                  },
                  {
                    year: L("3 years"),
                    text: L("A second pair of permanent incisors is now fully developed — 2 pairs of permanent incisors in total."),
                  },
                  {
                    year: L("Around 30 months onward"),
                    text: L("A third permanent incisor erupts at around 30 months of age, and a fourth follows sometime after 30 months."),
                  },
                  {
                    year: L("4–5 years (5–6 in buffaloes)"),
                    text: L("The animal now has a full set of permanent incisors."),
                  },
                  {
                    year: L("6th year"),
                    text: L("The central incisors begin to show wear, with a leveled, flattened top."),
                  },
                  {
                    year: L("10th year"),
                    text: L("All the incisors now show significant wear, with visible gaps appearing between them."),
                  },
                ],
                result: L(
                  "In short: more temporary (baby) teeth means a younger animal, while more worn, gapped permanent teeth means an older one."
                ),
              },
              {
                type: "callout",
                style: "info",
                heading: L("Horn Rings: Only a Very Rough Guess"),
                text: L(
                  "Some people also count the rings on an animal's horns to guess its age — the first ring appears at 10–12 months, with roughly one new ring added each year after that. But this is not a good method: by the 5th year, the first three rings may already be gone, and after 8 years, none may be visible at all. Checking the teeth is far more useful."
                ),
              },
              {
                type: "callout",
                style: "tip",
                heading: L("Report What You See, Let the Expert Confirm"),
                text: L(
                  "Your job is to notice the general pattern — how many permanent teeth are in, and how worn they look — and pass that along as part of the purchase information. Pinning down an exact age, and deciding what it means for the purchase, is for the owner or vet to confirm."
                ),
              },
            ],
            check: [
              {
                type: "mcq",
                q: L("Why might checking an animal's teeth be worth doing before buying it?"),
                options: [
                  L("Because it tells you the animal's exact weight"),
                  L("Because the age a seller states may not always be reliable"),
                  L("Because it tells you how much milk the animal gives"),
                  L("There is no real reason to check"),
                ],
                answer: 1,
                explain: L("The seller's stated age may not be reliable, so checking the teeth gives an independent, physical way to estimate age."),
              },
              {
                type: "truefalse",
                q: L("Horn rings are a very reliable way to tell an animal's exact age at any stage of its life."),
                answer: false,
                explain: L("No — horn rings only give a very rough idea, and become unreliable after a few years since older rings can disappear."),
              },
            ],
          },
        ],
        finalQuiz: {
          passScore: 70,
          questions: [
            {
              topicId: "t-m2-quarantine",
              type: "truefalse",
              q: L("A newly purchased animal should be kept separate from the herd for at least 3 weeks."),
              answer: true,
              explain: L("Correct — at least 3 weeks of quarantine is the rule before a new animal joins the rest of the herd."),
            },
            {
              topicId: "t-m2-quarantine",
              type: "mcq",
              q: L("After handling the newly purchased animal during quarantine, what should you do before going back to the rest of the herd?"),
              options: [
                L("Nothing special is needed"),
                L("Wash properly and change your clothes"),
                L("Wait exactly one hour"),
                L("Feed the new animal again first"),
              ],
              answer: 1,
              explain: L("Wash and change your clothes first, to avoid carrying anything over from the newly purchased animal to the rest of the herd."),
            },
            {
              topicId: "t-m2-quarantine",
              type: "truefalse",
              q: L("If a newly purchased animal tests negative for a disease once during quarantine, it is completely guaranteed to be free of that disease."),
              answer: false,
              explain: L("No — a negative test is not a complete guarantee. That's why the full quarantine period and ongoing observation still matter."),
            },
            {
              topicId: "t-m2-age-dentition",
              type: "mcq",
              q: L("By roughly what age does an animal typically have a full set of permanent incisors?"),
              options: [L("6 months"), L("1 year"), L("4–5 years (5–6 years in buffaloes)"), L("20 years")],
              answer: 2,
              explain: L("A full set of permanent incisors is typical by 4–5 years of age, or 5–6 years in buffaloes."),
            },
            {
              topicId: "t-m2-age-dentition",
              type: "truefalse",
              q: L("Horn rings give a precise, reliable way to know an animal's exact age at any stage of its life."),
              answer: false,
              explain: L("No — horn rings are only a rough guide, and become unreliable after several years as older rings disappear."),
            },
          ],
        },
      },
    ],
  },
  {
    id: "m3",
    number: 3,
    title: L("Care of the Newborn Calf"),
    subtitle: L("The critical first day of a calf's life, feeding it right, and handling calf diarrhoea."),
    icon: "calf",
    available: true,
    lessons: [
// ==================================================================
  // LESSON 1 — The First Day of Life and Feeding the Calf Right
  // ==================================================================
  {
    id: "m3-l1",
    title: L("The First Day of a Calf's Life"),
    estMinutes: 8,
    hook: [
      {
        type: "hero",
        heading: L("The First 24 Hours Set the Course for a Lifetime"),
        text: L(
          "A calf's life is really divided into two parts: the first 24 hours, and everything after. Get the first day right — a clean navel and the right amount of first milk at the right time — and you give the calf a real chance, even before any vet is involved. This lesson walks through exactly what needs to happen, and when."
        ),
      },
    ],
    topics: [
      {
        id: "t-m3-first-day",
        title: L("Right After Birth: Breathing, the Navel Cord and the Golden Hour"),
        teach: [
            {
              type: "photo",
              src: "assets/photo-cow-newborn-calf.jpg",
              alt: L("A cow standing with her newborn calf just after birth"),
              caption: L("A cow with her newborn calf right after birth."),
            },
          {
            type: "text",
            heading: L("Why the First 24 Hours Matter So Much"),
            html: L(
              "A calf that doesn't get proper care in its first 24 hours can end up sickly or a weak, underperforming animal for the rest of its life — even if it has good genes and a good environment later on. Almost none of this first-day care needs medical training. It needs someone who knows exactly what to do, and does it on time."
            ),
          },
          {
            type: "callout",
            style: "tip",
            heading: L("The Golden Hour"),
            text: L(
              "The first hour after calving is the single most critical period in a calf's entire life. Whatever can be done for the calf in this window — clearing its airway, letting it be licked clean, getting the cord cared for — should not be delayed."
            ),
          },
          {
            type: "timeline",
            heading: L("A Newborn Calf's First Day, Step by Step"),
            items: [
              {
                year: L("Right after birth"),
                text: L(
                  "Clean the calf's nostrils and mouth so it can breathe freely — this also helps prevent breathing problems later on. Let the mother lick the calf clean; this helps blood circulation and gets the calf ready to stand up and walk."
                ),
              },
              {
                year: L("Soon after birth"),
                text: L(
                  "The navel cord is cut about 2 inches from the base using a clean instrument, then dipped — not just smeared — in a 3.5% or higher iodine solution for at least 30 seconds, and the end is tied off with a clean thread."
                ),
              },
              {
                year: L("Within 12 hours"),
                text: L(
                  "The navel is dipped in iodine a second time. A navel that isn't cared for properly is a common gateway for serious infection."
                ),
              },
            ],
          },
          {
            type: "glossary",
            term: L("Navel Cord"),
            meaning: L(
              "The cord that connected the calf to its mother inside the womb. After birth it's cut short and cared for carefully, because the open end is an easy way for germs to get into the calf's body if it isn't cleaned and protected."
            ),
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("Cut Distance"),
                text: L("About 2 inches from the base, using a clean instrument."),
              },
              {
                label: L("Iodine Strength & Contact Time"),
                text: L("3.5% or higher tincture of iodine, held in contact for at least 30 seconds — a quick smear is not enough."),
              },
              {
                label: L("Second Dip"),
                text: L("Repeat the iodine dip after 12 hours."),
              },
            ],
          },
          {
            type: "callout",
            style: "warning",
            heading: L("A Poorly Cared-For Navel Invites Infection"),
            text: L(
              "You don't need to treat an infected navel yourself — that's the vet's job. But you do need to notice one. If a calf's navel looks wet, swollen, unusually large, or smells bad in the days after birth, report it to the owner or vet right away."
            ),
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("About how far from the base should the navel cord be cut?"),
            options: [
              L("Right at the base, leaving nothing"),
              L("About 2 inches from the base"),
              L("About 10 inches from the base"),
              L("It should never be cut"),
            ],
            answer: 1,
            explain: L("The cord is cut with a clean instrument about 2 inches from the base, then dipped in iodine and tied off."),
          },
          {
            type: "truefalse",
            q: L("The navel only needs to be dipped in iodine once, right after the cord is cut."),
            answer: false,
            explain: L(
              "No — the navel is dipped again after 12 hours. A poorly maintained navel is a common gateway to serious infection, so it gets checked and cared for more than once."
            ),
          },
        ],
      },
      {
        id: "t-m3-colostrum",
        title: L("Colostrum: The Calf's Passport to Life"),
        teach: [
            {
              type: "photo",
              src: "assets/photo-m3-colostrum.jpg",
              alt: L("A man crouches and holds up a bottle so a young calf can drink milk from it"),
              caption: L("Hand-feeding a calf with a bottle — the reliable way to make sure it actually gets the colostrum it needs, rather than hoping it nurses enough on its own."),
            },
          {
            type: "text",
            heading: L("What Is Colostrum, and Why Can't It Wait?"),
            html: L(
              "Right after giving birth, a mother produces a thick, special first milk that is very different from her regular milk. This is <b>colostrum</b>, and it carries protection against disease that the calf's own body cannot yet make for itself. That protection only transfers properly if colostrum is given early — the window closes fast."
            ),
          },
          {
            type: "glossary",
            term: L("Colostrum"),
            meaning: L(
              "The first, thick milk a mother cow or buffalo produces right after giving birth. Unlike regular milk, it is full of protection (antibodies) that helps the calf fight off disease — protection the calf's own body cannot yet make on its own."
            ),
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("Within 2 hours of birth"),
                text: L("Give the calf 2 litres of colostrum."),
              },
              {
                label: L("Within 12 hours of birth"),
                text: L("Give another 1–2 litres, depending on the calf's size."),
              },
              {
                label: L("After 24 hours"),
                text: L("Feeding colostrum this late may no longer help protect the calf."),
              },
              {
                label: L("Ongoing protection"),
                text: L("Enough colostrum in these early hours protects the calf from disease through its first three months of life."),
              },
            ],
          },
          {
            type: "callout",
            style: "warning",
            heading: L("Don't Rely on the Calf Nursing by Itself"),
            text: L(
              "Many calves don't nurse enough colostrum from their mother on their own in the first few hours, so they may end up without enough protection. That's why hand-feeding colostrum is recommended — it's the only way to be sure exactly how much an individual calf has actually received."
            ),
          },
          {
            type: "example",
            heading: L("Why It's Called a 'Passport to Life'"),
            text: L(
              "If a calf is simply left to nurse on its own, no one really knows how much colostrum it got, or when. Hand-feeding a measured amount, at the right time, removes that guesswork — which is exactly why colostrum is sometimes called the calf's passport to life: get it right, and the calf carries that protection with it for months."
            ),
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("Deworming"),
                text: L("Within 10–14 days of age, then monthly up to 6 months."),
              },
              {
                label: L("Calf Starter Feed"),
                text: L("Introduce from 2 to 8 weeks of age to support growth."),
              },
              {
                label: L("Vaccination"),
                text: L("Once the calf is 3 months old, contact the veterinarian about vaccination."),
              },
            ],
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("How much colostrum should a newborn calf get within the first 2 hours of birth?"),
            options: [L("About 200 ml"), L("About 2 litres"), L("About 10 litres"), L("None — wait until the next day")],
            answer: 1,
            explain: L("2 litres within the first 2 hours, with another 1–2 litres (depending on size) within 12 hours."),
          },
          {
            type: "truefalse",
            q: L("Feeding colostrum at any point in the first week works just as well as feeding it in the first few hours."),
            answer: false,
            explain: L(
              "No — colostrum needs to be given early. Feeding it after 24 hours of birth may no longer help the calf, so the first 2 and 12 hours matter a great deal."
            ),
          },
        ],
      },
    ],
    finalQuiz: {
      passScore: 70,
      questions: [
        {
          topicId: "t-m3-first-day",
          type: "mcq",
          q: L("What is the 'golden hour' referred to in newborn calf care?"),
          options: [
            L("Any hour during the first week"),
            L("The first hour after calving — the most critical period in a calf's life"),
            L("The hour before calving"),
            L("The hour when the calf is vaccinated"),
          ],
          answer: 1,
          explain: L("The first hour after calving is described as the single most critical period in the calf's entire life."),
        },
        {
          topicId: "t-m3-first-day",
          type: "truefalse",
          q: L("Letting the mother lick the newborn calf clean helps blood circulation and helps the calf get ready to stand."),
          answer: true,
          explain: L("Correct — licking promotes circulation in the calf's body and helps prepare it to stand up and walk."),
        },
        {
          topicId: "t-m3-colostrum",
          type: "mcq",
          q: L("What is colostrum?"),
          options: [
            L("Ordinary milk given a week after calving"),
            L("The first, protection-rich milk a mother produces right after giving birth"),
            L("A medicine given to calves"),
            L("Water mixed with salt"),
          ],
          answer: 1,
          explain: L("Colostrum is the mother's first, thick milk, produced right after birth, full of protection the calf cannot yet make on its own."),
        },
        {
          topicId: "t-m3-colostrum",
          type: "truefalse",
          q: L("Because it's hard to be sure a calf nursed enough colostrum on its own, hand-feeding is recommended."),
          answer: true,
          explain: L("Correct — hand-feeding is recommended so the amount an individual calf receives is known for certain."),
        },
        {
          topicId: "t-m3-first-day",
          type: "mcq",
          q: L("How is a poorly cared-for navel described in this lesson?"),
          options: [
            L("Not important at all"),
            L("A gateway to serious infection"),
            L("Only a cosmetic issue"),
            L("Something that heals itself without any care"),
          ],
          answer: 1,
          explain: L("A poorly maintained navel is a gateway to serious infections, which is why it's cleaned, dipped in iodine, and checked again at 12 hours."),
        },
      ],
    },
  },

  // ==================================================================
  // LESSON 2 — Calf Diarrhoea: Recognizing It and Responding Fast
  // ==================================================================
  {
    id: "m3-l2",
    title: L("Calf Diarrhoea: Recognizing It and Responding Fast"),
    estMinutes: 8,
    hook: [
      {
        type: "hero",
        heading: L("Diarrhoea Can Kill a Calf Fast — But You Can Catch It Early"),
        text: L(
          "Calf diarrhoea can have many different causes, and working out which one is always the vet's job. But the real danger — fast loss of water and body salts — is something you can learn to spot early, using nothing but your eyes and your hands. This lesson teaches you what to look for, and exactly what to do while you get the vet involved."
        ),
      },
    ],
    topics: [
      {
        id: "t-m3-diarrhoea-signs",
        title: L("Why Diarrhoea Is So Dangerous, and How to Check Dehydration"),
        teach: [
          {
            type: "text",
            heading: L("Diarrhoea Is Dangerous Because of What It Takes Away"),
            html: L(
              "Calf diarrhoea can happen for many different reasons. Whatever the cause, the real danger is the same: the calf loses large amounts of water and body salts (<b>electrolytes</b>) very quickly through watery dung. That fluid loss alone can kill a calf fast — sometimes even before anyone works out the underlying cause."
            ),
          },
          {
            type: "glossary",
            term: L("Electrolytes"),
            meaning: L(
              "Salts the body needs to keep working properly. A calf with diarrhoea loses large amounts of these salts along with water, and it's this double loss — water and electrolytes together — that makes diarrhoea so dangerous."
            ),
          },
          {
            type: "example",
            heading: L("How to Check 'Skin Tenting'"),
            text: L(
              "Gently pinch and lift a small fold of skin — around the eye, neck or chest area — then let go. In a well-hydrated calf, the skin snaps back flat right away. If it stays raised for a few seconds before flattening out, that's called 'tenting', and the longer it takes to flatten, the more dehydrated the calf is."
            ),
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("Up to 5% dehydrated"),
                text: L("No symptoms — the calf looks normal."),
              },
              {
                label: L("5–6% dehydrated"),
                text: L("Diarrhoea is present, but no other clinical signs; the calf still suckles strongly."),
              },
              {
                label: L("6–8% dehydrated"),
                text: L("Mild dullness, skin stays tented 2–6 seconds, eyes look a little sunken, calf is weak but still suckling."),
              },
            ],
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("8–10% dehydrated"),
                text: L("Clearly dull and lying down, eyes very sunken, gums dry, skin stays tented for more than 6 seconds."),
              },
              {
                label: L("10–14% dehydrated"),
                text: L("Cannot stand, extremities feel cool, skin remains tented, calf is unconscious (comatose)."),
              },
              {
                label: L("Over 14% dehydrated"),
                text: L("This level of dehydration leads to death."),
              },
            ],
          },
          {
            type: "callout",
            style: "warning",
            heading: L("Above 8% Needs a Vet Right Now"),
            text: L(
              "Once a calf shows more than 8% dehydration, it needs immediate intravenous (into-the-vein) fluid therapy from a veterinarian. This is not something to wait on — contact the veterinarian immediately."
            ),
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("What does it mean if a pinched fold of skin stays 'tented' for more than 6 seconds before flattening?"),
            options: [
              L("The calf is perfectly hydrated"),
              L("The calf is seriously dehydrated"),
              L("The calf has been vaccinated"),
              L("It means nothing on its own"),
            ],
            answer: 1,
            explain: L("Skin that stays tented for a long time is a sign of significant dehydration — the longer it stays raised, the more severe the dehydration."),
          },
          {
            type: "truefalse",
            q: L("A calf with more than 8% dehydration needs immediate veterinary attention for intravenous fluids."),
            answer: true,
            explain: L("Correct — beyond 8% dehydration, the calf needs urgent intravenous fluid therapy from a veterinarian, without delay."),
          },
        ],
      },
      {
        id: "t-m3-diarrhoea-action",
        title: L("What to Do: Fluids, Reporting and Preventing It Next Time"),
        teach: [
          {
            type: "text",
            heading: L("Two Things to Do Right Away"),
            html: L(
              "As soon as diarrhoea is noticed, two things should happen together: start replacing the fluids the calf is losing, and contact a veterinarian at the earliest to find the cause and get the right treatment. Your job is to act fast on the fluids and the reporting — never to diagnose the cause or choose medicines yourself."
            ),
          },
          {
            type: "callout",
            style: "info",
            heading: L("Why Not Ordinary Sugar?"),
            text: L(
              "Calves don't digest ordinary table sugar (sucrose) well. Adding it to a fluid solution can actually make diarrhoea worse, causing even more fluid and electrolyte loss. That's why glucose is used instead of sugar in the electrolyte solution."
            ),
          },
          {
            type: "ledger",
            heading: L("Home Electrolyte Solution (for 1 litre of warm water)"),
            rows: [
              { label: L("Glucose"), amount: "5 teaspoons" },
              { label: L("Soda bi-carbonate"), amount: "1 teaspoon" },
              { label: L("Table salt"), amount: "1 teaspoon" },
            ],
            total: { label: L("Feed"), amount: "2–4 litres of this solution every day" },
          },
          {
            type: "callout",
            style: "tip",
            heading: L("This Solution Is Extra, Not a Replacement"),
            text: L(
              "The electrolyte solution should be fed in addition to the calf's normal feeding, not instead of it. Keep feeding as usual, and add the electrolyte solution on top."
            ),
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("Colostrum Within 6 Hours"),
                text: L("Make sure the calf gets adequate colostrum within 6 hours of birth — this is what gives it the immunity to fight off infections like diarrhoea."),
              },
              {
                label: L("Clean, Dry Surroundings"),
                text: L("Keep the calf in a hygienic, dry environment."),
              },
              {
                label: L("Clean Udder Before Suckling"),
                text: L("Make sure the mother's udder is clean before letting the calf suckle."),
              },
            ],
          },
          {
            type: "callout",
            style: "warning",
            heading: L("Never Decide the Cause or the Treatment Yourself"),
            text: L(
              "Working out exactly why a calf has diarrhoea, and choosing the right treatment, is always the veterinarian's job. Your job is to notice it early, start fluid replacement, keep things clean, and call the veterinarian at the earliest — especially if you see any sign of dehydration above 8%."
            ),
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("Why does the home electrolyte recipe use glucose instead of ordinary table sugar?"),
            options: [
              L("Glucose tastes better to calves"),
              L("Table sugar (sucrose) is not digested well by calves and can worsen diarrhoea"),
              L("Table sugar is more expensive"),
              L("There is no real difference"),
            ],
            answer: 1,
            explain: L("Calves don't digest table sugar (sucrose) effectively, and adding it can worsen diarrhoea by increasing fluid and electrolyte loss — so glucose is used instead."),
          },
          {
            type: "truefalse",
            q: L("The electrolyte solution should replace the calf's normal feed while it has diarrhoea."),
            answer: false,
            explain: L("No — the electrolyte solution is fed over and above normal feeding, not instead of it."),
          },
        ],
      },
    ],
    finalQuiz: {
      passScore: 70,
      questions: [
        {
          topicId: "t-m3-diarrhoea-signs",
          type: "mcq",
          q: L("Why can calf diarrhoea kill quickly, even before a cause is found?"),
          options: [
            L("It causes rapid loss of water and electrolytes"),
            L("It always comes with a high fever"),
            L("It stops the calf from breathing"),
            L("It only affects appetite, nothing else"),
          ],
          answer: 0,
          explain: L("The real danger is the fast loss of water and electrolytes, which alone can kill a calf quickly regardless of the underlying cause."),
        },
        {
          topicId: "t-m3-diarrhoea-signs",
          type: "truefalse",
          q: L("At up to 5% dehydration, a calf usually shows no symptoms at all."),
          answer: true,
          explain: L("Correct — up to 5% dehydration, the calf typically looks normal with no visible symptoms."),
        },
        {
          topicId: "t-m3-diarrhoea-action",
          type: "mcq",
          q: L("What are the two things ground staff should do as soon as they notice a calf with diarrhoea?"),
          options: [
            L("Wait a few days to see if it clears up on its own"),
            L("Start replacing fluids and contact the veterinarian at the earliest"),
            L("Decide on medicine themselves"),
            L("Stop all feeding until the vet arrives"),
          ],
          answer: 1,
          explain: L("Replace lost fluids with the electrolyte solution and contact the veterinarian at the earliest to determine the cause and treatment."),
        },
        {
          topicId: "t-m3-diarrhoea-action",
          type: "truefalse",
          q: L("Preventing diarrhoea starts with making sure the calf gets adequate colostrum within 6 hours of birth."),
          answer: true,
          explain: L("Correct — adequate colostrum within 6 hours of birth helps ensure proper transfer of immunity, which helps prevent diarrhoea."),
        },
        {
          topicId: "t-m3-diarrhoea-signs",
          type: "mcq",
          q: L("A calf cannot stand, has cool extremities, and its skin remains tented. Roughly what dehydration level does this describe?"),
          options: [L("Up to 5%"), L("5–6%"), L("10–14%"), L("This pattern doesn't relate to dehydration")],
          answer: 2,
          explain: L("These are the signs described for the 10–14% dehydration level — a very serious, critical state."),
        },
      ],
    },
  },
    ],
  },
  {
    id: "m4",
    number: 4,
    title: L("Diseases Preventable by Vaccination"),
    subtitle: L("The common diseases that a simple injection can prevent, and when each vaccine is due."),
    icon: "syringe",
    available: true,
    lessons: [
// ==================================================================
  // LESSON 1 — Why Vaccination Matters, and Two Diseases to Know First
  // ==================================================================
  {
    id: "m4-l1",
    title: L("Why Vaccination Matters"),
    estMinutes: 9,
    hook: [
      {
        type: "hero",
        heading: L("A Simple Injection Can Prevent a Disease Entirely"),
        text: L(
          "Some diseases are so serious that by the time you see the signs, it may already be too late to save the animal. The good news is that many of the worst ones can be prevented completely, ahead of time, with a vaccine given on schedule. This lesson explains what a vaccine actually does, and introduces the first two diseases every ground-force worker should be able to recognise."
        ),
      },
    ],
    topics: [
      {
        id: "t-m4-why-vaccinate",
        title: L("What a Vaccine Does, and What Your Role Is"),
        teach: [
            {
              type: "photo",
              src: "assets/illustration-m4-vaccine-immunity.png",
              alt: L("Illustrated three-step diagram: a vaccine being given, the body's immune cells learning to fight the germ, and the animal protected from disease."),
              caption: L("Illustration: how a vaccine protects an animal — it teaches the body to recognise and fight a germ before the real disease ever arrives."),
            },
            {
              type: "photo",
              src: "assets/photo-m4-vet-vaccinating.jpg",
              alt: L("A uniformed veterinary professional wearing gloves, holding a syringe, injecting a restrained cow while farm workers look on"),
              caption: L("Vaccinating an animal is always done by a trained, authorised professional — never something you decide or do yourself."),
            },
          {
            type: "text",
            heading: L("Training the Body Before the Disease Ever Arrives"),
            html: L(
              "A <b>vaccine</b> is a shot given to a healthy animal that trains its body to recognise and fight off one specific disease — before the animal ever actually catches it. Think of it like a fire drill: nobody wants a real fire, but practising the response ahead of time means the body already knows exactly what to do if the real disease ever shows up."
            ),
          },
          {
            type: "glossary",
            term: L("Vaccine"),
            meaning: L(
              "An injection given to a healthy animal that trains its body to defend itself against one particular disease, before that disease ever actually infects it."
            ),
          },
          {
            type: "glossary",
            term: L("Vaccination Coverage"),
            meaning: L(
              "How many animals out of the whole group have actually been vaccinated. Disease control needs most of the group covered — vaccinating just one or two animals in a large herd leaves the rest exposed and the disease can still spread."
            ),
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("Why timing matters"),
                text: L(
                  "Vaccines exist for most of the serious diseases covered in this module. They work best when given on a mass scale, on time, before the disease season or the risky age arrives — not after signs have already appeared."
                ),
              },
              {
                label: L("The coverage number"),
                text: L(
                  "At least 80% of the animals in a group need to be vaccinated for the disease to actually be brought under control across that herd or area."
                ),
              },
            ],
          },
          {
            type: "callout",
            style: "tip",
            heading: L("Your Job: Know the Schedule, Remind and Report — Never Inject"),
            text: L(
              "Deciding which vaccine, choosing the dose, and giving the injection is always done by a trained person — usually a veterinarian or an authorised vaccinator. Your job is different and just as important: know roughly what's due and when, remind the farmer, and flag it to the vet if you're not sure something has been done on time."
            ),
          },
          {
            type: "example",
            heading: L("A Comparison You Already Know"),
            text: L(
              "This works the same way as childhood vaccination drives for children — a course of shots given at specific ages, before the child is ever likely to be exposed to that illness. Animals need the same kind of advance protection, just on their own schedule."
            ),
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("What does a vaccine actually do?"),
            options: [
              L("Cures a disease after the animal already has it"),
              L("Trains a healthy animal's body to defend against a disease before it is ever infected"),
              L("Makes the animal produce more milk immediately"),
              L("Replaces the need for the animal to be observed"),
            ],
            answer: 1,
            explain: L("A vaccine is given to a healthy animal ahead of time so its body already knows how to fight off that specific disease if it ever shows up."),
          },
          {
            type: "truefalse",
            q: L("As a ground-force worker, it is your job to decide which vaccine an animal needs and give the injection yourself."),
            answer: false,
            explain: L(
              "No — choosing and giving a vaccine is done by a trained veterinarian or authorised vaccinator. Your role is to know the schedule, remind the farmer, and report."
            ),
          },
        ],
      },
      {
        id: "t-m4-fmd-hs",
        title: L("Two Diseases You'll Hear About Often: FMD and HS"),
        teach: [
          {
            type: "text",
            heading: L("Foot and Mouth Disease (FMD)"),
            html: L(
              "FMD is a highly contagious viral disease — it spreads easily through direct contact, and even through contaminated water, feed and air. It rarely kills adult animals outright, but it can permanently reduce their milk production, fertility and working strength for the rest of their life after recovery. In calves, it is usually fatal."
            ),
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("Watch for"),
                text: L("A sudden, drastic drop in milk production, fever, heavy drooling, and watery discharge from the nose."),
              },
              {
                label: L("Mouth and feet"),
                text: L(
                  "Small fluid-filled blisters on the tongue, gums, lips and dental pad, and between the toes — blisters between the toes often cause noticeable limping."
                ),
              },
              {
                label: L("Udder"),
                text: L("Blister-like lesions on the teats can also lead to a painful, infected udder."),
              },
            ],
          },
          {
            type: "callout",
            style: "warning",
            heading: L("Report FMD Signs the Same Day"),
            text: L(
              "Because FMD spreads so easily through contact and shared water or feed, an infected animal should be kept away from the rest of the herd as soon as it's noticed, and reported right away — even though it is rarely fatal to adults, the losses to milk and long-term health are severe."
            ),
          },
          {
            type: "text",
            heading: L("Haemorrhagic Septicaemia (HS)"),
            html: L(
              "HS is a fast-moving bacterial disease that usually strikes during the monsoon, especially in humid, waterlogged conditions. It can kill up to 80% of the animals it infects, and buffaloes are generally more at risk from it than cattle."
            ),
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("Watch for"),
                text: L("High fever together with a sudden drop in milk yield, drooling, and watery nasal discharge."),
              },
              {
                label: L("The throat swelling"),
                text: L("Severe swelling of the throat area, causing difficulty breathing — the animal may make a grunting sound."),
              },
            ],
          },
          {
            type: "callout",
            style: "warning",
            heading: L("HS Can Kill Within a Day or Two — Do Not Wait"),
            text: L(
              "An animal showing HS signs can die within 1–2 days of the symptoms first appearing, and animals that already show clear signs — buffaloes especially — rarely recover. If you see high fever, throat swelling or breathing trouble together with a milk drop during the monsoon, report it immediately, the same hour if possible."
            ),
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("Which of these is a sign of FMD (Foot and Mouth Disease)?"),
            options: [
              L("Blisters on the tongue, gums or between the toes, with a sudden drop in milk"),
              L("Only a change in coat colour"),
              L("Increased milk production"),
              L("No visible signs at all, ever"),
            ],
            answer: 0,
            explain: L("FMD shows up as blisters in the mouth and feet, drooling, nasal discharge, and a sudden drop in milk production."),
          },
          {
            type: "truefalse",
            q: L("Haemorrhagic Septicaemia (HS) can kill an animal within 1–2 days of the first symptoms appearing."),
            answer: true,
            explain: L("Yes — HS moves very fast, sometimes causing death within just 1–2 days of symptoms appearing, which is why it needs to be reported immediately."),
          },
        ],
      },
    ],
    finalQuiz: {
      passScore: 70,
      questions: [
        {
          topicId: "t-m4-why-vaccinate",
          type: "mcq",
          q: L("What percentage of a herd generally needs to be vaccinated for a disease to be properly controlled across that group?"),
          options: [L("At least 80%"), L("About 10%"), L("Exactly 50%"), L("Only the sick animals")],
          answer: 0,
          explain: L("At least 80% coverage of the group is needed for vaccination to actually control the spread of a disease."),
        },
        {
          topicId: "t-m4-why-vaccinate",
          type: "truefalse",
          q: L("A vaccine is given to an animal after it has already caught the disease, to cure it."),
          answer: false,
          explain: L("No — a vaccine is given to a healthy animal beforehand, to train its body to resist the disease before it is ever infected."),
        },
        {
          topicId: "t-m4-fmd-hs",
          type: "mcq",
          q: L("Why is FMD such a serious concern even though it rarely kills adult animals?"),
          options: [
            L("Because it has no symptoms at all"),
            L("Because it can permanently reduce milk, fertility and working strength for life, and is usually fatal in calves"),
            L("Because it only affects wild animals"),
            L("Because it disappears without spreading"),
          ],
          answer: 1,
          explain: L("FMD causes lasting damage to milk yield, fertility and draft strength in adults, and is usually fatal in calves — plus it spreads very easily."),
        },
        {
          topicId: "t-m4-fmd-hs",
          type: "mcq",
          q: L("HS (Haemorrhagic Septicaemia) is most commonly seen during which season?"),
          options: [L("Summer"), L("Monsoon"), L("Only in winter"), L("It has no seasonal pattern")],
          answer: 1,
          explain: L("HS is an acute bacterial disease that usually occurs during the monsoon, especially in humid, waterlogged conditions."),
        },
        {
          topicId: "t-m4-fmd-hs",
          type: "truefalse",
          q: L("Buffaloes are generally more susceptible to HS than cattle are."),
          answer: true,
          explain: L("Yes — buffaloes are generally more susceptible to HS, and animals with clear signs rarely recover once symptoms have started."),
        },
      ],
    },
  },

  // ==================================================================
  // LESSON 2 — More Diseases Ground Staff Should Recognise
  // ==================================================================
  {
    id: "m4-l2",
    title: L("More Diseases to Recognise and Report"),
    estMinutes: 10,
    hook: [
      {
        type: "hero",
        heading: L("Six More Diseases, Six Sets of Signs to Remember"),
        text: L(
          "Each disease in this lesson looks different, spreads differently, and needs a different kind of urgency. You don't need to memorise every detail — you need to recognise the pattern of signs well enough to say 'this looks serious' and get the right person involved quickly."
        ),
      },
    ],
    topics: [
      {
        id: "t-m4-bq-bruc-ibr",
        title: L("Black Quarter, Brucellosis and IBR"),
        teach: [
          {
            type: "text",
            heading: L("Black Quarter (BQ)"),
            html: L(
              "BQ is an acute disease of cattle that causes gas-filled swelling in the heavy muscles of the body. It mostly affects healthy young animals between 6 months and 2 years old. Buffaloes usually get a milder form of it."
            ),
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("Watch for"),
                text: L(
                  "Sudden high fever (as high as 107–108°F), the animal suddenly stops eating and chewing the cud, and a hot, painful swelling appears on the loin or buttocks — sometimes the shoulder, chest or neck too."
                ),
              },
              {
                label: L("A telling detail"),
                text: L(
                  "If you press gently on the swelling, it can make a crackling sound because of gas underneath the skin. The animal can die within 24–48 hours of these signs appearing."
                ),
              },
            ],
          },
          {
            type: "text",
            heading: L("Brucellosis"),
            html: L(
              "Brucellosis is a bacterial disease that mainly shows up as abortion — the loss of a pregnancy — usually after the 5th month. It can also cause weak or diseased calves, repeat breeding problems and mastitis. It is <b>zoonotic</b>, meaning humans can catch it too, mainly by drinking raw (unboiled) milk from an infected animal or by contact with fluids from a birth or abortion."
            ),
          },
          {
            type: "callout",
            style: "warning",
            heading: L("Any Abortion After the 5th Month Should Be Reported and Treated Carefully"),
            text: L(
              "Report it right away, and never handle an aborted calf, the afterbirth, or any related discharge with bare hands — this material carries a very high load of bacteria and is a real risk to human health as well as to the rest of the herd."
            ),
          },
          {
            type: "text",
            heading: L("Infectious Bovine Rhinotracheitis (IBR)"),
            html: L(
              "IBR is a viral disease with three forms — the most common affect breathing and the reproductive parts. It causes abortion, a moderate drop in milk, and can even kill young calves."
            ),
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("Watch for"),
                text: L("Coughing, heavy watery discharge from both nostrils, and fever."),
              },
              {
                label: L("Other signs"),
                text: L(
                  "Redness and discharge in one or both eyes; in the genital form, a swollen vulva with sores. Abortion is common between the 6th and 8th month of pregnancy."
                ),
              },
            ],
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("What is a distinctive sign of Black Quarter (BQ)?"),
            options: [
              L("A hot, painful swelling on the loin or buttocks that may crackle when pressed"),
              L("Watery eyes only"),
              L("Increased appetite"),
              L("Slow, gradual weight loss over months"),
            ],
            answer: 0,
            explain: L("BQ causes a hot, painful, gas-filled swelling — pressing on it can produce a crackling sound — along with sudden high fever."),
          },
          {
            type: "truefalse",
            q: L("Brucellosis can spread to humans, mainly through raw milk or contact with birth fluids from an infected animal."),
            answer: true,
            explain: L("Yes — Brucellosis is zoonotic. Humans can catch it from raw milk of an infected animal or from contact with uterine discharges."),
          },
        ],
      },
      {
        id: "t-m4-rabies-anthrax-thei",
        title: L("Rabies, Anthrax and Theileriosis"),
        teach: [
          {
            type: "text",
            heading: L("Rabies"),
            html: L(
              "Rabies is a highly fatal viral disease, mainly spread by the bite of a rabid dog. It is also <b>zoonotic</b> — humans can catch it from a bite too. Once symptoms appear in an animal, death is inevitable, usually within 24–48 hours."
            ),
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("Watch for"),
                text: L("Unusual excitability, heavy drooling, a strange hoarse bellowing sound, and either aggression or paralysis."),
              },
              {
                label: L("Timing"),
                text: L("Signs can appear as early as 3 weeks, or as late as 5–6 months, after the original dog bite."),
              },
            ],
          },
          {
            type: "callout",
            style: "warning",
            heading: L("If an Animal Is Bitten by a Dog"),
            text: L(
              "Wash the wound immediately under running water for 5–10 minutes, gently clean it with soap, and get the vet involved right away — post-bite vaccination may be needed. This is urgent, not something to wait on."
            ),
          },
          {
            type: "text",
            heading: L("Anthrax"),
            html: L(
              "Anthrax is a highly fatal bacterial disease that can affect any farm animal. Its spores can survive in soil for up to 30 years, and animals usually get infected by eating contaminated feed or fodder."
            ),
          },
          {
            type: "callout",
            style: "warning",
            heading: L("Never Open the Carcass of a Suspected Anthrax Death"),
            text: L(
              "Anthrax typically causes high fever, difficulty breathing, bleeding from body openings, and sudden death. If an animal dies suddenly with these signs, do not open the carcass — report it immediately and let the vet decide what to do. Humans can also get infected from contact with the carcass or by inhaling spores."
            ),
          },
          {
            type: "text",
            heading: L("Theileriosis"),
            html: L(
              "Theileriosis is caused by a tiny parasite spread by ticks. Young exotic and crossbred cattle are highly at risk; Indian (zebu) breeds are comparatively resistant, and buffaloes usually get only a mild form."
            ),
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("Watch for"),
                text: L(
                  "Fever, swollen lymph nodes, pale gums, weakness (anaemia), nasal discharge, yellowing of the eyes or gums (jaundice), and rapid, shallow breathing."
                ),
              },
              {
                label: L("Severe cases"),
                text: L("Some animals show nervous signs — an unsteady stepping walk, pressing the head against something, and eventually collapse."),
              },
            ],
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("What should be done first if an animal is bitten by a dog suspected of having rabies?"),
            options: [
              L("Wait a few weeks to see if any signs appear"),
              L("Wash the wound under running water for 5–10 minutes, clean with soap, and get the vet involved immediately"),
              L("Only report it if the animal starts drooling"),
              L("Give the animal any vaccine you have on hand yourself"),
            ],
            answer: 1,
            explain: L("Wash and clean the wound right away and involve the vet immediately — post-bite treatment may be needed, and this is urgent."),
          },
          {
            type: "truefalse",
            q: L("Indian (zebu) cattle breeds are comparatively resistant to Theileriosis compared with exotic and crossbred cattle."),
            answer: true,
            explain: L("Yes — young exotic and crossbred cattle are highly susceptible to Theileriosis, while Indian zebu breeds are comparatively resistant."),
          },
        ],
      },
    ],
    finalQuiz: {
      passScore: 70,
      questions: [
        {
          topicId: "t-m4-bq-bruc-ibr",
          type: "mcq",
          q: L("Which age group of cattle is most commonly affected by Black Quarter (BQ)?"),
          options: [L("Newborn calves under 1 month"), L("6 months to 2 years old"), L("Only animals over 10 years old"), L("Only pregnant cows")],
          answer: 1,
          explain: L("BQ generally affects healthy young animals between 6 months and 2 years of age."),
        },
        {
          topicId: "t-m4-bq-bruc-ibr",
          type: "truefalse",
          q: L("If a cow aborts after the 5th month of pregnancy, it is safe to handle the aborted material with bare hands as long as you wash up afterward."),
          answer: false,
          explain: L("No — aborted material, afterbirth and discharges should never be handled with bare hands. Brucellosis material carries a very high bacterial load and is zoonotic."),
        },
        {
          topicId: "t-m4-bq-bruc-ibr",
          type: "mcq",
          q: L("IBR abortion is most commonly seen at which stage of pregnancy?"),
          options: [L("1st month"), L("6th to 8th month"), L("It never causes abortion"), L("Only after calving")],
          answer: 1,
          explain: L("IBR abortion is common between the 6th and 8th month of pregnancy."),
        },
        {
          topicId: "t-m4-rabies-anthrax-thei",
          type: "mcq",
          q: L("What should you do if you find an animal that died suddenly with high fever, breathing trouble and bleeding from body openings?"),
          options: [
            L("Open the carcass yourself to check what happened"),
            L("Never open the carcass — report it immediately, since Anthrax is a possible cause"),
            L("Bury it immediately without telling anyone"),
            L("Ignore it since the animal is already dead"),
          ],
          answer: 1,
          explain: L("These are classic Anthrax warning signs. Never open a suspected Anthrax carcass — report it immediately and let the vet advise on safe handling."),
        },
        {
          topicId: "t-m4-rabies-anthrax-thei",
          type: "truefalse",
          q: L("Once rabies symptoms appear in an animal, death is inevitable, usually within 24–48 hours."),
          answer: true,
          explain: L("Yes — once symptoms of rabies appear, death is inevitable, usually within 24–48 hours, which is why prevention and prompt post-bite care matter so much."),
        },
      ],
    },
  },

  // ==================================================================
  // LESSON 3 — The Vaccination Schedule
  // ==================================================================
  {
    id: "m4-l3",
    title: L("The Vaccination Schedule"),
    estMinutes: 8,
    hook: [
      {
        type: "hero",
        heading: L("Knowing What's Due Is Part of Your Job Too"),
        text: L(
          "You will never give a vaccine injection yourself — but knowing roughly when each one is due means you can remind the farmer, keep track of what's been done, and flag anything overdue to the vet before it becomes a problem."
        ),
      },
    ],
    topics: [
      {
        id: "t-m4-schedule",
        title: L("What's Due, and Roughly When"),
        teach: [
          {
            type: "text",
            heading: L("A Schedule to Know, Not to Perform"),
            html: L(
              "The table below lists the general age and timing pattern for each disease's vaccination, exactly as laid out for cattle and buffaloes. Exact ages and timing can vary by area and by which vaccine is used locally — always confirm the precise schedule for your farm with the veterinarian. Your value here is remembering roughly what's coming up and mentioning it, not administering anything yourself."
            ),
          },
          {
            type: "text",
            heading: L("General Vaccination Timing by Disease"),
            html: L("There are 7 diseases with a routine vaccination schedule shown below."),
          },
          {
            type: "stat-grid",
            items: [
              { label: L("Foot and Mouth Disease (FMD)"), text: L("From 4 months old; booster 1 month later; then every 6 months") },
              { label: L("Haemorrhagic Septicaemia (HS)"), text: L("From 6 months old; annually, before monsoon, in endemic areas") },
              { label: L("Black Quarter (BQ)"), text: L("From 6 months old; annually, before monsoon, in endemic areas") },
              { label: L("Brucellosis (female calves only)"), text: L("4–8 months old; once in a lifetime") },
            ],
          },
          {
            type: "stat-grid",
            items: [
              { label: L("Theileriosis (crossbred/exotic cattle only)"), text: L("From 3 months old; once in a lifetime") },
              { label: L("Anthrax"), text: L("From 4 months old; annually, in endemic areas") },
              { label: L("IBR"), text: L("From 3 months old; booster 1 month later; then every 6 months") },
            ],
          },
          {
            type: "callout",
            style: "info",
            heading: L("What 'Endemic Area' Means"),
            text: L(
              "An endemic area is a place where a particular disease is regularly seen, year after year. Whether your farm's area counts as endemic for a given disease is something the vet or local animal husbandry office would know — it affects how often a vaccine needs to be repeated."
            ),
          },
          {
            type: "callout",
            style: "warning",
            heading: L("Rabies Is Different — It's Given Only After a Bite"),
            text: L(
              "Unlike the diseases above, the rabies vaccination shown for cattle and buffaloes in the source schedule is given only after a suspected bite has already happened — starting immediately, then again on day 4, and on days 7, 14, 28 and optionally 90. It is not a routine yearly shot for cattle the way FMD or HS are. (Pet dogs and cats, by contrast, do get an annual preventive rabies vaccination.)"
            ),
          },
          {
            type: "callout",
            style: "tip",
            heading: L("Your Role With This Schedule"),
            text: L(
              "Keep a simple mental (or written) note of when each animal's vaccines were last given, gently remind the farmer when something looks due, and flag it to the vet if you're ever unsure whether an animal is up to date. That's it — no injections, no dosing decisions."
            ),
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("According to the schedule, when is the Brucellosis vaccine given?"),
            options: [
              L("Every 6 months for the animal's whole life"),
              L("Once in a lifetime, to female calves aged 4–8 months"),
              L("Only after the animal has already aborted"),
              L("To male calves only"),
            ],
            answer: 1,
            explain: L("Brucellosis vaccination is given once in a lifetime, only to female calves, between 4 and 8 months of age."),
          },
          {
            type: "truefalse",
            q: L("The rabies vaccination schedule shown for cattle is a routine annual shot, just like FMD or HS."),
            answer: false,
            explain: L("No — for cattle and buffaloes, the schedule shown is given only after a suspected bite, starting immediately and continuing on specific follow-up days."),
          },
        ],
      },
      {
        id: "t-m4-vaccination-tips",
        title: L("Why Vaccines Sometimes Don't Work"),
        teach: [
          {
            type: "text",
            heading: L("A Vaccine Is Not Automatically a Guarantee"),
            html: L(
              "Giving a vaccine on time is important, but several other things also decide whether it actually protects the animal. Ground-force workers are often the ones best placed to notice when one of these things is going wrong."
            ),
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("Animal should be healthy"),
                text: L("Vaccination works best when the animal is already in good health at the time it's given — not while it's already sick or very weak."),
              },
              {
                label: L("Deworming helps"),
                text: L("Deworming an animal 2–3 weeks before vaccination helps its body respond better to the vaccine."),
              },
              {
                label: L("Pregnancy timing"),
                text: L("Vaccinating animals in advanced pregnancy is usually avoided, even though in most cases nothing goes wrong."),
              },
            ],
          },
          {
            type: "glossary",
            term: L("Cold Chain"),
            meaning: L(
              "Keeping a vaccine at the right cool temperature all the way from where it's made to the moment it's given to the animal. If that cold chain is broken at any point, the vaccine can stop working properly, even though it looks the same."
            ),
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("Broken cold chain"),
                text: L("The single most common reason a vaccine fails to protect an animal — if it wasn't kept cool all the way through, it may simply not work."),
              },
              {
                label: L("Not enough of the herd covered"),
                text: L("Vaccinating only a few animals out of a large group doesn't build enough herd protection, so the disease can still spread through the rest."),
              },
              {
                label: L("Weak, poorly fed animals"),
                text: L("An animal that is undernourished or already weak often doesn't build a strong enough response to the vaccine."),
              },
            ],
          },
          {
            type: "callout",
            style: "tip",
            heading: L("What You Can Actually Do About This"),
            text: L(
              "You're not expected to manage vaccine storage or dosing. But if you ever notice a vaccine being carried around without any ice or cooling, or handled roughly, it's worth mentioning. And when you're reminding a farmer about vaccination, remind them it needs to cover the whole herd or group — not just one or two animals — to actually work."
            ),
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("What is described as one of the most common reasons a vaccine fails to protect an animal?"),
            options: [
              L("The animal was too healthy at the time"),
              L("The cold chain was broken, so the vaccine was not kept cool all the way through"),
              L("The animal was dewormed beforehand"),
              L("Too many animals in the herd were vaccinated"),
            ],
            answer: 1,
            explain: L("A broken cold chain — the vaccine not being kept properly cool from production until it's given — is a leading cause of vaccine failure."),
          },
          {
            type: "truefalse",
            q: L("Deworming an animal a few weeks before vaccination can help it respond better to the vaccine."),
            answer: true,
            explain: L("Yes — deworming 2–3 weeks before vaccination is considered beneficial for a better immune response."),
          },
        ],
      },
    ],
    finalQuiz: {
      passScore: 70,
      questions: [
        {
          topicId: "t-m4-schedule",
          type: "mcq",
          q: L("According to the schedule, how often does FMD vaccination need to be repeated after the booster dose?"),
          options: [L("Once in a lifetime"), L("Every 6 months"), L("Every 5 years"), L("Only after a bite")],
          answer: 1,
          explain: L("FMD vaccination starts at 4 months, gets a booster 1 month later, and then continues every 6 months."),
        },
        {
          topicId: "t-m4-schedule",
          type: "truefalse",
          q: L("Theileriosis vaccination, where used, applies to all cattle equally regardless of breed."),
          answer: false,
          explain: L("No — the Theileriosis vaccine is specifically for crossbred and exotic cattle, given once in a lifetime from 3 months of age."),
        },
        {
          topicId: "t-m4-schedule",
          type: "mcq",
          q: L("What does 'endemic area' mean?"),
          options: [
            L("An area with no animals at all"),
            L("A place where a particular disease is regularly seen, year after year"),
            L("Any area with a veterinary hospital nearby"),
            L("An area that has never had disease"),
          ],
          answer: 1,
          explain: L("An endemic area is one where a disease is regularly present — this affects how often related vaccines need to be repeated."),
        },
        {
          topicId: "t-m4-vaccination-tips",
          type: "mcq",
          q: L("Why is it a problem if only 2 or 3 animals in a large herd are vaccinated against a disease?"),
          options: [
            L("It isn't a problem — a couple of vaccinated animals is always enough"),
            L("Not enough of the herd is protected, so the disease can still spread through the rest"),
            L("The vaccine works better with fewer animals covered"),
            L("It only matters for Brucellosis"),
          ],
          answer: 1,
          explain: L("Vaccinating only a small fraction of a herd doesn't build enough overall protection — at least 80% coverage is needed to actually control spread."),
        },
        {
          topicId: "t-m4-vaccination-tips",
          type: "truefalse",
          q: L("If you notice a vaccine being carried without any ice or cooling, it's worth mentioning even though you don't manage vaccine storage yourself."),
          answer: true,
          explain: L("Yes — noticing and mentioning a broken cold chain is well within your role, even though managing storage and dosing is not."),
        },
      ],
    },
  },
    ],
  },
  {
    id: "m5",
    number: 5,
    title: L("Other Important Diseases"),
    subtitle: L("Other serious diseases to recognise early, even though there's no vaccine to prevent them."),
    icon: "microscope",
    available: true,
    lessons: [
// ==================================================================
  // LESSON 1 — Diseases With No Cure: Test, Isolate, Report
  // ==================================================================
  {
    id: "m5-l1",
    title: L("Diseases With No Cure: Test, Isolate, Report"),
    estMinutes: 9,
    hook: [
      {
        type: "hero",
        heading: L("Some Diseases Have No Vaccine — And No Cure Either"),
        text: L(
          "For a few serious diseases, there is no vaccine to prevent them, and once an animal clearly shows signs, it will not get better on its own. Your job never changes: notice the early signs, and tell the owner or veterinarian right away, so the animal can be tested and kept away from the rest of the healthy herd."
        ),
      },
    ],
    topics: [
      {
        id: "t-m5-jd-tb",
        title: L("Johne's Disease and Bovine Tuberculosis"),
        teach: [
          {
            type: "text",
            heading: L("Two Serious Bacterial Diseases"),
            html: L(
              "Johne's Disease (JD) and Bovine Tuberculosis (bTB) are both <b>bacterial diseases</b> — caused by bacteria, a kind of very small germ — that affect cattle and buffalo. Both develop slowly, over a long time, and both share one very important fact: once an animal is clearly sick, it does not recover. This is exactly why noticing early signs and reporting them matters so much."
            ),
          },
          {
            type: "glossary",
            term: L("Bacterial Disease"),
            meaning: L(
              "A disease caused by bacteria — a kind of very small germ, different from a virus — that can spread from one animal to another."
            ),
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("Johne's Disease — Weight and Dung"),
                text: L(
                  "Long-lasting diarrhoea (loose dung) with heavy economic losses, and loss of weight even though the animal is still eating well — a confusing early sign."
                ),
              },
              {
                label: L("Johne's Disease — Bottle Jaw"),
                text: L(
                  "A swelling called 'bottle jaw' may appear under the jaw. Once clear signs appear, the animal will not recover and will keep getting weaker."
                ),
              },
              {
                label: L("Bovine TB — General Signs"),
                text: L(
                  "Weakness, coughing and weight loss developing over a number of years, along with loss of appetite, extreme thinness, and difficulty breathing."
                ),
              },
              {
                label: L("Bovine TB — Lymph Nodes"),
                text: L(
                  "Enlarged lymph nodes (small, firm lumps under the skin that are part of the body's defence system) and diarrhoea."
                ),
              },
            ],
          },
          {
            type: "callout",
            style: "warning",
            heading: L("Bovine TB Can Spread to People Too"),
            text: L(
              "Bovine Tuberculosis can also spread from cattle to humans. This makes it especially important to report suspected cases quickly, and to follow whatever hygiene steps the owner or veterinarian asks for."
            ),
          },
          {
            type: "callout",
            style: "info",
            heading: L("Why Testing Matters So Much"),
            text: L(
              "For both diseases, animals can spread the infection to others before they show any symptoms at all. This is why regular testing — not just watching for signs — is the only reliable way to catch these diseases early."
            ),
          },
          {
            type: "callout",
            style: "tip",
            heading: L("Your Job: Notice, Report, Support Testing"),
            text: L(
              "Neither disease can be cured. The only way to protect the rest of the herd is to test animals regularly, keep any animal that tests positive away from the healthy ones, and buy new animals only after they have tested negative. You never decide any of this yourself — you notice signs, report them, and support whatever testing and isolation plan the owner or veterinarian sets up."
            ),
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("What happens once clear signs of Johne's Disease appear in an animal?"),
            options: [
              L("It recovers fully with rest"),
              L("It does not recover, and continues to get weaker"),
              L("It gets better after one dose of medicine"),
              L("The signs disappear within a day"),
            ],
            answer: 1,
            explain: L(
              "Once clinical signs of Johne's Disease appear, the animal will not recover and will continue to deteriorate — this is why early reporting and regular testing matter so much."
            ),
          },
          {
            type: "truefalse",
            q: L("Bovine Tuberculosis can spread from cattle to humans."),
            answer: true,
            explain: L(
              "Correct — Bovine TB is transmissible to humans, which is one reason suspected cases should always be reported and tested promptly."
            ),
          },
        ],
      },
      {
        id: "t-m5-mycotoxicosis",
        title: L("Mycotoxicosis: Toxins From Moldy Feed"),
        teach: [
          {
            type: "text",
            heading: L("Where Does This Disease Come From?"),
            html: L(
              "Mycotoxicosis is not spread from one animal to another like a germ. It happens when an animal eats feed (such as groundnut cake or maize) or stored fodder (such as paddy straw) that has become damp and grown mold — a kind of fungus. The mold produces <b>toxins</b> (poisons) that can seriously harm the animal's health and productivity."
            ),
          },
          {
            type: "glossary",
            term: L("Mold / Fungus and Toxin"),
            meaning: L(
              "Mold (a fungus) is a growth that appears on damp feed or fodder, often looking fuzzy or discoloured. It produces toxins — poisons — that, once eaten, can badly affect an animal's health even in small amounts."
            ),
          },
          {
            type: "callout",
            style: "info",
            heading: L("The Hidden Cost"),
            text: L(
              "The economic loss from reduced productivity caused by mycotoxicosis is many times bigger than the loss from any animals that die from it. Milk production may drop by more than 15%, and high-producing animals often show symptoms first."
            ),
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("Appetite and Body Condition"),
                text: L("Gradual loss of appetite and body condition, with diarrhoea that comes and goes."),
              },
              {
                label: L("Skin, Tail and Feet"),
                text: L(
                  "Hair loss, the tail or ear tip dying and sloughing off, and gangrenous (dead, blackened) sores on the foot."
                ),
              },
              {
                label: L("Reproduction and Other Diseases"),
                text: L(
                  "Reduced fertility, abortion, weight loss, and a higher chance of other problems — ketosis, retained placenta, mastitis and metritis — because the animal's natural defences are weakened."
                ),
              },
            ],
          },
          {
            type: "callout",
            style: "tip",
            heading: L("Prevention Starts With the Feed Store"),
            text: L(
              "Never feed dry fodder that is, or has been, damp and clearly moldy, and avoid any feed ingredient with fungus growing on it. Giving enough mineral mixture and green fodder also helps. Consult a veterinarian immediately if you notice any of the signs above."
            ),
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("What causes mycotoxicosis?"),
            options: [
              L("A virus spread between animals"),
              L("Toxins produced by mold growing on damp feed or fodder"),
              L("A reaction to vaccination"),
              L("Biting insects"),
            ],
            answer: 1,
            explain: L(
              "Mycotoxicosis is caused by toxins (poisons) that mold produces when it grows on damp feed or stored fodder."
            ),
          },
          {
            type: "truefalse",
            q: L("Mycotoxicosis only causes real losses when an animal dies from it."),
            answer: false,
            explain: L(
              "No — the economic loss from reduced productivity (including milk drops of more than 15%) is many times bigger than the loss from deaths."
            ),
          },
        ],
      },
    ],
    finalQuiz: {
      passScore: 70,
      questions: [
        {
          topicId: "t-m5-jd-tb",
          type: "mcq",
          q: L("Which of these is true about Johne's Disease and Bovine TB?"),
          options: [
            L("Both can be cured with rest"),
            L("Both have no cure, so testing and isolating infected animals is the only protection"),
            L("Only Johne's Disease is a bacterial disease"),
            L("Vaccines are available to prevent both"),
          ],
          answer: 1,
          explain: L(
            "Neither disease can be cured. Regular testing, isolating or culling positive animals, and buying only tested-negative animals are the only real protections."
          ),
        },
        {
          topicId: "t-m5-jd-tb",
          type: "truefalse",
          q: L("An animal with Johne's Disease can lose weight even while it is still eating well."),
          answer: true,
          explain: L("Yes — loss of weight despite good appetite is one of the confusing early signs of Johne's Disease."),
        },
        {
          topicId: "t-m5-mycotoxicosis",
          type: "mcq",
          q: L("Mycotoxicosis is best prevented by:"),
          options: [
            L("Vaccinating calves early"),
            L("Avoiding damp, moldy feed and fodder"),
            L("Isolating sick animals from the herd"),
            L("Testing animals every month"),
          ],
          answer: 1,
          explain: L("Since mycotoxicosis comes from toxins in moldy feed, avoiding damp and moldy feed or fodder is the main prevention step."),
        },
        {
          topicId: "t-m5-mycotoxicosis",
          type: "truefalse",
          q: L("High-milk-producing animals may show signs of mycotoxicosis first."),
          answer: true,
          explain: L("Correct — high producers may show symptoms of mycotoxicosis before other animals in the herd."),
        },
        {
          topicId: "t-m5-jd-tb",
          type: "mcq",
          q: L("Bovine Tuberculosis is especially serious partly because:"),
          options: [
            L("It heals within a day"),
            L("It cannot spread between animals"),
            L("It can also spread to humans"),
            L("It only ever affects calves"),
          ],
          answer: 2,
          explain: L("Bovine TB is transmissible to humans, which makes prompt reporting and testing especially important."),
        },
      ],
    },
  },

  // ==================================================================
  // LESSON 2 — Fever and Lameness You Can Recognise Early
  // ==================================================================
  {
    id: "m5-l2",
    title: L("Fever and Lameness You Can Recognise Early"),
    estMinutes: 9,
    hook: [
      {
        type: "hero",
        heading: L("Not Every Fever or Limp Needs Panic — But Every One Needs Reporting"),
        text: L(
          "Some conditions clear up on their own with rest, others need quick attention to stop them getting worse. This lesson covers two very different conditions — one that usually passes by itself, and one where fast reporting protects the animal's feet and the whole herd's movement."
        ),
      },
    ],
    topics: [
      {
        id: "t-m5-ephemeral-fever",
        title: L("Ephemeral Fever (Three-Day Sickness)"),
        teach: [
          {
            type: "text",
            heading: L("A Short, Insect-Spread Fever"),
            html: L(
              "Ephemeral fever is a <b>viral disease</b> (caused by a virus, a different kind of tiny germ from bacteria) of cattle and buffalo. It is an insect-transmitted disease — it spreads through biting insects, not through direct contact between animals. As its nickname 'three-day sickness' suggests, it usually lasts about three days."
            ),
          },
          {
            type: "glossary",
            term: L("Morbidity vs Mortality"),
            meaning: L(
              "Morbidity means how many animals in a group actually fall sick. Mortality means how many animals die from it. With ephemeral fever, morbidity can be very high (many animals fall sick), but mortality is very low — only about 1–2 out of every 100."
            ),
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("Fever Pattern"),
                text: L(
                  "Fever that can rise and fall more than once, along with shivering, tears from the eyes, and decreased appetite."
                ),
              },
              {
                label: L("Other Signs"),
                text: L(
                  "Nasal discharge, drooling, laboured (difficult) breathing, a dull/depressed look, stiffness, lameness, and a sudden decrease in milk yield."
                ),
              },
              {
                label: L("Severe Cases"),
                text: L("Some animals may become unable to rise on their own."),
              },
            ],
          },
          {
            type: "callout",
            style: "tip",
            heading: L("Usually Gets Better on Its Own"),
            text: L(
              "Spontaneous recovery — getting better by itself, without treatment — usually happens within a few days. Complete rest is the most effective help you can give. A recovered animal should not be stressed or worked for some days afterward, since it may relapse (fall sick again)."
            ),
          },
          {
            type: "callout",
            style: "info",
            heading: L("Fewer Flies, Fewer Cases"),
            text: L(
              "Because the disease spreads through biting insects, proper fly control helps reduce how often it occurs. Even so, always consult a veterinarian for symptomatic treatment (treatment that eases the signs) when you notice these signs."
            ),
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("How does ephemeral fever mainly spread?"),
            options: [
              L("Direct contact between animals"),
              L("Through biting insects"),
              L("Through contaminated water"),
              L("It does not spread at all"),
            ],
            answer: 1,
            explain: L("Ephemeral fever is an insect-transmitted disease — it spreads through biting insects, not direct contact."),
          },
          {
            type: "truefalse",
            q: L("Ephemeral fever usually clears up on its own within a few days."),
            answer: true,
            explain: L("Yes — spontaneous recovery usually occurs within a few days, with complete rest being the most effective help."),
          },
        ],
      },
      {
        id: "t-m5-foot-rot",
        title: L("Foot Rot"),
        teach: [
          {
            type: "text",
            heading: L("A Bacterial Infection of the Feet"),
            html: L(
              "Foot rot is a bacterial infection of great economic importance for dairy farming. How often it appears changes with the weather, the season, grazing periods, the housing system and the type of flooring. Stony ground, sharp gravel, and grazing on rough stubble (leftover crop stalks) also make it more likely."
            ),
          },
          {
            type: "glossary",
            term: L("Inter-digital Space"),
            meaning: L(
              "The small gap of skin between the two toes (claws) of an animal's hoof. Foot rot often causes swelling right in this space."
            ),
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("Fever and Appetite"),
                text: L("Fever and anorexia (loss of appetite), along with reduced milk yield."),
              },
              {
                label: L("Swelling and Smell"),
                text: L("Swelling of the inter-digital space (between the two toes), with a foul smell from the affected area."),
              },
              {
                label: L("Lameness"),
                text: L(
                  "Severe lameness — the animal may hold the sore leg up in the air to relieve pressure. Hind feet are affected most, and the animal may tend to stand and walk on its toes."
                ),
              },
            ],
          },
          {
            type: "callout",
            style: "tip",
            heading: L("Keep Feet Dry and Clean"),
            text: L(
              "Removing sources of injury and keeping feet dry and clean helps prevent foot rot. Making sure areas around drinking troughs, gateways and tracks are well drained also helps, and a regular preventive footbath is useful."
            ),
          },
          {
            type: "callout",
            style: "warning",
            heading: L("Speed Matters"),
            text: L(
              "If improvement is not seen within three to four days of treatment starting, it may mean the infection has gone deeper into the tissue. Contact a veterinarian immediately when you notice the symptoms above — prompt attention gives the best chance of a full recovery."
            ),
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("Where does foot rot commonly cause swelling?"),
            options: [
              L("The base of the tail"),
              L("The inter-digital space (between the two toes)"),
              L("The ears"),
              L("The eyes"),
            ],
            answer: 1,
            explain: L("Foot rot typically causes swelling of the inter-digital space — the skin between the two toes of the hoof."),
          },
          {
            type: "truefalse",
            q: L("If there is no improvement within three to four days, it may mean a foot rot infection has gone deeper into the tissue."),
            answer: true,
            explain: L("Correct — this is exactly why prompt diagnosis and treatment are stressed for foot rot."),
          },
        ],
      },
    ],
    finalQuiz: {
      passScore: 70,
      questions: [
        {
          topicId: "t-m5-ephemeral-fever",
          type: "mcq",
          q: L("Ephemeral fever is also known as:"),
          options: [L("Foot rot"), L("Three-day sickness"), L("Lumpy Skin Disease"), L("Ringworm")],
          answer: 1,
          explain: L("Ephemeral fever is commonly called 'three-day sickness' because it usually lasts about three days."),
        },
        {
          topicId: "t-m5-ephemeral-fever",
          type: "truefalse",
          q: L("With ephemeral fever, many animals may fall sick (high morbidity), but very few die (low mortality)."),
          answer: true,
          explain: L("Correct — morbidity may be very high, but mortality is very low, at about 1–2%."),
        },
        {
          topicId: "t-m5-foot-rot",
          type: "mcq",
          q: L("Which of these increases the chance of foot rot?"),
          options: [
            L("Soft, dry, well-drained ground"),
            L("Stony ground, sharp gravel and grazing on rough stubble"),
            L("Regular footbaths"),
            L("Clean, well-drained drinking troughs"),
          ],
          answer: 1,
          explain: L("Stony ground, sharp gravel and coarse stubble all predispose animals to foot rot."),
        },
        {
          topicId: "t-m5-foot-rot",
          type: "truefalse",
          q: L("Foot rot mostly affects the front feet."),
          answer: false,
          explain: L("No — hind feet are affected most by foot rot."),
        },
        {
          topicId: "t-m5-ephemeral-fever",
          type: "mcq",
          q: L("What is the most effective help you can give an animal recovering from ephemeral fever?"),
          options: [
            L("Extra exercise to keep it active"),
            L("Complete rest, without working it for some days afterward"),
            L("Moving it to a new herd immediately"),
            L("Ignoring it since it is never serious"),
          ],
          answer: 1,
          explain: L("Complete rest is the most effective treatment, and the animal should not be stressed or worked for some days afterward to avoid relapse."),
        },
      ],
    },
  },

  // ==================================================================
  // LESSON 3 — Skin Diseases to Recognise
  // ==================================================================
  {
    id: "m5-l3",
    title: L("Skin Diseases to Recognise"),
    estMinutes: 9,
    hook: [
      {
        type: "hero",
        heading: L("Skin Problems That Are Easy to See — If You Know What to Look For"),
        text: L(
          "Several diseases show up mainly as crusts, scabs or lumps on the skin. Some clear up on their own, some need care to stop them affecting more of the herd, and one — Lumpy Skin Disease — needs urgent reporting. This lesson teaches you the visible signs of each."
        ),
      },
    ],
    topics: [
      {
        id: "t-m5-fungal-bacterial-skin",
        title: L("Dermatophytosis and Dermatophilosis"),
        teach: [
          {
            type: "text",
            heading: L("Two Different Germs, Similar Skin Problems"),
            html: L(
              "Dermatophytosis is a fungal disease of keratin tissue (skin and hair), caused by a group of fungi called dermatophytes. Dermatophilosis is a different disease, caused by a type of bacteria called Dermatophilus congolensis. Both spread mainly through direct contact, and both may be transmitted to humans, so care in handling affected animals matters."
            ),
          },
          {
            type: "glossary",
            term: L("Fungal Disease vs Bacterial Disease"),
            meaning: L(
              "A fungal disease is caused by a fungus (a growth, like the mold behind mycotoxicosis, but here growing directly on the skin and hair). A bacterial disease is caused by bacteria, a different and even smaller kind of germ. Dermatophytosis is fungal; dermatophilosis is bacterial — but both mainly affect the skin."
            ),
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("Dermatophytosis — Appearance"),
                text: L(
                  "Circular, slightly raised, grey-white patches on the skin called crusts. The size of these patches varies a lot and can become quite extensive."
                ),
              },
              {
                label: L("Dermatophytosis — Impact"),
                text: L(
                  "Lesions are unsightly but economic losses are minimal. They may cause discomfort or lead to a secondary bacterial infection."
                ),
              },
              {
                label: L("Dermatophilosis — Stages"),
                text: L(
                  "Signs appear in stages: hairs matted together like a paint-brush, then crust or scab formation as patches join up, and finally wart-like lesions."
                ),
              },
              {
                label: L("Dermatophilosis — Risk"),
                text: L(
                  "Spreads through direct contact or biting insects. Prolonged wetting by rain, high humidity and heat, and biting parasites make it more likely. Deaths can occur, especially in calves, with extensive lesions."
                ),
              },
            ],
          },
          {
            type: "callout",
            style: "tip",
            heading: L("Both Usually Improve With Time and Care"),
            text: L(
              "Dermatophytosis usually recovers without treatment, though this can take many months. Most animals with dermatophilosis recover on their own within about 3 weeks, and dry weather speeds up healing. Cleaning and disinfecting premises, reducing crowding between animals, and more sunlight all help. For dermatophytosis, crusts should be removed by scraping or brushing before any medicine is applied, since medicine cannot penetrate the crust — the removed crusts should then be collected and burned. Always consult a veterinarian for proper treatment."
            ),
          },
          {
            type: "callout",
            style: "warning",
            heading: L("Wash Your Hands"),
            text: L(
              "Because both diseases can spread to people, always wash your hands with an antibacterial soap after handling an infected animal."
            ),
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("What is Dermatophytosis caused by?"),
            options: [
              L("A group of fungi called dermatophytes"),
              L("A virus spread by ticks"),
              L("A vitamin deficiency"),
              L("Moldy feed"),
            ],
            answer: 0,
            explain: L("Dermatophytosis is a fungal disease caused by a group of fungi called dermatophytes."),
          },
          {
            type: "truefalse",
            q: L("Both dermatophytosis and dermatophilosis can spread from animals to the people handling them."),
            answer: true,
            explain: L("Correct — both are noted as being transmissible to humans, which is why hand-washing after handling affected animals matters."),
          },
        ],
      },
      {
        id: "t-m5-lumpy-skin-disease",
        title: L("Lumpy Skin Disease"),
        teach: [
            {
              type: "photo",
              src: "assets/photo-m5-lumpy-skin-disease.jpg",
              alt: L("A calf standing calmly with visible raised, hairless skin nodules from Lumpy Skin Disease across its neck and shoulder"),
              caption: L("The raised skin nodules of Lumpy Skin Disease — the visible sign this lesson teaches you to notice and report."),
            },
          {
            type: "text",
            heading: L("A Viral Disease Spread by Insects and Ticks"),
            html: L(
              "Lumpy Skin Disease is a viral disease caused by a pox virus, and is an emerging disease in India — meaning it is a relatively new and growing problem here. It spreads through biting insects and ticks; direct contact between animals does not play a major role in spreading it."
            ),
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("Fever and Milk"),
                text: L("Fever, along with a marked (clearly noticeable) reduction in milk production."),
              },
              {
                label: L("Face and Glands"),
                text: L(
                  "Enlarged superficial lymph nodes, along with rhinitis (nose inflammation), conjunctivitis (eye inflammation) and excessive salivation."
                ),
              },
              {
                label: L("Skin Nodules"),
                text: L(
                  "Firm, round, raised lumps (nodules) 2–5 cm across appear all over the body within 48 hours of the fever starting, involving the skin, the tissue underneath, and sometimes even the muscle below that."
                ),
              },
            ],
          },
          {
            type: "glossary",
            term: L("Nodule"),
            meaning: L(
              "A firm, raised lump under the skin. In Lumpy Skin Disease, these nodules are one of the clearest, most recognisable signs — a healthy animal's skin should be smooth, without round lumps like these."
            ),
          },
          {
            type: "text",
            heading: L("What Happens to the Nodules"),
            html: L(
              "Large nodules can become necrotic (the tissue in them dies) and eventually turn fibrotic (hardened, scar-like), and can persist for several months. Smaller nodules may resolve (go away) on their own without lasting problems. Sores can also appear inside the mouth, throat and airway."
            ),
          },
          {
            type: "callout",
            style: "warning",
            heading: L("Serious Effects Beyond the Skin"),
            text: L(
              "Pregnant cows may abort, and may not come back into heat (be ready to breed again) for several months. Bulls may become temporarily or even permanently infertile. This makes reporting suspected cases urgent — not just for the sick animal, but for the whole herd's breeding plans."
            ),
          },
          {
            type: "callout",
            style: "tip",
            heading: L("Control the Biting Insects, Call the Vet Fast"),
            text: L(
              "Since it spreads mainly through biting insects and ticks, proper control of ticks and biting insects helps prevent Lumpy Skin Disease. If you notice fever, swollen lymph nodes or skin nodules, consult a veterinarian immediately."
            ),
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("How does Lumpy Skin Disease mainly spread?"),
            options: [
              L("Direct contact between animals"),
              L("Biting insects and ticks"),
              L("Contaminated feed"),
              L("It does not spread between animals"),
            ],
            answer: 1,
            explain: L("Lumpy Skin Disease spreads through biting insects and ticks; direct contact does not play a major role."),
          },
          {
            type: "truefalse",
            q: L("Lumpy Skin Disease can cause pregnant cows to abort and bulls to become infertile."),
            answer: true,
            explain: L("Correct — these are noted effects of the disease beyond the visible skin nodules."),
          },
        ],
      },
    ],
    finalQuiz: {
      passScore: 70,
      questions: [
        {
          topicId: "t-m5-fungal-bacterial-skin",
          type: "mcq",
          q: L("What do the crusts of dermatophytosis typically look like?"),
          options: [
            L("Deep open wounds"),
            L("Circular, slightly raised, grey-white patches on the skin"),
            L("Bright red rashes only on the legs"),
            L("Solid lumps deep under the skin"),
          ],
          answer: 1,
          explain: L("Dermatophytosis appears as circular, slightly raised, grey-white crusts on the skin."),
        },
        {
          topicId: "t-m5-fungal-bacterial-skin",
          type: "truefalse",
          q: L("Dermatophilosis lesions can appear in stages, starting with hairs matted together like a paint-brush."),
          answer: true,
          explain: L("Correct — dermatophilosis lesions progress through stages, the first being hairs matted like a paint-brush."),
        },
        {
          topicId: "t-m5-lumpy-skin-disease",
          type: "mcq",
          q: L("How soon after fever starts do skin nodules typically appear in Lumpy Skin Disease?"),
          options: [
            L("Within 48 hours"),
            L("After about 6 months"),
            L("They never appear on the skin"),
            L("Only after the animal fully recovers"),
          ],
          answer: 0,
          explain: L("Cutaneous nodules typically appear all over the body within 48 hours of the fever starting."),
        },
        {
          topicId: "t-m5-lumpy-skin-disease",
          type: "truefalse",
          q: L("Direct contact between animals is the main way Lumpy Skin Disease spreads."),
          answer: false,
          explain: L("No — it spreads mainly through biting insects and ticks; direct contact does not play a major role."),
        },
        {
          topicId: "t-m5-fungal-bacterial-skin",
          type: "mcq",
          q: L("Why should you wash your hands after handling an animal with dermatophytosis or dermatophilosis?"),
          options: [
            L("To remove mud only"),
            L("Because both diseases can spread to humans"),
            L("It is not necessary"),
            L("Only to keep your hands cool"),
          ],
          answer: 1,
          explain: L("Both dermatophytosis and dermatophilosis can be transmitted to humans, so hand-washing after handling affected animals is important."),
        },
      ],
    },
  },
    ],
  },
  {
    id: "m6",
    number: 6,
    title: L("Tick, Fly & Worm-Borne Diseases and Their Control"),
    subtitle: L("How ticks, flies and worms spread disease, and simple ways to keep them under control."),
    icon: "bug",
    available: true,
    lessons: [
// ==================================================================
  // LESSON 1 — Tick-Borne Diseases: Anaplasmosis and Babesiosis
  // ==================================================================
  {
    id: "m6-l1",
    title: L("Tick-Borne Diseases: Anaplasmosis and Babesiosis"),
    estMinutes: 8,
    hook: [
      {
        type: "hero",
        heading: L("A Tiny Bite Can Cause a Big Problem"),
        text: L(
          "Ticks don't just annoy an animal and drink its blood — some of them also inject tiny germs into the blood while feeding. Two of the most important tick-spread blood diseases are Anaplasmosis and Babesiosis. Both are curable if caught early — which is exactly why noticing the signs quickly matters so much."
        ),
      },
    ],
    topics: [
      {
        id: "t-m6-anaplasmosis",
        title: L("Anaplasmosis: Signs and Spread"),
        teach: [
            {
              type: "photo",
              src: "assets/illustration-m6-tick-disease-cycle.png",
              alt: L("Illustrated four-step cycle diagram showing how a tick picks up germs from a sick animal, bites a healthy cow, and spreads the disease."),
              caption: L("Illustration: how ticks spread disease from a sick animal to a healthy one."),
            },
            {
              type: "photo",
              src: "assets/photo-m6-tick-specimen.jpg",
              alt: L("Close-up photograph of two cattle ticks, female (left, engorged reddish-brown) and male (right, smaller and darker), on a plain background"),
              caption: L("A cattle tick (Rhipicephalus microplus) — a bite from a tick like this is how the germs behind Anaplasmosis and Babesiosis get into an animal's blood."),
            },
          {
            type: "text",
            heading: L("What Anaplasmosis Is"),
            html: L(
              "Anaplasmosis is caused by a very small germ called <b>rickettsia</b> — a type of germ even smaller than ordinary bacteria, which lives and multiplies inside the animal's own blood cells. It spreads mainly through tick bites, but it can also spread through blood-contaminated needles or gloves used during artificial insemination (AI) if they are reused on different animals without being properly cleaned."
            ),
          },
          {
            type: "glossary",
            term: L("Rickettsia"),
            meaning: L(
              "A very small type of germ, smaller than ordinary bacteria, that lives and multiplies inside an animal's blood cells. It is what causes Anaplasmosis."
            ),
          },
          {
            type: "glossary",
            term: L("Carrier Animal"),
            meaning: L(
              "An animal that has been infected in the past and still quietly carries the germ inside it, even without looking sick. In areas where a disease is common, carrier animals act as a hidden source that can pass the infection on to others through ticks. Even an animal that recovered can sometimes fall sick again later in life."
            ),
          },
          {
            type: "text",
            heading: L("Who Is More at Risk"),
            html: L(
              "Calves are naturally more resistant to Anaplasmosis than older cattle — meaning grown animals are more likely to get seriously sick from it than young calves. An animal that was infected as a calf can become a quiet carrier and may relapse (fall sick again) once it is an adult."
            ),
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("Early signs"),
                text: L("Fever, a fall in milk production, progressively worsening anaemia (thin, watery blood), yellowing of the body (jaundice), and abortion in pregnant animals."),
              },
              {
                label: L("Later signs (more serious)"),
                text: L(
                  "Going off feed (inappetence), unsteady or uncoordinated movement, breathlessness after any exertion, and a fast, pounding pulse. In later stages, the animal may die."
                ),
              },
            ],
          },
          {
            type: "callout",
            style: "tip",
            heading: L("Curable — If You Report It Early"),
            text: L(
              "Anaplasmosis is curable if treated promptly in its early stages. This is exactly why your job matters: the sooner fever, falling milk, weakness or yellowing skin is reported, the sooner treatment can start, and the better the animal's chances."
            ),
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("What is rickettsia, the germ that causes Anaplasmosis?"),
            options: [
              L("A type of worm found in the gut"),
              L("A very small germ, smaller than ordinary bacteria, that lives inside blood cells"),
              L("A chemical used to spray sheds"),
              L("A kind of tick"),
            ],
            answer: 1,
            explain: L("Rickettsia is a very small type of germ that lives and multiplies inside the animal's own blood cells."),
          },
          {
            type: "truefalse",
            q: L("Anaplasmosis can only spread through tick bites, never any other way."),
            answer: false,
            explain: L(
              "It mainly spreads through ticks, but it can also spread through blood-contaminated needles or AI gloves reused between animals without cleaning."
            ),
          },
        ],
      },
      {
        id: "t-m6-babesiosis",
        title: L("Babesiosis: Signs and Watching the Urine"),
        teach: [
          {
            type: "text",
            heading: L("What Babesiosis Is"),
            html: L(
              "Babesiosis is caused by a different kind of tiny microbe called a <b>protozoa</b> — a single-celled living thing, different from the rickettsia germ behind Anaplasmosis. Like Anaplasmosis, it spreads through tick bites and attacks the blood."
            ),
          },
          {
            type: "glossary",
            term: L("Protozoa"),
            meaning: L("A type of very small, single-celled microbe — different from bacteria — that can live inside an animal's body and cause disease."),
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("Common signs"),
                text: L(
                  "Fever, going off feed, faster breathing, a sharp drop in milk production, muscle tremors (shaking), anaemia, jaundice (yellowing), abortion, and either constipation or diarrhoea."
                ),
              },
              {
                label: L("Later, more serious signs"),
                text: L("Weight loss along with dark red or brown urine (blood showing up in the urine), and sometimes nervous symptoms."),
              },
            ],
          },
          {
            type: "callout",
            style: "warning",
            heading: L("Watch the Colour of the Urine After Treatment"),
            text: L(
              "After treatment starts, the urine should gradually return to its normal colour within about 24 hours. If it does not, that is worth reporting — it usually means treatment needs to be repeated. This is something you can watch for and tell the vet or owner about, even though deciding on the treatment itself is always their job."
            ),
          },
          {
            type: "callout",
            style: "tip",
            heading: L("Curable If Treated Promptly"),
            text: L("Like Anaplasmosis, Babesiosis is curable if treated promptly — early reporting gives the animal the best chance."),
          },
          {
            type: "callout",
            style: "info",
            heading: L("Not the Same as 'Red Water Disease'"),
            text: L(
              "Babesiosis should not be confused with 'Red Water Disease' — a different, highly fatal disease caused by bacteria, seen especially in areas where liver fluke (a type of worm) is also present. Both can cause dark or red-looking urine, but they are not the same disease, and this is a distinction the vet will make, not something you need to diagnose yourself."
            ),
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("What causes Babesiosis?"),
            options: [
              L("A type of worm"),
              L("A protozoa — a tiny, single-celled microbe"),
              L("A vitamin deficiency"),
              L("Old age"),
            ],
            answer: 1,
            explain: L("Babesiosis is caused by a protozoa, a type of single-celled microbe, different from the rickettsia germ that causes Anaplasmosis."),
          },
          {
            type: "truefalse",
            q: L(
              "If an animal's urine has not returned to a normal colour about 24 hours after Babesiosis treatment starts, that is worth reporting."
            ),
            answer: true,
            explain: L("Yes — the urine should return to normal colour by about 24 hours after treatment; if it hasn't, treatment usually needs to be repeated."),
          },
        ],
      },
    ],
    finalQuiz: {
      passScore: 70,
      questions: [
        {
          topicId: "t-m6-anaplasmosis",
          type: "mcq",
          q: L("Besides tick bites, how else can Anaplasmosis spread?"),
          options: [
            L("Through the air"),
            L("Through blood-contaminated needles or AI gloves reused without cleaning"),
            L("Through drinking water only"),
            L("It cannot spread any other way"),
          ],
          answer: 1,
          explain: L("Anaplasmosis can also spread through blood-contaminated needles or AI gloves used on more than one animal without cleaning."),
        },
        {
          topicId: "t-m6-anaplasmosis",
          type: "truefalse",
          q: L("Calves are generally more resistant to Anaplasmosis than older cattle."),
          answer: true,
          explain: L("Correct — calves are naturally more resistant, while older cattle are more likely to become seriously ill."),
        },
        {
          topicId: "t-m6-babesiosis",
          type: "mcq",
          q: L("Which of these is a sign of Babesiosis?"),
          options: [
            L("A sharp drop in milk production along with fever and muscle tremors"),
            L("Faster hoof growth"),
            L("Improved appetite"),
            L("A shinier coat than usual"),
          ],
          answer: 0,
          explain: L("Babesiosis commonly causes fever, going off feed, a sharp drop in milk, muscle tremors, anaemia, jaundice and more."),
        },
        {
          topicId: "t-m6-babesiosis",
          type: "truefalse",
          q: L("Babesiosis and 'Red Water Disease' are exactly the same disease."),
          answer: false,
          explain: L("No — they are different diseases, even though both can cause reddish urine. Red Water Disease is a separate, highly fatal bacterial disease."),
        },
        {
          topicId: "t-m6-anaplasmosis",
          type: "mcq",
          q: L("Why does it matter that Anaplasmosis is 'curable if treated promptly'?"),
          options: [
            L("It means you don't need to report it at all"),
            L("It means early reporting of signs gives the animal the best chance of recovery"),
            L("It means the animal will recover on its own without help"),
            L("It only matters for calves"),
          ],
          answer: 1,
          explain: L("Because the disease responds well to early treatment, noticing and reporting signs quickly directly improves the animal's chances."),
        },
      ],
    },
  },

  // ==================================================================
  // LESSON 2 — Surra and How to Control Ticks and Flies
  // ==================================================================
  {
    id: "m6-l2",
    title: L("Surra and How to Control Ticks and Flies"),
    estMinutes: 8,
    hook: [
      {
        type: "hero",
        heading: L("It's Not Just Ticks — Flies Spread Disease Too"),
        text: L(
          "Biting flies can carry disease from one animal to another just by feeding on blood, the same way ticks do. This lesson covers Surra, a serious fly-spread disease, and then the everyday control steps that keep both ticks and flies from building up on your farm in the first place."
        ),
      },
    ],
    topics: [
      {
        id: "t-m6-surra",
        title: L("Surra: A Disease Spread by Biting Flies"),
        teach: [
            {
              type: "photo",
              src: "assets/photo-m6-horn-flies.jpg",
              alt: L("Close-up of a cow's back and shoulder coat covered with many small horn flies"),
              caption: L("Horn flies on a cow's coat — one of the biting flies named in this lesson as a carrier of Surra."),
            },
          {
            type: "text",
            heading: L("What Surra Is"),
            html: L(
              "Surra (its proper name is <b>Trypanosomiasis</b>) is caused by a protozoa — the same broad type of tiny microbe as in Babesiosis. But instead of ticks, it is spread by biting flies such as Tabanus, Stomoxys and Haematobia. The fly simply carries infected blood on its mouthparts from one animal to the next while feeding — it doesn't need to multiply inside the fly first."
            ),
          },
          {
            type: "text",
            heading: L("Who Can Get It"),
            html: L(
              "Both cattle and buffalo can get Surra, and they can also act as a hidden reservoir (a quiet source of infection) for horses and camels. The infection can spread through blood from an infected animal, and occasionally even through meat or milk. Animals that are already under stress are more likely to fall sick from it."
            ),
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("Common signs"),
                text: L("Progressive anaemia, weight loss and weakness. In buffaloes, abortion, infertility and stillbirth may also occur."),
              },
              {
                label: L("Body swelling"),
                text: L("Puffy, fluid-filled swelling on the lower parts of the body — legs, brisket (chest area) and belly. Lymph nodes may also be swollen."),
              },
              {
                label: L("Nervous signs"),
                text: L("Head tilting, walking in circles, blindness, unusual excitability, and an odd paddling movement of the legs."),
              },
            ],
          },
          {
            type: "callout",
            style: "warning",
            heading: L("The Course Can Be Long and Unpredictable"),
            text: L(
              "In cattle, Surra can drag on for as long as 2 years with high mortality. In other cases, death can happen anywhere between 2 weeks and 2 months. Because the timeline is so unpredictable, don't wait to see how things develop — report any of these signs as soon as you notice them."
            ),
          },
          {
            type: "callout",
            style: "tip",
            heading: L("Call the Vet Immediately"),
            text: L("Timely, early treatment gives a high cure rate for Surra. The moment you notice the signs above, this is one to report the same day, not later."),
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("How do biting flies spread Surra?"),
            options: [
              L("By laying eggs on the animal's skin"),
              L("By carrying infected blood on their mouthparts from one animal to another while feeding"),
              L("Through the animal's feed only"),
              L("Surra cannot spread through flies"),
            ],
            answer: 1,
            explain: L("Biting flies carry infected blood on their mouthparts and pass it on while feeding on the next animal — no tick is needed."),
          },
          {
            type: "truefalse",
            q: L("Because Surra's course can be so unpredictable, signs should be reported the same day they are noticed."),
            answer: true,
            explain: L("Yes — death can happen anywhere from 2 weeks to 2 months, or the disease can drag on for up to 2 years, so prompt reporting matters."),
          },
        ],
      },
      {
        id: "t-m6-tick-fly-control",
        title: L("Controlling Ticks and Flies"),
        teach: [
            {
              type: "photo",
              src: "assets/photo-m6-pour-on-acaricide.jpg",
              alt: L("A person's hand pouring a liquid acaricide from a bottle along the backline of a cow"),
              caption: L("Applying an acaricide along an animal's backline — one practical way ticks are kept under control."),
            },
          {
            type: "text",
            heading: L("Why Bother Controlling Them"),
            html: L(
              "Ticks and biting flies don't just spread disease — heavy infestations on their own cause anaemia, real productivity loss, severe discomfort, and can even trigger allergic reactions at the biting sites. They also multiply fast: each adult tick can lay around 3000 eggs, and the young ticks (larvae) can survive for 2 to 7 months without feeding, depending on the climate. Left unchecked, a small problem becomes a large one quickly."
            ),
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("New animals"),
                text: L("Any newly purchased animal should be completely de-ticked before it is allowed to mix with the rest of the herd."),
              },
              {
                label: L("Spraying the animal and the shed"),
                text: L(
                  "Ticks are controlled with periodic spraying of an acaricide (a tick-killing chemical) on the animal's body — and cracks and crevices in the shed also need a higher-strength spray, since that's where eggs and larvae hide. This spraying, and the exact chemical and strength used, should be done under a veterinarian's advice."
                ),
              },
              {
                label: L("Avoiding resistance"),
                text: L(
                  "Using the exact same acaricide again and again lets ticks build up resistance to it over time, so the type used should be changed from time to time — this decision is best left to the vet."
                ),
              },
            ],
          },
          {
            type: "text",
            heading: L("Keeping Flies Down"),
            html: L(
              "Fly control leans much more on everyday shed hygiene, which is something ground staff can act on directly: dispose of manure and urine regularly, at a reasonable distance from the shed, and make sure water never stagnates anywhere nearby — both are places flies breed. Smoking the shed with raw leaves (neem leaves work well) in the evenings also helps reduce flies."
            ),
          },
          {
            type: "callout",
            style: "tip",
            heading: L("Natural Repellants Are Safe to Recommend"),
            text: L(
              "Natural repellents such as neem oil can be applied regularly to help keep both ticks and flies away. They don't carry the harmful effects of stronger chemicals, and there's little risk of resistance building up. When applying, go against the direction of the hair and cover the whole body, especially the underbelly and legs, where flies bite most."
            ),
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("Why is it important to spray cracks and crevices in the shed, not just the animal's body?"),
            options: [
              L("It makes the shed smell better"),
              L("Tick eggs and larvae hide there, and larvae can survive for months without feeding"),
              L("It has nothing to do with tick control"),
              L("It is only done for decoration"),
            ],
            answer: 1,
            explain: L("Tick larvae can survive 2 to 7 months without feeding, often hiding in shed cracks and crevices — spraying there helps prevent re-infestation."),
          },
          {
            type: "truefalse",
            q: L("Regular manure and urine disposal, away from the shed, is a direct everyday action that helps control flies."),
            answer: true,
            explain: L("Yes — proper, regular disposal of manure and urine, along with avoiding stagnant water, is basic shed hygiene that reduces fly breeding."),
          },
        ],
      },
    ],
    finalQuiz: {
      passScore: 70,
      questions: [
        {
          topicId: "t-m6-surra",
          type: "mcq",
          q: L("Which animals can act as a hidden source of Surra infection for horses and camels?"),
          options: [L("Dogs and cats"), L("Cattle and buffalo"), L("Goats and sheep"), L("Poultry")],
          answer: 1,
          explain: L("Cattle and buffalo can be reservoir hosts, carrying and passing on Surra infection to horses and camels."),
        },
        {
          topicId: "t-m6-surra",
          type: "truefalse",
          q: L("Animals under stress are less likely to fall sick with Surra."),
          answer: false,
          explain: L("The opposite is true — animals under stress are MORE susceptible to Surra."),
        },
        {
          topicId: "t-m6-tick-fly-control",
          type: "mcq",
          q: L("What should happen to any newly purchased animal before it mixes with the rest of the herd?"),
          options: [
            L("Nothing special is needed"),
            L("It should be completely de-ticked first"),
            L("It should be given extra milk"),
            L("It should be kept away from water"),
          ],
          answer: 1,
          explain: L("New animals should be completely de-ticked before being allowed to mix with the rest of the herd, to avoid introducing ticks."),
        },
        {
          topicId: "t-m6-tick-fly-control",
          type: "truefalse",
          q: L("Deciding the exact acaricide chemical and its strength is something ground staff should do on their own."),
          answer: false,
          explain: L("No — the acaricide type, strength and how often the chemical group is changed should be decided under a veterinarian's advice."),
        },
        {
          topicId: "t-m6-surra",
          type: "mcq",
          q: L("Which of these is a nervous sign that can appear with Surra?"),
          options: [L("Shiny coat"), L("Head tilting and walking in circles"), L("Increased milk yield"), L("Faster hoof growth")],
          answer: 1,
          explain: L("Surra can cause nervous signs including head tilt, circling, blindness, hyper-excitability and paddling leg movements."),
        },
      ],
    },
  },

  // ==================================================================
  // LESSON 3 — Worms: Signs and Control
  // ==================================================================
  {
    id: "m6-l3",
    title: L("Worms: Signs and Control"),
    estMinutes: 8,
    hook: [
      {
        type: "hero",
        heading: L("The Enemy You Usually Can't See"),
        text: L(
          "Unlike ticks and flies, worms live quietly inside the animal, and you often can't see them at all. But they drain the animal of nutrients and blood, and can slow growth, cut milk yield and weaken the whole herd. This lesson covers how to notice worm trouble, and the everyday habits that keep the worm load down."
        ),
      },
    ],
    topics: [
      {
        id: "t-m6-worm-signs",
        title: L("Recognizing Worm Infestation"),
        teach: [
          {
            type: "text",
            heading: L("What Worms Are and How They Spread"),
            html: L(
              "Worms are parasites (creatures that live off another living body) that usually live inside the digestive tract (the gut), feeding on the animal's tissue fluids or blood. Some kinds are also found in the lungs, the nasal passage, or even the eyes. Worm eggs pass out through the dung and can contaminate pasture, feed or water — spreading the infestation to other animals. Some worms can even cause disease in people."
            ),
          },
          {
            type: "glossary",
            term: L("Parasite"),
            meaning: L("A creature that lives on or inside another living body (its host) and survives by feeding off it, often causing harm in the process."),
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("Roundworms and tapeworms"),
                text: L("Found in the digestive tract (the gut)."),
              },
              {
                label: L("Flukes"),
                text: L("Found in the rumen (the main stomach part) and the liver."),
              },
              {
                label: L("Schistosomes"),
                text: L("Found inside the animal's blood vessels."),
              },
            ],
          },
          {
            type: "text",
            heading: L("General Signs of Worm Trouble"),
            html: L(
              "In general, worm infestation can cause diarrhoea, delayed age at maturity (the animal takes longer to grow up), a drop in growth rate and milk production, lower breeding and work performance, lower resistance to other diseases, and anaemia."
            ),
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("Bottle-jaw"),
                text: L("A soft swelling under the jaw, along with severe, foul-smelling diarrhoea — seen with rumen and liver fluke infestation. Jaundice (yellowing) can also appear with liver fluke."),
              },
              {
                label: L("Pot-belly"),
                text: L("A swollen, pot-bellied look, with small white segments moving in the dung — a sign of tapeworm. A heavy tapeworm burden can also block the gut because of its length."),
              },
              {
                label: L("Severe anaemia and bloody diarrhoea"),
                text: L("Seen with hookworm (a blood-sucking type of roundworm) and schistosome infestation."),
              },
              {
                label: L("Nose and lung signs"),
                text: L("Thick nasal discharge, snoring and shortness of breath can point to nasal schistosomes; a cough can point to lungworm."),
              },
            ],
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("What is 'bottle-jaw' a sign of?"),
            options: [L("Tapeworm"), L("Rumen and liver fluke infestation"), L("A healthy, well-fed animal"), L("Lungworm")],
            answer: 1,
            explain: L("Bottle-jaw (soft swelling under the jaw) along with severe, foul-smelling diarrhoea is seen with rumen and liver fluke infestation."),
          },
          {
            type: "truefalse",
            q: L("Small white segments seen moving in an animal's dung, along with a pot-bellied look, can be a sign of tapeworm."),
            answer: true,
            explain: L("Correct — a pot-belly appearance with visible moving white segments in the dung points to tapeworm infestation."),
          },
        ],
      },
      {
        id: "t-m6-worm-control",
        title: L("Keeping Worms Under Control"),
        teach: [
          {
            type: "text",
            heading: L("Why a Regular Schedule Matters"),
            html: L(
              "Because worm eggs spread through dung onto pasture, feed and water, keeping the whole herd on a regular deworming (worm-treatment) schedule — and keeping the surroundings clean — helps break that cycle. Knowing the usual schedule helps you notice if an animal seems to have been missed."
            ),
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("Calves"),
                text: L("First dewormer dose is usually given between 7 and 10 days of age, then repeated monthly until the calf is 6 months old."),
              },
              {
                label: L("Animals over 6 months"),
                text: L("Usually dewormed twice a year — once at the start of the rainy season and once at the end."),
              },
              {
                label: L("Pregnant animals"),
                text: L("Usually dewormed twice: once close to calving time, and again about 6 to 7 weeks after calving."),
              },
            ],
          },
          {
            type: "callout",
            style: "info",
            heading: L("Watch for Standing Water and Snails"),
            text: L(
              "In water-logged areas or wherever snails are present, flukes and schistosomes are more likely, since snails are needed to complete their life cycle. Noticing standing water or snails near the shed or pasture, and mentioning it, helps the vet judge the risk."
            ),
          },
          {
            type: "callout",
            style: "tip",
            heading: L("Notice and Recommend — Not Diagnose and Dose"),
            text: L(
              "The exact drug, its dosage, and how often the drug type is rotated (to avoid the worms becoming resistant to it) are decisions for a qualified person, not something to work out yourself. Your part is to notice the signs, know roughly when animals are due for deworming, and flag it if an animal isn't improving — if that happens, recommend that its dung be examined by a veterinarian to identify exactly which worm is involved, so the right treatment can be chosen."
            ),
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("When is a calf's first dewormer dose usually given?"),
            options: [L("At birth"), L("Between 7 and 10 days of age"), L("Only after 6 months of age"), L("Only if it looks sick"),
            ],
            answer: 1,
            explain: L("The first dose is usually given between 7 and 10 days of age, then repeated monthly until the calf is 6 months old."),
          },
          {
            type: "truefalse",
            q: L("Choosing the exact deworming drug and its dosage is something ground staff should decide on their own."),
            answer: false,
            explain: L("No — that decision, including rotating the drug type to avoid resistance, belongs to a qualified person such as a veterinarian."),
          },
        ],
      },
    ],
    finalQuiz: {
      passScore: 70,
      questions: [
        {
          topicId: "t-m6-worm-signs",
          type: "mcq",
          q: L("Where are schistosomes (a type of worm) usually found in the animal's body?"),
          options: [L("Inside the blood vessels"), L("Only in the eyes"), L("Only on the skin"), L("Only in the udder")],
          answer: 0,
          explain: L("Schistosomes live inside the animal's blood vessels, unlike roundworms and tapeworms which live in the gut."),
        },
        {
          topicId: "t-m6-worm-signs",
          type: "truefalse",
          q: L("Worm eggs can pass out in the dung and contaminate pasture, feed or water, spreading the infestation to other animals."),
          answer: true,
          explain: L("Correct — this is exactly how worm infestations spread from one animal to the rest of the herd, and even between farms."),
        },
        {
          topicId: "t-m6-worm-control",
          type: "mcq",
          q: L("How often are animals over 6 months old usually dewormed?"),
          options: [
            L("Once a month, all year round"),
            L("Twice a year — at the start and end of the rainy season"),
            L("Only once, in their entire lifetime"),
            L("Only if they are pregnant"),
          ],
          answer: 1,
          explain: L("Animals above 6 months are usually dewormed twice a year, once at the beginning and once at the end of the rainy season."),
        },
        {
          topicId: "t-m6-worm-control",
          type: "truefalse",
          q: L("Standing water and snails near the shed or pasture are worth noticing and mentioning, since they raise the risk of flukes and schistosomes."),
          answer: true,
          explain: L("Yes — snails are needed for the life cycle of flukes and schistosomes, so water-logged areas with snails carry a higher risk."),
        },
        {
          topicId: "t-m6-worm-signs",
          type: "mcq",
          q: L("A cough, along with no other obvious sign, could point to which kind of worm?"),
          options: [L("Tapeworm"), L("Lungworm"), L("Liver fluke"), L("Schistosome in the blood vessels")],
          answer: 1,
          explain: L("A cough is associated with lungworm, a type of roundworm that lives in the lungs."),
        },
      ],
    },
  },
    ],
  },
  {
    id: "m7",
    number: 7,
    title: L("Diseases That Occur After Calving", "ఈనిన తర్వాత వచ్చే వ్యాధులు", "ஈன்ற பிறகு ஏற்படும் நோய்கள்", "ಕರು ಹಾಕಿದ ನಂತರ ಬರುವ ರೋಗಗಳು", "ब्याने के बाद होने वाली बीमारियाँ"),
    subtitle: L("Problems that can appear in the days right after an animal gives birth.", "పశువు ఈనిన వెంటనే వచ్చే రోజుల్లో కనిపించే సమస్యలు.", "விலங்கு ஈன்ற உடனடி நாட்களில் ஏற்படக்கூடிய பிரச்சினைகள்.", "ಪ್ರಾಣಿ ಕರು ಹಾಕಿದ ತಕ್ಷಣದ ದಿನಗಳಲ್ಲಿ ಕಾಣಿಸಿಕೊಳ್ಳಬಹುದಾದ ಸಮಸ್ಯೆಗಳು.", "पशु के ब्याने के तुरंत बाद के दिनों में दिखने वाली समस्याएँ।"),
    icon: "heart",
    available: true,
    lessons: [
// ==================================================================
  // LESSON 1 — Sudden Mineral Problems and Energy Diseases
  // ==================================================================
  {
    id: "m7-l1",
    title: L("Sudden Mineral Problems and Energy Diseases", "అకస్మాత్తుగా వచ్చే ఖనిజ లోపాలు మరియు శక్తి వ్యాధులు", "திடீர் தாது பிரச்சினைகள் மற்றும் ஆற்றல் நோய்கள்", "ಹಠಾತ್ ಖನಿಜ ಸಮಸ್ಯೆಗಳು ಮತ್ತು ಶಕ್ತಿ ರೋಗಗಳು", "अचानक होने वाली खनिज कमी और ऊर्जा संबंधी बीमारियाँ"),
    estMinutes: 9,
    hook: [
      {
        type: "hero",
        heading: L("The First Weeks After Calving Are High-Risk", "ఈనిన తర్వాత మొదటి వారాలు అత్యంత ప్రమాదకరం", "ஈன்ற பிறகு முதல் வாரங்கள் அதிக ஆபத்தானவை", "ಕರು ಹಾಕಿದ ನಂತರದ ಮೊದಲ ವಾರಗಳು ಹೆಚ್ಚು ಅಪಾಯಕಾರಿ", "ब्याने के बाद के पहले हफ्ते सबसे ज़्यादा जोखिम भरे होते हैं"),
        text: L(
          "Right after an animal gives birth, her body suddenly needs a lot more minerals and energy to make milk. If those needs aren't met, she can develop serious problems very fast — some within hours. You don't need to know the biology behind it. You only need to recognise the early warning signs and get help immediately, because these problems can be fatal if left untreated.",
          "పశువు ఈనిన వెంటనే, పాలు ఉత్పత్తి చేయడానికి దాని శరీరానికి అకస్మాత్తుగా చాలా ఎక్కువ ఖనిజాలు మరియు శక్తి అవసరమవుతాయి. ఈ అవసరాలు తీరకపోతే, తీవ్రమైన సమస్యలు చాలా వేగంగా వస్తాయి — కొన్నిసార్లు కొన్ని గంటల్లోనే. దీని వెనుక ఉన్న శాస్త్రం తెలుసుకోవాల్సిన అవసరం లేదు. మీరు కేవలం మొదటి హెచ్చరిక సంకేతాలను గుర్తించి వెంటనే సహాయం తీసుకోవాలి, ఎందుకంటే చికిత్స చేయకపోతే ఈ సమస్యలు ప్రాణాంతకం కావచ్చు.",
          "விலங்கு ஈன்ற உடனேயே, பால் உற்பத்திக்காக அதன் உடலுக்கு திடீரென அதிக அளவு தாதுக்களும் ஆற்றலும் தேவைப்படும். இந்தத் தேவைகள் நிறைவேறாவிட்டால், மிக விரைவாக — சில நேரங்களில் சில மணி நேரங்களுக்குள் — கடுமையான பிரச்சினைகள் ஏற்படலாம். இதன் பின்னணியில் உள்ள அறிவியலை நீங்கள் தெரிந்துகொள்ள வேண்டியதில்லை. நீங்கள் செய்ய வேண்டியது, ஆரம்ப எச்சரிக்கை அறிகுறிகளை அடையாளம் கண்டு உடனடியாக உதவி பெறுவது தான், ஏனெனில் சிகிச்சை அளிக்கப்படாவிட்டால் இந்தப் பிரச்சினைகள் உயிருக்கு ஆபத்தானவையாக மாறலாம்.",
          "ಪ್ರಾಣಿ ಕರು ಹಾಕಿದ ತಕ್ಷಣ, ಹಾಲು ಉತ್ಪಾದಿಸಲು ಅದರ ದೇಹಕ್ಕೆ ಹಠಾತ್ತನೆ ಹೆಚ್ಚು ಖನಿಜಗಳು ಮತ್ತು ಶಕ್ತಿ ಬೇಕಾಗುತ್ತದೆ. ಈ ಅಗತ್ಯಗಳು ಪೂರೈಸದಿದ್ದರೆ, ಗಂಭೀರ ಸಮಸ್ಯೆಗಳು ಬಹಳ ಬೇಗನೆ ಬರಬಹುದು — ಕೆಲವೊಮ್ಮೆ ಕೆಲವೇ ಗಂಟೆಗಳಲ್ಲಿ. ಇದರ ಹಿಂದಿನ ವಿಜ್ಞಾನ ತಿಳಿಯುವ ಅಗತ್ಯವಿಲ್ಲ. ನೀವು ಕೇವಲ ಆರಂಭಿಕ ಎಚ್ಚರಿಕೆ ಚಿಹ್ನೆಗಳನ್ನು ಗುರುತಿಸಿ ತಕ್ಷಣ ಸಹಾಯ ಪಡೆಯಬೇಕು, ಏಕೆಂದರೆ ಚಿಕಿತ್ಸೆ ನೀಡದಿದ್ದರೆ ಈ ಸಮಸ್ಯೆಗಳು ಮಾರಣಾಂತಿಕವಾಗಬಹುದು.",
          "पशु के ब्याने के तुरंत बाद, दूध बनाने के लिए उसके शरीर को अचानक बहुत ज़्यादा खनिज और ऊर्जा की ज़रूरत पड़ती है। अगर यह ज़रूरत पूरी नहीं होती, तो गंभीर समस्याएँ बहुत तेज़ी से आ सकती हैं — कभी-कभी कुछ ही घंटों में। इसके पीछे का विज्ञान जानना ज़रूरी नहीं है। आपको बस शुरुआती चेतावनी के लक्षण पहचानकर तुरंत मदद लेनी है, क्योंकि इलाज न होने पर ये समस्याएँ जानलेवा हो सकती हैं।"
        ),
      },
    ],
    topics: [
      {
        id: "t-m7-milkfever-magnesium",
        title: L("Milk Fever and Hypomagnesaemia", "మిల్క్ ఫీవర్ మరియు హైపోమాగ్నీసీమియా", "பால் காய்ச்சல் மற்றும் ஹைபோமேக்னீசீமியா", "ಮಿಲ್ಕ್ ಫೀವರ್ ಮತ್ತು ಹೈಪೋಮ್ಯಾಗ್ನೀಸೀಮಿಯಾ", "मिल्क फीवर और हाइपोमैग्नीसीमिया"),
        teach: [
            {
              type: "photo",
              src: "assets/illustration-m7-milk-fever.png",
              alt: L("Illustrated diagram showing calcium moving into milk at calving, and a weak cow lying down unable to stand from low blood calcium.", "ఈనిన సమయంలో కాల్షియం రక్తం నుండి పాలలోకి వెళ్లడం, మరియు రక్తంలో కాల్షియం తక్కువగా ఉండటం వల్ల నిలబడలేని బలహీన ఆవును చూపే చిత్రం.", "ஈன்றெடுக்கும் நேரத்தில் கால்சியம் இரத்தத்திலிருந்து பாலுக்குள் செல்வதையும், இரத்தத்தில் கால்சியம் குறைவால் நிற்க முடியாமல் படுத்திருக்கும் பலவீனமான பசுவையும் காட்டும் படம்.", "ಕರು ಹಾಕುವ ಸಮಯದಲ್ಲಿ ಕ್ಯಾಲ್ಸಿಯಂ ರಕ್ತದಿಂದ ಹಾಲಿಗೆ ಹೋಗುವುದನ್ನು ಮತ್ತು ರಕ್ತದಲ್ಲಿ ಕ್ಯಾಲ್ಸಿಯಂ ಕಡಿಮೆಯಾಗಿ ನಿಲ್ಲಲಾಗದ ದುರ್ಬಲ ಹಸುವನ್ನು ತೋರಿಸುವ ಚಿತ್ರ.", "ब्याने के समय कैल्शियम के खून से दूध में जाने और खून में कैल्शियम कम होने से खड़ी न हो पाने वाली कमज़ोर गाय को दिखाने वाला चित्र।"),
              caption: L("Illustration: why milk fever happens — calcium suddenly moves from the blood into milk production right at calving, leaving too little for the muscles to work properly.", "చిత్రం: మిల్క్ ఫీవర్ ఎందుకు వస్తుంది — ఈనిన వెంటనే కాల్షియం రక్తం నుండి పాల ఉత్పత్తికి అకస్మాత్తుగా వెళ్లిపోతుంది, దాంతో కండరాలు సరిగ్గా పనిచేయడానికి సరిపడా మిగలదు.", "படம்: பால் காய்ச்சல் ஏன் ஏற்படுகிறது — ஈன்ற உடனேயே கால்சியம் திடீரென இரத்தத்திலிருந்து பால் உற்பத்திக்கு சென்றுவிடும், தசைகள் சரியாக வேலை செய்ய போதுமான அளவு மிச்சமிருக்காது.", "ಚಿತ್ರ: ಮಿಲ್ಕ್ ಫೀವರ್ ಏಕೆ ಬರುತ್ತದೆ — ಕರು ಹಾಕಿದ ತಕ್ಷಣ ಕ್ಯಾಲ್ಸಿಯಂ ಹಠಾತ್ತನೆ ರಕ್ತದಿಂದ ಹಾಲಿನ ಉತ್ಪಾದನೆಗೆ ಹೋಗುತ್ತದೆ, ಸ್ನಾಯುಗಳು ಸರಿಯಾಗಿ ಕೆಲಸ ಮಾಡಲು ಸಾಕಷ್ಟು ಉಳಿಯುವುದಿಲ್ಲ.", "चित्र: मिल्क फीवर क्यों होता है — ब्याने के तुरंत बाद कैल्शियम अचानक खून से दूध बनाने में चला जाता है, जिससे मांसपेशियों के सही ढंग से काम करने के लिए पर्याप्त नहीं बचता।"),
            },
          {
            type: "text",
            heading: L("Two Sudden Emergencies With a Common Cause", "ఒకే కారణంతో వచ్చే రెండు అత్యవసర పరిస్థితులు", "ஒரே காரணத்தால் ஏற்படும் இரண்டு அவசர நிலைமைகள்", "ಒಂದೇ ಕಾರಣದಿಂದ ಬರುವ ಎರಡು ತುರ್ತು ಪರಿಸ್ಥಿತಿಗಳು", "एक ही कारण से होने वाली दो आपातकालीन स्थितियाँ"),
            html: L(
              "Making milk uses up a huge amount of <b>calcium</b> and <b>magnesium</b> — two minerals the animal's body needs for normal nerve and muscle function. Right after calving, the sudden demand for these minerals can outstrip what the body has ready to use. When that happens, the animal can develop one of two sudden, dangerous conditions: <b>Milk Fever</b> (low calcium) or <b>Hypomagnesaemia</b> (low magnesium). Both need urgent attention.",
              "పాలు తయారు చేయడానికి <b>కాల్షియం</b> మరియు <b>మెగ్నీషియం</b> చాలా ఎక్కువగా ఖర్చు అవుతాయి — ఇవి పశువు నరాలు మరియు కండరాలు సాధారణంగా పనిచేయడానికి అవసరమైన రెండు ఖనిజాలు. ఈనిన వెంటనే, ఈ ఖనిజాల డిమాండ్ శరీరంలో సిద్ధంగా ఉన్న దానికంటే ఎక్కువ అవుతుంది. అలా జరిగినప్పుడు, పశువుకు రెండు అకస్మాత్తు, ప్రమాదకరమైన పరిస్థితుల్లో ఒకటి రావచ్చు: <b>మిల్క్ ఫీవర్</b> (తక్కువ కాల్షియం) లేదా <b>హైపోమాగ్నీసీమియా</b> (తక్కువ మెగ్నీషియం). రెండింటికీ వెంటనే చికిత్స అవసరం.",
              "பால் தயாரிப்பதற்கு <b>கால்சியமும்</b> <b>மெக்னீசியமும்</b> மிக அதிக அளவில் தேவைப்படும் — இவை விலங்கின் நரம்பு மற்றும் தசைகள் சரியாக வேலை செய்ய தேவையான இரண்டு தாதுக்கள். ஈன்ற உடனேயே, இந்த தாதுக்களுக்கான திடீர் தேவை உடலில் தயாராக இருப்பதை விட அதிகமாகிவிடும். அப்போது, விலங்குக்கு இரண்டு திடீர், ஆபத்தான நிலைமைகளில் ஒன்று ஏற்படலாம்: <b>பால் காய்ச்சல்</b> (குறைந்த கால்சியம்) அல்லது <b>ஹைபோமேக்னீசீமியா</b> (குறைந்த மெக்னீசியம்). இரண்டுக்கும் உடனடி கவனிப்பு தேவை.",
              "ಹಾಲು ತಯಾರಿಸಲು <b>ಕ್ಯಾಲ್ಸಿಯಂ</b> ಮತ್ತು <b>ಮ್ಯಾಗ್ನೀಸಿಯಂ</b> ಬಹಳ ಹೆಚ್ಚು ಖರ್ಚಾಗುತ್ತದೆ — ಇವು ಪ್ರಾಣಿಯ ನರ ಮತ್ತು ಸ್ನಾಯುಗಳು ಸಾಮಾನ್ಯವಾಗಿ ಕೆಲಸ ಮಾಡಲು ಬೇಕಾದ ಎರಡು ಖನಿಜಗಳು. ಕರು ಹಾಕಿದ ತಕ್ಷಣ, ಈ ಖನಿಜಗಳ ಬೇಡಿಕೆ ದೇಹದಲ್ಲಿ ಸಿದ್ಧವಾಗಿರುವುದಕ್ಕಿಂತ ಹೆಚ್ಚಾಗಬಹುದು. ಆಗ, ಪ್ರಾಣಿಗೆ ಎರಡು ಹಠಾತ್, ಅಪಾಯಕಾರಿ ಸ್ಥಿತಿಗಳಲ್ಲಿ ಒಂದು ಬರಬಹುದು: <b>ಮಿಲ್ಕ್ ಫೀವರ್</b> (ಕಡಿಮೆ ಕ್ಯಾಲ್ಸಿಯಂ) ಅಥವಾ <b>ಹೈಪೋಮ್ಯಾಗ್ನೀಸೀಮಿಯಾ</b> (ಕಡಿಮೆ ಮ್ಯಾಗ್ನೀಸಿಯಂ). ಎರಡಕ್ಕೂ ತಕ್ಷಣದ ಚಿಕಿತ್ಸೆ ಬೇಕು.",
              "दूध बनाने में <b>कैल्शियम</b> और <b>मैग्नीशियम</b> की बहुत ज़्यादा खपत होती है — ये दो खनिज पशु की नसों और मांसपेशियों के सामान्य ढंग से काम करने के लिए ज़रूरी हैं। ब्याने के तुरंत बाद, इन खनिजों की अचानक मांग शरीर में तैयार मात्रा से ज़्यादा हो सकती है। ऐसा होने पर, पशु को दो अचानक, खतरनाक स्थितियों में से एक हो सकती है: <b>मिल्क फीवर</b> (कम कैल्शियम) या <b>हाइपोमैग्नीसीमिया</b> (कम मैग्नीशियम)। दोनों को तुरंत इलाज की ज़रूरत होती है।"
            ),
          },
          {
            type: "glossary",
            term: L("Milk Fever (Hypocalcaemia)", "మిల్క్ ఫీవర్ (హైపోకాల్సీమియా)", "பால் காய்ச்சல் (ஹைபோகால்சீமியா)", "ಮಿಲ್ಕ್ ಫೀವರ್ (ಹೈಪೋಕ್ಯಾಲ್ಸೀಮಿಯಾ)", "मिल्क फीवर (हाइपोकैल्सीमिया)"),
            meaning: L(
              "A condition caused by a drop in blood calcium after calving. Despite the name, there is no actual fever — in the later stages the animal's body temperature is actually below normal, not above it.",
              "ఈనిన తర్వాత రక్తంలో కాల్షియం తగ్గడం వల్ల వచ్చే పరిస్థితి. పేరులో 'ఫీవర్' ఉన్నా, నిజంగా జ్వరం ఉండదు — తర్వాతి దశల్లో పశువు శరీర ఉష్ణోగ్రత సాధారణం కంటే ఎక్కువ కాదు, తక్కువగా ఉంటుంది.",
              "ஈன்ற பிறகு இரத்தத்தில் கால்சியம் குறைவதால் ஏற்படும் நிலை. பெயரில் 'காய்ச்சல்' இருந்தாலும், உண்மையில் காய்ச்சல் இருக்காது — பிற்பகுதி நிலைகளில் விலங்கின் உடல் வெப்பநிலை சாதாரணத்தை விட குறைவாகவே இருக்கும், அதிகமாக அல்ல.",
              "ಕರು ಹಾಕಿದ ನಂತರ ರಕ್ತದಲ್ಲಿ ಕ್ಯಾಲ್ಸಿಯಂ ಕಡಿಮೆಯಾಗುವುದರಿಂದ ಬರುವ ಸ್ಥಿತಿ. ಹೆಸರಿನಲ್ಲಿ 'ಫೀವರ್' ಇದ್ದರೂ, ನಿಜವಾಗಿ ಜ್ವರ ಇರುವುದಿಲ್ಲ — ನಂತರದ ಹಂತಗಳಲ್ಲಿ ಪ್ರಾಣಿಯ ದೇಹದ ಉಷ್ಣತೆ ಸಾಮಾನ್ಯಕ್ಕಿಂತ ಹೆಚ್ಚಲ್ಲ, ಕಡಿಮೆ ಇರುತ್ತದೆ.",
              "यह ब्याने के बाद खून में कैल्शियम गिरने से होने वाली स्थिति है। नाम में 'फीवर' होने के बावजूद, असल में बुखार नहीं होता — बाद की अवस्थाओं में पशु के शरीर का तापमान सामान्य से ज़्यादा नहीं बल्कि कम हो जाता है।"
            ),
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("Milk Fever — early signs", "మిల్క్ ఫీవర్ — తొలి లక్షణాలు", "பால் காய்ச்சல் — ஆரம்ப அறிகுறிகள்", "ಮಿಲ್ಕ್ ಫೀವರ್ — ಆರಂಭಿಕ ಲಕ್ಷಣಗಳು", "मिल्क फीवर — शुरुआती लक्षण"),
                text: L(
                  "Usually within 72 hours of calving. The animal becomes excitable, with fine trembling over the flanks and loins, twitching ears, and bobbing its head.",
                  "సాధారణంగా ఈనిన 72 గంటల్లోపు వస్తుంది. పశువు కంగారుగా, పార్శ్వాలు మరియు నడుము దగ్గర సన్నని వణుకుతో, చెవులు అదిరిస్తూ, తలను ఊపుతూ ఉంటుంది.",
                  "பொதுவாக ஈன்ற 72 மணி நேரத்திற்குள் வரும். விலங்கு பதற்றமடைந்து, விலா மற்றும் இடுப்பு பகுதியில் மெல்லிய நடுக்கம், காதுகள் துடிப்பு, தலையை ஆட்டுதல் ஆகியவை காணப்படும்.",
                  "ಸಾಮಾನ್ಯವಾಗಿ ಕರು ಹಾಕಿದ 72 ಗಂಟೆಗಳ ಒಳಗೆ ಬರುತ್ತದೆ. ಪ್ರಾಣಿ ಆತಂಕಗೊಂಡು, ಪಕ್ಕೆ ಮತ್ತು ಸೊಂಟದ ಬಳಿ ಸಣ್ಣ ನಡುಕ, ಕಿವಿ ಅದುರುವಿಕೆ, ತಲೆ ಆಡಿಸುವಿಕೆಯನ್ನು ತೋರಿಸುತ್ತದೆ.",
                  "आमतौर पर ब्याने के 72 घंटों के भीतर होता है। पशु बेचैन हो जाता है, उसकी कमर और बाजू में हल्की कंपकंपी होती है, कान फड़फड़ाते हैं, और सिर हिलाता रहता है।"
                ),
              },
              {
                label: L("Milk Fever — later signs", "మిల్క్ ఫీవర్ — తర్వాతి లక్షణాలు", "பால் காய்ச்சல் — பிந்தைய அறிகுறிகள்", "ಮಿಲ್ಕ್ ಫೀವರ್ — ನಂತರದ ಲಕ್ಷಣಗಳು", "मिल्क फीवर — बाद के लक्षण"),
                text: L(
                  "The animal cannot stand, then lies down (recumbent) — first with its neck turned to one side, later lying flat on its side. It stops blinking when its eye is touched.",
                  "పశువు నిలబడలేకపోతుంది, తర్వాత పడుకుంటుంది — మొదట మెడను ఒక వైపుకు తిప్పి, తర్వాత పూర్తిగా పక్కకు వాలి పడుకుంటుంది. కంటిని తాకినా రెప్పలు వేయదు.",
                  "விலங்கு நிற்க முடியாமல் படுத்துவிடும் — முதலில் கழுத்தை ஒரு பக்கம் திருப்பி, பின்னர் முழுவதுமாக பக்கவாட்டில் படுத்துவிடும். கண்ணைத் தொட்டாலும் இமை மூடாது.",
                  "ಪ್ರಾಣಿ ನಿಲ್ಲಲಾಗದೆ ಮಲಗುತ್ತದೆ — ಮೊದಲು ಕುತ್ತಿಗೆಯನ್ನು ಒಂದು ಬದಿಗೆ ತಿರುಗಿಸಿ, ನಂತರ ಸಂಪೂರ್ಣವಾಗಿ ಪಕ್ಕಕ್ಕೆ ಮಲಗುತ್ತದೆ. ಕಣ್ಣನ್ನು ಮುಟ್ಟಿದರೂ ರೆಪ್ಪೆ ಮಿಟುಕಿಸುವುದಿಲ್ಲ.",
                  "पशु खड़ा नहीं हो पाता, फिर लेट जाता है — पहले गर्दन एक तरफ मोड़कर, फिर पूरी तरह करवट लेकर लेट जाता है। आँख को छूने पर भी पलक नहीं झपकाता।"
                ),
              },
              {
                label: L("Milk Fever — final stage", "మిల్క్ ఫీవర్ — చివరి దశ", "பால் காய்ச்சல் — இறுதி நிலை", "ಮಿಲ್ಕ್ ಫೀವರ್ — ಅಂತಿಮ ಹಂತ", "मिल्क फीवर — अंतिम अवस्था"),
                text: L("The animal becomes unconscious, and its body temperature drops below normal. Without treatment, the animal will not survive.", "పశువు స్పృహ కోల్పోతుంది, శరీర ఉష్ణోగ్రత సాధారణం కంటే తగ్గిపోతుంది. చికిత్స చేయకపోతే పశువు బతకదు.", "விலங்கு மயங்கிவிடும், உடல் வெப்பநிலை சாதாரணத்தை விட குறைந்துவிடும். சிகிச்சை இல்லாமல் விலங்கு உயிர் பிழைக்காது.", "ಪ್ರಾಣಿ ಪ್ರಜ್ಞೆ ಕಳೆದುಕೊಳ್ಳುತ್ತದೆ, ದೇಹದ ಉಷ್ಣತೆ ಸಾಮಾನ್ಯಕ್ಕಿಂತ ಕಡಿಮೆಯಾಗುತ್ತದೆ. ಚಿಕಿತ್ಸೆ ಇಲ್ಲದೆ ಪ್ರಾಣಿ ಬದುಕುಳಿಯುವುದಿಲ್ಲ.", "पशु बेहोश हो जाता है, और शरीर का तापमान सामान्य से नीचे गिर जाता है। इलाज के बिना पशु जीवित नहीं बचता।"),
              },
            ],
          },
          {
            type: "callout",
            style: "warning",
            heading: L("Milking Too Soon and Too Completely Can Be a Trigger", "త్వరగా మరియు పూర్తిగా పాలు పితకడం కారణం కావచ్చు", "விரைவாகவும் முழுமையாகவும் பால் கறத்தல் காரணமாக இருக்கலாம்", "ಬೇಗನೆ ಮತ್ತು ಸಂಪೂರ್ಣವಾಗಿ ಹಾಲು ಕರೆಯುವುದು ಕಾರಣವಾಗಬಹುದು", "बहुत जल्दी और पूरा दूध निकालना कारण बन सकता है"),
            text: L(
              "Milking an animal fully in the first 48 hours after calving can, in some cases, help bring on milk fever, because it pulls even more calcium out through the milk right when the body can least spare it. This is a decision for the owner or vet to manage — your job is simply to recognise the early signs above and report them the same day.",
              "ఈనిన మొదటి 48 గంటల్లో పశువును పూర్తిగా పితకడం, కొన్నిసార్లు మిల్క్ ఫీవర్ రావడానికి కారణమవుతుంది, ఎందుకంటే శరీరానికి కాల్షియం అత్యంత అవసరమైన సమయంలోనే పాల ద్వారా ఇంకా ఎక్కువ కాల్షియం బయటకు వెళ్లిపోతుంది. దీన్ని ఎలా నిర్వహించాలో యజమాని లేదా వైద్యుడు నిర్ణయిస్తారు — మీ పని కేవలం పైన చెప్పిన తొలి లక్షణాలను గుర్తించి అదే రోజు తెలియజేయడమే.",
              "ஈன்ற முதல் 48 மணி நேரத்தில் விலங்கை முழுவதுமாக பால் கறப்பது, சில நேரங்களில் பால் காய்ச்சலை ஏற்படுத்த உதவலாம், ஏனெனில் உடலுக்கு கால்சியம் மிகவும் தேவைப்படும் நேரத்திலேயே பாலின் மூலம் இன்னும் அதிக கால்சியம் வெளியேறிவிடும். இதை எப்படி நிர்வகிப்பது என்பது உரிமையாளர் அல்லது கால்நடை மருத்துவரின் முடிவு — உங்கள் வேலை மேலே கூறப்பட்ட ஆரம்ப அறிகுறிகளை அடையாளம் கண்டு அன்றே தெரிவிப்பது மட்டுமே.",
              "ಕರು ಹಾಕಿದ ಮೊದಲ 48 ಗಂಟೆಗಳಲ್ಲಿ ಪ್ರಾಣಿಯನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ಹಾಲು ಕರೆಯುವುದು, ಕೆಲವೊಮ್ಮೆ ಮಿಲ್ಕ್ ಫೀವರ್ ಬರಲು ಕಾರಣವಾಗಬಹುದು, ಏಕೆಂದರೆ ದೇಹಕ್ಕೆ ಕ್ಯಾಲ್ಸಿಯಂ ಅತಿ ಅಗತ್ಯವಿರುವ ಸಮಯದಲ್ಲೇ ಹಾಲಿನ ಮೂಲಕ ಇನ್ನೂ ಹೆಚ್ಚು ಕ್ಯಾಲ್ಸಿಯಂ ಹೊರಹೋಗುತ್ತದೆ. ಇದನ್ನು ಹೇಗೆ ನಿರ್ವಹಿಸಬೇಕು ಎಂಬುದು ಮಾಲೀಕ ಅಥವಾ ಪಶುವೈದ್ಯರ ನಿರ್ಧಾರ — ನಿಮ್ಮ ಕೆಲಸ ಕೇವಲ ಮೇಲಿನ ಆರಂಭಿಕ ಲಕ್ಷಣಗಳನ್ನು ಗುರುತಿಸಿ ಅದೇ ದಿನ ವರದಿ ಮಾಡುವುದು.",
              "ब्याने के पहले 48 घंटों में पशु का पूरा दूध निकालना, कभी-कभी मिल्क फीवर लाने में मदद कर सकता है, क्योंकि जब शरीर को कैल्शियम की सबसे ज़्यादा ज़रूरत होती है, तभी दूध के ज़रिए और भी ज़्यादा कैल्शियम बाहर निकल जाता है। इसे कैसे संभालना है यह मालिक या डॉक्टर का फैसला है — आपका काम बस ऊपर बताए गए शुरुआती लक्षणों को पहचानकर उसी दिन बताना है।"
            ),
          },
          {
            type: "glossary",
            term: L("Hypomagnesaemia", "హైపోమాగ్నీసీమియా", "ஹைபோமேக்னீசீமியா", "ಹೈಪೋಮ್ಯಾಗ್ನೀಸೀಮಿಯಾ", "हाइपोमैग्नीसीमिया"),
            meaning: L(
              "A condition caused by a drop in blood magnesium. It mostly affects adult milking animals, though calves can get it too. It often occurs together with milk fever, and both are emergencies.",
              "రక్తంలో మెగ్నీషియం తగ్గడం వల్ల వచ్చే పరిస్థితి. ఇది ఎక్కువగా పాలిచ్చే వయోజన పశువులలో వస్తుంది, అయితే దూడలకు కూడా రావచ్చు. ఇది తరచుగా మిల్క్ ఫీవర్‌తో పాటు వస్తుంది, రెండూ అత్యవసర పరిస్థితులే.",
              "இரத்தத்தில் மெக்னீசியம் குறைவதால் ஏற்படும் நிலை. இது பெரும்பாலும் பால் கொடுக்கும் வளர்ந்த விலங்குகளில் ஏற்படும், ஆனாலும் கன்றுகளுக்கும் வரலாம். இது பெரும்பாலும் பால் காய்ச்சலுடன் சேர்ந்தே வரும், இரண்டுமே அவசர நிலைமைகள்.",
              "ರಕ್ತದಲ್ಲಿ ಮ್ಯಾಗ್ನೀಸಿಯಂ ಕಡಿಮೆಯಾಗುವುದರಿಂದ ಬರುವ ಸ್ಥಿತಿ. ಇದು ಹೆಚ್ಚಾಗಿ ಹಾಲು ಕೊಡುವ ವಯಸ್ಕ ಪ್ರಾಣಿಗಳಲ್ಲಿ ಕಂಡುಬರುತ್ತದೆ, ಆದರೆ ಕರುಗಳಿಗೂ ಬರಬಹುದು. ಇದು ಸಾಮಾನ್ಯವಾಗಿ ಮಿಲ್ಕ್ ಫೀವರ್ ಜೊತೆ ಬರುತ್ತದೆ, ಎರಡೂ ತುರ್ತು ಪರಿಸ್ಥಿತಿಗಳು.",
              "यह खून में मैग्नीशियम गिरने से होने वाली स्थिति है। यह ज़्यादातर दूध देने वाले वयस्क पशुओं को होती है, हालांकि बछड़ों को भी हो सकती है। यह अक्सर मिल्क फीवर के साथ ही होती है, और दोनों ही आपातकालीन स्थितियाँ हैं।"
            ),
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("Hypomagnesaemia — sudden form", "హైపోమాగ్నీసీమియా — తీవ్రమైన రూపం", "ஹைபோமேக்னீசீமியா — திடீர் வடிவம்", "ಹೈಪೋಮ್ಯಾಗ್ನೀಸೀಮಿಯಾ — ಹಠಾತ್ ರೂಪ", "हाइपोमैग्नीसीमिया — अचानक होने वाला रूप"),
                text: L(
                  "A previously normal animal suddenly throws its head up, bellows, gallops, and falls — with severe paddling convulsions that repeat every short while.",
                  "ఇంతకుముందు మామూలుగా ఉన్న పశువు అకస్మాత్తుగా తలను పైకి విసిరి, అరుస్తూ, పరుగెత్తి, పడిపోతుంది — తీవ్రమైన కాళ్లు కొట్టుకునే మూర్ఛలు కొద్ది సమయానికి ఒకసారి పునరావృతం అవుతాయి.",
                  "முன்பு சாதாரணமாக இருந்த விலங்கு திடீரென தலையை மேலே தூக்கி, கத்தி, ஓடி, விழுந்துவிடும் — கடுமையான கால் உதைக்கும் வலிப்பு அடிக்கடி மீண்டும் மீண்டும் வரும்.",
                  "ಮೊದಲು ಸಾಮಾನ್ಯವಾಗಿದ್ದ ಪ್ರಾಣಿ ಹಠಾತ್ತನೆ ತಲೆಯನ್ನು ಮೇಲಕ್ಕೆತ್ತಿ, ಕೂಗುತ್ತಾ, ಓಡಿ, ಬಿದ್ದುಬಿಡುತ್ತದೆ — ತೀವ್ರವಾದ ಕಾಲು ಒದೆಯುವ ಸೆಳೆತಗಳು ಸ್ವಲ್ಪ ಸಮಯಕ್ಕೊಮ್ಮೆ ಮರುಕಳಿಸುತ್ತವೆ.",
                  "पहले सामान्य दिख रहा पशु अचानक सिर उठाकर, चिल्लाकर, दौड़कर गिर जाता है — और तेज़ी से पैर पटकने वाले दौरे थोड़ी-थोड़ी देर में बार-बार आते हैं।"
                ),
              },
              {
                label: L("Hypomagnesaemia — milder form", "హైపోమాగ్నీసీమియా — తేలికపాటి రూపం", "ஹைபோமேக்னீசீமியா — லேசான வடிவம்", "ಹೈಪೋಮ್ಯಾಗ್ನೀಸೀಮಿಯಾ — ಸೌಮ್ಯ ರೂಪ", "हाइपोमैग्नीसीमिया — हल्का रूप"),
                text: L(
                  "The animal walks stiffly, becomes unusually sensitive to touch and sound, and urinates often. This milder form can still turn into the convulsion stage within 2–3 days.",
                  "పశువు బిగుసుకుపోయినట్లు నడుస్తుంది, స్పర్శ మరియు శబ్దానికి అసాధారణంగా సున్నితంగా మారుతుంది, తరచుగా మూత్రం పోస్తుంది. ఈ తేలికపాటి రూపం కూడా 2–3 రోజుల్లో మూర్ఛల దశకు మారవచ్చు.",
                  "விலங்கு விறைப்பாக நடக்கும், தொடுதலுக்கும் ஒலிக்கும் அசாதாரணமாக உணர்திறன் அடையும், அடிக்கடி சிறுநீர் கழிக்கும். இந்த லேசான வடிவமும் 2–3 நாட்களில் வலிப்பு நிலைக்கு மாறலாம்.",
                  "ಪ್ರಾಣಿ ಬಿಗಿಯಾಗಿ ನಡೆಯುತ್ತದೆ, ಸ್ಪರ್ಶ ಮತ್ತು ಶಬ್ದಕ್ಕೆ ಅಸಾಮಾನ್ಯವಾಗಿ ಸೂಕ್ಷ್ಮವಾಗುತ್ತದೆ, ಆಗಾಗ ಮೂತ್ರ ವಿಸರ್ಜಿಸುತ್ತದೆ. ಈ ಸೌಮ್ಯ ರೂಪವೂ 2–3 ದಿನಗಳಲ್ಲಿ ಸೆಳೆತದ ಹಂತಕ್ಕೆ ತಿರುಗಬಹುದು.",
                  "पशु अकड़कर चलता है, छूने और आवाज़ के प्रति असामान्य रूप से संवेदनशील हो जाता है, और बार-बार पेशाब करता है। यह हल्का रूप भी 2–3 दिनों में दौरे की अवस्था में बदल सकता है।"
                ),
              },
            ],
          },
          {
            type: "callout",
            style: "tip",
            heading: L("Your Job: Report the Very First Sign, Not the Collapse", "మీ పని: పశువు పడిపోకముందే మొదటి లక్షణాన్ని తెలియజేయడం", "உங்கள் வேலை: விலங்கு விழும் முன் முதல் அறிகுறியை தெரிவிப்பது", "ನಿಮ್ಮ ಕೆಲಸ: ಪ್ರಾಣಿ ಬೀಳುವ ಮೊದಲೇ ಮೊದಲ ಲಕ್ಷಣ ವರದಿ ಮಾಡುವುದು", "आपका काम: गिरने से पहले ही पहला लक्षण बताना"),
            text: L(
              "Both conditions respond very well to treatment — but only if the vet is called as soon as the early signs appear, such as trembling, ear twitching, head bobbing, or unusually stiff walking. Waiting until the animal goes down and starts convulsing wastes precious time. Even after successful treatment, some animals relapse within a day or two, so keep watching the animal closely and report again if the same signs return.",
              "వణుకు, చెవులు అదరడం, తల ఊపడం లేదా అసాధారణంగా బిగుసుకుపోయిన నడక వంటి తొలి లక్షణాలు కనిపించిన వెంటనే వైద్యుడిని పిలిస్తేనే రెండు పరిస్థితులు చికిత్సకు బాగా స్పందిస్తాయి. పశువు పడిపోయి మూర్ఛపోయే వరకు వేచి ఉండటం విలువైన సమయాన్ని వృథా చేస్తుంది. విజయవంతమైన చికిత్స తర్వాత కూడా కొన్ని పశువులు ఒకటి రెండు రోజుల్లో మళ్లీ బాధపడవచ్చు, కాబట్టి పశువును జాగ్రత్తగా గమనిస్తూ అదే లక్షణాలు మళ్లీ కనిపిస్తే మళ్లీ తెలియజేయండి.",
              "நடுக்கம், காது துடிப்பு, தலை ஆட்டுதல் அல்லது அசாதாரண விறைப்பான நடை போன்ற ஆரம்ப அறிகுறிகள் தோன்றியவுடன் கால்நடை மருத்துவரை அழைத்தால் மட்டுமே இரண்டு நிலைமைகளும் சிகிச்சைக்கு நன்றாக பதிலளிக்கும். விலங்கு விழுந்து வலிப்பு தொடங்கும் வரை காத்திருப்பது மதிப்புமிக்க நேரத்தை வீணடிக்கும். வெற்றிகரமான சிகிச்சைக்குப் பிறகும், சில விலங்குகள் ஒன்று அல்லது இரண்டு நாட்களில் மீண்டும் பாதிக்கப்படலாம், எனவே விலங்கை உன்னிப்பாக கவனித்து அதே அறிகுறிகள் மீண்டும் தோன்றினால் மீண்டும் தெரிவிக்கவும்.",
              "ನಡುಕ, ಕಿವಿ ಅದುರುವಿಕೆ, ತಲೆ ಆಡಿಸುವಿಕೆ ಅಥವಾ ಅಸಾಮಾನ್ಯ ಬಿಗಿಯಾದ ನಡಿಗೆಯಂತಹ ಆರಂಭಿಕ ಲಕ್ಷಣಗಳು ಕಾಣಿಸಿಕೊಂಡ ತಕ್ಷಣ ಪಶುವೈದ್ಯರನ್ನು ಕರೆದರೆ ಮಾತ್ರ ಎರಡೂ ಸ್ಥಿತಿಗಳು ಚಿಕಿತ್ಸೆಗೆ ಚೆನ್ನಾಗಿ ಸ್ಪಂದಿಸುತ್ತವೆ. ಪ್ರಾಣಿ ಬಿದ್ದು ಸೆಳೆತ ಪ್ರಾರಂಭಿಸುವವರೆಗೆ ಕಾಯುವುದು ಅಮೂಲ್ಯ ಸಮಯವನ್ನು ವ್ಯರ್ಥ ಮಾಡುತ್ತದೆ. ಯಶಸ್ವಿ ಚಿಕಿತ್ಸೆಯ ನಂತರವೂ, ಕೆಲವು ಪ್ರಾಣಿಗಳು ಒಂದೆರಡು ದಿನಗಳಲ್ಲಿ ಮತ್ತೆ ಕಾಯಿಲೆಗೆ ಒಳಗಾಗಬಹುದು, ಆದ್ದರಿಂದ ಪ್ರಾಣಿಯನ್ನು ಸೂಕ್ಷ್ಮವಾಗಿ ಗಮನಿಸುತ್ತಾ ಅದೇ ಲಕ್ಷಣಗಳು ಮತ್ತೆ ಕಂಡುಬಂದರೆ ಮತ್ತೆ ವರದಿ ಮಾಡಿ.",
              "कंपकंपी, कान फड़फड़ाना, सिर हिलाना या असामान्य रूप से अकड़कर चलने जैसे शुरुआती लक्षण दिखते ही डॉक्टर को बुलाया जाए तो ही दोनों स्थितियाँ इलाज पर अच्छी तरह प्रतिक्रिया देती हैं। पशु के गिरकर दौरे शुरू होने का इंतज़ार करना कीमती समय बर्बाद करता है। सफल इलाज के बाद भी, कुछ पशुओं में एक-दो दिन में दोबारा लक्षण आ सकते हैं, इसलिए पशु पर बारीकी से नज़र रखें और वही लक्षण फिर दिखें तो दोबारा बताएं।"
            ),
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("Milk Fever is caused by low levels of which mineral in the blood?", "మిల్క్ ఫీవర్ రక్తంలో ఏ ఖనిజం తక్కువగా ఉండటం వల్ల వస్తుంది?", "பால் காய்ச்சல் இரத்தத்தில் எந்த தாது குறைவால் ஏற்படுகிறது?", "ಮಿಲ್ಕ್ ಫೀವರ್ ರಕ್ತದಲ್ಲಿ ಯಾವ ಖನಿಜದ ಕೊರತೆಯಿಂದ ಬರುತ್ತದೆ?", "मिल्क फीवर खून में किस खनिज की कमी से होता है?"),
            options: [L("Calcium", "కాల్షియం", "கால்சியம்", "ಕ್ಯಾಲ್ಸಿಯಂ", "कैल्शियम"), L("Iron", "ఐరన్", "இரும்பு", "ಕಬ್ಬಿಣ", "आयरन"), L("Potassium", "పొటాషియం", "பொட்டாசியம்", "ಪೊಟ್ಯಾಸಿಯಂ", "पोटैशियम"), L("Sodium", "సోడియం", "சோடியம்", "ಸೋಡಿಯಂ", "सोडियम")],
            answer: 0,
            explain: L("Milk Fever (hypocalcaemia) is caused by a drop in blood calcium — the huge demand for calcium to make milk can outstrip what the body has ready.", "మిల్క్ ఫీవర్ (హైపోకాల్సీమియా) రక్తంలో కాల్షియం తగ్గడం వల్ల వస్తుంది — పాలు తయారీకి కావాల్సిన కాల్షియం డిమాండ్ శరీరంలో సిద్ధంగా ఉన్న దానికంటే ఎక్కువ కావచ్చు.", "பால் காய்ச்சல் (ஹைபோகால்சீமியா) இரத்தத்தில் கால்சியம் குறைவதால் ஏற்படுகிறது — பால் தயாரிக்க தேவையான கால்சியம் தேவை உடலில் தயாராக இருப்பதை விட அதிகமாகலாம்.", "ಮಿಲ್ಕ್ ಫೀವರ್ (ಹೈಪೋಕ್ಯಾಲ್ಸೀಮಿಯಾ) ರಕ್ತದಲ್ಲಿ ಕ್ಯಾಲ್ಸಿಯಂ ಕಡಿಮೆಯಾಗುವುದರಿಂದ ಬರುತ್ತದೆ — ಹಾಲು ತಯಾರಿಸಲು ಬೇಕಾದ ಕ್ಯಾಲ್ಸಿಯಂ ಬೇಡಿಕೆ ದೇಹದಲ್ಲಿ ಸಿದ್ಧವಿರುವುದಕ್ಕಿಂತ ಹೆಚ್ಚಾಗಬಹುದು.", "मिल्क फीवर (हाइपोकैल्सीमिया) खून में कैल्शियम गिरने से होता है — दूध बनाने के लिए ज़रूरी कैल्शियम की मांग शरीर में तैयार मात्रा से ज़्यादा हो सकती है।"),
          },
          {
            type: "truefalse",
            q: L("Despite its name, an animal with Milk Fever actually has a high body temperature.", "పేరులో 'ఫీవర్' ఉన్నప్పటికీ, మిల్క్ ఫీవర్ ఉన్న పశువుకు నిజంగా అధిక శరీర ఉష్ణోగ్రత ఉంటుంది.", "பெயரில் இருந்தாலும், பால் காய்ச்சல் உள்ள விலங்குக்கு உண்மையில் அதிக உடல் வெப்பநிலை இருக்கும்.", "ಹೆಸರಿನಲ್ಲಿ ಇದ್ದರೂ, ಮಿಲ್ಕ್ ಫೀವರ್ ಇರುವ ಪ್ರಾಣಿಗೆ ನಿಜವಾಗಿ ಹೆಚ್ಚಿನ ದೇಹದ ಉಷ್ಣತೆ ಇರುತ್ತದೆ.", "नाम के बावजूद, मिल्क फीवर से ग्रस्त पशु का शरीर का तापमान असल में ज़्यादा होता है।"),
            answer: false,
            explain: L("No — there is no real fever. In the later stages, the animal's body temperature is actually below normal, not above it.", "కాదు — నిజమైన జ్వరం ఉండదు. తర్వాతి దశల్లో పశువు శరీర ఉష్ణోగ్రత సాధారణం కంటే తక్కువగా ఉంటుంది, ఎక్కువగా కాదు.", "இல்லை — உண்மையான காய்ச்சல் இருக்காது. பிற்பகுதி நிலைகளில், விலங்கின் உடல் வெப்பநிலை சாதாரணத்தை விட குறைவாகவே இருக்கும், அதிகமாக அல்ல.", "ಇಲ್ಲ — ನಿಜವಾದ ಜ್ವರ ಇರುವುದಿಲ್ಲ. ನಂತರದ ಹಂತಗಳಲ್ಲಿ, ಪ್ರಾಣಿಯ ದೇಹದ ಉಷ್ಣತೆ ಸಾಮಾನ್ಯಕ್ಕಿಂತ ಕಡಿಮೆ ಇರುತ್ತದೆ, ಹೆಚ್ಚಲ್ಲ.", "नहीं — असली बुखार नहीं होता। बाद की अवस्थाओं में, पशु के शरीर का तापमान सामान्य से ज़्यादा नहीं बल्कि कम हो जाता है।"),
          },
        ],
      },
      {
        id: "t-m7-ketosis-fattyliver",
        title: L("Ketosis and Fatty Liver", "కీటోసిస్ మరియు ఫ్యాటీ లివర్", "கீட்டோசிஸ் மற்றும் கொழுப்பு கல்லீரல்", "ಕೀಟೋಸಿಸ್ ಮತ್ತು ಫ್ಯಾಟಿ ಲಿವರ್", "कीटोसिस और फैटी लिवर"),
        teach: [
          {
            type: "text",
            heading: L("When the Body Runs Low on Energy", "శరీరంలో శక్తి తక్కువైనప్పుడు", "உடலில் ஆற்றல் குறையும் போது", "ದೇಹದಲ್ಲಿ ಶಕ್ತಿ ಕಡಿಮೆಯಾದಾಗ", "जब शरीर में ऊर्जा कम हो जाए"),
            html: L(
              "Making milk also takes a huge amount of energy. If an animal isn't eating enough to match that demand — or if she was too fat at calving — her body starts breaking down its own fat for energy. When this goes too far, it can lead to two related problems: <b>Ketosis</b> and <b>Fatty Liver Syndrome</b>.",
              "పాలు తయారీకి కూడా చాలా ఎక్కువ శక్తి అవసరం. ఈ డిమాండ్‌కు సరిపడా పశువు తినకపోతే — లేదా ఈనే సమయంలో అది చాలా లావుగా ఉంటే — శరీరం శక్తి కోసం దాని సొంత కొవ్వును కరిగించడం మొదలుపెడుతుంది. ఇది మితిమీరిపోతే, రెండు సంబంధిత సమస్యలు రావచ్చు: <b>కీటోసిస్</b> మరియు <b>ఫ్యాటీ లివర్ సిండ్రోమ్</b>.",
              "பால் தயாரிப்பதற்கும் அதிக ஆற்றல் தேவைப்படும். இந்த தேவைக்கு ஏற்ப விலங்கு போதுமான அளவு உண்ணவில்லை என்றால் — அல்லது ஈன்ற நேரத்தில் அது மிக கொழுப்பாக இருந்தால் — உடல் ஆற்றலுக்காக அதன் சொந்த கொழுப்பை உடைக்கத் தொடங்கும். இது அளவுக்கு அதிகமானால், இரண்டு தொடர்புடைய பிரச்சினைகள் ஏற்படலாம்: <b>கீட்டோசிஸ்</b> மற்றும் <b>கொழுப்பு கல்லீரல் நோய்க்குறி</b>.",
              "ಹಾಲು ತಯಾರಿಸಲು ಸಹ ಬಹಳ ಹೆಚ್ಚು ಶಕ್ತಿ ಬೇಕಾಗುತ್ತದೆ. ಈ ಬೇಡಿಕೆಗೆ ತಕ್ಕಷ್ಟು ಪ್ರಾಣಿ ತಿನ್ನದಿದ್ದರೆ — ಅಥವಾ ಕರು ಹಾಕುವ ಸಮಯದಲ್ಲಿ ಅದು ಬಹಳ ದಪ್ಪವಾಗಿದ್ದರೆ — ದೇಹವು ಶಕ್ತಿಗಾಗಿ ಸ್ವಂತ ಕೊಬ್ಬನ್ನು ಒಡೆಯಲು ಪ್ರಾರಂಭಿಸುತ್ತದೆ. ಇದು ಮಿತಿಮೀರಿದರೆ, ಎರಡು ಸಂಬಂಧಿತ ಸಮಸ್ಯೆಗಳು ಬರಬಹುದು: <b>ಕೀಟೋಸಿಸ್</b> ಮತ್ತು <b>ಫ್ಯಾಟಿ ಲಿವರ್ ಸಿಂಡ್ರೋಮ್</b>.",
              "दूध बनाने में भी बहुत ज़्यादा ऊर्जा लगती है। अगर पशु इस मांग के अनुसार पर्याप्त नहीं खा रहा — या ब्याने के समय वह बहुत मोटा था — तो उसका शरीर ऊर्जा के लिए अपनी ही चर्बी को तोड़ना शुरू कर देता है। यह ज़्यादा हो जाए तो दो जुड़ी हुई समस्याएँ हो सकती हैं: <b>कीटोसिस</b> और <b>फैटी लिवर सिंड्रोम</b>।"
            ),
          },
          {
            type: "glossary",
            term: L("Negative Energy Balance", "నెగటివ్ ఎనర్జీ బ్యాలెన్స్", "எதிர்மறை ஆற்றல் சமநிலை", "ನೆಗೆಟಿವ್ ಎನರ್ಜಿ ಬ್ಯಾಲೆನ್ಸ್", "नेगेटिव एनर्जी बैलेंस"),
            meaning: L(
              "This is what happens when an animal's body is using more energy than it is getting from its feed. To make up the difference, the body starts breaking down its own fat reserves.",
              "పశువు శరీరం తినే మేత నుండి వచ్చే దానికంటే ఎక్కువ శక్తిని ఖర్చు చేసినప్పుడు ఇది జరుగుతుంది. ఈ తేడాను భర్తీ చేయడానికి శరీరం తన సొంత కొవ్వు నిల్వలను కరిగించడం మొదలుపెడుతుంది.",
              "விலங்கின் உடல் அது உண்ணும் தீவனத்தில் இருந்து கிடைப்பதை விட அதிக ஆற்றலைப் பயன்படுத்தும் போது இது நடக்கும். இந்த வித்தியாசத்தை ஈடுசெய்ய, உடல் அதன் சொந்த கொழுப்பு இருப்புகளை உடைக்கத் தொடங்கும்.",
              "ಪ್ರಾಣಿಯ ದೇಹವು ಅದು ತಿನ್ನುವ ಆಹಾರದಿಂದ ಸಿಗುವುದಕ್ಕಿಂತ ಹೆಚ್ಚು ಶಕ್ತಿಯನ್ನು ಬಳಸಿದಾಗ ಇದು ಸಂಭವಿಸುತ್ತದೆ. ಈ ವ್ಯತ್ಯಾಸವನ್ನು ಸರಿದೂಗಿಸಲು, ದೇಹವು ತನ್ನ ಸ್ವಂತ ಕೊಬ್ಬಿನ ಸಂಗ್ರಹವನ್ನು ಒಡೆಯಲು ಪ್ರಾರಂಭಿಸುತ್ತದೆ.",
              "यह तब होता है जब पशु का शरीर अपने चारे से मिलने वाली ऊर्जा से ज़्यादा ऊर्जा खर्च कर रहा हो। इस कमी को पूरा करने के लिए, शरीर अपनी ही चर्बी के भंडार को तोड़ना शुरू कर देता है।"
            ),
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("Ketosis — early signs", "కీటోసిస్ — తొలి లక్షణాలు", "கீட்டோசிஸ் — ஆரம்ப அறிகுறிகள்", "ಕೀಟೋಸಿಸ್ — ಆರಂಭಿಕ ಲಕ್ಷಣಗಳು", "कीटोसिस — शुरुआती लक्षण"),
                text: L(
                  "Usually in the first 2 months after calving: a slight drop in how much the animal eats, a drop in milk production, tiredness (lethargy), and firm dung covered in mucus.",
                  "సాధారణంగా ఈనిన మొదటి 2 నెలల్లో వస్తుంది: పశువు తినే మేత కొద్దిగా తగ్గడం, పాల ఉత్పత్తి తగ్గడం, నీరసం, మరియు జిగురుతో కప్పబడిన గట్టి పేడ.",
                  "பொதுவாக ஈன்ற முதல் 2 மாதங்களில் வரும்: விலங்கு உண்ணும் அளவு சற்று குறைதல், பால் உற்பத்தி குறைதல், சோர்வு, மற்றும் சளி படிந்த திடமான சாணம்.",
                  "ಸಾಮಾನ್ಯವಾಗಿ ಕರು ಹಾಕಿದ ಮೊದಲ 2 ತಿಂಗಳಲ್ಲಿ ಬರುತ್ತದೆ: ಪ್ರಾಣಿ ತಿನ್ನುವ ಪ್ರಮಾಣ ಸ್ವಲ್ಪ ಕಡಿಮೆಯಾಗುವುದು, ಹಾಲಿನ ಉತ್ಪಾದನೆ ಕಡಿಮೆಯಾಗುವುದು, ಆಯಾಸ, ಮತ್ತು ಲೋಳೆಯಿಂದ ಮುಚ್ಚಿದ ಗಟ್ಟಿಯಾದ ಸಗಣಿ.",
                  "आमतौर पर ब्याने के पहले 2 महीनों में होता है: पशु के खाने में हल्की कमी, दूध उत्पादन में गिरावट, थकान, और बलगम से ढका सख्त गोबर।"
                ),
              },
              {
                label: L("Ketosis — signs as it worsens", "కీటోసిస్ — తీవ్రమయ్యే లక్షణాలు", "கீட்டோசிஸ் — மோசமடையும் அறிகுறிகள்", "ಕೀಟೋಸಿಸ್ — ಹದಗೆಡುವ ಲಕ್ಷಣಗಳು", "कीटोसिस — बिगड़ने पर लक्षण"),
                text: L(
                  "Noticeable weight loss, a hunched-back posture, and sometimes eating or chewing on strange things like soil or wood (called pica). Some animals become restless, aggressive, or show compulsive licking or head-pressing.",
                  "గమనించదగిన బరువు తగ్గడం, వెన్ను వంచుకుని నిలబడటం, మరియు కొన్నిసార్లు మట్టి లేదా చెక్క వంటి వింత వస్తువులను తినడం లేదా నమలడం (దీన్ని పికా అంటారు). కొన్ని పశువులు చంచలంగా, దూకుడుగా మారతాయి, లేదా పదేపదే నాకడం లేదా తలను గోడకు ఆనించడం చేస్తాయి.",
                  "கவனிக்கத்தக்க எடை இழப்பு, முதுகு வளைந்த நிலை, மற்றும் சில நேரங்களில் மண் அல்லது மரம் போன்ற விசித்திரமான பொருட்களை உண்ணுதல் அல்லது மெல்லுதல் (பிகா என்று அழைக்கப்படும்). சில விலங்குகள் அமைதியின்மை, ஆக்ரோஷம், அல்லது தொடர்ந்து நக்குதல் அல்லது தலையை அழுத்துதல் காட்டலாம்.",
                  "ಗಮನಾರ್ಹ ತೂಕ ನಷ್ಟ, ಬೆನ್ನು ಬಾಗಿದ ಭಂಗಿ, ಮತ್ತು ಕೆಲವೊಮ್ಮೆ ಮಣ್ಣು ಅಥವಾ ಮರದಂತಹ ವಿಚಿತ್ರ ವಸ್ತುಗಳನ್ನು ತಿನ್ನುವುದು ಅಥವಾ ಅಗಿಯುವುದು (ಇದನ್ನು ಪಿಕಾ ಎನ್ನುತ್ತಾರೆ). ಕೆಲವು ಪ್ರಾಣಿಗಳು ಚಡಪಡಿಕೆ, ಆಕ್ರಮಣಶೀಲತೆ ತೋರಿಸಬಹುದು, ಅಥವಾ ಪದೇಪದೇ ನೆಕ್ಕುವುದು ಅಥವಾ ತಲೆ ಒತ್ತುವುದನ್ನು ತೋರಿಸಬಹುದು.",
                  "ध्यान देने लायक वज़न घटना, पीठ झुकाकर खड़ा होना, और कभी-कभी मिट्टी या लकड़ी जैसी अजीब चीज़ें खाना या चबाना (जिसे पिका कहते हैं)। कुछ पशु बेचैन, आक्रामक हो जाते हैं, या बार-बार चाटना या सिर दीवार से टिकाना दिखाते हैं।"
                ),
              },
              {
                label: L("Ketosis — advanced signs", "కీటోసిస్ — ముదిరిన లక్షణాలు", "கீட்டோசிஸ் — முற்றிய அறிகுறிகள்", "ಕೀಟೋಸಿಸ್ — ಮುಂದುವರಿದ ಲಕ್ಷಣಗಳು", "कीटोसिस — गंभीर लक्षण"),
                text: L(
                  "Abnormal walking — staggering, circling, or falling. Left untreated, milk production can drop to almost nothing, and the problem is likely to come back in future lactations too.",
                  "అసాధారణ నడక — తూలడం, వృత్తాకారంగా తిరగడం, లేదా పడిపోవడం. చికిత్స చేయకపోతే, పాల ఉత్పత్తి దాదాపు శూన్యానికి పడిపోవచ్చు, మరియు ఈ సమస్య తర్వాతి ఈతల్లో కూడా మళ్లీ రావచ్చు.",
                  "அசாதாரண நடை — தள்ளாடுதல், வட்டமிடுதல், அல்லது விழுதல். சிகிச்சை அளிக்கப்படாவிட்டால், பால் உற்பத்தி கிட்டத்தட்ட பூஜ்ஜியமாகக் குறையலாம், மேலும் இந்த பிரச்சினை எதிர்கால ஈற்றுகளிலும் மீண்டும் வரக்கூடும்.",
                  "ಅಸಾಮಾನ್ಯ ನಡಿಗೆ — ತೂರಾಡುವುದು, ಸುತ್ತು ಹಾಕುವುದು, ಅಥವಾ ಬೀಳುವುದು. ಚಿಕಿತ್ಸೆ ನೀಡದಿದ್ದರೆ, ಹಾಲಿನ ಉತ್ಪಾದನೆ ಬಹುತೇಕ ಶೂನ್ಯಕ್ಕೆ ಇಳಿಯಬಹುದು, ಮತ್ತು ಈ ಸಮಸ್ಯೆ ಮುಂದಿನ ಕರು ಹಾಕುವಿಕೆಗಳಲ್ಲಿಯೂ ಮರುಕಳಿಸಬಹುದು.",
                  "असामान्य चाल — लड़खड़ाना, गोल-गोल घूमना, या गिरना। इलाज न होने पर, दूध उत्पादन लगभग शून्य तक गिर सकता है, और यह समस्या आगे के ब्यांतों में भी दोबारा आने की संभावना रहती है।"
                ),
              },
            ],
          },
          {
            type: "callout",
            style: "tip",
            heading: L("A Familiar Number: Body Condition Score 3.5", "పరిచయమైన సంఖ్య: బాడీ కండిషన్ స్కోర్ 3.5", "பழக்கமான எண்: உடல் நிலை மதிப்பெண் 3.5", "ಪರಿಚಿತ ಸಂಖ್ಯೆ: ಬಾಡಿ ಕಂಡೀಷನ್ ಸ್ಕೋರ್ 3.5", "एक जानी-पहचानी संख्या: बॉडी कंडीशन स्कोर 3.5"),
            text: L(
              "You already learned Body Condition Score (BCS) in Module 1 — the 1-to-5 scale for how thin or fat an animal is. An animal at about 3.5 BCS at calving has a lower risk of ketosis. Sudden changes in feed, or overfeeding, also raise the risk — which is why steady, proper feeding matters so much in late pregnancy.",
              "మీరు మాడ్యూల్ 1లో బాడీ కండిషన్ స్కోర్ (BCS) గురించి ఇప్పటికే నేర్చుకున్నారు — పశువు ఎంత సన్నగా లేదా లావుగా ఉందో చూపే 1 నుండి 5 స్కేల్. ఈనేటప్పుడు దాదాపు 3.5 BCS ఉన్న పశువుకు కీటోసిస్ ప్రమాదం తక్కువగా ఉంటుంది. మేతలో అకస్మాత్తు మార్పులు లేదా అతిగా తినిపించడం కూడా ప్రమాదాన్ని పెంచుతాయి — అందుకే గర్భం చివరి దశలో స్థిరమైన, సరైన మేత చాలా ముఖ్యం.",
              "மாடியூல் 1-இல் நீங்கள் ஏற்கனவே உடல் நிலை மதிப்பெண் (BCS) பற்றி கற்றுக்கொண்டீர்கள் — விலங்கு எவ்வளவு மெலிந்தது அல்லது கொழுத்தது என்பதைக் காட்டும் 1 முதல் 5 வரையிலான அளவுகோல். ஈன்ற நேரத்தில் சுமார் 3.5 BCS உள்ள விலங்குக்கு கீட்டோசிஸ் ஆபத்து குறைவாக இருக்கும். தீவனத்தில் திடீர் மாற்றங்கள் அல்லது அதிகமாக உணவளிப்பதும் ஆபத்தை அதிகரிக்கும் — அதனால்தான் கர்ப்பத்தின் கடைசி கட்டத்தில் நிலையான, சரியான உணவளிப்பு மிக முக்கியம்.",
              "ಮಾಡ್ಯೂಲ್ 1ರಲ್ಲಿ ನೀವು ಈಗಾಗಲೇ ಬಾಡಿ ಕಂಡೀಷನ್ ಸ್ಕೋರ್ (BCS) ಬಗ್ಗೆ ಕಲಿತಿದ್ದೀರಿ — ಪ್ರಾಣಿ ಎಷ್ಟು ತೆಳ್ಳಗಿದೆ ಅಥವಾ ದಪ್ಪವಾಗಿದೆ ಎಂಬುದನ್ನು ತೋರಿಸುವ 1ರಿಂದ 5ರವರೆಗಿನ ಪ್ರಮಾಣ. ಕರು ಹಾಕುವ ಸಮಯದಲ್ಲಿ ಸುಮಾರು 3.5 BCS ಇರುವ ಪ್ರಾಣಿಗೆ ಕೀಟೋಸಿಸ್ ಅಪಾಯ ಕಡಿಮೆ ಇರುತ್ತದೆ. ಆಹಾರದಲ್ಲಿ ಹಠಾತ್ ಬದಲಾವಣೆಗಳು, ಅಥವಾ ಅತಿಯಾಗಿ ಆಹಾರ ನೀಡುವುದು ಸಹ ಅಪಾಯವನ್ನು ಹೆಚ್ಚಿಸುತ್ತದೆ — ಆದ್ದರಿಂದ ಗರ್ಭಾವಸ್ಥೆಯ ಕೊನೆಯ ಹಂತದಲ್ಲಿ ಸ್ಥಿರವಾದ, ಸರಿಯಾದ ಆಹಾರ ಬಹಳ ಮುಖ್ಯ.",
              "आपने मॉड्यूल 1 में बॉडी कंडीशन स्कोर (BCS) के बारे में पहले ही सीखा है — पशु कितना दुबला या मोटा है यह दिखाने वाला 1 से 5 तक का पैमाना। ब्याने के समय लगभग 3.5 BCS वाले पशु में कीटोसिस का खतरा कम होता है। चारे में अचानक बदलाव, या ज़्यादा खिलाना भी खतरा बढ़ाता है — इसलिए गर्भावस्था के अंतिम चरण में स्थिर, सही तरीके से खिलाना बहुत मायने रखता है।"
            ),
          },
          {
            type: "text",
            heading: L("Fatty Liver Syndrome (Lipidosis)", "ఫ్యాటీ లివర్ సిండ్రోమ్ (లిపిడోసిస్)", "கொழுப்பு கல்லீரல் நோய்க்குறி (லிபிடோசிஸ்)", "ಫ್ಯಾಟಿ ಲಿವರ್ ಸಿಂಡ್ರೋಮ್ (ಲಿಪಿಡೋಸಿಸ್)", "फैटी लिवर सिंड्रोम (लिपिडोसिस)"),
            html: L(
              "This can start within just 24 hours of an animal going off her feed. As the body breaks down fat for energy, some of that fat gets deposited back into the liver. Confusingly, this can happen even while the cow is visibly losing body condition — the fat is building up inside the liver, not on her body. Cows that were too fat at calving (BCS above 3.5) are much more likely to develop this.",
              "పశువు మేత తినడం మానేసిన కేవలం 24 గంటల్లోనే ఇది మొదలవ్వచ్చు. శరీరం శక్తి కోసం కొవ్వును కరిగించే క్రమంలో, ఆ కొవ్వులో కొంత భాగం తిరిగి కాలేయంలో పేరుకుపోతుంది. గందరగోళంగా అనిపించినా, ఆవు కనిపించేలా బరువు తగ్గుతున్నప్పుడు కూడా ఇది జరగవచ్చు — కొవ్వు దాని శరీరంపై కాకుండా కాలేయం లోపల పేరుకుపోతూ ఉంటుంది. ఈనేటప్పుడు మరీ లావుగా ఉన్న (BCS 3.5 కంటే ఎక్కువ) ఆవులకు ఇది వచ్చే అవకాశం చాలా ఎక్కువ.",
              "விலங்கு தீவனம் நிறுத்திய வெறும் 24 மணி நேரத்திற்குள் இது தொடங்கலாம். உடல் ஆற்றலுக்காக கொழுப்பை உடைக்கும் போது, அந்த கொழுப்பில் சிலவை மீண்டும் கல்லீரலில் படிந்துவிடும். குழப்பமாக இருந்தாலும், பசு கண்ணுக்குத் தெரியும் வகையில் உடல் எடை இழந்துகொண்டிருக்கும் போதே இது நடக்கலாம் — கொழுப்பு அதன் உடலில் அல்ல, கல்லீரலுக்குள் சேர்ந்துகொண்டிருக்கும். ஈன்ற நேரத்தில் மிக கொழுப்பாக இருந்த (BCS 3.5-க்கு மேல்) பசுக்களுக்கு இது வருவதற்கான வாய்ப்பு அதிகம்.",
              "ಪ್ರಾಣಿ ಆಹಾರ ತಿನ್ನುವುದನ್ನು ನಿಲ್ಲಿಸಿದ ಕೇವಲ 24 ಗಂಟೆಗಳಲ್ಲಿ ಇದು ಪ್ರಾರಂಭವಾಗಬಹುದು. ದೇಹವು ಶಕ್ತಿಗಾಗಿ ಕೊಬ್ಬನ್ನು ಒಡೆಯುತ್ತಿರುವಾಗ, ಆ ಕೊಬ್ಬಿನ ಕೆಲವು ಭಾಗ ಮತ್ತೆ ಯಕೃತ್ತಿನಲ್ಲಿ ಸಂಗ್ರಹವಾಗುತ್ತದೆ. ಗೊಂದಲಮಯವಾಗಿ, ಹಸು ಕಣ್ಣಿಗೆ ಕಾಣುವಂತೆ ದೇಹತೂಕ ಕಳೆದುಕೊಳ್ಳುತ್ತಿರುವಾಗಲೂ ಇದು ಸಂಭವಿಸಬಹುದು — ಕೊಬ್ಬು ಅದರ ದೇಹದ ಮೇಲೆ ಅಲ್ಲ, ಯಕೃತ್ತಿನ ಒಳಗೆ ಸಂಗ್ರಹವಾಗುತ್ತಿದೆ. ಕರು ಹಾಕುವ ಸಮಯದಲ್ಲಿ ಬಹಳ ದಪ್ಪವಾಗಿದ್ದ (BCS 3.5ಕ್ಕಿಂತ ಹೆಚ್ಚು) ಹಸುಗಳಿಗೆ ಇದು ಬರುವ ಸಾಧ್ಯತೆ ಹೆಚ್ಚು.",
              "यह पशु के चारा खाना छोड़ने के मात्र 24 घंटों के भीतर शुरू हो सकता है। जैसे-जैसे शरीर ऊर्जा के लिए चर्बी तोड़ता है, उस चर्बी का कुछ हिस्सा वापस लिवर में जमा हो जाता है। भ्रमित करने वाली बात यह है कि गाय का शरीर स्पष्ट रूप से दुबला होते हुए भी यह हो सकता है — चर्बी उसके शरीर पर नहीं बल्कि लिवर के अंदर जमा हो रही होती है। ब्याने के समय ज़्यादा मोटी (BCS 3.5 से ऊपर) रहीं गायों में यह होने की संभावना कहीं ज़्यादा होती है।"
            ),
          },
          {
            type: "stat-grid",
            items: [
              { label: L("Fatty Liver — what you may notice", "ఫ్యాటీ లివర్ — మీరు గమనించేవి", "கொழுப்பு கல்லீரல் — நீங்கள் கவனிக்கக்கூடியவை", "ಫ್ಯಾಟಿ ಲಿವರ್ — ನೀವು ಗಮನಿಸಬಹುದಾದದ್ದು", "फैटी लिवर — आप क्या देख सकते हैं"), text: L("Lower milk yield and reduced appetite.", "పాల దిగుబడి తగ్గడం మరియు ఆకలి తగ్గడం.", "குறைந்த பால் விளைச்சல் மற்றும் குறைந்த பசி.", "ಕಡಿಮೆ ಹಾಲಿನ ಇಳುವರಿ ಮತ್ತು ಕಡಿಮೆ ಹಸಿವು.", "कम दूध उत्पादन और कम भूख।") },
              {
                label: L("Fatty Liver — linked risks", "ఫ్యాటీ లివర్ — సంబంధిత ప్రమాదాలు", "கொழுப்பு கல்லீரல் — தொடர்புடைய ஆபத்துகள்", "ಫ್ಯಾಟಿ ಲಿವರ್ — ಸಂಬಂಧಿತ ಅಪಾಯಗಳು", "फैटी लिवर — जुड़े हुए खतरे"),
                text: L("Animals with fatty liver are more likely to also develop Milk Fever, Ketosis, mastitis, and retained placenta, plus reduced fertility.", "ఫ్యాటీ లివర్ ఉన్న పశువులకు మిల్క్ ఫీవర్, కీటోసిస్, మాస్టిటిస్, మావి నిలిచిపోవడం, మరియు గర్భధారణ సామర్థ్యం తగ్గడం వంటివి కూడా వచ్చే అవకాశం ఎక్కువ.", "கொழுப்பு கல்லீரல் உள்ள விலங்குகளுக்கு பால் காய்ச்சல், கீட்டோசிஸ், மேமை அழற்சி, மற்றும் மாயை தங்குதல் ஆகியவை வருவதற்கான வாய்ப்பும், கருவுறும் திறன் குறைவதற்கான வாய்ப்பும் அதிகம்.", "ಫ್ಯಾಟಿ ಲಿವರ್ ಇರುವ ಪ್ರಾಣಿಗಳಿಗೆ ಮಿಲ್ಕ್ ಫೀವರ್, ಕೀಟೋಸಿಸ್, ಕೆಚ್ಚಲುಬಾವು, ಮತ್ತು ಮಾಸು ಉಳಿಯುವಿಕೆ ಸಹ ಬರುವ ಸಾಧ್ಯತೆ ಹೆಚ್ಚು, ಜೊತೆಗೆ ಫಲವತ್ತತೆ ಕಡಿಮೆಯಾಗುತ್ತದೆ.", "फैटी लिवर वाले पशुओं में मिल्क फीवर, कीटोसिस, थनैला, और जेर का रुक जाना होने की संभावना भी ज़्यादा होती है, साथ ही प्रजनन क्षमता भी घट जाती है।"),
              },
              {
                label: L("Fatty Liver — confirming it", "ఫ్యాటీ లివర్ — నిర్ధారించడం", "கொழுப்பு கல்லீரல் — உறுதிப்படுத்துதல்", "ಫ್ಯಾಟಿ ಲಿವರ್ — ಖಚಿತಪಡಿಸುವುದು", "फैटी लिवर — पुष्टि करना"),
                text: L("It can only be confirmed with a blood test — this is entirely the vet's job, not something you can tell just by looking.", "దీన్ని రక్త పరీక్ష ద్వారానే నిర్ధారించగలం — ఇది పూర్తిగా వైద్యుడి పని, కేవలం చూసి మీరు చెప్పగలిగేది కాదు.", "இதை இரத்த பரிசோதனை மூலம் மட்டுமே உறுதிப்படுத்த முடியும் — இது முழுவதுமாக கால்நடை மருத்துவரின் வேலை, வெறுமனே பார்த்து நீங்கள் சொல்லக்கூடியது அல்ல.", "ಇದನ್ನು ರಕ್ತ ಪರೀಕ್ಷೆಯಿಂದ ಮಾತ್ರ ಖಚಿತಪಡಿಸಬಹುದು — ಇದು ಸಂಪೂರ್ಣವಾಗಿ ಪಶುವೈದ್ಯರ ಕೆಲಸ, ಬರೀ ನೋಡಿ ನೀವು ಹೇಳಬಹುದಾದದ್ದಲ್ಲ.", "इसकी पुष्टि केवल खून की जांच से ही हो सकती है — यह पूरी तरह डॉक्टर का काम है, सिर्फ देखकर आप नहीं बता सकते।"),
              },
            ],
          },
          {
            type: "callout",
            style: "warning",
            heading: L("There Is No Proven Treatment — Prevention and Early Reporting Matter Most", "నిరూపితమైన చికిత్స లేదు — నివారణ మరియు ముందస్తు నివేదిక చాలా ముఖ్యం", "நிரூபிக்கப்பட்ட சிகிச்சை இல்லை — தடுப்பும் முன்கூட்டிய தகவலும் மிக முக்கியம்", "ಸಾಬೀತಾದ ಚಿಕಿತ್ಸೆ ಇಲ್ಲ — ತಡೆಗಟ್ಟುವಿಕೆ ಮತ್ತು ಮುಂಚಿನ ವರದಿ ಬಹಳ ಮುಖ್ಯ", "कोई साबित इलाज नहीं है — रोकथाम और जल्दी सूचना देना सबसे ज़्यादा मायने रखता है"),
            text: L(
              "Once fat builds up in the liver, it can take more than 10 weeks after calving to clear, and death rates can be high in severe cases. There is no proven treatment for fatty liver, which is exactly why reporting a drop in appetite or milk early — before things worsen — is so important. It also means keeping animals at a healthy body condition (not too fat) well before calving matters far more than trying to fix things afterwards.",
              "కాలేయంలో కొవ్వు పేరుకుపోయాక, అది తగ్గడానికి ఈనిన తర్వాత 10 వారాలకు మించి పట్టవచ్చు, మరియు తీవ్రమైన కేసుల్లో మరణాల రేటు ఎక్కువగా ఉండవచ్చు. ఫ్యాటీ లివర్‌కు నిరూపితమైన చికిత్స లేదు, అందుకే విషయాలు మరింత దిగజారకముందే ఆకలి లేదా పాలు తగ్గడాన్ని ముందుగానే తెలియజేయడం చాలా ముఖ్యం. అలాగే ఈనేముందే పశువులను ఆరోగ్యకరమైన బరువులో (అతిగా లావు కాకుండా) ఉంచడం, తర్వాత సరిదిద్దడానికి ప్రయత్నించడం కంటే చాలా ముఖ్యమైనది.",
              "கல்லீரலில் கொழுப்பு படிந்த பிறகு, அது நீங்க ஈன்ற பிறகு 10 வாரங்களுக்கு மேல் ஆகலாம், மேலும் கடுமையான நிலைகளில் இறப்பு விகிதம் அதிகமாக இருக்கலாம். கொழுப்பு கல்லீரலுக்கு நிரூபிக்கப்பட்ட சிகிச்சை இல்லை, அதனால்தான் விஷயங்கள் மோசமடையும் முன்பே பசி அல்லது பாலில் குறைவை முன்கூட்டியே தெரிவிப்பது மிக முக்கியம். ஈன்பதற்கு முன்பே விலங்குகளை ஆரோக்கியமான உடல் நிலையில் (அதிக கொழுப்பு இல்லாமல்) வைத்திருப்பதும், பின்னர் சரிசெய்ய முயற்சிப்பதை விட மிக முக்கியம்.",
              "ಒಮ್ಮೆ ಯಕೃತ್ತಿನಲ್ಲಿ ಕೊಬ್ಬು ಸಂಗ್ರಹವಾದ ನಂತರ, ಅದು ಕರಗಲು ಕರು ಹಾಕಿದ ನಂತರ 10 ವಾರಗಳಿಗಿಂತ ಹೆಚ್ಚು ಸಮಯ ತೆಗೆದುಕೊಳ್ಳಬಹುದು, ಮತ್ತು ತೀವ್ರ ಪ್ರಕರಣಗಳಲ್ಲಿ ಸಾವಿನ ಪ್ರಮಾಣ ಹೆಚ್ಚಿರಬಹುದು. ಫ್ಯಾಟಿ ಲಿವರ್‌ಗೆ ಸಾಬೀತಾದ ಚಿಕಿತ್ಸೆ ಇಲ್ಲ, ಅದಕ್ಕಾಗಿಯೇ ವಿಷಯಗಳು ಹದಗೆಡುವ ಮೊದಲೇ ಹಸಿವು ಅಥವಾ ಹಾಲು ಕಡಿಮೆಯಾಗುವುದನ್ನು ಬೇಗ ವರದಿ ಮಾಡುವುದು ಬಹಳ ಮುಖ್ಯ. ಕರು ಹಾಕುವ ಮೊದಲೇ ಪ್ರಾಣಿಗಳನ್ನು ಆರೋಗ್ಯಕರ ದೇಹಸ್ಥಿತಿಯಲ್ಲಿ (ಅತಿ ದಪ್ಪ ಇಲ್ಲದೆ) ಇಡುವುದೂ, ನಂತರ ಸರಿಪಡಿಸಲು ಪ್ರಯತ್ನಿಸುವುದಕ್ಕಿಂತ ಹೆಚ್ಚು ಮುಖ್ಯ.",
              "एक बार लिवर में चर्बी जमा हो जाए, तो उसे साफ होने में ब्याने के बाद 10 हफ्तों से ज़्यादा समय लग सकता है, और गंभीर मामलों में मृत्यु दर ज़्यादा हो सकती है। फैटी लिवर का कोई साबित इलाज नहीं है, इसीलिए भूख या दूध में कमी को हालात बिगड़ने से पहले ही बताना बहुत ज़रूरी है। इसका मतलब यह भी है कि ब्याने से काफी पहले ही पशुओं को सही शरीर स्थिति (बहुत मोटा नहीं) में रखना, बाद में सुधारने की कोशिश करने से कहीं ज़्यादा मायने रखता है।"
            ),
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("In Ketosis, what usually happens FIRST?", "కీటోసిస్‌లో సాధారణంగా మొదట ఏమి జరుగుతుంది?", "கீட்டோசிஸில் பொதுவாக முதலில் என்ன நடக்கும்?", "ಕೀಟೋಸಿಸ್‌ನಲ್ಲಿ ಸಾಮಾನ್ಯವಾಗಿ ಮೊದಲು ಏನಾಗುತ್ತದೆ?", "कीटोसिस में आमतौर पर सबसे पहले क्या होता है?"),
            options: [
              L("Sudden collapse and convulsions", "అకస్మాత్తుగా పడిపోవడం మరియు మూర్ఛలు", "திடீர் விழுதல் மற்றும் வலிப்பு", "ಹಠಾತ್ ಕುಸಿತ ಮತ್ತು ಸೆಳೆತ", "अचानक गिरना और दौरे पड़ना"),
              L("A slight drop in feed intake and milk production, with tiredness", "మేత తీసుకోవడం మరియు పాల ఉత్పత్తిలో కొద్దిగా తగ్గుదల, నీరసంతో పాటు", "தீவன உட்கொள்ளல் மற்றும் பால் உற்பத்தியில் சிறிது குறைவு, சோர்வுடன்", "ಆಹಾರ ಸೇವನೆ ಮತ್ತು ಹಾಲಿನ ಉತ್ಪಾದನೆಯಲ್ಲಿ ಸ್ವಲ್ಪ ಇಳಿಕೆ, ಆಯಾಸದ ಜೊತೆಗೆ", "चारा खाने और दूध उत्पादन में हल्की कमी, साथ में थकान"),
              L("A very high fever", "చాలా అధిక జ్వరం", "மிக அதிக காய்ச்சல்", "ಬಹಳ ಹೆಚ್ಚಿನ ಜ್ವರ", "बहुत तेज़ बुखार"),
              L("Sudden swelling of the udder", "పొదుగు అకస్మాత్తుగా వాపు రావడం", "மேமையின் திடீர் வீக்கம்", "ಕೆಚ್ಚಲಿನ ಹಠಾತ್ ಊತ", "थन में अचानक सूजन"),
            ],
            answer: 1,
            explain: L("Ketosis usually starts quietly — a slight drop in eating and milk, along with tiredness — before it worsens into more dramatic signs.", "కీటోసిస్ సాధారణంగా నిశ్శబ్దంగా మొదలవుతుంది — తినడం మరియు పాలలో కొద్దిగా తగ్గుదల, నీరసంతో పాటు — తర్వాత మరింత తీవ్రమైన లక్షణాలుగా మారుతుంది.", "கீட்டோசிஸ் பொதுவாக அமைதியாகவே தொடங்கும் — உண்ணுதலிலும் பாலிலும் சிறிது குறைவு, சோர்வுடன் — பின்னர் இது மேலும் தீவிரமான அறிகுறிகளாக மோசமடையும்.", "ಕೀಟೋಸಿಸ್ ಸಾಮಾನ್ಯವಾಗಿ ಮೌನವಾಗಿ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ — ತಿನ್ನುವುದು ಮತ್ತು ಹಾಲಿನಲ್ಲಿ ಸ್ವಲ್ಪ ಇಳಿಕೆ, ಆಯಾಸದ ಜೊತೆಗೆ — ನಂತರ ಇದು ಹೆಚ್ಚು ತೀವ್ರ ಲಕ್ಷಣಗಳಾಗಿ ಹದಗೆಡುತ್ತದೆ.", "कीटोसिस आमतौर पर चुपचाप शुरू होता है — खाने और दूध में हल्की कमी, साथ में थकान — इसके बाद ही यह ज़्यादा गंभीर लक्षणों में बदलता है।"),
          },
          {
            type: "truefalse",
            q: L("A cow that is too fat at calving time is at higher risk of Fatty Liver Syndrome.", "ఈనేటప్పుడు మరీ లావుగా ఉన్న ఆవుకు ఫ్యాటీ లివర్ సిండ్రోమ్ ప్రమాదం ఎక్కువ.", "ஈன்ற நேரத்தில் மிக கொழுப்பாக இருக்கும் பசுவுக்கு கொழுப்பு கல்லீரல் நோய்க்குறி ஆபத்து அதிகம்.", "ಕರು ಹಾಕುವ ಸಮಯದಲ್ಲಿ ಬಹಳ ದಪ್ಪವಾಗಿರುವ ಹಸುವಿಗೆ ಫ್ಯಾಟಿ ಲಿವರ್ ಸಿಂಡ್ರೋಮ್ ಅಪಾಯ ಹೆಚ್ಚು.", "ब्याने के समय बहुत मोटी गाय को फैटी लिवर सिंड्रोम का खतरा ज़्यादा होता है।"),
            answer: true,
            explain: L("Yes — cows with a Body Condition Score above 3.5 at calving are much more prone to fatty liver.", "అవును — ఈనేటప్పుడు బాడీ కండిషన్ స్కోర్ 3.5 కంటే ఎక్కువ ఉన్న ఆవులకు ఫ్యాటీ లివర్ వచ్చే అవకాశం చాలా ఎక్కువ.", "ஆம் — ஈன்ற நேரத்தில் உடல் நிலை மதிப்பெண் 3.5-க்கு மேல் இருக்கும் பசுக்களுக்கு கொழுப்பு கல்லீரல் வருவதற்கான வாய்ப்பு அதிகம்.", "ಹೌದು — ಕರು ಹಾಕುವ ಸಮಯದಲ್ಲಿ ಬಾಡಿ ಕಂಡೀಷನ್ ಸ್ಕೋರ್ 3.5ಕ್ಕಿಂತ ಹೆಚ್ಚಿರುವ ಹಸುಗಳಿಗೆ ಫ್ಯಾಟಿ ಲಿವರ್ ಬರುವ ಸಾಧ್ಯತೆ ಹೆಚ್ಚು.", "हाँ — ब्याने के समय बॉडी कंडीशन स्कोर 3.5 से ज़्यादा वाली गायों में फैटी लिवर होने की संभावना कहीं ज़्यादा होती है।"),
          },
        ],
      },
    ],
    finalQuiz: {
      passScore: 70,
      questions: [
        {
          topicId: "t-m7-milkfever-magnesium",
          type: "mcq",
          q: L("Which of these is an EARLY sign of Milk Fever, before the animal goes down?", "పశువు పడిపోకముందు మిల్క్ ఫీవర్‌కు తొలి లక్షణం ఏది?", "விலங்கு விழுவதற்கு முன், பால் காய்ச்சலின் ஆரம்ப அறிகுறி எது?", "ಪ್ರಾಣಿ ಬೀಳುವ ಮೊದಲು, ಮಿಲ್ಕ್ ಫೀವರ್‌ನ ಆರಂಭಿಕ ಲಕ್ಷಣ ಯಾವುದು?", "पशु के गिरने से पहले, मिल्क फीवर का शुरुआती लक्षण कौन सा है?"),
          options: [
            L("Fine trembling, ear twitching, and head bobbing", "సన్నని వణుకు, చెవులు అదరడం, తల ఊపడం", "மெல்லிய நடுக்கம், காது துடிப்பு, தலை ஆட்டுதல்", "ಸಣ್ಣ ನಡುಕ, ಕಿವಿ ಅದುರುವಿಕೆ, ತಲೆ ಆಡಿಸುವಿಕೆ", "हल्की कंपकंपी, कान फड़फड़ाना, सिर हिलाना"),
            L("Complete unconsciousness", "పూర్తిగా స్పృహ కోల్పోవడం", "முழுமையான மயக்கம்", "ಸಂಪೂರ್ಣ ಪ್ರಜ್ಞೆ ತಪ್ಪುವಿಕೆ", "पूरी तरह बेहोश हो जाना"),
            L("Lying flat on its side with no eye reflex", "కంటికి స్పందన లేకుండా పూర్తిగా పక్కకు వాలిపోవడం", "கண் எதிர்வினை இல்லாமல் முழுவதுமாக பக்கவாட்டில் படுத்தல்", "ಕಣ್ಣಿನ ಪ್ರತಿಕ್ರಿಯೆ ಇಲ್ಲದೆ ಸಂಪೂರ್ಣವಾಗಿ ಪಕ್ಕಕ್ಕೆ ಮಲಗುವುದು", "आँख की प्रतिक्रिया के बिना पूरी तरह करवट लेकर लेट जाना"),
            L("A very high body temperature", "చాలా ఎక్కువ శరీర ఉష్ణోగ్రత", "மிக அதிக உடல் வெப்பநிலை", "ಬಹಳ ಹೆಚ್ಚಿನ ದೇಹದ ಉಷ್ಣತೆ", "शरीर का बहुत ज़्यादा तापमान"),
          ],
          answer: 0,
          explain: L("The earliest signs are excitability with fine trembling over the flanks and loins, ear twitching, and head bobbing — well before the animal is unable to stand.", "తొలి లక్షణాలు కంగారు, పార్శ్వాలు మరియు నడుము దగ్గర సన్నని వణుకు, చెవులు అదరడం, తల ఊపడం — పశువు నిలబడలేకపోయే స్థితికి చాలా ముందే కనిపిస్తాయి.", "ஆரம்ப அறிகுறிகள் பதற்றம், விலா மற்றும் இடுப்பு பகுதியில் மெல்லிய நடுக்கம், காது துடிப்பு, தலை ஆட்டுதல் — விலங்கு நிற்க முடியாத நிலைக்கு வெகு காலம் முன்பே தோன்றும்.", "ಆರಂಭಿಕ ಲಕ್ಷಣಗಳೆಂದರೆ ಆತಂಕ, ಪಕ್ಕೆ ಮತ್ತು ಸೊಂಟದ ಬಳಿ ಸಣ್ಣ ನಡುಕ, ಕಿವಿ ಅದುರುವಿಕೆ, ತಲೆ ಆಡಿಸುವಿಕೆ — ಪ್ರಾಣಿ ನಿಲ್ಲಲಾಗದ ಸ್ಥಿತಿಗಿಂತ ಬಹಳ ಮೊದಲೇ ಕಾಣಿಸಿಕೊಳ್ಳುತ್ತವೆ.", "सबसे शुरुआती लक्षण हैं बेचैनी, कमर और बाजू में हल्की कंपकंपी, कान फड़फड़ाना, सिर हिलाना — यह सब पशु के खड़ा न हो पाने की स्थिति से बहुत पहले दिखते हैं।"),
        },
        {
          topicId: "t-m7-milkfever-magnesium",
          type: "truefalse",
          q: L("Hypomagnesaemia can cause an animal to fall with severe convulsions that repeat at short intervals.", "హైపోమాగ్నీసీమియా వల్ల పశువు తరచుగా పునరావృతమయ్యే తీవ్రమైన మూర్ఛలతో పడిపోవచ్చు.", "ஹைபோமேக்னீசீமியா, விலங்கு அடிக்கடி மீண்டும் வரும் கடுமையான வலிப்புடன் விழக் காரணமாகலாம்.", "ಹೈಪೋಮ್ಯಾಗ್ನೀಸೀಮಿಯಾ ಪ್ರಾಣಿಯನ್ನು ಆಗಾಗ ಮರುಕಳಿಸುವ ತೀವ್ರ ಸೆಳೆತಗಳೊಂದಿಗೆ ಬೀಳಿಸಬಹುದು.", "हाइपोमैग्नीसीमिया पशु को बार-बार आने वाले तेज़ दौरों के साथ गिरा सकता है।"),
          answer: true,
          explain: L("Yes — in its sudden form, the animal throws up its head, bellows, gallops, and falls with paddling convulsions that repeat every short while.", "అవును — దీని తీవ్రమైన రూపంలో, పశువు తలను పైకి విసిరి, అరుస్తూ, పరుగెత్తి, కాళ్లు కొట్టుకునే మూర్ఛలతో పడిపోతుంది, ఇది కొద్ది సమయానికి ఒకసారి పునరావృతం అవుతుంది.", "ஆம் — இதன் திடீர் வடிவத்தில், விலங்கு தலையை மேலே தூக்கி, கத்தி, ஓடி, கால் உதைக்கும் வலிப்புடன் விழுகிறது, இது அடிக்கடி மீண்டும் வரும்.", "ಹೌದು — ಇದರ ಹಠಾತ್ ರೂಪದಲ್ಲಿ, ಪ್ರಾಣಿ ತಲೆಯನ್ನು ಮೇಲಕ್ಕೆತ್ತಿ, ಕೂಗುತ್ತಾ, ಓಡಿ, ಕಾಲು ಒದೆಯುವ ಸೆಳೆತಗಳೊಂದಿಗೆ ಬೀಳುತ್ತದೆ, ಇದು ಸ್ವಲ್ಪ ಸಮಯಕ್ಕೊಮ್ಮೆ ಮರುಕಳಿಸುತ್ತದೆ.", "हाँ — इसके अचानक होने वाले रूप में, पशु सिर उठाकर, चिल्लाकर, दौड़कर, पैर पटकने वाले दौरों के साथ गिर जाता है, जो थोड़ी-थोड़ी देर में बार-बार आते हैं।"),
        },
        {
          topicId: "t-m7-ketosis-fattyliver",
          type: "mcq",
          q: L("What Body Condition Score at calving is linked to a LOWER risk of Ketosis and Fatty Liver?", "ఈనేటప్పుడు ఏ బాడీ కండిషన్ స్కోర్ ఉంటే కీటోసిస్ మరియు ఫ్యాటీ లివర్ ప్రమాదం తక్కువగా ఉంటుంది?", "ஈன்ற நேரத்தில் எந்த உடல் நிலை மதிப்பெண் கீட்டோசிஸ் மற்றும் கொழுப்பு கல்லீரல் ஆபத்தை குறைவாக்குகிறது?", "ಕರು ಹಾಕುವ ಸಮಯದಲ್ಲಿ ಯಾವ ಬಾಡಿ ಕಂಡೀಷನ್ ಸ್ಕೋರ್ ಕೀಟೋಸಿಸ್ ಮತ್ತು ಫ್ಯಾಟಿ ಲಿವರ್ ಅಪಾಯವನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ?", "ब्याने के समय कौन सा बॉडी कंडीशन स्कोर कीटोसिस और फैटी लिवर के कम खतरे से जुड़ा है?"),
          options: [L("About 1.0 (very thin)", "సుమారు 1.0 (చాలా సన్నగా)", "சுமார் 1.0 (மிக மெலிந்தது)", "ಸುಮಾರು 1.0 (ಬಹಳ ತೆಳ್ಳಗೆ)", "लगभग 1.0 (बहुत दुबला)"), L("About 3.5", "సుమారు 3.5", "சுமார் 3.5", "ಸುಮಾರು 3.5", "लगभग 3.5"), L("About 5.0 (very fat)", "సుమారు 5.0 (చాలా లావు)", "சுமார் 5.0 (மிக கொழுப்பு)", "ಸುಮಾರು 5.0 (ಬಹಳ ದಪ್ಪ)", "लगभग 5.0 (बहुत मोटा)"), L("Body Condition Score makes no difference", "బాడీ కండిషన్ స్కోర్ వల్ల తేడా ఉండదు", "உடல் நிலை மதிப்பெண் எந்த வித்தியாசத்தையும் ஏற்படுத்தாது", "ಬಾಡಿ ಕಂಡೀಷನ್ ಸ್ಕೋರ್‌ನಿಂದ ಯಾವುದೇ ವ್ಯತ್ಯಾಸವಿಲ್ಲ", "बॉडी कंडीशन स्कोर से कोई फर्क नहीं पड़ता"),],
          answer: 1,
          explain: L("A Body Condition Score of about 3.5 at calving is linked to lower risk — both being too thin and being too fat raise the risk of these problems.", "ఈనేటప్పుడు సుమారు 3.5 బాడీ కండిషన్ స్కోర్ తక్కువ ప్రమాదంతో ముడిపడి ఉంటుంది — మరీ సన్నగా లేదా మరీ లావుగా ఉండటం రెండూ ఈ సమస్యల ప్రమాదాన్ని పెంచుతాయి.", "ஈன்ற நேரத்தில் சுமார் 3.5 உடல் நிலை மதிப்பெண் குறைந்த ஆபத்துடன் தொடர்புடையது — மிக மெலிந்திருப்பதும் மிக கொழுப்பாக இருப்பதும் இந்த பிரச்சினைகளின் ஆபத்தை அதிகரிக்கும்.", "ಕರು ಹಾಕುವ ಸಮಯದಲ್ಲಿ ಸುಮಾರು 3.5 ಬಾಡಿ ಕಂಡೀಷನ್ ಸ್ಕೋರ್ ಕಡಿಮೆ ಅಪಾಯದೊಂದಿಗೆ ಸಂಬಂಧಿಸಿದೆ — ಬಹಳ ತೆಳ್ಳಗಿರುವುದು ಮತ್ತು ಬಹಳ ದಪ್ಪವಾಗಿರುವುದು ಎರಡೂ ಈ ಸಮಸ್ಯೆಗಳ ಅಪಾಯವನ್ನು ಹೆಚ್ಚಿಸುತ್ತವೆ.", "ब्याने के समय लगभग 3.5 का बॉडी कंडीशन स्कोर कम खतरे से जुड़ा है — बहुत दुबला होना और बहुत मोटा होना, दोनों ही इन समस्याओं का खतरा बढ़ाते हैं।"),
        },
        {
          topicId: "t-m7-ketosis-fattyliver",
          type: "truefalse",
          q: L("Fatty Liver Syndrome can be confirmed just by watching the animal, without any test.", "ఫ్యాటీ లివర్ సిండ్రోమ్‌ను ఎలాంటి పరీక్ష లేకుండా కేవలం చూసి నిర్ధారించవచ్చు.", "கொழுப்பு கல்லீரல் நோய்க்குறியை எந்த பரிசோதனையும் இல்லாமல் வெறுமனே பார்த்து உறுதிப்படுத்த முடியும்.", "ಫ್ಯಾಟಿ ಲಿವರ್ ಸಿಂಡ್ರೋಮ್ ಅನ್ನು ಯಾವುದೇ ಪರೀಕ್ಷೆ ಇಲ್ಲದೆ ಕೇವಲ ನೋಡಿ ಖಚಿತಪಡಿಸಬಹುದು.", "फैटी लिवर सिंड्रोम की पुष्टि बिना किसी जांच के, सिर्फ पशु को देखकर की जा सकती है।"),
          answer: false,
          explain: L("No — it can only be confirmed with a blood test. Your role is to notice signs like lower milk yield or poor appetite and report them, not to confirm the disease yourself.", "కాదు — దీన్ని రక్త పరీక్ష ద్వారానే నిర్ధారించగలం. మీ పని పాల దిగుబడి తగ్గడం లేదా ఆకలి తగ్గడం వంటి లక్షణాలను గమనించి తెలియజేయడమే, స్వయంగా వ్యాధిని నిర్ధారించడం కాదు.", "இல்லை — இதை இரத்த பரிசோதனை மூலம் மட்டுமே உறுதிப்படுத்த முடியும். உங்கள் வேலை பால் விளைச்சல் குறைவு அல்லது பசியின்மை போன்ற அறிகுறிகளை கவனித்து தெரிவிப்பது, நோயை நீங்களே உறுதிப்படுத்துவது அல்ல.", "ಇಲ್ಲ — ಇದನ್ನು ರಕ್ತ ಪರೀಕ್ಷೆಯಿಂದ ಮಾತ್ರ ಖಚಿತಪಡಿಸಬಹುದು. ನಿಮ್ಮ ಕೆಲಸ ಕಡಿಮೆ ಹಾಲಿನ ಇಳುವರಿ ಅಥವಾ ಕಡಿಮೆ ಹಸಿವಿನಂತಹ ಲಕ್ಷಣಗಳನ್ನು ಗಮನಿಸಿ ವರದಿ ಮಾಡುವುದು, ರೋಗವನ್ನು ನೀವೇ ಖಚಿತಪಡಿಸುವುದಲ್ಲ.", "नहीं — इसकी पुष्टि केवल खून की जांच से ही हो सकती है। आपका काम दूध उत्पादन में कमी या भूख कम लगने जैसे लक्षण देखकर बताना है, बीमारी की खुद पुष्टि करना नहीं।"),
        },
        {
          topicId: "t-m7-milkfever-magnesium",
          type: "mcq",
          q: L("You notice an animal a day after calving trembling slightly and twitching its ears. What should you do?", "ఈనిన ఒక రోజు తర్వాత పశువు కొద్దిగా వణుకుతూ, చెవులు అదిరిస్తూ ఉండటం మీరు గమనించారు. మీరు ఏమి చేయాలి?", "ஈன்ற ஒரு நாள் கழித்து விலங்கு சிறிதாக நடுங்குவதையும் காதுகளை துடிப்பதையும் நீங்கள் கவனிக்கிறீர்கள். நீங்கள் என்ன செய்ய வேண்டும்?", "ಕರು ಹಾಕಿದ ಒಂದು ದಿನದ ನಂತರ ಪ್ರಾಣಿ ಸ್ವಲ್ಪ ನಡುಗುತ್ತಿರುವುದನ್ನು ಮತ್ತು ಕಿವಿ ಅದುರುತ್ತಿರುವುದನ್ನು ನೀವು ಗಮನಿಸುತ್ತೀರಿ. ನೀವು ಏನು ಮಾಡಬೇಕು?", "ब्याने के एक दिन बाद आप देखते हैं कि पशु हल्का कांप रहा है और कान फड़फड़ा रहा है। आपको क्या करना चाहिए?"),
          options: [
            L("Wait to see if she collapses before telling anyone", "ఆమె పడిపోతుందో లేదో చూడటానికి ఎవరికీ చెప్పకుండా వేచి ఉండండి", "யாருக்கும் சொல்லாமல் அவள் விழுகிறாளா என்று பார்க்க காத்திருங்கள்", "ಅವಳು ಬೀಳುತ್ತಾಳೋ ಎಂದು ನೋಡಲು ಯಾರಿಗೂ ಹೇಳದೆ ಕಾಯಿರಿ", "किसी को बताने से पहले यह देखने के लिए इंतज़ार करें कि वह गिरती है या नहीं"),
            L("Report it the same day, since this can be an early sign of Milk Fever", "అదే రోజు తెలియజేయండి, ఎందుకంటే ఇది మిల్క్ ఫీవర్‌కు తొలి లక్షణం కావచ్చు", "இதே நாளில் தெரிவிக்கவும், ஏனெனில் இது பால் காய்ச்சலின் ஆரம்ப அறிகுறியாக இருக்கலாம்", "ಇದೇ ದಿನ ವರದಿ ಮಾಡಿ, ಏಕೆಂದರೆ ಇದು ಮಿಲ್ಕ್ ಫೀವರ್‌ನ ಆರಂಭಿಕ ಲಕ್ಷಣವಾಗಿರಬಹುದು", "उसी दिन बताएं, क्योंकि यह मिल्क फीवर का शुरुआती लक्षण हो सकता है"),
            L("Milk her completely right away", "వెంటనే ఆమెను పూర్తిగా పితకండి", "உடனடியாக அவளை முழுவதுமாக பால் கறக்கவும்", "ತಕ್ಷಣ ಅವಳನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ಹಾಲು ಕರೆಯಿರಿ", "उसका तुरंत पूरा दूध निकाल लें"),
            L("Do nothing — trembling is always normal after calving", "ఏమీ చేయవద్దు — ఈనిన తర్వాత వణుకు ఎప్పుడూ సాధారణమే", "ஒன்றும் செய்ய வேண்டாம் — ஈன்ற பிறகு நடுக்கம் எப்போதும் இயல்பானது", "ಏನೂ ಮಾಡಬೇಡಿ — ಕರು ಹಾಕಿದ ನಂತರ ನಡುಕ ಯಾವಾಗಲೂ ಸಾಮಾನ್ಯ", "कुछ न करें — ब्याने के बाद कांपना हमेशा सामान्य होता है"),
          ],
          answer: 1,
          explain: L("These are classic early signs of Milk Fever. Reporting immediately gives the vet the best chance to treat it before the animal goes down.", "ఇవి మిల్క్ ఫీవర్‌కు విలక్షణమైన తొలి లక్షణాలు. వెంటనే తెలియజేస్తే పశువు పడిపోకముందే వైద్యుడు చికిత్స చేయడానికి మంచి అవకాశం ఉంటుంది.", "இவை பால் காய்ச்சலின் பொதுவான ஆரம்ப அறிகுறிகள். உடனடியாக தெரிவிப்பது, விலங்கு விழுவதற்கு முன் கால்நடை மருத்துவர் சிகிச்சை அளிக்க சிறந்த வாய்ப்பை அளிக்கும்.", "ಇವು ಮಿಲ್ಕ್ ಫೀವರ್‌ನ ವಿಶಿಷ್ಟ ಆರಂಭಿಕ ಲಕ್ಷಣಗಳು. ತಕ್ಷಣ ವರದಿ ಮಾಡುವುದರಿಂದ ಪ್ರಾಣಿ ಬೀಳುವ ಮೊದಲೇ ಪಶುವೈದ್ಯರಿಗೆ ಚಿಕಿತ್ಸೆ ನೀಡಲು ಉತ್ತಮ ಅವಕಾಶ ಸಿಗುತ್ತದೆ.", "ये मिल्क फीवर के सामान्य शुरुआती लक्षण हैं। तुरंत बताने से डॉक्टर को पशु के गिरने से पहले इलाज करने का सबसे अच्छा मौका मिलता है।"),
        },
      ],
    },
  },

  // ==================================================================
  // LESSON 2 — Problems With the Uterus, Placenta, Udder and Blood
  // ==================================================================
  {
    id: "m7-l2",
    title: L("Problems With the Uterus, Placenta, Udder and Blood", "గర్భాశయం, మావి, పొదుగు మరియు రక్తానికి సంబంధించిన సమస్యలు", "கருப்பை, மாயை, மேமை மற்றும் இரத்தம் தொடர்பான பிரச்சினைகள்", "ಗರ್ಭಕೋಶ, ಮಾಸು, ಕೆಚ್ಚಲು ಮತ್ತು ರಕ್ತಕ್ಕೆ ಸಂಬಂಧಿಸಿದ ಸಮಸ್ಯೆಗಳು", "गर्भाशय, जेर, थन और रक्त से जुड़ी समस्याएँ"),
    estMinutes: 9,
    hook: [
      {
        type: "hero",
        heading: L("Some Problems You Can See With Your Own Eyes", "కొన్ని సమస్యలను మీరు మీ కళ్లతోనే చూడగలరు", "சில பிரச்சினைகளை உங்கள் கண்களால் நேரடியாகப் பார்க்கலாம்", "ಕೆಲವು ಸಮಸ್ಯೆಗಳನ್ನು ನೀವು ನಿಮ್ಮ ಕಣ್ಣುಗಳಿಂದಲೇ ನೋಡಬಹುದು", "कुछ समस्याएँ आप अपनी आँखों से देख सकते हैं"),
        text: L(
          "Not every post-calving problem is about minerals or energy. Some show up as something you can actually see — part of the body coming out where it shouldn't, the afterbirth not coming away, a swollen udder, or strange-coloured urine. This lesson teaches you exactly what to look for, and just as importantly, what NOT to do until the vet arrives.",
          "ఈనిన తర్వాత వచ్చే ప్రతి సమస్యా ఖనిజాలు లేదా శక్తికి సంబంధించినది కాదు. కొన్ని మీరు నిజంగా చూడగలిగే విధంగా కనిపిస్తాయి — శరీరంలోని ఒక భాగం రాకూడని చోటికి రావడం, మావి బయటకు రాకపోవడం, పొదుగు వాచిపోవడం, లేదా మూత్రం విచిత్రమైన రంగులో రావడం. ఈ పాఠం మీరు సరిగ్గా ఏమి గమనించాలో, మరియు అంతే ముఖ్యమైనది — వైద్యుడు వచ్చేవరకు ఏమి చేయకూడదో నేర్పిస్తుంది.",
          "ஈன்ற பிறகு வரும் ஒவ்வொரு பிரச்சினையும் தாதுக்கள் அல்லது ஆற்றல் தொடர்பானது அல்ல. சில உங்களால் நேரடியாகப் பார்க்கக்கூடிய வகையில் தோன்றும் — உடலின் ஒரு பகுதி வரக்கூடாத இடத்தில் வெளியே வருதல், மாயை வெளியேறாதிருத்தல், மேமை வீக்கம், அல்லது விசித்திரமான நிற சிறுநீர். இந்த பாடம் நீங்கள் சரியாக என்ன கவனிக்க வேண்டும் என்பதையும், அதே அளவு முக்கியமான, கால்நடை மருத்துவர் வரும் வரை என்ன செய்யக்கூடாது என்பதையும் கற்பிக்கிறது.",
          "ಕರು ಹಾಕಿದ ನಂತರದ ಪ್ರತಿ ಸಮಸ್ಯೆಯೂ ಖನಿಜ ಅಥವಾ ಶಕ್ತಿಗೆ ಸಂಬಂಧಿಸಿದ್ದಲ್ಲ. ಕೆಲವು ನೀವು ನಿಜವಾಗಿ ನೋಡಬಹುದಾದ ರೀತಿಯಲ್ಲಿ ಕಾಣಿಸಿಕೊಳ್ಳುತ್ತವೆ — ದೇಹದ ಭಾಗ ಬರಬಾರದ ಜಾಗದಲ್ಲಿ ಹೊರಬರುವುದು, ಮಾಸು ಹೊರಬಾರದಿರುವುದು, ಕೆಚ್ಚಲು ಊತ, ಅಥವಾ ವಿಚಿತ್ರ ಬಣ್ಣದ ಮೂತ್ರ. ಈ ಪಾಠ ನೀವು ನಿಖರವಾಗಿ ಏನನ್ನು ಗಮನಿಸಬೇಕು ಎಂಬುದನ್ನೂ, ಅಷ್ಟೇ ಮುಖ್ಯವಾಗಿ, ಪಶುವೈದ್ಯರು ಬರುವವರೆಗೆ ಏನು ಮಾಡಬಾರದು ಎಂಬುದನ್ನೂ ಕಲಿಸುತ್ತದೆ.",
          "ब्याने के बाद की हर समस्या खनिज या ऊर्जा से जुड़ी नहीं होती। कुछ ऐसी होती हैं जिन्हें आप सीधे देख सकते हैं — शरीर का कोई हिस्सा वहाँ आ जाना जहाँ नहीं आना चाहिए, जेर का न निकलना, थन में सूजन, या पेशाब का अजीब रंग। यह पाठ आपको सिखाता है कि बिल्कुल क्या देखना है, और उतना ही ज़रूरी — डॉक्टर के आने तक क्या नहीं करना है।"
        ),
      },
    ],
    topics: [
      {
        id: "t-m7-prolapse-rop",
        title: L("Prolapse of the Uterus and Retention of Placenta", "గర్భాశయం బయటకు రావడం మరియు మావి నిలిచిపోవడం", "கருப்பை வெளியேறுதல் மற்றும் மாயை தங்குதல்", "ಗರ್ಭಕೋಶ ಹೊರಬರುವಿಕೆ ಮತ್ತು ಮಾಸು ಉಳಿಯುವಿಕೆ", "गर्भाशय का बाहर निकलना और जेर का रुक जाना"),
        teach: [
          {
            type: "text",
            heading: L("Two Problems Involving the Womb and the Afterbirth", "గర్భాశయం మరియు మావికి సంబంధించిన రెండు సమస్యలు", "கருப்பை மற்றும் மாயை தொடர்பான இரண்டு பிரச்சினைகள்", "ಗರ್ಭಕೋಶ ಮತ್ತು ಮಾಸಿಗೆ ಸಂಬಂಧಿಸಿದ ಎರಡು ಸಮಸ್ಯೆಗಳು", "गर्भाशय और जेर से जुड़ी दो समस्याएँ"),
            html: L(
              "After a calf is born, two things are supposed to happen inside the mother: her <b>uterus (womb)</b> — the organ where the calf grew — should return to its normal position, and the <b>placenta (afterbirth)</b> — the tissue that fed the calf during pregnancy — should come away naturally on its own. Sometimes neither of these happens the way it should.",
              "దూడ పుట్టిన తర్వాత, తల్లి శరీరంలో రెండు విషయాలు జరగాలి: దూడ పెరిగిన అవయవమైన <b>గర్భాశయం</b> తన సాధారణ స్థానానికి తిరిగి రావాలి, మరియు గర్భధారణ సమయంలో దూడకు పోషణ ఇచ్చిన కణజాలమైన <b>మావి (ఆఫ్టర్‌బర్త్)</b> దానంతట అదే సహజంగా బయటకు రావాలి. కొన్నిసార్లు ఈ రెండూ సరిగ్గా జరగవు.",
              "கன்று பிறந்த பிறகு, தாயின் உடலில் இரண்டு விஷயங்கள் நடக்க வேண்டும்: கன்று வளர்ந்த உறுப்பான <b>கருப்பை</b> அதன் சாதாரண நிலைக்குத் திரும்ப வேண்டும், மற்றும் கர்ப்ப காலத்தில் கன்றுக்கு உணவளித்த திசுவான <b>மாயை (பிந்தைய பிறப்பு)</b> தானாகவே இயற்கையாக வெளியேற வேண்டும். சில நேரங்களில் இவை இரண்டும் சரியாக நடப்பதில்லை.",
              "ಕರು ಹುಟ್ಟಿದ ನಂತರ, ತಾಯಿಯ ದೇಹದಲ್ಲಿ ಎರಡು ವಿಷಯಗಳು ನಡೆಯಬೇಕು: ಕರು ಬೆಳೆದ ಅಂಗವಾದ <b>ಗರ್ಭಕೋಶ</b> ತನ್ನ ಸಾಮಾನ್ಯ ಸ್ಥಾನಕ್ಕೆ ಹಿಂತಿರುಗಬೇಕು, ಮತ್ತು ಗರ್ಭಾವಸ್ಥೆಯಲ್ಲಿ ಕರುವಿಗೆ ಪೋಷಣೆ ನೀಡಿದ ಅಂಗಾಂಶವಾದ <b>ಮಾಸು (ನಂತರದ ಜನನ)</b> ತಾನಾಗಿಯೇ ಸ್ವಾಭಾವಿಕವಾಗಿ ಹೊರಬರಬೇಕು. ಕೆಲವೊಮ್ಮೆ ಇವೆರಡೂ ಸರಿಯಾಗಿ ನಡೆಯುವುದಿಲ್ಲ.",
              "बछड़ा पैदा होने के बाद, माँ के शरीर में दो चीज़ें होनी चाहिए: बछड़ा जिस अंग में बड़ा हुआ वह <b>गर्भाशय</b> अपनी सामान्य स्थिति में वापस आना चाहिए, और गर्भावस्था के दौरान बछड़े को पोषण देने वाला ऊतक <b>जेर (आफ्टरबर्थ)</b> अपने आप स्वाभाविक रूप से बाहर निकल जाना चाहिए। कभी-कभी इनमें से कोई भी सही ढंग से नहीं होता।"
            ),
          },
          {
            type: "glossary",
            term: L("Prolapse of the Uterus", "గర్భాశయం బయటకు రావడం (ప్రొలాప్స్)", "கருப்பை வெளியேறுதல் (ப்ரோலாப்ஸ்)", "ಗರ್ಭಕೋಶ ಹೊರಬರುವಿಕೆ (ಪ್ರೊಲ್ಯಾಪ್ಸ್)", "गर्भाशय का बाहर निकलना (प्रोलैप्स)"),
            meaning: L(
              "This is when the womb turns inside out and comes out of the animal's body, usually visible hanging from behind her. It is more common in buffaloes than in cattle, and can happen either just before or just after calving.",
              "గర్భాశయం లోపలి నుండి బయటికి తిరిగి పశువు శరీరం నుండి బయటకు వచ్చేది దీన్నే అంటారు, సాధారణంగా వెనుక భాగం నుండి వేలాడుతూ కనిపిస్తుంది. ఇది పశువుల కంటే గేదెలలో ఎక్కువగా వస్తుంది, మరియు ఈనేముందు లేదా ఈనిన వెంటనే రావచ్చు.",
              "கருப்பை உள்பக்கம் வெளிப்பக்கமாக மாறி விலங்கின் உடலிலிருந்து வெளியே வருவதை இது குறிக்கிறது, பொதுவாக பின்பக்கத்தில் தொங்குவது தெரியும். இது மாடுகளை விட எருமைகளில் அதிகமாக காணப்படும், மேலும் ஈன்பதற்கு சற்று முன் அல்லது பின் ஏற்படலாம்.",
              "ಗರ್ಭಕೋಶ ಒಳಭಾಗದಿಂದ ಹೊರಭಾಗವಾಗಿ ತಿರುಗಿ ಪ್ರಾಣಿಯ ದೇಹದಿಂದ ಹೊರಬರುವುದನ್ನು ಇದು ಸೂಚಿಸುತ್ತದೆ, ಸಾಮಾನ್ಯವಾಗಿ ಹಿಂಭಾಗದಿಂದ ನೇತಾಡುತ್ತಿರುವುದು ಕಾಣಿಸುತ್ತದೆ. ಇದು ಹಸುಗಳಿಗಿಂತ ಎಮ್ಮೆಗಳಲ್ಲಿ ಹೆಚ್ಚು ಸಾಮಾನ್ಯ, ಮತ್ತು ಕರು ಹಾಕುವ ಸ್ವಲ್ಪ ಮೊದಲು ಅಥವಾ ನಂತರ ಸಂಭವಿಸಬಹುದು.",
              "यह तब होता है जब गर्भाशय अंदर से बाहर पलट जाता है और पशु के शरीर से बाहर आ जाता है, आमतौर पर पीछे से लटकता हुआ दिखता है। यह गायों की तुलना में भैंसों में ज़्यादा होता है, और ब्याने से ठीक पहले या ठीक बाद हो सकता है।"
            ),
          },
          {
            type: "callout",
            style: "warning",
            heading: L("If You See a Prolapse: What NOT to Do", "మీరు ప్రొలాప్స్ చూస్తే: ఏమి చేయకూడదు", "ப்ரோலாப்ஸைப் பார்த்தால்: என்ன செய்யக்கூடாது", "ಪ್ರೊಲ್ಯಾಪ್ಸ್ ಕಂಡರೆ: ಏನು ಮಾಡಬಾರದು", "अगर आपको प्रोलैप्स दिखे: क्या नहीं करना है"),
            text: L(
              "Never try to push the uterus back in yourself, and never pull or remove anything — this can cause severe bleeding. Instead, gently place the exposed part over a clean surface and protect it from dirt, flies, and birds. If it is very soiled, it can be gently washed with a saline (salt-water) solution. Call the vet immediately — this is a genuine emergency. Keeping the animal's hindquarters slightly raised can help while you wait.",
              "గర్భాశయాన్ని మీరే లోపలికి తోయడానికి ప్రయత్నించవద్దు, మరియు దేనినీ లాగవద్దు లేదా తీసివేయవద్దు — దీనివల్ల తీవ్ర రక్తస్రావం కావచ్చు. బదులుగా, బయటకు వచ్చిన భాగాన్ని శుభ్రమైన ఉపరితలంపై మెల్లగా ఉంచి, దుమ్ము, ఈగలు మరియు పక్షుల నుండి రక్షించండి. అది చాలా మురికిగా ఉంటే, సెలైన్ (ఉప్పు నీటి) ద్రావణంతో మెల్లగా కడగవచ్చు. వెంటనే వైద్యుడిని పిలవండి — ఇది నిజమైన అత్యవసర పరిస్థితి. వేచి ఉన్నప్పుడు పశువు వెనుక భాగాన్ని కొద్దిగా పైకి లేపి ఉంచడం సహాయపడుతుంది.",
              "கருப்பையை நீங்களே உள்ளே தள்ள முயற்சிக்க வேண்டாம், மற்றும் எதையும் இழுக்கவோ அகற்றவோ வேண்டாம் — இது கடுமையான இரத்தப்போக்கை ஏற்படுத்தலாம். அதற்கு பதிலாக, வெளியே வந்த பகுதியை சுத்தமான மேற்பரப்பில் மெதுவாக வைத்து, அழுக்கு, ஈக்கள் மற்றும் பறவைகளிடமிருந்து பாதுகாக்கவும். அது மிகவும் அழுக்காக இருந்தால், சலைன் (உப்பு நீர்) கரைசலால் மெதுவாக கழுவலாம். உடனடியாக கால்நடை மருத்துவரை அழைக்கவும் — இது உண்மையான அவசர நிலை. காத்திருக்கும் போது விலங்கின் பின்பக்கத்தை சிறிது உயர்த்தி வைப்பது உதவும்.",
              "ಗರ್ಭಕೋಶವನ್ನು ನೀವೇ ಒಳಗೆ ತಳ್ಳಲು ಪ್ರಯತ್ನಿಸಬೇಡಿ, ಮತ್ತು ಏನನ್ನೂ ಎಳೆಯಬೇಡಿ ಅಥವಾ ತೆಗೆಯಬೇಡಿ — ಇದು ತೀವ್ರ ರಕ್ತಸ್ರಾವಕ್ಕೆ ಕಾರಣವಾಗಬಹುದು. ಬದಲಿಗೆ, ಹೊರಬಂದ ಭಾಗವನ್ನು ಸ್ವಚ್ಛವಾದ ಮೇಲ್ಮೈಯಲ್ಲಿ ನಿಧಾನವಾಗಿ ಇಟ್ಟು, ಕೊಳೆ, ನೊಣಗಳು ಮತ್ತು ಪಕ್ಷಿಗಳಿಂದ ರಕ್ಷಿಸಿ. ಅದು ಬಹಳ ಕೊಳೆಯಾಗಿದ್ದರೆ, ಸಲೈನ್ (ಉಪ್ಪುನೀರು) ದ್ರಾವಣದಿಂದ ನಿಧಾನವಾಗಿ ತೊಳೆಯಬಹುದು. ತಕ್ಷಣ ಪಶುವೈದ್ಯರನ್ನು ಕರೆಯಿರಿ — ಇದು ನಿಜವಾದ ತುರ್ತು ಪರಿಸ್ಥಿತಿ. ಕಾಯುತ್ತಿರುವಾಗ ಪ್ರಾಣಿಯ ಹಿಂಭಾಗವನ್ನು ಸ್ವಲ್ಪ ಎತ್ತಿ ಇಡುವುದು ಸಹಾಯಕವಾಗುತ್ತದೆ.",
              "गर्भाशय को खुद अंदर धकेलने की कोशिश कभी न करें, और कुछ भी खींचे या हटाएं नहीं — इससे भारी रक्तस्राव हो सकता है। इसके बजाय, बाहर आए हिस्से को साफ सतह पर धीरे से रखें और उसे धूल, मक्खियों और पक्षियों से बचाएं। अगर यह बहुत गंदा हो गया हो, तो इसे सलाइन (नमक-पानी) के घोल से धीरे से धोया जा सकता है। तुरंत डॉक्टर को बुलाएं — यह एक असली आपातकाल है। इंतज़ार करते समय पशु के पिछले हिस्से को थोड़ा ऊपर उठाकर रखना मददगार हो सकता है।"
            ),
          },
          {
            type: "glossary",
            term: L("Retention of Placenta (ROP)", "మావి నిలిచిపోవడం (ROP)", "மாயை தங்குதல் (ROP)", "ಮಾಸು ಉಳಿಯುವಿಕೆ (ROP)", "जेर का रुक जाना (ROP)"),
            meaning: L(
              "Normally, the placenta (afterbirth) comes away on its own within 3 to 8 hours of the calf being born. If it is still inside after 12 hours, it is called Retention of Placenta.",
              "సాధారణంగా, దూడ పుట్టిన 3 నుండి 8 గంటల్లోపు మావి దానంతట అదే బయటకు వస్తుంది. 12 గంటల తర్వాత కూడా అది లోపలే ఉంటే, దీన్ని మావి నిలిచిపోవడం (రిటెన్షన్ ఆఫ్ ప్లాసెంటా) అంటారు.",
              "பொதுவாக, கன்று பிறந்த 3 முதல் 8 மணி நேரத்திற்குள் மாயை தானாகவே வெளியேறும். 12 மணி நேரம் கழித்தும் அது உள்ளேயே இருந்தால், அதை மாயை தங்குதல் என்று அழைக்கிறோம்.",
              "ಸಾಮಾನ್ಯವಾಗಿ, ಕರು ಹುಟ್ಟಿದ 3 ರಿಂದ 8 ಗಂಟೆಗಳ ಒಳಗೆ ಮಾಸು ತಾನಾಗಿಯೇ ಹೊರಬರುತ್ತದೆ. 12 ಗಂಟೆಗಳ ನಂತರವೂ ಅದು ಒಳಗೇ ಇದ್ದರೆ, ಅದನ್ನು ಮಾಸು ಉಳಿಯುವಿಕೆ ಎಂದು ಕರೆಯುತ್ತಾರೆ.",
              "आमतौर पर, बछड़ा पैदा होने के 3 से 8 घंटों के भीतर जेर अपने आप बाहर आ जाती है। अगर यह 12 घंटों के बाद भी अंदर रह जाए, तो इसे जेर का रुक जाना कहते हैं।"
            ),
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("Normal timing", "సాధారణ సమయం", "இயல்பான நேரம்", "ಸಾಮಾನ್ಯ ಸಮಯ", "सामान्य समय"),
                text: L("The afterbirth usually comes away naturally within 3–8 hours of birth.", "మావి సాధారణంగా పుట్టిన 3–8 గంటల్లోపు సహజంగా బయటకు వస్తుంది.", "மாயை பொதுவாக பிறந்த 3–8 மணி நேரத்திற்குள் இயற்கையாக வெளியேறும்.", "ಮಾಸು ಸಾಮಾನ್ಯವಾಗಿ ಹುಟ್ಟಿದ 3–8 ಗಂಟೆಗಳ ಒಳಗೆ ಸ್ವಾಭಾವಿಕವಾಗಿ ಹೊರಬರುತ್ತದೆ.", "जेर आमतौर पर जन्म के 3–8 घंटों के भीतर अपने आप निकल जाती है।"),
              },
              {
                label: L("When to treat it as retained", "నిలిచిపోయినట్లుగా ఎప్పుడు పరిగణించాలి", "தங்கியிருப்பதாக எப்போது கருத வேண்டும்", "ಉಳಿದಿದೆ ಎಂದು ಯಾವಾಗ ಪರಿಗಣಿಸಬೇಕು", "इसे रुका हुआ कब मानें"),
                text: L("If it is still inside 12 hours after the calf is born, report it as a possible Retention of Placenta.", "దూడ పుట్టిన 12 గంటల తర్వాత కూడా అది లోపలే ఉంటే, దీన్ని మావి నిలిచిపోయిందని అనుమానించి తెలియజేయండి.", "கன்று பிறந்த 12 மணி நேரம் கழித்தும் அது உள்ளேயே இருந்தால், மாயை தங்கியிருக்கலாம் என தெரிவிக்கவும்.", "ಕರು ಹುಟ್ಟಿದ 12 ಗಂಟೆಗಳ ನಂತರವೂ ಅದು ಒಳಗೇ ಇದ್ದರೆ, ಮಾಸು ಉಳಿದಿರಬಹುದು ಎಂದು ವರದಿ ಮಾಡಿ.", "अगर बछड़ा पैदा होने के 12 घंटे बाद भी यह अंदर रह जाए, तो इसे जेर रुकने की संभावना मानकर बताएं।"),
              },
              {
                label: L("What raises the risk", "ఏది ప్రమాదాన్ని పెంచుతుంది", "ஆபத்தை அதிகரிப்பது எது", "ಅಪಾಯವನ್ನು ಹೆಚ್ಚಿಸುವುದೇನು", "खतरा किससे बढ़ता है"),
                text: L("A difficult birth, twins, abortion, an induced calving, infection, poor nutrition, or the animal having had Milk Fever.", "కష్టమైన ప్రసవం, కవలలు, గర్భస్రావం, ప్రేరేపిత ఈత, ఇన్ఫెక్షన్, సరైన పోషణ లేకపోవడం, లేదా పశువుకు మిల్క్ ఫీవర్ వచ్చి ఉండటం.", "கடினமான பிரசவம், இரட்டைக் குட்டிகள், கருச்சிதைவு, தூண்டப்பட்ட ஈன்றல், தொற்று, மோசமான ஊட்டச்சத்து, அல்லது விலங்குக்கு பால் காய்ச்சல் வந்திருந்தது.", "ಕಷ್ಟಕರ ಹೆರಿಗೆ, ಅವಳಿ ಕರುಗಳು, ಗರ್ಭಪಾತ, ಪ್ರೇರಿತ ಕರು ಹಾಕುವಿಕೆ, ಸೋಂಕು, ಕಳಪೆ ಪೋಷಣೆ, ಅಥವಾ ಪ್ರಾಣಿಗೆ ಮಿಲ್ಕ್ ಫೀವರ್ ಬಂದಿದ್ದದ್ದು.", "मुश्किल प्रसव, जुड़वां बच्चे, गर्भपात, कृत्रिम रूप से कराया गया ब्याना, संक्रमण, खराब पोषण, या पशु को पहले मिल्क फीवर हुआ होना।"),
              },
            ],
          },
          {
            type: "callout",
            style: "warning",
            heading: L("Never Pull It Out Yourself", "దాన్ని మీరే ఎప్పుడూ లాగవద్దు", "அதை நீங்களே ஒருபோதும் இழுக்க வேண்டாம்", "ಅದನ್ನು ನೀವೇ ಎಂದಿಗೂ ಎಳೆಯಬೇಡಿ", "इसे कभी खुद मत खींचें"),
            text: L(
              "Pulling on a retained placenta yourself can cause serious complications — including infection of the womb (metritis) and blood poisoning (septicaemia) — which can even lead to the animal's death. Always consult a veterinarian instead. If a placenta is removed, dispose of it by deep burial, and avoid handling it with bare hands.",
              "నిలిచిపోయిన మావిని మీరే లాగడం వల్ల గర్భాశయ ఇన్ఫెక్షన్ (మెట్రైటిస్) మరియు రక్త విషప్రయోగం (సెప్టిసీమియా) వంటి తీవ్రమైన సమస్యలు రావచ్చు — ఇవి పశువు మరణానికి కూడా దారితీయవచ్చు. ఎల్లప్పుడూ వైద్యుడిని సంప్రదించండి. మావిని తీసివేసినప్పుడు, దాన్ని లోతుగా పాతిపెట్టి పారవేయండి, మరియు దాన్ని చేతులతో నేరుగా తాకవద్దు.",
              "தங்கியிருக்கும் மாயையை நீங்களே இழுப்பது கருப்பை தொற்று (மெட்ரைடிஸ்) மற்றும் இரத்த நச்சுத்தன்மை (செப்டிசீமியா) போன்ற கடுமையான சிக்கல்களை ஏற்படுத்தலாம் — இவை விலங்கின் மரணத்திற்கும் வழிவகுக்கலாம். எப்போதும் கால்நடை மருத்துவரை அணுகவும். மாயை அகற்றப்பட்டால், அதை ஆழமாகப் புதைத்து அகற்றவும், வெறும் கைகளால் தொடுவதைத் தவிர்க்கவும்.",
              "ಉಳಿದಿರುವ ಮಾಸನ್ನು ನೀವೇ ಎಳೆಯುವುದರಿಂದ ಗರ್ಭಕೋಶ ಸೋಂಕು (ಮೆಟ್ರೈಟಿಸ್) ಮತ್ತು ರಕ್ತ ವಿಷಮಯತೆ (ಸೆಪ್ಟಿಸೀಮಿಯಾ) ಮುಂತಾದ ಗಂಭೀರ ತೊಡಕುಗಳು ಬರಬಹುದು — ಇವು ಪ್ರಾಣಿಯ ಸಾವಿಗೂ ಕಾರಣವಾಗಬಹುದು. ಯಾವಾಗಲೂ ಪಶುವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಿ. ಮಾಸನ್ನು ತೆಗೆದರೆ, ಅದನ್ನು ಆಳವಾಗಿ ಹೂತು ವಿಲೇವಾರಿ ಮಾಡಿ, ಬರಿಗೈಯಿಂದ ಮುಟ್ಟುವುದನ್ನು ತಪ್ಪಿಸಿ.",
              "रुकी हुई जेर को खुद खींचने से गर्भाशय में संक्रमण (मेट्राइटिस) और खून में ज़हर फैलना (सेप्टिसीमिया) जैसी गंभीर जटिलताएँ हो सकती हैं — जो पशु की मौत तक का कारण बन सकती हैं। हमेशा डॉक्टर से सलाह लें। अगर जेर निकाली जाए, तो उसे गहरा गड्ढा खोदकर दबा दें, और इसे नंगे हाथों से न छुएं।"
            ),
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("You see part of the womb hanging out of an animal after calving. What should you do first?", "ఈనిన తర్వాత పశువు నుండి గర్భాశయం కొంత భాగం వేలాడుతూ మీరు చూశారు. మీరు ముందుగా ఏమి చేయాలి?", "ஈன்ற பிறகு விலங்கிலிருந்து கருப்பையின் ஒரு பகுதி தொங்குவதை நீங்கள் பார்க்கிறீர்கள். முதலில் நீங்கள் என்ன செய்ய வேண்டும்?", "ಕರು ಹಾಕಿದ ನಂತರ ಪ್ರಾಣಿಯಿಂದ ಗರ್ಭಕೋಶದ ಭಾಗ ನೇತಾಡುತ್ತಿರುವುದನ್ನು ನೀವು ನೋಡುತ್ತೀರಿ. ಮೊದಲು ನೀವು ಏನು ಮಾಡಬೇಕು?", "ब्याने के बाद आप देखते हैं कि पशु से गर्भाशय का हिस्सा लटक रहा है। आपको सबसे पहले क्या करना चाहिए?"),
            options: [
              L("Push it back in yourself", "మీరే దాన్ని లోపలికి తోయండి", "நீங்களே அதை உள்ளே தள்ளுங்கள்", "ನೀವೇ ಅದನ್ನು ಒಳಗೆ ತಳ್ಳಿ", "इसे खुद अंदर धकेल दें"),
              L("Gently protect it from dirt and flies, and call the vet immediately", "దానిని మెల్లగా దుమ్ము మరియు ఈగల నుండి రక్షించి, వెంటనే వైద్యుడిని పిలవండి", "அதை மெதுவாக அழுக்கு மற்றும் ஈக்களிடமிருந்து பாதுகாத்து, உடனே கால்நடை மருத்துவரை அழைக்கவும்", "ಅದನ್ನು ನಿಧಾನವಾಗಿ ಕೊಳೆ ಮತ್ತು ನೊಣಗಳಿಂದ ರಕ್ಷಿಸಿ, ತಕ್ಷಣ ಪಶುವೈದ್ಯರನ್ನು ಕರೆಯಿರಿ", "इसे धूल और मक्खियों से धीरे से बचाएं, और तुरंत डॉक्टर को बुलाएं"),
              L("Pull on it to see how far it comes out", "అది ఎంత దూరం వస్తుందో చూడటానికి దానిని లాగండి", "எவ்வளவு தூரம் வெளியே வருகிறது என்று பார்க்க அதை இழுக்கவும்", "ಅದು ಎಷ್ಟು ಹೊರಬರುತ್ತದೆ ಎಂದು ನೋಡಲು ಅದನ್ನು ಎಳೆಯಿರಿ", "यह कितना बाहर आता है यह देखने के लिए इसे खींचें"),
              L("Ignore it — it will go back in on its own", "దీన్ని పట్టించుకోవద్దు — అది దానంతటదే లోపలికి వెళుతుంది", "இதை புறக்கணிக்கவும் — அது தானாகவே உள்ளே செல்லும்", "ಇದನ್ನು ನಿರ್ಲಕ್ಷಿಸಿ — ಅದು ತಾನಾಗಿಯೇ ಒಳಗೆ ಹೋಗುತ್ತದೆ", "इसे नज़रअंदाज़ करें — यह अपने आप अंदर चला जाएगा"),
            ],
            answer: 1,
            explain: L("Never push, pull, or remove anything yourself — that can cause severe bleeding. Protect the exposed part and get the vet immediately.", "మీరే ఎప్పుడూ తోయవద్దు, లాగవద్దు, లేదా తీసివేయవద్దు — దీనివల్ల తీవ్ర రక్తస్రావం కావచ్చు. బయటపడిన భాగాన్ని రక్షించి వెంటనే వైద్యుడిని పిలవండి.", "நீங்களே ஒருபோதும் தள்ளவோ, இழுக்கவோ, அகற்றவோ வேண்டாம் — இது கடுமையான இரத்தப்போக்கை ஏற்படுத்தலாம். வெளியே வந்த பகுதியை பாதுகாத்து உடனே கால்நடை மருத்துவரை அழைக்கவும்.", "ನೀವೇ ಎಂದಿಗೂ ತಳ್ಳಬೇಡಿ, ಎಳೆಯಬೇಡಿ, ಅಥವಾ ತೆಗೆಯಬೇಡಿ — ಇದು ತೀವ್ರ ರಕ್ತಸ್ರಾವಕ್ಕೆ ಕಾರಣವಾಗಬಹುದು. ಹೊರಬಂದ ಭಾಗವನ್ನು ರಕ್ಷಿಸಿ ತಕ್ಷಣ ಪಶುವೈದ್ಯರನ್ನು ಕರೆಯಿರಿ.", "खुद कभी न धकेलें, न खींचें, न हटाएं — इससे भारी रक्तस्राव हो सकता है। बाहर आए हिस्से को बचाएं और तुरंत डॉक्टर को बुलाएं।"),
          },
          {
            type: "truefalse",
            q: L("If the placenta hasn't come away 12 hours after calving, it should be treated as retained and reported.", "ఈనిన 12 గంటల తర్వాత కూడా మావి బయటకు రాకపోతే, దానిని నిలిచిపోయినదిగా పరిగణించి తెలియజేయాలి.", "ஈன்ற 12 மணி நேரம் கழித்தும் மாயை வெளியேறவில்லை என்றால், அதை தங்கியிருப்பதாகக் கருதி தெரிவிக்க வேண்டும்.", "ಕರು ಹಾಕಿದ 12 ಗಂಟೆಗಳ ನಂತರವೂ ಮಾಸು ಹೊರಬಾರದಿದ್ದರೆ, ಅದನ್ನು ಉಳಿದಿದೆ ಎಂದು ಪರಿಗಣಿಸಿ ವರದಿ ಮಾಡಬೇಕು.", "अगर ब्याने के 12 घंटे बाद भी जेर न निकले, तो इसे रुकी हुई मानकर बताना चाहिए।"),
            answer: true,
            explain: L("Correct — normal expulsion is within 3–8 hours. Still being inside after 12 hours is called Retention of Placenta and needs a vet.", "సరైనది — సాధారణ బహిష్కరణ 3–8 గంటల్లోపు జరుగుతుంది. 12 గంటల తర్వాత కూడా లోపలే ఉంటే దీన్ని మావి నిలిచిపోవడం అంటారు, దీనికి వైద్యుడు అవసరం.", "சரி — இயல்பான வெளியேற்றம் 3–8 மணி நேரத்திற்குள் நடக்கும். 12 மணி நேரம் கழித்தும் உள்ளேயே இருப்பது மாயை தங்குதல் எனப்படும், இதற்கு கால்நடை மருத்துவர் தேவை.", "ಸರಿ — ಸಾಮಾನ್ಯ ಹೊರಹಾಕುವಿಕೆ 3–8 ಗಂಟೆಗಳ ಒಳಗೆ ನಡೆಯುತ್ತದೆ. 12 ಗಂಟೆಗಳ ನಂತರವೂ ಒಳಗೇ ಇರುವುದನ್ನು ಮಾಸು ಉಳಿಯುವಿಕೆ ಎನ್ನುತ್ತಾರೆ, ಇದಕ್ಕೆ ಪಶುವೈದ್ಯರ ಅಗತ್ಯವಿದೆ.", "सही — सामान्य रूप से यह 3–8 घंटों में निकल जाती है। 12 घंटे बाद भी अंदर रहना जेर का रुक जाना कहलाता है और इसके लिए डॉक्टर की ज़रूरत होती है।"),
          },
        ],
      },
      {
        id: "t-m7-udder-hgb",
        title: L("Udder Swelling and Discoloured Urine", "పొదుగు వాపు మరియు రంగు మారిన మూత్రం", "மேமை வீக்கம் மற்றும் நிறம் மாறிய சிறுநீர்", "ಕೆಚ್ಚಲು ಊತ ಮತ್ತು ಬಣ್ಣ ಬದಲಾದ ಮೂತ್ರ", "थन में सूजन और रंग बदला हुआ पेशाब"),
        teach: [
          {
            type: "text",
            heading: L("Other Things to Watch For After Calving", "ఈనిన తర్వాత గమనించాల్సిన ఇతర విషయాలు", "ஈன்ற பிறகு கவனிக்க வேண்டிய மற்ற விஷயங்கள்", "ಕರು ಹಾಕಿದ ನಂತರ ಗಮನಿಸಬೇಕಾದ ಇತರ ವಿಷಯಗಳು", "ब्याने के बाद ध्यान रखने वाली अन्य बातें"),
            html: L(
              "Two more problems can appear around calving time: swelling of the udder, and urine that looks an unusual colour. Neither of these is something you need to diagnose — but both are worth noticing and reporting.",
              "ఈనే సమయంలో ఇంకా రెండు సమస్యలు రావచ్చు: పొదుగు వాపు, మరియు అసాధారణ రంగులో కనిపించే మూత్రం. వీటిలో దేనినీ మీరు నిర్ధారించాల్సిన అవసరం లేదు — కానీ రెండూ గమనించి తెలియజేయదగినవి.",
              "ஈன்றெடுக்கும் நேரத்தில் இன்னும் இரண்டு பிரச்சினைகள் ஏற்படலாம்: மேமை வீக்கம், மற்றும் அசாதாரண நிறத்தில் தோன்றும் சிறுநீர். இவற்றில் எதையும் நீங்கள் கண்டறிய வேண்டியதில்லை — ஆனால் இரண்டும் கவனித்து தெரிவிக்கத் தகுந்தவை.",
              "ಕರು ಹಾಕುವ ಸಮಯದಲ್ಲಿ ಇನ್ನೂ ಎರಡು ಸಮಸ್ಯೆಗಳು ಬರಬಹುದು: ಕೆಚ್ಚಲು ಊತ, ಮತ್ತು ಅಸಾಮಾನ್ಯ ಬಣ್ಣದಲ್ಲಿ ಕಾಣುವ ಮೂತ್ರ. ಇವುಗಳಲ್ಲಿ ಯಾವುದನ್ನೂ ನೀವು ಪತ್ತೆಹಚ್ಚಬೇಕಾಗಿಲ್ಲ — ಆದರೆ ಎರಡನ್ನೂ ಗಮನಿಸಿ ವರದಿ ಮಾಡುವುದು ಮುಖ್ಯ.",
              "ब्याने के समय दो और समस्याएँ हो सकती हैं: थन में सूजन, और असामान्य रंग का दिखने वाला पेशाब। इनमें से किसी की भी पहचान आपको खुद करने की ज़रूरत नहीं है — लेकिन दोनों को देखकर बताना ज़रूरी है।"
            ),
          },
          {
            type: "glossary",
            term: L("Oedema (Swelling)", "ఎడెమా (వాపు)", "வீக்கம் (ஓடீமா)", "ಎಡಿಮಾ (ಊತ)", "एडिमा (सूजन)"),
            meaning: L("A build-up of extra fluid under the skin, which makes the area look puffy or swollen.", "చర్మం కింద అదనపు ద్రవం పేరుకుపోవడం, దీనివల్ల ఆ ప్రాంతం ఉబ్బినట్లు లేదా వాచినట్లు కనిపిస్తుంది.", "தோலுக்கு அடியில் அதிகப்படியான திரவம் சேர்வது, இது அந்த பகுதியை வீங்கியதாகவோ புடைத்ததாகவோ காட்டும்.", "ಚರ್ಮದ ಕೆಳಗೆ ಹೆಚ್ಚುವರಿ ದ್ರವ ಸಂಗ್ರಹವಾಗುವುದು, ಇದರಿಂದ ಆ ಭಾಗ ಉಬ್ಬಿದಂತೆ ಅಥವಾ ಊದಿಕೊಂಡಂತೆ ಕಾಣುತ್ತದೆ.", "त्वचा के नीचे अतिरिक्त तरल पदार्थ जमा होना, जिससे वह जगह फूली हुई या सूजी हुई दिखती है।"),
          },
          {
            type: "text",
            heading: L("Udder Oedema", "పొదుగు ఎడెమా", "மேமை வீக்கம்", "ಕೆಚ್ಚಲು ಎಡಿಮಾ", "थन का एडिमा"),
            html: L(
              "This is a build-up of extra fluid in the udder — and sometimes the belly — around calving time, caused by changes in blood flow to and from the udder. It is more common in high-producing animals, especially in heifers (animals calving for the first time). It can persist through the whole lactation, and may need a vet's attention if the swelling makes milking difficult.",
              "ఈనే సమయంలో పొదుగులో — మరియు కొన్నిసార్లు పొట్టలో — అదనపు ద్రవం పేరుకుపోవడమే ఇది, పొదుగుకు రక్త ప్రసరణలో మార్పుల వల్ల ఇది వస్తుంది. ఎక్కువ పాలిచ్చే పశువులలో, ముఖ్యంగా మొదటిసారి ఈనే పశువులలో (హీఫర్లు) ఇది ఎక్కువగా కనిపిస్తుంది. ఇది మొత్తం పాల కాలం పొడవునా ఉండవచ్చు, మరియు వాపు వల్ల పితకడం కష్టమైతే వైద్యుడి సహాయం అవసరం కావచ్చు.",
              "ஈன்றெடுக்கும் நேரத்தில் மேமையில் — சில நேரங்களில் வயிற்றிலும் — அதிகப்படியான திரவம் சேர்வதே இது, மேமைக்கு இரத்த ஓட்டத்தில் ஏற்படும் மாற்றங்களால் இது ஏற்படுகிறது. அதிக பால் தரும் விலங்குகளில், குறிப்பாக முதல் முறையாக ஈனும் இளம் பசுக்களில் இது அதிகமாக காணப்படுகிறது. இது முழு பால் காலம் முழுவதும் தொடரலாம், வீக்கம் பால் கறத்தலை கடினமாக்கினால் கால்நடை மருத்துவர் கவனம் தேவைப்படலாம்.",
              "ಈನ್ ಸಮಯದಲ್ಲಿ ಕೆಚ್ಚಲಿನಲ್ಲಿ — ಕೆಲವೊಮ್ಮೆ ಹೊಟ್ಟೆಯಲ್ಲೂ — ಹೆಚ್ಚುವರಿ ದ್ರವ ಸಂಗ್ರಹವಾಗುವುದೇ ಇದು, ಕೆಚ್ಚಲಿಗೆ ರಕ್ತ ಪರಿಚಲನೆಯಲ್ಲಿ ಬದಲಾವಣೆಗಳಿಂದ ಇದು ಉಂಟಾಗುತ್ತದೆ. ಹೆಚ್ಚು ಹಾಲು ಕೊಡುವ ಪ್ರಾಣಿಗಳಲ್ಲಿ, ವಿಶೇಷವಾಗಿ ಮೊದಲ ಬಾರಿ ಕರು ಹಾಕುವ ಪ್ರಾಣಿಗಳಲ್ಲಿ (ಹೀಫರ್) ಇದು ಹೆಚ್ಚು ಸಾಮಾನ್ಯ. ಇದು ಇಡೀ ಹಾಲುಕರೆಯುವ ಅವಧಿಯುದ್ದಕ್ಕೂ ಮುಂದುವರಿಯಬಹುದು, ಮತ್ತು ಊತ ಹಾಲು ಕರೆಯುವುದನ್ನು ಕಷ್ಟಕರಗೊಳಿಸಿದರೆ ಪಶುವೈದ್ಯರ ಗಮನ ಬೇಕಾಗಬಹುದು.",
              "ब्याने के समय थन में — और कभी-कभी पेट में — अतिरिक्त तरल पदार्थ जमा होना, थन में खून के आने-जाने में बदलाव के कारण होता है। यह ज़्यादा दूध देने वाले पशुओं में, खासकर पहली बार ब्याने वाली बछियों में ज़्यादा होता है। यह पूरे दुग्धकाल तक बना रह सकता है, और अगर सूजन से दूध निकालना मुश्किल हो जाए तो डॉक्टर की ज़रूरत पड़ सकती है।"
            ),
          },
          {
            type: "callout",
            style: "tip",
            heading: L("An Important Difference: Not Painful, Not Hot", "ఒక ముఖ్యమైన తేడా: నొప్పి ఉండదు, వేడిమి ఉండదు", "ஒரு முக்கிய வேறுபாடு: வலி இல்லை, சூடு இல்லை", "ಒಂದು ಪ್ರಮುಖ ವ್ಯತ್ಯಾಸ: ನೋವಿಲ್ಲ, ಬಿಸಿಯಿಲ್ಲ", "एक ज़रूरी फर्क: दर्द नहीं, गर्मी नहीं"),
            text: L(
              "With udder oedema, the udder is NOT painful and NOT hot to the touch. This matters because a hot, painful udder points to a different problem entirely (an infection of the udder). Either way, report what you actually feel — whether the udder is painful and hot, or just swollen and comfortable — since that detail helps the vet know what they're dealing with before they even arrive.",
              "పొదుగు ఎడెమాలో, పొదుగు తాకినప్పుడు నొప్పి ఉండదు మరియు వేడిగా ఉండదు. ఇది ముఖ్యం ఎందుకంటే వేడిగా, నొప్పిగా ఉన్న పొదుగు పూర్తిగా వేరే సమస్యను (పొదుగు ఇన్ఫెక్షన్) సూచిస్తుంది. ఏదైనా సరే, మీరు నిజంగా అనుభవించేది తెలియజేయండి — పొదుగు నొప్పిగా వేడిగా ఉందా, లేక కేవలం వాచి సౌకర్యంగా ఉందా — ఎందుకంటే ఈ వివరం వైద్యుడు రాకముందే తను దేనితో వ్యవహరిస్తున్నాడో తెలుసుకోవడానికి సహాయపడుతుంది.",
              "மேமை வீக்கத்தில், மேமை தொட்டால் வலியோ சூடோ இருக்காது. இது முக்கியம் ஏனெனில் சூடான, வலியுள்ள மேமை முற்றிலும் வேறு பிரச்சினையை (மேமை தொற்று) குறிக்கிறது. எப்படியிருந்தாலும், நீங்கள் உண்மையில் உணர்வதை தெரிவிக்கவும் — மேமை வலியுடனும் சூடாகவும் இருக்கிறதா, அல்லது வெறுமனே வீங்கி வசதியாக இருக்கிறதா — ஏனெனில் இந்த விவரம் கால்நடை மருத்துவர் வருவதற்கு முன்பே அவர் என்ன எதிர்கொள்கிறார் என்பதை தெரிந்துகொள்ள உதவும்.",
              "ಕೆಚ್ಚಲು ಎಡಿಮಾದಲ್ಲಿ, ಕೆಚ್ಚಲು ಮುಟ್ಟಿದಾಗ ನೋವು ಅಥವಾ ಬಿಸಿ ಇರುವುದಿಲ್ಲ. ಇದು ಮುಖ್ಯ ಏಕೆಂದರೆ ಬಿಸಿಯಾದ, ನೋವಿನ ಕೆಚ್ಚಲು ಸಂಪೂರ್ಣವಾಗಿ ಬೇರೆ ಸಮಸ್ಯೆಯನ್ನು (ಕೆಚ್ಚಲು ಸೋಂಕು) ಸೂಚಿಸುತ್ತದೆ. ಏನೇ ಆಗಲಿ, ನೀವು ನಿಜವಾಗಿ ಅನುಭವಿಸುವುದನ್ನು ವರದಿ ಮಾಡಿ — ಕೆಚ್ಚಲು ನೋವಿನಿಂದ ಬಿಸಿಯಾಗಿದೆಯೇ, ಅಥವಾ ಬರೀ ಊದಿಕೊಂಡು ಆರಾಮವಾಗಿದೆಯೇ — ಏಕೆಂದರೆ ಈ ವಿವರ ಪಶುವೈದ್ಯರು ಬರುವ ಮೊದಲೇ ಅವರು ಏನನ್ನು ಎದುರಿಸುತ್ತಿದ್ದಾರೆ ಎಂದು ತಿಳಿಯಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
              "थन के एडिमा में, थन को छूने पर न दर्द होता है न गर्माहट। यह मायने रखता है क्योंकि गर्म, दर्द भरा थन बिल्कुल अलग समस्या (थन का संक्रमण) की ओर इशारा करता है। जो भी हो, आप जो असल में महसूस करें वही बताएं — थन दर्द भरा और गर्म है, या बस सूजा हुआ और आरामदायक है — क्योंकि यह जानकारी डॉक्टर को पहुँचने से पहले ही समझने में मदद करती है कि वे किस समस्या से जूझ रहे हैं।"
            ),
          },
          {
            type: "glossary",
            term: L("Haemoglobinuria", "హీమోగ్లోబినూరియా", "ஹீமோகுளோபினூரியா", "ಹಿಮೋಗ್ಲೋಬಿನ್ಯೂರಿಯಾ", "हीमोग्लोबिन्यूरिया"),
            meaning: L(
              "A reddish blood pigment appearing in the urine, which makes the urine look dark red or brownish, rather than its normal colour.",
              "మూత్రంలో ఎర్రటి రక్త వర్ణద్రవ్యం కనిపించడం, దీనివల్ల మూత్రం సాధారణ రంగుకు బదులుగా ముదురు ఎరుపు లేదా గోధుమ రంగులో కనిపిస్తుంది.",
              "சிறுநீரில் சிவப்பு இரத்த நிறமி தோன்றுவது, இதனால் சிறுநீர் இயல்பான நிறத்திற்கு பதிலாக அடர் சிவப்பு அல்லது பழுப்பு நிறமாக தோன்றும்.",
              "ಮೂತ್ರದಲ್ಲಿ ಕೆಂಪು ರಕ್ತ ವರ್ಣದ್ರವ್ಯ ಕಾಣಿಸಿಕೊಳ್ಳುವುದು, ಇದರಿಂದ ಮೂತ್ರ ಸಾಮಾನ್ಯ ಬಣ್ಣಕ್ಕೆ ಬದಲಾಗಿ ಗಾಢ ಕೆಂಪು ಅಥವಾ ಕಂದು ಬಣ್ಣದಲ್ಲಿ ಕಾಣುತ್ತದೆ.",
              "पेशाब में लाल रंग का खून का रंगद्रव्य दिखना, जिससे पेशाब सामान्य रंग की बजाय गहरे लाल या भूरे रंग का दिखता है।"
            ),
          },
          {
            type: "text",
            heading: L("Post-Parturient Haemoglobinuria", "పోస్ట్-పార్చురియంట్ హీమోగ్లోబినూరియా", "பிரசவத்திற்கு பிந்தைய ஹீமோகுளோபினூரியா", "ಹೆರಿಗೆಯ ನಂತರದ ಹಿಮೋಗ್ಲೋಬಿನ್ಯೂರಿಯಾ", "प्रसव के बाद का हीमोग्लोबिन्यूरिया"),
            html: L(
              "This problem can appear around calving, especially in heavy-milking animals. Along with dark, reddish urine, watch for a marked drop in milk production, fever, loose dung, and general weakness with a pale appearance — signs of severe anaemia (a shortage of healthy blood). Because some other diseases can look similar, the vet will need to examine the animal to be sure what's causing it.",
              "ఈ సమస్య ఈనే సమయంలో, ముఖ్యంగా ఎక్కువ పాలిచ్చే పశువులలో రావచ్చు. ముదురు, ఎరుపు రంగు మూత్రంతో పాటు, పాల ఉత్పత్తిలో గణనీయమైన తగ్గుదల, జ్వరం, వదులుగా ఉన్న పేడ, మరియు లేత రంగుతో సాధారణ బలహీనత — ఇవి తీవ్రమైన రక్తహీనత (ఆరోగ్యకరమైన రక్తం లేకపోవడం) లక్షణాలు — గమనించండి. ఇతర కొన్ని వ్యాధులు కూడా ఇలాగే కనిపించవచ్చు కాబట్టి, కారణం ఖచ్చితంగా తెలుసుకోవడానికి వైద్యుడు పశువును పరీక్షించాల్సి ఉంటుంది.",
              "இந்த பிரச்சினை ஈன்றெடுக்கும் நேரத்தில், குறிப்பாக அதிக பால் தரும் விலங்குகளில் ஏற்படலாம். அடர், சிவப்பு நிற சிறுநீருடன், பால் உற்பத்தியில் குறிப்பிடத்தக்க குறைவு, காய்ச்சல், தளர்வான சாணம், மற்றும் வெளிர் தோற்றத்துடன் பொதுவான பலவீனம் — கடுமையான இரத்த சோகையின் (ஆரோக்கியமான இரத்தத்தின் பற்றாக்குறை) அறிகுறிகளை கவனிக்கவும். வேறு சில நோய்களும் இதுபோலவே தோன்றக்கூடும் என்பதால், காரணத்தை உறுதிசெய்ய கால்நடை மருத்துவர் விலங்கை பரிசோதிக்க வேண்டும்.",
              "ಈ ಸಮಸ್ಯೆ ಕರು ಹಾಕುವ ಸಮಯದಲ್ಲಿ, ವಿಶೇಷವಾಗಿ ಹೆಚ್ಚು ಹಾಲು ಕೊಡುವ ಪ್ರಾಣಿಗಳಲ್ಲಿ ಕಾಣಿಸಿಕೊಳ್ಳಬಹುದು. ಗಾಢ, ಕೆಂಪು ಬಣ್ಣದ ಮೂತ್ರದ ಜೊತೆಗೆ, ಹಾಲಿನ ಉತ್ಪಾದನೆಯಲ್ಲಿ ಗಮನಾರ್ಹ ಇಳಿಕೆ, ಜ್ವರ, ಸಡಿಲ ಸಗಣಿ, ಮತ್ತು ಬಿಳಿಚಿಕೊಂಡ ಸಾಮಾನ್ಯ ದೌರ್ಬಲ್ಯ — ತೀವ್ರ ರಕ್ತಹೀನತೆಯ (ಆರೋಗ್ಯಕರ ರಕ್ತದ ಕೊರತೆ) ಲಕ್ಷಣಗಳನ್ನು ಗಮನಿಸಿ. ಕೆಲವು ಇತರ ರೋಗಗಳೂ ಇದೇ ರೀತಿ ಕಾಣಿಸಬಹುದಾದ್ದರಿಂದ, ಕಾರಣ ಖಚಿತಪಡಿಸಲು ಪಶುವೈದ್ಯರು ಪ್ರಾಣಿಯನ್ನು ಪರೀಕ್ಷಿಸಬೇಕಾಗುತ್ತದೆ.",
              "यह समस्या ब्याने के समय, खासकर ज़्यादा दूध देने वाले पशुओं में हो सकती है। गहरे, लाल रंग के पेशाब के साथ, दूध उत्पादन में साफ गिरावट, बुखार, ढीला गोबर, और पीलापन लिए सामान्य कमज़ोरी — गंभीर रक्ताल्पता (स्वस्थ खून की कमी) के लक्षण — पर ध्यान दें। चूंकि कुछ अन्य बीमारियाँ भी ऐसी ही दिख सकती हैं, इसलिए असली कारण जानने के लिए डॉक्टर को पशु की जांच करनी होगी।"
            ),
          },
          {
            type: "callout",
            style: "warning",
            heading: L("Dark or Reddish Urine Needs a Same-Day Report", "ముదురు లేదా ఎరుపు రంగు మూత్రం అదే రోజు తెలియజేయాలి", "அடர் அல்லது சிவப்பு நிற சிறுநீர் அதே நாளே தெரிவிக்கப்பட வேண்டும்", "ಗಾಢ ಅಥವಾ ಕೆಂಪು ಬಣ್ಣದ ಮೂತ್ರ ಅದೇ ದಿನ ವರದಿ ಮಾಡಬೇಕು", "गहरे या लाल रंग के पेशाब की सूचना उसी दिन दें"),
            text: L(
              "Dark red or brownish urine after calving is never something to wait and watch. It is linked to severe anaemia and weakness, and needs prompt veterinary attention — report it the same day you notice it.",
              "ఈనిన తర్వాత ముదురు ఎరుపు లేదా గోధుమ రంగు మూత్రం అనేది వేచి చూడాల్సిన విషయం కాదు. ఇది తీవ్రమైన రక్తహీనత మరియు బలహీనతతో ముడిపడి ఉంటుంది, మరియు తక్షణ వైద్య సహాయం అవసరం — మీరు గమనించిన అదే రోజు తెలియజేయండి.",
              "ஈன்ற பிறகு அடர் சிவப்பு அல்லது பழுப்பு நிற சிறுநீர் ஒருபோதும் காத்திருந்து பார்க்க வேண்டிய விஷயம் அல்ல. இது கடுமையான இரத்த சோகை மற்றும் பலவீனத்துடன் தொடர்புடையது, உடனடி கால்நடை மருத்துவ கவனம் தேவை — நீங்கள் கவனித்த அதே நாளே தெரிவிக்கவும்.",
              "ಕರು ಹಾಕಿದ ನಂತರ ಗಾಢ ಕೆಂಪು ಅಥವಾ ಕಂದು ಬಣ್ಣದ ಮೂತ್ರ ಎಂದಿಗೂ ಕಾಯುತ್ತಾ ನೋಡಬೇಕಾದ ವಿಷಯವಲ್ಲ. ಇದು ತೀವ್ರ ರಕ್ತಹೀನತೆ ಮತ್ತು ದೌರ್ಬಲ್ಯದೊಂದಿಗೆ ಸಂಬಂಧಿಸಿದೆ, ತಕ್ಷಣದ ಪಶುವೈದ್ಯಕೀಯ ಗಮನ ಬೇಕು — ನೀವು ಗಮನಿಸಿದ ಅದೇ ದಿನ ವರದಿ ಮಾಡಿ.",
              "ब्याने के बाद गहरा लाल या भूरा पेशाब कभी भी इंतज़ार करके देखने वाली बात नहीं है। यह गंभीर रक्ताल्पता और कमज़ोरी से जुड़ा है, और इसके लिए तुरंत पशु चिकित्सा ध्यान चाहिए — जिस दिन देखें उसी दिन बताएं।"
            ),
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("What is a key difference between simple udder oedema and an infected, painful udder?", "సాధారణ పొదుగు ఎడెమాకు మరియు ఇన్ఫెక్షన్ ఉన్న, నొప్పిగా ఉన్న పొదుగుకు మధ్య ముఖ్యమైన తేడా ఏమిటి?", "எளிய மேமை வீக்கத்திற்கும் தொற்று மற்றும் வலியுடன் கூடிய மேமைக்கும் இடையிலான முக்கிய வேறுபாடு என்ன?", "ಸರಳ ಕೆಚ್ಚಲು ಊತ ಮತ್ತು ಸೋಂಕಿತ, ನೋವಿನ ಕೆಚ್ಚಲಿನ ನಡುವಿನ ಪ್ರಮುಖ ವ್ಯತ್ಯಾಸವೇನು?", "साधारण थन की सूजन और संक्रमित, दर्द भरे थन के बीच मुख्य अंतर क्या है?"),
            options: [
              L("Oedema is usually not painful or hot to the touch", "ఎడెమా సాధారణంగా తాకినప్పుడు నొప్పిగా లేదా వేడిగా ఉండదు", "வீக்கம் பொதுவாக தொட்டால் வலியோ சூடோ இருக்காது", "ಎಡಿಮಾ ಸಾಮಾನ್ಯವಾಗಿ ಮುಟ್ಟಿದಾಗ ನೋವು ಅಥವಾ ಬಿಸಿ ಇರುವುದಿಲ್ಲ", "एडिमा में आमतौर पर छूने पर दर्द या गर्माहट नहीं होती"),
              L("Oedema only ever happens in old animals", "ఎడెమా వృద్ధ పశువులలో మాత్రమే వస్తుంది", "வீக்கம் வயதான விலங்குகளில் மட்டுமே ஏற்படும்", "ಎಡಿಮಾ ವಯಸ್ಸಾದ ಪ್ರಾಣಿಗಳಲ್ಲಿ ಮಾತ್ರ ಬರುತ್ತದೆ", "एडिमा केवल बूढ़े पशुओं में ही होता है"),
              L("Oedema always requires surgery", "ఎడెమాకు ఎల్లప్పుడూ శస్త్రచికిత్స అవసరం", "வீக்கத்திற்கு எப்போதும் அறுவை சிகிச்சை தேவை", "ಎಡಿಮಾಗೆ ಯಾವಾಗಲೂ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ ಬೇಕು", "एडिमा के लिए हमेशा सर्जरी चाहिए"),
              L("There is no way to tell them apart", "వాటిని వేరు చేయడానికి మార్గం లేదు", "அவற்றை வேறுபடுத்த வழி இல்லை", "ಅವುಗಳನ್ನು ಬೇರ್ಪಡಿಸಲು ಯಾವುದೇ ಮಾರ್ಗವಿಲ್ಲ", "इनमें फर्क करने का कोई तरीका नहीं है"),
            ],
            answer: 0,
            explain: L("With udder oedema, the udder is not painful or hot — that's an important detail to report, since it helps tell it apart from an infected udder.", "పొదుగు ఎడెమాలో, పొదుగు నొప్పిగా లేదా వేడిగా ఉండదు — ఇది తెలియజేయాల్సిన ముఖ్యమైన వివరం, ఎందుకంటే ఇది ఇన్ఫెక్షన్ ఉన్న పొదుగు నుండి దీన్ని వేరు చేయడంలో సహాయపడుతుంది.", "மேமை வீக்கத்தில், மேமை வலியோ சூடோ இல்லாமல் இருக்கும் — இது தெரிவிக்க வேண்டிய முக்கிய விவரம், ஏனெனில் இது தொற்று உள்ள மேமையிலிருந்து இதை வேறுபடுத்த உதவுகிறது.", "ಕೆಚ್ಚಲು ಎಡಿಮಾದಲ್ಲಿ, ಕೆಚ್ಚಲು ನೋವು ಅಥವಾ ಬಿಸಿ ಇರುವುದಿಲ್ಲ — ಇದು ವರದಿ ಮಾಡಬೇಕಾದ ಪ್ರಮುಖ ವಿವರ, ಏಕೆಂದರೆ ಇದು ಸೋಂಕಿತ ಕೆಚ್ಚಲಿನಿಂದ ಇದನ್ನು ಪ್ರತ್ಯೇಕಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.", "थन के एडिमा में, थन में दर्द या गर्माहट नहीं होती — यह बताने लायक ज़रूरी बात है, क्योंकि इससे संक्रमित थन से इसे अलग पहचानने में मदद मिलती है।"),
          },
          {
            type: "truefalse",
            q: L("Dark red or brown urine after calving is a sign that can be safely ignored for now.", "ఈనిన తర్వాత ముదురు ఎరుపు లేదా గోధుమ రంగు మూత్రం అనేది ప్రస్తుతానికి పట్టించుకోకుండా వదిలేయదగినది.", "ஈன்ற பிறகு அடர் சிவப்பு அல்லது பழுப்பு நிற சிறுநீர் தற்போதைக்கு பாதுகாப்பாக புறக்கணிக்கக்கூடிய அறிகுறி.", "ಕರು ಹಾಕಿದ ನಂತರ ಗಾಢ ಕೆಂಪು ಅಥವಾ ಕಂದು ಬಣ್ಣದ ಮೂತ್ರ ಸದ್ಯಕ್ಕೆ ಸುರಕ್ಷಿತವಾಗಿ ನಿರ್ಲಕ್ಷಿಸಬಹುದಾದ ಲಕ್ಷಣ.", "ब्याने के बाद गहरा लाल या भूरा पेशाब अभी के लिए नज़रअंदाज़ किया जा सकने वाला लक्षण है।"),
            answer: false,
            explain: L("No — it is linked to a serious blood condition (haemoglobinuria) with severe anaemia, and should be reported the same day.", "కాదు — ఇది తీవ్రమైన రక్తహీనతతో కూడిన తీవ్రమైన రక్త పరిస్థితికి (హీమోగ్లోబినూరియా) సంబంధించినది, మరియు అదే రోజు తెలియజేయాలి.", "இல்லை — இது கடுமையான இரத்த சோகையுடன் கூடிய தீவிர இரத்த நிலையுடன் (ஹீமோகுளோபினூரியா) தொடர்புடையது, அதே நாளே தெரிவிக்கப்பட வேண்டும்.", "ಇಲ್ಲ — ಇದು ತೀವ್ರ ರಕ್ತಹೀನತೆಯೊಂದಿಗೆ ಗಂಭೀರ ರಕ್ತ ಸ್ಥಿತಿಗೆ (ಹಿಮೋಗ್ಲೋಬಿನ್ಯೂರಿಯಾ) ಸಂಬಂಧಿಸಿದೆ, ಅದೇ ದಿನ ವರದಿ ಮಾಡಬೇಕು.", "नहीं — यह गंभीर रक्ताल्पता वाली एक गंभीर रक्त संबंधी स्थिति (हीमोग्लोबिन्यूरिया) से जुड़ा है, और इसकी सूचना उसी दिन देनी चाहिए।"),
          },
        ],
      },
    ],
    finalQuiz: {
      passScore: 70,
      questions: [
        {
          topicId: "t-m7-prolapse-rop",
          type: "mcq",
          q: L("Why should you never try to push a prolapsed uterus back in yourself?", "బయటకు వచ్చిన గర్భాశయాన్ని మీరే ఎందుకు లోపలికి తోయకూడదు?", "வெளியேறிய கருப்பையை நீங்களே ஏன் உள்ளே தள்ள முயற்சிக்கக்கூடாது?", "ಹೊರಬಂದ ಗರ್ಭಕೋಶವನ್ನು ನೀವೇ ಏಕೆ ಒಳಗೆ ತಳ್ಳಲು ಪ್ರಯತ್ನಿಸಬಾರದು?", "बाहर निकले गर्भाशय को खुद अंदर धकेलने की कोशिश क्यों नहीं करनी चाहिए?"),
          options: [
            L("It is not actually a serious problem", "ఇది నిజానికి తీవ్రమైన సమస్య కాదు", "இது உண்மையில் தீவிரமான பிரச்சினை அல்ல", "ಇದು ನಿಜವಾಗಿ ಗಂಭೀರ ಸಮಸ್ಯೆಯಲ್ಲ", "यह असल में कोई गंभीर समस्या नहीं है"),
            L("It can cause severe bleeding", "దీనివల్ల తీవ్ర రక్తస్రావం కావచ్చు", "இது கடுமையான இரத்தப்போக்கை ஏற்படுத்தலாம்", "ಇದು ತೀವ್ರ ರಕ್ತಸ್ರಾವಕ್ಕೆ ಕಾರಣವಾಗಬಹುದು", "इससे भारी रक्तस्राव हो सकता है"),
            L("The animal will do it herself within minutes", "పశువు కొన్ని నిమిషాల్లో దానంతట అదే చేసుకుంటుంది", "விலங்கு சில நிமிடங்களில் தானே செய்துகொள்ளும்", "ಪ್ರಾಣಿ ಕೆಲವು ನಿಮಿಷಗಳಲ್ಲಿ ತಾನೇ ಮಾಡಿಕೊಳ್ಳುತ್ತದೆ", "पशु कुछ मिनटों में खुद यह कर लेगा"),
            L("It is against the rules but not dangerous", "ఇది నియమాలకు వ్యతిరేకం కానీ ప్రమాదకరం కాదు", "இது விதிகளுக்கு எதிரானது ஆனால் ஆபத்தானது அல்ல", "ಇದು ನಿಯಮಗಳಿಗೆ ವಿರುದ್ಧ ಆದರೆ ಅಪಾಯಕಾರಿ ಅಲ್ಲ", "यह नियमों के खिलाफ है पर खतरनाक नहीं है"),
          ],
          answer: 1,
          explain: L("Attempting to push it back in or remove anything yourself can cause severe bleeding — always protect it and call the vet instead.", "దాన్ని మీరే తోయడానికి లేదా ఏదైనా తీసివేయడానికి ప్రయత్నించడం వల్ల తీవ్ర రక్తస్రావం కావచ్చు — బదులుగా ఎల్లప్పుడూ దానిని రక్షించి వైద్యుడిని పిలవండి.", "அதை நீங்களே தள்ளவோ எதையும் அகற்றவோ முயற்சிப்பது கடுமையான இரத்தப்போக்கை ஏற்படுத்தலாம் — அதற்கு பதிலாக எப்போதும் அதை பாதுகாத்து கால்நடை மருத்துவரை அழைக்கவும்.", "ಅದನ್ನು ನೀವೇ ತಳ್ಳಲು ಅಥವಾ ಏನನ್ನಾದರೂ ತೆಗೆಯಲು ಪ್ರಯತ್ನಿಸುವುದರಿಂದ ತೀವ್ರ ರಕ್ತಸ್ರಾವವಾಗಬಹುದು — ಬದಲಿಗೆ ಯಾವಾಗಲೂ ಅದನ್ನು ರಕ್ಷಿಸಿ ಪಶುವೈದ್ಯರನ್ನು ಕರೆಯಿರಿ.", "इसे खुद अंदर धकेलने या कुछ भी हटाने की कोशिश से भारी रक्तस्राव हो सकता है — इसके बजाय हमेशा इसे बचाएं और डॉक्टर को बुलाएं।"),
        },
        {
          topicId: "t-m7-prolapse-rop",
          type: "truefalse",
          q: L("Retention of Placenta is more likely after a difficult birth, twin birth, or a case of Milk Fever.", "కష్టమైన ప్రసవం, కవలల జననం, లేదా మిల్క్ ఫీవర్ వచ్చిన తర్వాత మావి నిలిచిపోయే అవకాశం ఎక్కువ.", "கடினமான பிரசவம், இரட்டைக் குட்டி பிறப்பு, அல்லது பால் காய்ச்சலுக்குப் பிறகு மாயை தங்கும் வாய்ப்பு அதிகம்.", "ಕಷ್ಟಕರ ಹೆರಿಗೆ, ಅವಳಿ ಜನನ, ಅಥವಾ ಮಿಲ್ಕ್ ಫೀವರ್ ಬಂದ ನಂತರ ಮಾಸು ಉಳಿಯುವ ಸಾಧ್ಯತೆ ಹೆಚ್ಚು.", "मुश्किल प्रसव, जुड़वां जन्म, या मिल्क फीवर के मामले के बाद जेर के रुकने की संभावना ज़्यादा होती है।"),
          answer: true,
          explain: L("Correct — difficult births, twins, abortion, induced calving, infection, poor nutrition, and Milk Fever all raise the chances of Retention of Placenta.", "సరైనది — కష్టమైన ప్రసవాలు, కవలలు, గర్భస్రావం, ప్రేరేపిత ఈత, ఇన్ఫెక్షన్, సరైన పోషణ లేకపోవడం, మరియు మిల్క్ ఫీవర్ అన్నీ మావి నిలిచిపోయే అవకాశాన్ని పెంచుతాయి.", "சரி — கடினமான பிரசவங்கள், இரட்டைக் குட்டிகள், கருச்சிதைவு, தூண்டப்பட்ட ஈன்றல், தொற்று, மோசமான ஊட்டச்சத்து, மற்றும் பால் காய்ச்சல் அனைத்தும் மாயை தங்கும் வாய்ப்பை அதிகரிக்கின்றன.", "ಸರಿ — ಕಷ್ಟಕರ ಹೆರಿಗೆಗಳು, ಅವಳಿಗಳು, ಗರ್ಭಪಾತ, ಪ್ರೇರಿತ ಕರು ಹಾಕುವಿಕೆ, ಸೋಂಕು, ಕಳಪೆ ಪೋಷಣೆ, ಮತ್ತು ಮಿಲ್ಕ್ ಫೀವರ್ ಎಲ್ಲವೂ ಮಾಸು ಉಳಿಯುವ ಸಾಧ್ಯತೆಯನ್ನು ಹೆಚ್ಚಿಸುತ್ತವೆ.", "सही — मुश्किल प्रसव, जुड़वां बच्चे, गर्भपात, कृत्रिम ब्याना, संक्रमण, खराब पोषण, और मिल्क फीवर — ये सभी जेर के रुकने की संभावना बढ़ाते हैं।"),
        },
        {
          topicId: "t-m7-prolapse-rop",
          type: "mcq",
          q: L("Why should you never pull out a retained placenta yourself?", "నిలిచిపోయిన మావిని మీరే ఎందుకు ఎప్పుడూ లాగకూడదు?", "தங்கியிருக்கும் மாயையை நீங்களே ஏன் ஒருபோதும் இழுக்கக்கூடாது?", "ಉಳಿದಿರುವ ಮಾಸನ್ನು ನೀವೇ ಏಕೆ ಎಂದಿಗೂ ಎಳೆಯಬಾರದು?", "रुकी हुई जेर को खुद कभी क्यों नहीं खींचना चाहिए?"),
          options: [
            L("It has no risks, but it's simply not your job", "దీనికి ఎలాంటి ప్రమాదం లేదు, కానీ ఇది మీ పని కాదు", "இதற்கு ஆபத்து இல்லை, ஆனால் இது உங்கள் வேலை அல்ல", "ಇದಕ್ಕೆ ಯಾವುದೇ ಅಪಾಯವಿಲ್ಲ, ಆದರೆ ಇದು ನಿಮ್ಮ ಕೆಲಸವಲ್ಲ", "इसमें कोई खतरा नहीं है, पर यह आपका काम नहीं है"),
            L("It can lead to serious complications like infection or blood poisoning, even death", "దీనివల్ల ఇన్ఫెక్షన్ లేదా రక్త విషప్రయోగం వంటి తీవ్ర సమస్యలు, మరణం కూడా రావచ్చు", "இது தொற்று அல்லது இரத்த நச்சுத்தன்மை போன்ற கடுமையான சிக்கல்களுக்கும், மரணத்திற்கும் கூட வழிவகுக்கலாம்", "ಇದು ಸೋಂಕು ಅಥವಾ ರಕ್ತ ವಿಷಮಯತೆಯಂತಹ ಗಂಭೀರ ತೊಡಕುಗಳಿಗೆ, ಸಾವಿಗೂ ಕಾರಣವಾಗಬಹುದು", "इससे संक्रमण या खून में ज़हर फैलने जैसी गंभीर जटिलताएँ, यहाँ तक कि मौत भी हो सकती है"),
            L("It will always come out easily on its own within seconds", "అది ఎల్లప్పుడూ కొన్ని సెకన్లలో దానంతట అదే సులభంగా బయటకు వస్తుంది", "அது எப்போதும் சில வினாடிகளில் தானாகவே எளிதாக வெளியேறும்", "ಅದು ಯಾವಾಗಲೂ ಕೆಲವು ಸೆಕೆಂಡುಗಳಲ್ಲಿ ತಾನಾಗಿಯೇ ಸುಲಭವಾಗಿ ಹೊರಬರುತ್ತದೆ", "यह हमेशा कुछ ही सेकंड में अपने आप आसानी से निकल जाती है"),
            L("It only matters for buffaloes, not cattle", "ఇది గేదెలకు మాత్రమే వర్తిస్తుంది, ఆవులకు కాదు", "இது எருமைகளுக்கு மட்டுமே பொருந்தும், மாடுகளுக்கு அல்ல", "ಇದು ಎಮ್ಮೆಗಳಿಗೆ ಮಾತ್ರ ಅನ್ವಯಿಸುತ್ತದೆ, ಹಸುಗಳಿಗಲ್ಲ", "यह केवल भैंसों पर लागू होता है, गायों पर नहीं"),
          ],
          answer: 1,
          explain: L("Pulling it yourself risks serious complications such as metritis (womb infection) and septicaemia (blood poisoning), which can be fatal — always consult a vet.", "దానిని మీరే లాగడం వల్ల మెట్రైటిస్ (గర్భాశయ ఇన్ఫెక్షన్) మరియు సెప్టిసీమియా (రక్త విషప్రయోగం) వంటి తీవ్ర సమస్యల ప్రమాదం ఉంటుంది, ఇవి ప్రాణాంతకం కావచ్చు — ఎల్లప్పుడూ వైద్యుడిని సంప్రదించండి.", "அதை நீங்களே இழுப்பது மெட்ரைடிஸ் (கருப்பை தொற்று) மற்றும் செப்டிசீமியா (இரத்த நச்சுத்தன்மை) போன்ற கடுமையான சிக்கல்களுக்கு ஆபத்து ஏற்படுத்தும், இவை உயிருக்கு ஆபத்தானவையாக இருக்கலாம் — எப்போதும் கால்நடை மருத்துவரை அணுகவும்.", "ಅದನ್ನು ನೀವೇ ಎಳೆಯುವುದರಿಂದ ಮೆಟ್ರೈಟಿಸ್ (ಗರ್ಭಕೋಶ ಸೋಂಕು) ಮತ್ತು ಸೆಪ್ಟಿಸೀಮಿಯಾ (ರಕ್ತ ವಿಷಮಯತೆ) ಮುಂತಾದ ಗಂಭೀರ ತೊಡಕುಗಳ ಅಪಾಯವಿದೆ, ಇವು ಮಾರಣಾಂತಿಕವಾಗಬಹುದು — ಯಾವಾಗಲೂ ಪಶುವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಿ.", "इसे खुद खींचने से मेट्राइटिस (गर्भाशय संक्रमण) और सेप्टिसीमिया (खून में ज़हर) जैसी गंभीर जटिलताओं का खतरा रहता है, जो जानलेवा हो सकती हैं — हमेशा डॉक्टर से सलाह लें।"),
        },
        {
          topicId: "t-m7-udder-hgb",
          type: "mcq",
          q: L("Udder oedema is most accurately described as:", "పొదుగు ఎడెమాను అత్యంత సరిగ్గా ఇలా వర్ణించవచ్చు:", "மேமை வீக்கத்தை மிகச் சரியாக இவ்வாறு விவரிக்கலாம்:", "ಕೆಚ್ಚಲು ಎಡಿಮಾವನ್ನು ಅತ್ಯಂತ ನಿಖರವಾಗಿ ಹೀಗೆ ವಿವರಿಸಬಹುದು:", "थन के एडिमा का सबसे सही वर्णन है:"),
          options: [
            L("A hot, painful swelling caused by infection", "ఇన్ఫెక్షన్ వల్ల వచ్చే వేడిగా, నొప్పిగా ఉండే వాపు", "தொற்று காரணமாக ஏற்படும் சூடான, வலியுள்ள வீக்கம்", "ಸೋಂಕಿನಿಂದ ಉಂಟಾಗುವ ಬಿಸಿಯಾದ, ನೋವಿನ ಊತ", "संक्रमण से होने वाली गर्म, दर्द भरी सूजन"),
            L("A build-up of extra fluid in the udder, which is usually not painful or hot", "పొదుగులో అదనపు ద్రవం పేరుకుపోవడం, ఇది సాధారణంగా నొప్పిగా లేదా వేడిగా ఉండదు", "மேமையில் அதிகப்படியான திரவம் சேர்வது, இது பொதுவாக வலியோ சூடோ இருக்காது", "ಕೆಚ್ಚಲಿನಲ್ಲಿ ಹೆಚ್ಚುವರಿ ದ್ರವ ಸಂಗ್ರಹ, ಇದು ಸಾಮಾನ್ಯವಾಗಿ ನೋವು ಅಥವಾ ಬಿಸಿ ಇರುವುದಿಲ್ಲ", "थन में अतिरिक्त तरल का जमा होना, जो आमतौर पर दर्द या गर्माहट भरा नहीं होता"),
            L("Something that only affects the belly, never the udder", "ఇది పొట్టను మాత్రమే ప్రభావితం చేస్తుంది, పొదుగును ఎప్పుడూ కాదు", "இது வயிற்றை மட்டுமே பாதிக்கும், மேமையை ஒருபோதும் அல்ல", "ಇದು ಹೊಟ್ಟೆಯನ್ನು ಮಾತ್ರ ಬಾಧಿಸುತ್ತದೆ, ಕೆಚ್ಚಲನ್ನು ಎಂದಿಗೂ ಅಲ್ಲ", "यह केवल पेट को प्रभावित करता है, थन को कभी नहीं"),
            L("A condition that always needs surgery immediately", "దీనికి ఎల్లప్పుడూ వెంటనే శస్త్రచికిత్స అవసరం", "இது எப்போதும் உடனடியாக அறுவை சிகிச்சை தேவைப்படும் நிலை", "ಇದಕ್ಕೆ ಯಾವಾಗಲೂ ತಕ್ಷಣ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ ಬೇಕು", "इसके लिए हमेशा तुरंत सर्जरी की ज़रूरत होती है"),
          ],
          answer: 1,
          explain: L("Udder oedema is fluid build-up in the udder (and sometimes the belly) that is usually not painful or hot — unlike an infected udder.", "పొదుగు ఎడెమా అనేది పొదుగులో (మరియు కొన్నిసార్లు పొట్టలో) ద్రవం పేరుకుపోవడం, ఇది సాధారణంగా నొప్పిగా లేదా వేడిగా ఉండదు — ఇన్ఫెక్షన్ ఉన్న పొదుగుకు భిన్నంగా.", "மேமை வீக்கம் என்பது மேமையில் (மற்றும் சில நேரங்களில் வயிற்றில்) திரவம் சேர்வதாகும், இது பொதுவாக வலியோ சூடோ இல்லாமல் இருக்கும் — தொற்று உள்ள மேமையிலிருந்து மாறாக.", "ಕೆಚ್ಚಲು ಎಡಿಮಾ ಎಂದರೆ ಕೆಚ್ಚಲಿನಲ್ಲಿ (ಮತ್ತು ಕೆಲವೊಮ್ಮೆ ಹೊಟ್ಟೆಯಲ್ಲಿ) ದ್ರವ ಸಂಗ್ರಹ, ಇದು ಸಾಮಾನ್ಯವಾಗಿ ನೋವು ಅಥವಾ ಬಿಸಿ ಇರುವುದಿಲ್ಲ — ಸೋಂಕಿತ ಕೆಚ್ಚಲಿಗಿಂತ ಭಿನ್ನವಾಗಿ.", "थन का एडिमा थन (और कभी-कभी पेट) में तरल का जमा होना है, जो आमतौर पर दर्द या गर्माहट भरा नहीं होता — संक्रमित थन के विपरीत।"),
        },
        {
          topicId: "t-m7-udder-hgb",
          type: "truefalse",
          q: L("Post-Parturient Haemoglobinuria can come with a marked drop in milk production and signs of severe anaemia.", "పోస్ట్-పార్చురియంట్ హీమోగ్లోబినూరియాతో పాల ఉత్పత్తిలో గణనీయమైన తగ్గుదల మరియు తీవ్రమైన రక్తహీనత లక్షణాలు రావచ్చు.", "பிரசவத்திற்கு பிந்தைய ஹீமோகுளோபினூரியா பால் உற்பத்தியில் குறிப்பிடத்தக்க குறைவுடனும் கடுமையான இரத்த சோகை அறிகுறிகளுடனும் வரலாம்.", "ಹೆರಿಗೆಯ ನಂತರದ ಹಿಮೋಗ್ಲೋಬಿನ್ಯೂರಿಯಾ ಹಾಲಿನ ಉತ್ಪಾದನೆಯಲ್ಲಿ ಗಮನಾರ್ಹ ಇಳಿಕೆ ಮತ್ತು ತೀವ್ರ ರಕ್ತಹೀನತೆಯ ಲಕ್ಷಣಗಳೊಂದಿಗೆ ಬರಬಹುದು.", "प्रसव के बाद का हीमोग्लोबिन्यूरिया दूध उत्पादन में साफ गिरावट और गंभीर रक्ताल्पता के लक्षणों के साथ आ सकता है।"),
          answer: true,
          explain: L("Yes — along with dark, reddish urine, watch for a drop in milk, fever, loose dung, and weakness with a pale appearance from severe anaemia.", "అవును — ముదురు, ఎరుపు రంగు మూత్రంతో పాటు, పాలలో తగ్గుదల, జ్వరం, వదులుగా ఉన్న పేడ, మరియు తీవ్రమైన రక్తహీనత వల్ల లేత రంగుతో బలహీనతను గమనించండి.", "ஆம் — அடர், சிவப்பு நிற சிறுநீருடன், பாலில் குறைவு, காய்ச்சல், தளர்வான சாணம், மற்றும் கடுமையான இரத்த சோகையால் வெளிர் தோற்றத்துடன் பலவீனத்தை கவனியுங்கள்.", "ಹೌದು — ಗಾಢ, ಕೆಂಪು ಬಣ್ಣದ ಮೂತ್ರದ ಜೊತೆಗೆ, ಹಾಲಿನಲ್ಲಿ ಇಳಿಕೆ, ಜ್ವರ, ಸಡಿಲ ಸಗಣಿ, ಮತ್ತು ತೀವ್ರ ರಕ್ತಹೀನತೆಯಿಂದ ಬಿಳಿಚಿಕೊಂಡ ದೌರ್ಬಲ್ಯವನ್ನು ಗಮನಿಸಿ.", "हाँ — गहरे, लाल रंग के पेशाब के साथ, दूध में कमी, बुखार, ढीला गोबर, और गंभीर रक्ताल्पता से पीलापन लिए कमज़ोरी पर ध्यान दें।"),
        },
      ],
    },
  },
    ],
  },
  {
    id: "m8",
    number: 8,
    title: L("Diseases Due to Faulty Feeding"),
    subtitle: L("Health problems caused by wrong or unbalanced feeding, and how to avoid them."),
    icon: "wheat",
    available: true,
    lessons: [
// ==================================================================
  // LESSON 1 — Bloat and Acidosis: When the Rumen Goes Wrong
  // ==================================================================
  {
    id: "m8-l1",
    title: L("Bloat and Acidosis: When the Rumen Goes Wrong"),
    estMinutes: 9,
    hook: [
      {
        type: "hero",
        heading: L("The Stomach Has Its Own Balance — Feeding Mistakes Upset It"),
        text: L(
          "A cow or buffalo's stomach has four chambers, and the largest one — the rumen — is really a living fermentation tank full of helpful microbes that break down feed. Any sudden or wrong change in feeding can throw that balance off, letting harmful microbes take over. This lesson covers two feeding-related problems that follow from exactly that: bloat and acidosis."
        ),
      },
    ],
    topics: [
      {
        id: "t-m8-bloat",
        title: L("Bloat"),
        teach: [
            {
              type: "photo",
              src: "assets/illustration-m8-bloat.png",
              alt: L("Illustrated cutaway diagram of a cow showing gas trapped inside the rumen, causing the left side of the body to swell outward."),
              caption: L("Illustration: what's happening inside a bloated cow — gas trapped in the rumen has nowhere to escape, and pushes the left side outward."),
            },
          {
            type: "text",
            heading: L("What Is Bloat?"),
            html: L(
              "<b>Bloat</b> is a kind of indigestion where gas builds up inside the rumen (the animal's largest stomach chamber) faster than it can escape. Normally, gas produced during digestion is released by burping. In bloat, that gas gets trapped and keeps building up, and the belly swells up like a balloon."
            ),
          },
          {
            type: "glossary",
            term: L("Rumen"),
            meaning: L(
              "The largest of the four stomach chambers in a cow or buffalo, sitting mainly on the left side of the belly, where microbes break down grass and feed."
            ),
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("Lush, wet pasture"),
                text: L("Grazing on young, lush pasture — especially if it's wet — is a common cause. Plants like clover, lucerne and alfalfa are especially risky, but any fast-growing plant can cause it."),
              },
              {
                label: L("Something stuck in the throat"),
                text: L("A foreign object stuck in the food pipe (choking) can block gas from escaping upward, so it builds up in the rumen instead."),
              },
              {
                label: L("Leftover food"),
                text: L("Feeding leftover food, such as dry bread, can also cause bloat."),
              },
            ],
          },
          {
            type: "text",
            heading: L("Signs of Bloat"),
            html: L(
              "Watch for the <b>left side of the belly (the left flank) swelling outward</b> like a balloon. The animal may kick at its own belly, or stand with its back legs spread wide apart. It will have difficulty breathing. In severe, untreated cases, the animal can die from <b>asphyxiation</b> — meaning the swollen rumen presses so hard it can no longer get enough air."
            ),
          },
          {
            type: "callout",
            style: "warning",
            heading: L("Bloat Can Turn Fatal Very Fast — Treat It as an Emergency"),
            text: L(
              "Bloat can go from mild to fatal quickly. If you see the left flank ballooning out along with difficulty breathing, this is a true emergency. Do not wait and watch — get the owner and a veterinarian or experienced handler involved immediately. Severe bloat sometimes needs the gas released through the animal's side without delay, which is skilled emergency work for a vet or experienced handler, not something to attempt yourself."
            ),
          },
          {
            type: "callout",
            style: "tip",
            heading: L("Everyday Habits That Help Prevent Bloat"),
            text: L(
              "Avoid moving animals onto wet pasture first thing in the morning. Don't let a very hungry animal go straight onto lush pasture — offer it some dry, cut grass first so it isn't grazing on an empty stomach. Be careful about feeding leftover food such as dry bread."
            ),
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("What is bloat?"),
            options: [
              L("A wound on the animal's leg"),
              L("Gas building up inside the rumen faster than it can escape"),
              L("A shortage of milk"),
              L("An infection of the udder"),
            ],
            answer: 1,
            explain: L("Bloat is indigestion caused by gas building up in the rumen faster than the animal can release it, so the belly swells."),
          },
          {
            type: "truefalse",
            q: L("If you notice an animal's left flank ballooning out along with difficulty breathing, it is safe to simply wait and watch before telling anyone."),
            answer: false,
            explain: L("No — bloat can turn fatal quickly. Ballooning of the left flank with breathing difficulty is an emergency; get the owner and a vet or experienced handler involved right away."),
          },
        ],
      },
      {
        id: "t-m8-acidosis",
        title: L("Rumen Acidosis and SARA"),
        teach: [
          {
            type: "text",
            heading: L("Too Much Rich Feed, Too Fast"),
            html: L(
              "The rumen's microbes are used to working on fibrous feed like grass and hay, known as <b>forage</b> or <b>roughage</b>. <b>Concentrate</b> feed — grain-based feed that digests quickly and gives a lot of energy — is useful, but feeding large amounts of it too suddenly overwhelms the rumen and makes it too acidic. This is called <b>acidosis</b>."
            ),
          },
          {
            type: "glossary",
            term: L("Concentrate vs. Forage"),
            meaning: L(
              "Concentrate is energy-dense, grain-based feed that is digested quickly. Forage (or roughage) is fibrous feed like grass or hay, digested more slowly. A healthy diet needs enough forage — too much concentrate, too fast, upsets the rumen."
            ),
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("Clinical acidosis — the severe form"),
                text: L("Caused by large amounts of rapidly digestible carbohydrate fed in a short time. Within 24–48 hours the animal may go down and be unable to get up (this can look similar to milk fever), and it may stop urinating or passing dung."),
              },
              {
                label: L("Sub-clinical acidosis — the milder, ongoing form"),
                text: L("Caused by feeding more concentrate than forage over time. Signs include reduced feed intake, weight loss, unexplained diarrhoea and exhaustion. It can also lead on to laminitis and lameness."),
              },
            ],
          },
          {
            type: "callout",
            style: "warning",
            heading: L("Clinical Acidosis Can Look Better, Then Get Worse"),
            text: L(
              "In severe clinical acidosis, the outlook is often poor. Some animals seem to improve at first but then become seriously ill again 3–4 days later. An animal down and unable to get up, from a feeding cause, needs a veterinarian immediately."
            ),
          },
          {
            type: "text",
            heading: L("SARA: A Related Problem From Sudden Diet Switches"),
            html: L(
              "<b>Sub-Acute Ruminal Acidosis (SARA)</b> happens when a diet is switched abruptly from high-fibre to high-concentrate, or when rations are poorly balanced or feed is chopped too fine. It's a major cause of animals producing less than they should. Watch for reduced feed intake, reduced cud-chewing, mild diarrhoea, foamy dung, undigested feed pieces larger than 6mm showing up in the dung, and lower milk fat. Over time it can also lead to laminitis, weight loss, and poor body condition even when the animal is getting enough energy in its feed."
            ),
          },
          {
            type: "callout",
            style: "tip",
            heading: L("Everyday Habits That Help Prevent Acidosis and SARA"),
            text: L(
              "Give the animal roughage in the morning before concentrate, so it produces enough saliva (which helps protect the rumen). Never give large amounts of rapidly digestible carbohydrate at once. Any change in feeding — especially a switch toward more concentrate — should be made gradually, not abruptly, and proper feeding practices should be worked out with a veterinarian."
            ),
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("What commonly causes rumen acidosis?"),
            options: [
              L("Feeding large amounts of rapidly digestible carbohydrate (concentrate) too quickly"),
              L("Giving the animal too much plain water"),
              L("Letting the animal rest too long"),
              L("Milking the animal too often"),
            ],
            answer: 0,
            explain: L("Acidosis happens when large quantities of rapidly digestible carbohydrate are fed in a short time, or when concentrate greatly outweighs forage over time."),
          },
          {
            type: "truefalse",
            q: L("An animal with severe clinical acidosis that seems to improve at first can still become seriously ill again a few days later."),
            answer: true,
            explain: L("Yes — some animals appear to improve, then become seriously ill again 3–4 days later. The outlook in severe cases is often poor."),
          },
        ],
      },
    ],
    finalQuiz: {
      passScore: 70,
      questions: [
        {
          topicId: "t-m8-bloat",
          type: "mcq",
          q: L("Which of these is a known cause of bloat?"),
          options: [
            L("Grazing on lush, wet pasture, especially plants like clover or lucerne"),
            L("Drinking too much clean water"),
            L("Standing in the sun for too long"),
            L("Being milked twice a day"),
          ],
          answer: 0,
          explain: L("Lush, wet pasture and fast-growing plants such as clover, lucerne and alfalfa are common causes of bloat, along with choking and some leftover foods."),
        },
        {
          topicId: "t-m8-bloat",
          type: "truefalse",
          q: L("A ballooning left flank together with difficulty breathing should be treated as an emergency, not something to just watch."),
          answer: true,
          explain: L("Correct — bloat can move from mild to fatal quickly, so this combination of signs needs immediate help."),
        },
        {
          topicId: "t-m8-acidosis",
          type: "mcq",
          q: L("An animal goes down and cannot get up within a day or two of being fed a large amount of rich concentrate. What is this most likely a sign of?"),
          options: [
            L("Normal rest after eating well"),
            L("Clinical acidosis, a feeding emergency needing a veterinarian right away"),
            L("The animal is simply full"),
            L("Nothing unusual — no need to report it"),
          ],
          answer: 1,
          explain: L("This pattern matches clinical acidosis, which can make an animal recumbent within 24–48 hours and needs urgent veterinary attention."),
        },
        {
          topicId: "t-m8-acidosis",
          type: "truefalse",
          q: L("Sub-Acute Ruminal Acidosis (SARA) is often caused by abruptly switching an animal from a high-fibre diet to a high-concentrate diet."),
          answer: true,
          explain: L("Yes — SARA is mainly linked to abrupt diet switches toward more concentrate, and to poorly balanced or overly fine-chopped rations."),
        },
        {
          topicId: "t-m8-acidosis",
          type: "mcq",
          q: L("What everyday feeding habit helps protect the rumen against acidosis?"),
          options: [
            L("Giving roughage before concentrate in the morning, so enough saliva is produced"),
            L("Giving only concentrate feed, with no roughage at all"),
            L("Switching suddenly to a much richer diet whenever milk yield drops"),
            L("Feeding as much rapidly digestible carbohydrate as possible"),
          ],
          answer: 0,
          explain: L("Offering roughage before concentrate encourages more saliva production, which helps protect the rumen. Large amounts of rapidly digestible carbohydrate should be avoided."),
        },
        {
          topicId: "t-m8-bloat",
          type: "mcq",
          q: L("In bloat, what actually happens inside the animal?"),
          options: [
            L("Gas builds up in the rumen faster than it can escape"),
            L("The animal stops producing saliva"),
            L("The animal's hooves become inflamed"),
            L("The udder becomes infected"),
          ],
          answer: 0,
          explain: L("Bloat is caused by gas trapped and building up inside the rumen, making the belly swell like a balloon."),
        },
      ],
    },
  },

  // ==================================================================
  // LESSON 2 — Laminitis: The Foot Disease Linked to Feeding
  // ==================================================================
  {
    id: "m8-l2",
    title: L("Laminitis: The Foot Disease Linked to Feeding"),
    estMinutes: 8,
    hook: [
      {
        type: "hero",
        heading: L("A Sore Foot Can Start With What's in the Feed Bucket"),
        text: L(
          "Laminitis is a painful hoof problem, and it's included in this module because wrong feeding is one of its major causes. It often shows up in more than one animal in the herd at the same time, which makes noticing and reporting it early especially important."
        ),
      },
    ],
    topics: [
      {
        id: "t-m8-laminitis-what",
        title: L("What Is Laminitis and What Causes It?"),
        teach: [
            {
              type: "photo",
              src: "assets/illustration-m8-laminitis.png",
              alt: L("Illustrated cross-section diagram comparing a healthy hoof to one with laminitis, showing the tilted bone and inflamed tissue."),
              caption: L("Illustration: a healthy hoof compared to one with laminitis, where inflamed tissue lets the bone tilt inside the hoof — this is what causes the pain."),
            },
          {
            type: "text",
            heading: L("A Hoof Problem Most Common at Peak Milking"),
            html: L(
              "<b>Laminitis</b> is a disease of the <b>hoof</b> (the hard covering of the foot). It is most commonly seen in mature dairy cows during their peak lactation (the period when they are giving the most milk), and it's often a herd issue — meaning several animals can be affected around the same time, not just one."
            ),
          },
          {
            type: "glossary",
            term: L("Hoof"),
            meaning: L("The hard, horn-like covering over an animal's foot — similar in idea to a fingernail, but covering the whole foot and taking the animal's weight."),
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("Feeding-related causes"),
                text: L("Higher concentrate and protein in the diet, combined with too little forage, makes laminitis more likely."),
              },
              {
                label: L("Other health problems that make it more likely"),
                text: L("Mastitis (an infection of the udder), metritis (an infection of the womb after calving), and acidosis all make laminitis more likely."),
              },
              {
                label: L("Housing-related causes"),
                text: L("Rough, irregular flooring and not having enough space to lie down also make laminitis more likely."),
              },
            ],
          },
          {
            type: "text",
            heading: L("Three Forms of Laminitis"),
            html: L(
              "Laminitis can occur in a <b>sub-clinical</b> form (mild, easy to miss — for example a sole ulcer), an <b>acute</b> form (sudden, an animal may stand with its legs crossed), or a <b>chronic</b> form (long-lasting, which can lead to a deformed hoof or a dropped sole). Severe lameness from any form can show up as an arched back."
            ),
          },
          {
            type: "callout",
            style: "tip",
            heading: L("Your Job: Notice the Signs, Report Early"),
            text: L(
              "Watch for limping, an arched back, an unusual stance such as crossed legs, or reluctance to stand or walk. Because laminitis often affects several animals in a herd together, an early report can help the owner act before more animals are affected."
            ),
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("Laminitis is a disease of which part of the body?"),
            options: [L("The hoof (foot)"), L("The udder"), L("The eyes"), L("The ears")],
            answer: 0,
            explain: L("Laminitis affects the hoof, the hard covering of the foot."),
          },
          {
            type: "truefalse",
            q: L("A diet with higher concentrate and protein but too little forage makes laminitis more likely."),
            answer: true,
            explain: L("Correct — this feeding pattern, along with problems like mastitis, metritis and acidosis, and rough flooring, all make laminitis more likely."),
          },
        ],
      },
      {
        id: "t-m8-laminitis-prevention",
        title: L("Preventing Laminitis"),
        teach: [
            {
              type: "photo",
              src: "assets/photo-m8-hoof-trim.jpg",
              alt: L("A farm worker using a hoof grinder to trim a cow's hoof while the animal stands restrained in a hoof-trimming crush"),
              caption: L("Routine hoof trimming, done safely in a trimming crush, is one of the habits that helps prevent laminitis."),
            },
          {
            type: "text",
            heading: L("Prevention Is Mostly About Feeding, Floors and Feet"),
            html: L(
              "Since laminitis is closely linked to feeding, many of the same habits that help prevent acidosis also help prevent laminitis. On top of good feeding, housing and hoof care both make a real difference."
            ),
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("Feeding"),
                text: L("Provide balanced feed that includes enough forage, rather than relying heavily on concentrate."),
              },
              {
                label: L("Flooring and space"),
                text: L("Provide soft flooring where possible, and make sure animals have adequate space to lie down, so they aren't forced to stand excessively."),
              },
              {
                label: L("Foot bath"),
                text: L("A foot bath using 5% copper sulphate solution, used for 2–4 days continuously every fortnight, is a recommended hoof-care practice."),
              },
              {
                label: L("Hoof trimming and checks"),
                text: L("Arrange regular hoof trimming at least once every 6 months, and check hooves regularly for any injury or early signs of laminitis."),
              },
            ],
          },
          {
            type: "glossary",
            term: L("Foot Bath"),
            meaning: L("A shallow tray or trough of solution that animals walk through, used regularly to help keep hooves healthy."),
          },
          {
            type: "example",
            heading: L("Why Regular Checking Matters"),
            text: L(
              "Just as a person might notice a small stone in their shoe before it causes a real injury, checking an animal's hooves regularly means small problems can be caught and reported before they turn into a serious case of laminitis."
            ),
          },
          {
            type: "callout",
            style: "tip",
            heading: L("Your Job: Support the Routine, Report What You See"),
            text: L(
              "You don't need to trim hooves or diagnose laminitis yourself. Your part is to help keep good habits going — enough forage in the feed, soft footing and lying space where possible — and to check hooves regularly, reporting any injury or unusual sign to the owner or veterinarian right away."
            ),
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("How often should regular hoof trimming be arranged, according to this lesson?"),
            options: [L("Once a week"), L("At least once every 6 months"), L("Once every 5 years"), L("Only if the animal is limping")],
            answer: 1,
            explain: L("Regular hoof trimming should be arranged at least once every 6 months, as part of ongoing hoof care."),
          },
          {
            type: "truefalse",
            q: L("Providing enough forage and soft flooring, along with regular hoof checks, are all part of preventing laminitis."),
            answer: true,
            explain: L("Correct — balanced feed with enough forage, soft flooring, adequate lying space, foot baths and regular hoof checks all help prevent laminitis."),
          },
        ],
      },
    ],
    finalQuiz: {
      passScore: 70,
      questions: [
        {
          topicId: "t-m8-laminitis-what",
          type: "mcq",
          q: L("When is laminitis most commonly seen?"),
          options: [
            L("In mature dairy cows during peak lactation"),
            L("Only in very young calves"),
            L("Only in male animals"),
            L("Only right after birth, and never at any other time"),
          ],
          answer: 0,
          explain: L("Laminitis is commonly seen in mature dairy cows during peak lactation, and can affect several animals in a herd at once."),
        },
        {
          topicId: "t-m8-laminitis-what",
          type: "truefalse",
          q: L("Mastitis and metritis, as well as acidosis, can all make laminitis more likely."),
          answer: true,
          explain: L("Yes — along with feeding factors and poor flooring, these health problems are also listed as making laminitis more likely."),
        },
        {
          topicId: "t-m8-laminitis-prevention",
          type: "mcq",
          q: L("What foot bath solution and schedule is recommended for hoof care?"),
          options: [
            L("5% copper sulphate, for 2–4 days continuously every fortnight"),
            L("Plain water, once a year"),
            L("Salt water, every single day"),
            L("No foot bath is ever needed"),
          ],
          answer: 0,
          explain: L("A 5% copper sulphate foot bath, used for 2–4 days continuously every fortnight, is the recommended practice mentioned in this lesson."),
        },
        {
          topicId: "t-m8-laminitis-prevention",
          type: "truefalse",
          q: L("Your job with laminitis prevention is to trim hooves yourself whenever you notice a problem."),
          answer: false,
          explain: L("No — trimming and treatment are for the veterinarian or trained hoof-care staff. Your job is to help keep good habits going and to report anything unusual."),
        },
      ],
    },
  },
    ],
  },
  {
    id: "m9",
    number: 9,
    title: L("Mastitis & Diseases of the Teats"),
    subtitle: L("Recognising problems with the udder and teats early."),
    icon: "droplet",
    available: true,
    lessons: [
// ==================================================================
  // LESSON 1 — Understanding Mastitis, and Acute Mastitis
  // ==================================================================
  {
    id: "m9-l1",
    title: L("Understanding Mastitis: The Acute Form"),
    estMinutes: 9,
    hook: [
      {
        type: "hero",
        heading: L("The Udder Can Tell You Something Is Wrong — If You Know What to Look For"),
        text: L(
          "Mastitis is one of the biggest causes of loss on a dairy farm — it can quietly cut milk yield, permanently damage the udder, or in bad cases even kill the animal. The good news: you don't need to be a vet to notice the first signs. This lesson starts from zero — what the udder actually is, what mastitis means, and how to recognise its most visible form."
        ),
      },
    ],
    topics: [
      {
        id: "t-m9-what-is-mastitis",
        title: L("What Is Mastitis, and Why It Matters"),
        teach: [
            {
              type: "photo",
              src: "assets/illustration-m9-mastitis.png",
              alt: L("Illustrated cross-section diagram comparing a healthy udder quarter to one infected with mastitis, showing swelling and clotted milk."),
              caption: L("Illustration: a healthy udder quarter compared to one with mastitis — infection causes swelling, and the milk itself changes, with visible clots or flakes."),
            },
            {
              type: "photo",
              src: "assets/photo-m9-healthy-udder.jpg",
              alt: L("Rear view of a healthy dairy cow's full, evenly balanced udder, standing calmly on straw bedding"),
              caption: L("A healthy udder: four separate quarters, evenly shaped, with no swelling or asymmetry on any one side."),
            },
          {
            type: "text",
            heading: L("The Udder: Four Separate Rooms, Not One"),
            html: L(
              "The <b>udder</b> is the milk-producing organ hanging below a cow or buffalo's belly, and each of the finger-like parts hanging from it that milk actually comes out of is called a <b>teat</b>. What most people don't realise is that the udder is not one single bag — it's divided into four separate sections, and each one works completely on its own. Think of the udder like a house with four separate rooms, each with its own door. A problem in one room doesn't automatically spread to the others — which is exactly why one part of an udder can be sick while the rest stays completely normal."
            ),
          },
          {
            type: "glossary",
            term: L("Udder"),
            meaning: L("The milk-producing organ that hangs below a cow or buffalo's belly, between the back legs."),
          },
          {
            type: "glossary",
            term: L("Teat"),
            meaning: L("One of the four finger-like parts of the udder that milk actually flows out of — what you hold onto during milking."),
          },
          {
            type: "glossary",
            term: L("Quarter"),
            meaning: L(
              "One of the four separate sections that make up the udder, each with its own teat. Because the quarters are separate, an infection can affect just one quarter while the other three stay perfectly healthy."
            ),
          },
          {
            type: "glossary",
            term: L("Mastitis"),
            meaning: L(
              "Inflammation (swelling and irritation) of the udder, almost always caused by germs getting in — most often through the opening of the teat. It is one of the most damaging problems a dairy animal can have."
            ),
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("Exotic and crossbred cows"),
                text: L(
                  "Pure exotic breeds (such as HF and Jersey) are the MOST likely to get mastitis, with crossbred cows next most likely."
                ),
              },
              {
                label: L("Local breeds"),
                text: L("Local breeds get mastitis less often — mainly because they give less milk and have somewhat better natural immunity."),
              },
              {
                label: L("Buffaloes"),
                text: L("Buffaloes are the LEAST likely of all to get mastitis."),
              },
            ],
          },
          {
            type: "callout",
            style: "tip",
            heading: L("Your Job: Notice and Report — Never Diagnose or Treat"),
            text: L(
              "Mastitis can cause a drop in milk, permanent damage to a quarter, or even death of the animal if it is missed. Your role is never to decide what kind of mastitis it is or what medicine to use — that is always the veterinarian's job. Your job is to notice that something about the udder or the milk looks wrong, and to report it the same day."
            ),
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("What is a 'quarter' of the udder?"),
            options: [
              L("The four legs of the animal"),
              L("One of the four separate sections of the udder, each with its own teat"),
              L("A measurement of how much milk an animal gives"),
              L("The stomach of the animal"),
            ],
            answer: 1,
            explain: L("The udder is divided into four separate quarters, each with its own teat — a problem in one quarter does not automatically affect the others."),
          },
          {
            type: "truefalse",
            q: L("Buffaloes are more likely to get mastitis than crossbred cows."),
            answer: false,
            explain: L("The opposite is true — buffaloes are the LEAST likely of all to get mastitis, while exotic and crossbred cows are the most likely."),
          },
        ],
      },
      {
        id: "t-m9-acute-signs",
        title: L("Acute Mastitis: Signs You Can Actually See"),
        teach: [
          {
            type: "text",
            heading: L("What Is Acute Mastitis?"),
            html: L(
              "Acute mastitis (sometimes just called clinical mastitis) is the severe form of mastitis, where the changes are <b>clearly visible</b> — both in the udder itself and in the milk that comes out of it. High-yielding animals are more prone to it. It is mainly caused by bacteria (there are more than 100 types that can cause it), though fungi and viruses can also cause it, and rarely even algae."
            ),
          },
          {
            type: "glossary",
            term: L("Inflammation"),
            meaning: L(
              "The body's reaction to injury or infection in one part of the body — usually involving swelling, and the part looking or feeling different from the healthy parts around it."
            ),
          },
          {
            type: "text",
            heading: L("What You Will Actually Notice"),
            html: L(
              "Because acute mastitis is inflammation of the udder, the affected quarter looks and feels swollen and different from the other three, healthy quarters. The milk itself also looks different from what that animal's milk normally looks like — it will clearly not look normal to anyone watching. This is what makes acute mastitis different from the hidden form you'll learn about in the next lesson: with acute mastitis, the changes are there for anyone to see."
            ),
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("Unclean animal or shed"),
                text: L("Dirt and germs around the animal or in the shed make it much easier for infection to enter the udder."),
              },
              {
                label: L("Faulty milking practices"),
                text: L("Careless or unhygienic milking is one of the main ways infection gets into the udder."),
              },
              {
                label: L("Injury to the teat or udder"),
                text: L("Any injury to the teat or udder gives germs an easy way in."),
              },
            ],
          },
          {
            type: "callout",
            style: "warning",
            heading: L("Speed Saves the Udder — and Sometimes the Animal"),
            text: L(
              "If you notice signs of acute mastitis, contact the veterinarian immediately. Early treatment — within 2 to 3 hours — greatly improves the chances of a full cure. Delayed treatment can cause permanent loss of the udder, or even death of the animal. This is not a 'wait and watch' situation."
            ),
          },
          {
            type: "callout",
            style: "info",
            heading: L("After Treatment: The Milk Is Set Aside"),
            text: L(
              "Once a veterinarian has treated an animal for mastitis, the milk from that animal is normally kept out of the milk supply for at least 4 days after treatment ends, or for as long as the veterinarian directs. This is a farm rule you may be asked to follow — not something you need to decide yourself."
            ),
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("Why is speed so important once acute mastitis is suspected?"),
            options: [
              L("It isn't — mastitis always heals on its own eventually"),
              L("Early treatment, within 2–3 hours, greatly improves the chance of a cure; delay can cost the animal its udder or its life"),
              L("Only to save money on milk that would otherwise be discarded"),
              L("Because the milk needs to be sold that same day"),
            ],
            answer: 1,
            explain: L("Acute mastitis can progress fast — treating it within 2–3 hours gives the best chance of recovery, while delay risks permanent damage or death."),
          },
          {
            type: "truefalse",
            q: L("With acute mastitis, the changes in the udder and the milk are clearly visible, not hidden."),
            answer: true,
            explain: L("Correct — acute mastitis is defined by physical changes you can actually see in both the udder and the milk."),
          },
        ],
      },
    ],
    finalQuiz: {
      passScore: 70,
      questions: [
        {
          topicId: "t-m9-what-is-mastitis",
          type: "mcq",
          q: L("What is mastitis?"),
          options: [
            L("A disease of the animal's legs"),
            L("Inflammation of the udder, almost always caused by germs getting in"),
            L("A normal stage of milk production"),
            L("A disease that only affects buffaloes"),
          ],
          answer: 1,
          explain: L("Mastitis is inflammation of the udder, usually caused by germs entering — most often through the teat."),
        },
        {
          topicId: "t-m9-what-is-mastitis",
          type: "truefalse",
          q: L("Pure exotic breeds like HF and Jersey are more likely to get mastitis than local breeds."),
          answer: true,
          explain: L("Yes — exotic breeds are the most susceptible, crossbreds next, local breeds less so, and buffaloes the least susceptible of all."),
        },
        {
          topicId: "t-m9-acute-signs",
          type: "mcq",
          q: L("Which of these is a major cause that makes acute mastitis more likely?"),
          options: [L("Faulty milking practices"), L("The animal chewing the cud"), L("Cool weather"), L("A high Body Condition Score")],
          answer: 0,
          explain: L("Faulty (careless or unhygienic) milking practices are one of the main predisposing factors for mastitis, along with an unclean shed and injury to the udder or teat."),
        },
        {
          topicId: "t-m9-acute-signs",
          type: "truefalse",
          q: L("If you suspect acute mastitis, it is fine to wait a day or two and see if it clears up on its own."),
          answer: false,
          explain: L("No — report it immediately. Treatment within 2–3 hours gives the best chance of a cure; delay can mean permanent loss of the udder or death of the animal."),
        },
        {
          topicId: "t-m9-what-is-mastitis",
          type: "mcq",
          q: L("What is your job when you notice something unusual about an udder?"),
          options: [
            L("Decide which medicine to give"),
            L("Notice it and report it the same day — never diagnose or treat it yourself"),
            L("Wait until the next scheduled vet visit"),
            L("Only mention it if the animal stops eating too"),
          ],
          answer: 1,
          explain: L("Your role is always to notice and report promptly. Deciding what kind of mastitis it is, and what treatment to give, is the veterinarian's job."),
        },
      ],
    },
  },

  // ==================================================================
  // LESSON 2 — Chronic Mastitis and Sub-Clinical Mastitis
  // ==================================================================
  {
    id: "m9-l2",
    title: L("Chronic and Sub-Clinical Mastitis: The Hidden Forms"),
    estMinutes: 9,
    hook: [
      {
        type: "hero",
        heading: L("Not All Mastitis Looks Sick"),
        text: L(
          "Acute mastitis is easy to see. But the two forms in this lesson are much harder to catch — one hides inside an udder for a long time, and the other shows almost no signs at all, even though together they cause most of a farm's mastitis losses. Knowing that these hidden forms exist is itself the most important thing you can learn here."
        ),
      },
    ],
    topics: [
      {
        id: "t-m9-chronic",
        title: L("Chronic Mastitis: A Long-Term, Hidden Infection"),
        teach: [
          {
            type: "text",
            heading: L("What Is Chronic Mastitis?"),
            html: L(
              "<b>Chronic mastitis</b> is a persistent (long-lasting) infection of the udder. Most of the time it exists in a hidden, subclinical form (you'll meet this properly in the next topic), but it can occasionally flare up into the clearly visible, acute form before settling back into hiding again. Over time, it results in hard lumps forming in the udder."
            ),
          },
          {
            type: "glossary",
            term: L("Atrophy"),
            meaning: L("When a part of the body — here, a quarter of the udder — shrinks and stops working properly because of long-term damage."),
          },
          {
            type: "glossary",
            term: L("Fibrosis"),
            meaning: L("When soft tissue turns hard and stiff, almost like a scar, because of long-term damage or infection."),
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("Neglected sub-clinical mastitis"),
                text: L("Leaving a hidden infection untreated is a major reason it turns into chronic mastitis."),
              },
              {
                label: L("Improper treatment of acute mastitis"),
                text: L("If acute mastitis is not treated correctly, it can settle into a long-term, chronic infection instead of clearing up."),
              },
              {
                label: L("Unhygienic shed"),
                text: L("A dirty shed keeps re-exposing the animal to the germs that cause and worsen mastitis."),
              },
            ],
          },
          {
            type: "callout",
            style: "warning",
            heading: L("Why Early Reporting Matters So Much Here"),
            text: L(
              "Once a quarter has atrophied (shrunk) or developed fibrosis (hardened), the chances of it recovering are very low — this is why reporting the earlier, more treatable forms of mastitis quickly is so important. Antimicrobial treatment usually does not work well once mastitis has become chronic."
            ),
          },
          {
            type: "callout",
            style: "tip",
            heading: L("What the Farm Does With a Chronically Affected Animal"),
            text: L(
              "A cow or buffalo with chronic mastitis is usually kept separate from the rest of the herd, since she remains a source of infection for healthy animals, and she is milked at the very end, after all the healthy animals. These are decisions for the farm and the veterinarian — your part is to recognise the animal and make sure this information reaches them."
            ),
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("What often leads to chronic mastitis developing in an animal?"),
            options: [
              L("Neglected sub-clinical mastitis"),
              L("Improper treatment of acute mastitis"),
              L("An unhygienic shed"),
              L("All of these"),
            ],
            answer: 3,
            explain: L("All three — a neglected hidden infection, poorly treated acute mastitis, and an unhygienic shed — can lead to chronic mastitis."),
          },
          {
            type: "truefalse",
            q: L("Once a quarter has atrophied or developed fibrosis, its chances of recovering are very low."),
            answer: true,
            explain: L("True — this is exactly why catching and reporting mastitis earlier, before this damage happens, matters so much."),
          },
        ],
      },
      {
        id: "t-m9-subclinical",
        title: L("Sub-Clinical Mastitis (SCM): The Type You Cannot See"),
        teach: [
          {
            type: "text",
            heading: L("The Most Common — and Most Costly — Type"),
            html: L(
              "<b>Sub-clinical mastitis (SCM)</b> is the most common form of mastitis on a farm, and it causes about 70% of all the losses that mastitis causes overall — mainly because it can quietly continue for the animal's entire lactation. It is also the starting point that the other forms — acute and chronic mastitis — often develop from."
            ),
          },
          {
            type: "glossary",
            term: L("Lactation"),
            meaning: L("The period of time during which a cow or buffalo produces milk, starting after she gives birth."),
          },
          {
            type: "callout",
            style: "warning",
            heading: L("Why SCM Is So Easy to Miss"),
            text: L(
              "Unlike acute mastitis, SCM shows no specific visible sign — at most, a slight decrease in milk production. There is no physical change you can see in the udder or in the milk, which means it cannot normally be detected just by looking, the way you can with the seven questions or acute mastitis. This is exactly why it causes so much hidden loss."
            ),
          },
          {
            type: "text",
            heading: L("How a Farm Finds Hidden SCM"),
            html: L(
              "Because SCM cannot be seen, farms rely on simple tests done on the milk itself, checking each quarter separately. One such test mixes equal amounts of milk with a special testing liquid — if SCM is present, the mixture forms a gel. Running and reading these tests correctly is a specific, trained task, so this is normally done by someone trained for it, or the veterinarian — but knowing that this kind of routine testing exists helps you understand why animals are tested even when they look completely fine."
            ),
          },
          {
            type: "callout",
            style: "tip",
            heading: L("Regular Testing Is the Real Defence"),
            text: L(
              "Because SCM has no visible signs, the recommended approach is to test every animal for it at least once a week, testing each quarter separately. Newly purchased animals should also be tested before they are mixed in with the rest of the herd, so a hidden infection doesn't spread."
            ),
          },
          {
            type: "callout",
            style: "info",
            heading: L("The Good News About SCM"),
            text: L(
              "SCM has a much higher chance of being cured than clinical (acute) or chronic mastitis. Treating it in time also reduces the chances that it will ever develop into those more serious, harder-to-treat forms — one more reason routine testing and prompt reporting matter."
            ),
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("What makes sub-clinical mastitis (SCM) so tricky?"),
            options: [
              L("It only affects buffaloes"),
              L("It shows no visible sign in the udder or milk, apart from a possible slight drop in milk"),
              L("It always shows the same obvious swelling as acute mastitis"),
              L("It cannot be cured at all"),
            ],
            answer: 1,
            explain: L("SCM has no clear visible sign — the udder and milk look normal, which is exactly why regular testing is needed to catch it."),
          },
          {
            type: "truefalse",
            q: L("SCM causes only a small share of the total losses a farm suffers from mastitis."),
            answer: false,
            explain: L("False — SCM causes about 70% of all mastitis-related losses, mainly because it can continue quietly for an animal's whole lactation."),
          },
        ],
      },
    ],
    finalQuiz: {
      passScore: 70,
      questions: [
        {
          topicId: "t-m9-chronic",
          type: "mcq",
          q: L("Chronic mastitis is best described as:"),
          options: [
            L("A one-day illness that always clears up on its own"),
            L("A persistent, long-lasting infection of the udder that results in hard lumps"),
            L("A disease that only affects heifers"),
            L("The same thing as a sudden drop in milk with no other cause"),
          ],
          answer: 1,
          explain: L("Chronic mastitis is a persistent infection, existing mostly in hidden (subclinical) form, that leads to hard lumps in the udder over time."),
        },
        {
          topicId: "t-m9-chronic",
          type: "truefalse",
          q: L("An animal with chronic mastitis should be milked first, before the healthy animals in the herd."),
          answer: false,
          explain: L("The opposite — she should be milked LAST, and kept separate from the herd, since she remains a source of infection for healthy animals."),
        },
        {
          topicId: "t-m9-subclinical",
          type: "mcq",
          q: L("About what share of a farm's total mastitis losses does sub-clinical mastitis (SCM) cause?"),
          options: [L("About 10%"), L("About 30%"), L("About 70%"), L("Almost none")],
          answer: 2,
          explain: L("SCM causes about 70% of all mastitis-related losses, largely because it can go unnoticed for an animal's entire lactation."),
        },
        {
          topicId: "t-m9-subclinical",
          type: "truefalse",
          q: L("SCM has a better chance of being cured than acute or chronic mastitis."),
          answer: true,
          explain: L("True — and treating SCM promptly also lowers the chance it develops into the more serious clinical or chronic forms."),
        },
        {
          topicId: "t-m9-chronic",
          type: "truefalse",
          q: L("Antimicrobial treatment is usually very effective once mastitis has become chronic."),
          answer: false,
          explain: L("False — antimicrobial treatment usually does not work well by the chronic stage, which is exactly why catching mastitis earlier matters so much."),
        },
      ],
    },
  },

  // ==================================================================
  // LESSON 3 — Mastitis in Heifers, and Everyday Prevention
  // ==================================================================
  {
    id: "m9-l3",
    title: L("Mastitis in Heifers, and Everyday Prevention"),
    estMinutes: 9,
    hook: [
      {
        type: "hero",
        heading: L("Prevention Starts Before an Animal Ever Gives Her First Drop of Milk"),
        text: L(
          "It's easy to assume mastitis is only a problem for animals that are already being milked. It isn't — young heifers can get it too, and the daily hygiene habits around every animal on the farm are what keep all forms of mastitis away in the first place. This lesson closes out the topic with both of those pieces."
        ),
      },
    ],
    topics: [
      {
        id: "t-m9-heifers",
        title: L("Mastitis in Heifers: Not Just an Adult-Cow Problem"),
        teach: [
          {
            type: "text",
            heading: L("Heifers Are Not Automatically Safe"),
            html: L(
              "A <b>heifer</b> is a young female cow or buffalo that has not yet had a calf, or has had only one. Heifers have traditionally been thought of as a group that is free of mastitis — but this is not true. Their developing udders can be affected too, well before they are ever milked."
            ),
          },
          {
            type: "glossary",
            term: L("Heifer"),
            meaning: L("A young female cow or buffalo that has not yet had her first calf, or has had only one."),
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("Swollen quarters"),
                text: L("A quarter of a heifer's developing udder that looks or feels swollen compared to the others is a sign worth reporting."),
              },
              {
                label: L("Abnormal secretions"),
                text: L("Clots or flakes in the fluid from a heifer's developing udder are not normal and should be reported."),
              },
              {
                label: L("Teat scabs or abrasions"),
                text: L("A heifer with scabs or scrapes on the teat skin is also likely to be infected, and should be reported."),
              },
            ],
          },
          {
            type: "callout",
            style: "tip",
            heading: L("Your Job Stays the Same: Notice, Then Report"),
            text: L(
              "Regularly and gently looking at and feeling a heifer's developing udder and teat skin is how these signs are found. If you notice swelling, unusual fluid, or scabs and scrapes on the teat, report it so a veterinarian can advise — never decide on treatment yourself."
            ),
          },
          {
            type: "text",
            heading: L("Protecting Calves Early Also Protects Future Udders"),
            html: L(
              "Some heifer mastitis begins with problems that happen much earlier, as young calves. Calves should get an early, adequate feed of <b>colostrum</b> and be removed from their mother as soon as possible. Watching how calves behave with each other also matters — a calf that sucks on other calves should be removed from the group, since this kind of cross-suckling can injure developing teats and lead to infection later."
            ),
          },
          {
            type: "glossary",
            term: L("Colostrum"),
            meaning: L(
              "The first, thick, yellowish milk a mother produces right after giving birth. It is rich in things that help a newborn calf fight off illness."
            ),
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("Which of these is a sign that a heifer's developing udder may have a problem?"),
            options: [
              L("A swollen quarter with abnormal secretions such as clots or flakes"),
              L("A normal appetite"),
              L("Chewing the cud while resting"),
              L("A shiny, even coat"),
            ],
            answer: 0,
            explain: L("Swollen quarters and abnormal secretions (clots or flakes) in a heifer's developing udder are signs worth reporting."),
          },
          {
            type: "truefalse",
            q: L("Heifers cannot get mastitis because they have never been milked before."),
            answer: false,
            explain: L("False — this is a common but incorrect assumption. Heifers' developing udders can be affected by mastitis too."),
          },
        ],
      },
      {
        id: "t-m9-prevention",
        title: L("Everyday Hygiene: Preventing All Types of Mastitis"),
        teach: [
          {
            type: "text",
            heading: L("Small Daily Habits, Big Difference"),
            html: L(
              "Across acute, chronic, sub-clinical and heifer mastitis, the same few daily habits around cleanliness and careful milking come up again and again as the real defence. None of them require special training in animal medicine — they simply need to be done properly, every single time."
            ),
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("Before milking"),
                text: L("Clean the udder well with clean water and wipe it dry with a clean towel — a separate towel for each animal, or a disposable paper towel."),
              },
              {
                label: L("During milking"),
                text: L("Milking should be quick, complete and hygienic. Animals with chronic mastitis or known SCM should always be milked last."),
              },
              {
                label: L("After milking"),
                text: L("Teat dip or spray immediately, and prevent the animal from sitting down for at least 30–45 minutes afterwards."),
              },
              {
                label: L("The shed itself"),
                text: L("Keep the shed floor free of holes and as dry as possible, and carry out proper fly control."),
              },
            ],
          },
          {
            type: "glossary",
            term: L("Teat Dipping"),
            meaning: L(
              "Dipping or spraying each teat with a disinfectant liquid right after milking, while the teat opening is still slightly open, so germs have less chance of getting in before it closes."
            ),
          },
          {
            type: "callout",
            style: "warning",
            heading: L("A Small Detail That Matters: Reusing Towels"),
            text: L(
              "Repeated use of the same unclean towel across different animals can itself cause mastitis to spread. A habit meant to keep animals clean can backfire if the towel itself is dirty — this is exactly the kind of small lapse worth reporting."
            ),
          },
          {
            type: "callout",
            style: "info",
            heading: L("The Most Critical Window: The Last Week Before Calving"),
            text: L(
              "The last seven days before an animal calves is one of the most critical times for preventing new udder infections. Teat dipping is also continued for two weeks after an animal is dried off (stops being milked) and restarted two weeks before her next calving. Proper nutrition matters too — enough minerals help the udder's immune system, though animals should not be over-fed to the point of becoming overweight."
            ),
          },
          {
            type: "callout",
            style: "tip",
            heading: L("Your Part in All of This"),
            text: L(
              "You don't need to design a prevention plan — you need to follow the cleaning and milking routine carefully every time, and speak up if you see it being skipped: a dirty towel reused, a wet or damaged shed floor, milking done in a rush, or flies left uncontrolled. These small, everyday reports are what keep mastitis rates down across the whole herd."
            ),
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("When milking a group of animals, where should an animal known to have chronic mastitis or SCM be milked in the order?"),
            options: [L("First, before the healthy animals"), L("It doesn't matter"), L("Last, after the healthy animals"), L("She should not be milked at all")],
            answer: 2,
            explain: L("Animals with chronic mastitis or SCM should always be milked last, so infection is not carried to healthy animals."),
          },
          {
            type: "truefalse",
            q: L("The last seven days before an animal calves is one of the most critical times for preventing new udder infections."),
            answer: true,
            explain: L("True — extra care with hygiene during this window helps prevent new infections right before and after calving."),
          },
        ],
      },
    ],
    finalQuiz: {
      passScore: 70,
      questions: [
        {
          topicId: "t-m9-heifers",
          type: "truefalse",
          q: L("It used to be wrongly assumed that heifers were completely free of mastitis."),
          answer: true,
          explain: L("True — heifers have traditionally, and wrongly, been thought of as a group free of mastitis."),
        },
        {
          topicId: "t-m9-heifers",
          type: "mcq",
          q: L("Why should a calf that sucks on other calves be removed from the group?"),
          options: [
            L("It has no effect on udder health"),
            L("Cross-suckling can injure developing teats and lead to infection later"),
            L("It only wastes milk"),
            L("Because it will refuse colostrum afterwards"),
          ],
          answer: 1,
          explain: L("Cross-suckling can injure a young animal's developing teats, which can lead to mastitis problems later in life."),
        },
        {
          topicId: "t-m9-prevention",
          type: "mcq",
          q: L("When should teat dipping or spraying be done?"),
          options: [L("Only once a month"), L("Immediately after milking"), L("Only if the animal looks unwell"), L("Before milking only")],
          answer: 1,
          explain: L("Teat dipping or spraying is done immediately after milking, while the teat opening is still slightly open."),
        },
        {
          topicId: "t-m9-prevention",
          type: "truefalse",
          q: L("Reusing the same unclean towel to dry different animals' udders can itself cause mastitis to spread."),
          answer: true,
          explain: L("True — an unclean, shared towel is exactly the kind of small hygiene lapse that can spread infection between animals."),
        },
        {
          topicId: "t-m9-heifers",
          type: "mcq",
          q: L("What should you do if you notice teat scabs or abrasions on a heifer?"),
          options: [
            L("Ignore it since heifers can't get mastitis"),
            L("Apply your own home remedy"),
            L("Report it — she is likely infected and needs a veterinarian's advice"),
            L("Wait until she starts giving milk to check again"),
          ],
          answer: 2,
          explain: L("Heifers with teat scabs or abrasions are likely to be infected and should be reported so a veterinarian can advise on treatment."),
        },
      ],
    },
  },
    ],
  },
  {
    id: "m10",
    number: 10,
    title: L("Common Poisoning Conditions"),
    subtitle: L("Recognising the most common poisoning cases seen in the field, and what to do immediately."),
    icon: "warning",
    available: true,
    lessons: [
// ==================================================================
  // LESSON 1 — Recognising Poisoning: Cottonseed and Plant Poisons
  // ==================================================================
  {
    id: "m10-l1",
    title: L("Recognising Poisoning: Cottonseed and Plant Poisons"),
    estMinutes: 8,
    hook: [
      {
        type: "hero",
        heading: L("Some of the Most Dangerous Emergencies You Will See"),
        text: L(
          "Poisoning happens when an animal eats or comes into contact with something harmful — certain plants, or certain feeds. It can turn fatal within hours, sometimes even before a vet can be called. Your most powerful tool is recognising the warning signs early and getting help immediately — you are never expected to treat poisoning yourself."
        ),
      },
    ],
    topics: [
      {
        id: "t-m10-gossypol",
        title: L("Gossypol Poisoning: When Cottonseed Feed Turns Harmful"),
        teach: [
            {
              type: "photo",
              src: "assets/photo-m10-cottonseed.jpg",
              alt: L("Cattle and calves eating whole cottonseed spread on pasture, with a farmer standing nearby holding a feed bucket"),
              caption: L("Whole cottonseed feed — the exact feed source that contains gossypol, the poisoning risk this lesson covers."),
            },
          {
            type: "text",
            heading: L("What Is Gossypol Poisoning?"),
            html: L(
              "Cottonseed and cottonseed-based feeds are commonly given to high-yielding dairy cows because they are rich in protein. But cottonseed naturally contains a substance called <b>gossypol</b>. If cows — especially heavy milk producers eating a lot of feed — are given cottonseed products in excess, or over a long period, gossypol can build up in the body and become poisonous. Other adult ruminants fed too much gossypol for a long time can also be affected."
            ),
          },
          {
            type: "glossary",
            term: L("Gossypol"),
            meaning: L(
              "A natural substance found in cottonseed. In small amounts it is not a problem, but if an animal — especially a high-producing dairy cow — eats too much cottonseed feed, or eats it for too long, gossypol can build up in the body and cause poisoning."
            ),
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("Early signs"),
                text: L("Irregular breeding cycles in cows and buffaloes, and reduced interest in mating in male animals."),
              },
              {
                label: L("General body signs"),
                text: L("Weight loss, weakness, going off feed (not eating), and becoming more easily stressed than usual."),
              },
              {
                label: L("More serious signs"),
                text: L(
                  "In adult dairy cattle: weakness, dullness (depression), not eating, swelling under the skin near the chest (called the brisket), and difficult breathing. Blood may also appear in the urine, along with reproductive problems."
                ),
              },
            ],
          },
          {
            type: "callout",
            style: "warning",
            heading: L("Don't Wait — Even After Feed Is Stopped"),
            text: L(
              "Gossypol poisoning is serious. Even after cottonseed feed is removed, severely affected animals can still die up to two weeks later, and poor weight gain can continue for several weeks. This is exactly why noticing the early signs and reporting them immediately matters so much — the sooner a vet is involved, the better the animal's chances."
            ),
          },
          {
            type: "callout",
            style: "tip",
            heading: L("If You Suspect Gossypol Poisoning"),
            text: L(
              "Stop feeding cottonseed or cottonseed products to the animal straight away, and inform the owner or vet immediately. Do not try to treat the animal yourself beyond this — a vet needs to guide any further care, including any changes to diet."
            ),
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("Gossypol poisoning is caused by:"),
            options: [
              L("Cottonseed or cottonseed feed given in excess or over long periods"),
              L("A snake bite"),
              L("Dirty drinking water"),
              L("The animal working too hard"),
            ],
            answer: 0,
            explain: L(
              "Gossypol is a substance naturally found in cottonseed. Too much of it, or feeding it for too long, can build up in the body and poison the animal."
            ),
          },
          {
            type: "truefalse",
            q: L("Once cottonseed feed is removed from an affected animal's diet, the animal is immediately safe and can no longer die from gossypol poisoning."),
            answer: false,
            explain: L(
              "No — severely affected animals can still die up to two weeks after cottonseed products are stopped. Removing the feed is essential, but it is not an instant cure."
            ),
          },
        ],
      },
      {
        id: "t-m10-cyanide",
        title: L("Cyanide Poisoning: A Fast-Moving Emergency from Certain Plants"),
        teach: [
            {
              type: "photo",
              src: "assets/illustration-m10-cyanide.png",
              alt: L("Illustrated three-step diagram: an animal eating young sorghum or cassava leaves, cyanide blocking oxygen use in the body's cells, and the animal collapsing."),
              caption: L("Illustration: how cyanide poisoning happens — it blocks the body's cells from using oxygen, causing sudden breathing distress and collapse."),
            },
            {
              type: "photo",
              src: "assets/photo-m10-sorghum.jpg",
              alt: L("A sorghum plant growing in a field, with its tall grain seed head visible against a clear sky"),
              caption: L("Sorghum — one of the plants this lesson names as a cyanide poisoning risk, especially at young growth stages."),
            },
            {
              type: "photo",
              src: "assets/photo-m10-cassava.jpg",
              alt: L("Close-up of cassava (tapioca) plant leaves, showing their distinctive palm-shaped leaflets"),
              caption: L("Tapioca (cassava) leaves — another plant this lesson names as a cyanide poisoning risk."),
            },
          {
            type: "text",
            heading: L("Where Cyanide Poisoning Comes From"),
            html: L(
              "The most common cause of cyanide poisoning is an animal eating certain plants — including arrow grass, velvet grass, young Sorghum plants, and tapioca leaves. These plants can contain enough cyanide to poison an animal that eats them, especially at certain growth stages."
            ),
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("How fast it happens"),
                text: L("Signs can appear within just 15–20 minutes, or up to a few hours, after the animal eats the toxic plant."),
              },
              {
                label: L("Early signs"),
                text: L("The animal may first appear excited or agitated."),
              },
              {
                label: L("Breathing and drooling"),
                text: L("This is followed by fast, difficult breathing and heavy drooling (excess saliva)."),
              },
              {
                label: L("Gums and mouth colour"),
                text: L(
                  "The gums and moist lining inside the mouth (mucous membranes) start out bright red, but may turn bluish later on."
                ),
              },
            ],
          },
          {
            type: "glossary",
            term: L("Mucous Membranes"),
            meaning: L(
              "The soft, moist, pink lining inside an animal's mouth and gums. Checking their colour is one way people notice changes in an animal's condition."
            ),
          },
          {
            type: "callout",
            style: "warning",
            heading: L("This Can Kill Within an Hour"),
            text: L(
              "Affected animals may stumble, struggle, and collapse within about an hour of eating the toxic plant. Cyanide poisoning is a genuine emergency — immediate veterinary help must be sought the moment it is suspected. Treatment works very well, but only if it is given in time."
            ),
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("Avoid young, risky grasses"),
                text: L("Don't let animals graze on grasses known to cause this poisoning until the grass is at least 15–18 inches tall."),
              },
              {
                label: L("Wait for sorghum to grow"),
                text: L("Forage sorghum should be several feet tall before it is used as fodder."),
              },
              {
                label: L("Timing of grazing"),
                text: L("Animals should be turned out to new pasture later in the day, not early morning."),
              },
              {
                label: L("Extra caution in stressful periods"),
                text: L("Grazing should be monitored closely during periods of environmental stress."),
              },
            ],
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("Which of these plants can cause cyanide poisoning if eaten?"),
            options: [L("Young Sorghum plants"), L("Fully grown wheat"), L("Dried hay"), L("Rice straw")],
            answer: 0,
            explain: L("Young Sorghum plants, along with arrow grass, velvet grass, and tapioca leaves, are named sources of cyanide poisoning."),
          },
          {
            type: "truefalse",
            q: L("Cyanide poisoning can cause an animal to collapse within about an hour of eating the toxic plant."),
            answer: true,
            explain: L("Yes — signs can begin within 15–20 minutes, and affected animals may stumble and collapse within about an hour."),
          },
        ],
      },
    ],
    finalQuiz: {
      passScore: 70,
      questions: [
        {
          topicId: "t-m10-gossypol",
          type: "mcq",
          q: L("Which animals are most at risk of gossypol poisoning?"),
          options: [
            L("High-producing dairy cows eating a lot of cottonseed feed"),
            L("Newborn calves that have never eaten solid food"),
            L("Animals kept indoors overnight"),
            L("Animals that only drink water"),
          ],
          answer: 0,
          explain: L("High-producing dairy cows with high feed intake, given excess cottonseed products, are the animals most at risk."),
        },
        {
          topicId: "t-m10-gossypol",
          type: "truefalse",
          q: L("Swelling under the skin near the chest (brisket) and difficult breathing can be signs of gossypol poisoning in adult dairy cattle."),
          answer: true,
          explain: L("Yes — these are among the more serious signs listed for adult dairy cattle with gossypol poisoning."),
        },
        {
          topicId: "t-m10-gossypol",
          type: "mcq",
          q: L("What should you do first if you suspect gossypol poisoning?"),
          options: [
            L("Stop feeding cottonseed products and tell the owner or vet immediately"),
            L("Give the animal extra cottonseed to settle its stomach"),
            L("Wait a month to see if it improves on its own"),
            L("Only mention it if the animal stops eating completely"),
          ],
          answer: 0,
          explain: L("Removing cottonseed feed immediately and reporting to the owner or vet right away is the correct first step."),
        },
        {
          topicId: "t-m10-cyanide",
          type: "mcq",
          q: L("About how soon can signs of cyanide poisoning appear after an animal eats a toxic plant?"),
          options: [L("15–20 minutes to a few hours"), L("One full week"), L("Only after several months"), L("Signs never appear")],
          answer: 0,
          explain: L("Signs occur within 15–20 minutes to a few hours after the animal eats toxic forage — this is a fast-moving emergency."),
        },
        {
          topicId: "t-m10-cyanide",
          type: "truefalse",
          q: L("Cyanide poisoning treatment works well, but only if it is given in time."),
          answer: true,
          explain: L("Correct — this is exactly why immediate veterinary help must be sought the moment cyanide poisoning is suspected."),
        },
        {
          topicId: "t-m10-cyanide",
          type: "truefalse",
          q: L("Grazing animals should be monitored closely during periods of environmental stress, as part of preventing cyanide poisoning."),
          answer: true,
          explain: L("Yes — close monitoring during environmental stress is one of the prevention steps described for cyanide-related poisoning."),
        },
      ],
    },
  },

  // ==================================================================
  // LESSON 2 — Organophosphorous (Pesticide) Poisoning and Acting Fast
  // ==================================================================
  {
    id: "m10-l2",
    title: L("Organophosphorous (Pesticide) Poisoning and Acting Fast"),
    estMinutes: 8,
    hook: [
      {
        type: "hero",
        heading: L("Farm Chemicals Can Poison Too — Know the Signs, Act Fast"),
        text: L(
          "Pesticides are used on crops, and directly on cattle and buffaloes to kill ticks. Most of these pesticides are organophosphorous (OP) compounds — active poisons. Used or handled the wrong way, they can poison the very animals they were meant to protect. This lesson covers how to recognise OP poisoning, how to prevent it, and why speed matters so much when it happens."
        ),
      },
    ],
    topics: [
      {
        id: "t-m10-op-symptoms",
        title: L("Recognising Organophosphorous (Pesticide) Poisoning"),
        teach: [
            {
              type: "photo",
              src: "assets/photo-m10-pesticide-spraying.jpg",
              alt: L("A tractor towing a boom sprayer, applying pesticide to a ploughed field, with visible spray mist"),
              caption: L("Pesticide being sprayed on a field. Most pesticides — including tick-control products used on cattle — are organophosphorous (OP) compounds, the hazard this lesson covers."),
            },
          {
            type: "text",
            heading: L("What Are Organophosphorous (OP) Compounds?"),
            html: L(
              "Pesticides are chemicals used to control pests on crops, and to kill ticks on cattle and buffaloes. Most pesticides are made from <b>organophosphorous (OP)</b> compounds. These are active poisons — meant to kill small pests and parasites, but capable of poisoning a cow or buffalo too, if used the wrong way or in excess."
            ),
          },
          {
            type: "glossary",
            term: L("Organophosphorous (OP) Compound"),
            meaning: L(
              "A type of chemical used in many common pesticides, including tick-killing products applied to cattle and buffaloes. It works by poisoning pests and parasites, but it can also poison the animal itself if not used correctly."
            ),
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("General condition"),
                text: L("Severe depression — the animal appears very dull and low."),
              },
              {
                label: L("Drooling and urination"),
                text: L("Heavy drooling (hypersalivation), and passing urine more often than normal."),
              },
              {
                label: L("Digestion and breathing"),
                text: L("Diarrhoea, abdominal pain (colic), and difficult breathing."),
              },
              {
                label: L("Muscles and nervous system"),
                text: L(
                  "Muscles twitching visibly under the skin, nervousness, unsteady walking, apprehension, and even seizures (fits). The pupils of the eyes may also become very small (constricted)."
                ),
              },
            ],
          },
          {
            type: "example",
            heading: L("Where OP Exposure Often Comes From"),
            text: L(
              "OP poisoning can happen when pesticide is sprayed on an animal's body to kill ticks, when pesticide-sprayed fodder is fed without washing it first, or when an animal comes into contact with pesticide containers or contaminated feed."
            ),
          },
          {
            type: "callout",
            style: "warning",
            heading: L("Every Hour Matters"),
            text: L(
              "Contact a veterinarian immediately the moment you notice these symptoms. Treating OP poisoning early greatly increases the animal's chances of survival."
            ),
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("Which of these is a symptom of OP poisoning described in this lesson?"),
            options: [L("Heavy drooling and muscle twitching under the skin"), L("A shiny, smooth coat"), L("Increased appetite"), L("Higher milk yield")],
            answer: 0,
            explain: L("Heavy drooling (hypersalivation) and visible muscle twitching are both listed symptoms of OP poisoning."),
          },
          {
            type: "truefalse",
            q: L("Treating OP poisoning early increases the animal's chances of survival."),
            answer: true,
            explain: L("Yes — contacting a vet the moment symptoms are noticed gives the animal a much better chance."),
          },
        ],
      },
      {
        id: "t-m10-op-prevention",
        title: L("Preventing Pesticide Poisoning and Acting Immediately"),
        teach: [
          {
            type: "text",
            heading: L("Simple Precautions That Prevent Most Cases"),
            html: L(
              "Most OP poisoning can be avoided with a few basic precautions when pesticides are used around animals. None of these require any medical training — just care and attention whenever pesticides are being applied or stored."
            ),
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("Before spraying for ticks"),
                text: L("Give the animal enough water to drink before applying any liquid or spray pesticide on its body to kill ticks."),
              },
              {
                label: L("Washing sprayed fodder"),
                text: L("Fodder that has been sprayed with insecticide should be washed properly with water before it is fed to the animal."),
              },
              {
                label: L("Following the label"),
                text: L("Apply pesticide exactly as directed on the product label — the recommended dose and timing matter."),
              },
              {
                label: L("Animals that should not be treated"),
                text: L(
                  "Do not apply pesticides to sick, very thin, recovering, or severely stressed animals. Animals younger than 3 months should generally not be treated with pesticides for external parasites (like ticks) at all."
                ),
              },
            ],
          },
          {
            type: "glossary",
            term: L("External Parasites"),
            meaning: L(
              "Pests, such as ticks, that live on the outside of an animal's body rather than inside it. Pesticides are often applied to the skin or coat to control them."
            ),
          },
          {
            type: "callout",
            style: "tip",
            heading: L("Keep Pesticides and Contaminated Feed Away From Animals"),
            text: L(
              "Keep animals away from pesticide containers — whether new or used — and away from any feed contaminated with pesticide. Also check the product label for warnings about combining it with other pesticides or animal health products."
            ),
          },
          {
            type: "callout",
            style: "warning",
            heading: L("The One Rule That Applies to Every Poisoning in This Module"),
            text: L(
              "Whether it's cottonseed feed, a toxic plant, or a pesticide — the moment you notice signs of poisoning, your job is the same: report it and get veterinary help immediately. Never try to treat poisoning yourself. Acting quickly — not treating it yourself — is what saves the animal's life."
            ),
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("According to this lesson, animals younger than how many months should generally not be treated with pesticides for external parasites?"),
            options: [L("3 months"), L("12 months"), L("1 month"), L("There is no age limit")],
            answer: 0,
            explain: L("Animals less than 3 months of age should generally not be treated for external parasites with pesticides."),
          },
          {
            type: "truefalse",
            q: L("If you suspect an animal has been poisoned, the right response is to try a home remedy first and call the vet only if that doesn't work."),
            answer: false,
            explain: L("No — the right response is always to get veterinary help immediately, without attempting any treatment yourself first."),
          },
        ],
      },
    ],
    finalQuiz: {
      passScore: 70,
      questions: [
        {
          topicId: "t-m10-op-symptoms",
          type: "mcq",
          q: L("Most pesticides used on crops and to kill ticks on cattle are made from which type of compound?"),
          options: [L("Organophosphorous (OP) compounds"), L("Vitamin compounds"), L("Salt compounds"), L("Sugar compounds")],
          answer: 0,
          explain: L("A majority of pesticides are organophosphorous (OP) compounds, which are active poisons."),
        },
        {
          topicId: "t-m10-op-symptoms",
          type: "truefalse",
          q: L("Very small (constricted) pupils can be a sign of OP poisoning."),
          answer: true,
          explain: L("Yes — pupillary constriction is listed as a symptom of OP poisoning in cattle and buffalo."),
        },
        {
          topicId: "t-m10-op-symptoms",
          type: "mcq",
          q: L("What should you do the moment you notice symptoms of OP poisoning?"),
          options: [
            L("Contact a veterinarian immediately"),
            L("Wait a few days to see if it passes"),
            L("Give the animal more feed"),
            L("Apply more pesticide to counteract it"),
          ],
          answer: 0,
          explain: L("Contacting a vet immediately on observing symptoms gives the best chance of timely, life-saving treatment."),
        },
        {
          topicId: "t-m10-op-prevention",
          type: "mcq",
          q: L("What should be done to fodder that has been sprayed with insecticide, before feeding it to an animal?"),
          options: [L("It should be washed properly with water"), L("It should be fed as it is"), L("It should be burned"), L("It should be soaked in salt water")],
          answer: 0,
          explain: L("Fodder sprayed with insecticide should be properly washed with water before it is fed to the animal."),
        },
        {
          topicId: "t-m10-op-prevention",
          type: "truefalse",
          q: L("Animals should be kept away from both new and used pesticide containers."),
          answer: true,
          explain: L("Yes — animals should be kept away from pesticide containers, whether new or used, and from pesticide-contaminated feed."),
        },
        {
          topicId: "t-m10-op-prevention",
          type: "truefalse",
          q: L("Sick, very thin, or severely stressed animals should still be treated with pesticides on the normal schedule."),
          answer: false,
          explain: L("No — sick, emaciated, convalescent, or severely stressed animals should not be treated with pesticides for external parasites."),
        },
      ],
    },
  },
    ],
  },
  {
    id: "m11",
    number: 11,
    title: L("Common Zoonotic Diseases"),
    subtitle: L("Diseases that can pass between animals and people, and how to stay safe while handling animals."),
    icon: "shield",
    available: true,
    lessons: [
// ==================================================================
  // LESSON 1 — Understanding Zoonotic Diseases: Brucellosis, TB and Leptospirosis
  // ==================================================================
  {
    id: "m11-l1",
    title: L("Understanding Zoonotic Diseases: Brucellosis, TB and Leptospirosis"),
    estMinutes: 8,
    hook: [
      {
        type: "hero",
        heading: L("Some Diseases Can Jump From Animals to You"),
        text: L(
          "Most of this course is about noticing when an animal is unwell. This module is different — it's about YOUR own health. Some diseases can pass from cattle and buffaloes to the people who care for them. Knowing which ones, and how they spread, is the first step to staying safe while you do your daily work."
        ),
      },
    ],
    topics: [
      {
        id: "t-m11-what-is-zoonotic",
        title: L("What Does 'Zoonotic' Mean, and Why It Matters"),
        teach: [
          {
            type: "text",
            heading: L("A New Word: Zoonotic"),
            html: L(
              "A <b>zoonotic disease</b> (also called a <b>zoonosis</b>) is a disease or infection that can pass naturally between animals and people. It can travel in either direction — from an animal to a person, or occasionally from a person to an animal. If you work closely with cattle and buffaloes every day, this is something worth understanding, not to worry about, but so you know exactly how to protect yourself."
            ),
          },
          {
            type: "glossary",
            term: L("Zoonotic Disease (Zoonosis)"),
            meaning: L(
              "A disease or infection that can spread naturally between animals and humans — for example, a person catching an illness from a cow, or occasionally an animal catching one from a person."
            ),
          },
          {
            type: "text",
            heading: L("Why This Matters So Much"),
            html: L(
              "Zoonotic diseases are not rare or unusual — they make up about <b>61%</b> of all known infectious diseases. Even more strikingly, out of 175 diseases that are newly emerging around the world, about <b>75%</b> of them are zoonotic. There are roughly <b>45 zoonotic diseases</b> that are known to be able to spread from cattle. Because dairy farmers and farm workers are in close daily contact with their animals, they are always at some risk of picking up an infection from them."
            ),
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("Poor hygiene"),
                text: L("Not washing hands, or not keeping sheds and equipment clean, makes it easier for germs to pass from animal to person."),
              },
              {
                label: L("Malnutrition"),
                text: L("A person who is poorly nourished has a weaker ability to fight off infection if exposed to one."),
              },
              {
                label: L("Lack of awareness"),
                text: L("Not knowing which diseases can spread from animals, or how, makes it harder to take simple precautions."),
              },
              {
                label: L("Close contact with animals"),
                text: L("Handling animals, their milk, their waste, or assisting with births every day naturally increases the chances of exposure."),
              },
            ],
          },
          {
            type: "callout",
            style: "tip",
            heading: L("The Good News"),
            text: L(
              "Zoonotic diseases can be cured if they are diagnosed and treated promptly. The key is not to ignore symptoms in yourself — fever, joint pain, stomach upset, or anything unusual — especially if you handle animals regularly. Mention your daily contact with cattle or buffaloes to a doctor so they can consider it when checking you."
            ),
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("What does the word 'zoonotic' mean?"),
            options: [
              L("A disease that only affects very old animals"),
              L("A disease or infection that can spread naturally between animals and people"),
              L("A vaccine given to calves"),
              L("A disease that only spreads between two humans"),
            ],
            answer: 1,
            explain: L("Zoonotic (zoonosis) means a disease or infection that can pass naturally between animals and humans."),
          },
          {
            type: "truefalse",
            q: L("Zoonotic diseases can be cured if they are diagnosed and treated promptly."),
            answer: true,
            explain: L("Yes — the key is not ignoring symptoms in yourself, and telling a doctor about your regular contact with animals."),
          },
        ],
      },
      {
        id: "t-m11-three-diseases",
        title: L("Three Diseases You Can Get From Cattle"),
        teach: [
          {
            type: "text",
            heading: L("A. Human Brucellosis"),
            html: L(
              "<b>Brucellosis</b> is considered a significant public health problem in India, though fewer than 10% of human cases may actually be recognised and treated. People usually get infected by drinking <b>raw (unboiled) milk</b> from an infected animal, or through contact with an infected animal's secretions on the skin or on moist areas like the eyes. Accidental injection with the S19 vaccine (used to protect cattle) can also cause infection in a person. Common symptoms include fever that comes and goes, joint pain and swelling, sweating, dizziness, headaches, and chest or stomach pain."
            ),
          },
          {
            type: "glossary",
            term: L("Conjunctiva"),
            meaning: L(
              "The thin, moist lining that covers the white part of the eye and the inside of the eyelid. It's delicate, so infected fluid touching it can pass germs into the body — this is why splashes near the eyes matter."
            ),
          },
          {
            type: "text",
            heading: L("B. Human Tuberculosis (TB)"),
            html: L(
              "TB caused by the bovine (cattle) TB germ looks the same in people as human TB — telling them apart needs special lab tests. There may be no symptoms at all until the disease is quite advanced; when symptoms do appear, they include cough, weight loss, and poor appetite. People usually get infected by drinking contaminated milk from an infected animal, or through close contact with an infected animal."
            ),
          },
          {
            type: "text",
            heading: L("C. Leptospirosis"),
            html: L(
              "Cattle are one of the main animal hosts of <b>Leptospirosis</b>. People most often get infected through contact with contaminated urine or uterine fluid (from calving), and through milking infected cattle. Infections are more common during the monsoon months. Common symptoms include fever, headache, nausea, vomiting, diarrhoea, jaundice (yellowing of the skin or eyes), and skin rashes."
            ),
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("Brucellosis"),
                text: L("Mainly spreads through raw milk, or through infected fluid touching the skin or eyes."),
              },
              {
                label: L("Human TB"),
                text: L("Mainly spreads through contaminated milk, or close everyday contact with an infected animal."),
              },
              {
                label: L("Leptospirosis"),
                text: L("Mainly spreads through contact with infected urine or uterine fluid, or while milking — watch out especially in the monsoon."),
              },
            ],
          },
          {
            type: "callout",
            style: "warning",
            heading: L("How to Protect Yourself"),
            text: L(
              "Never drink raw or unboiled milk, even from your own animals. Avoid letting an animal's urine, uterine fluid, or other body fluids touch your bare skin or eyes — wash your hands and any exposed skin thoroughly with soap right after handling these, or after milking, and especially after helping with a calving. Be extra careful during the monsoon months."
            ),
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("How do people most commonly get Brucellosis from cattle?"),
            options: [
              L("By standing near a healthy animal"),
              L("By drinking raw milk, or through infected fluid touching the skin or eyes"),
              L("By hearing an animal cough"),
              L("It cannot spread to humans at all"),
            ],
            answer: 1,
            explain: L("Brucellosis mainly spreads through raw (unboiled) milk from an infected animal, or through contact with infected secretions on the skin or eyes."),
          },
          {
            type: "truefalse",
            q: L("Leptospirosis infections in people are more common during the monsoon months."),
            answer: true,
            explain: L("Yes — the infection rate for Leptospirosis is higher in the monsoon months, alongside contact with infected urine, uterine fluid, or milking."),
          },
        ],
      },
    ],
    finalQuiz: {
      passScore: 70,
      questions: [
        {
          topicId: "t-m11-what-is-zoonotic",
          type: "mcq",
          q: L("About what share of all known infectious diseases are zoonotic?"),
          options: [L("About 5%"), L("About 25%"), L("About 61%"), L("About 100%")],
          answer: 2,
          explain: L("Zoonoses make up about 61% of all known infectious diseases — a much larger share than most people expect."),
        },
        {
          topicId: "t-m11-what-is-zoonotic",
          type: "truefalse",
          q: L("Because dairy farm workers are in close daily contact with animals, they are always at some risk of picking up a zoonotic infection."),
          answer: true,
          explain: L("Correct — close, everyday contact with animals is itself one of the main risk factors for zoonotic disease."),
        },
        {
          topicId: "t-m11-three-diseases",
          type: "mcq",
          q: L("Which of these is a common symptom of Human TB caught from cattle?"),
          options: [L("Cough, weight loss and poor appetite"), L("Bright pink skin"), L("Loss of hearing"), L("Faster hoof growth")],
          answer: 0,
          explain: L("Human TB from cattle often shows no symptoms until advanced, and then commonly causes cough, weight loss, and poor appetite."),
        },
        {
          topicId: "t-m11-three-diseases",
          type: "mcq",
          q: L("What is one way people can get infected with Leptospirosis?"),
          options: [
            L("Contact with infected urine or uterine fluid, or while milking infected cattle"),
            L("Standing far away from cattle"),
            L("Drinking clean, boiled water"),
            L("Wearing gloves while feeding calves"),
          ],
          answer: 0,
          explain: L("Leptospirosis spreads mainly through contact with contaminated urine or uterine fluid, and through milking infected cattle."),
        },
        {
          topicId: "t-m11-what-is-zoonotic",
          type: "mcq",
          q: L("If you notice unusual symptoms in yourself, such as fever or joint pain, and you handle cattle daily, what should you do?"),
          options: [
            L("Say nothing — it can't be related to the animals"),
            L("Wait a month to see if it goes away"),
            L("Mention your daily animal contact to a doctor so they can consider it"),
            L("Try to diagnose it yourself using this course"),
          ],
          answer: 2,
          explain: L("Zoonotic diseases can be cured if diagnosed and treated promptly — telling a doctor about your regular animal contact helps them consider the right cause."),
        },
      ],
    },
  },

  // ==================================================================
  // LESSON 2 — Gut and Tick-Borne Zoonotic Diseases, and Protecting Yourself
  // ==================================================================
  {
    id: "m11-l2",
    title: L("Gut and Tick-Borne Zoonotic Diseases, and Protecting Yourself"),
    estMinutes: 8,
    hook: [
      {
        type: "hero",
        heading: L("Two More Groups of Diseases to Watch For"),
        text: L(
          "Beyond Brucellosis, TB and Leptospirosis, there are two more groups of zoonotic diseases connected to cattle: infections that upset the stomach and gut, and infections carried by ticks. This lesson covers both, along with simple, practical habits that protect you every single day."
        ),
      },
    ],
    topics: [
      {
        id: "t-m11-gi-zoonotic",
        title: L("Gastro-Intestinal Zoonotic Diseases"),
        teach: [
            {
              type: "photo",
              src: "assets/photo-m11-handwashing.jpg",
              alt: L("A person washing their hands thoroughly with soap and lather at a sink"),
              caption: L("Washing your hands thoroughly with soap after handling dung or cattle — and always before eating — is one of the simplest ways to protect yourself."),
            },
          {
            type: "text",
            heading: L("What Are Gastro-Intestinal Zoonotic Diseases?"),
            html: L(
              "These are zoonotic diseases that affect the <b>intestinal tract</b> (the gut). Some examples that can pass between cattle and people are infections with <b>Salmonella, E. coli, Campylobacter, Rota virus, Cryptosporidia,</b> and <b>Giardia</b>. These are all different kinds of germs, but they share the same way of spreading and cause similar problems."
            ),
          },
          {
            type: "glossary",
            term: L("Faecal-Oral Route"),
            meaning: L(
              "A way germs spread: tiny, invisible traces of an animal's dung end up on hands, water, or food, and then reach a person's mouth. This is always a possible route of infection wherever people live and work in close contact with cattle, which is common in rural areas."
            ),
          },
          {
            type: "callout",
            style: "info",
            heading: L("Who Is Most at Risk"),
            text: L(
              "Young children, malnourished people, pregnant women, and anyone whose immune system is already weakened (their body's natural defence against infection) are usually more susceptible to these gut infections than a healthy adult."
            ),
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("Fever and diarrhoea"),
                text: L("Common early symptoms of gastro-intestinal zoonotic infections."),
              },
              {
                label: L("Loss of appetite and weight loss"),
                text: L("The person eats less and starts losing weight as the infection continues."),
              },
              {
                label: L("Dehydration"),
                text: L("The body loses too much fluid, especially from ongoing diarrhoea — this can become serious if not treated."),
              },
            ],
          },
          {
            type: "callout",
            style: "tip",
            heading: L("How to Protect Yourself"),
            text: L(
              "Wash your hands thoroughly with soap after handling dung, cleaning sheds, or touching cattle — and always before eating or drinking. Keep drinking water covered and protected from contamination by dung or waste. If you, a child, or a pregnant woman in your household develops diarrhoea and fever after contact with cattle or their waste, don't wait it out — see a doctor promptly, especially because dehydration can become serious quickly."
            ),
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("What is the 'faecal-oral route' of infection?"),
            options: [
              L("Germs from an animal's dung reaching a person's mouth, for example through unwashed hands or contaminated water"),
              L("A germ that only spreads through the air"),
              L("A type of vaccine given to calves"),
              L("A way of checking an animal's temperature"),
            ],
            answer: 0,
            explain: L("The faecal-oral route means traces of dung reach a person's mouth, usually through unwashed hands, contaminated water, or food."),
          },
          {
            type: "truefalse",
            q: L("Young children, malnourished people, and pregnant women are usually more susceptible to gastro-intestinal zoonotic diseases."),
            answer: true,
            explain: L("Correct — these groups are more vulnerable, so extra care with hygiene matters even more when they are around cattle or cattle waste."),
          },
        ],
      },
      {
        id: "t-m11-tick-borne",
        title: L("Tick-Borne Zoonotic Diseases and Protecting Yourself"),
        teach: [
            {
              type: "photo",
              src: "assets/photo-m11-tick-specimen.jpg",
              alt: L("Close-up photograph of two cattle ticks (Rhipicephalus microplus), female (left) and male (right), on a plain background"),
              caption: L("Ticks like these attach to cattle skin to feed on blood and can carry the germs behind tick-borne zoonotic diseases."),
            },
          {
            type: "text",
            heading: L("What Are Tick-Borne Zoonotic Diseases?"),
            html: L(
              "A <b>tick</b> is a tiny parasite that attaches to an animal's skin and feeds on its blood. Ticks can carry germs from one animal (or person) to another. Tick-borne zoonotic infections have been reported from various regions of the country. Examples include <b>Babesiosis</b>, <b>Rickettsial infections</b>, and <b>Crimean Congo Haemorrhagic Fever (CCHF)</b>."
            ),
          },
          {
            type: "glossary",
            term: L("Tick"),
            meaning: L("A small, blood-feeding parasite that attaches itself to an animal's skin. Besides feeding, a tick can carry disease-causing germs from one host to another."),
          },
          {
            type: "callout",
            style: "warning",
            heading: L("Hard to Spot"),
            text: L(
              "Tick-borne infections can be difficult to diagnose because their signs and symptoms are non-specific — meaning they can look similar to many other common illnesses. The risk is real wherever people live and work in close proximity to cattle carrying moderate to high numbers of ticks."
            ),
          },
          {
            type: "stat-grid",
            items: [
              { label: L("Babesiosis"), text: L("One of the tick-borne infections reported in areas where people live close to cattle.") },
              { label: L("Rickettsial infections"), text: L("Another group of tick-borne infections reported in the country.") },
              { label: L("Crimean Congo Haemorrhagic Fever (CCHF)"), text: L("A more serious tick-borne infection also seen in some regions.") },
            ],
          },
          {
            type: "callout",
            style: "tip",
            heading: L("How to Protect Yourself From Ticks"),
            text: L(
              "Try to keep the number of ticks on your cattle and in their sheds as low as possible. After handling animals with moderate to high tick loads, check your own skin and clothing for ticks, and remove any you find carefully. Wash your hands and any exposed skin afterward. If you develop an unexplained fever after close contact with a heavily tick-infested animal, tell your doctor about that contact."
            ),
          },
          {
            type: "callout",
            style: "info",
            heading: L("The Same Rule as Always"),
            text: L(
              "Just as you notice something wrong in an animal and report it rather than guessing what disease it is, do the same for yourself: notice anything unusual in your own health, mention your daily animal contact to a doctor, and get it checked promptly. Zoonotic diseases can be cured if diagnosed and treated in time."
            ),
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("Why can tick-borne zoonotic infections be hard to diagnose?"),
            options: [
              L("Because ticks are too small to see at all"),
              L("Because their signs and symptoms are non-specific, similar to many other common illnesses"),
              L("Because they only affect calves"),
              L("Because they have no symptoms at all, ever"),
            ],
            answer: 1,
            explain: L("Tick-borne infections often show non-specific signs and symptoms, which can look like many other illnesses, making them harder to diagnose."),
          },
          {
            type: "truefalse",
            q: L("If you develop an unexplained fever after close contact with a heavily tick-infested animal, it's worth mentioning that contact to a doctor."),
            answer: true,
            explain: L("Yes — telling the doctor about your contact with ticks or heavily tick-infested cattle can help them consider a tick-borne infection."),
          },
        ],
      },
    ],
    finalQuiz: {
      passScore: 70,
      questions: [
        {
          topicId: "t-m11-gi-zoonotic",
          type: "mcq",
          q: L("Which of these is an example of a gastro-intestinal zoonotic germ mentioned in this lesson?"),
          options: [L("Salmonella"), L("A tick"), L("Brucellosis"), L("Leptospirosis")],
          answer: 0,
          explain: L("Salmonella is one of the gastro-intestinal zoonotic germs mentioned, along with E. coli, Campylobacter, Rota virus, Cryptosporidia and Giardia."),
        },
        {
          topicId: "t-m11-gi-zoonotic",
          type: "truefalse",
          q: L("Dehydration from ongoing diarrhoea can become serious if not treated."),
          answer: true,
          explain: L("Correct — dehydration is a real danger with gastro-intestinal infections and needs prompt attention, especially in vulnerable people."),
        },
        {
          topicId: "t-m11-tick-borne",
          type: "mcq",
          q: L("What is a tick?"),
          options: [
            L("A small, blood-feeding parasite that attaches to an animal's skin and can carry germs"),
            L("A type of vaccine"),
            L("A stomach germ"),
            L("A tool used to measure body condition"),
          ],
          answer: 0,
          explain: L("A tick is a small parasite that feeds on an animal's blood and can carry disease-causing germs from one host to another."),
        },
        {
          topicId: "t-m11-tick-borne",
          type: "mcq",
          q: L("Which of these is a tick-borne zoonotic disease mentioned in this lesson?"),
          options: [L("Babesiosis"), L("Giardia"), L("Human TB"), L("Salmonella")],
          answer: 0,
          explain: L("Babesiosis is one of the tick-borne zoonotic infections mentioned, along with Rickettsial infections and Crimean Congo Haemorrhagic Fever (CCHF)."),
        },
        {
          topicId: "t-m11-gi-zoonotic",
          type: "truefalse",
          q: L("Washing your hands after handling dung or cattle, and before eating, helps protect you from gastro-intestinal zoonotic diseases."),
          answer: true,
          explain: L("Yes — handwashing directly breaks the faecal-oral route that spreads these infections."),
        },
      ],
    },
  },
    ],
  },
  {
    id: "m12",
    number: 12,
    title: L("Breeding & Related Activities"),
    subtitle: L("The basics of how breeding works and what to look out for."),
    icon: "calendar",
    available: true,
    lessons: [
// ==================================================================
  // LESSON 1 — Recognizing Heat
  // ==================================================================
  {
    id: "m12-l1",
    title: L("Recognizing Heat"),
    estMinutes: 8,
    hook: [
      {
        type: "hero",
        heading: L("A Short Window That Decides a Whole Year"),
        text: L(
          "A cow or buffalo is only ready to be mated for a small number of hours every few weeks. Miss it, and the farm waits weeks for the next chance. You will never be asked to do the breeding yourself — but your eyes, watching the herd every day, are what catch this short window in time. This lesson teaches you exactly what to look for, and when to speak up."
        ),
      },
    ],
    topics: [
      {
        id: "t-m12-heat-signs",
        title: L("What Is Heat, and How Do You Spot It?"),
        teach: [
          {
            type: "text",
            heading: L("What 'Heat' Means"),
            html: L(
              "<b>Heat</b> is a short period during which a female cow or buffalo shows interest in mating and will allow a bull (or another cow, while mounting) to approach her. It is a completely natural, repeating part of her body's cycle — not a sign of illness."
            ),
          },
          {
            type: "glossary",
            term: L("Heat (also called Oestrus)"),
            meaning: L(
              "The short period when a female animal is ready to mate and can become pregnant if served or inseminated. You will hear both words used for the same thing — 'heat' and 'oestrus'."
            ),
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("How Often It Happens"),
                text: L(
                  "A healthy adult heifer, cow or buffalo generally comes into heat every 21 days, though this can normally range anywhere from 18 to 24 days."
                ),
              },
              {
                label: L("How Long It Lasts"),
                text: L("Each heat period lasts somewhere between 6 and 30 hours — a fairly short and easy-to-miss window."),
              },
            ],
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("Behaviour Changes"),
                text: L(
                  "Repeated bellowing (loud calling), restlessness, lifting the tail, sniffing other animals, and mounting other animals or being mounted."
                ),
              },
              {
                label: L("Physical Changes"),
                text: L("The vulva (the outer part of the reproductive opening) looks swollen and red, and there is a thick, sticky, clear discharge."),
              },
              {
                label: L("Eating, Milk and Urination"),
                text: L("Reduced feed intake, a drop in milk yield, and more frequent urination than usual."),
              },
              {
                label: L("The Clearest Sign"),
                text: L(
                  "After about 10–12 hours into heat, the animal will stand still and allow a bull or another cow to mount her. This standing behaviour is the strongest, most reliable sign of all."
                ),
              },
            ],
          },
          {
            type: "glossary",
            term: L("Vulva"),
            meaning: L("The visible outer part of a female animal's reproductive organ, at the rear, just below the tail."),
          },
          {
            type: "callout",
            style: "tip",
            heading: L("Your Job: Watch, Note the Date, and Tell Someone"),
            text: L(
              "You are not expected to decide anything about breeding. Your job is to notice these signs, note down the date and time as best you can, and tell the person responsible for breeding or the AI technician right away. Good, timely noticing is what makes the rest of the process possible."
            ),
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("What is 'heat' (oestrus)?"),
            options: [
              L("A sign that the animal is sick"),
              L("A short period when the female is ready to mate and can become pregnant"),
              L("The moment a calf is born"),
              L("A permanent change that lasts all year"),
            ],
            answer: 1,
            explain: L("Heat, or oestrus, is a short, repeating period when a female animal is ready to mate — it is normal, not a sign of illness."),
          },
          {
            type: "mcq",
            q: L("What is the single strongest, clearest sign that an animal is in heat?"),
            options: [
              L("A slightly dull coat"),
              L("Standing still and allowing a bull or another cow to mount her"),
              L("Eating more than usual"),
              L("Sleeping more than usual"),
            ],
            answer: 1,
            explain: L("After about 10–12 hours into heat, the animal stands still to be mounted — this is the clearest and most reliable sign."),
          },
        ],
      },
      {
        id: "t-m12-heat-timing",
        title: L("Getting the Timing Right"),
        teach: [
          {
            type: "text",
            heading: L("Why Timing Matters So Much"),
            html: L(
              "Because heat lasts only a matter of hours, mating or insemination has to happen inside a fairly narrow window. Too early or too late, and the animal is far less likely to become pregnant that cycle — meaning weeks of delay before the next chance."
            ),
          },
          {
            type: "glossary",
            term: L("Insemination"),
            meaning: L(
              "Placing semen (from a bull) into a female animal so she can become pregnant. This can happen naturally, with a bull directly mating the female (called <b>natural service</b>), or artificially, using equipment and stored semen (called <b>Artificial Insemination</b>, or AI — covered in the next lesson)."
            ),
          },
          {
            type: "callout",
            style: "info",
            heading: L("The Right Window"),
            text: L(
              "Insemination — whether natural service or AI — should ideally happen 10–12 hours after the first sign of heat, and no later than 18 hours after. In practice: if heat is first noticed in the evening, insemination happens the following morning. If signs of heat are still there the next morning, a second insemination may be needed that same evening."
            ),
          },
          {
            type: "text",
            heading: L("If She Doesn't Become Pregnant"),
            html: L(
              "If the animal does not become pregnant this time, she will come back into heat after 18–21 days. That is exactly why watching and recording matters even after a service or AI has already happened — the herd should be watched again around 21 days later, especially early morning and late evening."
            ),
          },
          {
            type: "callout",
            style: "warning",
            heading: L("Buffaloes Need Extra-Close Attention"),
            text: L(
              "In buffaloes, the signs of heat are not as obvious as in cows. Special care and closer, more frequent watching is needed so the window is not missed altogether."
            ),
          },
          {
            type: "example",
            heading: L("Why Recording Dates Helps Everyone"),
            text: L(
              "Writing down the date an animal was seen in heat, and the date she was served or inseminated, helps predict when she might come into heat again or when she is due to calve — so the whole farm can plan and manage her better."
            ),
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("An animal is first seen showing signs of heat in the evening. Following the ideal timing, when should insemination happen?"),
            options: [
              L("Immediately that same evening, within minutes"),
              L("The following morning"),
              L("Exactly one week later"),
              L("It does not matter when, as long as it happens eventually"),
            ],
            answer: 1,
            explain: L("The ideal window is 10–12 hours after the first sign of heat — so heat seen in the evening means insemination the following morning."),
          },
          {
            type: "truefalse",
            q: L("Signs of heat are just as obvious and easy to spot in buffaloes as they are in cows."),
            answer: false,
            explain: L("False — signs of heat are less obvious in buffaloes, so extra-close and more frequent watching is needed."),
          },
        ],
      },
    ],
    finalQuiz: {
      passScore: 70,
      questions: [
        {
          topicId: "t-m12-heat-signs",
          type: "mcq",
          q: L("How often does a healthy adult cow or buffalo generally come into heat?"),
          options: [L("Every 21 days (normally 18–24 days)"), L("Every 5 days"), L("Once a year"), L("Only once in her lifetime")],
          answer: 0,
          explain: L("A healthy adult heifer, cow or buffalo generally comes into heat about every 21 days, ranging from 18 to 24 days."),
        },
        {
          topicId: "t-m12-heat-signs",
          type: "truefalse",
          q: L("A drop in milk yield and reduced feed intake can be signs that an animal is in heat."),
          answer: true,
          explain: L("Yes — reduced feed intake and decreased milk yield are both listed as signs of heat, along with behaviour and physical changes."),
        },
        {
          topicId: "t-m12-heat-timing",
          type: "mcq",
          q: L("What is the maximum time after the first sign of heat that insemination should ideally happen?"),
          options: [L("18 hours"), L("3 days"), L("1 week"), L("There is no time limit"),],
          answer: 0,
          explain: L("Insemination should ideally happen 10–12 hours after the first sign of heat, and no later than a maximum of 18 hours."),
        },
        {
          topicId: "t-m12-heat-timing",
          type: "truefalse",
          q: L("If an animal does not become pregnant after a service, she will typically come back into heat after 18–21 days."),
          answer: true,
          explain: L("Correct — if she has not conceived, she comes back into heat after roughly 18–21 days, so the herd should be watched again around then."),
        },
        {
          topicId: "t-m12-heat-signs",
          type: "mcq",
          q: L("What is a handler's job when they notice signs of heat in an animal?"),
          options: [
            L("Carry out the insemination themselves right away"),
            L("Notice the signs, note the date and time, and tell the person responsible for breeding"),
            L("Wait a full week before mentioning it to anyone"),
            L("Ignore it unless the animal also stops eating"),
          ],
          answer: 1,
          explain: L("A handler's job is only to notice, record the date/time, and report it promptly — never to carry out breeding themselves."),
        },
      ],
    },
  },

  // ==================================================================
  // LESSON 2 — Artificial Insemination and What Comes After
  // ==================================================================
  {
    id: "m12-l2",
    title: L("Artificial Insemination and What Comes After"),
    estMinutes: 8,
    hook: [
      {
        type: "hero",
        heading: L("A Trained Technician Does the Work — Your Job Is What Comes Before and After"),
        text: L(
          "Most farms today get their animals pregnant using Artificial Insemination rather than a bull. A trained technician carries out the procedure itself — but understanding why AI is used, and knowing what to watch for in the weeks afterward, is squarely part of your job."
        ),
      },
    ],
    topics: [
      {
        id: "t-m12-ai-benefits",
        title: L("Why Artificial Insemination Is Used"),
        teach: [
          {
            type: "text",
            heading: L("From a Distant Bull, Without the Bull Ever Being There"),
            html: L(
              "<b>Artificial Insemination (AI)</b> uses semen collected in advance from a carefully chosen, disease-free bull with excellent genetics, and stored frozen until needed. A trained technician places this semen into the female at the right time — no bull needs to be present on the farm at all."
            ),
          },
          {
            type: "glossary",
            term: L("Artificial Insemination (AI)"),
            meaning: L(
              "A method of breeding where semen from a bull is collected, stored, and later placed into a female animal by a trained person, instead of the bull directly mating her."
            ),
          },
          {
            type: "glossary",
            term: L("Frozen Semen Dose (FSD)"),
            meaning: L(
              "A small, carefully stored dose of semen from a chosen bull, frozen so it can be kept and transported, then used to inseminate a female animal later — even long after that bull has died."
            ),
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("Stops Disease Spread"),
                text: L("Because there is no direct mating, AI prevents the spread of sexually transmitted diseases between animals."),
              },
              {
                label: L("One Bull, Many Cows"),
                text: L("Semen from a single high-quality bull can be used to inseminate many cows, in many places, over time."),
              },
              {
                label: L("Convenient for the Farmer"),
                text: L("AI can be carried out right at the farmer's doorstep by a technician, saving time and travel."),
              },
              {
                label: L("Simple and Affordable"),
                text: L("AI is easy to arrange and inexpensive, while leading to faster improvement in the breed's milk-producing ability."),
              },
            ],
          },
          {
            type: "callout",
            style: "tip",
            heading: L("Who Actually Does It"),
            text: L(
              "AI must always be carried out by a trained AI Technician — never by farm staff on their own. Your role is to notice heat in time, inform the technician, and make sure the animal is ready and the date is recorded."
            ),
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("What is a Frozen Semen Dose (FSD) used for?"),
            options: [
              L("Feeding the calf"),
              L("Storing a chosen bull's semen so it can be used to inseminate females later, even after the bull has died"),
              L("Treating a sick animal"),
              L("Measuring milk yield"),
            ],
            answer: 1,
            explain: L("An FSD is stored, frozen semen from a chosen bull, which can be used for AI long after that bull is no longer alive."),
          },
          {
            type: "truefalse",
            q: L("Farm staff can carry out Artificial Insemination themselves once they know the animal is in heat."),
            answer: false,
            explain: L("False — AI must always be carried out by a trained AI Technician. A handler's role is to notice heat and inform the technician."),
          },
        ],
      },
      {
        id: "t-m12-ai-followup",
        title: L("After AI: What to Watch and When to Call the Vet"),
        teach: [
          {
            type: "text",
            heading: L("Two Key Moments After AI"),
            html: L(
              "AI does not guarantee pregnancy on the first try. After AI is carried out, there are two important points in time when the animal needs to be checked — and both depend on someone noticing and speaking up."
            ),
          },
          {
            type: "timeline",
            heading: L("Timeline After Insemination"),
            items: [
              { year: L("Day 0"), text: L("AI is carried out by the trained technician during the correct heat window.") },
              {
                year: L("Around Day 21"),
                text: L("Watch closely for signs of heat returning. If she comes back into heat, she most likely did not conceive."),
              },
              { year: L("Around Day 60"), text: L("The animal should be examined for pregnancy.") },
            ],
            result: L(
              "If the animal does not conceive even after three inseminations, this should be reported so a veterinarian can look into the reason — repeated inseminations without success can even damage the reproductive organs if not investigated."
            ),
          },
          {
            type: "callout",
            style: "warning",
            heading: L("Three Failed Tries Is a Signal, Not Just Bad Luck"),
            text: L(
              "Failing to conceive after three separate inseminations is not something to simply keep repeating. It needs to be reported so a veterinarian can find out why."
            ),
          },
          {
            type: "glossary",
            term: L("Conceive"),
            meaning: L("To become pregnant."),
          },
          {
            type: "example",
            heading: L("Watching Closely for 'Silent Heat'"),
            text: L(
              "Sometimes an animal is actually in heat but shows almost no visible signs at all — this is especially common in buffaloes. Because of this, close, regular observation of the whole herd matters, not just a quick glance now and then."
            ),
          },
          {
            type: "callout",
            style: "tip",
            heading: L("Your Job: Keep Watching, Keep Reporting"),
            text: L(
              "Whether or not an animal returns to heat around day 21, or fails to show a pregnancy at day 60, is exactly the kind of thing to note down and pass on. Decisions about repeat AI or further treatment are always for the vet or breeding staff to make."
            ),
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("Around how many days after AI should the animal be examined for pregnancy?"),
            options: [L("60 days"), L("3 days"), L("1 year"), L("Immediately after AI")],
            answer: 0,
            explain: L("The animal should be examined for pregnancy around 60 days after AI."),
          },
          {
            type: "truefalse",
            q: L("If an animal fails to conceive after three inseminations, it should simply be inseminated a fourth time without telling anyone."),
            answer: false,
            explain: L("False — three failed inseminations should be reported to a veterinarian to find out the underlying reason, rather than just repeating AI."),
          },
        ],
      },
    ],
    finalQuiz: {
      passScore: 70,
      questions: [
        {
          topicId: "t-m12-ai-benefits",
          type: "mcq",
          q: L("Which of these is a genuine advantage of Artificial Insemination (AI)?"),
          options: [
            L("It spreads diseases faster between animals"),
            L("It prevents the spread of sexually transmitted diseases between animals"),
            L("It can only be used once per bull, ever"),
            L("It requires the bull to be physically present every time"),
          ],
          answer: 1,
          explain: L("Because there is no direct mating involved, AI helps prevent the spread of sexually transmitted diseases between animals."),
        },
        {
          topicId: "t-m12-ai-benefits",
          type: "truefalse",
          q: L("AI must be carried out only by a trained AI Technician, never by farm staff on their own."),
          answer: true,
          explain: L("Correct — AI is always performed by a trained technician. Farm staff notice heat and report it, but do not perform AI themselves."),
        },
        {
          topicId: "t-m12-ai-followup",
          type: "mcq",
          q: L("What should you watch for around 21 days after AI?"),
          options: [
            L("Whether the animal comes back into heat, which would suggest she did not conceive"),
            L("Whether the calf has been born"),
            L("Whether the animal's coat colour has changed"),
            L("Nothing — no check is needed at 21 days"),
          ],
          answer: 0,
          explain: L("Around 21 days after AI, watch for the animal returning to heat — a sign she likely did not conceive."),
        },
        {
          topicId: "t-m12-ai-followup",
          type: "truefalse",
          q: L("Signs of heat can sometimes be almost invisible ('silent heat'), especially in buffaloes, which is why close observation matters.",
          ),
          answer: true,
          explain: L("True — 'silent heat' with few visible signs happens, especially in buffaloes, so regular close observation of the herd is important."),
        },
        {
          topicId: "t-m12-ai-followup",
          type: "mcq",
          q: L("An animal fails to conceive after three inseminations. What is the right response?"),
          options: [
            L("Keep repeating AI indefinitely without telling anyone"),
            L("Report it so a veterinarian can investigate the reason"),
            L("Assume nothing more can be done and stop trying to breed her permanently"),
            L("Switch to natural service without informing anyone"),
          ],
          answer: 1,
          explain: L("Three failed inseminations should be reported to a veterinarian — repeated AI without investigation can even harm the animal."),
        },
      ],
    },
  },

  // ==================================================================
  // LESSON 3 — The Dry Period and Calving
  // ==================================================================
  {
    id: "m12-l3",
    title: L("The Dry Period and Calving"),
    estMinutes: 9,
    hook: [
      {
        type: "hero",
        heading: L("Rest Before Birth, Then the Big Day Itself"),
        text: L(
          "Before a cow gives birth, her body needs a proper rest from milking. And when the day of calving finally arrives, most of the time everything goes smoothly on its own — but knowing the difference between 'normal' and 'something is wrong' can save a calf's life. Both of these depend on someone watching closely and knowing when to speak up."
        ),
      },
    ],
    topics: [
      {
        id: "t-m12-drying-off",
        title: L("Resting the Cow Before She Calves (The Dry Period)"),
        teach: [
          {
            type: "text",
            heading: L("Why a Milking Cow Needs a Rest"),
            html: L(
              "The <b>dry period</b> is one of the most important phases in a dairy cow's whole cycle. It gives her body, and especially her udder, a chance to rest and rebuild before the next round of milk production begins. Anything that goes wrong during this rest period can affect her health and her milk after the next calving."
            ),
          },
          {
            type: "glossary",
            term: L("Drying Off / Dry Period"),
            meaning: L(
              "The period when a milking cow is deliberately stopped from being milked for some weeks before she calves again, so her body and udder can rest and recover."
            ),
          },
          {
            type: "glossary",
            term: L("Lactation"),
            meaning: L("The period during which a cow or buffalo produces milk, starting after she calves."),
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("Usual Length"),
                text: L("An animal should usually be dry for around 60 days before her next calving."),
              },
              {
                label: L("If the Dry Period Runs Too Long"),
                text: L(
                  "A prolonged dry period puts the animal at risk of becoming overweight, obesity-related diseases, and difficulty at the time of calving."
                ),
              },
            ],
          },
          {
            type: "text",
            heading: L("What Handlers Should Watch For"),
            html: L(
              "Once an animal has been dried off, she should be checked visually every single day. She should always have access to water — this should never be restricted, even though her feed is being managed differently during this time."
            ),
          },
          {
            type: "callout",
            style: "tip",
            heading: L("Your Job During the Dry Period"),
            text: L(
              "The exact feeding plan for drying off is decided and managed by those responsible for the animal's diet — that is not your call to make. Your job is simple but important: check dry cows visually every day, make sure water is always available, and report anything that looks unusual straight away."
            ),
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("Roughly how long should a cow's dry period usually be?"),
            options: [L("Around 60 days"), L("Around 2 days"), L("Around 1 year"), L("There is no dry period needed")],
            answer: 0,
            explain: L("An animal should usually be dry for around 60 days before her next calving."),
          },
          {
            type: "truefalse",
            q: L("Water access should be restricted for a cow during her dry period."),
            answer: false,
            explain: L("False — water access should never be restricted during the dry period, even while feed is being managed differently."),
          },
        ],
      },
      {
        id: "t-m12-calving-signs",
        title: L("Recognizing Normal Calving, and Knowing When to Call for Help"),
        teach: [
          {
            type: "text",
            heading: L("The First Early Sign"),
            html: L(
              "A sticky vaginal discharge is usually seen about a day before calving begins. Seeing this is a normal, useful early warning that calving is close, not a cause for alarm on its own."
            ),
          },
          {
            type: "glossary",
            term: L("Water Bag"),
            meaning: L(
              "A fluid-filled bag that appears and then bursts as part of the calving process, shortly before the calf itself is delivered."
            ),
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("Older Cows"),
                text: L("The calf is usually delivered 30–50 minutes after the water bag bursts, though this may extend up to 2 hours."),
              },
              {
                label: L("Heifers (First-Time Mothers)"),
                text: L("Calving may normally take up to 4 hours after the water bag bursts — this alone is not a problem for a first calving."),
              },
            ],
          },
          {
            type: "glossary",
            term: L("Dystocia"),
            meaning: L(
              "Difficult or delayed calving — when the calf is not delivered within the normal time after the water bag bursts. Early detection of dystocia can save the calf's life."
            ),
          },
          {
            type: "callout",
            style: "warning",
            heading: L("Normal vs. When to Call the Vet Immediately"),
            text: L(
              "Normal: after the water bag bursts, the calf's head and both front legs appear together — this is the normal position, and calving usually proceeds on its own without needing a vet. Call the vet immediately if: an abnormal position is seen (for example, only one front leg and the head, or any other position), or if nothing appears at all after the water bag bursts. Any delay in getting help in these cases only makes things worse."
            ),
          },
          {
            type: "callout",
            style: "info",
            heading: L("A Careful Note on the One 'Normal' Case"),
            text: L(
              "When the head and both front legs are clearly visible together, a gentle downward pull on the front legs is sometimes described as acceptable help. The calf should never be pulled in any other position — not even if just one front leg and the head are visible. If you are ever unsure exactly what position the calf is in, the safer choice is always to call for help rather than pull."
            ),
          },
          {
            type: "text",
            heading: L("After Calving: What Comes Next"),
            html: L(
              "Under normal conditions, an animal should come back into heat within 45 days of calving. It is recommended to breed her at the heat that follows the first one after calving, or within 60–90 days. If she does not come into heat within 60 days after calving, this should be reported so a veterinarian can check on her."
            ),
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("After the water bag bursts, what tells you calving is likely proceeding normally?"),
            options: [
              L("Only one front leg appears"),
              L("The calf's head and both front legs appear together"),
              L("Nothing appears at all"),
              L("The mother lies down for a long time before anything happens"),
            ],
            answer: 1,
            explain: L("Head and both front legs appearing together after the water bag bursts is the normal position, and calving usually proceeds on its own."),
          },
          {
            type: "truefalse",
            q: L("If an animal has not come back into heat within 60 days after calving, this should be reported to a veterinarian."),
            answer: true,
            explain: L("True — not returning to heat within 60 days after calving should be checked by a veterinarian."),
          },
        ],
      },
    ],
    finalQuiz: {
      passScore: 70,
      questions: [
        {
          topicId: "t-m12-drying-off",
          type: "mcq",
          q: L("What is the 'dry period' in a dairy cow's cycle?"),
          options: [
            L("A period when the cow is deliberately not milked, to let her body rest before her next calving"),
            L("A period when the cow is given no water"),
            L("The time right after AI"),
            L("A punishment for a sick cow"),
          ],
          answer: 0,
          explain: L("The dry period is a deliberate rest from milking, lasting around 60 days, before the next calving."),
        },
        {
          topicId: "t-m12-drying-off",
          type: "truefalse",
          q: L("A dry cow does not need to be checked visually every day, since she is not being milked.",
          ),
          answer: false,
          explain: L("False — dry cows should still be checked visually every day, and always have access to water."),
        },
        {
          topicId: "t-m12-calving-signs",
          type: "mcq",
          q: L("What is 'dystocia'?"),
          options: [
            L("A normal, healthy pregnancy"),
            L("Difficult or delayed calving, beyond the normal time after the water bag bursts"),
            L("A type of frozen semen dose"),
            L("The sign an animal is in heat"),
          ],
          answer: 1,
          explain: L("Dystocia means difficult or delayed calving — calving that does not happen within the normal time frame after the water bag bursts."),
        },
        {
          topicId: "t-m12-calving-signs",
          type: "truefalse",
          q: L("If nothing appears at all after the water bag bursts, you should call a veterinarian immediately."),
          answer: true,
          explain: L("True — if nothing appears after the water bag bursts, or the position looks abnormal, call a vet immediately. Delay makes things worse."),
        },
        {
          topicId: "t-m12-calving-signs",
          type: "mcq",
          q: L("For a heifer (a first-time mother), how long can calving normally take after the water bag bursts?"),
          options: [L("Up to 4 hours"), L("Up to 4 days"), L("Only a few seconds"), L("It never bursts for heifers")],
          answer: 0,
          explain: L("For heifers, calving may normally take up to 4 hours after the water bag bursts — longer than for older cows, but still normal."),
        },
        {
          topicId: "t-m12-drying-off",
          type: "mcq",
          q: L("What risk does a dry period that runs too long create?"),
          options: [
            L("The animal becomes too thin"),
            L("The animal risks becoming overweight, obesity-related disease, and difficulty calving"),
            L("The animal stops needing water"),
            L("There is no risk at all"),
          ],
          answer: 1,
          explain: L("A prolonged dry period risks the animal becoming overweight, developing obesity-related disease, and having a harder calving."),
        },
      ],
    },
  },
    ],
  },
  {
    id: "m13",
    number: 13,
    title: L("Traditional & Ethnoveterinary Remedies"),
    subtitle: L("NDDB-documented home remedies for common problems — to be used alongside, never instead of, proper veterinary advice."),
    icon: "leaf",
    available: true,
    lessons: [
// ==================================================================
  // LESSON 1 — What Traditional Remedies Are, and the Golden Rule
  // ==================================================================
  {
    id: "m13-l1",
    title: L("Traditional Remedies and the Golden Rule"),
    estMinutes: 9,
    hook: [
      {
        type: "hero",
        heading: L("Real Remedies, With One Firm Rule"),
        text: L(
          "This module teaches real home remedies that NDDB and other farming agencies have written down for common problems in cows and buffaloes — plants, spices and kitchen items, prepared and used in specific ways. They are genuine and worth knowing well. But one rule applies to every single remedy in this module: use them ALONGSIDE, never INSTEAD OF, proper veterinary advice. A vet must still be the one to diagnose what's actually wrong and to handle anything serious."
        ),
      },
    ],
    topics: [
      {
        id: "t-m13-golden-rule",
        title: L("What Is a Traditional Remedy, and When Can You Use One?"),
        teach: [
          {
            type: "text",
            heading: L("Farmers Have Been Doing This for Generations"),
            html: L(
              "Long before a veterinarian can reach every farm, farmers have managed small, everyday problems in their animals using plants, spices and things found in the kitchen or the field. This kind of knowledge — passed down between farmers, and now written down by organisations that work with them — is what this module teaches. It is not guesswork. It is documented, real-world practice."
            ),
          },
          {
            type: "glossary",
            term: L("Ethnoveterinary Remedy"),
            meaning: L(
              "A remedy for an animal's health problem, made from plants and everyday materials, that has been used and passed down by farmers and herders themselves rather than invented in a laboratory. 'Ethno' simply means 'of the people'."
            ),
          },
          {
            type: "text",
            heading: L("Where This Module's Remedies Come From"),
            html: L(
              "This module draws on two documented sources: a farmer's handbook section on traditional remedies (collected from agencies such as BAIF, IIRR and Vivekananda Kendra), and a separate NDDB (National Dairy Development Board) brochure called <b>Ethnoveterinary Formulations for Important Ailments in Bovines</b>, prepared for exactly the kind of ground-level use you do every day."
            ),
          },
          {
            type: "callout",
            style: "warning",
            heading: L("The Golden Rule: Alongside, Never Instead Of"),
            text: L(
              "The handbook itself says these remedies are only suggestive and may not ensure a cure — the real underlying problem could be a disease that still needs proper diagnosis. That means: use a remedy ALONGSIDE veterinary advice, never as a replacement for it. If a problem is serious, sudden, or not improving, get the vet involved without waiting to see if the remedy works first."
            ),
          },
          {
            type: "example",
            heading: L("Two Very Different Situations"),
            text: L(
              "A cow has mild, occasional bloating after grazing on wet grass, and the vet is a day away — trying a documented home remedy while you arrange a visit is reasonable. But an animal that has suddenly collapsed, is bleeding heavily, or is struggling to breathe needs the vet contacted immediately — that is not the moment to first try a home remedy and wait to see what happens."
            ),
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("What does 'ethnoveterinary' mean in this module?"),
            options: [
              L("A brand of medicine sold in shops"),
              L("A remedy made from plants and everyday materials, passed down among farmers, used for animal problems"),
              L("A qualification a veterinarian earns at college"),
              L("The name of a specific cattle disease"),
            ],
            answer: 1,
            explain: L("Ethnoveterinary remedies are the plant- and kitchen-based remedies that farmers themselves have developed and passed down over generations."),
          },
          {
            type: "truefalse",
            q: L("A traditional remedy should be used instead of veterinary advice whenever one is available."),
            answer: false,
            explain: L("No — the golden rule of this module is alongside, never instead of. A vet should still diagnose the real problem, especially anything serious."),
          },
        ],
      },
      {
        id: "t-m13-handbook-basics",
        title: L("Handbook Remedies for Milk, Blood and Anaemia Problems"),
        teach: [
            {
              type: "photo",
              src: "assets/photo-m13-mimosa-pudica.jpg",
              alt: L("Close-up of Mimosa pudica compound leaves, some open and one partially folded"),
              caption: L("Mimosa pudica, the 'touch-me-not' plant — used as a paste in the handbook's remedy for blood in milk."),
            },
            {
              type: "photo",
              src: "assets/photo-m13-amla.jpg",
              alt: L("A pile of round, pale-green Phyllanthus emblica (Amla / Indian gooseberry) fruits"),
              caption: L("Amla (Indian gooseberry) — ground fruit or bark is the handbook's remedy for anaemia."),
            },
            {
              type: "photo",
              src: "assets/photo-m13-asparagus-racemosus.jpg",
              alt: L("Asparagus racemosus (Shatavari) plant with fine needle-like leaves, small white flowers and red berries"),
              caption: L("Asparagus racemosus (Satavari) — ground root is the handbook's remedy for failure to produce milk."),
            },
          {
            type: "text",
            heading: L("Starting With the Handbook's Own List"),
            html: L(
              "The farmer's handbook lists remedies for over twenty different minor ailments. This topic covers the first few, exactly as the handbook describes them — what plant or ingredient is used, how it's prepared, and how much is given."
            ),
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("Failure to Produce Milk"),
                text: L(
                  "Either: grind 250 g of Asparagus racemosus (Satavari) root and give orally for 3 to 5 days. Or: give 50 g of Leptadenia reticulata (Jivanti) leaf and stem, mixed with feed, twice a day for 30 days."
                ),
              },
              {
                label: L("Anaemia"),
                text: L(
                  "Grind around 50 g of Phyllanthus embelica (Amla) fruit or bark, and give daily. Anaemia means the animal's blood has become weak or thin, often making it look pale and low on energy."
                ),
              },
              {
                label: L("Blood in Milk"),
                text: L(
                  "Make a paste from half to one kg of Mimosa pudica (the 'touch-me-not' plant, which folds its leaves when touched). Feed as-is for 3 to 5 days, twice daily."
                ),
              },
            ],
          },
          {
            type: "glossary",
            term: L("Decoction"),
            meaning: L(
              "A liquid made by boiling plant material (roots, leaves, bark) in water so that its properties pass into the water, which is then given to the animal, often after straining out the solid pieces."
            ),
          },
          {
            type: "callout",
            style: "tip",
            heading: L("The Same Plant Turns Up Again and Again"),
            text: L(
              "Notice Mimosa pudica above — you will see this same plant used for several completely different problems later in this module. That's normal in traditional remedies: a small number of plants are considered useful for many things. It doesn't change the golden rule — if the days given pass with no improvement, report it and involve the vet."
            ),
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("According to the handbook, what is the remedy for 'failure to produce milk' using Asparagus racemosus?"),
            options: [
              L("Grind 250 g of the root and give orally for 3 to 5 days"),
              L("Inject it directly into the udder"),
              L("Boil the leaves and only use them as a spray"),
              L("It is not part of this remedy list"),
            ],
            answer: 0,
            explain: L("The handbook's remedy is 250 g of ground Asparagus racemosus root, given orally for 3 to 5 days."),
          },
          {
            type: "mcq",
            q: L("Which plant does the handbook use for 'blood in milk'?"),
            options: [
              L("Mimosa pudica (touch-me-not), made into a paste"),
              L("Papaya latex"),
              L("Tamarind and gingely oil"),
              L("Euphorbia latex"),
            ],
            answer: 0,
            explain: L("Mimosa pudica paste, half to one kg, fed for 3 to 5 days twice daily, is the handbook's remedy for blood in milk."),
          },
        ],
      },
    ],
    finalQuiz: {
      passScore: 70,
      questions: [
        {
          topicId: "t-m13-golden-rule",
          type: "mcq",
          q: L("If a minor problem doesn't improve after using a remedy for the number of days the source recommends, what should you do?"),
          options: [
            L("Keep repeating the same remedy indefinitely"),
            L("Try random other remedies until something works"),
            L("Report it and get veterinary advice"),
            L("Ignore it, since remedies always work eventually"),
          ],
          answer: 2,
          explain: L("Remedies are only suggestive and may not cure the real problem. If there's no improvement, involve the vet — that's the golden rule in action."),
        },
        {
          topicId: "t-m13-golden-rule",
          type: "truefalse",
          q: L("The handbook that lists these traditional remedies states, in its own words, that they are only suggestive and may not ensure a cure."),
          answer: true,
          explain: L("Correct — the handbook is explicit that these remedies are suggestive, and that the real disease still needs to be investigated by proper veterinary means."),
        },
        {
          topicId: "t-m13-handbook-basics",
          type: "mcq",
          q: L("How much ground Amla (fruit or bark) does the handbook suggest for anaemia, given daily?"),
          options: [L("About 50 grams"), L("About 5 kilograms"), L("A single drop"), L("Amla is not part of this remedy")],
          answer: 0,
          explain: L("The handbook's anaemia remedy is around 50 g of ground Amla fruit or bark, given daily."),
        },
        {
          topicId: "t-m13-handbook-basics",
          type: "truefalse",
          q: L("Leptadenia reticulata leaf and stem is given along with feed for failure to produce milk, at 50 g twice a day for 30 days."),
          answer: true,
          explain: L("Correct — this is the second of the two handbook options for failure to produce milk."),
        },
        {
          topicId: "t-m13-golden-rule",
          type: "mcq",
          q: L("Who has documented many of the traditional remedies used in this module, according to the source material?"),
          options: [
            L("Only large pharmaceutical companies"),
            L("Nobody — it is unwritten and passed on only by word of mouth"),
            L("Agencies such as BAIF, IIRR, Vivekananda Kendra and NDDB"),
            L("Only international vaccine manufacturers"),
          ],
          answer: 2,
          explain: L("The handbook credits agencies like BAIF, IIRR and Vivekananda Kendra, and this module also draws on an NDDB brochure — real organisations that documented real farmer practice."),
        },
      ],
    },
  },

  // ==================================================================
  // LESSON 2 — More Handbook Remedies, Grouped by Ailment
  // ==================================================================
  {
    id: "m13-l2",
    title: L("More Handbook Remedies, Ailment by Ailment"),
    estMinutes: 9,
    hook: [
      {
        type: "hero",
        heading: L("More Remedies — Same Golden Rule"),
        text: L(
          "This lesson continues through the handbook's remedies, grouped by the kind of problem they treat — digestive and fluid problems first, then skin, wound and parasite problems. As always: these remedies are to be used ALONGSIDE, never INSTEAD OF, proper veterinary advice, and a vet is still needed to diagnose the real cause and to handle anything serious."
        ),
      },
    ],
    topics: [
      {
        id: "t-m13-digestive",
        title: L("Digestive and Fluid Problems"),
        teach: [
          {
            type: "text",
            heading: L("Problems With Eating, Digesting or Fluid Loss"),
            html: L(
              "This topic covers the handbook's remedies for bloat, dehydration, diarrhoea and general stomach disorder — all problems connected to what's happening inside the animal's stomach and gut."
            ),
          },
          {
            type: "ledger",
            heading: L("Dehydration — the Handbook's Home ORS Recipe"),
            rows: [
              { label: "Salt", amount: "2 teaspoons" },
              { label: "Baking soda", amount: "half a teaspoon" },
              { label: "Sugar", amount: "4 teaspoons" },
            ],
            total: {
              label: "Dissolved into",
              amount: "1 litre of water",
            },
          },
          {
            type: "callout",
            style: "tip",
            heading: L("How Much to Give"),
            text: L("Adults: 2 to 3 litres, 2 to 3 times a day. Calves: 0.5 to 1 litre, until recovery."),
          },
          {
            type: "glossary",
            term: L("ORS (Oral Rehydration Solution)"),
            meaning: L(
              "A mix of salt, sugar and water given by mouth to replace the water and salts an animal loses during diarrhoea or dehydration. It's the same basic idea used for people."
            ),
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("Bloat (mild)"),
                text: L(
                  "Boil 50 g ginger, 1 whole garlic, 3 cardamoms and 5–6 cloves in half a litre of water with a little jaggery to make a decoction. Give once a day for 2 days, freshly prepared each day. Give calves half the adult quantity."
                ),
              },
              {
                label: L("Stomach Disorder"),
                text: L(
                  "Mix 500 ml each of ginger juice and drumstick (Soanjana) leaf juice with 200 ml of honey into one dose. Give twice a day for 2 days."
                ),
              },
            ],
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("Diarrhoea — Option 1"),
                text: L("Boil a handful of tea leaves in one litre of water, strain, add half a handful of ground ginger. Drench twice a day for 3 to 4 days, prepared fresh daily."),
              },
              {
                label: L("Diarrhoea — Option 2"),
                text: L("Boil half a kg of fresh guava (Amrut) leaves in three glasses of water. Drench twice a day."),
              },
              {
                label: L("Diarrhoea — Option 3"),
                text: L("Mix 5 to 10 crystals of potassium permanganate in 1 litre of water. Drench twice a day."),
              },
            ],
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("What three kitchen ingredients make up the handbook's home ORS recipe for dehydration?"),
            options: [
              L("Salt, baking soda and sugar, dissolved in water"),
              L("Turmeric, ginger and honey"),
              L("Only salt and water"),
              L("Garlic and lime"),
            ],
            answer: 0,
            explain: L("2 teaspoons salt, half a teaspoon baking soda and 4 teaspoons sugar dissolved in 1 litre of water is the handbook's dehydration recipe."),
          },
          {
            type: "truefalse",
            q: L("For mild bloat, the handbook's ginger-garlic-cardamom-clove-jaggery decoction is given at half the adult quantity to calves."),
            answer: true,
            explain: L("Correct — the handbook specifically says to give calves half the quantity given to adult animals."),
          },
        ],
      },
      {
        id: "t-m13-skin-wound",
        title: L("Skin, Wound and Parasite Problems"),
        teach: [
            {
              type: "photo",
              src: "assets/photo-m13-neem.jpg",
              alt: L("Close-up of neem (Azadirachta indica) serrated compound leaves with clusters of small oval green fruits"),
              caption: L("Neem — its bark, flower, seed oil or leaf pulp is used across several remedies in this module, from fungal infection to external parasites."),
            },
          {
            type: "text",
            heading: L("Remedies You Apply on the Skin or Wound"),
            html: L(
              "Many handbook remedies for skin, wound and parasite problems are not swallowed — they are made into a paste and applied directly onto the affected area, or applied over the whole body."
            ),
          },
          {
            type: "glossary",
            term: L("Paste"),
            meaning: L(
              "Plant material that has been crushed, ground or blended with a little water or oil until it becomes a thick, spreadable mixture, then applied directly onto the skin or a wound."
            ),
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("Fungal Infection"),
                text: L("Make a paste of garlic, OR a paste from neem bark, flower, seed oil or tender twig. Apply on the affected part until it recovers."),
              },
              {
                label: L("External Parasites"),
                text: L(
                  "Custard apple (Sitaphal) seed and leaf extract diluted 50% in cheap vegetable oil, applied over the body twice a day for 5 days. Or plain neem leaf pulp. Or a paste of custard apple seed, neem seed and a little tobacco leaf, soaked in water and applied over the body."
                ),
              },
              {
                label: L("Maggot Wound"),
                text: L(
                  "A handful of marigold and tulsi leaves crushed with garlic and lime into a paste, applied twice daily on the wound. Or a paste of custard apple and/or neem leaves, applied once a day for 5 to 6 days."
                ),
              },
              {
                label: L("Mange Infestation"),
                text: L(
                  "Grind a handful of fresh or air-dried Cassia alata (Dadmurdan) leaves into a paste with water or lemon juice. Apply daily on the infected skin using a brush or coconut husk until the infection clears."
                ),
              },
            ],
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("Warts"),
                text: L("Apply drops of Euphorbia neriifolia latex, OR drops of papaya trunk/fruit/leaf latex, on the wart twice a day until it falls off."),
              },
              {
                label: L("Tongue Ulcer"),
                text: L("Mix 100 g tamarind with 200 ml gingely (sesame) oil into a paste. Apply on the mouth and tongue 3 to 4 times a day."),
              },
              {
                label: L("Fly Repellent"),
                text: L("Grind and extract juice from aloe vera leaves. Apply on the cow's body and also sprinkle in the surroundings."),
              },
              {
                label: L("Poisoning"),
                text: L(
                  "Drench with one litre of paraffin oil, raw linseed oil or any vegetable oil, once. Or drench with one litre of milk or coconut water, or 200 g charcoal mixed in 800 ml water, once."
                ),
              },
            ],
          },
          {
            type: "callout",
            style: "warning",
            heading: L("Maggot Wounds and Poisoning Can Turn Serious Fast"),
            text: L(
              "A first-aid remedy is a reasonable first step, but maggot wounds and suspected poisoning can worsen quickly. Use the remedy alongside, never instead of, getting the vet involved right away — don't wait to see if the home remedy works before calling for help."
            ),
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("Which two ingredients does the handbook mention for treating fungal infection, applied as a paste?"),
            options: [L("Garlic and neem"), L("Tamarind and papaya"), L("Euphorbia and marigold"), L("Tulsi and lime")],
            answer: 0,
            explain: L("The handbook gives two paste options for fungal infection: garlic, or neem bark/flower/seed oil/twig."),
          },
          {
            type: "mcq",
            q: L("What does the handbook suggest for suspected poisoning, using items found around the farm?"),
            options: [
              L("Drench with paraffin/linseed/vegetable oil, or a milk/coconut water/charcoal mixture"),
              L("Give nothing and wait for it to pass"),
              L("Only apply a paste on the skin"),
              L("Only give jaggery"),
            ],
            answer: 0,
            explain: L("The handbook lists oil-based and milk/coconut-water/charcoal-based drenches for poisoning — but this is exactly the kind of case where the vet must also be contacted urgently."),
          },
        ],
      },
    ],
    finalQuiz: {
      passScore: 70,
      questions: [
        {
          topicId: "t-m13-digestive",
          type: "mcq",
          q: L("How much of the home ORS mixture should an adult animal with dehydration be given, and how often?"),
          options: [L("2 to 3 litres, 2 to 3 times a day"), L("A single teaspoon, once"), L("20 litres, once"), L("It should never be given to adults")],
          answer: 0,
          explain: L("The handbook's dose for adult animals is 2 to 3 litres, 2 to 3 times a day, until recovery."),
        },
        {
          topicId: "t-m13-digestive",
          type: "truefalse",
          q: L("The handbook offers more than one option for diarrhoea, including tea leaves with ginger, boiled guava leaves, and potassium permanganate in water."),
          answer: true,
          explain: L("Correct — all three are listed as separate diarrhoea remedy options in the handbook."),
        },
        {
          topicId: "t-m13-skin-wound",
          type: "mcq",
          q: L("Which handbook remedy is specifically used for maggot wounds?"),
          options: [
            L("Marigold and tulsi leaves crushed with garlic and lime into a paste"),
            L("Only potassium permanganate in water"),
            L("Ground amla fruit, eaten daily"),
            L("Coconut inflorescence juice"),
          ],
          answer: 0,
          explain: L("Marigold and tulsi leaves crushed with garlic and lime is the handbook's first maggot-wound remedy, applied twice daily."),
        },
        {
          topicId: "t-m13-skin-wound",
          type: "truefalse",
          q: L("According to the handbook, both Euphorbia latex and papaya latex are applied on warts until the wart falls off."),
          answer: true,
          explain: L("Correct — both are listed as separate options for treating warts, applied twice a day."),
        },
        {
          topicId: "t-m13-digestive",
          type: "mcq",
          q: L("What combination does the handbook suggest for a general stomach disorder?"),
          options: [L("Ginger juice, drumstick leaf juice and honey"), L("Only cold water"), L("Papaya latex"), L("Cassia alata paste")],
          answer: 0,
          explain: L("500 ml each of ginger and drumstick leaf juice mixed with 200 ml honey is the handbook's stomach disorder remedy."),
        },
      ],
    },
  },

  // ==================================================================
  // LESSON 3 — NDDB's Ethnoveterinary Formulations (EVM Brochure)
  // ==================================================================
  {
    id: "m13-l3",
    title: L("NDDB's Ethnoveterinary Formulations (EVM Brochure)"),
    estMinutes: 10,
    hook: [
      {
        type: "hero",
        heading: L("A Second Source, Same Golden Rule"),
        text: L(
          "This lesson comes from a different, more recent NDDB brochure — 'Ethnoveterinary Formulations for Important Ailments in Bovines' (EVM), prepared with technical input from a veterinary professor specifically for ground-level use. The remedies here are more detailed, with exact quantities and step-by-step application. The rule does not change: use them ALONGSIDE, never INSTEAD OF, proper veterinary advice. The brochure itself closes by saying a nearby veterinarian should be consulted for proper disease diagnosis and management."
        ),
      },
    ],
    topics: [
      {
        id: "t-m13-evm-udder",
        title: L("EVM Remedies for Udder and Reproductive Problems"),
        teach: [
          {
            type: "text",
            heading: L("A Few Terms Before We Start"),
            html: L(
              "An udder has four separate sections called <b>quarters</b>, each with its own teat. <b>Mastitis</b> means the udder (or a quarter of it) is infected or inflamed, often becoming swollen, painful, or making the milk look abnormal. The <b>placenta</b> is the tissue that nourished the calf inside the womb, which normally comes away naturally soon after calving (giving birth)."
            ),
          },
          {
            type: "glossary",
            term: L("Oedema"),
            meaning: L("Swelling caused by fluid building up under the skin — in this topic, specifically swelling of the udder."),
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("Mastitis (All Types)"),
                text: L(
                  "Blend 250 g aloe vera (thorns removed), 50 g turmeric powder and 15 g lime into a reddish paste. Water version: dilute a handful in 200 ml water, apply 10 times a day for 5 days, after fully milking out ALL quarters (including unaffected ones); last application of the day should be the oil version instead. Oil version: dilute in 200 ml mustard or gingelly oil, apply 3 times a day for 5 days. Both versions: also feed 2 lemons (cut in half) orally, 3 times a day for 3 days."
                ),
              },
              {
                label: L("Teat Obstruction"),
                text: L(
                  "Coat a freshly cut neem leafstalk with turmeric powder and butter or ghee. Insert it into the affected teat opening, cut end up, base down, turning anti-clockwise. Replace with a fresh coated leafstalk after every milking."
                ),
              },
              {
                label: L("Udder Oedema"),
                text: L(
                  "Heat 200 ml sesame or mustard oil, add a handful of turmeric powder and 2 sliced garlic pearls; remove from flame once the flavour develops (no need to boil), then cool. Apply with force in a circular motion over the whole swollen area and udder, 4 times a day for 3 days."
                ),
              },
            ],
          },
          {
            type: "callout",
            style: "warning",
            heading: L("Rule Out Mastitis First — And Remember the Golden Rule"),
            text: L(
              "The brochure itself notes: before using the udder oedema remedy, mastitis must be ruled out — meaning a proper check is needed to be sure it isn't actually an infection. This is exactly why these remedies are used ALONGSIDE, never INSTEAD OF, veterinary diagnosis: udder and birth-related problems can look similar on the surface but need very different handling underneath."
            ),
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("Retention of Placenta"),
                text: L(
                  "Feed one whole white radish tuber within 2 hours of calving. If the placenta still hasn't come away after 8 hours, feed 1.5 kg fresh lady's finger with jaggery and salt. If it persists past 12 hours, tie a knot close to the base, cut 2 inches below it and leave the knot in — the source is explicit: do NOT try to remove the retained placenta by hand. Feed one more whole radish once a week for four weeks afterward."
                ),
              },
              {
                label: L("Repeat Breeding"),
                text: L(
                  "Starting on day 1 or 2 of heat (oestrus, the period when a cow can conceive), feed once a day in this order: white radish for 5 days, aloe vera leaf for 4 days, moringa leaves for 4 days, cissus stem for 4 days, then curry leaves with turmeric powder for 4 days — with jaggery and salt each time. Repeat the whole sequence if the animal has not conceived."
                ),
              },
              {
                label: L("Prolapse"),
                text: L(
                  "Clean the prolapsed mass (tissue pushed out of the body, usually after calving). Sprinkle it with cooled aloe vera gel that has a pinch of turmeric boiled into it. Once the gel dries, apply a Mimosa pudica leaf paste. Repeat as often as possible until the condition improves."
                ),
              },
            ],
          },
          {
            type: "callout",
            style: "tip",
            heading: L("Never Pull a Retained Placenta Out by Hand"),
            text: L(
              "This is stated plainly in the source: do not attempt to remove a retained placenta by hand. Doing so can cause injury or infection. Reproductive problems like this are precisely the kind of case where the vet needs to be told promptly, even while a documented remedy is being tried."
            ),
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("Before applying the EVM brochure's aloe vera-turmeric-lime paste for mastitis, what should be done first?"),
            options: [
              L("Wash, clean and completely milk out all quarters, including unaffected ones"),
              L("Apply the paste directly with no cleaning"),
              L("Only clean the affected quarter"),
              L("Skip milking entirely that day"),
            ],
            answer: 0,
            explain: L("The brochure specifies washing, cleaning and fully milking out ALL quarters — including quarters that don't look affected — before each application."),
          },
          {
            type: "truefalse",
            q: L("The EVM brochure says a retained placenta should be pulled out by hand as soon as possible."),
            answer: false,
            explain: L("No — the brochure explicitly says NOT to remove a retained placenta by hand. It describes feeding radish/lady's finger, or tying a knot and cutting below it, instead."),
          },
        ],
      },
      {
        id: "t-m13-evm-general",
        title: L("EVM Remedies for Fever, Digestive and Other General Problems"),
        teach: [
          {
            type: "text",
            heading: L("The Same Brochure, More Everyday Ailments"),
            html: L(
              "Beyond udder and reproductive problems, the EVM brochure documents formulations for fever, common digestive upsets, worms, external parasites, wounds and more — most of them blended into a paste from spices and plants already found in most kitchens."
            ),
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("Fever"),
                text: L(
                  "Blend garlic, coriander, cumin, tulsi, dry cinnamon leaves, black pepper, betel leaves, shallots/onion, turmeric powder, chirata leaf powder, sweet basil, neem leaves and jaggery into a paste. Give orally in small portions, morning and evening."
                ),
              },
              {
                label: L("Diarrhoea"),
                text: L(
                  "Dry-fry cumin, asafoetida, poppy seeds and fenugreek seeds until they smoke; cool and powder them. Blend with onion, garlic, turmeric, curry leaves, pepper and jaggery into a paste, rolled into small balls. Give orally once daily for 1 to 3 days."
                ),
              },
              {
                label: L("Bloat and Indigestion"),
                text: L(
                  "Blend onion, garlic, dry chilly, cumin, turmeric powder, jaggery, pepper, betel leaves and ginger into a paste, rolled into small balls. Give with salt, 3 to 4 times a day for 3 days."
                ),
              },
              {
                label: L("Worms"),
                text: L(
                  "Blend onion, garlic, mustard seeds, neem leaves, cumin, bitter gourd, turmeric powder, pepper, banana stem, common leucas and jaggery into a paste, rolled into small balls. Give with salt, once daily for 3 days."
                ),
              },
            ],
          },
          {
            type: "glossary",
            term: L("Three Kings"),
            meaning: L(
              "A traditional Tamil (Siddha) combination of betel leaves, black pepper and salt, mixed with jaggery. The EVM brochure uses it as a first-response formulation for allergy, poisoning, venomous stings or bites, and pesticide/toxin poisoning."
            ),
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("Allergy / Poisoning / Venomous Sting or Bite"),
                text: L(
                  "The 'Three Kings' paste (betel leaves, pepper, salt, mixed with jaggery), fed in small portions 3 times a day for 2 weeks. In critical cases, 2 to 3 drops can instead be put in the eye every hour, without jaggery."
                ),
              },
              {
                label: L("Toxicity (Pesticide / HCN / Mycotoxin)"),
                text: L(
                  "Give a first dose of 'Three Kings'. Separately, soak and extract tamarind pulp, mix with water, moringa leaf extract and jaggery; feed 200 ml of this thick mixture every 2 hours, alternating with more 'Three Kings' doses in between."
                ),
              },
              {
                label: L("Tick / Ectoparasites"),
                text: L(
                  "Blend garlic, neem leaves and fruit, acorus rhizome, turmeric, lantana leaves and tulsi with 1 litre of water; strain through a fine sieve or muslin cloth. Spray on the animal's whole body and in shed cracks and crevices, weekly, only during the sunny part of the day."
                ),
              },
              {
                label: L("Cough"),
                text: L("Blend adhathoda (Adusa) leaf, tulsi, garlic, turmeric, pepper and jaggery into a paste. Feed orally 2 to 3 times daily until the cough resolves."),
              },
            ],
          },
          {
            type: "text",
            heading: L("A Few More Worth Recognising"),
            html: L(
              "The brochure also covers: <b>FMD mouth lesions</b> (cumin, fenugreek, pepper, turmeric, garlic and coconut blended with jaggery, applied inside the mouth 3 times a day for 3–5 days); <b>FMD foot lesions/wounds</b> (acalypha, garlic, neem, coconut or sesame oil, turmeric, mehndi and tulsi boiled together and applied on the cleaned wound, with anona leaf paste added only on day one if maggots are present); <b>pox/wart/cracks</b> (garlic, turmeric, cumin, sweet basil, neem and butter, applied on dried skin); <b>hygroma</b> — joint swelling — (aloe vera, lime, cissus, turmeric and garlic boiled in gingelly oil, applied 4–5 times a day with hot water fomentation twice daily); a <b>downer animal</b> that cannot get up (2 whole desi eggs fed 3 times a day, alternated every 2 hours with moringa-and-cissus paste, and — importantly — no attempt to lift the animal until the 4th day); <b>blood in milk</b> (curry leaves and moringa blended with jaggery, plus lemons, alongside the brochure's own note to also carry out the mastitis treatment); and <b>anoestrus</b> — an animal not coming into heat — (the same radish-aloe-moringa-cissus-curry leaf sequence as repeat breeding, with deworming done 15 days beforehand)."
            ),
          },
          {
            type: "callout",
            style: "warning",
            heading: L("Still Home Remedies, Not a Diagnosis"),
            text: L(
              "Every formulation on this page is used ALONGSIDE, never INSTEAD OF, proper veterinary care. The EVM brochure's own closing line makes this exact point: the plants and materials described are generally regarded as safe and are only suggestive — a nearby veterinarian should still be consulted for proper disease diagnosis and management."
            ),
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("What is the 'Three Kings' formulation used for in the EVM brochure?"),
            options: [
              L("Allergy, poisoning, venomous stings or bites, and pesticide/toxin poisoning"),
              L("Only for coughs"),
              L("Only for warts"),
              L("Only for feeding newborn calves"),
            ],
            answer: 0,
            explain: L("Three Kings — betel leaves, pepper and salt with jaggery — is the brochure's formulation for allergy, poisoning, stings/bites, and pesticide or toxin poisoning."),
          },
          {
            type: "mcq",
            q: L("According to the EVM brochure, when should the tick/ectoparasite spray be applied?"),
            options: [L("Only during the sunny part of the day"), L("Only at midnight"), L("Only while it is raining"), L("No particular timing is mentioned")],
            answer: 0,
            explain: L("The brochure specifically says to apply this spray only during the sunny part of the day."),
          },
        ],
      },
    ],
    finalQuiz: {
      passScore: 70,
      questions: [
        {
          topicId: "t-m13-evm-udder",
          type: "mcq",
          q: L("What important note comes with the EVM brochure's udder oedema remedy (heated oil, turmeric and garlic)?"),
          options: [
            L("Rule out mastitis before using the formulation"),
            L("It can never be applied more than once"),
            L("It should never touch the udder"),
            L("It replaces the need for milking"),
          ],
          answer: 0,
          explain: L("The brochure explicitly notes: rule out mastitis before using this formulation, since the two conditions need different handling."),
        },
        {
          topicId: "t-m13-evm-udder",
          type: "truefalse",
          q: L("For prolapse, the EVM brochure applies cooled aloe vera-turmeric gel first, then Mimosa pudica paste once the gel has dried."),
          answer: true,
          explain: L("Correct — that is the order described in the brochure's prolapse formulation."),
        },
        {
          topicId: "t-m13-evm-general",
          type: "mcq",
          q: L("What does the EVM brochure's own closing note tell farmers to still do?"),
          options: [
            L("Consult a nearby veterinarian for proper disease diagnosis and management"),
            L("Stop calling the vet, now that these remedies are known"),
            L("Use these remedies only for medical emergencies"),
            L("Replace vaccination programmes with these remedies"),
          ],
          answer: 0,
          explain: L("The brochure's closing line says the materials are only suggestive, and a nearby veterinarian should still be consulted for proper diagnosis and management."),
        },
        {
          topicId: "t-m13-evm-general",
          type: "truefalse",
          q: L("For a 'downer' animal that cannot get up, the EVM brochure says not to attempt to lift the animal until the 4th day."),
          answer: true,
          explain: L("Correct — the brochure is explicit that the animal should not be lifted until the 4th day, while the egg and moringa-cissus feeding continues."),
        },
        {
          topicId: "t-m13-evm-udder",
          type: "mcq",
          q: L("After the retention-of-placenta treatment, how often does the EVM brochure recommend feeding a whole radish afterward?"),
          options: [L("Once a week for four weeks"), L("Only once, and never again"), L("Every single day, indefinitely"), L("Only if the calf born is female")],
          answer: 0,
          explain: L("The brochure recommends feeding one whole radish once a week for four weeks, following the initial retention-of-placenta treatment."),
        },
      ],
    },
  },
    ],
  },
  {
    id: "m14",
    number: 14,
    title: L("Feeding of Animals"),
    subtitle: L("The basics of what a healthy diet for a dairy animal looks like."),
    icon: "feed",
    available: true,
    lessons: [
// ==================================================================
  // LESSON 1 — The Basics of a Balanced Diet
  // ==================================================================
  {
    id: "m14-l1",
    title: L("The Basics of a Balanced Diet"),
    estMinutes: 8,
    hook: [
      {
        type: "hero",
        heading: L("Feeding Is the Biggest Job on the Farm"),
        text: L(
          "More than almost anything else you do for an animal, what and how much it eats decides how healthy it stays and how much milk it gives. Feeding alone makes up around 70% of the total cost of producing milk — get it right, and you are already doing most of the job well. This lesson starts from zero: what a diet is actually made of, and what 'balanced' really means."
        ),
      },
    ],
    topics: [
      {
        id: "t-m14-feed-types",
        title: L("The Building Blocks of an Animal's Diet"),
        teach: [
          {
            type: "text",
            heading: L("What Does an Animal Actually Eat?"),
            html: L(
              "A cow or buffalo's daily food is called its <b>diet</b>. In dairy farming, feeding is not a small detail — it makes up around 70% of the total cost of producing milk. Getting the diet right affects the animal's health, and how much milk it gives, more than almost anything else you do."
            ),
          },
          {
            type: "glossary",
            term: L("Green Fodder"),
            meaning: L(
              "Fresh, growing plant material cut for the animal to eat — cultivated grasses and fodder crops. It is soft, moist, and animals find it very tasty."
            ),
          },
          {
            type: "glossary",
            term: L("Dry Fodder"),
            meaning: L(
              "Fodder that has dried out, such as straw or crop residue left over after harvest. It has less nutrition than green fodder, but is often more easily available all year round."
            ),
          },
          {
            type: "glossary",
            term: L("Concentrate / Compound Cattle Feed"),
            meaning: L(
              "A mix of grains, oil cakes, brans, molasses, salt, minerals and vitamins, put together to pack a lot of nutrition into a small amount of feed. It is fed alongside fodder, not instead of it."
            ),
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("How Much Fodder a Day"),
                text: L("A normal adult animal should be fed 4 to 6 kg of dry fodder and 15 to 20 kg of green fodder every day."),
              },
              {
                label: L("Legume vs Non-Legume Fodder"),
                text: L(
                  "Fodder crops that are legumes are richer in protein than non-legume fodder. The two should be fed together in a 1:3 proportion — one part legume fodder to three parts non-legume fodder."
                ),
              },
              {
                label: L("When to Cut Green Fodder"),
                text: L("Green fodder should be harvested at the 50% flowering stage — this gives the best balance of quantity and nutrition."),
              },
            ],
          },
          {
            type: "example",
            heading: L("Saving Fodder for Leaner Times"),
            text: L(
              "When there is more green fodder than the animals need right now, the surplus should not be wasted — it can be conserved as hay or silage. This conserved fodder becomes especially useful during summer, or whenever green fodder is scarce."
            ),
          },
          {
            type: "callout",
            style: "tip",
            heading: L("Two Small Habits That Make a Big Difference"),
            text: L(
              "Fodder should be chaffed (cut into small pieces) before feeding — this avoids wastage and helps the animal digest it better. And if you ever need to change an animal from one feed to another, do it gradually over several days, never suddenly."
            ),
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("What is 'concentrate' or 'compound cattle feed'?"),
            options: [
              L("A mix of grains, oil cakes, brans and minerals that packs a lot of nutrition into a small amount of feed"),
              L("Another name for green fodder"),
              L("A medicine given to sick animals"),
              L("Plain drinking water with salt added"),
            ],
            answer: 0,
            explain: L(
              "Concentrate feed is a nutrient-dense mix — grains, oil cakes, brans, molasses, salt, minerals and vitamins — fed alongside fodder, not instead of it."
            ),
          },
          {
            type: "truefalse",
            q: L("A normal adult animal needs roughly 4 to 6 kg of dry fodder and 15 to 20 kg of green fodder a day."),
            answer: true,
            explain: L("Yes — this is the general daily fodder recommendation for a normal adult dairy animal."),
          },
        ],
      },
      {
        id: "t-m14-ration-balancing",
        title: L("What Makes a Diet 'Balanced'"),
        teach: [
          {
            type: "glossary",
            term: L("Ration"),
            meaning: L(
              "The total amount and mix of feed given to one animal over one day. Every animal's daily ration is made up of some fodder and, usually, some concentrate feed."
            ),
          },
          {
            type: "glossary",
            term: L("Balanced Ration"),
            meaning: L(
              "A ration that gives the animal the right amounts of protein, energy, minerals and vitamins — not too much of one thing and too little of another. A well-balanced ration lets the animal stay healthy and produce milk to its full potential."
            ),
          },
          {
            type: "text",
            heading: L("Why Most Farm Rations End Up Imbalanced"),
            html: L(
              "Many farmers feed whatever concentrate, grass and crop residue happens to be locally available, without working out whether it adds up to a balanced ration. This is called <b>imbalanced feeding</b>, and it means the protein, energy, minerals and vitamins in the diet end up either more or less than the animal actually needs. Imbalanced feeding harms the animal's health and productivity, and it quietly costs the farmer money too — because the animal never produces as much milk as it really could."
            ),
          },
          {
            type: "callout",
            style: "info",
            heading: L("A Programme (and an App) Built to Fix This"),
            text: L(
              "The Ration Balancing Programme (RBP) uses a user-friendly software developed by NDDB to work out a properly balanced, least-cost ration using whatever feed is locally available. It can be used with help from a trained local resource person, or directly by farmers using the 'Pashuposhan' app, available on the Google Play Store."
            ),
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("More Milk, Better Milk"),
                text: L("Balancing the ration increases milk production, along with more fat and solids-not-fat in the milk."),
              },
              {
                label: L("More Income, Same Feed Cost"),
                text: L("Because the ration uses locally available feed at the least cost, balancing it increases the farmer's net daily income."),
              },
              {
                label: L("Healthier, More Fertile Animals"),
                text: L("A balanced ration improves general health, improves reproductive efficiency, and reduces the gap between one calving and the next."),
              },
              {
                label: L("Good for the Environment Too"),
                text: L("Balanced feeding also reduces methane emissions — a greenhouse gas — from the animals."),
              },
            ],
          },
          {
            type: "callout",
            style: "tip",
            heading: L("Minerals Are Part of 'Balanced' Too"),
            text: L(
              "Minerals are essential for almost every function inside the animal's body. Even a ration that looks fine in terms of fodder and concentrate can still be missing minerals — so an area-specific mineral mixture should always be added to the ration. You'll see exactly how much different animals need in the next lesson."
            ),
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("What is a 'ration'?"),
            options: [
              L("Only the concentrate feed given to an animal"),
              L("The total feed given to one animal over one day"),
              L("A type of illness"),
              L("The amount of milk an animal gives"),
            ],
            answer: 1,
            explain: L("A ration is the whole daily diet — fodder plus concentrate — not just one part of it."),
          },
          {
            type: "truefalse",
            q: L("Imbalanced feeding only affects the taste of the milk, nothing else."),
            answer: false,
            explain: L(
              "No — imbalanced feeding harms the animal's health and productivity, and reduces the farmer's income because the animal's milk potential is never fully reached."
            ),
          },
        ],
      },
    ],
    finalQuiz: {
      passScore: 70,
      questions: [
        {
          topicId: "t-m14-feed-types",
          type: "mcq",
          q: L("About how much green fodder should a normal adult animal be fed each day?"),
          options: [L("1-2 kg"), L("4-6 kg"), L("15-20 kg"), L("50-60 kg")],
          answer: 2,
          explain: L("15 to 20 kg of green fodder a day is the general recommendation for a normal adult animal, along with 4 to 6 kg of dry fodder."),
        },
        {
          topicId: "t-m14-feed-types",
          type: "truefalse",
          q: L("Legume and non-legume green fodder should be fed in a 1:3 proportion."),
          answer: true,
          explain: L("Yes — one part legume fodder to three parts non-legume fodder is the recommended mix."),
        },
        {
          topicId: "t-m14-ration-balancing",
          type: "mcq",
          q: L("What does the Ration Balancing Programme (RBP) mainly help a farmer do?"),
          options: [
            L("Diagnose animal diseases"),
            L("Work out a properly balanced ration at least cost using locally available feed"),
            L("Replace fodder with only concentrate feed"),
            L("Increase the size of the herd"),
          ],
          answer: 1,
          explain: L("RBP uses NDDB's software (or the Pashuposhan app) to balance a ration using locally available feed, at least cost."),
        },
        {
          topicId: "t-m14-feed-types",
          type: "mcq",
          q: L("Why should surplus green fodder be conserved as hay or silage?"),
          options: [
            L("It has no other use"),
            L("So it can be used later, such as during summer or when green fodder is scarce"),
            L("Because fresh fodder is harmful to animals"),
            L("To reduce the size of the herd"),
          ],
          answer: 1,
          explain: L("Conserving surplus fodder as hay or silage means it isn't wasted, and becomes useful during summer or scarcity."),
        },
        {
          topicId: "t-m14-ration-balancing",
          type: "truefalse",
          q: L("A ration can look fine in terms of fodder and concentrate, and still be missing essential minerals."),
          answer: true,
          explain: L("Yes — minerals need to be added separately as an area-specific mineral mixture; they aren't automatically covered just because fodder and concentrate are given."),
        },
      ],
    },
  },

  // ==================================================================
  // LESSON 2 — Feeding Changes by Animal Type and Life Stage
  // ==================================================================
  {
    id: "m14-l2",
    title: L("Feeding Changes by Animal Type and Life Stage"),
    estMinutes: 9,
    hook: [
      {
        type: "hero",
        heading: L("One Ration Does Not Fit Every Animal"),
        text: L(
          "A calf, a milking cow, and a cow about to give birth all need different amounts of feed. This lesson shows exactly how feeding needs change as an animal grows, produces milk, and moves through pregnancy — building on the fodder and concentrate basics from the last lesson."
        ),
      },
    ],
    topics: [
      {
        id: "t-m14-stage-feeding",
        title: L("Concentrate Feed by Type of Animal"),
        teach: [
          {
            type: "text",
            heading: L("Same Feed, Different Amounts"),
            html: L(
              "The fodder rules from the last lesson stay roughly the same for every adult animal. What changes a lot, from one animal to another, is how much <b>concentrate feed</b> (compound cattle feed) is added on top — because a growing calf, a milking cow, and a pregnant animal each need different extra nutrition."
            ),
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("Growing Animals"),
                text: L("Growing animals should be fed 1 to 2 kg of compound cattle feed daily."),
              },
              {
                label: L("Milking Animals"),
                text: L(
                  "Milking animals need 2 kg of compound cattle feed a day just for body maintenance — plus an extra 400 g (for cows) or 500 g (for buffaloes) for every litre of milk they give."
                ),
              },
              {
                label: L("Pregnant Animals, Last 2 Months"),
                text: L(
                  "On top of their usual feed, pregnant animals should get an extra 1 kg of compound cattle feed and 1 kg of good quality oil cake during the last two months of pregnancy, for proper growth of the calf."
                ),
              },
            ],
          },
          {
            type: "barchart",
            heading: L("Extra Concentrate Needed for Every Litre of Milk"),
            source: L("Handbook feeding recommendations"),
            unit: L("grams per litre of milk"),
            data: [
              { label: L("Cow"), value: 400 },
              { label: L("Buffalo"), value: 500 },
            ],
          },
          {
            type: "glossary",
            term: L("Bypass Protein Feed"),
            meaning: L(
              "Normally, most of the protein in feed is broken down inside the rumen (the animal's first stomach compartment). Bypass protein feed is treated so that a good portion of its protein 'escapes' being broken down there, and is used later in the gut instead — which the body can use more efficiently."
            ),
          },
          {
            type: "example",
            heading: L("When Usual Bypass Protein Feed Isn't Available"),
            text: L(
              "If the usual bypass protein feed isn't available, 1 kg of a treated bypass protein supplement can be given instead — split as 500 g in the morning and 500 g in the evening — to animals producing 8 to 10 litres of milk a day."
            ),
          },
          {
            type: "stat-grid",
            items: [
              { label: L("Calves"), text: L("20 to 25 g of mineral mixture daily.") },
              { label: L("Heifers and Dry Animals"), text: L("50 g per animal daily.") },
              {
                label: L("Milking Animals"),
                text: L("100 to 200 g per animal daily, depending on how much milk it's giving (or how much mineral mixture is already in its compound cattle feed)."),
              },
            ],
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("How much extra compound cattle feed should a milking cow get for every litre of milk she produces, on top of the 2 kg maintenance amount?"),
            options: [L("100 g"), L("400 g"), L("1 kg"), L("2 kg")],
            answer: 1,
            explain: L("Cows need an extra 400 g of compound cattle feed for every litre of milk produced (500 g for buffaloes), on top of the 2 kg maintenance amount."),
          },
          {
            type: "truefalse",
            q: L("Bypass protein feed is designed so that its protein breaks down completely inside the rumen, just like ordinary feed."),
            answer: false,
            explain: L(
              "No — the whole point of bypass protein feed is that a good portion of its protein escapes breakdown in the rumen and is used later in the gut, which the body uses more efficiently."
            ),
          },
        ],
      },
      {
        id: "t-m14-pregnant-postcalving",
        title: L("Feeding Pregnant Animals and New Mothers"),
        teach: [
          {
            type: "text",
            heading: L("The Last Three Months Matter Most"),
            html: L(
              "About 70% of a calf's growth inside the womb happens in the last three months of pregnancy. This is exactly when the mother's care and nutrition matter the most — good feeding now helps ensure a healthy calf and a mother who recovers well after giving birth."
            ),
          },
          {
            type: "glossary",
            term: L("Dry Cow"),
            meaning: L("A cow (or buffalo) that has temporarily stopped being milked, resting for a few weeks before she gives birth to her next calf."),
          },
          {
            type: "stat-grid",
            items: [
              { label: L("Green Fodder"), text: L("15 to 20 kg per day.") },
              { label: L("Dry Fodder"), text: L("4 to 5 kg per day.") },
              { label: L("Compound Cattle Feed"), text: L("2 to 3 kg per day.") },
              { label: L("Oil Cake, Mineral Mixture and Salt"), text: L("1 kg of oil cake, 50 g of mineral mixture, and 30 g of salt per day.") },
            ],
          },
          {
            type: "callout",
            style: "info",
            heading: L("Other Care During Pregnancy"),
            text: L(
              "Pregnant animals need enough space to stand and sit comfortably, and should have round-the-clock access to at least 75 to 80 litres of fresh, clean drinking water a day. In the last trimester, avoid taking them far away for grazing or over uneven paths — and keep them under close observation during the last one to two days before calving."
            ),
          },
          {
            type: "text",
            heading: L("Right After Calving: Go Gentle"),
            html: L(
              "Immediately after calving, a cow or buffalo has a low appetite and will not eat as much as her body actually needs — this is normal, not a cause for alarm on its own. For 2 to 3 days after calving, she should be given a light, easy-to-digest, mildly laxative ration — things like warm rice gruel, boiled rice or wheat bran, or boiled millet or wheat mixed with a little edible oil, jaggery, or similar ingredients. This kind of feeding also helps the placenta come away naturally and on time."
            ),
          },
          {
            type: "callout",
            style: "tip",
            heading: L("Keep the Water and Minerals Coming"),
            text: L(
              "After calving, give the animal tender green fodder and as much fresh water as she wants to drink — but never hot water. Keep clean drinking water available at all times, and continue her daily mineral mixture."
            ),
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("About how much of a calf's growth inside the womb happens in the last three months of pregnancy?"),
            options: [L("10%"), L("30%"), L("50%"), L("70%")],
            answer: 3,
            explain: L("About 70% of the calf's growth happens in the last three months of pregnancy — which is why nutrition matters most during this period."),
          },
          {
            type: "truefalse",
            q: L("Right after calving, it is normal for a cow or buffalo to eat less than her body actually needs."),
            answer: true,
            explain: L("Yes — a low appetite immediately after calving is normal. She should be given a light, easily digestible ration for the first 2 to 3 days."),
          },
        ],
      },
    ],
    finalQuiz: {
      passScore: 70,
      questions: [
        {
          topicId: "t-m14-stage-feeding",
          type: "mcq",
          q: L("How much compound cattle feed should a growing animal be fed daily?"),
          options: [L("100-200 g"), L("1-2 kg"), L("4-6 kg"), L("15-20 kg")],
          answer: 1,
          explain: L("Growing animals should be fed 1 to 2 kg of compound cattle feed daily."),
        },
        {
          topicId: "t-m14-stage-feeding",
          type: "truefalse",
          q: L("Milking animals need extra compound cattle feed for every litre of milk they produce, on top of a base maintenance amount."),
          answer: true,
          explain: L("Yes — 2 kg a day for maintenance, plus 400 g (cows) or 500 g (buffaloes) for every extra litre of milk."),
        },
        {
          topicId: "t-m14-pregnant-postcalving",
          type: "mcq",
          q: L("How much fresh drinking water should a pregnant animal have access to, at minimum, each day?"),
          options: [L("10-20 litres"), L("30-40 litres"), L("75-80 litres"), L("150 litres")],
          answer: 2,
          explain: L("Pregnant animals need round-the-clock access to at least 75 to 80 litres of fresh, clean drinking water daily."),
        },
        {
          topicId: "t-m14-pregnant-postcalving",
          type: "mcq",
          q: L("What kind of ration should a cow or buffalo be given for the first 2 to 3 days after calving?"),
          options: [
            L("Her normal heavy ration, unchanged"),
            L("A light, easily digestible, mildly laxative ration"),
            L("No feed at all, only water"),
            L("Extra compound cattle feed, doubled"),
          ],
          answer: 1,
          explain: L("A light, palatable, mildly laxative ration for 2 to 3 days after calving helps her recover and also helps the placenta come away naturally."),
        },
        {
          topicId: "t-m14-stage-feeding",
          type: "mcq",
          q: L("How much mineral mixture should a milking animal generally be given daily?"),
          options: [L("20-25 g"), L("50 g"), L("100-200 g"), L("500 g")],
          answer: 2,
          explain: L("Milking animals generally need 100 to 200 g of mineral mixture daily, depending on their milk production."),
        },
      ],
    },
  },

  // ==================================================================
  // LESSON 3 — Everyday Good Feeding Practice
  // ==================================================================
  {
    id: "m14-l3",
    title: L("Everyday Good Feeding Practice"),
    estMinutes: 8,
    hook: [
      {
        type: "hero",
        heading: L("Small Feeding Habits, Big Results"),
        text: L(
          "Beyond just choosing the right feed, a few everyday habits — how you handle water, supplements, and the way feed is mixed and given — make a real difference to an animal's health and milk production. This lesson covers the practical, day-to-day side of feeding."
        ),
      },
    ],
    topics: [
      {
        id: "t-m14-water-ummb",
        title: L("Water and Feed Supplements"),
        teach: [
          {
            type: "text",
            heading: L("Why Water Is Not 'Just Water'"),
            html: L(
              "Water isn't a minor detail of feeding — it does real work inside the animal's body. It helps digest feed and fodder, carries absorbed nutrients around the body, flushes out toxins through urine, and helps the animal maintain its body temperature."
            ),
          },
          {
            type: "stat-grid",
            items: [
              { label: L("Daily Requirement"), text: L("A normal, healthy adult animal needs 70 to 80 litres of water a day.") },
              {
                label: L("Extra for Milk"),
                text: L("Milk itself is about 87% water — so for every extra litre of milk an animal produces, it needs an additional 2.5 to 3 litres of water."),
              },
              {
                label: L("In Summer"),
                text: L("During summer, crossbred cows and buffaloes should be given a bath twice daily, and at least 100 litres of water a day, to help them manage the heat."),
              },
            ],
          },
          {
            type: "callout",
            style: "tip",
            heading: L("Access Round the Clock"),
            text: L("Animals should have free access to clean drinking water at all times — not just at fixed feeding times."),
          },
          {
            type: "glossary",
            term: L("Urea Molasses Mineral Block (UMMB)"),
            meaning: L(
              "A solid block made of urea, molasses and minerals that the animal licks. It is a feed supplement, not a replacement for fodder — it's especially useful when green fodder is scarce."
            ),
          },
          {
            type: "text",
            heading: L("How UMMB Helps"),
            html: L(
              "The rumen — the animal's first stomach compartment — contains beneficial microorganisms that break down the fibrous parts of feed. When green fodder is scarce, UMMB helps these rumen microbes multiply, which improves how well the animal digests dry fodder. Dry fodder supplemented with UMMB can even form a complete maintenance ration."
            ),
          },
          {
            type: "stat-grid",
            items: [
              { label: L("Better Intake"), text: L("Increases how much dry fodder the animal eats, and reduces wastage.") },
              { label: L("Better Digestion"), text: L("Improves the animal's overall digestive efficiency.") },
              { label: L("More and Richer Milk"), text: L("Improves milk production and its fat percentage.") },
            ],
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("About how much extra water does an animal need for every extra litre of milk it produces?"),
            options: [L("No extra water is needed"), L("0.5-1 litre"), L("2.5-3 litres"), L("10 litres")],
            answer: 2,
            explain: L("Since milk is about 87% water, an animal needs about 2.5 to 3 extra litres of water for every extra litre of milk it produces."),
          },
          {
            type: "truefalse",
            q: L("UMMB (Urea Molasses Mineral Block) is meant to fully replace fodder in an animal's diet."),
            answer: false,
            explain: L(
              "No — UMMB is a supplement, not a replacement. It helps rumen microbes multiply and improves digestion of dry fodder, especially when green fodder is scarce."
            ),
          },
        ],
      },
      {
        id: "t-m14-good-practice",
        title: L("Mixing Feed and Avoiding Common Mistakes"),
        teach: [
            {
              type: "photo",
              src: "assets/photo-fodder-cutting.jpg",
              alt: L("A farmer chopping green fodder with a fodder-cutting machine, with buffaloes visible in a pen behind him"),
              caption: L("Chaffing (cutting) green fodder into small pieces before feeding reduces wastage and helps the animal digest it better."),
            },
            {
              type: "photo",
              src: "assets/photo-m14-tmr.jpg",
              alt: L("Holstein dairy cows eating a Total Mixed Ration — a uniform mix of chopped fodder and concentrate — from a feed manger"),
              caption: L("A Total Mixed Ration (TMR / 'Sani') mixes fodder, concentrate and minerals together, instead of giving separate piles of each."),
            },
          {
            type: "callout",
            style: "warning",
            heading: L("Never Change Feed Suddenly"),
            text: L(
              "Switching an animal from one feed to another should always be done gradually, over several days — never suddenly. A sudden change can upset digestion, even if the new feed is actually better than the old one."
            ),
          },
          {
            type: "text",
            heading: L("Chaff It Before You Feed It"),
            html: L(
              "Fodder should be <b>chaffed</b> (cut into small pieces) before feeding. This simple step avoids wastage and helps the animal digest the fodder better — it's an easy habit that costs little but helps every day."
            ),
          },
          {
            type: "glossary",
            term: L("Total Mixed Ration (TMR)"),
            meaning: L(
              "A ration made by mixing all the different feed ingredients — fodder, concentrate, minerals and other additives — together into one uniform mix, instead of giving the animal separate piles of each. It's sometimes also called 'Sani'."
            ),
          },
          {
            type: "callout",
            style: "tip",
            heading: L("Feed It in Parts, Not All at Once"),
            text: L(
              "A Total Mixed Ration is best fed in 3 to 4 roughly equal parts spread across the day, rather than as one large feed. This reduces spoilage and increases how well the animal digests it."
            ),
          },
          {
            type: "ledger",
            heading: L("Example Daily Ration — Cow Giving 10 Litres of Milk"),
            rows: [
              { label: L("Dry fodder"), amount: "7 kg" },
              { label: L("Green fodder"), amount: "4 kg" },
              { label: L("Compound cattle feed"), amount: "6 kg" },
            ],
            total: { label: L("Total daily feed"), amount: "17 kg, plus 150 g mineral mixture" },
          },
          {
            type: "callout",
            style: "warning",
            heading: L("If an Animal Goes Off Its Feed, Don't Guess — Report It"),
            text: L(
              "If an animal that normally eats well suddenly stops eating properly, that is a warning sign, not just a feeding problem to fix on your own. Note it and tell the animal's owner or the veterinarian the same day, the same way you would report any other warning sign."
            ),
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("Why should feed changes be made gradually rather than suddenly?"),
            options: [
              L("Sudden changes save money"),
              L("A sudden change can upset the animal's digestion"),
              L("Gradual changes are required by law"),
              L("It makes the feed taste better"),
            ],
            answer: 1,
            explain: L("Changing feed suddenly, even to a better feed, can upset digestion — always change gradually over several days."),
          },
          {
            type: "truefalse",
            q: L("A Total Mixed Ration (TMR) is best fed in 3 to 4 roughly equal parts through the day, rather than as one large feed."),
            answer: true,
            explain: L("Yes — feeding a TMR in 3 to 4 parts reduces spoilage and improves digestibility, rather than giving it all at once."),
          },
        ],
      },
    ],
    finalQuiz: {
      passScore: 70,
      questions: [
        {
          topicId: "t-m14-water-ummb",
          type: "mcq",
          q: L("What does UMMB mainly help with?"),
          options: [
            L("Replacing all fodder in the diet"),
            L("Helping rumen microbes multiply and improving digestion of dry fodder"),
            L("Curing diseases directly"),
            L("Increasing the water content of milk"),
          ],
          answer: 1,
          explain: L("UMMB helps beneficial rumen microbes multiply, which improves how well the animal digests dry fodder — especially useful when green fodder is scarce."),
        },
        {
          topicId: "t-m14-water-ummb",
          type: "truefalse",
          q: L("An adult healthy animal generally needs about 70 to 80 litres of water a day."),
          answer: true,
          explain: L("Yes — that is the general daily water requirement for a healthy adult animal, before accounting for extra milk production or summer heat."),
        },
        {
          topicId: "t-m14-good-practice",
          type: "mcq",
          q: L("What is a Total Mixed Ration (TMR)?"),
          options: [
            L("Only the concentrate portion of the diet"),
            L("All the feed ingredients mixed together into one uniform ration"),
            L("A medicine mixed into water"),
            L("A ration fed only to sick animals"),
          ],
          answer: 1,
          explain: L("TMR (sometimes called 'Sani') mixes fodder, concentrate, minerals and other additives together into one uniform ration."),
        },
        {
          topicId: "t-m14-good-practice",
          type: "truefalse",
          q: L("If an animal that usually eats well suddenly goes off its feed, you should decide on your own what change to make to its diet."),
          answer: false,
          explain: L("No — going off feed is a warning sign. Report it to the owner or veterinarian the same day rather than deciding on treatment or diet changes yourself."),
        },
        {
          topicId: "t-m14-water-ummb",
          type: "mcq",
          q: L("During summer, what extra water care should crossbred cows and buffaloes get?"),
          options: [
            L("No change from the rest of the year"),
            L("A bath twice daily and at least 100 litres of water a day"),
            L("Only cold water, never at room temperature"),
            L("Water only once a day, in the morning"),
          ],
          answer: 1,
          explain: L("In summer, crossbred cows and buffaloes should get a bath twice daily and at least 100 litres of water a day, to help manage heat."),
        },
      ],
    },
  },
    ],
  },
  {
    id: "m15",
    number: 15,
    title: L("Fodder Production"),
    subtitle: L("Growing enough good-quality green and dry feed all year round."),
    icon: "sprout",
    available: true,
    lessons: [
// ==================================================================
  // LESSON 1 — Why Green Fodder Matters
  // ==================================================================
  {
    id: "m15-l1",
    title: L("Why Green Fodder Matters"),
    estMinutes: 8,
    hook: [
      {
        type: "hero",
        heading: L("The Cheapest, Most Powerful Feed on Your Farm"),
        text: L(
          "Green fodder — fresh-cut grass and green crops fed straight to the animal — is one of the simplest ways to keep dairy animals healthy and productive at low cost. But it isn't available in the same amount all year round. This lesson explains why green fodder matters so much, and why farms need a plan to deal with the seasons when there isn't enough of it."
        ),
      },
    ],
    topics: [
      {
        id: "t-m15-green-fodder-value",
        title: L("What Is Green Fodder, and Why Does It Matter?"),
        teach: [
            {
              type: "photo",
              src: "assets/photo-m15-green-fodder.jpg",
              alt: L("A farmer manually cutting fresh green fodder from a tall, lush green fodder crop in a field in Punjab, India"),
              caption: L("Green fodder is fed to the animal soon after cutting, while it still has its natural moisture."),
            },
          {
            type: "text",
            heading: L("What Do We Mean by 'Green Fodder'?"),
            html: L(
              "<b>Green fodder</b> simply means fresh, green plant material — grasses and green crops — cut and fed to the animal while it is still fresh, rather than dried or stored. This is different from dry fodder like straw, and different from cattle feed (the bought, processed concentrate mix). Green fodder is a separate, important part of a balanced diet."
            ),
          },
          {
            type: "glossary",
            term: L("Green Fodder"),
            meaning: L(
              "Fresh green grass or green crop material fed to the animal soon after cutting, while it still has its natural moisture — as opposed to dry fodder (like straw) or bought cattle feed."
            ),
          },
          {
            type: "text",
            heading: L("Why Green Fodder Is So Valuable"),
            html: L(
              "Green fodder is an economical source of nutrients — it costs far less than buying extra cattle feed. Animals also find it highly <b>palatable</b> (tasty and easy to eat) and easy to digest. When green fodder is fed together with dry fodder like straw, the natural microbes in the green fodder actually help the animal digest that straw better too. On top of that, feeding enough green fodder helps keep animals healthier overall and supports better breeding performance."
            ),
          },
          {
            type: "glossary",
            term: L("Digestibility"),
            meaning: L(
              "How easily an animal's body can break down a feed and absorb the nutrients from it. A highly digestible feed like green fodder gives the animal more real nutrition per mouthful than a poorly digestible one."
            ),
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("Cost"),
                text: L("More green fodder in the diet can lower the overall cost of producing milk, since it is cheaper than extra bought feed."),
              },
              {
                label: L("Digestion"),
                text: L("Green fodder is easy to digest, and it also helps the animal get more nutrition out of dry fodder like straw when fed together."),
              },
              {
                label: L("Health and Breeding"),
                text: L("Animals getting enough green fodder tend to stay healthier and breed better than animals that don't."),
              },
            ],
          },
          {
            type: "callout",
            style: "tip",
            heading: L("The Takeaway"),
            text: L(
              "Green fodder isn't a luxury — it's one of the most cost-effective tools a farm has for keeping animals healthy and milk yields good. That's exactly why making sure it's available all year round, not just in the good months, matters so much."
            ),
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("What is 'green fodder'?"),
            options: [
              L("Dried straw stored for later"),
              L("Fresh green grass or green crop material fed soon after cutting"),
              L("A bought, processed cattle feed mix"),
              L("Medicine given to sick animals"),
            ],
            answer: 1,
            explain: L("Green fodder is fresh green plant material, fed to the animal while it still has its natural moisture — different from dry straw or bought feed."),
          },
          {
            type: "truefalse",
            q: L("Feeding green fodder alongside dry fodder like straw can help the animal digest the straw better too."),
            answer: true,
            explain: L("Yes — the microbes present in green fodder help improve digestion of crop residues like straw when the two are fed together."),
          },
        ],
      },
      {
        id: "t-m15-feed-scarcity",
        title: L("The Problem: Fodder Isn't Always Available"),
        teach: [
          {
            type: "text",
            heading: L("Feast in Some Months, Famine in Others"),
            html: L(
              "Green fodder usually grows in plenty during certain months — right after the monsoon rains, and again during part of the cooler winter-to-spring season, when there's enough water for irrigated crops. But during the hot summer months, green fodder becomes scarce almost everywhere. This uneven supply is the core problem this whole module deals with: how to make sure animals get enough good fodder even in the lean months."
            ),
          },
          {
            type: "glossary",
            term: L("Fodder Deficit Period"),
            meaning: L(
              "A stretch of time, usually the hot summer months, when there isn't enough fresh green fodder growing to feed the animals properly."
            ),
          },
          {
            type: "text",
            heading: L("General Practices That Help Close the Gap"),
            html: L(
              "A few broad habits help farms grow more, and more reliable, fodder throughout the year: always use good-quality, certified seed of high-yielding fodder varieties rather than unknown or leftover seed; follow the recommended growing steps for whichever fodder crop is planted (proper land preparation, sowing on time, and so on); and grow a mix of fast-growing fodder crops in the gaps between two main crop seasons, so land is not left unused."
            ),
          },
          {
            type: "glossary",
            term: L("Legume Fodder Crop"),
            meaning: L(
              "A fodder crop (such as cowpea) from the pea-and-bean family. Legume fodder crops are especially valuable because they tend to be higher in protein, and growing them alongside cereal fodder crops (like maize or sorghum) gives a more balanced overall fodder supply."
            ),
          },
          {
            type: "callout",
            style: "tip",
            heading: L("Mix It Up, and Think Long-Term Too"),
            text: L(
              "Growing cereal fodder crops together with legume fodder crops gives a more nutritious overall mix than growing just one type. It also helps to plant some fast-growing, multiple-harvest perennial fodder grasses that keep producing cut after cut for a long time, rather than relying only on crops that are harvested once and then need resowing."
            ),
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("When does green fodder typically become scarce?"),
            options: [
              L("Right after the monsoon rains"),
              L("During the hot summer months"),
              L("It is always equally available all year"),
              L("Only during winter"),
            ],
            answer: 1,
            explain: L("Green fodder is usually plentiful after the monsoon and during part of the cooler season, but becomes scarce in the hot summer months."),
          },
          {
            type: "truefalse",
            q: L("Growing cereal fodder crops together with legume fodder crops gives a more balanced fodder supply than growing only one type."),
            answer: true,
            explain: L("Correct — mixing cereal fodder (like maize or sorghum) with legume fodder (like cowpea) gives a better balance, including more protein."),
          },
        ],
      },
    ],
    finalQuiz: {
      passScore: 70,
      questions: [
        {
          topicId: "t-m15-green-fodder-value",
          type: "mcq",
          q: L("Why does feeding green fodder help lower the cost of milk production?"),
          options: [
            L("Because it is more expensive than cattle feed, so animals eat less of it"),
            L("Because it is a cheaper source of nutrients than buying extra cattle feed"),
            L("Because it replaces the need for water"),
            L("It has no effect on cost at all"),
          ],
          answer: 1,
          explain: L("Green fodder is an economical source of nutrients, so using more of it can reduce how much costly cattle feed is needed."),
        },
        {
          topicId: "t-m15-green-fodder-value",
          type: "truefalse",
          q: L("Green fodder is generally considered highly palatable and easy for animals to digest."),
          answer: true,
          explain: L("Yes — green fodder is both tasty to the animal (palatable) and easy to digest."),
        },
        {
          topicId: "t-m15-feed-scarcity",
          type: "mcq",
          q: L("What is a 'fodder deficit period'?"),
          options: [
            L("A time when too much fodder is available"),
            L("A stretch of time, usually summer, when there isn't enough green fodder growing"),
            L("The period right after sowing seed"),
            L("A disease affecting fodder crops"),
          ],
          answer: 1,
          explain: L("A fodder deficit period is a time — typically the hot summer months — when green fodder supply falls short."),
        },
        {
          topicId: "t-m15-feed-scarcity",
          type: "mcq",
          q: L("Which of these is a recommended general practice for better fodder supply?"),
          options: [
            L("Always use unknown, leftover seed to save money"),
            L("Use certified seed of high-yielding varieties and grow a mix of crops, including legume fodder"),
            L("Grow only one single fodder crop, forever, on all land"),
            L("Leave land unused between main crop seasons"),
          ],
          answer: 1,
          explain: L("Certified good-quality seed, following recommended growing steps, and mixing legume and cereal fodder crops all help build a steadier fodder supply."),
        },
        {
          topicId: "t-m15-feed-scarcity",
          type: "truefalse",
          q: L("Planting some fast-growing, multiple-harvest perennial fodder grasses can help keep fodder coming in over a longer period."),
          answer: true,
          explain: L("Correct — perennial fodder grasses that can be cut again and again give a more continuous supply than crops harvested only once."),
        },
      ],
    },
  },

  // ==================================================================
  // LESSON 2 — Conserving Surplus Fodder: Hay and Silage
  // ==================================================================
  {
    id: "m15-l2",
    title: L("Conserving Surplus Fodder: Hay and Silage"),
    estMinutes: 9,
    hook: [
      {
        type: "hero",
        heading: L("Don't Let Extra Fodder Go to Waste"),
        text: L(
          "In the months when green fodder grows in plenty, farms often end up with more than the animals can eat right away. Rather than letting that surplus go to waste, it can be stored for later use in one of two simple ways — turned into hay, or turned into silage. This lesson explains both, so surplus fodder can carry a farm through the lean months instead of being wasted."
        ),
      },
    ],
    topics: [
      {
        id: "t-m15-hay",
        title: L("Turning Surplus Fodder into Hay"),
        teach: [
            {
              type: "photo",
              src: "assets/photo-m15-hay.jpg",
              alt: L("Two large cone-shaped haystacks made of dried wheat hay standing in a field in Punjab, India"),
              caption: L("Once sun-dried to low moisture, hay is gathered and stored so its quality is kept until it's needed."),
            },
          {
            type: "text",
            heading: L("Why Conserve Fodder at All?"),
            html: L(
              "Feeding good-quality roughage (bulky fodder) to dairy animals all year round is essential to get the best out of them — but green fodder isn't available evenly through the year. The surplus grown in the plentiful months can be conserved as <b>hay</b> or <b>silage</b>, so there's still good fodder to feed during the deficit months, and less of the surplus is wasted."
            ),
          },
          {
            type: "glossary",
            term: L("Hay"),
            meaning: L(
              "Green fodder that has been dried in the sun until most of its moisture is gone (below about 15 per cent). It stores well and still gives the animal good nutrition and protein during months when fresh green fodder is scarce."
            ),
          },
          {
            type: "text",
            heading: L("How Hay Is Made"),
            html: L(
              "Hay is generally made from fodder crops with thin stems, cut around the time they are about half-flowered, most often during the hot, dry summer months when sun-drying works fastest. After cutting, the green fodder is spread out in a thin, even layer on a dry surface so the sun can dry it. It is turned over regularly so it dries evenly on all sides, and after a few days — once it has dried down to low moisture — it is gathered into bundles for storage."
            ),
          },
          {
            type: "callout",
            style: "tip",
            heading: L("How to Tell Good Hay From Poor Hay"),
            text: L(
              "Good hay keeps its leaves attached and keeps a greenish colour, rather than turning pale, crumbly and leafless. If the hay has lost its leaves and its colour, it has lost much of its feeding value too. Store finished hay bundles somewhere dry and free of dust, so the quality doesn't drop while it waits to be used."
            ),
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("Best made from"),
                text: L("Thin-stemmed fodder crops and some perennial pasture grasses — cut around the half-flowering stage."),
              },
              {
                label: L("Moisture target"),
                text: L("Dried down to below about 15 per cent moisture before it is stored."),
              },
              {
                label: L("Storage"),
                text: L("Kept in a dry, dust-free place to protect its quality until it's needed."),
              },
            ],
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("What is 'hay'?"),
            options: [
              L("Green fodder fermented in a sealed pit"),
              L("Green fodder that has been dried in the sun to low moisture"),
              L("A type of cattle feed concentrate"),
              L("Straw treated with urea"),
            ],
            answer: 1,
            explain: L("Hay is green fodder that has been sun-dried down to low moisture (below about 15 per cent), so it stores well for later feeding."),
          },
          {
            type: "truefalse",
            q: L("Good-quality hay keeps its leaves and a greenish colour, rather than turning pale and leafless."),
            answer: true,
            explain: L("Correct — leaves and green colour are signs of good-quality hay; losing them means losing feeding value."),
          },
        ],
      },
      {
        id: "t-m15-silage",
        title: L("Turning Surplus Fodder into Silage"),
        teach: [
            {
              type: "photo",
              src: "assets/photo-m15-silage.jpg",
              alt: L("A large silage pit on a farm, completely covered and sealed with black plastic sheeting weighted down at the edges"),
              caption: L("A silage pit sealed airtight with plastic sheeting — the same basic idea described in this lesson."),
            },
          {
            type: "glossary",
            term: L("Silage"),
            meaning: L(
              "Green fodder that has been packed tightly and sealed away from air, so it 'pickles' rather than rots. It is sometimes described simply as the pickle of green fodder — it stays soft, moist and highly digestible, and can be stored for a long time this way."
            ),
          },
          {
            type: "text",
            heading: L("How Silage Is Different From Hay"),
            html: L(
              "Unlike hay, silage is not dried out — it is made from green fodder that is still fairly moist when cut, then packed down tightly with the air pressed out. Cereal-type fodder crops (crops richer in carbohydrates and sugars) generally make the best silage. After cutting, the fodder is chopped into small pieces, which helps it pack down tightly with very little air trapped inside."
            ),
          },
          {
            type: "glossary",
            term: L("Silo Pit"),
            meaning: L(
              "A pit or heap built specifically for making silage. Chopped green fodder is filled into it in pressed-down layers, then sealed completely airtight from the top, usually with a plastic sheet and a layer of packed soil."
            ),
          },
          {
            type: "text",
            heading: L("Why Sealing It Airtight Matters"),
            html: L(
              "The whole idea behind silage is keeping air out. Once the silo pit is completely filled and pressed down, it is sealed airtight at the top. If any cracks appear in the sealed covering later on, they need to be patched up straight away with more soil — a crack that lets air in can spoil the silage underneath it."
            ),
          },
          {
            type: "callout",
            style: "tip",
            heading: L("Feeding Silage: Give It Time, and Introduce It Slowly"),
            text: L(
              "Silage needs some weeks sealed away before it's ready to feed. Once opened, take out only as much as the animals need for that day, and reseal the rest so it keeps well until the next feeding. When first introducing silage to an animal's diet, start with smaller quantities and increase gradually, rather than switching over all at once."
            ),
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("What is the key idea behind how silage is made?"),
            options: [
              L("Drying the fodder completely in the sun"),
              L("Packing moist, chopped green fodder tightly and sealing it away from air"),
              L("Mixing fodder with urea before feeding"),
              L("Leaving fodder loosely piled in the open"),
            ],
            answer: 1,
            explain: L("Silage is made by packing moist, chopped fodder tightly into a silo pit and sealing it airtight, which is very different from hay's sun-drying approach."),
          },
          {
            type: "truefalse",
            q: L("If a crack appears in the sealed covering of a silo pit, it should be patched right away with more soil."),
            answer: true,
            explain: L("Correct — a crack lets air in, which can spoil the silage, so it should be sealed again promptly."),
          },
        ],
      },
    ],
    finalQuiz: {
      passScore: 70,
      questions: [
        {
          topicId: "t-m15-hay",
          type: "mcq",
          q: L("Why is fodder conserved as hay or silage in the first place?"),
          options: [
            L("To make it taste different"),
            L("To use up surplus fodder during plentiful months so it can feed animals in deficit months, instead of being wasted"),
            L("Because fresh green fodder is harmful to animals"),
            L("It is required by law"),
          ],
          answer: 1,
          explain: L("Conserving surplus fodder as hay or silage lets it be used during the lean months, reducing waste and keeping a steadier feed supply."),
        },
        {
          topicId: "t-m15-hay",
          type: "mcq",
          q: L("Roughly what moisture level should hay be dried down to before storage?"),
          options: [L("Below about 15 per cent"), L("About 65 to 70 per cent"), L("It should stay fully wet"), L("Moisture level doesn't matter for hay")],
          answer: 0,
          explain: L("Hay is dried until its moisture is below about 15 per cent — that's what makes it store well."),
        },
        {
          topicId: "t-m15-silage",
          type: "mcq",
          q: L("What is a silo pit used for?"),
          options: [
            L("Sun-drying green fodder into hay"),
            L("Packing and sealing chopped green fodder airtight to make silage"),
            L("Storing bags of cattle feed concentrate"),
            L("Treating straw with urea"),
          ],
          answer: 1,
          explain: L("A silo pit is where chopped green fodder is packed down in layers and then sealed airtight to turn it into silage."),
        },
        {
          topicId: "t-m15-silage",
          type: "truefalse",
          q: L("When silage is first introduced to an animal's diet, it should be fed in small amounts at first and increased gradually."),
          answer: true,
          explain: L("Correct — starting with smaller quantities lets the animal adjust to silage before feeding it as a larger part of the diet."),
        },
      ],
    },
  },

  // ==================================================================
  // LESSON 3 — Making the Most of Crop Residues: Urea Treatment
  // ==================================================================
  {
    id: "m15-l3",
    title: L("Making the Most of Crop Residues: Urea Treatment"),
    estMinutes: 9,
    hook: [
      {
        type: "hero",
        heading: L("Turning Poor-Quality Straw Into Better Feed"),
        text: L(
          "Straw left over from crops like paddy, wheat, bajra and sorghum is usually plentiful on a farm — but on its own, it's poor-quality feed. A simple treatment using urea can make that straw noticeably more nutritious. Handled correctly, it's a genuinely useful farm practice. Handled carelessly, it can be dangerous — so this lesson is as much about safety as it is about the method itself."
        ),
      },
    ],
    topics: [
      {
        id: "t-m15-straw-problem",
        title: L("Why Plain Straw Isn't Enough on Its Own"),
        teach: [
            {
              type: "photo",
              src: "assets/photo-m15-straw.jpg",
              alt: L("A field of golden crop stubble left after harvest, near Sangrur, Punjab, India"),
              caption: L("Crop residue (straw stubble) left after harvest — the kind of straw that urea treatment can turn into better feed."),
            },
          {
            type: "text",
            heading: L("Plenty of Straw, but Poor Nutrition"),
            html: L(
              "Straws from crops like paddy, wheat, bajra and sorghum are usually available in large quantities on dairy farms. The problem is that these straws are naturally low in nutrients and hard for the animal to digest well — they generally contain less than 4 per cent protein, which is quite low."
            ),
          },
          {
            type: "glossary",
            term: L("Crop Residue / Straw"),
            meaning: L(
              "The dry stalks and leftover plant material from a grain crop (such as paddy or wheat) after the grain itself has been harvested. It is bulky and widely available, but on its own it is low in nutrients."
            ),
          },
          {
            type: "text",
            heading: L("What Urea Treatment Does"),
            html: L(
              "<b>Urea treatment</b> is a way of improving the nutritional value of straw before feeding it. Treating straw with a urea solution raises its protein content from under 4 per cent to about 8 per cent — roughly double. Feeding urea-treated straw can also cut down how much extra cattle feed concentrate is needed, by as much as 30 per cent in some cases. In simple terms, the treatment turns a bulky, low-value straw into a noticeably better feed."
            ),
          },
          {
            type: "glossary",
            term: L("Urea Treatment"),
            meaning: L(
              "A farm process where straw is dampened with a urea-and-water solution, packed down, and then sealed away from air for some weeks. This raises the straw's protein content and makes it more digestible and nutritious for the animal."
            ),
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("Untreated straw protein"),
                text: L("Less than about 4 per cent — quite poor on its own."),
              },
              {
                label: L("Urea-treated straw protein"),
                text: L("Raised to about 8 per cent — roughly double."),
              },
              {
                label: L("Possible feed savings"),
                text: L("Can reduce how much extra cattle feed concentrate is needed, by up to about 30 per cent."),
              },
            ],
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("Why is plain, untreated straw considered poor-quality feed on its own?"),
            options: [
              L("It is too expensive"),
              L("It is naturally low in protein and not very digestible"),
              L("Animals refuse to eat it at all"),
              L("It is not available in large enough quantities"),
            ],
            answer: 1,
            explain: L("Straws like paddy, wheat, bajra and sorghum straw naturally contain less than about 4 per cent protein and are not very digestible on their own."),
          },
          {
            type: "truefalse",
            q: L("Urea treatment can roughly double the protein content of straw, from under 4 per cent to about 8 per cent."),
            answer: true,
            explain: L("Correct — that is the approximate improvement urea treatment gives to straw's protein content."),
          },
        ],
      },
      {
        id: "t-m15-straw-safety",
        title: L("How Treatment Works — and Why Safety Comes First"),
        teach: [
          {
            type: "callout",
            style: "warning",
            heading: L("The Most Important Rule: Never Feed Urea Directly"),
            text: L(
              "Urea itself, or urea solution, must NEVER be fed directly to an animal — on its own, it is fatal. The whole point of the treatment described here is that the urea reacts with and is absorbed into the straw over several weeks of sealed storage, before the straw is ever fed. While preparing the urea solution, always keep it safely out of the reach of animals."
            ),
          },
          {
            type: "text",
            heading: L("The Basic Idea of the Process"),
            html: L(
              "In simple terms, straw is dampened with a urea-and-water solution, spread out and packed down in layers, and then completely covered and sealed away from air — often with a plastic sheet weighed down with soil, or with a layer of soil and wet clay or dung if no plastic sheet is available. Sealing it airtight is essential: it lets the urea convert into ammonia gas inside the heap, which is what improves the straw, and sealing also stops that gas from simply escaping and being wasted."
            ),
          },
          {
            type: "glossary",
            term: L("Airtight Sealing"),
            meaning: L(
              "Covering the treated straw heap completely so no air gets in and no gas escapes — usually with a plastic sheet and a layer of packed soil at the edges, or an alternative covering if plastic isn't available."
            ),
          },
          {
            type: "text",
            heading: L("Waiting, Airing Out, and Feeding Gradually"),
            html: L(
              "The sealed heap needs to sit for some weeks before it's ready — roughly three weeks in summer, or about four weeks in winter, since the reaction happens more slowly in cooler weather. Once opened, the straw should be spread out in the open air for a while first, so that any leftover ammonia gas can escape, before it is ever given to the animals."
            ),
          },
          {
            type: "callout",
            style: "tip",
            heading: L("Introduce It Gradually"),
            text: L(
              "Just like silage, treated straw should be introduced in small quantities at first. The animal gets used to the taste over time and starts eating it well."
            ),
          },
        ],
        check: [
          {
            type: "truefalse",
            q: L("It is safe to mix a small amount of urea directly into an animal's feed as long as the amount is small."),
            answer: false,
            explain: L("No — urea itself is fatal to animals and must never be fed directly, in any amount. It must first be allowed to react into the straw over weeks of sealed treatment."),
          },
          {
            type: "mcq",
            q: L("Why must the treated straw heap be sealed completely airtight?"),
            options: [
              L("To keep it dry from rain only"),
              L("To let the urea convert into ammonia gas inside the heap and stop that gas from escaping"),
              L("To keep animals from smelling it"),
              L("Airtight sealing isn't actually necessary"),
            ],
            answer: 1,
            explain: L("Sealing the heap airtight lets the urea react into ammonia gas inside the heap, which improves the straw, and prevents that gas from being wasted."),
          },
        ],
      },
    ],
    finalQuiz: {
      passScore: 70,
      questions: [
        {
          topicId: "t-m15-straw-problem",
          type: "mcq",
          q: L("What happens to straw's protein content after urea treatment?"),
          options: [
            L("It stays exactly the same"),
            L("It roughly doubles, from under 4 per cent to about 8 per cent"),
            L("It becomes ten times higher"),
            L("It decreases"),
          ],
          answer: 1,
          explain: L("Urea treatment raises straw's protein content from under about 4 per cent to about 8 per cent."),
        },
        {
          topicId: "t-m15-straw-safety",
          type: "truefalse",
          q: L("Urea or urea solution can be fatal to animals if fed to them directly."),
          answer: true,
          explain: L("Correct — this is the single most important safety rule in this lesson. Urea must never be fed directly; it must first be treated into straw."),
        },
        {
          topicId: "t-m15-straw-safety",
          type: "mcq",
          q: L("Roughly how long should the sealed, treated straw heap be left before opening?"),
          options: [
            L("A few hours"),
            L("About 3 weeks in summer, or about 4 weeks in winter"),
            L("Exactly one year"),
            L("It can be fed immediately after sealing"),
          ],
          answer: 1,
          explain: L("The treated heap needs roughly 3 weeks in summer or 4 weeks in winter before it is ready to open and feed."),
        },
        {
          topicId: "t-m15-straw-problem",
          type: "truefalse",
          q: L("Feeding urea-treated straw can reduce how much extra cattle feed concentrate is needed."),
          answer: true,
          explain: L("Yes — urea-treated straw can reduce the extra cattle feed concentrate needed, by up to about 30 per cent in some cases."),
        },
        {
          topicId: "t-m15-straw-safety",
          type: "mcq",
          q: L("Before feeding opened, treated straw to animals, what should be done first?"),
          options: [
            L("Feed it immediately, straight from the sealed heap"),
            L("Spread it out in the open air first, so leftover ammonia gas can escape"),
            L("Mix in fresh urea solution to strengthen it further"),
            L("Nothing — no extra step is needed"),
          ],
          answer: 1,
          explain: L("After opening, treated straw should be aired out first so any remaining ammonia gas escapes, before it is fed to the animals."),
        },
      ],
    },
  },
    ],
  },
  {
    id: "m16",
    number: 16,
    title: L("Housing of Animals"),
    subtitle: L("What a comfortable, healthy shed for animals actually needs."),
    icon: "home",
    available: true,
    lessons: [
// ==================================================================
  // LESSON 1 — Space and Layout of the Shed
  // ==================================================================
  {
    id: "m16-l1",
    title: L("Space and Layout of the Shed"),
    estMinutes: 8,
    hook: [
      {
        type: "hero",
        heading: L("A Good Shed Starts With the Right Space and the Right Layout"),
        text: L(
          "An animal doesn't need anything fancy — but it does need enough room to lie down and move comfortably, and a shed that is arranged the right way. This lesson teaches exactly how much floor space and ceiling height a shed needs, and how the manger, water and open area around it should be arranged. No construction experience needed — just the exact numbers to check for."
        ),
      },
    ],
    topics: [
      {
        id: "t-m16-space",
        title: L("How Much Space Each Animal Needs"),
        teach: [
            {
              type: "photo",
              src: "assets/photo-m16-shed.jpg",
              alt: L("A small thatched-roof cattle shed open on the sides, standing on dry raised ground, with cattle resting comfortably underneath"),
              caption: L("A simple open-sided shed — dry underfoot, only a couple of animals resting comfortably, not crowded."),
            },
          {
            type: "text",
            heading: L("Why Space Matters"),
            html: L(
              "Providing clean and comfortable housing is important for an animal's proper growth and for it to give as much milk as it possibly can. When animals are kept in cramped, stressful conditions, that stress alone can noticeably reduce how much they produce — so giving each animal enough room is not a luxury, it's part of good management."
            ),
          },
          {
            type: "glossary",
            term: L("Animal Shed"),
            meaning: L(
              "A covered structure built to shelter cows or buffaloes from sun, rain and wind. It doesn't need to be elaborate, but it does need to follow a few basic rules of space, height and layout to actually protect the animal and keep it comfortable."
            ),
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("Floor Space — Per Animal"),
                text: L("Every cow or buffalo must have a minimum of 5.5 feet x 10 feet of floor space in the shed."),
              },
              {
                label: L("Ceiling Height"),
                text: L(
                  "The height of the ceiling should not be less than 10 feet — whether the roof is made of thatch, AC sheets, brick, or RCC."
                ),
              },
            ],
          },
          {
            type: "glossary",
            term: L("RCC"),
            meaning: L(
              "Short for Reinforced Cement Concrete — a strong, solid roof or ceiling built from cement and iron rods together. It's more permanent than a thatched (straw or leaf) roof, but a thatched roof is also acceptable as long as the shed still meets the height rule."
            ),
          },
          {
            type: "callout",
            style: "tip",
            heading: L("Give Each Animal Its Own Space"),
            text: L(
              "Treat 5.5 feet x 10 feet and 10 feet of height as the minimum, not a target to stay under. A shed that is too low or too crowded keeps the animal under constant, avoidable stress, and stressed animals give less milk."
            ),
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("What is the minimum floor space required for one cow or buffalo in a shed?"),
            options: [L("5 feet x 8 feet"), L("5.5 feet x 10 feet"), L("8 feet x 10 feet"), L("10 feet x 10 feet")],
            answer: 1,
            explain: L("The minimum floor space required for one cow or buffalo is 5.5 feet x 10 feet."),
          },
          {
            type: "truefalse",
            q: L("The ceiling height of an animal shed should not be less than 10 feet, no matter what material the roof is made of."),
            answer: true,
            explain: L("Correct — 10 feet is the minimum ceiling height, whether the roof is thatched, AC sheets, brick, or RCC."),
          },
        ],
      },
      {
        id: "t-m16-orientation",
        title: L("Facing the Shed the Right Way: Walls, Manger and Open Area"),
        teach: [
            {
              type: "photo",
              src: "assets/photo-m16-manger.jpg",
              alt: L("A long, sturdy concrete manger built along the base of a wall in a farm shed"),
              caption: L("A concrete manger built along a wall, raised above the ground — the same basic design this lesson describes."),
            },
          {
            type: "text",
            heading: L("Open on Three Sides, Walled on One"),
            html: L(
              "A shed should be open from three sides, with only the <b>western</b> side having a wall. Keeping most sides open lets in light and fresh air, while the single western wall blocks the harsh afternoon sun and hot winds that come from that direction."
            ),
          },
          {
            type: "glossary",
            term: L("Manger"),
            meaning: L("A long trough or box, usually built along a wall, where an animal's feed is placed for it to eat from."),
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("Manger — Location and Size"),
                text: L(
                  "A manger 2 feet wide and 1.5 feet deep should be located on the western wall of the shed, with its base about 1 foot above the floor level."
                ),
              },
              {
                label: L("Drinking Water"),
                text: L("A trough for drinking water should be provided right beside the manger."),
              },
            ],
          },
          {
            type: "glossary",
            term: L("Loafing Area"),
            meaning: L(
              "An open, uncovered area next to the shed where animals can move about freely, rest, and stand outside the roofed part whenever they want to."
            ),
          },
          {
            type: "example",
            heading: L("Why the Eastern Side Is for Loafing"),
            text: L(
              "The eastern side of the shed should have this free loafing area. Animals are more comfortable resting under the shade of a tree, so the loafing area should have 2 to 3 shady trees — for example, Neem."
            ),
          },
          {
            type: "callout",
            style: "info",
            heading: L("Everything Has a Reason"),
            text: L(
              "Notice the pattern: the wall faces west to block the harsh sun, the manger sits along that same wall for shelter while feeding, and the open loafing area with shady trees faces east. None of this is random — each choice makes the animal more comfortable."
            ),
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("Which side of the shed should have a wall, with the other three sides left open?"),
            options: [L("The eastern side"), L("The western side"), L("The northern side"), L("The southern side")],
            answer: 1,
            explain: L("Only the western side should have a wall — the other three sides are left open for light and air."),
          },
          {
            type: "truefalse",
            q: L("The free loafing area, with 2 to 3 shady trees, should be on the eastern side of the shed."),
            answer: true,
            explain: L("Correct — the eastern side should have the free loafing area, with shady trees such as Neem."),
          },
        ],
      },
    ],
    finalQuiz: {
      passScore: 70,
      questions: [
        {
          topicId: "t-m16-space",
          type: "mcq",
          q: L("Why does floor space and ceiling height matter for an animal shed?"),
          options: [
            L("It has no real effect on the animal"),
            L("Crowded, stressful housing can reduce how much an animal produces"),
            L("It only matters for how the shed looks"),
            L("Only the roof material matters, not the space"),
          ],
          answer: 1,
          explain: L("Stressful, cramped housing conditions can noticeably reduce an animal's productivity, including milk."),
        },
        {
          topicId: "t-m16-space",
          type: "truefalse",
          q: L("A thatched roof is not acceptable — only AC sheets, brick or RCC roofs are allowed."),
          answer: false,
          explain: L("A thatched roof is acceptable, as are AC sheets, brick, or RCC — as long as the ceiling is at least 10 feet high."),
        },
        {
          topicId: "t-m16-orientation",
          type: "mcq",
          q: L("Where should the manger be located, and roughly how big should it be?"),
          options: [
            L("On the eastern wall, 5 feet wide"),
            L("On the western wall, 2 feet wide and 1.5 feet deep"),
            L("In the loafing area, with no fixed size"),
            L("On the northern wall, 1 foot deep"),
          ],
          answer: 1,
          explain: L("The manger should be on the western wall, 2 feet wide and 1.5 feet deep, with its base about 1 foot above the floor."),
        },
        {
          topicId: "t-m16-orientation",
          type: "truefalse",
          q: L("A trough for drinking water should be placed beside the manger."),
          answer: true,
          explain: L("Correct — the drinking water trough should be provided right by the side of the manger."),
        },
        {
          topicId: "t-m16-orientation",
          type: "mcq",
          q: L("Why should the loafing area have shady trees such as Neem?"),
          options: [
            L("Trees are only for decoration"),
            L("Animals are more comfortable resting under the shade of a tree"),
            L("Trees replace the need for a shed entirely"),
            L("Shady trees are required only in winter"),
          ],
          answer: 1,
          explain: L("Animals are more comfortable under the shade of a tree, which is why the loafing area should have 2 to 3 shady trees like Neem."),
        },
      ],
    },
  },

  // ==================================================================
  // LESSON 2 — Flooring, Drainage and Ventilation
  // ==================================================================
  {
    id: "m16-l2",
    title: L("Flooring, Drainage and Ventilation"),
    estMinutes: 8,
    hook: [
      {
        type: "hero",
        heading: L("Keeping the Floor Dry and the Air Moving"),
        text: L(
          "A shed with the right space is only half the job — the floor also needs to stay dry and clean, and fresh air needs to keep moving through. This lesson covers exactly how the floor and drain should be built, how much ventilation each animal needs, and simple ways to protect animals from both winter cold and summer heat."
        ),
      },
    ],
    topics: [
      {
        id: "t-m16-floor-drain",
        title: L("Flooring and Drainage"),
        teach: [
          {
            type: "text",
            heading: L("Why the Floor and Drain Matter"),
            html: L(
              "Improper housing can lead to problems with an animal's hooves (the hard part of its feet). A big part of the reason is a wet, dirty floor — so building the floor and drain correctly, right from the start, protects the animal's feet as well as its overall health."
            ),
          },
          {
            type: "glossary",
            term: L("Concrete Flooring (Rough Finish)"),
            meaning: L(
              "A floor made of cement, deliberately left with a slightly rough surface rather than smoothed and polished. A rough finish gives an animal's hooves better grip, so it is less likely to slip."
            ),
          },
          {
            type: "glossary",
            term: L("Slope"),
            meaning: L(
              "A slight, gentle tilt built into a floor so that liquid — urine, spilled water, and waste — naturally flows toward a drain instead of collecting in puddles on the floor."
            ),
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("Floor"),
                text: L("The flooring should be of rough concrete finish, with a 1.5% slope towards the drain."),
              },
              {
                label: L("Drain"),
                text: L("The drain should be open, 8 inches wide, 3 inches deep, with a 1.0% cross slope, so the shed remains clean."),
              },
            ],
          },
          {
            type: "callout",
            style: "warning",
            heading: L("A Wet Floor Hurts More Than It Looks Like"),
            text: L(
              "Improper housing predisposes an animal to hoof conditions — meaning a poorly built or poorly draining floor makes foot problems more likely over time. Checking that the floor slopes properly towards a working drain is a simple, everyday way to protect an animal's feet."
            ),
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("What slope should the shed's concrete floor have towards the drain?"),
            options: [L("1.0%"), L("1.5%"), L("3%"), L("No slope at all")],
            answer: 1,
            explain: L("The floor should be rough concrete finish with a 1.5% slope towards the drain."),
          },
          {
            type: "truefalse",
            q: L("The drain running alongside the shed should be open, 8 inches wide and 3 inches deep."),
            answer: true,
            explain: L("Correct — the drain should be open, 8 inches wide, 3 inches deep, with a 1.0% cross slope."),
          },
        ],
      },
      {
        id: "t-m16-ventilation",
        title: L("Ventilation and Weather Protection"),
        teach: [
          {
            type: "text",
            heading: L("Letting Fresh Air Move Through"),
            html: L(
              "Even with three open sides, a shed also needs a dedicated opening high up near the roof for air to keep moving through — this is called <b>ventilation</b>. Good ventilation stops the air inside the shed from becoming stale and helps carry heat and dampness away."
            ),
          },
          {
            type: "glossary",
            term: L("Ventilator"),
            meaning: L(
              "An opening built at ceiling level to let fresh air in and stale air out. Every animal in the shed should have a ventilator of size 3 feet x 1 feet at the ceiling level."
            ),
          },
          {
            type: "glossary",
            term: L("Gunny Cloth"),
            meaning: L(
              "A coarse, sack-like cloth woven from jute. It's inexpensive and easy to hang, which is why it's commonly used to temporarily cover open sides of a shed."
            ),
          },
          {
            type: "text",
            heading: L("Adjusting the Same Shed for Winter and Summer"),
            html: L(
              "During winter, the three open sides of the shed (other than the western wall) may be covered with gunny cloth to keep the animals warm. During summer, animals suffer from heat stress and become restless — sprinkling water on the animal at an interval of 15 to 20 minutes reduces this heat stress, because the water evaporating off the body cools it down."
            ),
          },
          {
            type: "example",
            heading: L("What Heat Stress Looks Like"),
            text: L(
              "During summer, animals suffer from heat stress and become restless. Sweating and panting help them cool down to some extent, but reduced feed intake caused by the heat still results in decreased milk production — which is exactly why cooling steps like water sprinkling matter."
            ),
          },
          {
            type: "callout",
            style: "tip",
            heading: L("A Good Shed Protects From Every Season"),
            text: L(
              "The whole point of correct housing is to protect the animal from extreme weather — summer heat, winter cold, scorching direct sunrays, and strong winds — using the same basic shed, adjusted with simple, low-cost steps like gunny cloth covers and water sprinkling."
            ),
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("What size should the ventilator be, for every animal, at the ceiling level of the shed?"),
            options: [L("1 foot x 1 foot"), L("2 feet x 2 feet"), L("3 feet x 1 foot"), L("5 feet x 1 foot")],
            answer: 2,
            explain: L("Every animal should have a ventilator of size 3 feet x 1 feet at the ceiling level."),
          },
          {
            type: "truefalse",
            q: L("Sprinkling water on an animal every 15 to 20 minutes during summer helps reduce heat stress because the water evaporating cools its body."),
            answer: true,
            explain: L("Correct — evaporation of the sprinkled water causes cooling of the body, reducing heat stress during summer."),
          },
        ],
      },
    ],
    finalQuiz: {
      passScore: 70,
      questions: [
        {
          topicId: "t-m16-floor-drain",
          type: "mcq",
          q: L("Why is a rough concrete finish preferred for the shed floor, rather than a smooth, polished one?"),
          options: [
            L("It looks better"),
            L("It gives the animal's hooves better grip, so it's less likely to slip"),
            L("It is cheaper to build than any other finish"),
            L("It removes the need for a drain"),
          ],
          answer: 1,
          explain: L("A rough concrete finish gives hooves better grip and reduces the chance of an animal slipping."),
        },
        {
          topicId: "t-m16-floor-drain",
          type: "truefalse",
          q: L("Improper flooring and poor drainage can make an animal more likely to develop hoof (foot) problems."),
          answer: true,
          explain: L("Correct — improper housing, including poor flooring and drainage, predisposes an animal to hoof conditions."),
        },
        {
          topicId: "t-m16-ventilation",
          type: "mcq",
          q: L("What should be used to cover the three open sides of the shed during winter?"),
          options: [L("Plastic sheeting"), L("Gunny cloth"), L("Extra concrete walls"), L("Nothing — winter needs no covering")],
          answer: 1,
          explain: L("During winter, the remaining three open sides may be covered by gunny cloth to keep the shed warm."),
        },
        {
          topicId: "t-m16-ventilation",
          type: "truefalse",
          q: L("During summer, reduced feed intake caused by heat stress can lead to decreased milk production."),
          answer: true,
          explain: L("Correct — heat stress reduces feed intake, and that in turn results in decreased milk production."),
        },
        {
          topicId: "t-m16-ventilation",
          type: "mcq",
          q: L("What is the overall purpose of building a proper animal shed, according to this lesson?"),
          options: [
            L("To protect the animal from extreme weather — heat, cold, direct sun and wind"),
            L("Only to store feed"),
            L("Only to make milking more convenient"),
            L("To keep animals from grazing"),
          ],
          answer: 0,
          explain: L("The core purpose of proper housing is to protect the animal from extreme weather conditions of summer, winter, direct sunrays and winds."),
        },
      ],
    },
  },
    ],
  },
  {
    id: "m17",
    number: 17,
    title: L("Animal Identification"),
    subtitle: L("Why every animal gets its own ID, and how a simple ear tag makes lifelong records possible."),
    icon: "id",
    available: true,
    lessons: [
// ==================================================================
  // LESSON 1 — Why Every Animal Needs Its Own ID
  // ==================================================================
  {
    id: "m17-l1",
    title: L("Why Every Animal Needs Its Own ID"),
    estMinutes: 8,
    hook: [
      {
        type: "hero",
        heading: L("Every Animal Gets Its Own ID"),
        text: L(
          "Just like a person carries an identity card, every cow and buffalo can carry a unique ID of its own — usually a small tag on the ear. This lesson explains what animal identification is, why the law requires it, and how one small tag makes a lifetime of records possible."
        ),
      },
    ],
    topics: [
      {
        id: "t-m17-what-is-id",
        title: L("What Animal Identification Means, and Why It's Required by Law"),
        teach: [
          {
            type: "text",
            heading: L("What Does 'Identification' Mean for an Animal?"),
            html: L(
              "<b>Animal identification</b> simply means giving each individual animal a unique mark or number, so that it can always be told apart from every other animal — even animals that look almost identical. This is very similar to how every person carries some form of identity document that is theirs alone."
            ),
          },
          {
            type: "glossary",
            term: L("Animal Identification"),
            meaning: L("The process of uniquely identifying an animal using a marking on its body, so it can always be told apart from every other animal."),
          },
          {
            type: "text",
            heading: L("Why the Government Made This Compulsory"),
            html: L(
              "The Government of India has passed a law called the <b>PCICDA Act, 2009</b>, which makes identification of animals compulsory. This law was passed so that India's animal record-keeping is in line with international policies."
            ),
          },
          {
            type: "glossary",
            term: L("PCICDA Act, 2009"),
            meaning: L(
              "Short for the 'Prevention and Control of Infectious and Contagious Diseases in Animals' Act, 2009 — the law passed by the Government of India that makes identifying animals compulsory."
            ),
          },
          {
            type: "stat-grid",
            items: [
              {
                label: L("Ear Tagging"),
                text: L(
                  "The most common method. A small tag carrying a unique 12-digit number is fixed to the animal's ear. It causes no problem if applied properly, and stays on the ear for many years."
                ),
              },
              {
                label: L("Tattooing and Branding"),
                text: L("Marks placed directly on the animal's body to identify it."),
              },
              {
                label: L("RFID, Injectables, Bolus"),
                text: L("Other methods used for identification, alongside ear tagging, tattooing and branding."),
              },
            ],
          },
          {
            type: "callout",
            style: "tip",
            heading: L("An Ear Tag Is Safe When Applied Properly"),
            text: L(
              "An ear tag does not cause the animal any problem as long as it is applied correctly. Once fixed, it is designed to stay on the animal's ear for many years, giving that animal the same ID number for life."
            ),
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("What does 'animal identification' mean?"),
            options: [
              L("Giving an animal medicine"),
              L("Uniquely marking an animal so it can always be told apart from every other animal"),
              L("Measuring how much milk an animal gives"),
              L("Checking an animal's body condition score"),
            ],
            answer: 1,
            explain: L("Animal identification means giving each animal a unique mark or number — such as an ear tag — so it can always be told apart from every other animal."),
          },
          {
            type: "truefalse",
            q: L("The PCICDA Act, 2009 makes it optional for farmers to identify their animals."),
            answer: false,
            explain: L("No — the PCICDA Act, 2009 makes animal identification compulsory, not optional."),
          },
        ],
      },
      {
        id: "t-m17-ear-tag-system",
        title: L("The Ear Tag Number and Who Manages It"),
        teach: [
          {
            type: "text",
            heading: L("One Number, Never Repeated"),
            html: L(
              "Each ear tag carries a <b>12-digit number</b>. This number is unique across the entire country — no two animals anywhere in India share the same ear tag number."
            ),
          },
          {
            type: "glossary",
            term: L("NDDB (National Dairy Development Board)"),
            meaning: L(
              "The organisation authorised by the Government of India (through DADF) to centrally manage the unique animal identification system for the whole country."
            ),
          },
          {
            type: "text",
            heading: L("From Tag Number to Animal Record"),
            html: L(
              "Once an animal has its ear tag, its number can be used to keep a permanent record for that animal — details such as its breed, age, whether it is pregnant, its milk yield, its owner, and its village name — almost like a passport, that stays with the animal for life."
            ),
          },
          {
            type: "example",
            heading: L("How an Institution Gets Tag Numbers"),
            text: L(
              "NDDB generates and delivers unique ear tag numbers to ear tag consumers, manufacturers, and other concerned institutions across the country. To receive ear tag numbers, an institution must apply to NDDB, along with a copy of its ear tag purchase order."
            ),
          },
          {
            type: "callout",
            style: "tip",
            heading: L("Your Role in Keeping the ID System Working"),
            text: L(
              "The whole record-keeping system depends on the animal's tag being in place and easy to read. As ground staff, you can help by checking that an animal's tag is still attached and legible, and by reporting right away if a tag is damaged, lost, or hard to read."
            ),
          },
        ],
        check: [
          {
            type: "mcq",
            q: L("Why must every ear tag number be unique across the whole country?"),
            options: [
              L("So the tag looks more colourful"),
              L("So no two animals anywhere share the same number, and each animal's record can always be told apart"),
              L("So the tag costs less to manufacture"),
              L("It doesn't need to be unique, only unique within one village"),
            ],
            answer: 1,
            explain: L("The 12-digit ear tag number must be unique across the entire country so that every animal's identity and record stay separate from every other animal's."),
          },
          {
            type: "truefalse",
            q: L("NDDB is the organisation authorised to centrally manage the unique animal identification system in the country."),
            answer: true,
            explain: L("Correct — DADF, Government of India, has authorised NDDB to centrally manage unique animal identification across the country."),
          },
        ],
      },
    ],
    finalQuiz: {
      passScore: 70,
      questions: [
        {
          topicId: "t-m17-what-is-id",
          type: "mcq",
          q: L("Which law made animal identification compulsory in India?"),
          options: [L("The Milk Quality Act"), L("The PCICDA Act, 2009"), L("The Dairy Cooperative Act"), L("The Feed Safety Act")],
          answer: 1,
          explain: L("The PCICDA Act, 2009 (Prevention and Control of Infectious and Contagious Diseases in Animals) made animal identification compulsory."),
        },
        {
          topicId: "t-m17-what-is-id",
          type: "truefalse",
          q: L("Ear tagging is the most common method of animal identification, and uses a 12-digit number."),
          answer: true,
          explain: L("Correct — ear tagging is the most common method, and each tag carries a unique 12-digit number."),
        },
        {
          topicId: "t-m17-ear-tag-system",
          type: "mcq",
          q: L("What is created by recording an animal's ear tag together with its breed, age, and owner details?"),
          options: [
            L("Nothing useful — it is just stored and never used"),
            L("A permanent record, almost like a passport, that can be traced anywhere in the country"),
            L("A new ear tag number every year"),
            L("A veterinary diagnosis for the animal"),
          ],
          answer: 1,
          explain: L("Recording the ear tag with the animal's details creates a permanent, passport-like record that can be traced or transferred to any location in the country."),
        },
        {
          topicId: "t-m17-ear-tag-system",
          type: "truefalse",
          q: L("NDDB generates and delivers unique ear tag numbers to ear tag consumers and manufacturers."),
          answer: true,
          explain: L("Correct — NDDB generates and delivers unique ear tag numbers to all ear tag consumers, manufacturers and other concerned institutions."),
        },
        {
          topicId: "t-m17-what-is-id",
          type: "mcq",
          q: L("Which of these is a method of animal identification mentioned in this lesson?"),
          options: [L("Ear tagging"), L("Body condition scoring"), L("Milk testing"), L("Vaccination")],
          answer: 0,
          explain: L("Ear tagging — along with tattooing, branding, RFID, injectables and bolus — is a method of animal identification. The other options are not identification methods."),
        },
      ],
    },
  },
    ],
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
