// ============================================================================
// Pashu Arogya Academy — Progress tracking (browser localStorage, no login required)
// ============================================================================

const STORAGE_KEY = "vet_paravet_lms_progress_v1";

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

function saveProgress(progress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function getLessonState(moduleId, lessonId) {
  const progress = loadProgress();
  return progress?.[moduleId]?.[lessonId] || { completed: false, bestScore: 0, attempts: 0 };
}

export function recordQuizAttempt(moduleId, lessonId, scorePercent, passed) {
  const progress = loadProgress();
  if (!progress[moduleId]) progress[moduleId] = {};
  const existing = progress[moduleId][lessonId] || { completed: false, bestScore: 0, attempts: 0 };
  progress[moduleId][lessonId] = {
    completed: existing.completed || passed,
    bestScore: Math.max(existing.bestScore, scorePercent),
    attempts: existing.attempts + 1,
  };
  saveProgress(progress);
  return progress[moduleId][lessonId];
}

// All lessons are unlocked regardless of progress — learners can browse
// any module or lesson in any order.
export function isLessonUnlocked(mod, lessonId) {
  return true;
}

export function getModuleProgress(mod) {
  if (!mod || !mod.lessons || mod.lessons.length === 0) {
    return { completed: 0, total: 0, percent: 0, isComplete: false };
  }
  const completed = mod.lessons.filter((l) => getLessonState(mod.id, l.id).completed).length;
  const total = mod.lessons.length;
  return {
    completed,
    total,
    percent: Math.round((completed / total) * 100),
    isComplete: completed === total,
  };
}

export function resetModuleProgress(moduleId) {
  const progress = loadProgress();
  delete progress[moduleId];
  saveProgress(progress);
}

export function resetAllProgress() {
  localStorage.removeItem(STORAGE_KEY);
}
