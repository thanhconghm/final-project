import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDfNIe59hlpFrZ1W2-9-MjyoMPidX59h0c",
  authDomain: "wiki-b6746.firebaseapp.com",
  projectId: "wiki-b6746",
  storageBucket: "wiki-b6746.firebasestorage.app",
  messagingSenderId: "468191299211",
  appId: "1:468191299211:web:baae7ffb295af39fc3768e",
  measurementId: "G-K8ZFJM0HD8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export function googleSignIn() { return signInWithPopup(auth, provider); }
export function googleSignOut() { return signOut(auth); }
export function listenToAuthChanges(callback) { return onAuthStateChanged(auth, callback); }

export async function saveUserData(uid, data) {
  if (!uid) return;
  await setDoc(doc(db, "users", uid), data, { merge: true });
}

export async function loadUserData(uid) {
  if (!uid) return {};
  const snap = await getDoc(doc(db, "users", uid));
  return snap.exists() ? snap.data() : {};
}
