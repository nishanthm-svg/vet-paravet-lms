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
  const existing = progress[moduleId][lessonId] || { completed: false, bestScore: 0, attempts: 0, completedAt: null };
  const justCompleted = !existing.completed && !!passed;
  progress[moduleId][lessonId] = {
    completed: existing.completed || passed,
    bestScore: Math.max(existing.bestScore, scorePercent),
    attempts: existing.attempts + 1,
    lastAttemptAt: new Date().toISOString(),
    completedAt: existing.completedAt || (justCompleted ? new Date().toISOString() : null),
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

// Overall progress across every available module — used for the dashboard's
// summary ring and to gate the course-completion certificate / final exam.
export function getOverallProgress(modules) {
  const active = modules.filter((m) => m.available);
  let done = 0;
  let total = 0;
  active.forEach((m) => {
    const p = getModuleProgress(m);
    done += p.completed;
    total += p.total;
  });
  return {
    done,
    total,
    percent: total ? Math.round((done / total) * 100) : 0,
    isComplete: total > 0 && done === total,
  };
}

export function isCourseComplete(modules) {
  return getOverallProgress(modules).isComplete;
}

// The final exam's attempt record lives at progress.finalExam — a sibling to
// the moduleId keys (always "m1".."m17", so it can never collide) in the
// same localStorage blob, following the same shape as a per-lesson state.
export function getFinalExamState() {
  const progress = loadProgress();
  return progress.finalExam || { attempted: false, bestScore: 0, attempts: 0, passed: false, lastAttemptAt: null, passedAt: null };
}

export function recordFinalExamAttempt(scorePercent, passed) {
  const progress = loadProgress();
  const existing = progress.finalExam || { attempted: false, bestScore: 0, attempts: 0, passed: false, passedAt: null };
  const justPassed = !existing.passed && !!passed;
  progress.finalExam = {
    attempted: true,
    passed: existing.passed || !!passed,
    bestScore: Math.max(existing.bestScore || 0, scorePercent),
    attempts: (existing.attempts || 0) + 1,
    lastAttemptAt: new Date().toISOString(),
    passedAt: existing.passedAt || (justPassed ? new Date().toISOString() : null),
  };
  saveProgress(progress);
  return progress.finalExam;
}
