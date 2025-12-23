// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfKlYwEzBRD51f6xdEzQBnQTt2Si1XAbQ",
  authDomain: "barista-2025.firebaseapp.com",
  projectId: "barista-2025",
  storageBucket: "barista-2025.firebasestorage.app",
  messagingSenderId: "612878301578",
  appId: "1:612878301578:web:a33ee6d1327957abe3f073",
  measurementId: "G-LRSWG6L7X8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let analytics;
// Only initialize analytics in the browser
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

export { app, analytics, auth, storage, db };
