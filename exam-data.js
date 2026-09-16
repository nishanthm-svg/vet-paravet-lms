// ============================================================================
// Pashu Arogya Academy — Final Exam question bank.
//
// Every question here is drawn directly from the verified lesson finalQuiz
// banks in data.js (three questions per module, spanning different lessons
// and topics) rather than freshly authored — this guarantees the exam only
// tests facts that are already taught, worded, and fact-checked elsewhere
// in the course.
// ============================================================================

import { L } from "./i18n.js";

export const FINAL_EXAM_PASS_PERCENT = 70;

export const FINAL_EXAM_QUESTIONS = [
  // ---- Module 1: General Observation of an Animal ----
  {
    moduleId: "m1",
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
    moduleId: "m1",
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
    moduleId: "m1",
    type: "truefalse",
    q: L("A sudden drop in milk should only be reported once the animal also has a fever."),
    answer: false,
    explain: L("No — a sudden drop in milk is often the very FIRST warning sign, sometimes appearing before fever or anything else. Report it on its own, right away."),
  },

  // ---- Module 2: Buying, Inducting & Aging a New Animal ----
  {
    moduleId: "m2",
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
    moduleId: "m2",
    type: "truefalse",
    q: L("A newly purchased animal should be kept separate from the rest of the herd for at least 3 weeks."),
    answer: true,
    explain: L("Correct — at least 3 weeks of quarantine, with no contact with the rest of the herd, is the rule."),
  },
  {
    moduleId: "m2",
    type: "mcq",
    q: L("By roughly what age does an animal typically have a full set of permanent incisors?"),
    options: [L("6 months"), L("1 year"), L("4–5 years (5–6 years in buffaloes)"), L("20 years")],
    answer: 2,
    explain: L("A full set of permanent incisors is typical by 4–5 years of age, or 5–6 years in buffaloes."),
  },

  // ---- Module 3: Care of the Newborn Calf ----
  {
    moduleId: "m3",
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
    moduleId: "m3",
    type: "mcq",
    q: L("How much colostrum should a newborn calf get within the first 2 hours of birth?"),
    options: [L("About 200 ml"), L("About 2 litres"), L("About 10 litres"), L("None — wait until the next day")],
    answer: 1,
    explain: L("2 litres within the first 2 hours, with another 1–2 litres (depending on size) within 12 hours."),
  },
  {
    moduleId: "m3",
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

  // ---- Module 4: Diseases Preventable by Vaccination ----
  {
    moduleId: "m4",
    type: "mcq",
    q: L("What percentage of a herd generally needs to be vaccinated for a disease to be properly controlled across that group?"),
    options: [L("At least 80%"), L("About 10%"), L("Exactly 50%"), L("Only the sick animals")],
    answer: 0,
    explain: L("At least 80% coverage of the group is needed for vaccination to actually control the spread of a disease."),
  },
  {
    moduleId: "m4",
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
    moduleId: "m4",
    type: "mcq",
    q: L("According to the schedule, how often does FMD vaccination need to be repeated after the booster dose?"),
    options: [L("Once in a lifetime"), L("Every 6 months"), L("Every 5 years"), L("Only after a bite")],
    answer: 1,
    explain: L("FMD vaccination starts at 4 months, gets a booster 1 month later, and then continues every 6 months."),
  },

  // ---- Module 5: Other Important Diseases ----
  {
    moduleId: "m5",
    type: "mcq",
    q: L("Which of these is true about Johne's Disease and Bovine TB?"),
    options: [
      L("Both can be cured with rest"),
      L("Both have no cure, so testing and isolating infected animals is the only protection"),
      L("Only Johne's Disease is a bacterial disease"),
      L("Vaccines are available to prevent both"),
    ],
    answer: 1,
    explain: L("Neither disease can be cured. Regular testing, isolating or culling positive animals, and buying only tested-negative animals are the only real protections."),
  },
  {
    moduleId: "m5",
    type: "mcq",
    q: L("Ephemeral fever is also known as:"),
    options: [L("Foot rot"), L("Three-day sickness"), L("Lumpy Skin Disease"), L("Ringworm")],
    answer: 1,
    explain: L("Ephemeral fever is commonly called 'three-day sickness' because it usually lasts about three days."),
  },
  {
    moduleId: "m5",
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

  // ---- Module 6: Tick, Fly & Worm-Borne Diseases and Their Control ----
  {
    moduleId: "m6",
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
    moduleId: "m6",
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
    moduleId: "m6",
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

  // ---- Module 7: Diseases That Occur After Calving ----
  {
    moduleId: "m7",
    type: "mcq",
    q: L("Which of these is an EARLY sign of Milk Fever, before the animal goes down?"),
    options: [
      L("Fine trembling, ear twitching, and head bobbing"),
      L("Complete unconsciousness"),
      L("Lying flat on its side with no eye reflex"),
      L("A very high body temperature"),
    ],
    answer: 0,
    explain: L("The earliest signs are excitability with fine trembling over the flanks and loins, ear twitching, and head bobbing — well before the animal is unable to stand."),
  },
  {
    moduleId: "m7",
    type: "mcq",
    q: L("What Body Condition Score at calving is linked to a LOWER risk of Ketosis and Fatty Liver?"),
    options: [L("About 1.0 (very thin)"), L("About 3.5"), L("About 5.0 (very fat)"), L("Body Condition Score makes no difference")],
    answer: 1,
    explain: L("A Body Condition Score of about 3.5 at calving is linked to lower risk — both being too thin and being too fat raise the risk of these problems."),
  },
  {
    moduleId: "m7",
    type: "mcq",
    q: L("Why should you never try to push a prolapsed uterus back in yourself?"),
    options: [
      L("It is not actually a serious problem"),
      L("It can cause severe bleeding"),
      L("The animal will do it herself within minutes"),
      L("It is against the rules but not dangerous"),
    ],
    answer: 1,
    explain: L("Attempting to push it back in or remove anything yourself can cause severe bleeding — always protect it and call the vet instead."),
  },

  // ---- Module 8: Diseases Due to Faulty Feeding ----
  {
    moduleId: "m8",
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
    moduleId: "m8",
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
    moduleId: "m8",
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

  // ---- Module 9: Mastitis & Diseases of the Teats ----
  {
    moduleId: "m9",
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
    moduleId: "m9",
    type: "mcq",
    q: L("About what share of a farm's total mastitis losses does sub-clinical mastitis (SCM) cause?"),
    options: [L("About 10%"), L("About 30%"), L("About 70%"), L("Almost none")],
    answer: 2,
    explain: L("SCM causes about 70% of all mastitis-related losses, largely because it can go unnoticed for an animal's entire lactation."),
  },
  {
    moduleId: "m9",
    type: "mcq",
    q: L("When should teat dipping or spraying be done?"),
    options: [L("Only once a month"), L("Immediately after milking"), L("Only if the animal looks unwell"), L("Before milking only")],
    answer: 1,
    explain: L("Teat dipping or spraying is done immediately after milking, while the teat opening is still slightly open."),
  },

  // ---- Module 10: Common Poisoning Conditions ----
  {
    moduleId: "m10",
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
    moduleId: "m10",
    type: "mcq",
    q: L("About how soon can signs of cyanide poisoning appear after an animal eats a toxic plant?"),
    options: [L("15–20 minutes to a few hours"), L("One full week"), L("Only after several months"), L("Signs never appear")],
    answer: 0,
    explain: L("Signs occur within 15–20 minutes to a few hours after the animal eats toxic forage — this is a fast-moving emergency."),
  },
  {
    moduleId: "m10",
    type: "mcq",
    q: L("Most pesticides used on crops and to kill ticks on cattle are made from which type of compound?"),
    options: [L("Organophosphorous (OP) compounds"), L("Vitamin compounds"), L("Salt compounds"), L("Sugar compounds")],
    answer: 0,
    explain: L("A majority of pesticides are organophosphorous (OP) compounds, which are active poisons."),
  },

  // ---- Module 11: Common Zoonotic Diseases ----
  {
    moduleId: "m11",
    type: "mcq",
    q: L("About what share of all known infectious diseases are zoonotic?"),
    options: [L("About 5%"), L("About 25%"), L("About 61%"), L("About 100%")],
    answer: 2,
    explain: L("Zoonoses make up about 61% of all known infectious diseases — a much larger share than most people expect."),
  },
  {
    moduleId: "m11",
    type: "mcq",
    q: L("Which of these is a common symptom of Human TB caught from cattle?"),
    options: [L("Cough, weight loss and poor appetite"), L("Bright pink skin"), L("Loss of hearing"), L("Faster hoof growth")],
    answer: 0,
    explain: L("Human TB from cattle often shows no symptoms until advanced, and then commonly causes cough, weight loss, and poor appetite."),
  },
  {
    moduleId: "m11",
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

  // ---- Module 12: Breeding & Related Activities ----
  {
    moduleId: "m12",
    type: "mcq",
    q: L("How often does a healthy adult cow or buffalo generally come into heat?"),
    options: [L("Every 21 days (normally 18–24 days)"), L("Every 5 days"), L("Once a year"), L("Only once in her lifetime")],
    answer: 0,
    explain: L("A healthy adult heifer, cow or buffalo generally comes into heat about every 21 days, ranging from 18 to 24 days."),
  },
  {
    moduleId: "m12",
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
    moduleId: "m12",
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

  // ---- Module 13: Traditional & Ethnoveterinary Remedies ----
  {
    moduleId: "m13",
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
    moduleId: "m13",
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
    moduleId: "m13",
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

  // ---- Module 14: Feeding of Animals ----
  {
    moduleId: "m14",
    type: "mcq",
    q: L("About how much green fodder should a normal adult animal be fed each day?"),
    options: [L("1-2 kg"), L("4-6 kg"), L("15-20 kg"), L("50-60 kg")],
    answer: 2,
    explain: L("15 to 20 kg of green fodder a day is the general recommendation for a normal adult animal, along with 4 to 6 kg of dry fodder."),
  },
  {
    moduleId: "m14",
    type: "mcq",
    q: L("How much compound cattle feed should a growing animal be fed daily?"),
    options: [L("100-200 g"), L("1-2 kg"), L("4-6 kg"), L("15-20 kg")],
    answer: 1,
    explain: L("Growing animals should be fed 1 to 2 kg of compound cattle feed daily."),
  },
  {
    moduleId: "m14",
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

  // ---- Module 15: Fodder Production ----
  {
    moduleId: "m15",
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
    moduleId: "m15",
    type: "mcq",
    q: L("Roughly what moisture level should hay be dried down to before storage?"),
    options: [L("Below about 15 per cent"), L("About 65 to 70 per cent"), L("It should stay fully wet"), L("Moisture level doesn't matter for hay")],
    answer: 0,
    explain: L("Hay is dried until its moisture is below about 15 per cent — that's what makes it store well."),
  },
  {
    moduleId: "m15",
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

  // ---- Module 16: Housing of Animals ----
  {
    moduleId: "m16",
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
    moduleId: "m16",
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
    moduleId: "m16",
    type: "mcq",
    q: L("What should be used to cover the three open sides of the shed during winter?"),
    options: [L("Plastic sheeting"), L("Gunny cloth"), L("Extra concrete walls"), L("Nothing — winter needs no covering")],
    answer: 1,
    explain: L("During winter, the remaining three open sides may be covered by gunny cloth to keep the shed warm."),
  },

  // ---- Module 17: Animal Identification ----
  {
    moduleId: "m17",
    type: "mcq",
    q: L("Which law made animal identification compulsory in India?"),
    options: [L("The Milk Quality Act"), L("The PCICDA Act, 2009"), L("The Dairy Cooperative Act"), L("The Feed Safety Act")],
    answer: 1,
    explain: L("The PCICDA Act, 2009 (Prevention and Control of Infectious and Contagious Diseases in Animals) made animal identification compulsory."),
  },
  {
    moduleId: "m17",
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
    moduleId: "m17",
    type: "truefalse",
    q: L("NDDB is the organisation authorised to centrally manage the unique animal identification system in the country."),
    answer: true,
    explain: L("Correct — DADF, Government of India, has authorised NDDB to centrally manage unique animal identification across the country."),
  },
];
