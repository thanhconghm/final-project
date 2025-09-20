// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfNIe59hlpFrZ1W2-9-MjyoMPidX59h0c",
  authDomain: "wiki-b6746.firebaseapp.com",
  projectId: "wiki-b6746",
  storageBucket: "wiki-b6746.firebasestorage.app",
  messagingSenderId: "468191299211",
  appId: "1:468191299211:web:baae7ffb295af39fc3768e",
  measurementId: "G-K8ZFJM0HD8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);