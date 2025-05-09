// src/firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBCBdN-fW-n9PXQQbFmxkKaUpIeq1kuJ0A",
  authDomain: "tutorbase-a8bed.firebaseapp.com",
  databaseURL: "https://itdemo-push-notification.firebaseio.com",
  projectId: "tutorbase-a8bed",
  storageBucket: "tutorbase-a8bed.appspot.com",
  messagingSenderId: "875092776251",
  appId: "1:875092776251:web:3c02ed1ef021a6f93b131e",
  measurementId: "G-N8ZX6BZPZ9",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
