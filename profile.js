// ============================================================================
// Learner name — a single local field so a printed certificate has a name on
// it. This course has no accounts yet (progress lives in localStorage), so
// this is just a name the learner types once; it is not verified identity.
// ============================================================================
const STORAGE_KEY = "vet_paravet_lms_learner_name_v1";

export function getLearnerName() {
  try {
    return localStorage.getItem(STORAGE_KEY) || "";
  } catch (e) {
    return "";
  }
}

export function setLearnerName(name) {
  try {
    localStorage.setItem(STORAGE_KEY, (name || "").trim());
  } catch (e) {
    // no-op — certificates just re-prompt next time
  }
}
