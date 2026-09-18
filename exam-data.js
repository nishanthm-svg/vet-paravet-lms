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
    q: L("What is the surprising, classic sign pattern of fever?", "జ్వరం యొక్క ఆశ్చర్యకరమైన, సాధారణ లక్షణం ఏమిటి?", "காய்ச்சலின் ஆச்சரியமான, வழக்கமான அறிகுறி முறை என்ன?", "ಜ್ವರದ ಆಶ್ಚರ್ಯಕರ, ವಿಶಿಷ್ಟ ಲಕ್ಷಣ ಯಾವುದು?", "बुखार का आश्चर्यजनक, सामान्य लक्षण क्या है?"),
    options: [
      L("Hot ears together with a hot body", "వేడి శరీరంతో పాటు వేడి చెవులు", "சூடான உடலுடன் சூடான காதுகள்", "ಬಿಸಿ ದೇಹದ ಜೊತೆಗೆ ಬಿಸಿ ಕಿವಿಗಳು", "गर्म शरीर के साथ गर्म कान"),
      L("Cold ears, horns and legs together with a hot body", "వేడి శరీరంతో పాటు చల్లని చెవులు, కొమ్ములు మరియు కాళ్లు", "சூடான உடலுடன் குளிர்ந்த காதுகள், கொம்புகள் மற்றும் கால்கள்", "ಬಿಸಿ ದೇಹದ ಜೊತೆಗೆ ತಣ್ಣನೆಯ ಕಿವಿಗಳು, ಕೊಂಬುಗಳು ಮತ್ತು ಕಾಲುಗಳು", "गर्म शरीर के साथ ठंडे कान, सींग और पैर"),
      L("A cold body with cold ears", "చల్లని చెవులతో చల్లని శరీరం", "குளிர்ந்த காதுகளுடன் குளிர்ந்த உடல்", "ತಣ್ಣನೆಯ ಕಿವಿಗಳೊಂದಿಗೆ ತಣ್ಣನೆಯ ದೇಹ", "ठंडे कानों के साथ ठंडा शरीर"),
      L("No change anywhere on the body", "శరీరంలో ఎక్కడా మార్పు లేకపోవడం", "உடலில் எந்த மாற்றமும் இல்லை", "ದೇಹದಲ್ಲಿ ಎಲ್ಲಿಯೂ ಬದಲಾವಣೆ ಇಲ್ಲ", "शरीर में कहीं भी कोई बदलाव नहीं"),
    ],
    answer: 1,
    explain: L("Fever classically shows up as a hot body with cold ears, horns and legs — the opposite of what most people expect the first time.", "జ్వరం సాధారణంగా వేడి శరీరంతో పాటు చల్లని చెవులు, కొమ్ములు మరియు కాళ్లుగా కనిపిస్తుంది — చాలామంది మొదటిసారి అనుకున్నదానికి పూర్తిగా వ్యతిరేకంగా.", "காய்ச்சல் பொதுவாக சூடான உடலுடன் குளிர்ந்த காதுகள், கொம்புகள் மற்றும் கால்களுடன் தோன்றும் — பெரும்பாலான மக்கள் முதல் முறையாக எதிர்பார்ப்பதற்கு நேர்மாறாக.", "ಜ್ವರವು ಸಾಮಾನ್ಯವಾಗಿ ಬಿಸಿ ದೇಹದ ಜೊತೆಗೆ ತಣ್ಣನೆಯ ಕಿವಿಗಳು, ಕೊಂಬುಗಳು ಮತ್ತು ಕಾಲುಗಳಾಗಿ ಕಾಣಿಸಿಕೊಳ್ಳುತ್ತದೆ — ಹೆಚ್ಚಿನ ಜನರು ಮೊದಲ ಬಾರಿಗೆ ನಿರೀಕ್ಷಿಸುವುದಕ್ಕೆ ವಿರುದ್ಧವಾಗಿ.", "बुखार में आमतौर पर शरीर गर्म रहता है जबकि कान, सींग और पैर ठंडे हो जाते हैं — जो ज्यादातर लोग पहली बार सोचते हैं उससे बिल्कुल उलटा।"),
  },
  {
    moduleId: "m1",
    type: "mcq",
    q: L("A 'Score 1' animal (very thin) is best described as:", "'స్కోర్ 1' (చాలా సన్నగా ఉన్న) జంతువును ఇలా వర్ణించవచ్చు:", "'ஸ்கோர் 1' (மிகவும் மெலிந்த) விலங்கை இவ்வாறு விவரிக்கலாம்:", "'ಸ್ಕೋರ್ 1' (ತುಂಬಾ ತೆಳ್ಳಗಿನ) ಪ್ರಾಣಿಯನ್ನು ಹೀಗೆ ವಿವರಿಸಬಹುದು:", "'स्कोर 1' (बहुत दुबला) पशु का सबसे सही वर्णन यह है:"),
    options: [
      L("Smoothly covered with ribs barely visible", "మృదువుగా కప్పబడి, పక్కటెముకలు కనిపించనంతగా ఉండటం", "மென்மையாக மூடப்பட்டு, விலா எலும்புகள் அரிதாகவே தெரிதல்", "ನಯವಾಗಿ ಆವರಿಸಿದ್ದು, ಪಕ್ಕೆಲುಬುಗಳು ಬಹುತೇಕ ಕಾಣಿಸದಿರುವುದು", "चिकनी परत से ढका होना जिसमें पसलियाँ मुश्किल से दिखें"),
      L("Very thin, with the backbone, hip bones and ribs all easy to see, and a dull coat", "చాలా సన్నగా ఉండి, వెన్నెముక, తుంటి ఎముకలు, పక్కటెముకలు అన్నీ సులభంగా కనిపిస్తూ, నిర్జీవమైన చర్మం కలిగి ఉండటం", "மிகவும் மெலிந்து, முதுகெலும்பு, இடுப்பு எலும்புகள் மற்றும் விலா எலும்புகள் அனைத்தும் எளிதில் தெரிந்து, மங்கலான தோலுடன் இருத்தல்", "ತುಂಬಾ ತೆಳ್ಳಗಿದ್ದು, ಬೆನ್ನುಮೂಳೆ, ಸೊಂಟದ ಮೂಳೆಗಳು ಮತ್ತು ಪಕ್ಕೆಲುಬುಗಳು ಎಲ್ಲವೂ ಸುಲಭವಾಗಿ ಕಾಣಿಸುತ್ತಿದ್ದು, ನಿರ್ಜೀವ ಚರ್ಮ ಹೊಂದಿರುವುದು", "बहुत दुबला होना, जिसमें रीढ़, कूल्हे की हड्डियाँ और पसलियाँ सभी साफ दिखें, और त्वचा बेजान हो"),
      L("Very fat, with folds of fat and reduced movement", "చాలా లావుగా ఉండి, కొవ్వు మడతలతో, కదలిక తగ్గి ఉండటం", "மிகவும் கொழுத்து, கொழுப்பு மடிப்புகளுடன், அசைவு குறைந்திருத்தல்", "ತುಂಬಾ ದಪ್ಪವಾಗಿದ್ದು, ಕೊಬ್ಬಿನ ಮಡಿಕೆಗಳೊಂದಿಗೆ, ಚಲನೆ ಕಡಿಮೆಯಾಗಿರುವುದು", "बहुत मोटा होना, जिसमें चर्बी की सिलवटें हों और हरकत कम हो"),
      L("The ideal condition for giving birth", "ఈనడానికి అనువైన ఆదర్శ స్థితి", "ஈனுவதற்கு உகந்த சிறந்த நிலை", "ಈಯುವುದಕ್ಕೆ ಸೂಕ್ತವಾದ ಆದರ್ಶ ಸ್ಥಿತಿ", "ब्याने के लिए आदर्श स्थिति"),
    ],
    answer: 1,
    explain: L("Score 1 is very thin — backbone, hip bones and ribs all easy to see, with a dull coat and almost no soft covering.", "స్కోర్ 1 అంటే చాలా సన్నగా ఉండటం — వెన్నెముక, తుంటి ఎముకలు, పక్కటెముకలు అన్నీ సులభంగా కనిపిస్తూ, నిర్జీవమైన చర్మం మరియు దాదాపు మృదువైన కప్పు లేకుండా ఉండటం.", "ஸ்கோர் 1 என்பது மிகவும் மெலிந்திருத்தல் — முதுகெலும்பு, இடுப்பு எலும்புகள், விலா எலும்புகள் அனைத்தும் எளிதில் தெரிந்து, மங்கலான தோலுடன், மென்மையான மூடல் இல்லாமல் இருத்தல்.", "ಸ್ಕೋರ್ 1 ಎಂದರೆ ತುಂಬಾ ತೆಳ್ಳಗಿರುವುದು — ಬೆನ್ನುಮೂಳೆ, ಸೊಂಟದ ಮೂಳೆಗಳು, ಪಕ್ಕೆಲುಬುಗಳು ಎಲ್ಲವೂ ಸುಲಭವಾಗಿ ಕಾಣಿಸುತ್ತಿದ್ದು, ನಿರ್ಜೀವ ಚರ್ಮ ಮತ್ತು ಬಹುತೇಕ ಯಾವುದೇ ಮೃದು ಹೊದಿಕೆ ಇಲ್ಲದಿರುವುದು.", "स्कोर 1 का मतलब है बहुत दुबला होना — रीढ़, कूल्हे की हड्डियाँ और पसलियाँ सभी साफ दिखती हैं, त्वचा बेजान होती है और नरम परत लगभग नहीं होती।"),
  },
  {
    moduleId: "m1",
    type: "truefalse",
    q: L("A sudden drop in milk should only be reported once the animal also has a fever.", "పాల ఉత్పత్తిలో ఆకస్మిక తగ్గుదలను జంతువుకు జ్వరం కూడా వచ్చినప్పుడు మాత్రమే నివేదించాలి.", "பாலில் திடீர் குறைவை விலங்குக்கு காய்ச்சலும் வந்தால் மட்டுமே தெரிவிக்க வேண்டும்.", "ಹಾಲಿನಲ್ಲಿ ಹಠಾತ್ ಇಳಿಕೆಯನ್ನು ಪ್ರಾಣಿಗೆ ಜ್ವರವೂ ಬಂದಾಗ ಮಾತ್ರ ವರದಿ ಮಾಡಬೇಕು.", "दूध में अचानक गिरावट की सूचना तभी देनी चाहिए जब पशु को बुखार भी हो।"),
    answer: false,
    explain: L("No — a sudden drop in milk is often the very FIRST warning sign, sometimes appearing before fever or anything else. Report it on its own, right away.", "లేదు — పాలలో ఆకస్మిక తగ్గుదల తరచుగా మొదటి హెచ్చరిక సంకేతం, కొన్నిసార్లు జ్వరం లేదా మరేదైనా కంటే ముందే కనిపిస్తుంది. దానిని వెంటనే, స్వతంత్రంగా నివేదించాలి.", "இல்லை — பாலில் திடீர் குறைவு பெரும்பாலும் முதல் எச்சரிக்கை அறிகுறியாக இருக்கும், சில நேரங்களில் காய்ச்சல் அல்லது வேறு எதற்கும் முன்பே தோன்றும். இதை உடனடியாக, தனியாகவே தெரிவிக்க வேண்டும்.", "ಇಲ್ಲ — ಹಾಲಿನಲ್ಲಿ ಹಠಾತ್ ಇಳಿಕೆ ಸಾಮಾನ್ಯವಾಗಿ ಮೊದಲ ಎಚ್ಚರಿಕೆಯ ಸೂಚನೆಯಾಗಿದೆ, ಕೆಲವೊಮ್ಮೆ ಜ್ವರ ಅಥವಾ ಬೇರೆ ಯಾವುದಕ್ಕಿಂತ ಮೊದಲೇ ಕಾಣಿಸಿಕೊಳ್ಳುತ್ತದೆ. ಅದನ್ನು ತಕ್ಷಣ, ಪ್ರತ್ಯೇಕವಾಗಿ ವರದಿ ಮಾಡಿ.", "नहीं — दूध में अचानक गिरावट अक्सर सबसे पहला चेतावनी संकेत होता है, जो कभी-कभी बुखार या किसी और लक्षण से पहले ही दिख जाता है। इसे तुरंत, अकेले भी रिपोर्ट करें।"),
  },

  // ---- Module 2: Buying, Inducting & Aging a New Animal ----
  {
    moduleId: "m2",
    type: "mcq",
    q: L("Why is it generally safer to buy an animal directly from a known farm rather than from a cattle market or shandy?", "పశువుల సంత లేదా షాండీ నుండి కొనుగోలు చేయడం కంటే తెలిసిన పొలం నుండి నేరుగా జంతువును కొనుగోలు చేయడం సాధారణంగా ఎందుకు సురక్షితం?", "கால்நடை சந்தை அல்லது ஷாண்டியில் இருந்து வாங்குவதை விட, தெரிந்த பண்ணையிலிருந்து நேரடியாக ஒரு விலங்கை வாங்குவது பொதுவாக ஏன் பாதுகாப்பானது?", "ಜಾನುವಾರು ಮಾರುಕಟ್ಟೆ ಅಥವಾ ಶಾಂಡಿಯಿಂದ ಖರೀದಿಸುವುದಕ್ಕಿಂತ ತಿಳಿದಿರುವ ಫಾರಂನಿಂದ ನೇರವಾಗಿ ಪ್ರಾಣಿಯನ್ನು ಖರೀದಿಸುವುದು ಸಾಮಾನ್ಯವಾಗಿ ಏಕೆ ಸುರಕ್ಷಿತ?", "पशु मंडी या शांडी से खरीदने की तुलना में किसी जाने-पहचाने फार्म से सीधे पशु खरीदना आम तौर पर ज्यादा सुरक्षित क्यों होता है?"),
    options: [
      L("Animals are always cheaper at a cattle market", "పశువుల సంతలో జంతువులు ఎప్పుడూ చౌకగా ఉంటాయి", "கால்நடை சந்தையில் விலங்குகள் எப்போதும் மலிவானவை", "ಜಾನುವಾರು ಮಾರುಕಟ್ಟೆಯಲ್ಲಿ ಪ್ರಾಣಿಗಳು ಯಾವಾಗಲೂ ಅಗ್ಗವಾಗಿರುತ್ತವೆ", "पशु मंडी में जानवर हमेशा सस्ते मिलते हैं"),
      L("More unrelated animals mix together at a market/shandy, raising the chance of disease exposure", "సంత/షాండీలో సంబంధం లేని ఎక్కువ జంతువులు కలిసిపోతాయి, దీనివల్ల వ్యాధి బారిన పడే అవకాశం పెరుగుతుంది", "சந்தை/ஷாண்டியில் தொடர்பில்லாத அதிக விலங்குகள் கலப்பதால், நோய் தொற்றுக்கான வாய்ப்பு அதிகரிக்கிறது", "ಮಾರುಕಟ್ಟೆ/ಶಾಂಡಿಯಲ್ಲಿ ಸಂಬಂಧವಿಲ್ಲದ ಹೆಚ್ಚು ಪ್ರಾಣಿಗಳು ಬೆರೆಯುವುದರಿಂದ, ರೋಗ ಹರಡುವ ಸಾಧ್ಯತೆ ಹೆಚ್ಚಾಗುತ್ತದೆ", "मंडी/शांडी में असंबंधित जानवर ज्यादा मिलते हैं, जिससे बीमारी लगने का खतरा बढ़ जाता है"),
      L("Cattle markets always test every animal for TB, JD and brucellosis", "పశువుల సంతలు ప్రతి జంతువుకు TB, JD మరియు బ్రూసెల్లోసిస్ కోసం ఎల్లప్పుడూ పరీక్షిస్తాయి", "கால்நடை சந்தைகள் ஒவ்வொரு விலங்கையும் எப்போதும் TB, JD மற்றும் ப்ரூசெல்லோசிஸுக்கு பரிசோதிக்கின்றன", "ಜಾನುವಾರು ಮಾರುಕಟ್ಟೆಗಳು ಪ್ರತಿ ಪ್ರಾಣಿಯನ್ನು TB, JD ಮತ್ತು ಬ್ರೂಸೆಲ್ಲೋಸಿಸ್‌ಗಾಗಿ ಯಾವಾಗಲೂ ಪರೀಕ್ಷಿಸುತ್ತವೆ", "पशु मंडियाँ हर जानवर का TB, JD और ब्रुसेलोसिस के लिए हमेशा परीक्षण करती हैं"),
      L("There is no real difference between the two", "ఈ రెండింటి మధ్య నిజమైన తేడా ఏమీ లేదు", "இரண்டிற்கும் இடையே உண்மையான வேறுபாடு இல்லை", "ಎರಡರ ನಡುವೆ ನಿಜವಾದ ವ್ಯತ್ಯಾಸ ಇಲ್ಲ", "दोनों में कोई असली फर्क नहीं है"),
    ],
    answer: 1,
    explain: L("More unrelated animals mixing together at a market or shandy raises the chance of disease exposure compared with a known, tested farm.", "తెలిసిన, పరీక్షించిన పొలంతో పోలిస్తే సంత లేదా షాండీలో సంబంధం లేని ఎక్కువ జంతువులు కలవడం వల్ల వ్యాధి బారిన పడే అవకాశం పెరుగుతుంది.", "தெரிந்த, பரிசோதிக்கப்பட்ட பண்ணையுடன் ஒப்பிடும்போது, சந்தை அல்லது ஷாண்டியில் தொடர்பில்லாத அதிக விலங்குகள் கலப்பது நோய் தொற்றுக்கான வாய்ப்பை அதிகரிக்கிறது.", "ತಿಳಿದಿರುವ, ಪರೀಕ್ಷಿಸಿದ ಫಾರಂಗೆ ಹೋಲಿಸಿದರೆ ಮಾರುಕಟ್ಟೆ ಅಥವಾ ಶಾಂಡಿಯಲ್ಲಿ ಸಂಬಂಧವಿಲ್ಲದ ಹೆಚ್ಚು ಪ್ರಾಣಿಗಳು ಬೆರೆಯುವುದರಿಂದ ರೋಗ ಹರಡುವ ಸಾಧ್ಯತೆ ಹೆಚ್ಚಾಗುತ್ತದೆ.", "किसी जाने-पहचाने, जाँचे हुए फार्म की तुलना में मंडी या शांडी में असंबंधित जानवरों के ज्यादा मिलने से बीमारी लगने का खतरा बढ़ जाता है।"),
  },
  {
    moduleId: "m2",
    type: "truefalse",
    q: L("A newly purchased animal should be kept separate from the rest of the herd for at least 3 weeks.", "కొత్తగా కొనుగోలు చేసిన జంతువును కనీసం 3 వారాల పాటు మిగిలిన మంద నుండి వేరుగా ఉంచాలి.", "புதிதாக வாங்கப்பட்ட ஒரு விலங்கை குறைந்தது 3 வாரங்களுக்கு மற்ற மந்தையிலிருந்து தனியாக வைக்க வேண்டும்.", "ಹೊಸದಾಗಿ ಖರೀದಿಸಿದ ಪ್ರಾಣಿಯನ್ನು ಕನಿಷ್ಠ 3 ವಾರಗಳ ಕಾಲ ಉಳಿದ ಹಿಂಡಿನಿಂದ ಪ್ರತ್ಯೇಕವಾಗಿ ಇಡಬೇಕು.", "नए खरीदे गए पशु को कम से कम 3 हफ्तों तक बाकी झुंड से अलग रखना चाहिए।"),
    answer: true,
    explain: L("Correct — at least 3 weeks of quarantine, with no contact with the rest of the herd, is the rule.", "సరైనది — మిగిలిన మందతో ఎలాంటి సంబంధం లేకుండా కనీసం 3 వారాల క్వారంటైన్ ఒక నియమం.", "சரி — மற்ற மந்தையுடன் எந்த தொடர்பும் இல்லாமல் குறைந்தது 3 வாரங்கள் தனிமைப்படுத்துவது விதி.", "ಸರಿ — ಉಳಿದ ಹಿಂಡಿನೊಂದಿಗೆ ಯಾವುದೇ ಸಂಪರ್ಕವಿಲ್ಲದೆ ಕನಿಷ್ಠ 3 ವಾರಗಳ ಕ್ವಾರಂಟೈನ್ ಒಂದು ನಿಯಮ.", "सही — बाकी झुंड से किसी भी संपर्क के बिना कम से कम 3 हफ्तों का क्वारंटाइन नियम है।"),
  },
  {
    moduleId: "m2",
    type: "mcq",
    q: L("By roughly what age does an animal typically have a full set of permanent incisors?", "ఒక జంతువుకు సాధారణంగా పూర్తి శాశ్వత దంతాలు (ఇన్‌సైజర్లు) ఎంత వయస్సులో వస్తాయి?", "ஒரு விலங்குக்கு பொதுவாக எந்த வயதில் முழு நிரந்தர கடித பற்கள் (இன்சைசர்கள்) வளரும்?", "ಒಂದು ಪ್ರಾಣಿಗೆ ಸಾಮಾನ್ಯವಾಗಿ ಯಾವ ವಯಸ್ಸಿನಲ್ಲಿ ಪೂರ್ಣ ಶಾಶ್ವತ ಮುಂಭಾಗದ ಹಲ್ಲುಗಳು (ಇನ್ಸಿಸರ್‌ಗಳು) ಬರುತ್ತವೆ?", "एक पशु में आमतौर पर किस उम्र तक स्थायी सामने के दांतों (इनसाइजर) का पूरा सेट आ जाता है?"),
    options: [L("6 months", "6 నెలలు", "6 மாதங்கள்", "6 ತಿಂಗಳು", "6 महीने"), L("1 year", "1 సంవత్సరం", "1 வருடம்", "1 ವರ್ಷ", "1 साल"), L("4–5 years (5–6 years in buffaloes)", "4–5 సంవత్సరాలు (గేదెలలో 5–6 సంవత్సరాలు)", "4–5 வருடங்கள் (எருமைகளில் 5–6 வருடங்கள்)", "4–5 ವರ್ಷಗಳು (ಎಮ್ಮೆಗಳಲ್ಲಿ 5–6 ವರ್ಷಗಳು)", "4–5 साल (भैंसों में 5–6 साल)"), L("20 years", "20 సంవత్సరాలు", "20 வருடங்கள்", "20 ವರ್ಷಗಳು", "20 साल")],
    answer: 2,
    explain: L("A full set of permanent incisors is typical by 4–5 years of age, or 5–6 years in buffaloes.", "పూర్తి శాశ్వత దంతాలు సాధారణంగా 4–5 సంవత్సరాల వయస్సులో, గేదెలలో 5–6 సంవత్సరాల వయస్సులో వస్తాయి.", "முழு நிரந்தர கடித பற்கள் பொதுவாக 4–5 வருட வயதில், எருமைகளில் 5–6 வருட வயதில் வளரும்.", "ಪೂರ್ಣ ಶಾಶ್ವತ ಮುಂಭಾಗದ ಹಲ್ಲುಗಳು ಸಾಮಾನ್ಯವಾಗಿ 4–5 ವರ್ಷ ವಯಸ್ಸಿನಲ್ಲಿ, ಎಮ್ಮೆಗಳಲ್ಲಿ 5–6 ವರ್ಷ ವಯಸ್ಸಿನಲ್ಲಿ ಬರುತ್ತವೆ.", "स्थायी सामने के दांतों का पूरा सेट आमतौर पर 4–5 साल की उम्र तक, भैंसों में 5–6 साल की उम्र तक आ जाता है।"),
  },

  // ---- Module 3: Care of the Newborn Calf ----
  {
    moduleId: "m3",
    type: "mcq",
    q: L("What is the 'golden hour' referred to in newborn calf care?", "నవజాత దూడల సంరక్షణలో ప్రస్తావించే 'గోల్డెన్ అవర్' (బంగారు గంట) అంటే ఏమిటి?", "புதிதாகப் பிறந்த கன்று பராமரிப்பில் குறிப்பிடப்படும் 'கோல்டன் அவர்' (பொன் நேரம்) என்றால் என்ன?", "ನವಜಾತ ಕರುಗಳ ಆರೈಕೆಯಲ್ಲಿ ಉಲ್ಲೇಖಿಸಲಾದ 'ಗೋಲ್ಡನ್ ಅವರ್' (ಚಿನ್ನದ ಗಂಟೆ) ಎಂದರೇನು?", "नवजात बछड़े की देखभाल में जिस 'गोल्डन ऑवर' (सुनहरे घंटे) का जिक्र किया जाता है, वह क्या है?"),
    options: [
      L("Any hour during the first week", "మొదటి వారంలో ఏదైనా గంట", "முதல் வாரத்தில் ஏதேனும் ஒரு மணி நேரம்", "ಮೊದಲ ವಾರದಲ್ಲಿ ಯಾವುದೇ ಗಂಟೆ", "पहले हफ्ते के दौरान कोई भी घंटा"),
      L("The first hour after calving — the most critical period in a calf's life", "ఈనిన తర్వాత మొదటి గంట — దూడ జీవితంలో అత్యంత కీలకమైన సమయం", "ஈன்ற பிறகு முதல் மணி நேரம் — கன்றின் வாழ்க்கையில் மிக முக்கியமான காலம்", "ಕರು ಹಾಕಿದ ನಂತರದ ಮೊದಲ ಗಂಟೆ — ಕರುವಿನ ಜೀವನದಲ್ಲಿ ಅತ್ಯಂತ ನಿರ್ಣಾಯಕ ಅವಧಿ", "ब्याने के बाद का पहला घंटा — बछड़े के जीवन का सबसे नाजुक समय"),
      L("The hour before calving", "ఈనడానికి ముందు గంట", "ஈனுவதற்கு முந்தைய மணி நேரம்", "ಕರು ಹಾಕುವ ಮೊದಲಿನ ಗಂಟೆ", "ब्याने से पहले का घंटा"),
      L("The hour when the calf is vaccinated", "దూడకు టీకా వేసే గంట", "கன்றுக்கு தடுப்பூசி போடும் மணி நேரம்", "ಕರುವಿಗೆ ಲಸಿಕೆ ಹಾಕುವ ಗಂಟೆ", "जिस घंटे बछड़े को टीका लगाया जाता है"),
    ],
    answer: 1,
    explain: L("The first hour after calving is described as the single most critical period in the calf's entire life.", "ఈనిన తర్వాత మొదటి గంటను దూడ మొత్తం జీవితంలో అత్యంత కీలకమైన సమయంగా చెబుతారు.", "ஈன்ற பிறகு முதல் மணி நேரம் கன்றின் முழு வாழ்க்கையிலேயே மிக முக்கியமான காலமாக விவரிக்கப்படுகிறது.", "ಕರು ಹಾಕಿದ ನಂತರದ ಮೊದಲ ಗಂಟೆಯನ್ನು ಕರುವಿನ ಸಂಪೂರ್ಣ ಜೀವನದಲ್ಲಿ ಅತ್ಯಂತ ನಿರ್ಣಾಯಕ ಅವಧಿ ಎಂದು ವಿವರಿಸಲಾಗಿದೆ.", "ब्याने के बाद के पहले घंटे को बछड़े के पूरे जीवन का सबसे नाजुक समय बताया गया है।"),
  },
  {
    moduleId: "m3",
    type: "mcq",
    q: L("How much colostrum should a newborn calf get within the first 2 hours of birth?", "పుట్టిన మొదటి 2 గంటల్లో నవజాత దూడకు ఎంత మీగడ పాలు (కొలొస్ట్రమ్) ఇవ్వాలి?", "பிறந்த முதல் 2 மணி நேரத்திற்குள் புதிதாகப் பிறந்த கன்றுக்கு எவ்வளவு கொலோஸ்ட்ரம் (சீம்பால்) கொடுக்க வேண்டும்?", "ಹುಟ್ಟಿದ ಮೊದಲ 2 ಗಂಟೆಗಳ ಒಳಗೆ ನವಜಾತ ಕರುವಿಗೆ ಎಷ್ಟು ಗಿಣ್ಣು ಹಾಲು (ಕೊಲೊಸ್ಟ್ರಮ್) ಕೊಡಬೇಕು?", "जन्म के पहले 2 घंटों के भीतर नवजात बछड़े को कितना खीस (कोलोस्ट्रम) मिलना चाहिए?"),
    options: [L("About 200 ml", "సుమారు 200 మి.లీ", "சுமார் 200 மி.லி", "ಸುಮಾರು 200 ಮಿ.ಲೀ", "लगभग 200 मि.ली."), L("About 2 litres", "సుమారు 2 లీటర్లు", "சுமார் 2 லிட்டர்", "ಸುಮಾರು 2 ಲೀಟರ್", "लगभग 2 लीटर"), L("About 10 litres", "సుమారు 10 లీటర్లు", "சுமார் 10 லிட்டர்", "ಸುಮಾರು 10 ಲೀಟರ್", "लगभग 10 लीटर"), L("None — wait until the next day", "ఏమీ ఇవ్వకూడదు — మరుసటి రోజు వరకు వేచి ఉండాలి", "எதுவும் இல்லை — அடுத்த நாள் வரை காத்திருக்க வேண்டும்", "ಏನೂ ಬೇಡ — ಮರುದಿನದವರೆಗೆ ಕಾಯಬೇಕು", "कुछ नहीं — अगले दिन तक इंतजार करें")],
    answer: 1,
    explain: L("2 litres within the first 2 hours, with another 1–2 litres (depending on size) within 12 hours.", "మొదటి 2 గంటల్లో 2 లీటర్లు, మరో 1–2 లీటర్లు (పరిమాణాన్ని బట్టి) 12 గంటల్లో ఇవ్వాలి.", "முதல் 2 மணி நேரத்திற்குள் 2 லிட்டர், மேலும் 1–2 லிட்டர் (அளவைப் பொறுத்து) 12 மணி நேரத்திற்குள் கொடுக்க வேண்டும்.", "ಮೊದಲ 2 ಗಂಟೆಗಳ ಒಳಗೆ 2 ಲೀಟರ್, ಇನ್ನೂ 1–2 ಲೀಟರ್ (ಗಾತ್ರಕ್ಕೆ ಅನುಗುಣವಾಗಿ) 12 ಗಂಟೆಗಳ ಒಳಗೆ ಕೊಡಬೇಕು.", "पहले 2 घंटों में 2 लीटर, और आकार के अनुसार 12 घंटों के भीतर 1–2 लीटर और।"),
  },
  {
    moduleId: "m3",
    type: "mcq",
    q: L("What are the two things ground staff should do as soon as they notice a calf with diarrhoea?", "అతిసారంతో ఉన్న దూడను గమనించిన వెంటనే క్షేత్రస్థాయి సిబ్బంది చేయవలసిన రెండు పనులు ఏమిటి?", "வயிற்றுப்போக்குடன் இருக்கும் கன்றை கவனித்த உடனேயே கள மையப் பணியாளர்கள் செய்ய வேண்டிய இரண்டு காரியங்கள் என்ன?", "ಭೇದಿ ಇರುವ ಕರುವನ್ನು ಗಮನಿಸಿದ ತಕ್ಷಣ ಕ್ಷೇತ್ರ ಸಿಬ್ಬಂದಿ ಮಾಡಬೇಕಾದ ಎರಡು ಕೆಲಸಗಳು ಯಾವುವು?", "दस्त वाले बछड़े को देखते ही ग्राउंड स्टाफ को कौन से दो काम करने चाहिए?"),
    options: [
      L("Wait a few days to see if it clears up on its own", "అది దానంతట అదే తగ్గుతుందేమో చూడటానికి కొన్ని రోజులు వేచి ఉండటం", "அது தானாகவே சரியாகுமா என்று சில நாட்கள் காத்திருப்பது", "ಅದು ತನ್ನಷ್ಟಕ್ಕೆ ಸರಿಹೋಗುತ್ತದೆಯೇ ಎಂದು ನೋಡಲು ಕೆಲವು ದಿನ ಕಾಯುವುದು", "यह देखने के लिए कुछ दिन इंतजार करें कि यह अपने आप ठीक होता है या नहीं"),
      L("Start replacing fluids and contact the veterinarian at the earliest", "ద్రవాలను భర్తీ చేయడం ప్రారంభించి, వీలైనంత త్వరగా పశువైద్యుడిని సంప్రదించడం", "திரவங்களை மீட்டெடுக்கத் தொடங்கி, விரைவில் கால்நடை மருத்துவரைத் தொடர்பு கொள்வது", "ದ್ರವಗಳನ್ನು ಮರುಪೂರಣ ಮಾಡಲು ಪ್ರಾರಂಭಿಸಿ, ಆದಷ್ಟು ಬೇಗ ಪಶುವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸುವುದು", "तरल पदार्थ की भरपाई शुरू करें और जल्द से जल्द पशु चिकित्सक से संपर्क करें"),
      L("Decide on medicine themselves", "వారే మందు నిర్ణయించుకోవడం", "தாங்களே மருந்தை முடிவு செய்வது", "ತಾವೇ ಔಷಧಿ ನಿರ್ಧರಿಸುವುದು", "खुद ही दवा तय करें"),
      L("Stop all feeding until the vet arrives", "పశువైద్యుడు వచ్చేవరకు మేత మొత్తం ఆపివేయడం", "மருத்துவர் வரும் வரை உணவளிப்பை முழுவதுமாக நிறுத்துவது", "ವೈದ್ಯರು ಬರುವವರೆಗೆ ಆಹಾರವನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ನಿಲ್ಲಿಸುವುದು", "वेट के आने तक सारा खिलाना बंद कर दें"),
    ],
    answer: 1,
    explain: L("Replace lost fluids with the electrolyte solution and contact the veterinarian at the earliest to determine the cause and treatment.", "ఎలక్ట్రోలైట్ ద్రావణంతో కోల్పోయిన ద్రవాలను భర్తీ చేసి, కారణం మరియు చికిత్సను నిర్ధారించడానికి వీలైనంత త్వరగా పశువైద్యుడిని సంప్రదించాలి.", "எலக்ட்ரோலைட் கரைசலைக் கொண்டு இழந்த திரவங்களை மீட்டெடுத்து, காரணத்தையும் சிகிச்சையையும் தீர்மானிக்க விரைவில் கால்நடை மருத்துவரைத் தொடர்பு கொள்ள வேண்டும்.", "ಎಲೆಕ್ಟ್ರೋಲೈಟ್ ದ್ರಾವಣದಿಂದ ಕಳೆದುಕೊಂಡ ದ್ರವಗಳನ್ನು ಮರುಪೂರಣ ಮಾಡಿ, ಕಾರಣ ಮತ್ತು ಚಿಕಿತ್ಸೆಯನ್ನು ನಿರ್ಧರಿಸಲು ಆದಷ್ಟು ಬೇಗ ಪಶುವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಬೇಕು.", "इलेक्ट्रोलाइट घोल से खोए हुए तरल की भरपाई करें और कारण व इलाज तय करने के लिए जल्द से जल्द पशु चिकित्सक से संपर्क करें।"),
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
