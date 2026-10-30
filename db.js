
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";

import {
  initializeAppCheck,
  ReCaptchaEnterpriseProvider
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app-check.js";

import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  where,
  getDocs,
  setDoc,
  getDoc
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

import {
  getAnalytics
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-analytics.js";

import {
  getStorage
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-storage.js";


// ===========================================
// 1. حماية نطاق الموقع
// ===========================================

const allowedDomains = [
  "webpge.github.io"
];

if (!allowedDomains.includes(window.location.hostname)) {

  document.documentElement.innerHTML = `
    <div style="
      height:100vh;
      background:#000;
      color:red;
      display:flex;
      justify-content:center;
      align-items:center;
      font-family:sans-serif;
      font-weight:bold;
      font-size:24px;
      direction:rtl;
      text-align:center;
      padding:20px;
    ">
      غير مصرح بتشغيل النظام خارج النطاق الرسمي
      <br>
      Unauthorized Domain Access
    </div>
  `;

  throw new Error("Security Alert: Unauthorized Domain Access");
}


// ===========================================
// 2. إعدادات Firebase
// ===========================================

const firebaseConfig = {

  apiKey: "AIzaSyCSGQ3byWdeWddsjDL9Dw53xm8ArouLZ0",

  authDomain: "daqqafamily-5b678.firebaseapp.com",

  projectId: "daqqafamily-5b678",

  storageBucket: "daqqafamily-5b678.firebasestorage.app",

  messagingSenderId: "24003001925",

  appId: "1:24003001925:web:6f2c5ec0321df031b26d2c",

  measurementId: "G-RFRYEB56HQ"

};

Object.freeze(firebaseConfig);


// ===========================================
// 3. تشغيل Firebase
// ===========================================

const app = initializeApp(firebaseConfig);


// ===========================================
// 4. تفعيل Firebase App Check
// ===========================================

// ملاحظة: يجب أن يكون مفتاح ReCaptcha Enterprise مضافاً في:
// Google Cloud Console > reCAPTCHA Enterprise > إنشاء مفتاح للنوع "Website"
// Firebase Console > App Check > تسجيل التطبيق

let appCheck = null;

try {
  appCheck = initializeAppCheck(app, {
    provider: new ReCaptchaEnterpriseProvider(
      "6LeIFgguAAAAAMAdWhyN3XjO3mAhqAxsNYGm4C2U"
    ),
    isTokenAutoRefreshEnabled: true
  });

  console.log("✅ Firebase App Check تم تفعيله بنجاح");

} catch (error) {
  console.error("❌ خطأ في تفعيل App Check:", error.message);
}


// ===========================================
// 5. تشغيل خدمات Firebase
// ===========================================

const analytics = getAnalytics(app);

export const db = getFirestore(app);

export const auth = getAuth(app);

export const storage = getStorage(app);


// ===========================================
// 6. تعريف معرف المشروع
// ===========================================

export const appId = "daqqafamily-5b678";


// ===========================================
// 7. اختصارات Firestore
// ===========================================

export const fs = {

  collection,
  addDoc,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  where,
  getDocs,
  setDoc,
  getDoc

};


// ===========================================
// 8. إتاحة الخدمات لبقية ملفات الموقع
// ===========================================

window.db = db;

window.fs = fs;

window.appId = appId;

window.auth = auth;

window.analytics = analytics;

window.storage = storage;

window.firebaseAppCheck = appCheck;


// ===========================================
// 9. تصدير وظائف تسجيل الدخول
// ===========================================

export {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
};
