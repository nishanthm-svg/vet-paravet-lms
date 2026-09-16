// ============================================================================
// Firebase project init — Pashu Arogya Academy runs entirely client-side,
// using Firebase's free Spark plan for real accounts (Authentication) and
// per-learner progress (Firestore). No server to run or maintain. Loaded
// once here; api.js is the only other file that touches the Firebase SDK
// directly.
//
// This is its own Firebase project ("pashu-arogya-academy"), separate from
// any other course's, so accounts never mix. Firestore security rules
// (role-based: learners can only read/write their own docs, admins —
// verified via a users/{uid}.role lookup — can read/write any learner's)
// are already published on the project.
//
// Offline: Firestore's persistent local cache (IndexedDB) means an
// already-logged-in learner can open lessons, take quizzes, and view
// certificates with no signal — reads come from the on-device cache and
// writes queue there, syncing automatically the next time the device is
// back online. A device's first login still needs a connection, same as
// Auth generally.
// ============================================================================
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import {
  initializeFirestore,
  persistentLocalCache,
  persistentMultipleTabManager,
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

export const firebaseConfig = {
  apiKey: "AIzaSyAdTvBZ7Me87Jjw6y3wquZr0T2_Ri8Pxlg",
  authDomain: "pashu-arogya-academy.firebaseapp.com",
  projectId: "pashu-arogya-academy",
  storageBucket: "pashu-arogya-academy.firebasestorage.app",
  messagingSenderId: "777049649176",
  appId: "1:777049649176:web:e648c62c182a8aea61936d",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = initializeFirestore(firebaseApp, {
  localCache: persistentLocalCache({ tabManager: persistentMultipleTabManager() }),
});
