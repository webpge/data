import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot, doc, updateDoc, deleteDoc, query, orderBy, where, getDocs, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-analytics.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-storage.js";

// ===========================================
//       نظام الحماية (Security Layer)
// ===========================================
const allowedDomains = ["webpge.github.io", "algreb51-cloud.github.io", "daqqafamily-5b678.firebaseapp.com", "daqqafamily-5b678.web.app", "localhost", "127.0.0.1"];
if (!allowedDomains.includes(window.location.hostname)) {
    document.documentElement.innerHTML = "<div style='height:100vh;background:#000;color:red;display:flex;justify-content:center;align-items:center;font-family:sans-serif;font-weight:bold;font-size:24px;direction:rtl;'>غير مصرح بتشغيل النظام خارج النطاق الرسمي<br><span style='font-size:16px;color:#ccc;margin-top:10px;'>Unauthorized Domain Access</span></div>";
    // إيقاف التنفيذ فوراً
    throw new Error("Security Alert: Unauthorized Domain Access");
}

const firebaseConfig = {
    apiKey: "AIzaSyCSGQ3byWdeWddsjDL9Dw53xm8ArouLZL0",
    authDomain: "daqqafamily-5b678.firebaseapp.com",
    projectId: "daqqafamily-5b678",
    storageBucket: "daqqafamily-5b678.firebasestorage.app",
    messagingSenderId: "24003001925",
    appId: "1:24003001925:web:6f2c5ec0321df031b26d2c",
    measurementId: "G-RFRYEB56HQ"
};

Object.freeze(firebaseConfig); // حماية الإعدادات من التعديل
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const appId = "daqqafamily-5b678";
export const fs = { collection, addDoc, onSnapshot, doc, updateDoc, deleteDoc, query, orderBy, where, getDocs, setDoc, getDoc };

window.db = db;
window.fs = fs;
window.appId = appId;
window.auth = auth;
window.analytics = analytics;
window.storage = storage;

export { signInWithEmailAndPassword, signOut, onAuthStateChanged };
