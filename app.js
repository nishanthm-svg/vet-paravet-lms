import { MODULES, getModule, getLesson, getLessonIndex } from "./data.js";
import {
  getLessonState,
  recordQuizAttempt,
  isLessonUnlocked,
  getModuleProgress,
  getOverallProgress,
  setProgressCache,
  isCourseComplete,
  getFinalExamState,
  recordFinalExamAttempt,
} from "./progress-client.js";
import { LANGUAGES, getLang, setLang, tr, ui } from "./i18n.js";
import { api } from "./api.js";
import * as admin from "./admin.js";
import { FINAL_EXAM_QUESTIONS, FINAL_EXAM_PASS_PERCENT } from "./exam-data.js";

const root = document.getElementById("app");

const ICONS = {
  check: "✓",
  lock: "🔒",
};

const TOPIC_EMOJIS = ["🩺", "🐄", "🔬", "📈", "🤝", "🏆", "💉", "💡"];
const CALLOUT_EMOJIS = { info: "💡", tip: "✅", warning: "⚠️" };
const STAT_EMOJIS = ["🎯", "🌟", "🔑", "📌", "✨", "🌱"];

// Real photos shown on a module's own page, where one is a genuine thematic fit.
const MODULE_PHOTOS = {
  m17: { src: "assets/photo-cow-eartag.jpg", alt: "A close-up of a cow with a yellow numbered ear tag" },
};

// Attribution for every sourced photo used in lesson content (CC-BY-SA/CC-BY
// requires this). Populated as photos are added — see the Credits page.
const PHOTO_CREDITS = [
  { src: "assets/photo-m1-herd-behaviour.jpg", author: "Martin Abegglen", license: "CC BY-SA 2.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Dairy_cows_on_pasture_in_Ireland.jpg", usedIn: "Module 1 — General Observation" },
  { src: "assets/photo-m1-chewing-cud.jpg", author: "Jim Champion", license: "CC BY-SA 2.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Cud-chewing_cow,_south_of_Ferny_Knap_Inclosure,_New_Forest_-_geograph.org.uk_-_563528.jpg", usedIn: "Module 1 — General Observation" },
  { src: "assets/photo-m1-coat-eyes-muzzle.jpg", author: "Sergei S. Scurfield (Seerig)", license: "CC BY-SA 3.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Ayrshire_cow_head.JPG", usedIn: "Module 1 — General Observation" },
  { src: "assets/photo-m2-healthy-signs.jpg", author: "Harvinder Chandigarh", license: "CC BY-SA 4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Sahiwal-_breed_cow_at_the_dairy_unit_attached_to_Bhai_Ram_Singh_Memorial_(Gurudwara)_,_Bhaini_Sahib_,Ludhyana,_Punjab_,India.JPG", usedIn: "Module 2 — Buying a New Animal" },
  { src: "assets/photo-m2-udder-veins.jpg", author: "Kenneth Freeman (Kencf0618)", license: "CC BY-SA 3.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:GnarlyUdderVeins4589.JPG", usedIn: "Module 2 — Buying a New Animal" },
  { src: "assets/photo-m2-age-teeth.jpg", author: "Lucyin", license: "CC BY-SA 4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Dints_viye_vatche.jpg", usedIn: "Module 2 — Buying a New Animal" },
  { src: "assets/photo-cow-newborn-calf.jpg", author: "Dineshpr2029", license: "CC BY-SA 4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Cow_and_calf_indian_breed.jpg", usedIn: "Module 3 — Care of the Newborn Calf" },
  { src: "assets/photo-m3-colostrum.jpg", author: "Oluwafemi stephens", license: "CC BY-SA 4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Feeding_the_Calf.jpg", usedIn: "Module 3 — Care of the Newborn Calf" },
  { src: "assets/photo-m4-vet-vaccinating.jpg", author: "MC2 Joshua Karsten / U.S. Navy", license: "Public Domain", sourceUrl: "https://commons.wikimedia.org/wiki/Category:Veterinary_medicine", usedIn: "Module 4 — Vaccination" },
  { src: "assets/photo-m5-lumpy-skin-disease.jpg", author: "Pavanaja", license: "CC BY-SA 4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Lumpy_Skin_Disease_03.jpg", usedIn: "Module 5 — Other Important Diseases" },
  { src: "assets/photo-m6-tick-specimen.jpg", author: "Alan R Walker", license: "CC BY-SA 3.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Rhipicephalus-microplus-female-male.jpg", usedIn: "Module 6 — Tick, Fly & Worm-Borne Diseases" },
  { src: "assets/photo-m6-horn-flies.jpg", author: "Alan R Walker", license: "CC BY-SA 3.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Haematobia-horn-fly-cattle-infestation-2.jpg", usedIn: "Module 6 — Tick, Fly & Worm-Borne Diseases" },
  { src: "assets/photo-m6-pour-on-acaricide.jpg", author: "Alan R Walker", license: "CC BY-SA 3.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Pour-on-acaricide-cattle.jpg", usedIn: "Module 6 — Tick, Fly & Worm-Borne Diseases" },
  { src: "assets/photo-m8-hoof-trim.jpg", author: "Flominator", license: "CC BY-SA 3.0 / GFDL", sourceUrl: "https://commons.wikimedia.org/wiki/File:Klauenpflege_Kuh_9785.jpg", usedIn: "Module 8 — Diseases Due to Faulty Feeding" },
  { src: "assets/photo-m9-healthy-udder.jpg", author: "David Monniaux", license: "CC BY-SA 2.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Cow_behind_udder_DSC04046.jpg", usedIn: "Module 9 — Mastitis" },
  { src: "assets/photo-m10-cottonseed.jpg", author: "Cgoodwin", license: "CC BY 3.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Feeding_cattle_cotton_seeds.jpg", usedIn: "Module 10 — Common Poisoning Conditions" },
  { src: "assets/photo-m10-sorghum.jpg", author: "ABHIJEET", license: "CC BY-SA 3.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Sorghum_plant_Chinawal.jpg", usedIn: "Module 10 — Common Poisoning Conditions" },
  { src: "assets/photo-m10-cassava.jpg", author: "CyberTroopers", license: "CC BY-SA 4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Cassava_Plant.jpg", usedIn: "Module 10 — Common Poisoning Conditions" },
  { src: "assets/photo-m10-pesticide-spraying.jpg", author: "Maasaak", license: "CC BY-SA 4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Pesticide_spraying_in_spring.jpg", usedIn: "Module 10 — Common Poisoning Conditions" },
  { src: "assets/photo-m11-handwashing.jpg", author: "MarkBuckawicki", license: "CC0 1.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Hand_washing_man.jpg", usedIn: "Module 11 — Common Zoonotic Diseases" },
  { src: "assets/photo-m11-tick-specimen.jpg", author: "Alan R Walker", license: "CC BY-SA 3.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Rhipicephalus-microplus-female-male.jpg", usedIn: "Module 11 — Common Zoonotic Diseases" },
  { src: "assets/photo-m13-mimosa-pudica.jpg", author: "NonNerd", license: "CC0 1.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Mimosa_pudica_leaves_close_up.jpg", usedIn: "Module 13 — Traditional Remedies" },
  { src: "assets/photo-m13-amla.jpg", author: "Thamizhpparithi Maari", license: "CC BY-SA 3.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Fruits_of_Phyllanthus_emblica.jpg", usedIn: "Module 13 — Traditional Remedies" },
  { src: "assets/photo-m13-asparagus-racemosus.jpg", author: "Neha.Vindhya", license: "CC BY-SA 3.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Asparagus_racemosus.JPG", usedIn: "Module 13 — Traditional Remedies" },
  { src: "assets/photo-m13-neem.jpg", author: "Kevinsooryan", license: "CC BY-SA 3.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Azadirachta_indica,_leaves_%26_fruits.JPG", usedIn: "Module 13 — Traditional Remedies" },
  { src: "assets/photo-fodder-cutting.jpg", author: "Sanyam Bahga", license: "CC BY-SA 3.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Punjabi_farmer_preparing_cattle_feed.jpg", usedIn: "Module 14 — Feeding of Animals" },
  { src: "assets/photo-m14-tmr.jpg", author: "Tractorboy60", license: "Public Domain", sourceUrl: "https://commons.wikimedia.org/wiki/File:Cows_eating_TMR.JPG", usedIn: "Module 14 — Feeding of Animals" },
  { src: "assets/photo-m15-green-fodder.jpg", author: "Sarbjit Bahga", license: "CC BY-SA 4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Manual_cutting_of_green_fodder_in_Punjab.jpg", usedIn: "Module 15 — Fodder Production" },
  { src: "assets/photo-m15-hay.jpg", author: "Sarbjit Bahga", license: "CC BY-SA 4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:A_traditional_method_of_storing_wheat_hay_in_Punjab.jpg", usedIn: "Module 15 — Fodder Production" },
  { src: "assets/photo-m15-silage.jpg", author: "Graham Cole", license: "CC BY-SA 2.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Silage_pit_for_a_big_farm_-_geograph.org.uk_-_644006.jpg", usedIn: "Module 15 — Fodder Production" },
  { src: "assets/photo-m15-straw.jpg", author: "CIAT", license: "CC BY-SA 2.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Agriculture_in_India_tractor_farming_Punjab_preparing_field_for_a_wheat_crop_without_burning_previous_crop_stalk.jpg", usedIn: "Module 15 — Fodder Production" },
  { src: "assets/photo-m16-shed.jpg", author: "Arne Hückelheim", license: "CC BY-SA 3.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:CowShed.JPG", usedIn: "Module 16 — Housing of Animals" },
  { src: "assets/photo-m16-manger.jpg", author: "Komal Sambhudas", license: "CC BY-SA 4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Concerate_Feeding_Tray_for_Cows.jpg", usedIn: "Module 16 — Housing of Animals" },
];

let lang = getLang(); // null until the learner picks one
let currentUser = null; // null until session-checked or logged in

function t(field) {
  return tr(field, lang || "en");
}
function u(key, vars) {
  return ui(key, lang || "en", vars);
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function navigate(hash) {
  if (location.hash === hash) {
    render();
  } else {
    location.hash = hash;
  }
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
}

// ============================================================================
// Landing page — the very first screen a learner sees.
// ============================================================================
function renderLandingPage() {
  const features = [
    { icon: "📚", title: u("landingFeature1Title"), text: u("landingFeature1Text") },
    { icon: "🌐", title: u("landingFeature2Title"), text: u("landingFeature2Text") },
    { icon: "🎓", title: u("landingFeature3Title"), text: u("landingFeature3Text") },
  ]
    .map(
      (f) => `
      <div class="landing-feature">
        <div class="landing-feature-icon">${f.icon}</div>
        <h3>${escapeHtml(f.title)}</h3>
        <p>${escapeHtml(f.text)}</p>
      </div>`
    )
    .join("");

  return `
    <div class="landing-page">
      <div class="landing-hero landing-hero-photo">
        <div class="landing-logo" style="font-size:34px; line-height:44px;">🐄🩺</div>
        <h1>${escapeHtml(u("landingHeroTitle"))}</h1>
        <p>${escapeHtml(u("landingHeroSubtitle"))}</p>
        <div class="landing-cta-row">
          <button type="button" class="btn btn-primary landing-cta" id="landing-learner-login-btn">${escapeHtml(u("learnerLoginButton"))}</button>
          <button type="button" class="btn btn-outline landing-cta" id="landing-admin-login-btn">${escapeHtml(u("adminLoginButtonLabel"))}</button>
        </div>
      </div>
      <div class="page landing-body">
        <div class="landing-features">${features}</div>
        <div class="landing-scene">
          <img src="assets/hero-village.jpg" alt="A village in rural India with a temple, homes and cattle grazing near a paddy field" />
          <div class="landing-scene-caption">${escapeHtml(u("landingSceneCaption"))}</div>
        </div>
        <div class="landing-supported">
          <div class="landing-supported-label">${escapeHtml(u("landingSupportedBy"))}</div>
          <div class="landing-logos">
            <img class="landing-logo-img" src="assets/nddb-logo.png" alt="National Dairy Development Board" />
            <img class="landing-logo-img" src="assets/nddb-dairy-services-logo.png" alt="NDDB Dairy Services" />
          </div>
        </div>
      </div>
    </div>
  `;
}

function wireLandingPage() {
  const learnerBtn = document.getElementById("landing-learner-login-btn");
  const adminBtn = document.getElementById("landing-admin-login-btn");
  if (learnerBtn) learnerBtn.addEventListener("click", () => navigate("#/login/learner"));
  if (adminBtn) adminBtn.addEventListener("click", () => navigate("#/login/admin"));
}

// ============================================================================
// Login / auth pages
// ============================================================================
function renderLoginPage(loginAs) {
  const title = loginAs === "admin" ? u("adminLoginTitle") : loginAs === "learner" ? u("learnerLoginTitle") : u("loginTitle");
  return `
    <div class="auth-page">
      <div class="auth-box">
        <div class="auth-logo" style="font-size:34px;">🐄🩺</div>
        <h1>${escapeHtml(title)}</h1>
        <p class="sub">${escapeHtml(u("loginSubtitle"))}</p>
        <div id="login-error"></div>
        <form id="login-form">
          <div class="field">
            <label for="login-id">${escapeHtml(u("loginIdLabel"))}</label>
            <input type="email" id="login-id" autocomplete="username" required />
          </div>
          <div class="field">
            <label for="login-password">${escapeHtml(u("passwordLabel"))}</label>
            <input type="password" id="login-password" autocomplete="current-password" required />
          </div>
          <button type="submit" class="btn btn-primary" id="login-submit">${escapeHtml(u("loginButton"))}</button>
        </form>
      </div>
    </div>
  `;
}

function wireLoginPage(loginAs) {
  const form = document.getElementById("login-form");
  const errorEl = document.getElementById("login-error");
  const submitBtn = document.getElementById("login-submit");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    errorEl.innerHTML = "";
    const loginId = document.getElementById("login-id").value.trim();
    const password = document.getElementById("login-password").value;
    submitBtn.disabled = true;
    submitBtn.textContent = u("loginSigningIn");
    try {
      const res = await api.login(loginId, password);
      const user = res.user;
      if (loginAs && user.role !== loginAs) {
        await api.logout();
        errorEl.innerHTML = `<div class="auth-error">${escapeHtml(
          user.role === "admin" ? u("loginWrongPortalAdmin") : u("loginWrongPortalLearner")
        )}</div>`;
        submitBtn.disabled = false;
        submitBtn.textContent = u("loginButton");
        return;
      }
      currentUser = user;
      if (currentUser.role !== "admin") {
        try {
          const p = await api.myProgress();
          setProgressCache(p.progress);
        } catch (e2) {
          setProgressCache({});
        }
      }
      navigate(currentUser.role === "admin" ? "#/admin" : "#/dashboard");
    } catch (err) {
      errorEl.innerHTML = `<div class="auth-error">${escapeHtml(err.message || u("loginErrorGeneric"))}</div>`;
      submitBtn.disabled = false;
      submitBtn.textContent = u("loginButton");
    }
  });
}

function renderChangePasswordPage() {
  const showCurrent = !currentUser.mustChangePassword;
  return `
    <div class="auth-page">
      <div class="auth-box">
        <div class="auth-logo" style="font-size:34px;">🐄🩺</div>
        <h1>${escapeHtml(u("changePasswordTitle"))}</h1>
        <p class="sub">${escapeHtml(u("changePasswordSubtitle"))}</p>
        <div id="cp-error"></div>
        <form id="cp-form">
          ${
            showCurrent
              ? `<div class="field">
                  <label for="cp-current">${escapeHtml(u("currentPasswordLabel"))}</label>
                  <input type="password" id="cp-current" autocomplete="current-password" />
                </div>`
              : ""
          }
          <div class="field">
            <label for="cp-new">${escapeHtml(u("newPasswordLabel"))}</label>
            <input type="password" id="cp-new" autocomplete="new-password" required minlength="6" />
            <div class="hint">${escapeHtml(u("newPasswordHint"))}</div>
          </div>
          <button type="submit" class="btn btn-primary" id="cp-submit">${escapeHtml(u("changePasswordButton"))}</button>
        </form>
      </div>
    </div>
  `;
}

function wireChangePasswordPage() {
  const form = document.getElementById("cp-form");
  const errorEl = document.getElementById("cp-error");
  const submitBtn = document.getElementById("cp-submit");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    errorEl.innerHTML = "";
    const currentEl = document.getElementById("cp-current");
    const oldPassword = currentEl ? currentEl.value : undefined;
    const newPassword = document.getElementById("cp-new").value;
    submitBtn.disabled = true;
    submitBtn.textContent = u("changePasswordSaving");
    try {
      await api.changePassword(oldPassword, newPassword);
      currentUser.mustChangePassword = false;
      navigate(currentUser.role === "admin" ? "#/admin" : "#/dashboard");
    } catch (err) {
      errorEl.innerHTML = `<div class="auth-error">${escapeHtml(err.message || u("loginErrorGeneric"))}</div>`;
      submitBtn.disabled = false;
      submitBtn.textContent = u("changePasswordButton");
    }
  });
}

// ============================================================================
// Language picker
// ============================================================================
function renderLanguagePicker(isSwitcher) {
  const cards = LANGUAGES.map(
    (l) => `
    <button type="button" class="lang-card" data-lang="${l.code}">
      <div class="lang-native">${escapeHtml(l.native)}</div>
      <div class="lang-label">${escapeHtml(l.label)}</div>
    </button>`
  ).join("");

  return `
    <div class="lang-picker-page">
      <div class="lang-picker-box">
        <div class="lang-picker-icon" style="font-size:40px;">🐄🩺</div>
        <h1>${u("langPickerTitle")}</h1>
        <p>${u("langPickerSub")}</p>
        <div class="lang-grid">${cards}</div>
        ${isSwitcher ? `<button class="btn btn-outline lang-cancel" id="lang-cancel-btn">${escapeHtml(u("backButton"))}</button>` : ""}
      </div>
    </div>
  `;
}

function wireLanguagePicker(isSwitcher, returnHash) {
  document.querySelectorAll("[data-lang]").forEach((btn) => {
    btn.addEventListener("click", () => {
      lang = btn.getAttribute("data-lang");
      setLang(lang);
      if (isSwitcher && returnHash) {
        navigate(returnHash);
      } else {
        navigate("#/dashboard");
      }
    });
  });
  const cancelBtn = document.getElementById("lang-cancel-btn");
  if (cancelBtn && returnHash) {
    cancelBtn.addEventListener("click", () => navigate(returnHash));
  }
}

// ============================================================================
// Top bar
// ============================================================================
function renderTopbar(context) {
  const { title, showBack, backHash } = context;
  const homeHash = currentUser && currentUser.role === "admin" ? "#/admin" : "#/dashboard";
  const adminLink =
    currentUser && currentUser.role === "admin"
      ? `<button class="admin-nav-btn" data-nav="#/admin">🧑‍💼 ${escapeHtml(u("adminNavLink"))}</button>`
      : "";
  const logoutBtn = currentUser ? `<button class="logout-btn" id="logout-btn">↪ ${escapeHtml(u("logoutButton"))}</button>` : "";
  return `
    <div class="topbar">
      ${
        showBack
          ? `<button class="back-btn" data-nav="${backHash}">${u("backButton")}</button>`
          : `<div class="brand" data-nav="${homeHash}"><span class="brand-icon" style="font-size:18px;">🐄🩺</span> ${escapeHtml(u("brandName"))}</div>`
      }
      ${showBack ? `<div class="brand" data-nav="${homeHash}" style="margin-left:4px;"><span class="brand-icon" style="font-size:18px;">🐄🩺</span> ${escapeHtml(title || u("brandName"))}</div>` : ""}
      <div class="spacer"></div>
      ${adminLink}
      <button class="lang-switch-btn" data-nav="#/language">🌐 ${escapeHtml((LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0]).native)}</button>
      ${logoutBtn}
    </div>
  `;
}

function wireTopbarLogout() {
  const btn = document.getElementById("logout-btn");
  if (btn) {
    btn.addEventListener("click", async () => {
      try {
        await api.logout();
      } catch (e) {
        // ignore — clearing local state regardless
      }
      currentUser = null;
      setProgressCache({});
      navigate("#/login");
    });
  }
}

// ============================================================================
// Dashboard
// ============================================================================
function renderDashboard() {
  const cards = MODULES.map((mod) => {
    if (!mod.available) {
      return `
        <div class="module-card locked">
          <div class="module-number">${mod.number}</div>
          <div class="module-info">
            <h3>${escapeHtml(t(mod.title))}</h3>
            <div class="meta">${u("comingSoon")}</div>
          </div>
          <span class="badge locked">${u("badgeLocked")}</span>
        </div>
      `;
    }
    const progress = getModuleProgress(mod);
    const badge = progress.isComplete
      ? `<span class="badge complete">${u("badgeCompleted")}</span>`
      : progress.completed > 0
      ? `<span class="badge progress">${u("badgeInProgress")}</span>`
      : `<span class="badge progress">${u("badgeStart")}</span>`;
    return `
      <div class="module-card available" data-nav="#/module/${mod.id}">
        <div class="module-number">${mod.number}</div>
        <div class="module-info">
          <h3>${escapeHtml(t(mod.title))}</h3>
          <div class="meta">${u("lessonsCompleteMeta", { completed: progress.completed, total: progress.total })}</div>
          <div class="mini-bar"><div style="width:${progress.percent}%"></div></div>
        </div>
        ${badge}
      </div>
    `;
  }).join("");

  const activeModules = MODULES.filter((m) => m.available);
  const totalLessons = activeModules.reduce((sum, m) => sum + (m.lessons?.length || 0), 0);
  const totalDone = activeModules.reduce((sum, m) => sum + getModuleProgress(m).completed, 0);
  const overallPct = totalLessons ? Math.round((totalDone / totalLessons) * 100) : 0;

  return `
    ${renderTopbar({ showBack: false })}
    <div class="page">
      <div class="dash-header">
        <h1>${u("dashboardTitle")}</h1>
        <p>${u("dashboardTagline")}</p>
      </div>
      <div class="overall-progress">
        <div class="ring" style="--pct:${overallPct}" data-label="${overallPct}%"></div>
        <div>
          <div style="font-weight:700; font-size:15px;">${u("lessonsCompletedCount", { done: totalDone, total: totalLessons })}</div>
          <div style="font-size:13px; color:var(--gray-500);">${u("progressHint")}</div>
        </div>
        <div class="spacer"></div>
        <button type="button" class="btn btn-outline" data-nav="#/certificates">🎓 ${u("certificatesNavLabel")}</button>
      </div>
      <div class="module-grid">${cards}</div>
      <div class="progress-note">${u("progressNote")}</div>
      <div class="credits-link"><a href="#/credits" data-nav="#/credits">${u("photoCreditsLink")}</a></div>
    </div>
  `;
}

// ============================================================================
// Photo credits — required attribution for CC-BY-SA / CC-BY sourced photos
// ============================================================================
function renderCreditsPage() {
  const rows = PHOTO_CREDITS.map(
    (c) => `
      <div class="credit-row">
        <img src="${escapeHtml(c.src)}" alt="" />
        <div class="credit-info">
          <div class="credit-used">${escapeHtml(u("usedIn", { where: t(c.usedIn) }))}</div>
          <div class="credit-meta">${escapeHtml(c.author)} · ${escapeHtml(c.license)}</div>
          <a href="${escapeHtml(c.sourceUrl)}" target="_blank" rel="noopener">${escapeHtml(u("viewSource"))}</a>
        </div>
      </div>`
  ).join("");
  return `
    ${renderTopbar({ showBack: true, backHash: "#/dashboard" })}
    <div class="page page-narrow">
      <h1 style="font-size:22px; margin:0 0 6px;">${escapeHtml(u("photoCreditsTitle"))}</h1>
      <p style="color:var(--gray-500); font-size:14px; margin:0 0 22px;">${escapeHtml(u("photoCreditsIntro"))}</p>
      <div class="credits-list">${rows}</div>
      <div class="illustrations-note">
        <h2>${escapeHtml(u("illustrationsNoteHeading"))}</h2>
        <p>${escapeHtml(u("illustrationsNote"))}</p>
      </div>
    </div>
  `;
}

// ============================================================================
// Module page — lesson list
// ============================================================================
function renderModulePage(moduleId) {
  const mod = getModule(moduleId);
  if (!mod || !mod.available) {
    navigate("#/dashboard");
    return "";
  }
  const progress = getModuleProgress(mod);

  const rows = mod.lessons
    .map((lesson, idx) => {
      const state = getLessonState(mod.id, lesson.id);
      const unlocked = isLessonUnlocked(mod, lesson.id);
      let iconClass, iconHtml, rowClass;
      if (state.completed) {
        iconClass = "done";
        iconHtml = ICONS.check;
        rowClass = "unlocked";
      } else if (unlocked) {
        iconClass = "next";
        iconHtml = idx + 1;
        rowClass = "unlocked";
      } else {
        iconClass = "locked";
        iconHtml = ICONS.lock;
        rowClass = "locked";
      }
      const topicCount = lesson.topics ? lesson.topics.length : 0;
      const metaParts = [u("lessonMeta", { min: lesson.estMinutes, topics: topicCount })];
      if (state.completed) metaParts.push(u("bestScoreSuffix", { score: state.bestScore }));
      if (!unlocked) metaParts.push(u("lockedHint"));
      return `
        <div class="lesson-row ${rowClass}" ${unlocked ? `data-nav="#/module/${mod.id}/lesson/${lesson.id}"` : ""}>
          <div class="lesson-status-icon ${iconClass}">${iconHtml}</div>
          <div class="lesson-info">
            <h4>${escapeHtml(t(lesson.title))}</h4>
            <div class="meta">${metaParts.join(" · ")}</div>
          </div>
          ${unlocked ? `<div class="chev">›</div>` : ""}
        </div>
      `;
    })
    .join("");

  const modulePhoto = MODULE_PHOTOS[mod.id];

  return `
    ${renderTopbar({ showBack: true, backHash: "#/dashboard", title: t(mod.title) })}
    <div class="page">
      <div class="module-hero">
        ${modulePhoto ? `<img class="module-hero-photo" src="${modulePhoto.src}" alt="${escapeHtml(modulePhoto.alt)}" />` : ""}
        <h1>${escapeHtml(t(mod.title))}</h1>
        <p>${escapeHtml(t(mod.subtitle) || "")}</p>
        <div class="progress-row">
          <div class="bar-track"><div style="width:${progress.percent}%"></div></div>
          <div class="progress-label">${u("moduleProgressComplete", { completed: progress.completed, total: progress.total })}</div>
        </div>
      </div>
      <div class="lesson-list">${rows}</div>
    </div>
  `;
}

// ============================================================================
// Content block renderers (used for "hook" blocks and topic "teach" blocks)
// ============================================================================
function renderBlockHtml(block) {
  switch (block.type) {
    case "hero":
      return `<div class="block block-hero"><h2>🐄 ${escapeHtml(t(block.heading))}</h2><p>${escapeHtml(t(block.text))}</p></div>`;

    case "text":
      return `<div class="block block-text"><h3>📘 ${escapeHtml(t(block.heading))}</h3><div class="body">${t(block.html)}</div></div>`;

    case "callout": {
      const emoji = CALLOUT_EMOJIS[block.style] || "💡";
      return `<div class="block callout ${block.style || ""}"><h4>${emoji} ${escapeHtml(t(block.heading))}</h4><p>${escapeHtml(t(block.text))}</p></div>`;
    }

    case "example":
      return `<div class="block example-box"><h4>🌟 ${escapeHtml(t(block.heading))}</h4><p>${escapeHtml(t(block.text))}</p></div>`;

    case "glossary":
      return `
        <div class="block glossary-box" data-toggle="glossary">
          <span class="gloss-icon">📖</span>
          <div>
            <span class="gloss-term">${escapeHtml(t(block.term))}</span>
            <span class="gloss-hint">${u("tapToReveal")}</span>
            <div class="gloss-meaning">${escapeHtml(t(block.meaning))}</div>
          </div>
        </div>`;

    case "photo":
      return `
        <div class="block photo-box">
          <img src="${escapeHtml(block.src)}" alt="${escapeHtml(t(block.alt))}" loading="lazy" />
          ${block.caption ? `<div class="photo-caption">${escapeHtml(t(block.caption))}</div>` : ""}
        </div>`;

    case "ledger": {
      const rows = block.rows
        .map((r) => `<div class="ledger-row"><span>${escapeHtml(t(r.label))}</span><span>${escapeHtml(r.amount)}</span></div>`)
        .join("");
      return `
        <div class="block ledger-box">
          <h3>💰 ${escapeHtml(t(block.heading))}</h3>
          ${rows}
          <div class="ledger-row ledger-total"><span>${escapeHtml(t(block.total.label))}</span><span>${escapeHtml(block.total.amount)}</span></div>
        </div>`;
    }

    case "stat-grid":
      return `<div class="block stat-grid">${block.items
        .map(
          (it, i) =>
            `<div class="stat-card"><div class="label">${STAT_EMOJIS[i % STAT_EMOJIS.length]} ${escapeHtml(t(it.label))}</div><div class="text">${escapeHtml(t(it.text))}</div></div>`
        )
        .join("")}</div>`;

    case "barchart": {
      const max = Math.max(...block.data.map((d) => d.value));
      const rows = block.data
        .map(
          (d, i) => `
        <div class="bar-row">
          <div class="bar-label">${d.flag ? d.flag + " " : ""}${escapeHtml(t(d.label))}</div>
          <div class="bar-track"><div class="bar-fill" data-target="${(d.value / max) * 100}" style="transition-delay:${i * 40}ms"></div></div>
          <div class="bar-value">${d.value} ${escapeHtml(t(block.unit))}</div>
        </div>`
        )
        .join("");
      return `
        <div class="block chart-box">
          <h3>📊 ${escapeHtml(t(block.heading))}</h3>
          <div class="chart-source">${escapeHtml(t(block.source))}</div>
          ${rows}
        </div>`;
    }

    case "timeline": {
      const items = block.items
        .map(
          (it) => `
        <div class="timeline-item">
          <div class="year">${escapeHtml(t(it.year))}</div>
          <div class="text">${escapeHtml(t(it.text))}</div>
        </div>`
        )
        .join("");
      return `
        <div class="block timeline-box">
          <h3>🕰️ ${escapeHtml(t(block.heading))}</h3>
          <div class="timeline">${items}</div>
          ${block.result ? `<div class="timeline-result">🏁 ${escapeHtml(t(block.result))}</div>` : ""}
        </div>`;
    }

    case "poll": {
      const qs = block.questions
        .map(
          (q, qi) => `
        <div class="poll-q" data-poll-answer="${q.answer}">
          <div class="q-text">${escapeHtml(t(q.q))}</div>
          <div class="opt-list">
            ${q.options.map((opt, oi) => `<button type="button" class="opt-btn" data-poll-idx="${oi}">${escapeHtml(t(opt))}</button>`).join("")}
          </div>
          <div class="poll-reveal" style="display:none;">${escapeHtml(t(q.reveal) || "")}</div>
        </div>`
        )
        .join("");
      return `<div class="block poll-box"><h3>🤔 ${escapeHtml(t(block.heading))}</h3>${qs}</div>`;
    }

    default:
      return "";
  }
}

function renderBlocks(blocks) {
  return blocks.map((b) => renderBlockHtml(b)).join("");
}

function animateBarsIn(container) {
  const fills = container.querySelectorAll(".bar-fill");
  requestAnimationFrame(() => {
    fills.forEach((f) => {
      f.style.width = f.getAttribute("data-target") + "%";
    });
  });
}

// ============================================================================
// Global interactive-content handlers (glossary tap-to-reveal, ungraded polls)
// Delegated on document so they keep working across every re-render.
// ============================================================================
document.addEventListener("click", (e) => {
  const glossEl = e.target.closest(".glossary-box");
  if (glossEl) {
    glossEl.classList.toggle("revealed");
    return;
  }
  const pollOpt = e.target.closest(".poll-q .opt-btn");
  if (pollOpt) {
    const qEl = pollOpt.closest(".poll-q");
    if (qEl.classList.contains("answered")) return;
    qEl.classList.add("answered");
    const correctIdx = Number(qEl.getAttribute("data-poll-answer"));
    const idx = Number(pollOpt.getAttribute("data-poll-idx"));
    qEl.querySelectorAll(".opt-btn").forEach((b, i) => {
      b.disabled = true;
      if (i === correctIdx) b.classList.add("correct");
      else if (i === idx) b.classList.add("incorrect");
    });
    const reveal = qEl.querySelector(".poll-reveal");
    if (reveal) reveal.style.display = "block";
    return;
  }
});

// ============================================================================
// Question set component — renders a group of questions with select+submit,
// then reports per-question results. Used for the lesson's single combined
// quiz, and for the focused re-try questions during topic review.
// ============================================================================
function renderQuestionSet(container, questions, opts) {
  const answers = new Array(questions.length).fill(null);
  const label = opts.submitLabel;

  const qsHtml = questions
    .map((q, qi) => {
      const options = q.type === "truefalse" ? [u("trueLabel") || "True", u("falseLabel") || "False"] : q.options.map((o) => t(o));
      return `
      <div class="quiz-q" data-quiz-q="${qi}">
        ${questions.length > 1 ? `<div class="q-num">${u("questionOfTotal", { n: qi + 1, total: questions.length })}</div>` : ""}
        <div class="q-text">${escapeHtml(t(q.q))}</div>
        <div class="opt-list">
          ${options.map((opt, oi) => `<button type="button" class="opt-btn" data-quiz-opt="${oi}">${escapeHtml(opt)}</button>`).join("")}
        </div>
      </div>`;
    })
    .join("");

  container.innerHTML = `${qsHtml}<div class="btn-row"><button class="btn btn-primary" id="qs-submit" disabled>${escapeHtml(label)}</button></div>`;

  const qBlocks = container.querySelectorAll("[data-quiz-q]");
  qBlocks.forEach((qEl) => {
    const qi = Number(qEl.getAttribute("data-quiz-q"));
    const optBtns = qEl.querySelectorAll("[data-quiz-opt]");
    optBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const oi = Number(btn.getAttribute("data-quiz-opt"));
        answers[qi] = oi;
        optBtns.forEach((b) => b.classList.remove("selected"));
        btn.classList.add("selected");
        submitBtn.disabled = answers.some((a) => a === null);
      });
    });
  });

  const submitBtn = container.querySelector("#qs-submit");
  submitBtn.addEventListener("click", () => {
    const results = questions.map((q, qi) => {
      const correctIdx = q.type === "truefalse" ? (q.answer ? 0 : 1) : q.answer;
      return { q, isCorrect: answers[qi] === correctIdx, selected: answers[qi] };
    });
    opts.onSubmit(results);
  });
}

function renderQuestionReview(results) {
  return results
    .map(
      (r) => `
      <div class="review-item ${r.isCorrect ? "correct" : "incorrect"}">
        <div class="mark">${r.isCorrect ? "✓" : "✕"}</div>
        <div>
          <div>${escapeHtml(t(r.q.q))}</div>
          <div class="exp">${escapeHtml(t(r.q.explain) || "")}</div>
        </div>
      </div>`
    )
    .join("");
}

// ============================================================================
// Lesson flow controller.
//   1. Walk through every topic (teach content, examples, interactive polls,
//      animations) with Previous/Next navigation — nothing graded yet.
//   2. One combined Lesson Quiz at the end, covering every topic at once.
//   3. Any wrong answer sends the learner back into that exact topic to
//      re-learn it, then re-try just that topic, before finishing.
// ============================================================================
function runLessonFlow(moduleId, lesson) {
  const flowEl = document.getElementById("flow");
  const dotsEl = document.getElementById("topic-dots");
  const topics = lesson.topics;

  function setDots(activeIdx) {
    if (!dotsEl) return;
    dotsEl.innerHTML = topics
      .map((topic, i) => {
        let cls = "dot";
        if (i < activeIdx) cls += " dot-done";
        else if (i === activeIdx) cls += " dot-active";
        return `<div class="${cls}" title="${escapeHtml(t(topic.title))}"></div>`;
      })
      .join("");
  }

  function showTopic(idx) {
    setDots(idx);
    const topic = topics[idx];
    const emoji = TOPIC_EMOJIS[idx % TOPIC_EMOJIS.length];
    const isLast = idx + 1 >= topics.length;
    flowEl.innerHTML = `
      <div class="topic-kicker">${u("topicOfTotal", { n: idx + 1, total: topics.length })}</div>
      <h2 class="topic-title">${emoji} ${escapeHtml(t(topic.title))}</h2>
      <div id="topic-teach">${renderBlocks(topic.teach)}</div>
      <div class="topic-nav">
        ${idx > 0 ? `<button class="btn btn-outline" id="prev-topic-btn">${u("prevButton")}</button>` : `<span></span>`}
        <button class="btn btn-primary" id="next-topic-btn">${isLast ? u("startQuizButton") : u("nextTopicButton")}</button>
      </div>
    `;
    animateBarsIn(flowEl);
    document.getElementById("next-topic-btn").addEventListener("click", () => {
      if (!isLast) showTopic(idx + 1);
      else showFinalIntro();
    });
    const prevBtn = document.getElementById("prev-topic-btn");
    if (prevBtn) prevBtn.addEventListener("click", () => showTopic(idx - 1));
  }

  function showFinalIntro() {
    setDots(topics.length);
    flowEl.innerHTML = `
      <div class="quiz-section" id="final-quiz-section">
        <h2>${u("lessonQuizTitle")}</h2>
        <div class="sub">${u("lessonQuizSub")}</div>
        <div id="final-quiz-body"></div>
      </div>
    `;
    showFinalQuiz();
  }

  function showFinalQuiz() {
    const body = document.getElementById("final-quiz-body");
    renderQuestionSet(body, lesson.finalQuiz.questions, {
      submitLabel: u("submitQuizButton"),
      onSubmit: (results) => {
        const correctCount = results.filter((r) => r.isCorrect).length;
        const scorePercent = Math.round((correctCount / results.length) * 100);
        const wrongTopicIds = [...new Set(results.filter((r) => !r.isCorrect).map((r) => r.q.topicId))];
        recordQuizAttempt(moduleId, lesson.id, scorePercent, wrongTopicIds.length === 0);

        if (wrongTopicIds.length === 0) {
          showLessonComplete(scorePercent, results);
        } else {
          showReviewQueue(wrongTopicIds, 0, scorePercent);
        }
      },
    });
  }

  function showReviewQueue(queue, i, originalScore) {
    if (i >= queue.length) {
      recordQuizAttempt(moduleId, lesson.id, Math.max(originalScore, 70), true);
      showLessonComplete(100, null, true);
      return;
    }
    const topic = topics.find((tp) => tp.id === queue[i]);
    flowEl.innerHTML = `
      <div class="review-banner">
        <div class="review-banner-title">${u("reviewTitlePrefix")} ${escapeHtml(t(topic.title))}</div>
        <div class="review-banner-sub">${u("reviewSub")}</div>
      </div>
      <div id="review-teach">${renderBlocks(topic.teach)}</div>
      <div class="check-box">
        <h3>${u("tryAgainHeading")}</h3>
        <div id="review-check"></div>
      </div>
    `;
    animateBarsIn(flowEl);
    const reviewCheckEl = document.getElementById("review-check");

    function attemptReview() {
      renderQuestionSet(reviewCheckEl, topic.check, {
        submitLabel: u("checkAnswersButton"),
        onSubmit: (results) => {
          const allCorrect = results.every((r) => r.isCorrect);
          if (allCorrect) {
            reviewCheckEl.innerHTML = `
              <div class="check-pass">
                <div class="check-pass-icon">✓</div>
                <div>
                  <div class="check-pass-title">${u("checkPassGotIt")}</div>
                </div>
              </div>
              <div class="btn-row"><button class="btn btn-primary" id="review-next-btn">${
                i + 1 < queue.length ? u("reviewNextTopic") : u("finishLesson")
              }</button></div>
            `;
            document.getElementById("review-next-btn").addEventListener("click", () => {
              showReviewQueue(queue, i + 1, originalScore);
            });
          } else {
            reviewCheckEl.innerHTML = `
              <div class="check-fail">
                <div class="check-fail-icon">🤔</div>
                <div>
                  <div class="check-fail-title">${u("checkFailTitle")}</div>
                  <div class="check-fail-sub">${u("checkFailSub")}</div>
                </div>
              </div>
              <div class="btn-row"><button class="btn btn-primary" id="review-retry-btn">${u("reviewRetry")}</button></div>
            `;
            document.getElementById("review-retry-btn").addEventListener("click", () => {
              document.getElementById("review-teach").scrollIntoView({ behavior: "smooth", block: "start" });
              attemptReview();
            });
          }
        },
      });
    }
    attemptReview();
  }

  function showLessonComplete(scorePercent, results, wasReviewed) {
    const mod = getModule(moduleId);
    const lessonIdx = getLessonIndex(moduleId, lesson.id);
    const nextLesson = mod.lessons[lessonIdx + 1];
    setDots(topics.length);

    let actionsHtml;
    if (lesson.finalQuiz.isFinal) {
      actionsHtml = `<button class="btn btn-success" data-nav="#/module/${moduleId}/complete">${u("viewCertificate")}</button>`;
    } else if (nextLesson) {
      actionsHtml = `<button class="btn btn-primary" data-nav="#/module/${moduleId}/lesson/${nextLesson.id}">${u("continueNextLesson")}</button>`;
    } else {
      actionsHtml = `<button class="btn btn-primary" data-nav="#/module/${moduleId}">${u("backToModule")}</button>`;
    }

    flowEl.innerHTML = `
      <div class="quiz-section">
        <div class="quiz-result pass">
          <div class="confetti-row">🎉 🎊 ✨ 🎉 🎊</div>
          <div class="score-circle"><div class="pct">${scorePercent}%</div><div class="lbl">${wasReviewed ? "" : ""}</div></div>
          <h3>${wasReviewed ? u("completeReviewedTitle") : u("completePassTitle")}</h3>
          <p>${wasReviewed ? u("completeReviewedText") : u("completePassText")}</p>
          <div class="btn-row" style="justify-content:center;">${actionsHtml}</div>
          ${results ? `<div class="quiz-review">${renderQuestionReview(results)}</div>` : ""}
        </div>
      </div>
    `;
  }

  showTopic(0);
}

// ============================================================================
// Lesson page
// ============================================================================
function renderLessonPage(moduleId, lessonId) {
  const mod = getModule(moduleId);
  const lesson = getLesson(moduleId, lessonId);
  if (!mod || !lesson) {
    navigate("#/dashboard");
    return "";
  }
  if (!isLessonUnlocked(mod, lessonId)) {
    navigate(`#/module/${moduleId}`);
    return "";
  }
  const lessonIdx = getLessonIndex(moduleId, lessonId);
  const hookHtml = lesson.hook ? renderBlocks(lesson.hook) : "";

  return `
    ${renderTopbar({ showBack: true, backHash: `#/module/${moduleId}`, title: t(mod.title) })}
    <div class="page page-narrow">
      <div class="lesson-title-bar">
        <div class="kicker">${u("lessonOfTotal", { n: lessonIdx + 1, total: mod.lessons.length })}</div>
        <h1>${escapeHtml(t(lesson.title))}</h1>
      </div>
      ${hookHtml}
      <div id="topic-dots" class="topic-dots"></div>
      <div id="flow"></div>
    </div>
  `;
}

function afterLessonRender(moduleId, lesson) {
  const page = document.querySelector(".page-narrow");
  if (page) animateBarsIn(page);
  runLessonFlow(moduleId, lesson);
}

// ============================================================================
// Module completion page
// ============================================================================
function renderCompletionPage(moduleId) {
  const mod = getModule(moduleId);
  if (!mod) {
    navigate("#/dashboard");
    return "";
  }
  const nextMod = MODULES.find((m) => m.number === mod.number + 1);
  return `
    ${renderTopbar({ showBack: true, backHash: `#/module/${moduleId}`, title: t(mod.title) })}
    <div class="page page-narrow">
      <div class="completion-box">
        <img class="completion-photo" src="assets/photo-milk-cans.jpg" alt="A row of women carrying milk cans" />
        <div class="confetti-row">🎉 🎊 ✨ 🏆 ✨ 🎊 🎉</div>
        <div class="icon">🏆</div>
        <h2>${u("moduleCompleteTitle", { n: mod.number })}</h2>
        <p>${u("moduleCompleteText", { title: t(mod.title) })}</p>
        <div class="btn-row" style="justify-content:center;">
          <button class="btn btn-primary" data-nav="#/certificate/module/${moduleId}">🎓 ${u("certViewButton")}</button>
          <button class="btn btn-outline" style="background:white;" data-nav="#/dashboard">${u("backToDashboard")}</button>
          <button class="btn btn-success" data-nav="#/module/${moduleId}">${u("reviewModule")}</button>
        </div>
      </div>
      ${nextMod ? `<p style="text-align:center; color:var(--gray-500); margin-top:18px; font-size:14px;">${u("nextModuleComingSoon", { n: nextMod.number, title: t(nextMod.title) })}</p>` : ""}
    </div>
  `;
}

// ============================================================================
// Certificates — one per completed module, a course-completion certificate
// once every available module is done, and a final-exam certificate once the
// final exam is passed. Computed entirely from data.js content + the
// progress-client.js in-memory cache — nothing to fetch.
// ============================================================================
const CERT_DATE_LOCALES = { en: "en-IN", te: "te-IN", ta: "ta-IN", kn: "kn-IN" };

function formatCertDate(iso) {
  if (!iso) return null;
  try {
    return new Date(iso).toLocaleDateString(CERT_DATE_LOCALES[lang] || "en-IN", { year: "numeric", month: "long", day: "numeric" });
  } catch (e) {
    return iso;
  }
}

// Small deterministic hash (FNV-1a) so the same learner name + the same
// completed module/course/exam always produces the same certificate ID.
function certHash(str) {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return (h >>> 0).toString(36).toUpperCase();
}

function certId(prefix, parts) {
  return `PA-${prefix}-${certHash(parts.join("|"))}`;
}

function certificateShell(bodyHtml) {
  return `
    <div class="cert-toolbar no-print">
      <button type="button" class="btn btn-primary" id="cert-print-btn">🖨️ ${escapeHtml(u("certPrintButton"))}</button>
    </div>
    ${bodyHtml}
  `;
}

function renderCertCard({ title, bodyLines, score, date, id }) {
  const name = currentUser.displayName;
  return `
    <div class="cert-page">
      <div class="cert-card">
        <div class="cert-corner cert-corner-tl"></div>
        <div class="cert-corner cert-corner-tr"></div>
        <div class="cert-corner cert-corner-bl"></div>
        <div class="cert-corner cert-corner-br"></div>
        <div class="cert-logo">🐄🩺</div>
        <div class="cert-kicker">${escapeHtml(u("certIssuerName"))}</div>
        <div class="cert-seal">🏅</div>
        <h1 class="cert-title">${escapeHtml(title)}</h1>
        <div class="cert-presented">${escapeHtml(u("certPresentedTo"))}</div>
        <div class="cert-name">${escapeHtml(name)}</div>
        <div class="cert-body">${bodyLines.map((l) => escapeHtml(l)).join("<br/>")}</div>
        <div class="cert-meta-row">
          ${score != null ? `<div class="cert-meta-item">${escapeHtml(u("certScoreLabel", { score }))}</div>` : ""}
          <div class="cert-meta-item">${escapeHtml(u("certDateLabel", { date: date || "—" }))}</div>
        </div>
        <div class="cert-id">${escapeHtml(u("certIdLabel", { id }))}</div>
      </div>
    </div>
  `;
}

function renderNotEarned(reasonText, backHash, backLabel) {
  return `
    <div class="page page-narrow no-print">
      <div class="admin-empty" style="background:white; border-radius:var(--radius); box-shadow:var(--shadow); padding:40px 24px;">
        <div style="font-size:40px; margin-bottom:10px;">🔒</div>
        <h2 style="margin:0 0 8px; color:var(--blue-900);">${escapeHtml(u("certNotEarnedTitle"))}</h2>
        <p style="margin:0 0 20px;">${escapeHtml(reasonText)}</p>
        <button type="button" class="btn btn-primary" data-nav="${backHash}">${escapeHtml(backLabel)}</button>
      </div>
    </div>
  `;
}

function wireCertificatePrint() {
  const btn = document.getElementById("cert-print-btn");
  if (btn) btn.addEventListener("click", () => window.print());
}

function renderCertificateModule(moduleId) {
  const mod = getModule(moduleId);
  if (!mod) {
    navigate("#/dashboard");
    return "";
  }
  const topbar = renderTopbar({ showBack: true, backHash: `#/module/${moduleId}`, title: t(mod.title) });

  const progress = getModuleProgress(mod);
  if (!progress.isComplete) {
    return `${topbar}${renderNotEarned(u("certNotEarnedModuleText"), `#/module/${moduleId}`, u("backToModule"))}`;
  }

  let latest = null;
  mod.lessons.forEach((lesson) => {
    const st = getLessonState(mod.id, lesson.id);
    const at = st.completedAt || st.lastAttemptAt;
    if (at && (!latest || at > latest)) latest = at;
  });

  const card = renderCertCard({
    title: u("certTitleModule"),
    bodyLines: [u("certModuleBody"), u("certModuleOfBody", { n: mod.number, title: t(mod.title) })],
    score: null,
    date: formatCertDate(latest),
    id: certId("MOD", [currentUser.displayName, moduleId]),
  });

  return `${topbar}${certificateShell(card)}`;
}

function renderCertificateCourse() {
  const topbar = renderTopbar({ showBack: true, backHash: "#/dashboard", title: u("certCourseCardTitle") });

  const overall = getOverallProgress(MODULES);
  if (!overall.isComplete) {
    return `${topbar}${renderNotEarned(u("certNotEarnedCourseText"), "#/dashboard", u("backToDashboard"))}`;
  }

  let latest = null;
  MODULES.filter((m) => m.available).forEach((mod) => {
    mod.lessons.forEach((lesson) => {
      const st = getLessonState(mod.id, lesson.id);
      const at = st.completedAt || st.lastAttemptAt;
      if (at && (!latest || at > latest)) latest = at;
    });
  });

  const card = renderCertCard({
    title: u("certTitleCourse"),
    bodyLines: [u("certCourseBody")],
    score: null,
    date: formatCertDate(latest),
    id: certId("CRS", [currentUser.displayName, "course"]),
  });

  return `${topbar}${certificateShell(card)}`;
}

function renderCertificateExam() {
  const topbar = renderTopbar({ showBack: true, backHash: "#/dashboard", title: u("examCertCardTitle") });

  const examState = getFinalExamState();
  if (!examState.passed) {
    return `${topbar}${renderNotEarned(u("certNotEarnedExamText"), "#/dashboard", u("backToDashboard"))}`;
  }

  const card = renderCertCard({
    title: u("certTitleExam"),
    bodyLines: [u("certExamBody")],
    score: examState.bestScore,
    date: formatCertDate(examState.passedAt),
    id: certId("EXM", [currentUser.displayName, "exam"]),
  });

  return `${topbar}${certificateShell(card)}`;
}

function renderCertificatesList() {
  const overall = getOverallProgress(MODULES);
  const examState = getFinalExamState();

  const courseCardClass = overall.isComplete ? "cert-list-course earned" : "cert-list-course locked";
  const courseCard = `
    <div class="${courseCardClass}">
      <div class="cert-list-course-icon">${overall.isComplete ? "🏆" : "🔒"}</div>
      <div class="cert-list-course-info">
        <h3>${escapeHtml(u("certCourseCardTitle"))}</h3>
        <p>${escapeHtml(overall.isComplete ? u("certCourseCardEarnedText") : u("certCourseCardLockedText", { done: overall.done, total: overall.total }))}</p>
      </div>
      ${
        overall.isComplete
          ? `<button type="button" class="btn btn-success" data-nav="#/certificate/course">${escapeHtml(u("certViewButton"))}</button>`
          : `<span class="status-pill inactive">${escapeHtml(u("certLockedBadge"))}</span>`
      }
    </div>
  `;

  const examCardClass = examState.passed ? "cert-list-course earned" : "cert-list-course locked";
  const examCard = `
    <div class="${examCardClass}">
      <div class="cert-list-course-icon">${examState.passed ? "🏅" : "🔒"}</div>
      <div class="cert-list-course-info">
        <h3>${escapeHtml(u("examCertCardTitle"))}</h3>
        <p>${escapeHtml(
          examState.passed
            ? u("examCertCardEarnedText", { score: examState.bestScore })
            : overall.isComplete
            ? u("examCertCardReadyText")
            : u("examCertCardLockedText")
        )}</p>
      </div>
      ${
        examState.passed
          ? `<button type="button" class="btn btn-success" data-nav="#/certificate/exam">${escapeHtml(u("certViewButton"))}</button>`
          : overall.isComplete
          ? `<button type="button" class="btn btn-primary" data-nav="#/final-exam">${escapeHtml(u("examTakeButton"))}</button>`
          : `<span class="status-pill inactive">${escapeHtml(u("certLockedBadge"))}</span>`
      }
    </div>
  `;

  const moduleRows = MODULES.filter((m) => m.available)
    .map((mod) => {
      const progress = getModuleProgress(mod);
      return `
      <div class="cert-list-lesson-row">
        <div class="cert-list-lesson-title">${escapeHtml(u("moduleLabelShort", { n: mod.number }))}: ${escapeHtml(t(mod.title))}</div>
        ${
          progress.isComplete
            ? `<button type="button" class="btn btn-outline btn-small" data-nav="#/certificate/module/${mod.id}">🎓 ${escapeHtml(u("certViewButton"))}</button>`
            : `<span class="status-pill inactive">${escapeHtml(u("lessonsCompleteMeta", { completed: progress.completed, total: progress.total }))}</span>`
        }
      </div>`;
    })
    .join("");

  return `
    ${renderTopbar({ showBack: false })}
    <div class="page">
      <div class="dash-header">
        <h1>${u("certificatesPageTitle")}</h1>
        <p>${u("certificatesPageTagline")}</p>
      </div>
      ${courseCard}
      ${examCard}
      <div class="cert-list-modules">${moduleRows}</div>
    </div>
  `;
}

// ============================================================================
// Final exam — one comprehensive exam, unlocked once every available module
// is complete. Reuses renderQuestionSet/renderQuestionReview from the lesson
// quiz flow above.
// ============================================================================
function renderFinalExamPage() {
  const topbar = renderTopbar({ showBack: true, backHash: "#/dashboard", title: u("examPageTitle") });
  if (!isCourseComplete(MODULES)) {
    return `${topbar}${renderNotEarned(u("examLockedText"), "#/dashboard", u("backToDashboard"))}`;
  }
  return `
    ${topbar}
    <div class="page page-narrow">
      <div id="exam-flow"></div>
    </div>
  `;
}

function runFinalExamFlow() {
  const flowEl = document.getElementById("exam-flow");
  if (!flowEl) return;

  function showIntro() {
    const examState = getFinalExamState();
    flowEl.innerHTML = `
      <div class="quiz-section">
        <h2>${u("examPageTitle")}</h2>
        <p class="sub">${u("examIntroText", { n: FINAL_EXAM_QUESTIONS.length, pct: FINAL_EXAM_PASS_PERCENT })}</p>
        ${examState.attempted ? `<p class="sub">${u("examPreviousBestText", { score: examState.bestScore })}</p>` : ""}
        <div class="btn-row"><button class="btn btn-primary" id="exam-start-btn">${u("examStartButton")}</button></div>
      </div>
    `;
    document.getElementById("exam-start-btn").addEventListener("click", showQuiz);
  }

  function showQuiz() {
    flowEl.innerHTML = `
      <div class="quiz-section" id="exam-quiz-section">
        <h2>${u("examPageTitle")}</h2>
        <div id="exam-quiz-body"></div>
      </div>
    `;
    const body = document.getElementById("exam-quiz-body");
    renderQuestionSet(body, FINAL_EXAM_QUESTIONS, {
      submitLabel: u("submitQuizButton"),
      onSubmit: (results) => {
        const correctCount = results.filter((r) => r.isCorrect).length;
        const scorePercent = Math.round((correctCount / results.length) * 100);
        const passed = scorePercent >= FINAL_EXAM_PASS_PERCENT;
        recordFinalExamAttempt(scorePercent, passed);
        showResult(scorePercent, passed, results);
      },
    });
  }

  function showResult(scorePercent, passed, results) {
    const actionsHtml = passed
      ? `<button class="btn btn-success" data-nav="#/certificate/exam">🎓 ${u("certViewButton")}</button>`
      : `<button class="btn btn-primary" id="exam-retry-btn">${u("examRetryButton")}</button>`;
    flowEl.innerHTML = `
      <div class="quiz-section">
        <div class="quiz-result ${passed ? "pass" : "fail"}">
          ${passed ? `<div class="confetti-row">🎉 🎊 ✨ 🎉 🎊</div>` : ""}
          <div class="score-circle"><div class="pct">${scorePercent}%</div></div>
          <h3>${passed ? u("examPassTitle") : u("examFailTitle")}</h3>
          <p>${passed ? u("examPassText") : u("examFailText", { pct: FINAL_EXAM_PASS_PERCENT })}</p>
          <div class="btn-row" style="justify-content:center;">${actionsHtml}</div>
          <div class="quiz-review">${renderQuestionReview(results)}</div>
        </div>
      </div>
    `;
    const retryBtn = document.getElementById("exam-retry-btn");
    if (retryBtn) retryBtn.addEventListener("click", showQuiz);
  }

  showIntro();
}

// ============================================================================
// Router
// ============================================================================
function parseHash() {
  const hash = location.hash || "#/";
  const parts = hash.replace(/^#\/?/, "").split("/").filter(Boolean);
  if (parts.length === 0) return { route: "welcome" };
  if (parts[0] === "welcome") return { route: "welcome" };
  if (parts[0] === "login") {
    if (parts[1] === "learner") return { route: "login", loginAs: "learner" };
    if (parts[1] === "admin") return { route: "login", loginAs: "admin" };
    return { route: "login", loginAs: null };
  }
  if (parts[0] === "change-password") return { route: "change-password" };
  if (parts[0] === "credits") return { route: "credits" };
  if (parts[0] === "dashboard") return { route: "dashboard" };
  if (parts[0] === "language") return { route: "language" };
  if (parts[0] === "certificates") return { route: "certificates" };
  if (parts[0] === "certificate" && parts[1] === "course") return { route: "certificate-course" };
  if (parts[0] === "certificate" && parts[1] === "exam") return { route: "certificate-exam" };
  if (parts[0] === "certificate" && parts[1] === "module" && parts[2]) {
    return { route: "certificate-module", moduleId: parts[2] };
  }
  if (parts[0] === "final-exam") return { route: "final-exam" };
  if (parts[0] === "admin") {
    if (parts[1] === "learner" && parts[2]) return { route: "admin-learner", learnerId: parts[2] };
    if (parts[1] === "new-learner") return { route: "admin-new-learner" };
    return { route: "admin" };
  }
  if (parts[0] === "module" && parts[1]) {
    if (parts[2] === "lesson" && parts[3]) {
      return { route: "lesson", moduleId: parts[1], lessonId: parts[3] };
    }
    if (parts[2] === "complete") {
      return { route: "complete", moduleId: parts[1] };
    }
    return { route: "module", moduleId: parts[1] };
  }
  return { route: "dashboard" };
}

let lastNonLanguageHash = "#/dashboard";

function render() {
  const parsed = parseHash();

  // The public landing page: always renders, signed in or not.
  if (parsed.route === "welcome") {
    root.innerHTML = renderLandingPage();
    wireLandingPage();
    return;
  }

  // Login page: if already signed in, bounce to the right home instead.
  if (parsed.route === "login") {
    if (currentUser) {
      navigate(currentUser.role === "admin" ? "#/admin" : "#/dashboard");
      return;
    }
    root.innerHTML = renderLoginPage(parsed.loginAs);
    wireLoginPage(parsed.loginAs);
    return;
  }

  // Every other route requires a session.
  if (!currentUser) {
    navigate("#/login");
    return;
  }

  // First login after provisioning/reset: force a real password before anything else.
  if (currentUser.mustChangePassword || parsed.route === "change-password") {
    root.innerHTML = renderChangePasswordPage();
    wireChangePasswordPage();
    return;
  }

  // Admin-only routes.
  if ((parsed.route === "admin" || parsed.route === "admin-learner" || parsed.route === "admin-new-learner") && currentUser.role !== "admin") {
    navigate("#/dashboard");
    return;
  }

  // Course/certificate/exam routes are learner-only (admins have no lesson
  // progress of their own).
  if (
    (parsed.route === "dashboard" ||
      parsed.route === "module" ||
      parsed.route === "lesson" ||
      parsed.route === "complete" ||
      parsed.route === "credits" ||
      parsed.route === "certificates" ||
      parsed.route === "certificate-course" ||
      parsed.route === "certificate-exam" ||
      parsed.route === "certificate-module" ||
      parsed.route === "final-exam") &&
    currentUser.role === "admin"
  ) {
    navigate("#/admin");
    return;
  }

  // The final exam only unlocks once every module is complete.
  if (parsed.route === "final-exam" && !isCourseComplete(MODULES)) {
    navigate("#/dashboard");
    return;
  }

  // Force the language picker until a language is chosen.
  if (!lang && parsed.route !== "language") {
    root.innerHTML = renderLanguagePicker(false);
    wireLanguagePicker(false, null);
    return;
  }

  if (parsed.route !== "language") {
    lastNonLanguageHash = location.hash || "#/dashboard";
  }

  let html = "";
  let afterRender = null;

  switch (parsed.route) {
    case "language":
      html = renderLanguagePicker(!!lang);
      break;
    case "dashboard":
      html = renderDashboard();
      break;
    case "credits":
      html = renderCreditsPage();
      break;
    case "module":
      html = renderModulePage(parsed.moduleId);
      break;
    case "lesson": {
      html = renderLessonPage(parsed.moduleId, parsed.lessonId);
      const lesson = getLesson(parsed.moduleId, parsed.lessonId);
      if (lesson) afterRender = () => afterLessonRender(parsed.moduleId, lesson);
      break;
    }
    case "complete":
      html = renderCompletionPage(parsed.moduleId);
      break;
    case "certificates":
      html = renderCertificatesList();
      break;
    case "certificate-course":
      html = renderCertificateCourse();
      break;
    case "certificate-exam":
      html = renderCertificateExam();
      break;
    case "certificate-module":
      html = renderCertificateModule(parsed.moduleId);
      break;
    case "final-exam":
      html = renderFinalExamPage();
      afterRender = runFinalExamFlow;
      break;
    case "admin":
      html = admin.renderAdminDashboard({ t, u, lang, escapeHtml, renderTopbar });
      afterRender = () => admin.wireAdminDashboard({ t, u, lang, escapeHtml, renderTopbar, navigate });
      break;
    case "admin-learner":
      html = admin.renderLearnerDetail(parsed.learnerId, { t, u, lang, escapeHtml, renderTopbar });
      afterRender = () => admin.wireLearnerDetail(parsed.learnerId, { t, u, lang, escapeHtml, renderTopbar, navigate });
      break;
    case "admin-new-learner":
      html = admin.renderNewLearnerForm({ t, u, lang, escapeHtml, renderTopbar });
      afterRender = () => admin.wireNewLearnerForm({ t, u, lang, escapeHtml, renderTopbar, navigate });
      break;
    default:
      if (currentUser.role === "admin") {
        html = admin.renderAdminDashboard({ t, u, lang, escapeHtml, renderTopbar });
        afterRender = () => admin.wireAdminDashboard({ t, u, lang, escapeHtml, renderTopbar, navigate });
      } else {
        html = renderDashboard();
      }
  }

  if (html) {
    root.innerHTML = html;
    if (parsed.route === "language") {
      wireLanguagePicker(!!lang, lastNonLanguageHash);
    }
    if (parsed.route.startsWith("certificate-")) {
      wireCertificatePrint();
    }
    wireTopbarLogout();
    if (afterRender) afterRender();
  }
}

// Event delegation for all [data-nav] elements
document.addEventListener("click", (e) => {
  const navEl = e.target.closest("[data-nav]");
  if (navEl) {
    e.preventDefault();
    navigate(navEl.getAttribute("data-nav"));
  }
});

// ============================================================================
// Boot: check for an existing session before the first render, since (unlike
// the language choice) we can't know synchronously whether the visitor is
// signed in.
// ============================================================================
async function bootstrap() {
  try {
    const res = await api.session();
    currentUser = res.user;
    if (currentUser.role !== "admin") {
      try {
        const p = await api.myProgress();
        setProgressCache(p.progress);
      } catch (e) {
        setProgressCache({});
      }
    }
  } catch (e) {
    currentUser = null;
  }
  render();
}

window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", bootstrap);
if (document.readyState !== "loading") bootstrap();
