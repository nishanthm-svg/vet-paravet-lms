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
//   L("English", "Telugu", "Tamil", "Kannada")
// so the whole app can render in the language the learner picked. English
// is always the fallback if a translation is thin.
//
// IMPORTANT — Module 1's veterinary content (vital-sign ranges, BCS
// interpretation, etc.) is shipped in English only: the te/ta/kn slots
// below intentionally repeat the English text. This is medical/treatment
// content — a sloppy translation of a number could lead to a real animal
// being mistreated, so get it reviewed by a qualified vet/para-vet fluent
// in the target language before publishing a real translation. See
// README.md.
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
    available: false,
    lessons: [],
  },
  {
    id: "m3",
    number: 3,
    title: L("Care of the Newborn Calf"),
    subtitle: L("The critical first day of a calf's life, feeding it right, and handling calf diarrhoea."),
    icon: "calf",
    available: false,
    lessons: [],
  },
  {
    id: "m4",
    number: 4,
    title: L("Diseases Preventable by Vaccination"),
    subtitle: L("The common diseases that a simple injection can prevent, and when each vaccine is due."),
    icon: "syringe",
    available: false,
    lessons: [],
  },
  {
    id: "m5",
    number: 5,
    title: L("Other Important Diseases"),
    subtitle: L("Other serious diseases to recognise early, even though there's no vaccine to prevent them."),
    icon: "microscope",
    available: false,
    lessons: [],
  },
  {
    id: "m6",
    number: 6,
    title: L("Tick, Fly & Worm-Borne Diseases and Their Control"),
    subtitle: L("How ticks, flies and worms spread disease, and simple ways to keep them under control."),
    icon: "bug",
    available: false,
    lessons: [],
  },
  {
    id: "m7",
    number: 7,
    title: L("Diseases That Occur After Calving"),
    subtitle: L("Problems that can appear in the days right after an animal gives birth."),
    icon: "heart",
    available: false,
    lessons: [],
  },
  {
    id: "m8",
    number: 8,
    title: L("Diseases Due to Faulty Feeding"),
    subtitle: L("Health problems caused by wrong or unbalanced feeding, and how to avoid them."),
    icon: "wheat",
    available: false,
    lessons: [],
  },
  {
    id: "m9",
    number: 9,
    title: L("Mastitis & Diseases of the Teats"),
    subtitle: L("Recognising problems with the udder and teats early."),
    icon: "droplet",
    available: false,
    lessons: [],
  },
  {
    id: "m10",
    number: 10,
    title: L("Common Poisoning Conditions"),
    subtitle: L("Recognising the most common poisoning cases seen in the field, and what to do immediately."),
    icon: "warning",
    available: false,
    lessons: [],
  },
  {
    id: "m11",
    number: 11,
    title: L("Common Zoonotic Diseases"),
    subtitle: L("Diseases that can pass between animals and people, and how to stay safe while handling animals."),
    icon: "shield",
    available: false,
    lessons: [],
  },
  {
    id: "m12",
    number: 12,
    title: L("Breeding & Related Activities"),
    subtitle: L("The basics of how breeding works and what to look out for."),
    icon: "calendar",
    available: false,
    lessons: [],
  },
  {
    id: "m13",
    number: 13,
    title: L("Traditional & Ethnoveterinary Remedies"),
    subtitle: L("NDDB-documented home remedies for common problems — to be used alongside, never instead of, proper veterinary advice."),
    icon: "leaf",
    available: false,
    lessons: [],
  },
  {
    id: "m14",
    number: 14,
    title: L("Feeding of Animals"),
    subtitle: L("The basics of what a healthy diet for a dairy animal looks like."),
    icon: "feed",
    available: false,
    lessons: [],
  },
  {
    id: "m15",
    number: 15,
    title: L("Fodder Production"),
    subtitle: L("Growing enough good-quality green and dry feed all year round."),
    icon: "sprout",
    available: false,
    lessons: [],
  },
  {
    id: "m16",
    number: 16,
    title: L("Housing of Animals"),
    subtitle: L("What a comfortable, healthy shed for animals actually needs."),
    icon: "home",
    available: false,
    lessons: [],
  },
  {
    id: "m17",
    number: 17,
    title: L("Animal Identification & the INAPH Information Network"),
    subtitle: L("Why every animal gets its own ID, and how good records help everyone."),
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
